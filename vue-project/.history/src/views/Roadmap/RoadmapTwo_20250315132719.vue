<script setup>
const { ESObjectsManager } = XE2["esobjs-xe2-plugin-main"];
//场景对象管理器
const objm = new ESObjectsManager();
//创建一个cesium视口并且挂载在div上
const czmViewer = objm.createCesiumViewer("xe2Container");
//通过json反序列化创建一个影像图层
const imageryLayer = objm.createSceneObjectFromJson({
  id: "9812a65f-0de0-4f7b-b234-809c0c2fb8ef",
  type: "ESImageryLayer",
  url: "https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
});
</script>
<script src="//unpkg.com/xbsj-xe2/dist-web/xe2-all-in-one.js"></script>
<template>
  <div id="xe2Container"></div>
</template>
<style>
html,
body,
#xe2Container {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
