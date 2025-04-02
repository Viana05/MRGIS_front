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
      <div class="demo-collapse">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="地理位置" name="1">
            <p>
              徐州位于江苏省的西北部，地处苏、鲁、豫、皖四省交界。距南京、济南、郑州、合肥皆为300余千米。地理坐标为东经116°22′～118°40′，北纬33°43′～34°58′。东西长约210km，南北宽约140km，总面积11258km²。既是亚欧大陆桥上的第一个区域性中心城市，又是我国长江三角洲和环渤海两大经济区的结合部。
            </p>
          </el-collapse-item>
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
