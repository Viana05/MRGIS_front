<script setup>
import { onMounted, ref } from "vue";
import * as Cesium from "cesium";
import * as ExifReader from "exifreader";

console.log(Cesium, "CesiumCesium");
onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlM2IwYzY5My0wYTNlLTRlOTUtOWFhNi00ZjI0ZTljOWVkYmUiLCJpZCI6Mjg0MTYzLCJpYXQiOjE3NDE5MTkyODN9.mbpcdK5ob1alfcAnl6zE4k5xzznEd1FQeFTvBtxTv4E";
  //自定义图层
  const esri = new Cesium.ArcGisMapServerImageryProvider({
    url: "https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer",
    enablePickFeatures: false,
  });
  //返回的是笛卡尔坐标   经纬度转笛卡尔坐标
  //经度 纬度 高度
  const Cartesian = Cesium.Cartesian3.fromDegrees(117.12311, 34.22841, 1500);
  console.log(Cartesian, "Cartesian");
  //viewer是所有Api的开始
  const viewer = new Cesium.Viewer("cesiumContainer", {
    animation: true, //是否显示动画控件
    baseLayerPicker: true, //是否显示图层选择控件
    geocoder: true, //是否显示地名查找控件
    timeline: false, //是否显示时间线控件
    sceneModePicker: true, //是否显示投影方式控件
    navigationHelpButton: true, //是否显示帮助信息控件
    fullscreenButton: true, //是否显示全屏按钮
    // infoBox: false, //是否显示点击要素之后显示的信息
    homeButton: true, //是否显示Home按钮
    // imageryProvider:esri,//自定义图层
    terrainProvider: Cesium.createWorldTerrain({
      requestWaterMask: true, //水面特效
      requestVertexNormals: true,
    }), //地形图层也就是三维地图
  });

  // 自定义信息框样式
  viewer.infoBox.frame.sandbox =
    "allow-same-origin allow-top-navigation allow-pointer-lock allow-popups allow-forms allow-scripts";
  viewer.infoBox.frame.style = "border: none; width: 100%; height: 100%";

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

  // 添加一个简单标注点（北京坐标）
  viewer.entities.add({
    name: "徐州标注点",
    position: Cesium.Cartesian3.fromDegrees(117.12311, 34.22841), // 经度, 纬度
    point: {
      color: Cesium.Color.RED,
      pixelSize: 10,
    },
    label: {
      text: "徐州市",
      font: "14pt sans-serif",
      fillColor: Cesium.Color.WHITE,
      outlineColor: Cesium.Color.BLACK,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      pixelOffset: new Cesium.Cartesian2(0, -20),
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

  // 昼夜效果，没有什么用处
  // const globe = viewer.scene.globe;
  // const vMode = { enableLighting: false };
  // globe.enableLighting = vModelCheckbox.enableLighting;

  // let gui = new dataType.GUI();
  // gui
  //   .add(vModel, "enableLighting")
  //   .onChange((e) => {
  //     globe.enableLighting = vModelCheckbox.enableLighting;
  //   })
  //   .name("昼夜");

  // 地形夸张
  viewer.scene.globe.terrainExaggeration = 2;

  // 北望村
  // let labelListenerCallback;
  // Sandcastle.declare(fadeByDistance);
  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(117.12311, 34.22841),
    label: {
      text: "xuzhou",
      translucencyByDistance: new Cesium.NearFarScalar(1.5e2, 1.0, 1.5e8, 0.0),
    },
  });
  // Sandcastle.reset = function () {
  //   viewer.entities.removeAll();
  //   if (Cesium.defined(labelListenerCallback)) {
  //     labelListenerCallback();
  //   }
  // };
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
          粒子效果：
          <el-checkbox v-model="checked3" label="Option 1" />
          <el-checkbox v-model="checked4" label="Option 2" />
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
