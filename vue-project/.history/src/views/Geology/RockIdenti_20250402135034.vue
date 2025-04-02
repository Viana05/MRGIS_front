<script lang="ts" setup>
import { ref } from "vue";
import { Picture, Search, InfoFilled } from "@element-plus/icons-vue";

const activeNames = ref(["1"]);
const activeNames2 = ref(["4"]);
</script>

<template>
  <div class="geology-container">
    <el-tabs type="border-card" class="geology-tabs">
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Picture /></el-icon>
            <span>三大岩经典图集</span>
          </span>
        </template>
        <!-- 轮播图 -->
        <div class="block text-center">
          <el-carousel
            height="600px"
            width="80%"
            motion-blur
            class="rock-carousel"
          >
            <el-carousel-item>
              <div class="carousel-image-container">
                <img
                  src="@/assets/RockIdenti/Dan Bristy.jpg"
                  class="carousel-image"
                />
                <div class="image-caption">Dan Bristy（爱尔兰）</div>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="carousel-image-container">
                <img
                  src="@/assets/RockIdenti/希腊岩洞.jpg"
                  class="carousel-image"
                />
                <div class="image-caption">希腊岩洞</div>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="carousel-image-container">
                <img
                  src="@/assets/RockIdenti/Rock Kicker.jpg"
                  class="carousel-image"
                />
                <div class="image-caption">Rock Kicker（厄瓜多尔）</div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>

        <div class="geology-intro">
          <p class="geology-text">
            岩石是天然产出的，由矿物或类似矿物的物质(如有机质、玻璃、非晶质等)组成的固态集合体。它是组成地壳的物质之一，是构成地球岩石圈的主要成分。
          </p>
          <p class="geology-text">
            岩石按成因可分为火成岩、沉积岩和变质岩三大类。先存岩石可以在高温等条件下发生熔融形成岩浆，岩浆冷凝固结形成火成岩。先存的火成岩、沉积岩和变质岩暴露于地表后经过风化、剥蚀、搬运和沉积可以形成沉积岩。或者在不同的温度、压力等外界作用下发生化学成分、矿物成分、结构构造等的改变，形成与原先岩石特征不同的变质岩。这些岩石相互转化的过程被称为——岩石循环。
          </p>
        </div>

        <div class="demo-collapse">
          <el-collapse v-model="activeNames" accordion class="rock-collapse">
            <!-- 岩浆岩 -->
            <el-collapse-item
              title="01 岩浆岩"
              name="1"
              class="collapse-item igneous rock-section"
            >
              <div class="rock-content">
                <p>
                  火成岩又称岩浆岩，是在岩石循环过程中产生的三大岩类的一种，是指岩浆冷却后（地壳里喷出的岩浆，或者被融化的现存岩石），成形的一种岩石。
                </p>
                <p>
                  目前，已经发现的岩浆岩有700多种，大部分是在地壳里面的岩石。一般来说，岩浆岩易出现于板块交界地带的火山区。
                </p>
                <p>
                  火成岩可以分为两种基本类型。第一种为<span
                    class="rock-term term-primary"
                    >侵入岩（Intrusive rocks）</span
                  >，是指当上覆岩层压力减轻时，软流层中的岩浆就钻出，在地壳深处冷凝而形成的岩石。例如闪长岩、辉长岩、花岗岩、伟晶岩和橄榄岩等。闪长岩为典型的中性岩，整体呈暗灰色。其中主要成分为白色的斜长石和深色的角闪石，还含有少量的辉石、黑云母和石英等。
                </p>
                <p class="highlight-info">
                  闪长岩为典型的中性岩，整体呈暗灰色。其中主要成分为白色的斜长石和深色的角闪石，还含有少量的辉石、黑云母和石英等。
                </p>
                <p class="highlight-info">
                  辉长岩为来源于深部地壳或上地幔的玄武质岩浆经侵入作用形成，主要矿物成分为基性斜长石和单斜辉石，广泛分布于地壳的各种构造环境和月球上。
                </p>
                <p class="highlight-info">
                  伟晶岩是由巨粒矿物组成的淡色结晶岩，是富含挥发分的硅酸盐残浆，侵入到火成岩或围岩裂隙中缓慢结晶而成的。
                </p>
                <p>
                  第二种为<span class="rock-term term-danger"
                    >喷出岩（Extrusive rocks）</span
                  >，是指岩浆喷出地表冷凝而形成的火成岩。这种岩石包括安山岩、玄武岩、英安岩、黑曜岩和流纹岩等。
                </p>
                <p class="highlight-danger">
                  玄武岩是一种细粒致密、外观呈黑色的火成岩，由基性岩浆喷发凝结而成，主要成分是硅铝酸钠或硅铝酸钙。玄武岩岩浆的黏度小，易于流动，常形成广大的熔岩台地，所以分布很广。
                </p>
                <p class="highlight-danger">
                  安山岩为中性喷出岩，分布范围仅次于玄武岩。岩石一般为灰、灰绿、淡紫或紫红色，其中含有少量斜长石、角闪石、辉石和黑云母的斑晶，且斑晶常呈定向排列，这是由于岩浆是在流动中冷却的。
                </p>
                <p class="highlight-danger">
                  黑曜岩（黑曜石）是一种致密块状或熔渣状的酸性玻璃质火山岩，和松脂岩、珍珠岩都统称为酸性火山玻璃岩。呈致密块状，有时见石泡构造。
                </p>
                <p class="highlight-danger">
                  流纹岩的化学成分与花岗岩相同，是一种火山喷出岩。大多数流纹岩都具斑状结构，表明结晶作用在喷发作用以前就已开始。
                </p>
              </div>
            </el-collapse-item>
            <!-- 沉积岩 -->
            <el-collapse-item
              title="02 沉积岩"
              name="2"
              class="collapse-item sedimentary rock-section"
            >
              <p>
                沉积岩是在岩石循环过程中产生的，三种组成地球岩石圈的主要岩石之一。沉积岩是在地壳发展演化过程中，在地表或接近地表的常温常压条件下，任何先成岩遭受风化剥蚀作用的破坏产物，以及生物作用与火山作用的产物，在原地或经过外力的搬运，所形成的沉积层，又经成岩作用而成的岩石。
              </p>
              <p>沉积岩根据其形成特征，可分为三种基本类型。</p>
              <p>
                第一种为<span class="rock-term term-success"
                  >碎屑沉积岩（Clastic sedimentary rocks）</span
                >，它们的形成主要与外动力地质因素有关，大多为机械破碎的产物经搬运沉积而成。如角砾岩、砾岩、砂岩和粉砂岩等。
              </p>
              <p class="highlight-success">
                角砾岩是由从母岩上破碎下来的，颗粒直径大于2毫米的碎屑，经过搬运、沉积、压实、胶结而形成的岩石。组成角砾岩的碎屑物质，一般因原地堆积或搬运距离很短，因此磨圆度极低，分选很差，形状各异，棱角分明。角砾岩能很好反映母岩成分和性质，它与母岩关系较砾岩更为密切。角砾岩最常见的形成位置之一是露头的底部，物理风化碎屑堆积处。另一种是在离露头不远的河流沉积物或冲积扇上。
              </p>
              <p class="highlight-success"> 
                砾岩是一种由从母岩上破碎下来的，颗粒直径大于2毫米的碎屑，经过搬运、沉积、压实、胶结而形成的岩石。砾岩比较粗糙，可以见到明显的砾石，如果胶结成岩石的砾石具有棱角，则称为角砾岩。
              </p>
              <p class="highlight-success">
                砂岩主要由各种砂粒胶结而成的，颗粒直径在0.05-2mm，其中砂粒含量要大于50%，结构稳定，通常呈淡褐色或红色，主要含硅、钙、黏土和氧化铁。
              </p>
              <p class="highlight-success">
                粉砂岩由粒径为0.0625～0.0039毫米的粉砂的含量占50%以粉砂岩标本的一种碎屑沉积岩。粉砂岩的颜色多种多样，随混入物的成分不同而变。粉砂岩是在经过了长距离搬运、水动力条件比较安静、沉积速度缓慢的环境下形成的。
              </p>
              <p>
                第二种为<span class="rock-term term-warning"
                  >化学沉积岩（Chemical sedimentary rocks）</span
                >。是指由母岩风化产物中的溶解物质通过化学作用沉积而成的岩石。
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
                最后一种为<span class="rock-term term-purple"
                  >生物沉积岩（Organic sedimentary rocks）</span
                >。生物沉积岩是由生物体的堆积造成的，如花粉、孢子、贝壳、珊瑚等大量堆积，经过成岩作用形成。
              </p>
              <p>
                例如部分生物成因的石灰岩（limestone）：白垩岩（Chalk）、贝壳灰岩（Coquina）等。
              </p>
              <p class="highlight-purple">
                白垩岩是一种软质、白色、多孔的沉积碳酸盐岩，是一种由方解石组成的石灰岩。它是在相当深的海洋条件下，由一种叫做颗石藻的微生物脱落下来的细小方解石壳逐渐堆积而成的。
              </p>
              <p class="highlight-purple">
                贝壳灰岩是一种由完整的生物贝壳被泥晶方解石固结而成的石灰岩。
              </p>
              <p>
                按生物种类不同可分为腕足类贝壳灰岩、软体类贝壳灰岩等。也可直接按生物种类命名，如有孔虫灰岩、纺锤虫灰岩等。
              </p>
            </el-collapse-item>
            <!-- 变质岩 -->
            <el-collapse-item
              title="03 变质岩"
              name="3"
              class="collapse-item metamorphic rock-section"
            >
              <p>变质岩是通过变质作用形成的三大岩之一。</p>
              <p>
                变质作用是指岩石在基本上处于固体状态下，受到温度、压力及化学活动性流体的作用，发生矿物成分、化学成分、岩石结构与构造变化的地质作用。
              </p>
              <p>
                变质岩的岩性特征，既受原岩的控制，具有一定继承性，又因经受了不同的变质作用，在矿物成分和结构构造上又具有新生性（如含有变质矿物和定向构造等），因此变质岩具有众多种类。
              </p>
              <p class="highlight-teal">
                如片麻岩，
                是由岩浆岩或沉积岩经深变质作用而成的岩石。具有暗色与浅色矿物相间呈定向或条带状断续排列的片麻状构造特征，呈变晶结构。片麻岩按原岩的不同，可分为由岩浆岩变质而成的"正片麻岩"和由沉积岩变质而成的"副片麻岩"。
              </p>
              <p class="highlight-teal">
                千枚岩是具有千枚状构造的低级变质岩石。原岩通常为泥质岩石（或含硅质、钙质、炭质的泥质岩）、粉砂岩及中、酸性凝灰岩等。
              </p>
              <p class="highlight-teal">
                片岩是具有典型的片状构造的变质岩一种，是区域变质的产物。片状，板状，纤维状矿物相互平行排列，粒度较粗，肉眼可辨别。主要矿物为云母，石英，角闪石，绿泥石等。
              </p>
              <p class="highlight-teal">
                板岩是具有板状构造，基本没有重结晶的变质岩。原岩为泥质、粉质或中性凝灰岩，沿板理方向可以剥成薄片。
              </p>
              <p class="highlight-teal">
                大理岩是由碳酸盐岩经区域变质作用或接触变质作用形成的变质岩。主要由方解石和白云石组成，具粒状变晶结构，块状（有时为条带状）构造。
              </p>
              <p class="highlight-teal">
                石英岩是一种主要由石英组成的变质岩，多由石英砂岩或其他硅质岩石经变质作用，重结晶形成。石英岩一般为块状构造，粒状变晶结构，呈晶质集合体。
              </p>
              <p class="summary-text">
                复杂又神奇的岩石循环在地球上重复进行着，形成了千奇百怪、各具特色的岩石，构成了地球上最具魅力的风景！
              </p>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Search /></el-icon>
            <span>三大岩识别</span>
          </span>
        </template>
        <!-- 轮播图 -->
        <div class="block text-center">
          <el-carousel
            height="600px"
            width="80%"
            motion-blur
            class="rock-carousel"
          >
            <el-carousel-item>
              <div class="carousel-image-container">
                <img
                  src="@/assets/RockIdenti/Dan Bristy.jpg"
                  class="carousel-image"
                />
                <div class="image-caption">野外岩石识别要点示范</div>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="carousel-image-container">
                <img
                  src="@/assets/RockIdenti/希腊岩洞.jpg"
                  class="carousel-image"
                />
                <div class="image-caption">实习现场岩石采样方法</div>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="carousel-image-container">
                <img
                  src="@/assets/RockIdenti/Rock Kicker.jpg"
                  class="carousel-image"
                />
                <div class="image-caption">岩石标本实验室分析</div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>

        <div class="demo-collapse">
          <el-collapse
            v-model="activeNames2"
            accordion
            class="identification-collapse"
          >
            <el-collapse-item
              title="01 岩浆岩识别"
              name="4"
              class="collapse-item igneous"
            >
              <div class="identification-content">
                <div class="identification-step">
                  <h3>1. 颜色</h3>
                  <p>
                    岩浆岩的颜色大致可分为浅色、中色和暗色几种。观察时，应分出原生色「即新鲜面的颜色」及次生色「即经过次生变化后风化面的颜色」。原生色可反映岩石的成分及形成环境，次生色可反映岩石的经历过程。
                  </p>
                  <div class="field-tip">
                    <el-icon><InfoFilled /></el-icon>
                    <span>野外实习提示：新鲜面颜色更能反映岩石真实成分</span>
                  </div>
                </div>

                <div class="identification-step">
                  <h3>2. 结构</h3>
                  <p>
                    显晶质岩石，其主要造岩矿物粒度大致相等时，应写出粒度与习惯用结构名称。如中粒辉长结构、粗粒花岗结构、中粒二长结、粗粒半自形结构等；
                  </p>
                </div>

                <div class="identification-step">
                  <h3>3. 构造</h3>
                  <p>
                    最常见的岩浆岩构造的种类不多，只须准确描述即可。侵入岩多具块状、斑杂状、条带状构造；喷出岩则多具气孔、杏仁、流纹构造等。
                  </p>
                </div>

                <div class="identification-sample">
                  <h3>实习记录示例：</h3>
                  <div class="sample-card">
                    <h4>橄榄辉长岩</h4>
                    <p>
                      <strong>肉眼描述：</strong
                      >新鲜面暗灰色，风化面暗褐色。中粒辉长结构，颗粒均匀，颗粒直径在2-5mm。块状构造。岩石比较新鲜。暗色矿物主要为黑色的辉石，呈近于短轴状的颗粒，有时可见解理。其次，可见少量黄绿色（或暗绿），油脂光泽的橄榄石和具珍珠光泽的黑云母。暗色矿物含量约50％。浅色矿物为斜长石，呈长板状，白色至灰色，玻璃光泽，含量约50％。
                    </p>
                    <p>
                      <strong>镜下描述：</strong
                      >岩石新鲜，未经蚀交。主耍矿物为普通辉石、基性斜长石，次要矿物为橄榄石、黑云母。辉长结构。
                    </p>
                    <p><strong>岩石定名：</strong>橄榄辉长岩</p>
                  </div>
                </div>
              </div>
            </el-collapse-item>
            <!-- 其他识别部分内容保持不变，只需添加相应的样式类 -->
          </el-collapse>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<style scoped>
.rock-section p {
  text-indent: 2em;
  line-height: 1.8;
  margin-bottom: 12px;
}

.highlight-info {
  background-color: #f5f7fa;
  padding: 10px;
  border-left: 4px solid #3a8ee6;
}

.highlight-danger {
  background-color: #fef0f0;
  padding: 10px;
  border-left: 4px solid #f56c6c;
}

.highlight-success {
  background-color: #f0f9eb;
  padding: 10px;
  border-left: 4px solid #67c23a;
}

.highlight-warning {
  background-color: #fdf6ec;
  padding: 10px;
  border-left: 4px solid #e6a23c;
}

.highlight-purple {
  background-color: #f5eef8;
  padding: 10px;
  border-left: 4px solid #8e44ad;
}

.highlight-teal {
  background-color: #ecf8f8;
  padding: 10px;
  border-left: 4px solid #16a085;
}

.highlight-lavender {
  background-color: #f9f2f9;
  padding: 10px;
  border-left: 4px solid #9b59b6;
}

.summary-text {
  font-style: italic;
  color: #7f8c8d;
}

.rock-term {
  font-weight: bold;
}

.term-primary {
  color: #3a8ee6;
}

.term-danger {
  color: #f56c6c;
}

.term-success {
  color: #67c23a;
}

.term-warning {
  color: #e6a23c;
}

.term-purple {
  color: #8e44ad;
}

.geology-container {
  font-family: "Microsoft YaHei", Arial, sans-serif;
  background-color: #f5f5f5;
  padding: 20px;
}

.geology-tabs {
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.geology-tabs :deep(.el-tabs__item) {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.geology-tabs :deep(.el-tabs__item.is-active) {
  color: #409eff;
  background-color: #f0f7ff;
}

.custom-tabs-label {
  display: flex;
  align-items: center;
  gap: 8px;
}

.rock-carousel {
  margin: 20px auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.carousel-image-container {
  position: relative;
  height: 100%;
  width: 100%;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 10px 15px;
  font-size: 16px;
  text-align: center;
}

.geology-intro {
  background-color: #fff;
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.geology-text {
  line-height: 1.8;
  color: #333;
  margin-bottom: 15px;
  text-align: justify;
}

.rock-collapse {
  margin-top: 20px;
}

.collapse-item {
  margin-bottom: 10px;
  border-radius: 6px;
  overflow: hidden;
}

.collapse-item :deep(.el-collapse-item__header) {
  font-weight: bold;
  font-size: 16px;
  padding-left: 15px;
  background-color: #f7f7f7;
}

.collapse-item.igneous :deep(.el-collapse-item__header) {
  border-left: 4px solid #e74c3c;
}

.collapse-item.sedimentary :deep(.el-collapse-item__header) {
  border-left: 4px solid #3498db;
}

.collapse-item.metamorphic :deep(.el-collapse-item__header) {
  border-left: 4px solid #2ecc71;
}

.rock-content {
  padding: 15px;
  line-height: 1.7;
  background-color: #fff;
}

.rock-sample {
  background-color: #f9f9f9;
  border-left: 3px solid #ddd;
  padding: 12px 15px;
  margin: 15px 0;
  border-radius: 0 4px 4px 0;
}

.rock-sample h4 {
  margin-top: 0;
  color: #555;
}

.identification-collapse {
  margin-top: 20px;
}

.identification-content {
  padding: 15px;
  background-color: #fff;
}

.identification-step {
  margin-bottom: 20px;
}

.identification-step h3 {
  color: #333;
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;
  margin-bottom: 12px;
}

.field-tip {
  background-color: #e6f7ff;
  border-left: 4px solid #1890ff;
  padding: 10px;
  margin: 10px 0;
  border-radius: 0 4px 4px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #555;
}

.identification-sample {
  margin-top: 30px;
}

.sample-card {
  background-color: #f8f8f8;
  border: 1px solid #e7e7e7;
  border-radius: 6px;
  padding: 15px;
  margin-bottom: 15px;
}

.sample-card h4 {
  margin-top: 0;
  color: #333;
  border-bottom: 1px dashed #ccc;
  padding-bottom: 8px;
}

@media (max-width: 768px) {
  .rock-carousel {
    height: 300px;
  }

  .geology-text {
    font-size: 14px;
  }
}

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
