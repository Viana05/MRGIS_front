<script lang="ts" setup>
import { ref } from "vue";
import type { CollapseModelValue } from "element-plus";

const activeNames = ref(["1"]);
const handleChange = (val: CollapseModelValue) => {
  console.log(val);
};
</script>

<template>
  <div style="text-align: center; width: 100%">
    <img
      src="@/assets/RoadmapIntro/location.jpg"
      style="width: 70%; margin: 0 auto"
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
      <div class="demo-collapse">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="地理位置" name="1">
            <p>
              徐州位于江苏省的西北部，地处苏、鲁、豫、皖四省交界。距南京、济南、郑州、合肥皆为300余千米。地理坐标为东经116°22′～118°40′，北纬33°43′～34°58′。东西长约210km，南北宽约140km，总面积11258km²。既是亚欧大陆桥上的第一个区域性中心城市，又是我国长江三角洲和环渤海两大经济区的结合部。
            </p>
            <p>
              徐州水、陆、空交通发达。京沪、陇海两大铁路干线在徐州交会，是济南、南京、郑州和连云港之间唯一的重镇和连接地。此外，徐沛、徐淮两条铁路将人屯和淮北矿区连接起来。京杭大运河从徐州市郊通过，除冬季冰期外，均可通行中、小型船只，是我国华东地区“北煤南运”和“南粮北调”的重要水道。徐州观音机场辟有至北京、上海、广州、深圳、海口、重庆、成都、沈阳、太原等地的航线，使徐州的交通更加方便。
            </p>
          </el-collapse-item>
          <el-collapse-item title="地质地貌" name="2">
            <p>
              徐州及附近地区的地层为华北型，属华北地层区鲁西北地层分区徐州—宿县小区。区内基岩出露面积较小，多为第四系覆盖，古老的结品基底未见揭示，盖层发育良好。上元古界青白口系和震旦系均属于一套滨、浅海碎屑岩—碳酸盐岩沉积组合，是华北地台东南缘独特的沉积类型。主要出露于东部种羊场、赵圩、魏集地区以及各复式背斜轴部。下古生界寒武系和奥陶系地层广泛出露，并构成复式背斜翼部，组成徐州地区的山系主体，多呈北东一北北东方向，并向北西方向凸出呈弧形展布上古生界石炭系和二叠系为含煤岩系，组成复式向斜核部，除零星露头外，均隐伏于第四系之下。中生代火山岩、火山碎眉岩主要分布于潘塘断陷槽地内，被第四系掩盖。古近系仅见于九里山煤田夹河井田的钻孔内。第四系在全区广泛分布。
            </p>
            <p>
              徐州位于华北平原的东南部，域内除中部和东部存在少数丘岗外，大部分皆为平原。丘陵海拔一般在100～200m左右，丘陵山地面积约占全市的9.4%。丘陵山地分为两大群，一群分布于市域中部，山体高低不一，其中贾汪区中部的大洞山为全市最高峰，海拔为361m；另一群分布于市域东部，最高点为新沂市北部的马陵山，海拔为122.9m。平原总地势由西北向东南降低，平均坡度为1/7000～1/8000，平原约占土地总面积的90%，海拔一般在30～50m之间。
            </p>
          </el-collapse-item>
          <el-collapse-item title="水系" name="3">
            <p>
              地处古淮河的支流沂、沐、泗诸水的下游，以黄河故道为分水岭，形成北部的沂、沐、泗水系和南部的滩、安河水系。境内河流纵横交错湖沼、水库星罗棋布，废黄河斜穿东西，京杭大运河横贯南北，东有沂、沐诸水及骆马湖，西有夏兴、大沙河及微山湖。拥有大型水库两座，中型水库5座，小型水库84座，总库容3.31亿立方米。初步形成具有防洪、灌溉、航运、水产等多功能的河、湖、渠、库相连的水网系统。
            </p>
          </el-collapse-item>
          <el-collapse-item title="气象气候" name="4">
            <div>气象气候</div>
            <p>
              徐州属暖温带季风气候区，东部属暖温带湿润季风气候，西部为暖温带半湿润气候，受东南季风影响较大。年日照时数为2284～2495小时，日照率为52%～57%，年均气温14℃，年均无霜期为200～220天，年平均降水量为800～930mm。雨季降水量占全年的56%。气候资源较为优越，有利于农作物生长。主要气象灾害有旱、涝、风、霜、冻、冰雹等。气候特点为四季分明，光照充足，雨量适中，雨热同期。四季之中春、秋季短，冬、夏季长，春季天气多变，夏季高温多雨，秋季天高气爽，冬季寒潮频袭。
            </p>
          </el-collapse-item>
          <el-collapse-item title="人文地理" name="4">
            <div>人文地理</div>
            <div>
              Controlled consequences: users should be granted the freedom to
              operate, including canceling, aborting or terminating current
              operation.
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <span>连云港区域概况</span>
        </span>
      </template>
      <div class="demo-collapse">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="地理位置" name="1"> </el-collapse-item>
          <el-collapse-item title="地质地貌" name="2">
            <div>地质地貌</div>
            <div>
              Visual feedback: reflect current state by updating or rearranging
              elements of the page.
            </div>
          </el-collapse-item>
          <el-collapse-item title="水系" name="3">
            <div>水系</div>
            <div>
              Definite and clear: enunciate your intentions clearly so that the
              users can quickly understand and make decisions;
            </div>
            <div>
              Easy to identify: the interface should be straightforward, which
              helps the users to identify and frees them from memorizing and
              recalling.
            </div>
          </el-collapse-item>
          <el-collapse-item title="气象气候" name="4">
            <div>气象气候</div>
            <div>
              Controlled consequences: users should be granted the freedom to
              operate, including canceling, aborting or terminating current
              operation.
            </div>
          </el-collapse-item>
          <el-collapse-item title="人文概况" name="4">
            <div>人文地理</div>
            <div>
              Controlled consequences: users should be granted the freedom to
              operate, including canceling, aborting or terminating current
              operation.
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
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
