<script setup>
import SnowEffect from "@/utils/cesiumCtrl/snow";
import RainEffect from "@/utils/cesiumCtrl/rain";
import FogEffect from "@/utils/cesiumCtrl/fog";
import { onMounted, ref } from "vue";
import * as Cesium from "cesium";
import { Color } from "cesium";

// 粒子效果
const checked1 = ref(false); // 下雪
const checked2 = ref(false); // 下雨
const checked3 = ref(false); // 大雾

// 粒子效果实例
let snow = null;
let rain = null;
let fog = null;
let viewer = null; // 将viewer定义为全局变量以便其他函数使用
let dataSource = null; // 用于存储加载的GeoJSON数据源

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
});

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
          <el-button type="primary" plain @click="showPracticeRoute">显示</el-button>
          <el-button type="primary" plain  @click="removePracticeRoute>清除</el-button>
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
