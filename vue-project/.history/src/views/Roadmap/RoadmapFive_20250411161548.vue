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
  const Cartesian = Cesium.Cartesian3.fromDegrees(119.27354, 34.64117, 1500);
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
    position: Cesium.Cartesian3.fromDegrees(119.27354, 34.64117,),
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
      [119.2651501250001, 34.642325651000078],
      [119.2659284560001, 34.642261317000077],
      [119.26663827900006, 34.642172050000056],
      [119.26726855600009, 34.642136449000077],
      [119.267766091, 34.642183066000086],
      [119.26891001900003, 34.642289321000078],
      [119.26995388, 34.642417485000067],
      [119.2703646010001, 34.64256012900006],
      [119.27078753500007, 34.642618267000046],
      [119.27167024700009, 34.642641808000064],
      [119.27184079100005, 34.642571936000081],
      [119.27122535000001, 34.642300713000054],
      [119.27073850600004, 34.642021382000053],
      [119.27067359900002, 34.641761040000063],
      [119.27079582500005, 34.641480079000075],
      [119.27102793500001, 34.641522714000075],
      [119.27138442800003, 34.641470756000047],
      [119.27193023700011, 34.641466140000034],
      [119.27244339700007, 34.641461523000089],
      [119.2724731080001, 34.641561112000034],
      [119.27256798800011, 34.641677377000065],
      [119.27309316200001, 34.641418719000058],
      [119.27354001100002, 34.641170036000062],
      [119.27430203800009, 34.640930309000055],
      [119.275140867, 34.640719286000035],
      [119.27583049900011, 34.640363341000068],
      [119.27608094700008, 34.640185688000088],
      [119.27695597100001, 34.639748874000077],
      [119.27718983400007, 34.639772190000087],
      [119.27745670800005, 34.639659596000058],
      [119.27776204600002, 34.639541353000084],
      [119.27821427100002, 34.639477087000046],
      [119.27854035600001, 34.63948186600004],
      [119.27875275400004, 34.639472486000045],
      [119.27883118800003, 34.639308397000036],
      [119.27883874200006, 34.63930619000007],
      [119.27902248800001, 34.639266791000068],
      [119.27940470300007, 34.639286445000039],
      [119.27982916800011, 34.639204784000071],
      [119.28003311100008, 34.639066810000088],
      [119.28003500800003, 34.639062175000049],
      [119.28033410100011, 34.638938142000086],
      [119.280782875, 34.638955236000072],
      [119.28108212500001, 34.638926235000042],
      [119.28192964800007, 34.638606573000061],
      [119.28223607400002, 34.638022975000069],
      [119.28244993700002, 34.637782972000082],
      [119.282772088, 34.637552492000054],
      [119.28299400700007, 34.637502889000075],
      [119.28324348600006, 34.637732858000049],
      [119.28345013700005, 34.637940041000036],
      [119.28356583700008, 34.638061551000078],
      [119.28347942400001, 34.638257370000076],
      [119.28343480900003, 34.638552351000044],
      [119.28360537800006, 34.638793271000054],
      [119.2838762340001, 34.639035880000051],
      [119.28393383100001, 34.639394264000089],
      [119.2839437880001, 34.639960907000045],
      [119.28385298700005, 34.640233481000053],
      [119.28394307000008, 34.640404148000073],
      [119.28418703300008, 34.64040422700009],
      [119.28458127600004, 34.640467482000076],
      [119.28487508300009, 34.64043831500004],
      [119.28535000600004, 34.640383746000055],
      [119.28569059300003, 34.640852824000035],
      [119.28565960600008, 34.641090586000075],
      [119.28583161100005, 34.641223376000084],
      [119.286119998, 34.641305288000069],
      [119.28632614600008, 34.641374726000038],
      [119.28636790400003, 34.641516483000089],
      [119.28660177500001, 34.641722434000087],
      [119.28676129100006, 34.641687601000058],
      [119.28702334000002, 34.641795554000055],
      [119.28718730200001, 34.642096291000087],
      [119.28715803400007, 34.642301299000053],
      [119.28767676000007, 34.642942881000067],
      [119.2879778460001, 34.642983692000087],
      [119.28809414700004, 34.643115895000051],
      [119.28799121300005, 34.643207812000071],
      [119.28842204200009, 34.643981757000063],
      [119.28875249600003, 34.644264913000086],
      [119.28900095900008, 34.644892326000047],
      [119.2894497640001, 34.645047935000036],
      [119.28944248200003, 34.645497958000078],
      [119.28897634300006, 34.645619717000045],
      [119.28850414700003, 34.645712655000068],
      [119.28878690300007, 34.646221665000041],
      [119.289125216, 34.646520192000082],
      [119.28932531200007, 34.64674472300004],
      [119.28928884900006, 34.646940258000086],
      [119.28951963200007, 34.647066482000071],
      [119.289744208, 34.647092064000049],
      [119.29008860300007, 34.646835089000035],
      [119.290399912, 34.646532032000039],
      [119.29072719700002, 34.646333082000069],
      [119.29074021600002, 34.646330247000037],
      [119.29100430300002, 34.646132066000064],
      [119.2910040160001, 34.646129320000057],
      [119.29127737400006, 34.645900341000072],
      [119.29128558900004, 34.645889776000047],
      [119.29128809400004, 34.645884501000069],
      [119.29148170600001, 34.645714223000084],
      [119.291609225, 34.645561529000076],
      [119.29162906200008, 34.64556919000006],
      [119.2915097880001, 34.645729628000083],
      [119.29133438300005, 34.64590273400006],
      [119.29104779000011, 34.646153796000078],
      [119.29077116100007, 34.646348999000054],
      [119.2904065460001, 34.646560905000058],
      [119.29012065200004, 34.646875721000072],
      [119.289761269, 34.647128398000063],
      [119.28949212100008, 34.647102708000034],
      [119.28926668600002, 34.646965120000061],
      [119.28928196000004, 34.646757754000078],
      [119.28910814800008, 34.646542732000057],
      [119.2887499310001, 34.646254915000043],
      [119.28863626300006, 34.646196008000061],
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
      "/json/roadmapFive.geojson"
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
        <el-row class="menu-row"> <strong>路线四 连云港花果山 </strong></el-row>
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
