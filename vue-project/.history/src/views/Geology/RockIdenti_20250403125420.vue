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
            岩石按成因可分为火成岩、沉积岩和变质岩三大类。先存岩石可以在高温等条件下发生熔融形成岩浆，岩浆冷凝固结形成火成岩。
          </p>
          <div class="rock-image-container">
            <img
              src="@/assets/RockIdenti/岩石循环动图.jpg"
              class="rock-image"
              alt="岩石循环"
            />
            <div class="content-image-caption">岩石循环</div>
          </div>
          <p class="geology-text">
            先存的火成岩、沉积岩和变质岩暴露于地表后经过风化、剥蚀、搬运和沉积可以形成沉积岩。或者在不同的温度、压力等外界作用下发生化学成分、矿物成分、结构构造等的改变，形成与原先岩石特征不同的变质岩。这些岩石相互转化的过程被称为——岩石循环。
          </p>
          <div class="rock-image-container">
            <img
              src="@/assets/RockIdenti/岩石循环原理.jpg"
              class="rock-image"
              alt="岩石循环原理"
            />
            <div class="content-image-caption">岩石循环原理</div>
          </div>
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

                <div class="rock-image-container">
                  <img
                    src="@/assets/RockIdenti/火成岩.jpg"
                    class="rock-image"
                    alt="火成岩"
                  />
                  <div class="content-image-caption">火成岩</div>
                </div>
                <p>
                  目前，已经发现的岩浆岩有700多种，大部分是在地壳里面的岩石。一般来说，岩浆岩易出现于板块交界地带的火山区。
                </p>
                <div class="rock-image-container">
                  <img
                    src="@/assets/RockIdenti/火成岩的形成.jpg"
                    class="rock-image"
                    alt="火成岩的形成"
                  />
                  <div class="content-image-caption">火成岩的形成</div>
                </div>
                <p>
                  火成岩可以分为两种基本类型。第一种为<span
                    class="rock-term term-primary"
                    >侵入岩（Intrusive rocks）</span
                  >，是指当上覆岩层压力减轻时，软流层中的岩浆就钻出，在地壳深处冷凝而形成的岩石。例如闪长岩、辉长岩、花岗岩、伟晶岩和橄榄岩等。闪长岩为典型的中性岩，整体呈暗灰色。其中主要成分为白色的斜长石和深色的角闪石，还含有少量的辉石、黑云母和石英等。
                </p>
                <div class="rock-image-container">
                  <img
                    src="@/assets/RockIdenti/侵入岩.jpg"
                    class="rock-image"
                    alt="侵入岩"
                  />
                  <div class="content-image-caption">侵入岩</div>
                </div>
                <p class="highlight-info">
                  <strong>闪长岩</strong
                  >为典型的中性岩，整体呈暗灰色。其中主要成分为白色的斜长石和深色的角闪石，还含有少量的辉石、黑云母和石英等。
                </p>
                <p class="highlight-info">
                  <strong>辉长岩</strong
                  >为来源于深部地壳或上地幔的玄武质岩浆经侵入作用形成，主要矿物成分为基性斜长石和单斜辉石，广泛分布于地壳的各种构造环境和月球上。
                </p>
                <p class="highlight-info">
                  <strong>伟晶岩</strong
                  >是由巨粒矿物组成的淡色结晶岩，是富含挥发分的硅酸盐残浆，侵入到火成岩或围岩裂隙中缓慢结晶而成的。
                </p>
                <div class="rock-comparison-container">
                  <!-- 辉长岩 -->
                  <div class="comparison-image-wrapper">
                    <img
                      src="@/assets/RockIdenti/辉长岩1.jpg"
                      class="comparison-image"
                      alt="辉长岩"
                    />
                    <span class="comparison-caption"
                      >辉长岩<small>(点击放大查看矿物结构)</small></span
                    >
                  </div>
                  <!-- 伟晶岩 -->
                  <div class="comparison-image-wrapper">
                    <img
                      src="@/assets/RockIdenti/伟晶岩.jpg"
                      class="comparison-image"
                      alt="伟晶岩"
                    />
                    <span class="comparison-caption"
                      >伟晶岩<small>(点击放大查看矿物结构)</small></span
                    >
                  </div>
                  <!-- 辉长岩 -->
                  <div class="comparison-image-wrapper">
                    <img
                      src="@/assets/RockIdenti/闪长岩1.jpg"
                      class="comparison-image"
                      alt="闪长岩"
                    />
                    <span class="comparison-caption"
                      >闪长岩<small>(点击放大查看矿物结构)</small></span
                    >
                  </div>
                </div>
                <p>
                  第二种为<span class="rock-term term-danger"
                    >喷出岩（Extrusive rocks）</span
                  >，是指岩浆喷出地表冷凝而形成的火成岩。这种岩石包括安山岩、玄武岩、英安岩、黑曜岩和流纹岩等。
                </p>
                <div class="rock-image-container">
                  <img
                    src="@/assets/RockIdenti/喷出岩.jpg"
                    class="rock-image"
                    alt="喷出岩"
                  />
                  <div class="content-image-caption">喷出岩</div>
                </div>
                <p class="highlight-danger">
                  <strong>玄武岩</strong
                  >是一种细粒致密、外观呈黑色的火成岩，由基性岩浆喷发凝结而成，主要成分是硅铝酸钠或硅铝酸钙。玄武岩岩浆的黏度小，易于流动，常形成广大的熔岩台地，所以分布很广。
                </p>
                <p class="highlight-danger">
                  <strong>黑曜岩（黑曜石）</strong
                  >是一种致密块状或熔渣状的酸性玻璃质火山岩，和松脂岩、珍珠岩都统称为酸性火山玻璃岩。呈致密块状，有时见石泡构造。
                </p>
                <p class="highlight-danger">
                  <strong>流纹岩</strong
                  >的化学成分与花岗岩相同，是一种火山喷出岩。大多数流纹岩都具斑状结构，表明结晶作用在喷发作用以前就已开始。
                </p>
                <p class="highlight-danger">
                  <strong>安山岩</strong
                  >为中性喷出岩，分布范围仅次于玄武岩。岩石一般为灰、灰绿、淡紫或紫红色，其中含有少量斜长石、角闪石、辉石和黑云母的斑晶，且斑晶常呈定向排列，这是由于岩浆是在流动中冷却的。
                </p>
                <div class="rock-comparison-container">
                  <!-- 玄武岩 -->
                  <div class="comparison-image-wrapper">
                    <img
                      src="@/assets/RockIdenti/玄武岩1.jpg"
                      class="comparison-image"
                      alt="玄武岩"
                    />
                    <span class="comparison-caption"
                      >玄武岩<small>(点击放大查看矿物结构)</small></span
                    >
                  </div>
                  <!-- 黑曜岩 -->
                  <div class="comparison-image-wrapper">
                    <img
                      src="@/assets/RockIdenti/黑曜岩1.jpg"
                      class="comparison-image"
                      alt="黑曜岩"
                    />
                    <span class="comparison-caption"
                      >黑曜岩<small>(点击放大查看矿物结构)</small></span
                    >
                  </div>
                  <!-- 流纹岩 -->
                  <div class="comparison-image-wrapper">
                    <img
                      src="@/assets/RockIdenti/流纹岩1.jpg"
                      class="comparison-image"
                      alt="流纹岩"
                    />
                    <span class="comparison-caption"
                      >流纹岩<small>(点击放大查看矿物结构)</small></span
                    >
                  </div>
                  <!-- 安山岩 -->
                  <div class="comparison-image-wrapper">
                    <img
                      src="@/assets/RockIdenti/安山岩.jpg"
                      class="comparison-image"
                      alt="安山岩"
                    />
                    <span class="comparison-caption"
                      >安山岩<small>(点击放大查看矿物结构)</small></span
                    >
                  </div>
                </div>
              </div>
            </el-collapse-item>
            <!-- 沉积岩 -->
            <el-collapse-item
              title="02 沉积岩"
              name="2"
              class="collapse-item sedimentary rock-section"
            >
              <p>
                沉积岩是在岩石循环过程中产生的，三种组成地球岩石圈的主要岩石之一。
              </p>
              <div class="rock-image-container">
                <img
                  src="@/assets/RockIdenti/沉积岩.jpg"
                  class="rock-image"
                  alt="沉积岩"
                />
                <div class="content-image-caption">沉积岩</div>
              </div>
              <p>
                沉积岩是在地壳发展演化过程中，在地表或接近地表的常温常压条件下，任何先成岩遭受风化剥蚀作用的破坏产物，以及生物作用与火山作用的产物，在原地或经过外力的搬运，所形成的沉积层，又经成岩作用而成的岩石。
              </p>
              <div class="rock-row-container">
                <!-- 物理风化作用 -->
                <div class="rock-row-item">
                  <div class="rock-image-container">
                    <img
                      src="@/assets/RockIdenti/物理风化作用.jpg"
                      class="rock-image"
                      alt="物理风化作用"
                    />
                    <div class="content-image-caption">物理风化作用</div>
                  </div>
                </div>
                <!-- 化学风化作用 -->
                <div class="rock-row-item">
                  <div class="rock-image-container">
                    <img
                      src="@/assets/RockIdenti/化学风化作用.jpg"
                      class="rock-image"
                      alt="化学风化作用"
                    />
                    <div class="content-image-caption">化学风化作用</div>
                  </div>
                </div>
                <!-- 生物风化作用 -->
                <div class="rock-row-item">
                  <div class="rock-image-container">
                    <img
                      src="@/assets/RockIdenti/生物风化作用.jpg"
                      class="rock-image"
                      alt="生物风化作用"
                    />
                    <div class="content-image-caption">生物风化作用</div>
                  </div>
                </div>
              </div>
              <p>沉积岩根据其形成特征，可分为三种基本类型。</p>
              <p>
                第一种为<span class="rock-term term-success"
                  >碎屑沉积岩（Clastic sedimentary rocks）</span
                >，它们的形成主要与外动力地质因素有关，大多为机械破碎的产物经搬运沉积而成。如角砾岩、砾岩、砂岩和粉砂岩等。
              </p>
              <p class="highlight-success">
                <strong>角砾岩</strong
                >是由从母岩上破碎下来的，颗粒直径大于2毫米的碎屑，经过搬运、沉积、压实、胶结而形成的岩石。组成角砾岩的碎屑物质，一般因原地堆积或搬运距离很短，因此磨圆度极低，分选很差，形状各异，棱角分明。角砾岩能很好反映母岩成分和性质，它与母岩关系较砾岩更为密切。角砾岩最常见的形成位置之一是露头的底部，物理风化碎屑堆积处。另一种是在离露头不远的河流沉积物或冲积扇上。
              </p>
              <p class="highlight-success">
                <strong>砾岩</strong
                >是一种由从母岩上破碎下来的，颗粒直径大于2毫米的碎屑，经过搬运、沉积、压实、胶结而形成的岩石。砾岩比较粗糙，可以见到明显的砾石，如果胶结成岩石的砾石具有棱角，则称为角砾岩。
              </p>
              <p class="highlight-success">
                <strong>砂岩</strong
                >主要由各种砂粒胶结而成的，颗粒直径在0.05-2mm，其中砂粒含量要大于50%，结构稳定，通常呈淡褐色或红色，主要含硅、钙、黏土和氧化铁。
              </p>
              <p class="highlight-success">
                <strong>粉砂岩</strong
                >由粒径为0.0625～0.0039毫米的粉砂的含量占50%以粉砂岩标本的一种碎屑沉积岩。粉砂岩的颜色多种多样，随混入物的成分不同而变。粉砂岩是在经过了长距离搬运、水动力条件比较安静、沉积速度缓慢的环境下形成的。
              </p>
              <div class="rock-comparison-container">
                <!-- 角砾岩 -->
                <div class="comparison-image-wrapper">
                  <img
                    src="@/assets/RockIdenti/角砾岩.jpg"
                    class="comparison-image"
                    alt="角砾岩"
                  />
                  <span class="comparison-caption"
                    >角砾岩<small>(点击放大查看矿物结构)</small></span
                  >
                </div>
                <!-- 砾岩 -->
                <div class="comparison-image-wrapper">
                  <img
                    src="@/assets/RockIdenti/砾岩1.jpg"
                    class="comparison-image"
                    alt="砾岩"
                  />
                  <span class="comparison-caption"
                    >砾岩<small>(点击放大查看矿物结构)</small></span
                  >
                </div>
                <!-- 砂岩 -->
                <div class="comparison-image-wrapper">
                  <img
                    src="@/assets/RockIdenti/砂岩.jpg"
                    class="comparison-image"
                    alt="砂岩"
                  />
                  <span class="comparison-caption"
                    >砂岩<small>(点击放大查看矿物结构)</small></span
                  >
                </div>
                <!-- 粉砂岩 -->
                <div class="comparison-image-wrapper">
                  <img
                    src="@/assets/RockIdenti/粉砂岩.jpg"
                    class="comparison-image"
                    alt="粉砂岩"
                  />
                  <span class="comparison-caption"
                    >粉砂岩<small>(点击放大查看矿物结构)</small></span
                  >
                </div>
              </div>
              <p>
                第二种为<span class="rock-term term-warning"
                  >化学沉积岩（Chemical sedimentary rocks）</span
                >。是指由母岩风化产物中的溶解物质通过化学作用沉积而成的岩石。
              </p>
              <div class="rock-image-container">
                <img
                  src="@/assets/RockIdenti/化学作用沉积.jpg"
                  class="rock-image"
                  alt="化学作用沉积"
                />
                <div class="content-image-caption">化学作用沉积</div>
              </div>
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
              <div class="rock-comparison-container">
                <!-- 铁矿石 -->
                <div class="comparison-image-wrapper">
                  <img
                    src="@/assets/RockIdenti/铁矿石.jpg"
                    class="comparison-image"
                    alt="铁矿石"
                  />
                  <span class="comparison-caption"
                    >铁矿石<small>(点击放大查看矿物结构)</small></span
                  >
                </div>
                <!-- 赤铁矿 -->
                <div class="comparison-image-wrapper">
                  <img
                    src="@/assets/RockIdenti/赤铁矿.jpg"
                    class="comparison-image"
                    alt="赤铁矿"
                  />
                  <span class="comparison-caption"
                    >赤铁矿<small>(点击放大查看矿物结构)</small></span
                  >
                </div>
              </div>
              <p>
                最后一种为<span class="rock-term term-purple"
                  >生物沉积岩（Organic sedimentary rocks）</span
                >。生物沉积岩是由生物体的堆积造成的，如花粉、孢子、贝壳、珊瑚等大量堆积，经过成岩作用形成。
              </p>
              <p>
                例如部分生物成因的石灰岩（limestone）：白垩岩（Chalk）、贝壳灰岩（Coquina）等。
              </p>
              <div class="rock-image-container">
                <img
                  src="@/assets/RockIdenti/沉积岩.jpg"
                  class="rock-image"
                  alt="沉积岩"
                />
                <div class="content-image-caption">沉积岩</div>
              </div>
              <p class="highlight-purple">
                <strong>白垩岩</strong
                >是一种软质、白色、多孔的沉积碳酸盐岩，是一种由方解石组成的石灰岩。它是在相当深的海洋条件下，由一种叫做颗石藻的微生物脱落下来的细小方解石壳逐渐堆积而成的。
              </p>
              <p class="highlight-purple">
                <strong>贝壳灰岩</strong
                >是一种由完整的生物贝壳被泥晶方解石固结而成的石灰岩。
              </p>
              <p>
                按生物种类不同可分为腕足类贝壳灰岩、软体类贝壳灰岩等。也可直接按生物种类命名，如有孔虫灰岩、纺锤虫灰岩等。
              </p>
              <div class="rock-comparison-container">
                <!-- 白垩岩 -->
                <div class="comparison-image-wrapper">
                  <img
                    src="@/assets/RockIdenti/白垩岩.jpg"
                    class="comparison-image"
                    alt="白垩岩"
                  />
                  <span class="comparison-caption">白垩岩</span>
                </div>
                <!-- 贝壳灰岩 -->
                <div class="comparison-image-wrapper">
                  <img
                    src="@/assets/RockIdenti/贝壳灰岩.jpg"
                    class="comparison-image"
                    alt="贝壳灰岩"
                  />
                  <span class="comparison-caption"
                    >贝壳灰岩<small>(点击放大查看矿物结构)</small></span
                  >
                </div>
              </div>
            </el-collapse-item>
            <!-- 变质岩 -->
            <el-collapse-item
              title="03 变质岩"
              name="3"
              class="collapse-item metamorphic rock-section"
            >
              <p>变质岩是通过变质作用形成的三大岩之一。</p>
              <div class="rock-image-container">
                <img
                  src="@/assets/RockIdenti/变质岩.jpg"
                  class="rock-image"
                  alt="变质岩"
                />
                <div class="content-image-caption">变质岩</div>
              </div>
              <p>
                变质作用是指岩石在基本上处于固体状态下，受到温度、压力及化学活动性流体的作用，发生矿物成分、化学成分、岩石结构与构造变化的地质作用。
              </p>
              <p>
                变质岩的岩性特征，既受原岩的控制，具有一定继承性，又因经受了不同的变质作用，在矿物成分和结构构造上又具有新生性（如含有变质矿物和定向构造等），因此变质岩具有众多种类。
              </p>
              <p class="highlight-teal">
                <strong>片麻岩</strong>，
                是由岩浆岩或沉积岩经深变质作用而成的岩石。具有暗色与浅色矿物相间呈定向或条带状断续排列的片麻状构造特征，呈变晶结构。片麻岩按原岩的不同，可分为由岩浆岩变质而成的"正片麻岩"和由沉积岩变质而成的"副片麻岩"。
              </p>
              <p class="highlight-teal">
                <strong>千枚岩</strong
                >是具有千枚状构造的低级变质岩石。原岩通常为泥质岩石（或含硅质、钙质、炭质的泥质岩）、粉砂岩及中、酸性凝灰岩等。
              </p>
              <p class="highlight-teal">
                <strong>片岩</strong
                >是具有典型的片状构造的变质岩一种，是区域变质的产物。片状，板状，纤维状矿物相互平行排列，粒度较粗，肉眼可辨别。主要矿物为云母，石英，角闪石，绿泥石等。
              </p>
              <p class="highlight-teal">
                <strong>板岩</strong
                >是具有板状构造，基本没有重结晶的变质岩。原岩为泥质、粉质或中性凝灰岩，沿板理方向可以剥成薄片。
              </p>
              <p class="highlight-teal">
                <strong>大理岩</strong
                >是由碳酸盐岩经区域变质作用或接触变质作用形成的变质岩。主要由方解石和白云石组成，具粒状变晶结构，块状（有时为条带状）构造。
              </p>
              <p class="highlight-teal">
                <strong>石英岩</strong
                >是一种主要由石英组成的变质岩，多由石英砂岩或其他硅质岩石经变质作用，重结晶形成。石英岩一般为块状构造，粒状变晶结构，呈晶质集合体。
              </p>
              <div class="rock-comparison-container">
                <!-- 片麻岩 -->
                <div class="comparison-image-wrapper">
                  <img
                    src="@/assets/RockIdenti/片麻岩.jpg"
                    class="comparison-image"
                    alt="片麻岩"
                  />
                  <span class="comparison-caption"
                    >片麻岩<small>(点击放大查看矿物结构)</small></span
                  >
                </div>
                <!-- 千枚岩 -->
                <div class="comparison-image-wrapper">
                  <img
                    src="@/assets/RockIdenti/千枚岩.jpg"
                    class="comparison-image"
                    alt="千枚岩"
                  />
                  <span class="comparison-caption"
                    >千枚岩<small>(点击放大查看矿物结构)</small></span
                  >
                </div>
                <!-- 片岩 -->
                <div class="comparison-image-wrapper">
                  <img
                    src="@/assets/RockIdenti/片岩.jpg"
                    class="comparison-image"
                    alt="片岩"
                  />
                  <span class="comparison-caption"
                    >片岩<small>(点击放大查看矿物结构)</small></span
                  >
                </div>
                <!-- 板岩 -->
                <div class="comparison-image-wrapper">
                  <img
                    src="@/assets/RockIdenti/板岩1.jpg"
                    class="comparison-image"
                    alt="板岩"
                  />
                  <span class="comparison-caption"
                    >板岩<small>(点击放大查看矿物结构)</small></span
                  >
                </div>
                <!-- 大理岩 -->
                <div class="comparison-image-wrapper">
                  <img
                    src="@/assets/RockIdenti/大理岩.jpg"
                    class="comparison-image"
                    alt="大理岩"
                  />
                  <span class="comparison-caption"
                    >大理岩<small>(点击放大查看矿物结构)</small></span
                  >
                </div>
                <!-- 石英岩 -->
                <div class="comparison-image-wrapper">
                  <img
                    src="@/assets/RockIdenti/石英岩.jpg"
                    class="comparison-image"
                    alt="石英岩"
                  />
                  <span class="comparison-caption"
                    >石英岩<small>(点击放大查看矿物结构)</small></span
                  >
                </div>
              </div>
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
              <div class="igneous-content">
                <h3>1．颜色</h3>
                <p>
                  岩浆岩的颜色大致可分为浅色、中色和暗色几种。观察时，应分出原生色「即新鲜面的颜色」及次生色「即经过次生变化后风化面的颜色」。原生色可反映岩石的成分及形成环境，次生色可反映岩石的经历过程。
                </p>

                <p>
                  深成岩的颜色深浅，是暗色矿物含量和浅色矿物含量比率的反映。
                </p>

                <p>
                  辉长岩、撖榄岩为深色；闪长岩为中色；花岗岩、霞石正长岩为浅色。
                </p>

                <p>
                  浅成岩的颜色深浅，多受矿物拉度大小。结晶程度的影响，如微晶和隐晶质岩石比相同成分的深成岩颜色深。
                </p>

                <p>
                  喷出岩的颜色深浅，则受到岩石成分、次生变化、结晶程度等方面的影响。此外，还受到强烈氧化燃烧作用的影响。通常玄武岩类多呈黑、黑绿色、蚀变后呈中绿～浅绿色；安山岩类呈深灰、暗紫～紫红色；流纹岩类呈浅灰～粉红色。
                </p>

                <h3>2．结构</h3>
                <p>
                  显晶质岩石，其主要造岩矿物粒度大致相等时，应写出粒度与习惯用结构名称。如中粒辉长结构、粗粒花岗结构、中粒二长结、粗粒半自形结构等；
                </p>

                <p>
                  隐晶质至玻璃质岩石，应写明隐晶质结构或半晶质结构，或玻璃质结构。
                </p>

                <p>
                  具隐晶质至玻璃质的岩石，以及其它显微结构的岩石，只有在岩石薄片鉴定的情沉下，才能定出其具体结构。
                </p>

                <h3>3．构造</h3>
                <p>
                  最常见的岩浆岩构造的种类不多，只须准确描述即可。侵入岩多具块状、斑杂状、条带状构造；喷出岩则多具气孔、杏仁、流纹构造等。
                </p>

                <h3>4．矿物成分</h3>
                <p>
                  对矿物成分的观察和描述应包括以下内容：矿物名称、物性特点、粒度大小、百分含量等。
                </p>

                <p>
                  对显晶质等粒结构的岩石，应描述主要矿物、次要矿物、副矿物、次生矿物。描述时应按含量多的先描述，含量少的后描，即"先多后少"的顺序。
                </p>

                <p>
                  对矿物特征的描述应包括以下几方面：颜色、形态及鉴定特征（包括可反映岩石的结构、构造等特征）、粒度、目估百分含量等。
                </p>

                <p>
                  岩石具斑状或似斑状结构时，应首先指明斑晶矿物在整个岩石中的目估百分含量，然后以斑晶矿物含量"先多后少"的顺序描述其特征。接着描述基质中矿物的特征，如矿物粒度呈细粒时，其描述顺序与要求同前述。
                </p>

                <p>
                  玢岩和斑岩的区别：由基性斜长石和暗色矿物作斑晶的岩石称为：××玢岩；以钾长石和石英作斑晶的岩石称为：××斑岩。
                </p>

                <h3>5.岩浆岩描述实例</h3>

                <div class="example">
                  <h4>①．深成岩——橄揽辉长岩</h4>
                  <div class="example-flex-layout">
                    <!-- 新增的布局容器 -->
                    <div class="example-text-content">
                      <!-- 文字部分 -->
                      <p>
                        <strong>肉眼描述：</strong
                        >新鲜面暗灰色，风化面暗褐色。中粒辉长结构，颗粒均匀，颗粒直径在2－5mm。块状构造。岩石比较新鲜。暗色矿物主要为黑色的辉石，呈近于短轴状的颗粒，有时可见解理。其次，可见少量黄绿色（或暗绿），油脂光泽的橄榄石和具珍珠光泽的黑云母。暗色矿物含量约50％。浅色矿物为斜长石，呈长板状，白色至灰色，玻璃光泽，含量约50％。
                      </p>
                      <p>
                        <strong>镜下描述：</strong
                        >岩石新鲜，未经蚀交。主耍矿物为普通辉石、基性斜长石，次要矿物为橄榄石、黑云母。辉长结构。
                      </p>
                      <p><strong>岩石定名：</strong>橄榄辉长岩</p>
                    </div>
                    <div class="example-image-wrapper">
                      <!-- 图片部分 -->
                      <img
                        src="@/assets/RockIdenti/橄榄辉长岩.jpg"
                        class="rock-image"
                        alt="橄榄辉长岩"
                      />
                      <div class="content-image-caption">橄榄辉长岩</div>
                    </div>
                  </div>
                </div>
                <div class="example">
                  <h4>②．浅成岩——闪长玢岩</h4>
                  <div class="example-flex-layout">
                    <!-- 新增的布局容器 -->
                    <div class="example-text-content">
                      <!-- 文字部分 -->
                      <p>
                        <strong>肉眼描述：</strong
                        >浅灰色，斑状结构，块状构造。斑晶成分为灰白色板状斜长石和绿色柱状角闪石，斑晶直径1－6mm，斑晶占岩石体积30％左右。基质为隐晶质结构。
                      </p>
                      <p>
                        <strong>镜下描述：</strong
                        >斑状结构。斑晶由斜长石和角闪石组成，并有少量黑云母和石英。基质呈显微粒状结构，主要成分为斜长石，其次是角闪石，基质约占岩石体积的65%。
                      </p>
                      <p><strong>岩石定名：</strong>闪长玢岩</p>
                    </div>
                    <div class="example-image-wrapper">
                      <!-- 图片部分 -->
                      <img
                        src="@/assets/RockIdenti/闪长玢岩.jpg"
                        class="rock-image"
                        alt="闪长玢岩"
                      />
                      <div class="content-image-caption">闪长玢岩</div>
                    </div>
                  </div>
                </div>

                <div class="example">
                  <h4>③．喷出岩——流纹岩</h4>
                  <div class="example-flex-layout">
                    <!-- 新增的布局容器 -->
                    <div class="example-text-content">
                      <!-- 文字部分 -->
                      <p>
                        <strong>肉眼描述：</strong
                        >浅紫色，斑状结构，流纹构造，气孔构造，斑晶成分为石英和透长石。石英为不规则粒状，无色，油脂光泽，贝壳状断口。透长石为柱状，无色透明，玻璃光泽，有解理。基质为隐晶质，浅紫色为主，夹杂有粉红和白色，稍有拉长的气孔和柱状透长石组成的定向排列，斑晶直径1－2
                        mm，约占岩石体积15%。
                      </p>
                      <p>
                        <strong>镜下描述：</strong
                        >斑状结构，流纹构造，斑晶成分为透长石和石英。基质具霏细结构，局部玻璃质结构，略带黑色不透明微粒，占75%。
                      </p>
                      <p><strong>岩石定名：</strong>流纹岩</p>
                    </div>
                    <div class="example-image-wrapper">
                      <!-- 图片部分 -->
                      <img
                        src="@/assets/RockIdenti/流纹岩2.jpg"
                        class="rock-image"
                        alt="流纹岩"
                      />
                      <div class="content-image-caption">流纹岩</div>
                    </div>
                  </div>
                </div>
                <h3>6.岩浆岩类的野外鉴定特征</h3>

                <!-- 橄榄岩-苦橄岩类 -->
                <div class="geo-rock-ident-container">
                  <h2 class="geo-rock-class-title">①橄榄岩-苦橄岩类</h2>

                  <div class="geo-rock-card-wrapper">
                    <!-- 纯橄榄岩 -->
                    <div class="geo-rock-card-item">
                      <div class="geo-rock-card-header">
                        <h3 class="geo-rock-name">纯橄榄岩</h3>
                      </div>
                      <div class="geo-rock-card-body">
                        <div class="geo-rock-visual">
                          <div class="geo-rock-img-box">
                            <img
                              src="@/assets/RockIdenti/纯橄榄岩.jpg"
                              alt="纯橄榄岩"
                              class="geo-rock-img"
                            />
                            <p class="geo-rock-img-desc">纯橄榄岩</p>
                          </div>
                        </div>
                        <div class="geo-rock-details">
                          <div class="geo-rock-macro">
                            <h4 class="geo-feature-title">手标本特征</h4>
                            <p class="geo-feature-desc">
                              几乎全由橄榄石组成。橄榄石为浅绿色，粒状，玻璃光泽，没有解理。
                            </p>
                          </div>
                          <div class="geo-rock-micro">
                            <h4 class="geo-feature-title">镜下特征</h4>
                            <p class="geo-feature-desc">
                              橄榄石呈自形粒状或他形粒状。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- 辉石岩 -->
                    <div class="geo-rock-card-item">
                      <div class="geo-rock-card-header">
                        <h3 class="geo-rock-name">辉石岩</h3>
                      </div>
                      <div class="geo-rock-card-body">
                        <div class="geo-rock-visual">
                          <div class="geo-rock-img-box">
                            <img
                              src="@/assets/RockIdenti/辉石岩.jpg"
                              alt="辉石岩"
                              class="geo-rock-img"
                            />
                            <p class="geo-rock-img-desc">辉石岩</p>
                          </div>
                        </div>
                        <div class="geo-rock-details">
                          <div class="geo-rock-macro">
                            <h4 class="geo-feature-title">手标本特征</h4>
                            <p class="geo-feature-desc">几乎全由辉石组成。</p>
                          </div>
                          <div class="geo-rock-micro">
                            <h4 class="geo-feature-title">镜下特征</h4>
                            <p class="geo-feature-desc">
                              斜方辉石和单斜辉石均有。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- 蛇纹石化橄榄岩 -->
                    <div class="geo-rock-card-item">
                      <div class="geo-rock-card-header">
                        <h3 class="geo-rock-name">蛇纹石化橄榄岩</h3>
                      </div>
                      <div class="geo-rock-card-body">
                        <div class="geo-rock-visual">
                          <div class="geo-rock-img-box">
                            <img
                              src="@/assets/RockIdenti/蛇纹石化橄榄岩.jpg"
                              alt="蛇纹石化橄榄岩"
                              class="geo-rock-img"
                            />
                            <p class="geo-rock-img-desc">蛇纹石化橄榄岩</p>
                          </div>
                        </div>
                        <div class="geo-rock-details">
                          <div class="geo-rock-macro">
                            <h4 class="geo-feature-title">手标本特征</h4>
                            <p class="geo-feature-desc">
                              网格状构造，有粒状橄榄石的残核。蛇纹石为橄榄岩蚀变产物。
                            </p>
                          </div>
                          <div class="geo-rock-micro">
                            <h4 class="geo-feature-title">镜下特征</h4>
                            <p class="geo-feature-desc">
                              蛇纹石化从岩石裂隙或橄榄石粒间开始，蚀变不彻底，仍残留有小颗粒橄榄石（残留结构），蛇纹石化过程中析出铁质，生成磁铁矿小微粒，呈不规则地分布在蛇纹石中。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- 苦橄岩 -->
                    <div class="geo-rock-card-item">
                      <div class="geo-rock-card-header">
                        <h3 class="geo-rock-name">苦橄岩</h3>
                      </div>
                      <div class="geo-rock-card-body">
                        <div class="geo-rock-visual">
                          <div class="geo-rock-img-box">
                            <img
                              src="@/assets/RockIdenti/苦橄岩.jpg"
                              alt="苦橄岩"
                              class="geo-rock-img"
                            />
                            <p class="geo-rock-img-desc">苦橄岩</p>
                          </div>
                        </div>
                        <div class="geo-rock-details">
                          <div class="geo-rock-macro">
                            <h4 class="geo-feature-title">手标本特征</h4>
                            <p class="geo-feature-desc">
                              以橄榄石为主，可出现少量的角闪石、黑云母等。成分相当于橄榄岩。
                            </p>
                          </div>
                          <div class="geo-rock-micro">
                            <h4 class="geo-feature-title">镜下特征</h4>
                            <p class="geo-feature-desc">
                              镜下特征与橄榄岩相似，可见橄榄石与少量角闪石、黑云母共生。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 辉长岩-玄武岩类 -->
                <div class="geo-rock-ident-container">
                  <h2 class="geo-rock-class-title">辉长岩-玄武岩类</h2>

                  <div class="geo-rock-card-wrapper">
                    <!-- 辉长岩 -->
                    <div class="geo-rock-card-item">
                      <div class="geo-rock-card-header">
                        <h3 class="geo-rock-name">辉长岩</h3>
                      </div>
                      <div class="geo-rock-card-body">
                        <div class="geo-rock-visual">
                          <div class="geo-rock-img-box">
                            <img
                              src="@/assets/RockIdenti/辉长岩.jpg"
                              alt="辉长岩"
                              class="geo-rock-img"
                            />
                            <p class="geo-rock-img-desc">辉长岩</p>
                          </div>
                        </div>
                        <div class="geo-rock-details">
                          <div class="geo-rock-macro">
                            <h4 class="geo-feature-title">手标本特征</h4>
                            <p class="geo-feature-desc">
                              主要矿物由基性斜长石和单斜辉石组成。次要矿物有橄榄石、斜方辉石，有时有角闪石和黑云母。岩石颜色深，常呈黑色、灰色等。辉长结构，块状构造，有时呈条带状构造。
                            </p>
                          </div>
                          <div class="geo-rock-micro">
                            <h4 class="geo-feature-title">镜下特征</h4>
                            <p class="geo-feature-desc">
                              主要由辉石和基性斜长石组成，粗-中粒辉长结构。副矿物有磁铁矿、钛铁矿、磷灰石。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- 斜长岩 -->
                    <div class="geo-rock-card-item">
                      <div class="geo-rock-card-header">
                        <h3 class="geo-rock-name">斜长岩</h3>
                      </div>
                      <div class="geo-rock-card-body">
                        <div class="geo-rock-visual">
                          <div class="geo-rock-img-box">
                            <img
                              src="@/assets/RockIdenti/斜长岩.jpg"
                              alt="斜长岩"
                              class="geo-rock-img"
                            />
                            <p class="geo-rock-img-desc">斜长岩</p>
                          </div>
                        </div>
                        <div class="geo-rock-details">
                          <div class="geo-rock-macro">
                            <h4 class="geo-feature-title">手标本特征</h4>
                            <p class="geo-feature-desc">
                              几乎全由斜长石组成，颜色较浅。
                            </p>
                          </div>
                          <div class="geo-rock-micro">
                            <h4 class="geo-feature-title">镜下特征</h4>
                            <p class="geo-feature-desc">
                              主要由基性斜长石组成，几乎不含或含极少量暗色矿物。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- 辉绿岩 -->
                    <div class="geo-rock-card-item">
                      <div class="geo-rock-card-header">
                        <h3 class="geo-rock-name">辉绿岩</h3>
                      </div>
                      <div class="geo-rock-card-body">
                        <div class="geo-rock-visual">
                          <div class="geo-rock-img-box">
                            <img
                              src="@/assets/RockIdenti/辉绿岩.jpg"
                              alt="辉绿岩"
                              class="geo-rock-img"
                            />
                            <p class="geo-rock-img-desc">辉绿岩</p>
                          </div>
                        </div>
                        <div class="geo-rock-details">
                          <div class="geo-rock-macro">
                            <h4 class="geo-feature-title">手标本特征</h4>
                            <p class="geo-feature-desc">
                              为浅成侵入岩。未经蚀变的辉绿岩，颜色多为深灰或黑色，风化后呈浅绿或绿灰色。具辉绿结构。
                            </p>
                          </div>
                          <div class="geo-rock-micro">
                            <h4 class="geo-feature-title">镜下特征</h4>
                            <p class="geo-feature-desc">
                              主要由基性斜长石和单斜辉石组成，具典型的辉绿结构（白色的细长条斜长石搭成三角架，其间充填粒状的辉石）。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- 辉绿玢岩 -->
                    <div class="geo-rock-card-item">
                      <div class="geo-rock-card-header">
                        <h3 class="geo-rock-name">辉绿玢岩</h3>
                      </div>
                      <div class="geo-rock-card-body">
                        <div class="geo-rock-visual">
                          <div class="geo-rock-img-box">
                            <img
                              src="@/assets/RockIdenti/辉绿玢岩.jpg"
                              alt="辉绿玢岩"
                              class="geo-rock-img"
                            />
                            <p class="geo-rock-img-desc">辉绿玢岩</p>
                          </div>
                        </div>
                        <div class="geo-rock-details">
                          <div class="geo-rock-macro">
                            <h4 class="geo-feature-title">手标本特征</h4>
                            <p class="geo-feature-desc">
                              具斑状结构的辉绿岩，斑晶为斜长石和暗色矿物。
                            </p>
                          </div>
                          <div class="geo-rock-micro">
                            <h4 class="geo-feature-title">镜下特征</h4>
                            <p class="geo-feature-desc">
                              斑状结构，斑晶为斜长石和暗色矿物，基质为辉绿结构。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- 细晶辉长岩 -->
                    <div class="geo-rock-card-item">
                      <div class="geo-rock-card-header">
                        <h3 class="geo-rock-name">细晶辉长岩</h3>
                      </div>
                      <div class="geo-rock-card-body">
                        <div class="geo-rock-visual">
                          <div class="geo-rock-img-box">
                            <img
                              src="@/assets/RockIdenti/细晶辉长岩.jpg"
                              alt="细晶辉长岩"
                              class="geo-rock-img"
                            />
                            <p class="geo-rock-img-desc">细晶辉长岩</p>
                          </div>
                        </div>
                        <div class="geo-rock-details">
                          <div class="geo-rock-macro">
                            <h4 class="geo-feature-title">手标本特征</h4>
                            <p class="geo-feature-desc">
                              成分与辉长岩相同，颜色较深，具细粒结构。
                            </p>
                          </div>
                          <div class="geo-rock-micro">
                            <h4 class="geo-feature-title">镜下特征</h4>
                            <p class="geo-feature-desc">
                              矿物组成与辉长岩相同，但具细粒结构而不具其它结构为特征。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- 橄榄玄武岩 -->
                    <div class="geo-rock-card-item">
                      <div class="geo-rock-card-header">
                        <h3 class="geo-rock-name">橄榄玄武岩</h3>
                      </div>
                      <div class="geo-rock-card-body">
                        <div class="geo-rock-visual">
                          <div class="geo-rock-img-box">
                            <img
                              src="@/assets/RockIdenti/橄榄玄武岩.jpg"
                              alt="橄榄玄武岩"
                              class="geo-rock-img"
                            />
                            <p class="geo-rock-img-desc">橄榄玄武岩</p>
                          </div>
                        </div>
                        <div class="geo-rock-details">
                          <div class="geo-rock-macro">
                            <h4 class="geo-feature-title">手标本特征</h4>
                            <p class="geo-feature-desc">
                              能见到橄榄石斑晶，常见橄榄石的蚀变产物——伊丁石。基质为隐晶质。
                            </p>
                          </div>
                          <div class="geo-rock-micro">
                            <h4 class="geo-feature-title">镜下特征</h4>
                            <p class="geo-feature-desc">
                              斑状结构，斑晶为橄榄石（常蚀变为伊丁石），基质为隐晶质或微晶结构。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- 玄武岩 -->
                    <div class="geo-rock-card-item">
                      <div class="geo-rock-card-header">
                        <h3 class="geo-rock-name">玄武岩</h3>
                      </div>
                      <div class="geo-rock-card-body">
                        <div class="geo-rock-visual">
                          <div class="geo-rock-img-box">
                            <img
                              src="@/assets/RockIdenti/玄武岩.jpg"
                              alt="玄武岩"
                              class="geo-rock-img"
                            />
                            <p class="geo-rock-img-desc">玄武岩</p>
                          </div>
                        </div>
                        <div class="geo-rock-details">
                          <div class="geo-rock-macro">
                            <h4 class="geo-feature-title">手标本特征</h4>
                            <p class="geo-feature-desc">
                              肉眼观察为隐晶质，颜色多为黑色，黑绿色，有时为暗紫色。粗玄结构或间隐结构。有时具斑状结构。块状构造、气孔状构造。厚层玄武岩中常见柱状节理。
                            </p>
                          </div>
                          <div class="geo-rock-micro">
                            <h4 class="geo-feature-title">镜下特征</h4>
                            <p class="geo-feature-desc">
                              矿物成分以辉石和基性斜长石为主，这是与安山岩的主要区别。基质常为隐晶质或玻璃质。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- 杏仁状玄武岩 -->
                    <div class="geo-rock-card-item">
                      <div class="geo-rock-card-header">
                        <h3 class="geo-rock-name">杏仁状玄武岩</h3>
                      </div>
                      <div class="geo-rock-card-body">
                        <div class="geo-rock-visual">
                          <div class="geo-rock-img-box">
                            <img
                              src="@/assets/RockIdenti/杏仁状玄武岩.jpg"
                              alt="杏仁状玄武岩"
                              class="geo-rock-img"
                            />
                            <p class="geo-rock-img-desc">杏仁状玄武岩</p>
                          </div>
                        </div>
                        <div class="geo-rock-details">
                          <div class="geo-rock-macro">
                            <h4 class="geo-feature-title">手标本特征</h4>
                            <p class="geo-feature-desc">
                              具有气孔构造的玄武岩，气孔中充填有白色的沸石等矿物，形成杏仁状构造。
                            </p>
                          </div>
                          <div class="geo-rock-micro">
                            <h4 class="geo-feature-title">镜下特征</h4>
                            <p class="geo-feature-desc">
                              基质特征与玄武岩相同，气孔中充填有次生矿物如沸石、方解石、石英等。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-collapse-item>
            <el-collapse-item
              title="02 沉积岩识别"
              name="5"
              class="collapse-item sedimentary"
            ></el-collapse-item>
            <el-collapse-item
              title="03 变质岩识别"
              name="6"
              class="collapse-item metamorphic"
            ></el-collapse-item>
          </el-collapse>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<style scoped>
.geo-rock-ident-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.geo-rock-class-title {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 2px solid #3498db;
}

.geo-rock-card-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 25px;
}

.geo-rock-card-item {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.geo-rock-card-item:hover {
  transform: translateY(-5px);
}

.geo-rock-card-header {
  background-color: #3498db;
  color: white;
  padding: 12px 15px;
}

.geo-rock-name {
  margin: 0;
  font-size: 18px;
}

.geo-rock-card-body {
  display: flex;
  padding: 15px;
}

.geo-rock-visual {
  flex: 1;
  min-width: 120px;
  margin-right: 15px;
}

.geo-rock-img-box {
  text-align: center;
}

.geo-rock-img {
  width: 100%;
  max-width: 150px;
  height: auto;
  border-radius: 4px;
  border: 1px solid #eee;
}

.geo-rock-img-desc {
  margin-top: 5px;
  font-size: 12px;
  color: #7f8c8d;
}

.geo-rock-details {
  flex: 2;
}

.geo-rock-macro,
.geo-rock-micro {
  margin-bottom: 12px;
}

.geo-feature-title {
  color: #2980b9;
  margin-bottom: 5px;
  font-size: 15px;
}

.geo-feature-desc {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .geo-rock-card-wrapper {
    grid-template-columns: 1fr;
  }

  .geo-rock-card-body {
    flex-direction: column;
  }

  .geo-rock-visual {
    margin-right: 0;
    margin-bottom: 15px;
    text-align: center;
  }
}

/* 新增：左右布局样式 */
.example-flex-layout {
  display: flex;
  gap: 20px; /* 文字和图片之间的间距 */
  margin-top: 10px;
}

.example-text-content {
  flex: 1; /* 文字部分占据剩余空间 */
}

.example-image-wrapper {
  flex: 0 0 300px; /* 图片固定宽度，不缩放 */
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 响应式：在小屏幕上改为上下排列 */
@media (max-width: 768px) {
  .example-flex-layout {
    flex-direction: column;
  }

  .example-image-wrapper {
    margin-top: 15px;
  }
}

.collapse-item.igneous .igneous-content {
  padding: 15px;
  line-height: 1.6;
  color: #333;
}

.collapse-item.igneous h3 {
  color: #2c3e50;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 18px;
  border-left: 4px solid #e74c3c;
  padding-left: 10px;
}

.collapse-item.igneous h4 {
  color: #34495e;
  margin: 15px 0 8px 0;
  font-size: 16px;
}

.collapse-item.igneous p {
  margin-bottom: 10px;
  text-align: justify;
}

.collapse-item.igneous .example {
  background-color: #f9f9f9;
  border-left: 3px solid #3498db;
  padding: 10px 15px;
  margin: 15px 0;
  border-radius: 0 4px 4px 0;
}

.collapse-item.igneous .field-feature {
  background-color: #f0f7ff;
  border-left: 3px solid #2980b9;
  padding: 10px 15px;
  margin: 15px 0;
  border-radius: 0 4px 4px 0;
}

.collapse-item.igneous strong {
  color: #2c3e50;
}

/* 新增的并排容器样式（全新类名） */
.rock-row-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin: 20px 0;
}

/* 并排图片容器调整 */
.rock-row-item {
  flex: 1;
  min-width: 250px;
  max-width: 400px;
  text-align: center;
}

/* 保持原有图片样式不变 */
.rock-row-item .rock-image {
  width: 100%;
  height: auto;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .rock-row-item {
    min-width: 100%;
  }
}

/* 图片容器交互增强 */
.comparison-image-wrapper {
  flex: 1 1 300px;
  text-align: center;
  position: relative;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* 图片悬停效果 */
.comparison-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  max-height: 300px;
  border-radius: 6px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: zoom-in;
  filter: brightness(0.98);
}

.comparison-image:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  filter: brightness(1.05);
  border-color: #3a8ee6;
}

/* 点击放大效果 */
.comparison-image:active {
  transform: scale(2.2); /* 增大放大倍数 */
  box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.7); /* 全屏遮罩 */
  z-index: 1000; /* 确保在最顶层 */
  position: relative; /* 建立新的堆叠上下文 */
  cursor: zoom-out;
}

/* 标题动画 */
.comparison-caption {
  display: block;
  margin-top: 10px;
  font-size: 15px;
  color: #666;
  font-weight: 500;
  transition: all 0.3s ease;
  transform-origin: center top;
}

.comparison-image-wrapper:hover .comparison-caption {
  color: #3a8ee6;
  transform: scale(1.05);
}

/* 专业标记点 */
.geo-marker {
  position: absolute;
  width: 12px;
  height: 12px;
  background: #f56c6c;
  border-radius: 50%;
  border: 2px solid white;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.comparison-image-wrapper:hover .geo-marker {
  opacity: 1;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .comparison-image-wrapper {
    flex-basis: 100%;
  }
  .comparison-image:active {
    transform: scale(1.8);
    box-shadow: 0 0 0 100vh rgba(0, 0, 0, 0.7);
  }
}

/* 新增的并排展示样式（全新类名） */
.rock-comparison-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px 0;
  gap: 30px;
  position: relative; /* 建立新的定位上下文 */
  z-index: 1; /* 确保容器在普通文档流上方 */
}

.comparison-image-wrapper {
  flex: 1 1 300px;
  text-align: center;
  position: static; /* 重置定位 */
}

.comparison-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  max-height: 300px;
  border-radius: 6px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), z-index 0.1s 0.3s; /* 延迟z-index变化 */
}

.comparison-caption {
  display: block;
  margin-top: 8px;
  font-size: 14px;
  color: #7f8c8d;
  font-style: italic;
}

@media (max-width: 768px) {
  .comparison-image-wrapper {
    flex-basis: 100%;
  }
}

/* 图片容器样式 */
.rock-image-container {
  margin: 20px auto;
  text-align: center;
  width: 80%; /* 控制容器宽度 */
  max-width: 600px; /* 最大宽度限制 */
}

.rock-image {
  max-width: 100%; /* 最大不超过容器宽度 */
  height: auto; /* 高度自动按比例调整 */
  max-height: 400px; /* 设置最大高度限制 */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #ebeef5;
  display: inline-block; /* 使图片居中 */
}

.rock-image:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* 图片标题样式 */
.content-image-caption {
  display: block;
  margin-top: 8px;
  font-size: 14px;
  color: #7f8c8d;
  font-style: italic;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .rock-image-container {
    width: 95%; /* 小屏幕上更宽 */
  }
  .rock-image {
    max-height: 300px; /* 小屏幕高度减小 */
  }
}

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
