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
        <el-carousel height="600px" width="80%" motion-blur>
          <el-carousel-item>
            <img
              src="@/assets/RockIdenti/Dan Bristy.jpg"
              style="width: 100%; margin: 0 auto"
            /> </el-carousel-item
          ><el-carousel-item>
            <img
              src="@/assets/RockIdenti/希腊岩洞.jpg"
              style="width: 100%; margin: 0 auto"
            />
          </el-carousel-item>
          <el-carousel-item>
            <img
              src="@/assets/RockIdenti/Rock Kicker.jpg"
              style="width: 100%; margin: 0 auto"
            />
          </el-carousel-item>
        </el-carousel>
      </div>
      <p class="demonstration-center">
        岩石是天然产出的，由矿物或类似矿物的物质(如有机质、玻璃、非晶质等)组成的固态集合体。它是组成地壳的物质之一，是构成地球岩石圈的主要成分。
      </p>
      <p class="demonstration-center">
        岩石按成因可分为火成岩、沉积岩和变质岩三大类。先存岩石可以在高温等条件下发生熔融形成岩浆，岩浆冷凝固结形成火成岩。先存的火成岩、沉积岩和变质岩暴露于地表后经过风化、剥蚀、搬运和沉积可以形成沉积岩。或者在不同的温度、压力等外界作用下发生化学成分、矿物成分、结构构造等的改变，形成与原先岩石特征不同的变质岩。这些岩石相互转化的过程被称为——岩石循环。
      </p>

      <div class="demo-collapse">
        <el-collapse v-model="activeNames" accordion>
          <el-collapse-item title="01岩浆岩" name="1">
            <p>
              火成岩又称岩浆岩，是在岩石循环过程中产生的三大岩类的一种，是指岩浆冷却后（地壳里喷出的岩浆，或者被融化的现存岩石），成形的一种岩石。
            </p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </el-collapse-item>
          <el-collapse-item title="02沉积岩" name="2"> </el-collapse-item>
          <el-collapse-item title="03变质岩" name="3"> </el-collapse-item>
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

.demonstration-center {
  display: block;
  text-align: center;
  font-size: 18px;
}

.el-carousel {
  width: 80% !important;
  margin: 0 auto;
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
