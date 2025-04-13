<script setup>
import SnowEffect from "@/utils/cesiumCtrl/snow";
import RainEffect from "@/utils/cesiumCtrl/rain";
import FogEffect from "@/utils/cesiumCtrl/fog";
import { onMounted, onUnmounted, ref, onBeforeMount, watch } from "vue";
import * as Cesium from "cesium";
import { Color } from "cesium";
import MeasureTool from "@/utils/cesiumCtrl/measure.js";
import DrawTool from "@/utils/cesiumCtrl/drawGraphic";

const showDetail = ref(false); // 详情

// 粒子效果
const checked1 = ref(false); // 下雪
const checked2 = ref(false); // 下雨
const checked3 = ref(false); // 大雾

// 粒子效果实例
let snow = null;
let rain = null;
let fog = null;
let viewer = ref(null); // 将viewer定义为全局变量以便其他函数使用
let dataSource = null; // 用于存储加载的GeoJSON数据源
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
  const Cartesian = Cesium.Cartesian3.fromDegrees(117.12311, 34.22841, 1500);
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
    position: Cesium.Cartesian3.fromDegrees(117.12311, 34.22841),
    label: {
      text: "徐州大北望",
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
  let practiceRouteEntity = null;

  // 显示实习路线函数
  window.showPracticeRoute = function () {
    // 如果路线已存在，先移除
    removePracticeRoute();

    // 实习路线坐标数据
    const routeCoordinates = [
      [117.10419982300004, 34.233531052000046],
      [117.10458139800005, 34.233756781000068],
      [117.10480054000004, 34.233895358000041],
      [117.10504124400006, 34.234053311000082],
      [117.10528607800006, 34.234224791000088],
      [117.1054366300001, 34.23436818600004],
      [117.10557979300006, 34.234568206000063],
      [117.10568192000005, 34.234680983000089],
      [117.10604261000003, 34.234907155000087],
      [117.1063484010001, 34.235201639000081],
      [117.10682463600006, 34.235579052000048],
      [117.10699575500007, 34.235693383000068],
      [117.10724450300006, 34.235570341000084],
      [117.10748878300001, 34.235493159000043],
      [117.10773449800001, 34.235610370000074],
      [117.1078917100001, 34.235642854000048],
      [117.10808347300008, 34.235516528000062],
      [117.10824183800003, 34.235411942000042],
      [117.10847432800006, 34.235391691000075],
      [117.10874142300008, 34.235387342000081],
      [117.10875381700009, 34.235213936000036],
      [117.10867428300003, 34.234994423000046],
      [117.10866920000001, 34.234986824000089],
      [117.10838677100003, 34.234754695000049],
      [117.10812205800005, 34.234550353000088],
      [117.10783695200007, 34.234396859000071],
      [117.10758146400008, 34.234214831000088],
      [117.10726753200004, 34.233986063000089],
      [117.1070952450001, 34.23387905800007],
      [117.1070645850001, 34.233717614000057],
      [117.10707751300004, 34.233533761000047],
      [117.10715002500001, 34.233382103000054],
      [117.10715332000007, 34.233375847000048],
      [117.10715377700001, 34.233319800000061],
      [117.1069664470001, 34.233117920000041],
      [117.10682613000006, 34.233010041000057],
      [117.10660265000001, 34.232894955000063],
      [117.10649412400005, 34.232735322000053],
      [117.10648341800004, 34.232720977000042],
      [117.10647988100004, 34.232718113000089],
      [117.10644731000002, 34.23262694400006],
      [117.10661686200001, 34.232453136000061],
      [117.10662029600007, 34.232453132000046],
      [117.10691131800002, 34.232356552000056],
      [117.107159475, 34.232342606000088],
      [117.10733184200001, 34.232369709000068],
      [117.10757448800007, 34.232449199000087],
      [117.10765803900006, 34.232608475000063],
      [117.10764381600006, 34.232794500000068],
      [117.10767790500006, 34.232896552000057],
      [117.1078274030001, 34.233044634000066],
      [117.10802941700001, 34.233155975000045],
      [117.10820832600007, 34.233321562000071],
      [117.10824370500006, 34.233371333000036],
      [117.1079711320001, 34.233481771000072],
      [117.10781500100006, 34.233462989000088],
      [117.10754163600006, 34.233217593000063],
      [117.10736642900008, 34.233241976000045],
      [117.10722406800005, 34.233322092000037],
      [117.10717656300005, 34.23338984600008],
      [117.10713417600005, 34.233480117000056],
      [117.10709603200007, 34.233555193000086],
      [117.1070919550001, 34.233742511000059],
      [117.10711608700001, 34.233857231000059],
      [117.10731112400003, 34.233991417000084],
      [117.10748045500009, 34.234122204000073],
      [117.10766470200008, 34.234243321000065],
      [117.10787652200008, 34.234398203000069],
      [117.10808647500005, 34.234508924000068],
      [117.10826467100003, 34.234629154000061],
      [117.1084349780001, 34.234776171000078],
      [117.10859551800002, 34.23489341700008],
      [117.1087469250001, 34.235052063000069],
      [117.10878797700002, 34.235227077000047],
      [117.10877557600008, 34.235384313000054],
      [117.10892574000002, 34.235442575000036],
      [117.1091188580001, 34.235400728000059],
      [117.10929644800001, 34.235259341000074],
      [117.10950097900002, 34.235087461000035],
      [117.10964240800001, 34.234963122000067],
      [117.10990620900009, 34.23505251000006],
      [117.1100003680001, 34.235209136000037],
      [117.11021884700006, 34.235298854000064],
      [117.11044328000003, 34.235245527000075],
      [117.11067630800005, 34.235389127000076],
      [117.11043899900005, 34.235295914000062],
      [117.11021961400002, 34.235328153000069],
      [117.10999178000009, 34.235256685000081],
      [117.10985428400011, 34.235070728000039],
      [117.10966448300007, 34.235001143000034],
      [117.109376032, 34.235244235000039],
      [117.1091573440001, 34.235420650000037],
      [117.10889259100009, 34.235477725000067],
      [117.10873283000001, 34.235418498000058],
      [117.10846073100004, 34.235418579000054],
      [117.10823842700006, 34.235449967000079],
      [117.10811827800001, 34.235542447000057],
      [117.10789505000002, 34.235671335000063],
      [117.10771153400003, 34.235647762000042],
      [117.10745758100006, 34.235532732000081],
      [117.10726104600008, 34.235598808000077],
      [117.10701915200002, 34.235726881000062],
      [117.10672812900009, 34.235569653000084],
      [117.10646663600005, 34.235339388000057],
      [117.10630066100009, 34.235203450000085],
      [117.10610208700007, 34.235006362000036],
      [117.10591573300007, 34.23487203600007],
      [117.105721496, 34.234739663000084],
      [117.10554753400004, 34.234863287000053],
      [117.1054396610001, 34.23500339800006],
      [117.10538385500001, 34.235079840000083],
      [117.10542605400008, 34.235124257000052],
      [117.1053671630001, 34.235220036000044],
      [117.10516033100009, 34.23519011500008],
      [117.1050184290001, 34.235250933000088],
      [117.10487966400001, 34.235392485000034],
      [117.10483380900007, 34.235477492000086],
      [117.10466558500002, 34.235534932000064],
      [117.10443798000006, 34.235595173000036],
      [117.10421943600011, 34.235790959000042],
      [117.10393434100001, 34.236031145000084],
      [117.10348876100011, 34.235685229000069],
      [117.10313976900011, 34.23526283700005],
      [117.10283726400007, 34.235061011000084],
      [117.10247121900011, 34.235028705000047],
      [117.10213941500001, 34.235061919000088],
      [117.10169411300001, 34.235180439000089],
      [117.10148680500004, 34.235263065000083],
      [117.10159438200003, 34.23557936800006],
      [117.1017168520001, 34.235865921000084],
      [117.10176784000009, 34.236109403000057],
      [117.10188293600004, 34.236343980000072],
      [117.10181993000003, 34.236464445000081],
      [117.10146676900001, 34.236628680000081],
      [117.101136634, 34.23630832200007],
      [117.10061987400002, 34.236367215000087],
      [117.10018722700011, 34.236450212000079],
      [117.09981840500006, 34.236729533000073],
    ];

    // 将坐标转换为Cesium Cartesian3数组
    const positions = routeCoordinates.map((coord) =>
      Cesium.Cartesian3.fromDegrees(coord[0], coord[1])
    );

    // 添加路线实体
    practiceRouteEntity = viewer.entities.add({
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
    viewer.zoomTo(practiceRouteEntity);
  };

  // 移除实习路线函数
  window.removePracticeRoute = function () {
    // 移除路线实体
    if (practiceRouteEntity) {
      viewer.entities.remove(practiceRouteEntity);
      practiceRouteEntity = null;
    }

    // 移除起点和终点标记
    const entities = viewer.entities.values;
    for (let i = entities.length - 1; i >= 0; i--) {
      if (entities[i].name === "起点" || entities[i].name === "终点") {
        viewer.entities.remove(entities[i]);
      }
    }
  };

  // 加载GeoJSON标注点
  window.loadGeoJSONPoints = async () => {
    try {
      // 清除已有的数据源
      if (dataSource) {
        viewer.dataSources.remove(dataSource);
      }

      // 加载GeoJSON文件
      dataSource = await Cesium.GeoJsonDataSource.load(
        "/json/roadmapOne.geojson"
      );

      // 添加到viewer
      await viewer.dataSources.add(dataSource);

      // 自定义每个实体的样式
      const entities = dataSource.entities.values;
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
          const photoPath = `/images/RoadmapOne/${image}.jpg`;

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
      viewer.zoomTo(dataSource);

      return true;
    } catch (error) {
      console.error("加载GeoJSON失败:", error);
      return false;
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
const loadGeoJSONPoints = async () => {
  try {
    // 清除已有的数据源
    if (dataSource) {
      viewer.dataSources.remove(dataSource);
    }

    // 加载GeoJSON文件
    dataSource = await Cesium.GeoJsonDataSource.load(
      "/json/roadmapOne.geojson"
    );

    // 添加到viewer
    await viewer.dataSources.add(dataSource);

    // 自定义每个实体的样式
    const entities = dataSource.entities.values;
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
        const photoPath = `/images/RoadmapOne/${image}.jpg`;

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
    viewer.zoomTo(dataSource);

    return true;
  } catch (error) {
    console.error("加载GeoJSON失败:", error);
    return false;
  }
};

// 清除标注点
const clearPoints = () => {
  if (dataSource) {
    viewer.dataSources.remove(dataSource);
    dataSource = null;
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
          路线一 徐州大北望
          <el-button type="primary" @click="showDetail = true">详情</el-button>
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
          <el-button type="primary" plain @click="loadGeoJSONPoints"
            >显示</el-button
          >
          <el-button type="primary" plain @click="clearPoints">清除</el-button>
        </el-row>
        <el-row class="menu-row">
          路线：
          <button onclick="showPracticeRoute()">显示</button>
          <button onclick="removePracticeRoute()">清除</button>
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
    <!-- 右侧详情浮动窗口 -->
    <div class="detail-panel" :class="{ active: showDetail }">
      <div class="panel-header">
        <h3>徐州大北望路线详情</h3>
        <el-button
          icon="el-icon-close"
          circle
          @click="showDetail = false"
        ></el-button>
      </div>
      <div class="panel-content">
        <el-scrollbar>
          <div class="detail-content">
            <h4>路线简介</h4>
            <p>
              徐州大北望路线是自然地理与地质地貌实习的重要路线之一，沿途可观察多种典型地质构造和地貌形态。
            </p>

            <h4>主要观察点</h4>
            <ul>
              <li>大北望断层 - 典型的正断层构造</li>
              <li>古生代灰岩露头 - 含有丰富的化石</li>
              <li>河流阶地 - 发育完好的三级河流阶地</li>
              <li>风化壳剖面 - 典型的红色风化壳</li>
            </ul>

            <h4>实习内容</h4>
            <ul>
              <li>断层构造的识别与测量</li>
              <li>地层产状测量与地层划分</li>
              <li>地貌形态观察与成因分析</li>
            </ul>

            <h4>注意事项</h4>
            <el-alert title="安全提示" type="warning" :closable="false">
              <ul>
                <li>部分路段崎岖，请注意行走安全</li>
                <li>观察断层时请勿靠近断面下方</li>
                <li>请勿单独行动，保持与带队老师联系</li>
              </ul>
            </el-alert>
          </div>
        </el-scrollbar>
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
