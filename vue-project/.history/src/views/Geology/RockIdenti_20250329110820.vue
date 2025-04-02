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
            <p>
              目前，已经发现的岩浆岩有700多种，大部分是在地壳里面的岩石。一般来说，岩浆岩易出现于板块交界地带的火山区。
            </p>
            <p>
              火成岩可以分为两种基本类型。第一种为侵入岩（Intrusive
              rocks），是指当上覆岩层压力减轻时，软流层中的岩浆就钻出，在地壳深处冷凝而形成的岩石。例如闪长岩、辉长岩、花岗岩、伟晶岩和橄榄岩等。闪长岩为典型的中性岩，整体呈暗灰色。其中主要成分为白色的斜长石和深色的角闪石，还含有少量的辉石、黑云母和石英等。
            </p>
            <p>
              闪长岩为典型的中性岩，整体呈暗灰色。其中主要成分为白色的斜长石和深色的角闪石，还含有少量的辉石、黑云母和石英等。
            </p>
            <p>
              辉长岩为来源于深部地壳或上地幔的玄武质岩浆经侵入作用形成，主要矿物成分为基性斜长石和单斜辉石，广泛分布于地壳的各种构造环境和月球上。
            </p>
            <p>
              伟晶岩是由巨粒矿物组成的淡色结晶岩，是富含挥发分的硅酸盐残浆，侵入到火成岩或围岩裂隙中缓慢结晶而成的。
            </p>
            <p>
              第二种为喷出岩（Extrusive
              rocks），是指岩浆喷出地表冷凝而形成的火成岩。这种岩石包括安山岩、玄武岩、英安岩、黑曜岩和流纹岩等。
            </p>
            <p>
              玄武岩是一种细粒致密、外观呈黑色的火成岩，由基性岩浆喷发凝结而成，主要成分是硅铝酸钠或硅铝酸钙。玄武岩岩浆的黏度小，易于流动，常形成广大的熔岩台地，所以分布很广。
            </p>
            <p>
              安山岩为中性喷出岩，分布范围仅次于玄武岩。岩石一般为灰、灰绿、淡紫或紫红色，其中含有少量斜长石、角闪石、辉石和黑云母的斑晶，且斑晶常呈定向排列，这是由于岩浆是在流动中冷却的。
            </p>
            <p>
              黑曜岩（黑曜石）是一种致密块状或熔渣状的酸性玻璃质火山岩，和松脂岩、珍珠岩都统称为酸性火山玻璃岩。呈致密块状，有时见石泡构造。
            </p>
            <p>
              流纹岩的化学成分与花岗岩相同，是一种火山喷出岩。大多数流纹岩都具斑状结构，表明结晶作用在喷发作用以前就已开始。
            </p>
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
