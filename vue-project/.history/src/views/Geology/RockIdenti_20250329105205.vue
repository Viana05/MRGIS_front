<script setup></script>

<template>
  <el-tabs type="border-card" class="demo-tabs">
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <span>三大岩经典图集</span>
        </span>
      </template>
      <div class="block text-center">
        <el-carousel height="500px" motion-blur>
          <el-carousel-item>
            <span class="demonstration">Dan Bristy（爱尔兰）</span>
            <img
              src="@/assets/RockIdenti/Dan Bristy.jpg"
              style="height: 100%; margin: 0 auto"
            />
          </el-carousel-item>
          <el-carousel-item>
            <img
              src="@/assets/RockIdenti/Rock Kicker.jpg"
              style="height: 100%; margin: 0 auto"
            />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="demo-collapse">
        <el-collapse v-model="activeNames" accordion>
          <el-collapse-item title="地理位置" name="1"> </el-collapse-item>
          <el-collapse-item title="地质地貌" name="2"> </el-collapse-item>
          <el-collapse-item title="水系" name="3"> </el-collapse-item>
          <el-collapse-item title="气象气候" name="4"> </el-collapse-item>
          <el-collapse-item title="人文地理" name="5"> </el-collapse-item>
        </el-collapse>
      </div>
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <span>三大岩识别</span>
        </span>
      </template>
      <div class="demo-collapse">
        <el-collapse v-model="activeNames2" accordion>
          <el-collapse-item title="地理位置" name="6"> </el-collapse-item>
          <el-collapse-item title="地质地貌" name="7"> </el-collapse-item>
          <el-collapse-item title="水系" name="8"> </el-collapse-item>
          <el-collapse-item title="气象气候" name="9"> </el-collapse-item>
          <el-collapse-item title="人文概况" name="10"> </el-collapse-item>
        </el-collapse>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>
<style scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
