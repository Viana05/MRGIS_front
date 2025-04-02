<script setup></script>

<template>
  <div style="text-align: center; width: 100%;">
    <img
      src="@/assets/RoadmapIntro/location.jpg"
      style="width: 50%; margin: 0 auto"
    />
    <p>徐州连云港地区地理位置图</p>
  </div>
  <p>
    徐州和连云港都位于欧亚大陆桥的东端，江苏省的北部。中国东部著名的郯庐大断裂就从位于这两个城市连线中部的新沂马陵山通过。
  </p>
  <el-tabs type="border-card" class="demo-tabs">
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <span>徐州区域概况</span>
        </span>
      </template>
      徐州
      
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <span>连云港区域概况</span>
        </span>
      </template>
      连云港
    </el-tab-pane>
  </el-tabs>
</template>

<style>
p {
  text-indent: 2em; /* em是相对单位，2em即现在一个字大小的两倍 */
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>
