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
  let labelListenerCallback;
  Sandcastle.declare(fadeByDistance);
  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(117.12311, 34.22841),
    label: {
      text: "xuzhou",
      translucencyByDistance: new Cesium.NearFarScalar(1.5e2, 1.0, 1.5e8, 0.0),
    },
  });
  Sandcastle.reset = function () {
    viewer.entities.removeAll();
    if (Cesium.defined(labelListenerCallback)) {
      labelListenerCallback();
    }
  };

  // 导入所有图片（Vite特有方式）
  const imageModules = import.meta.glob(
    "@/assets/RoadmapOne/*.{jpg,jpeg,png}",
    { eager: true }
  );

  // 解析图片EXIF数据
  const parseImageGPS = async (imageUrl) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const tags = await ExifReader.load(blob);

      if (tags.GPSLatitude && tags.GPSLongitude) {
        return {
          lat: parseFloat(tags.GPSLatitude.description),
          lon: parseFloat(tags.GPSLongitude.description),
        };
      }
    } catch (error) {
      console.error("解析图片GPS失败:", error);
    }
    return null;
  };

  // 添加标注点到地图
  const addPhotoMarkers = async () => {
    if (!viewer) return;

    viewer.entities.removeAll();

    // 处理所有图片
    for (const [path, module] of Object.entries(imageModules)) {
      const imgName = path.split("/").pop();
      const imageUrl = new URL(module.default, import.meta.url).href;

      const gpsData = await parseImageGPS(imageUrl);
      if (!gpsData) continue;

      // 创建标注点
      const entity = viewer.entities.add({
        name: imgName.replace(/\.[^/.]+$/, ""),
        position: Cesium.Cartesian3.fromDegrees(gpsData.lon, gpsData.lat),
        point: new Cesium.PointGraphics({
          color: Cesium.Color.RED,
          pixelSize: 10,
        }),
        label: {
          text: imgName.replace(/\.[^/.]+$/, ""),
          font: "14pt sans-serif",
          fillColor: Cesium.Color.WHITE,
          outlineColor: Cesium.Color.BLACK,
          style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        },
        billboard: {
          image: imageUrl,
          width: 64,
          height: 64,
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        },
      });

      // 添加点击事件
      entity.description = `
      <div style="padding: 10px; max-width: 300px">
        <h3>${imgName}</h3>
        <img src="${imageUrl}" style="max-width: 100%"/>
        <p>坐标: ${gpsData.lat.toFixed(6)}, ${gpsData.lon.toFixed(6)}</p>
      </div>
    `;
    }

    // 自动定位到第一个点
    if (viewer.entities.values.length > 0) {
      viewer.camera.flyTo({
        destination: viewer.entities.values[0].position.getValue(),
        orientation: {
          heading: Cesium.Math.toRadians(-60),
          pitch: Cesium.Math.toRadians(-50),
          roll: 0,
        },
      });
    }
  };

  addPhotoMarkers();

  // 添加点击事件
  entity.description = `
      <div style="padding: 10px; max-width: 300px">
        <h3>${imgName}</h3>
        <img src="${imageUrl}" style="max-width: 100%"/>
        <p>坐标: ${gpsData.lat.toFixed(6)}, ${gpsData.lon.toFixed(6)}</p>
      </div>
    `;
});
</script>

<template>
  <div class="cesium_map">
    <!-- cesium -->
    <div id="cesiumContainer"></div>
  </div>
</template>

<style scoped>
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
