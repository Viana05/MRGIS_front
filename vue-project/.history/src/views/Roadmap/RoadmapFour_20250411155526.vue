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
let dataSource1 = null; // 用于存储加载的连岛GeoJSON数据源
let dataSource2 = null; // 用于存储加载的羊山岛GeoJSON数据源
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
  const Cartesian = Cesium.Cartesian3.fromDegrees(119.46804, 34.7345, 10000);
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
    position: Cesium.Cartesian3.fromDegrees(119.46804, 34.7345),
    label: {
      text: "连云港连岛及羊山岛",
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
      [119.44205463900005, 34.767681648000064],
      [119.44206045700003, 34.767676823000045],
      [119.44220791000009, 34.767407293000076],
      [119.44221355900004, 34.767402659000084],
      [119.44251283000006, 34.767002630000036],
      [119.44265482600008, 34.766721034000057],
      [119.44266004000008, 34.766716861000077],
      [119.44324607300007, 34.766308949000063],
      [119.443843894, 34.765915322000069],
      [119.4444951050001, 34.76543386600008],
      [119.44531293700004, 34.76496088600004],
      [119.44568499800005, 34.764793758000053],
      [119.44590954300008, 34.764689209000039],
      [119.44616776500004, 34.764576593000072],
      [119.446478931, 34.764531615000067],
      [119.44679393400008, 34.764446424000084],
      [119.44680971500009, 34.764436314000079],
      [119.44762014500009, 34.764315119000059],
      [119.44840249900005, 34.764261632000057],
      [119.44902074600009, 34.764146370000049],
      [119.449585103, 34.764004023000041],
      [119.449963604, 34.764034062000064],
      [119.45034885500002, 34.764434450000067],
      [119.4507339590001, 34.764813958000047],
      [119.45115349700006, 34.765262176000078],
      [119.45162922500003, 34.765714933000083],
      [119.45181918000003, 34.765951707000056],
      [119.45210755800008, 34.766481171000066],
      [119.45257232300003, 34.76704946600006],
      [119.45260081400011, 34.767387375000055],
      [119.452488378, 34.767813181000065],
      [119.45227752200003, 34.768171996000035],
      [119.45258672700004, 34.768312482000056],
      [119.45319903800009, 34.767632553000055],
      [119.453539288, 34.767197713000087],
      [119.45373108500007, 34.766850347000059],
      [119.45330027200009, 34.766816300000073],
      [119.45277687400005, 34.766826130000084],
      [119.45245470200007, 34.766734385000063],
      [119.45215587200005, 34.766278338000063],
      [119.45196788500004, 34.765980978000073],
      [119.45177765100004, 34.765779203000079],
      [119.45149213800005, 34.765508700000055],
      [119.4512734650001, 34.765309723000087],
      [119.45104637700001, 34.765079288000038],
      [119.45081018300004, 34.764828323000074],
      [119.45061250000003, 34.764620853000054],
      [119.4504235170001, 34.764460252000049],
      [119.45023005600001, 34.764265161000083],
      [119.45005991800008, 34.764055978000044],
      [119.44989787400004, 34.763973379000049],
      [119.44963635700003, 34.76397131300007],
      [119.4494752060001, 34.763990169000067],
      [119.44899238900007, 34.764103730000045],
      [119.44840258800002, 34.764205992000086],
      [119.447609511, 34.764271403000066],
      [119.44678875300008, 34.764389518000087],
      [119.4464510470001, 34.764489103000074],
      [119.44587506400001, 34.764653114000055],
      [119.44547930900001, 34.764854845000059],
      [119.44496476400002, 34.765123129000074],
      [119.44444846700003, 34.765408470000068],
      [119.44375911900011, 34.765905993000047],
      [119.44323016200008, 34.766270256000041],
      [119.44259893000003, 34.766696606000039],
      [119.4424843270001, 34.76699003300007],
      [119.44214305100002, 34.767410166000047],
      [119.441987101, 34.767703269000037],
      [119.442047204, 34.767961601000081],
      [119.44206461100009, 34.768277752000074],
      [119.44193408600006, 34.768494622000048],
      [119.44157362500005, 34.768617333000066],
      [119.44127410700003, 34.768464727000037],
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
      [119.47961960200007, 34.700878615000079],
      [119.47962311500009, 34.700878609000085],
      [119.47999838300007, 34.700652348000062],
      [119.48020543300004, 34.70097559800007],
      [119.48054472800004, 34.701331459000073],
      [119.48085488900006, 34.701572112000065],
      [119.48100782000006, 34.701559688000088],
      [119.481329899, 34.701754085000061],
      [119.48167797100007, 34.701779109000086],
      [119.48208995800007, 34.701710000000048],
      [119.48250400100005, 34.701679718000037],
      [119.48307423600011, 34.701828273000046],
      [119.48333618700008, 34.701691708000055],
      [119.4832088930001, 34.701277816000072],
      [119.48312648600006, 34.700992130000088],
      [119.48309207800003, 34.700815299000055],
      [119.48310463000007, 34.700799065000069],
      [119.483119149, 34.70067841000008],
      [119.48327015700011, 34.700552867000056],
      [119.48348341200006, 34.700528596000083],
      [119.48367771100004, 34.700391564000086],
      [119.48383804400009, 34.700263155000073],
      [119.48390359100006, 34.700168834000067],
      [119.484182842, 34.700191611000037],
      [119.48439181400011, 34.700191225000083],
      [119.48458953800002, 34.700149096000075],
      [119.4847836030001, 34.700139553000042],
      [119.48479720900002, 34.700139528000079],
      [119.48496111100008, 34.700141521000035],
      [119.48480196000003, 34.700037636000047],
      [119.48471013800008, 34.699949727000046],
      [119.48453786300001, 34.700027054000088],
      [119.48444240900005, 34.700086620000036],
      [119.48428496100007, 34.700146781000058],
      [119.48419896300004, 34.700165663000064],
      [119.484125092, 34.700164093000069],
      [119.48391573200001, 34.700149175000035],
      [119.48398838900005, 34.699976840000033],
      [119.48395430000005, 34.699834108000061],
      [119.48391793600001, 34.699679192000076],
      [119.48384150000004, 34.699467986000059],
      [119.48381336300008, 34.69934720200007],
      [119.48380101300006, 34.699247468000067],
      [119.483792397, 34.699080209000044],
      [119.48377242100003, 34.698905704000083],
      [119.48377436800001, 34.698904004000042],
      [119.4837207600001, 34.698761016000049],
      [119.48367991200007, 34.698636426000064],
      [119.48366047100001, 34.698508978000064],
      [119.48369030000003, 34.698396419000062],
      [119.48369406200004, 34.698259494000069],
      [119.48364682200008, 34.698197281000034],
      [119.483654301, 34.698125911000034],
      [119.483658128, 34.698123445000078],
      [119.48368312900004, 34.698086534000083],
      [119.48365225700002, 34.698012990000052],
      [119.48361679800007, 34.697961520000035],
      [119.48361683100006, 34.697958826000047],
      [119.48349775500003, 34.697914591000085],
      [119.483422765, 34.697892797000065],
      [119.48330352400001, 34.697771191000072],
      [119.48312257000009, 34.697651796000059],
      [119.48300418300005, 34.697559461000083],
      [119.48300717000006, 34.697558296000068],
      [119.48308686500002, 34.697408048000057],
      [119.483142036, 34.697213943000065],
      [119.48315384700004, 34.697147691000055],
      [119.48295423500008, 34.697155099000042],
      [119.48295807500006, 34.697174633000088],
      [119.4831175600001, 34.697165449000067],
      [119.48312683800009, 34.697204897000063],
      [119.483061174, 34.697400151000068],
      [119.48289814700001, 34.697316822000062],
      [119.4827820160001, 34.697218218000046],
      [119.48269241600008, 34.697182249000036],
      [119.48269280500006, 34.697180458000048],
      [119.48258819600005, 34.69712252000005],
      [119.48247053200009, 34.697102474000076],
      [119.48240242500003, 34.697059277000051],
      [119.48230993800007, 34.697061882000071],
      [119.48225459300011, 34.697068099000035],
      [119.48219552, 34.697049933000073],
      [119.48207422600001, 34.69706108400004],
      [119.48187119000011, 34.697091399000044],
      [119.48176312400005, 34.697079185000064],
      [119.48168779900004, 34.697048060000043],
      [119.48158976700006, 34.697042866000061],
      [119.48149299800002, 34.697081052000044],
      [119.48141337700008, 34.697124427000062],
      [119.4813579580001, 34.697174847000042],
      [119.48125908400004, 34.697173570000075],
      [119.48117119100004, 34.697204698000064],
      [119.480994528, 34.697304999000039],
      [119.48091991500007, 34.697886232000087],
      [119.48084785200001, 34.698397537000062],
      [119.48065099900009, 34.699368475000085],
      [119.48052769600008, 34.699737387000084],
      [119.48039797400008, 34.699879410000051],
      [119.48006118000001, 34.700031459000058],
      [119.47983050800008, 34.70018586000009],
      [119.47989876700001, 34.700328759000058],
      [119.48000434200003, 34.700596748000066],
      [119.47960226800001, 34.700848341000039],
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
      "/json/roadmapFour1.geojson"
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
        const photoPath = `/images/RoadmapFour/${image}.jpg`;

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
      "/json/roadmapFour2.geojson"
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
        const photoPath = `/images/RoadmapFour/${image}.jpg`;

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
          <strong>路线三 连云港连岛及羊山岛</strong>
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
            >显示连岛</el-button
          >
          <el-button type="primary" plain @click="clearPoints1"
            >清除连岛</el-button
          >
          <el-button type="primary" plain @click="loadGeoJSONPoints2"
            >显示羊山岛</el-button
          >
          <el-button type="primary" plain @click="clearPoints2"
            >清除羊山岛</el-button
          >
        </el-row>
        <el-row class="menu-row">
          路线：
          <button onclick="showPracticeRoute1()">显示连岛</button>
          <button onclick="removePracticeRoute1()">清除连岛</button>
          <button onclick="showPracticeRoute2()">显示羊山岛</button>
          <button onclick="removePracticeRoute2()">清除羊山岛</button>
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
