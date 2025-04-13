<script setup>
import SnowEffect from "@/utils/cesiumCtrl/snow";
import RainEffect from "@/utils/cesiumCtrl/rain";
import FogEffect from "@/utils/cesiumCtrl/fog";
import { onMounted, ref } from "vue";
import * as Cesium from "cesium";
import { Color } from "cesium";
import Dialog from "@/utils/cesiumCtrl/dialog";

// 粒子效果
const checked1 = ref(false); // 下雪
const checked2 = ref(false); // 下雨
const checked3 = ref(false); // 大雾

// 粒子效果实例
let snow = null;
let rain = null;
let fog = null;

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

  const initCluster = () => {
    viewer.dataSources.add(
      new Cesium.GeoJsonDataSource()
        .load("/json/roadmapOne.geojson")
        .then((dataSource) => {
          // await viewer.dataSources.add(dataSource)
          // 设置聚合参数
          dataSource.clustering.enabled = true;
          dataSource.clustering.pixelRange = 60;
          dataSource.clustering.minimumClusterSize = 2;

          dataSource.entities.values.forEach((entity) => {
            // 将点拉伸一定高度，防止被地形压盖
            entity.position._value.z += 2000;
            entity._id = `mark-${entity.id}`;
            entity.billboard = {
              image: "/images/mark-icon.png",
              width: 32,
              height: 32,
            };
            // entity.label = {
            //   text: entity.name,
            //   font: "bold 15px Microsoft YaHei",
            //   // 竖直对齐方式
            //   verticalOrigin: Cesium.VerticalOrigin.CENTER,
            //   // 水平对齐方式
            //   horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
            //   // 偏移量
            //   pixelOffset: new Cesium.Cartesian2(15, 0),
            // }
          });
          dataSource.clustering.clusterEvent.addEventListener(
            (clusteredEntities, cluster) => {
              // 关闭自带的显示聚合数量的标签
              cluster.label.show = false;
              cluster.billboard.show = true;
              cluster.billboard.verticalOrigin = Cesium.VerticalOrigin.BOTTOM;

              console.log("clusteredEntities", clusteredEntities);
              console.log("cluster", cluster);

              // 根据聚合数量的多少设置不同层级的图片以及大小
              // if (clusteredEntities.length >= 4) {
              //   cluster.billboard.image = combineIconAndLabel('/images/express-icon.png', clusteredEntities.length, 64);
              //   cluster.billboard.width = 72;
              //   cluster.billboard.height = 72;
              // } else if (clusteredEntities.length >= 3) {
              //   cluster.billboard.image = combineIconAndLabel('/images/garden-icon.png', clusteredEntities.length, 64);
              //   cluster.billboard.width = 56;
              //   cluster.billboard.height = 56;
              // } else if (clusteredEntities.length >= 2) {
              //   cluster.billboard.image = combineIconAndLabel('/images/school-icon.png', clusteredEntities.length, 64);
              //   cluster.billboard.width = 48;
              //   cluster.billboard.height = 48;
              // } else {
              cluster.billboard.image = combineIconAndLabel(
                "/images/mark-icon.png",
                clusteredEntities.length,
                64
              );
              cluster.billboard.width = 40;
              cluster.billboard.height = 40;
              // }
            }
          );
          return dataSource;
        })
    );
  };

  const scene = viewer.scene;
  const handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
  handler.setInputAction((e) => {
    console.log(e);
    const clickPosition = viewer.scene.camera.pickEllipsoid(e.position);
    const randiansPos = Cesium.Cartographic.fromCartesian(clickPosition);
    // console.log("经度：" + Cesium.Math.toDegrees(randiansPos.longitude) + ", 纬度：" + Cesium.Math.toDegrees(randiansPos.latitude))
    // 获取实体
    const pick = scene.pick(e.position);
    if (Cesium.defined(pick) && pick.id?.id.indexOf("mark") > -1) {
      viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(
          Cesium.Math.toDegrees(randiansPos.longitude),
          Cesium.Math.toDegrees(randiansPos.latitude),
          10000
        ),
        duration: 1,
      });
      const opts = Object.assign(pick.id, {
        viewer,
        title: pick.id.name,
        content: pick.id.properties.address._value,
        // slotTitle: h('span', {
        //   innerHTML: pick.id.name,
        // })
        // slotContent: h(DialogContent, {
        //   onClose: handleClose
        // }, {
        //   content: () => pick.id.properties.address._value
        // })
      });
      console.log("---", pick.id, opts);
      if (dialogs.value) {
        // 只允许一个弹窗出现
        dialogs.value.windowClose();
      }
      dialogs.value = new Dialog(opts);
    }
  }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

  const handleClose = () => {
    dialogs.value?.windowClose();
  };
  const onClear = () => {
    handleClose();
    viewer.dataSources?.removeAll();
  };
});

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
          <el-button type="primary" plain @click="initCluster">显示</el-button>
          <el-button type="primary" plain>清除</el-button>
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
