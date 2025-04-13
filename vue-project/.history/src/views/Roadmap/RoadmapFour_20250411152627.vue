<script setup>
import SnowEffect from "@/utils/cesiumCtrl/snow";
import RainEffect from "@/utils/cesiumCtrl/rain";
import FogEffect from "@/utils/cesiumCtrl/fog";
import { onMounted, onUnmounted, ref, onBeforeMount, watch } from "vue";
import * as Cesium from "cesium";
import { Color } from "cesium";
import MeasureTool from "@/utils/cesiumCtrl/measure.js";
import DrawTool from "@/utils/cesiumCtrl/drawGraphic";

// 粒子效果
const checked1 = ref(false); // 下雪
const checked2 = ref(false); // 下雨
const checked3 = ref(false); // 大雾

// 粒子效果实例
let snow = null;
let rain = null;
let fog = null;
let viewer = ref(null); // 将viewer定义为全局变量以便其他函数使用
let dataSource1 = null; // 用于存储加载的窑湾GeoJSON数据源
let dataSource2 = null; // 用于存储加载的马陵山GeoJSON数据源
const measure = ref(null);

onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlM2IwYzY5My0wYTNlLTRlOTUtOWFhNi00ZjI0ZTljOWVkYmUiLCJpZCI6Mjg0MTYzLCJpYXQiOjE3NDE5MTkyODN9.mbpcdK5ob1alfcAnl6zE4k5xzznEd1FQeFTvBtxTv4E";

  // 自定义图层
  const esri = new Cesium.ArcGisMapServerImageryProvider({
    url: "https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer",
    enablePickFeatures: false,
  });

  // 返回的是笛卡尔坐标   经纬度转笛卡尔坐标
  const Cartesian = Cesium.Cartesian3.fromDegrees(118.34251, 34.20271, 4000);
  console.log(Cartesian, "Cartesian");

  // viewer是所有Api的开始
  viewer = new Cesium.Viewer("cesiumContainer", {
    contextOptions: {
      requestWebgl2: true, // 强制使用 WebGL 2.0
      webgl: {
        failIfMajorPerformanceCaveat: false,
      },
    },
    animation: true, //是否显示动画控件
    baseLayerPicker: true, //是否显示图层选择控件
    geocoder: true, //是否显示地名查找控件
    timeline: false, //是否显示时间线控件
    sceneModePicker: true, //是否显示投影方式控件
    navigationHelpButton: true, //是否显示帮助信息控件
    fullscreenButton: true, //是否显示全屏按钮
    infoBox: true, //是否显示点击要素之后显示的信息
    homeButton: true, //是否显示Home按钮
    // imageryProvider:esri,//自定义图层
    terrainProvider: Cesium.createWorldTerrain({
      requestWaterMask: true, //水面特效
      requestVertexNormals: true,
    }), //地形图层也就是三维地图
  });

  // 初始化测量工具
  measure.value = new MeasureTool(viewer);

  // 初始化绘画工具
  measure.value = new DrawTool(viewer);

  // 自定义信息框样式
  viewer.infoBox.frame.sandbox =
    "allow-same-origin allow-top-navigation allow-pointer-lock allow-popups allow-forms allow-scripts";
  viewer.infoBox.frame.style =
    "border: none; width: 100%; height: auto !important";

  //相机
  viewer.camera.setView({
    destination: Cartesian, //初始位置
    orientation: {
      //初始方向
      heading: Cesium.Math.toRadians(-60), //初始方向
      pitch: Cesium.Math.toRadians(-50), //初始方向
      roll: Cesium.Math.toRadians(0),
    },
  });

  // 时间格式化
  viewer.animation.viewModel.timeFormatter = function (datetime, viewModel) {
    const julianDT = new Cesium.JulianDate();
    Cesium.JulianDate.addHours(datetime, 8, julianDT);
    let gregorianDate = Cesium.JulianDate.toGregorianDate(julianDT);
    let hour = gregorianDate.hour + "";
    let minute = gregorianDate.minute + "";
    let second = gregorianDate.second + "";
    return `${hour.padStart(2, "0")}:${minute.padStart(
      2,
      "0"
    )}:${second.padStart(2, "0")}`;
  };
  viewer.animation.viewModel.dateFormatter = function (datetime, viewModel) {
    const julianDT = new Cesium.JulianDate();
    Cesium.JulianDate.addHours(datetime, 8, julianDT);
    let gregorianDate = Cesium.JulianDate.toGregorianDate(julianDT);
    return `${gregorianDate.year}年${gregorianDate.month}月${gregorianDate.day}日`;
  };

  // 地形夸张
  viewer.scene.globe.terrainExaggeration = 2;

  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(118.34251, 34.20271),
    label: {
      text: "徐州窑湾及马陵山",
      translucencyByDistance: new Cesium.NearFarScalar(1.5e2, 1.0, 1.5e8, 0.0),
    },
  });

  // 粒子效果
  // 下雪
  snow = new SnowEffect(viewer, {
    snowSize: 0.02, // 雪花大小
    snowSpeed: 60.0, // 雪速
  });
  snow.show(false);

  // 下雨
  rain = new RainEffect(viewer, {
    tiltAngle: -0.2, //倾斜角度
    rainSize: 1.0, // 雨大小
    rainSpeed: 120.0, // 雨速
  });
  rain.show(false);

  // 大雾
  fog = new FogEffect(viewer, {
    visibility: 0.2,
    color: new Color(0.8, 0.8, 0.8, 0.3),
  });
  fog.show(false);

  // 初始化实习路线相关变量
  let practiceRouteEntity1 = null; // 窑湾
  let practiceRouteEntity2 = null; // 马陵山

  // 显示实习路线函数
  window.showPracticeRoute1 = function () {
    // 如果路线已存在，先移除
    removePracticeRoute1();

    // 实习路线坐标数据
    const routeCoordinates = [
      [118.06746806300009, 34.173474334000048],
      [118.06735454, 34.173734275000072],
      [118.06720767000002, 34.173998544000085],
      [118.06712050600004, 34.174169723000034],
      [118.06708084000002, 34.174219485000037],
      [118.06692710900006, 34.174233303000051],
      [118.06687387900001, 34.174186831000043],
      [118.06678721900005, 34.174171951000062],
      [118.06672828400008, 34.174181778000047],
      [118.06673248900006, 34.17427794200006],
      [118.066726743, 34.174355569000056],
      [118.066892962, 34.174366317000079],
      [118.0669010900001, 34.174330861000044],
      [118.066922998, 34.174327654000081],
      [118.06706415300005, 34.174336777000065],
      [118.06715586100006, 34.174364277000052],
      [118.06723061900004, 34.174349496000048],
      [118.06726602800006, 34.174295585000038],
      [118.06726588400011, 34.174294565000082],
      [118.06730094, 34.174261297000044],
      [118.06735432300002, 34.17424939700004],
      [118.067313141, 34.174193875000071],
      [118.0672867510001, 34.174129226000048],
      [118.06728418200009, 34.17412556000005],
      [118.06723502, 34.174047076000079],
      [118.0672336770001, 34.174044472000048],
      [118.06723460600006, 34.174010195000051],
      [118.067238213, 34.174008505000074],
      [118.06738959200004, 34.173751500000037],
      [118.067458053, 34.173607205000053],
      [118.06752322, 34.173495570000057],
    ];

    // 将坐标转换为Cesium Cartesian3数组
    const positions = routeCoordinates.map((coord) =>
      Cesium.Cartesian3.fromDegrees(coord[0], coord[1])
    );

    // 添加路线实体
    practiceRouteEntity1 = viewer.entities.add({
      name: "实习路线",
      polyline: {
        positions: positions,
        width: 5,
        material: new Cesium.PolylineGlowMaterialProperty({
          glowPower: 0.2,
          color: Cesium.Color.YELLOW,
        }),
        clampToGround: true,
      },
    });

    // 添加起点和终点标记
    const startPoint = routeCoordinates[0];
    const endPoint = routeCoordinates[routeCoordinates.length - 1];

    viewer.entities.add({
      name: "起点",
      position: Cesium.Cartesian3.fromDegrees(startPoint[0], startPoint[1]),
      point: {
        pixelSize: 15,
        color: Cesium.Color.GREEN,
        outlineColor: Cesium.Color.WHITE,
        outlineWidth: 2,
      },
      label: {
        text: "起点",
        font: "14pt sans-serif",
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        outlineWidth: 2,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        pixelOffset: new Cesium.Cartesian2(0, -10),
      },
    });

    viewer.entities.add({
      name: "终点",
      position: Cesium.Cartesian3.fromDegrees(endPoint[0], endPoint[1]),
      point: {
        pixelSize: 15,
        color: Cesium.Color.RED,
        outlineColor: Cesium.Color.WHITE,
        outlineWidth: 2,
      },
      label: {
        text: "终点",
        font: "14pt sans-serif",
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        outlineWidth: 2,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        pixelOffset: new Cesium.Cartesian2(0, -10),
      },
    });

    // 缩放到路线范围
    viewer.zoomTo(practiceRouteEntity1);
  };

  // 显示实习路线函数
  window.showPracticeRoute2 = function () {
    // 如果路线已存在，先移除
    removePracticeRoute2();

    // 实习路线坐标数据
    const routeCoordinates = [
      [118.34882978500002, 34.194785840000065],
      [118.34820393200005, 34.194771022000054],
      [118.34792259000005, 34.194800784000051],
      [118.34793144300011, 34.194961730000045],
      [118.34794398100007, 34.19507096500007],
      [118.34794886300006, 34.195217769000067],
      [118.34789117500009, 34.195386132000067],
      [118.34759722900003, 34.195386141000085],
      [118.34702396400007, 34.195367318000081],
      [118.3468627200001, 34.195410883000079],
      [118.34684417700009, 34.19550877100005],
      [118.3461154900001, 34.195527958000071],
      [118.34509465400004, 34.195548777000056],
      [118.34452218800004, 34.195552967000083],
      [118.34402651300002, 34.195564436000041],
      [118.34348051500001, 34.195602392000069],
      [118.34289071300009, 34.196103589000074],
      [118.34281463100001, 34.196517833000087],
      [118.34286330900011, 34.196751420000055],
      [118.342044139, 34.196706685000038],
      [118.34173076100001, 34.197061044000066],
      [118.34213601300007, 34.197762500000067],
      [118.34223254400001, 34.19837152100007],
      [118.34204368000007, 34.199244844000077],
      [118.342983785, 34.199340111000083],
      [118.34208714800002, 34.200356937000038],
      [118.341860075, 34.200698593000084],
      [118.34257702600007, 34.200991375000058],
      [118.34263950900004, 34.201345299000081],
      [118.34285013100009, 34.201530274000049],
      [118.34375327200007, 34.201686368000082],
      [118.34429880200003, 34.202242597000065],
      [118.34371270300005, 34.20243147900004],
      [118.34366942200006, 34.20259752000004],
      [118.343450512, 34.202689999000086],
      [118.34296931600011, 34.202681014000063],
      [118.34276952000005, 34.202672025000084],
      [118.34249992900004, 34.202753591000089],
      [118.34244789400009, 34.202851821000081],
      [118.34228121500007, 34.202845642000057],
      [118.341942324, 34.202629293000086],
      [118.34166288900008, 34.202176793000035],
      [118.34152043800009, 34.20175078200009],
      [118.3415198350001, 34.201743056000055],
      [118.34154121800009, 34.200920272000076],
      [118.341549773, 34.200920271000086],
      [118.34172765700009, 34.200625918000071],
      [118.34120811100001, 34.200543465000067],
      [118.34087179300002, 34.200529806000077],
      [118.34043018500006, 34.200320257000044],
      [118.34029076900003, 34.199978775000034],
      [118.34024948000001, 34.199946585000077],
      [118.34023300400008, 34.199933741000052],
      [118.34020833300008, 34.199914506000084],
      [118.34016732600003, 34.199882537000065],
      [118.33980533300007, 34.199470579000035],
      [118.33913080500008, 34.199135086000069],
      [118.33754887800001, 34.198933453000052],
      [118.3369021630001, 34.198773657000061],
      [118.33693877200005, 34.198759186000075],
      [118.33675063400005, 34.198048395000058],
      [118.33808244400007, 34.19783981900008],
      [118.33676118000005, 34.197784638000087],
      [118.3364068090001, 34.196425095000052],
      [118.336250425, 34.195707850000076],
      [118.33737973100006, 34.19552436400005],
      [118.33809332700002, 34.195938199000068],
      [118.33902671800001, 34.196414025000081],
      [118.34008294300008, 34.196959269000047],
      [118.34071361000008, 34.197198760000049],
      [118.34158429600006, 34.197131096000078],
      [118.34193170100002, 34.196651736000035],
      [118.34273296100002, 34.196627500000034],
      [118.342771997, 34.196080348000066],
      [118.34329899000011, 34.195571633000043],
      [118.344094262, 34.195422416000042],
      [118.34475520800004, 34.195450592000043],
      [118.34587463000003, 34.195422300000075],
      [118.34674353000003, 34.195422238000049],
      [118.3469524090001, 34.195911608000074],
      [118.347269955, 34.195967937000034],
      [118.34765337700003, 34.195928067000068],
      [118.34764778100009, 34.195659896000052],
      [118.34761932700007, 34.195432846000074],
      [118.34791881900003, 34.195436010000037],
    ];

    // 将坐标转换为Cesium Cartesian3数组
    const positions = routeCoordinates.map((coord) =>
      Cesium.Cartesian3.fromDegrees(coord[0], coord[1])
    );

    // 添加路线实体
    practiceRouteEntity2 = viewer.entities.add({
      name: "实习路线",
      polyline: {
        positions: positions,
        width: 5,
        material: new Cesium.PolylineGlowMaterialProperty({
          glowPower: 0.2,
          color: Cesium.Color.YELLOW,
        }),
        clampToGround: true,
      },
    });

    // 添加起点和终点标记
    const startPoint = routeCoordinates[0];
    const endPoint = routeCoordinates[routeCoordinates.length - 1];

    viewer.entities.add({
      name: "起点",
      position: Cesium.Cartesian3.fromDegrees(startPoint[0], startPoint[1]),
      point: {
        pixelSize: 15,
        color: Cesium.Color.GREEN,
        outlineColor: Cesium.Color.WHITE,
        outlineWidth: 2,
      },
      label: {
        text: "起点",
        font: "14pt sans-serif",
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        outlineWidth: 2,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        pixelOffset: new Cesium.Cartesian2(0, -10),
      },
    });

    viewer.entities.add({
      name: "终点",
      position: Cesium.Cartesian3.fromDegrees(endPoint[0], endPoint[1]),
      point: {
        pixelSize: 15,
        color: Cesium.Color.RED,
        outlineColor: Cesium.Color.WHITE,
        outlineWidth: 2,
      },
      label: {
        text: "终点",
        font: "14pt sans-serif",
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        outlineWidth: 2,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        pixelOffset: new Cesium.Cartesian2(0, -10),
      },
    });

    // 缩放到路线范围
    viewer.zoomTo(practiceRouteEntity2);
  };

  // 移除实习路线函数
  window.removePracticeRoute1 = function () {
    // 移除路线实体
    if (practiceRouteEntity1) {
      viewer.entities.remove(practiceRouteEntity1);
      practiceRouteEntity1 = null;
    }

    // 移除起点和终点标记
    const entities = viewer.entities.values;
    for (let i = entities.length - 1; i >= 0; i--) {
      if (entities[i].name === "起点" || entities[i].name === "终点") {
        viewer.entities.remove(entities[i]);
      }
    }
  };

  window.removePracticeRoute2 = function () {
    // 移除路线实体
    if (practiceRouteEntity2) {
      viewer.entities.remove(practiceRouteEntity2);
      practiceRouteEntity2 = null;
    }

    // 移除起点和终点标记
    const entities = viewer.entities.values;
    for (let i = entities.length - 1; i >= 0; i--) {
      if (entities[i].name === "起点" || entities[i].name === "终点") {
        viewer.entities.remove(entities[i]);
      }
    }
  };

  // 初始化测量工具
  measure.value = new MeasureTool(viewer);
});

onBeforeMount(() => {
  if (viewer.value) {
    viewer.value.scene.terrainProvider = new Cesium.EllipsoidTerrainProvider(
      {}
    );
  }
});

// 测距
const onLineMeasure = () => {
  measure.value.drawLineMeasureGraphics({
    clampToGround: true,
    callback: (e) => {
      console.log("----", e);
    },
  });
};

// 测面积
const onAreaMeasure = () => {
  measure.value.drawAreaMeasureGraphics({
    clampToGround: true,
    callback: () => {},
  });
};

// 三角量测
const onTrianglesMeasure = () => {
  measure.value.drawTrianglesMeasureGraphics({
    callback: () => {},
  });
};

// 加载GeoJSON标注点
const loadGeoJSONPoints1 = async () => {
  try {
    // 清除已有的数据源
    if (dataSource1) {
      viewer.dataSources.remove(dataSource1);
    }

    // 加载GeoJSON文件
    dataSource1 = await Cesium.GeoJsonDataSource.load(
      "/json/roadmapThree1.geojson"
    );

    // 添加到viewer
    await viewer.dataSources.add(dataSource1);

    // 自定义每个实体的样式
    const entities = dataSource1.entities.values;
    for (let i = 0; i < entities.length; i++) {
      const entity = entities[i];
      const properties = entity.properties;

      // 设置点样式
      entity.point = {
        pixelSize: 15,
        color: Cesium.Color.fromCssColorString("#FF5722"), // 橙色
        outlineColor: Cesium.Color.WHITE,
        outlineWidth: 2,
        heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
      };

      // 设置地质点标签样式
      if (properties && properties.Image) {
        entity.label = {
          text: properties.Image.getValue(),
          font: "bold 14pt 微软雅黑",
          style: Cesium.LabelStyle.FILL_AND_OUTLINE,
          fillColor: Cesium.Color.fromCssColorString("#4A2C15"),
          outlineColor: Cesium.Color.WHITE,
          outlineWidth: 3,
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
          pixelOffset: new Cesium.Cartesian2(0, -15),
          heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
          translucencyByDistance: new Cesium.NearFarScalar(
            1.5e2,
            1.0,
            1.5e8,
            0.0
          ),
          scaleByDistance: new Cesium.NearFarScalar(500, 1.0, 5000, 0.5),
        };
      }

      // 设置点击后的信息框内容 - 丰富地质信息展示
      if (properties) {
        const image = properties.Image
          ? properties.Image.getValue()
          : "未命名地质点";
        const detail = properties.Detail
          ? properties.Detail.getValue()
          : "暂无详细描述";
        const latitude = properties.Latitude
          ? properties.Latitude.getValue()
          : "未知";
        const longitude = properties.Longitude
          ? properties.Longitude.getValue()
          : "未知";

        // 创建照片路径 - 根据你的实际路径调整
        const photoPath = `/images/RoadmapThree/${image}.jpg`;

        console.log("photoPath", photoPath);

        // 创建HTML内容用于信息框
        const description = `
    <div style="font-family: '微软雅黑', sans-serif; max-width: 450px;">
      <h2 style="color: #FF5722; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-bottom: 10px;">${image}</h2>
      <div style="margin-bottom: 10px;">
        <strong>地理位置:</strong> 纬度 ${latitude}, 经度 ${longitude}
      </div>

      <!-- 照片展示区域 -->
      <div style="margin: 10px 0; text-align: center; min-height: 50px;">
        <img
          src="${photoPath}"
          style="max-width: 100%; max-height: 200px; border-radius: 5px; border: 1px solid #ddd; display: block;"
          alt="${image}地质照片"
        >
      </div>

      <div style="background-color: #000000; padding: 10px; border-radius: 5px; border-left: 4px solid #FF5722;">
        <strong style="color: #fff;">地质特征描述:</strong>
        <p style="margin-top: 5px; line-height: 1.5; color: #ddd;">${detail}</p>
      </div>
    </div>
  `;

        entity.description = description;
      }
    }

    // 缩放到数据范围
    viewer.zoomTo(dataSource1);

    return true;
  } catch (error) {
    console.error("加载GeoJSON失败:", error);
    return false;
  }
};

const loadGeoJSONPoints2 = async () => {
  try {
    // 清除已有的数据源
    if (dataSource2) {
      viewer.dataSources.remove(dataSource2);
    }

    // 加载GeoJSON文件
    dataSource2 = await Cesium.GeoJsonDataSource.load(
      "/json/roadmapThree2.geojson"
    );

    // 添加到viewer
    await viewer.dataSources.add(dataSource2);

    // 自定义每个实体的样式
    const entities = dataSource2.entities.values;
    for (let i = 0; i < entities.length; i++) {
      const entity = entities[i];
      const properties = entity.properties;

      // 设置点样式
      entity.point = {
        pixelSize: 15,
        color: Cesium.Color.fromCssColorString("#FF5722"), // 橙色
        outlineColor: Cesium.Color.WHITE,
        outlineWidth: 2,
        heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
      };

      // 设置地质点标签样式
      if (properties && properties.Image) {
        entity.label = {
          text: properties.Image.getValue(),
          font: "bold 14pt 微软雅黑",
          style: Cesium.LabelStyle.FILL_AND_OUTLINE,
          fillColor: Cesium.Color.fromCssColorString("#4A2C15"),
          outlineColor: Cesium.Color.WHITE,
          outlineWidth: 3,
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
          pixelOffset: new Cesium.Cartesian2(0, -15),
          heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
          translucencyByDistance: new Cesium.NearFarScalar(
            1.5e2,
            1.0,
            1.5e8,
            0.0
          ),
          scaleByDistance: new Cesium.NearFarScalar(500, 1.0, 5000, 0.5),
        };
      }

      // 设置点击后的信息框内容 - 丰富地质信息展示
      if (properties) {
        const image = properties.Image
          ? properties.Image.getValue()
          : "未命名地质点";
        const detail = properties.Detail
          ? properties.Detail.getValue()
          : "暂无详细描述";
        const latitude = properties.Latitude
          ? properties.Latitude.getValue()
          : "未知";
        const longitude = properties.Longitude
          ? properties.Longitude.getValue()
          : "未知";

        // 创建照片路径 - 根据你的实际路径调整
        const photoPath = `/images/RoadmapThree/${image}.jpg`;

        console.log("photoPath", photoPath);

        // 创建HTML内容用于信息框
        const description = `
    <div style="font-family: '微软雅黑', sans-serif; max-width: 450px;">
      <h2 style="color: #FF5722; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-bottom: 10px;">${image}</h2>
      <div style="margin-bottom: 10px;">
        <strong>地理位置:</strong> 纬度 ${latitude}, 经度 ${longitude}
      </div>

      <!-- 照片展示区域 -->
      <div style="margin: 10px 0; text-align: center; min-height: 50px;">
        <img
          src="${photoPath}"
          style="max-width: 100%; max-height: 200px; border-radius: 5px; border: 1px solid #ddd; display: block;"
          alt="${image}地质照片"
        >
      </div>

      <div style="background-color: #000000; padding: 10px; border-radius: 5px; border-left: 4px solid #FF5722;">
        <strong style="color: #fff;">地质特征描述:</strong>
        <p style="margin-top: 5px; line-height: 1.5; color: #ddd;">${detail}</p>
      </div>
    </div>
  `;

        entity.description = description;
      }
    }

    // 缩放到数据范围
    viewer.zoomTo(dataSource2);

    return true;
  } catch (error) {
    console.error("加载GeoJSON失败:", error);
    return false;
  }
};

// 清除标注点
const clearPoints1 = () => {
  if (dataSource1) {
    viewer.dataSources.remove(dataSource1);
    dataSource1 = null;
  }
};

const clearPoints2 = () => {
  if (dataSource2) {
    viewer.dataSources.remove(dataSource2);
    dataSource2 = null;
  }
};

const startSnow = () => {
  console.log("开始下雪效果");
  // 调用雪效果实现
  snow.show(true);
};

const hideSnow = () => {
  console.log("停止下雪效果");
  // 移除雪效果
  snow.show(false);
};

const startRain = () => {
  console.log("开始下雨效果");
  // 实现下雨效果
  rain.show(true);
};

const hideRain = () => {
  console.log("停止下雨效果");
  // 移除下雨效果
  rain.show(false);
};

const startFog = () => {
  console.log("开始大雾效果");
  // 实现大雾效果
  fog.show(true);
};

const hideFog = () => {
  console.log("停止大雾效果");
  // 移除大雾效果
  fog.show(false);
};

// 复选框变化处理函数
const handleSnowChange = (isChecked) => {
  if (isChecked) {
    startSnow();
  } else {
    hideSnow();
  }
};

const handleRainChange = (isChecked) => {
  if (isChecked) {
    startRain();
  } else {
    hideRain();
  }
};

const handleFogChange = (isChecked) => {
  if (isChecked) {
    startFog();
  } else {
    hideFog();
  }
};

const onClear = () => {
  measure.value._drawLayer.entities.removeAll();
};

onUnmounted(() => {
  onClear();
  if (viewer) {
    viewer.scene.terrainProvider = new Cesium.CesiumTerrainProvider({
      url: "http://data.marsgis.cn/terrain",
    });
  }
});
</script>

<template>
  <div class="cesium_map">
    <!-- cesium -->
    <div id="cesiumContainer"></div>
    <!-- 浮动菜单 -->
    <div class="floating-menu">
      <div class="menu-content">
        <el-row class="menu-row">
          <strong>路线三 连岛及规划馆</strong>
        </el-row>
        <el-row class="menu-row">
          粒子效果：
          <el-checkbox
            v-model="checked1"
            label="下雪"
            @change="handleSnowChange"
          />
          <el-checkbox
            v-model="checked2"
            label="下雨"
            @change="handleRainChange"
          />
          <el-checkbox
            v-model="checked3"
            label="大雾"
            @change="handleFogChange"
          />
        </el-row>
        <el-row class="menu-row">
          路线观察点：
          <el-button type="primary" plain @click="loadGeoJSONPoints1"
            >显示窑湾</el-button
          >
          <el-button type="primary" plain @click="clearPoints1"
            >清除窑湾</el-button
          >
          <el-button type="primary" plain @click="loadGeoJSONPoints2"
            >显示马陵山</el-button
          >
          <el-button type="primary" plain @click="clearPoints2"
            >清除马陵山</el-button
          >
        </el-row>
        <el-row class="menu-row">
          路线：
          <button onclick="showPracticeRoute1()">显示窑湾</button>
          <button onclick="removePracticeRoute1()">清除窑湾</button>
          <button onclick="showPracticeRoute2()">显示马陵山</button>
          <button onclick="removePracticeRoute2()">清除马陵山</button>
        </el-row>
        <el-row class="menu-row">
          量测：
          <el-button type="primary" @click="onLineMeasure">空间距离</el-button>
          <el-button type="primary" @click="onAreaMeasure">空间面积</el-button>
          <el-button type="primary" @click="onTrianglesMeasure"
            >三角量测</el-button
          >
          <el-button type="primary" @click="onClear">清除</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<style scoped>
.floating-menu {
  position: absolute;
  top: 90px; /* 距离顶部距离 */
  left: 280px; /* 距离左侧距离 */
  background-color: rgba(255, 255, 255, 0.5); /* 白色背景，50%透明度 */
  border-radius: 5px;
  padding: 10px;
  z-index: 999; /* 确保菜单在地图之上 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */
}

.menu-content {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.menu-row {
  display: flex;
  align-items: center; /* 垂直居中 */
  gap: 10px; /* 元素间距 */
  height: 32px; /* 固定高度（与 Element UI 默认控件高度一致） */
}

.menu-row button {
  padding: 8px 12px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.menu-row button:hover {
  background: #45a049;
}

.menu-row .el-checkbox {
  color: black;
}

/* 确保 checkbox 和 label 对齐 */
.menu-row .el-checkbox {
  margin: 0; /* 移除默认 margin */
  line-height: 1; /* 防止行高影响对齐 */
}

/* 去除底部cesium标志 */
*:deep(.cesium-viewer-bottom) * {
  display: none !important;
}

.cesium_map {
  width: 100%;
  height: 100%;
}

#cesiumContainer {
  width: 100%;
  height: 100%;
}
</style>
