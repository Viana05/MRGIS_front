<script lang="ts" setup>
import { ref } from "vue";
import { Picture, Search, InfoFilled } from '@element-plus/icons-vue'

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
          <el-carousel height="600px" width="80%" motion-blur class="rock-carousel">
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
            <el-collapse-item title="01 岩浆岩" name="1" class="collapse-item igneous">
              <div class="rock-content">
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
                <div class="rock-sample">
                  <h4>典型岩浆岩标本特征：</h4>
                  <ul>
                    <li><strong>花岗岩：</strong>粗粒结构，主要由石英、长石和云母组成</li>
                    <li><strong>玄武岩：</strong>细粒致密，常具气孔构造</li>
                    <li><strong>流纹岩：</strong>常具流纹构造，斑状结构</li>
                  </ul>
                </div>
              </div>
            </el-collapse-item>
            <el-collapse-item title="02 沉积岩" name="2" class="collapse-item sedimentary">
              <div class="rock-content">
                <p>
                  沉积岩是在岩石循环过程中产生的，三种组成地球岩石圈的主要岩石之一。沉积岩是在地壳发展演化过程中，在地表或接近地表的常温常压条件下，任何先成岩遭受风化剥蚀作用的破坏产物，以及生物作用与火山作用的产物，在原地或经过外力的搬运，所形成的沉积层，又经成岩作用而成的岩石。
                </p>
                <div class="rock-sample">
                  <h4>典型沉积岩标本特征：</h4>
                  <ul>
                    <li><strong>砂岩：</strong>砂状结构，颗粒直径0.05-2mm</li>
                    <li><strong>页岩：</strong>页理构造，泥质结构</li>
                    <li><strong>石灰岩：</strong>加稀盐酸剧烈起泡</li>
                  </ul>
                </div>
              </div>
            </el-collapse-item>
            <el-collapse-item title="03 变质岩" name="3" class="collapse-item metamorphic">
              <div class="rock-content">
                <p>变质岩是通过变质作用形成的三大岩之一。</p>
                <p>
                  变质作用是指岩石在基本上处于固体状态下，受到温度、压力及化学活动性流体的作用，发生矿物成分、化学成分、岩石结构与构造变化的地质作用。
                </p>
                <div class="rock-sample">
                  <h4>典型变质岩标本特征：</h4>
                  <ul>
                    <li><strong>片麻岩：</strong>片麻状构造，矿物定向排列</li>
                    <li><strong>大理岩：</strong>由石灰岩变质而来，粒状变晶结构</li>
                    <li><strong>石英岩：</strong>由砂岩变质而来，坚硬致密</li>
                  </ul>
                </div>
              </div>
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
          <el-carousel height="600px" width="80%" motion-blur class="rock-carousel">
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
          <el-collapse v-model="activeNames2" accordion class="identification-collapse">
            <el-collapse-item title="01 岩浆岩识别" name="4" class="collapse-item igneous">
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
                    <p><strong>肉眼描述：</strong>新鲜面暗灰色，风化面暗褐色。中粒辉长结构，颗粒均匀，颗粒直径在2-5mm。块状构造。岩石比较新鲜。暗色矿物主要为黑色的辉石，呈近于短轴状的颗粒，有时可见解理。其次，可见少量黄绿色（或暗绿），油脂光泽的橄榄石和具珍珠光泽的黑云母。暗色矿物含量约50％。浅色矿物为斜长石，呈长板状，白色至灰色，玻璃光泽，含量约50％。</p>
                    <p><strong>镜下描述：</strong>岩石新鲜，未经蚀交。主耍矿物为普通辉石、基性斜长石，次要矿物为橄榄石、黑云母。辉长结构。</p>
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
.geology-container {
  font-family: 'Microsoft YaHei', Arial, sans-serif;
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
  color: #409EFF;
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
