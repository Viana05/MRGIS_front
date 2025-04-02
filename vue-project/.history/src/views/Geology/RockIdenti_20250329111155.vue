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
          <el-collapse-item title="02沉积岩" name="2">
            <p>
              沉积岩是在岩石循环过程中产生的，三种组成地球岩石圈的主要岩石之一。沉积岩是在地壳发展演化过程中，在地表或接近地表的常温常压条件下，任何先成岩遭受风化剥蚀作用的破坏产物，以及生物作用与火山作用的产物，在原地或经过外力的搬运，所形成的沉积层，又经成岩作用而成的岩石。
            </p>
            <p>沉积岩根据其形成特征，可分为三种基本类型。</p>
            <p>
              第一种为碎屑沉积岩（Clastic sedimentary
              rocks），它们的形成主要与外动力地质因素有关，大多为机械破碎的产物经搬运沉积而成。如角砾岩、砾岩、砂岩和粉砂岩等。
            </p>
            <p>
              角砾岩是由从母岩上破碎下来的，颗粒直径大于2毫米的碎屑，经过搬运、沉积、压实、胶结而形成的岩石。组成角砾岩的碎屑物质，一般因原地堆积或搬运距离很短，因此磨圆度极低，分选很差，形状各异，棱角分明。角砾岩能很好反映母岩成分和性质，它与母岩关系较砾岩更为密切。角砾岩最常见的形成位置之一是露头的底部，物理风化碎屑堆积处。另一种是在离露头不远的河流沉积物或冲积扇上。
            </p>
            <p>
              砾岩是一种由从母岩上破碎下来的，颗粒直径大于2毫米的碎屑，经过搬运、沉积、压实、胶结而形成的岩石。砾岩比较粗糙，可以见到明显的砾石，如果胶结成岩石的砾石具有棱角，则称为角砾岩。
            </p>
            <p>
              砂岩主要由各种砂粒胶结而成的，颗粒直径在0.05-2mm，其中砂粒含量要大于50%，结构稳定，通常呈淡褐色或红色，主要含硅、钙、黏土和氧化铁。
            </p>
            <p>
              粉砂岩由粒径为0.0625～0.0039毫米的粉砂的含量占50%以粉砂岩标本的一种碎屑沉积岩。粉砂岩的颜色多种多样，随混入物的成分不同而变。粉砂岩是在经过了长距离搬运、水动力条件比较安静、沉积速度缓慢的环境下形成的。
            </p>
            <p>
              第二种为化学沉积岩（Chemical sedimentary
              rocks）。是指由母岩风化产物中的溶解物质通过化学作用沉积而成的岩石。
            </p>
            <p>
              地球上最重要的铁矿床是在沉积岩中发现的。它们是经过在海洋和淡水中铁和氧结合的化学反应形成的。
            </p>
            <p>
              地球上几乎所有的主要铁矿床都在18亿年前形成的岩石中。当时地球上的海洋含有大量的溶解铁，几乎没有溶解氧。
            </p>
            <p>
              当第一个有光合作用能力的生物开始向水中释放氧气时，氧气立即与大量溶解的铁结合，产生赤铁矿或磁铁矿，铁矿床逐渐开始形成。这些矿物大量地沉积在海底，形成了现在所说的条带状含铁建造(Banded
              iron formation)。
            </p>
            <p>
              最后一种为生物沉积岩（Organic sedimentary
              rocks）。生物沉积岩是由生物体的堆积造成的，如花粉、孢子、贝壳、珊瑚等大量堆积，经过成岩作用形成。
            </p>
            <p>
              例如部分生物成因的石灰岩（limestone）：白垩岩（Chalk）、贝壳灰岩（Coquina）等。
            </p>
            <p>
              白垩岩是一种软质、白色、多孔的沉积碳酸盐岩，是一种由方解石组成的石灰岩。它是在相当深的海洋条件下，由一种叫做颗石藻的微生物脱落下来的细小方解石壳逐渐堆积而成的。
            </p>
            <p>贝壳灰岩是一种由完整的生物贝壳被泥晶方解石固结而成的石灰岩。</p>
            <p>
              按生物种类不同可分为腕足类贝壳灰岩、软体类贝壳灰岩等。也可直接按生物种类命名，如有孔虫灰岩、纺锤虫灰岩等。
            </p>
            <p>变质岩是通过变质作用形成的三大岩之一。</p>
            <p>
              变质作用是指岩石在基本上处于固体状态下，受到温度、压力及化学活动性流体的作用，发生矿物成分、化学成分、岩石结构与构造变化的地质作用。
            </p>
            <p>
              变质岩的岩性特征，既受原岩的控制，具有一定继承性，又因经受了不同的变质作用，在矿物成分和结构构造上又具有新生性（如含有变质矿物和定向构造等），因此变质岩具有众多种类。
            </p>
          </el-collapse-item>
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
