<script setup>
import { ref } from "vue";

const activeSection = ref("01植物群落样方调查");
const activeTab = ref("乔木观测");

const sections = {
  "01植物群落样方调查": [
    { name: "乔木观测", icon: "🌳" },
    { name: "灌木观测", icon: "🌿" },
    { name: "草本植物观测", icon: "🍀" },
  ],
  "02植物的辨认": [
    { name: "辨认内容", icon: "🔍" },
    { name: "植物对比", icon: "📊" },
  ],
};

const toggleSection = (section) => {
  activeSection.value = section;
  activeTab.value = sections[section][0].name;
};

const toggleTab = (tab) => {
  activeTab.value = tab;
};
</script>

<template>
  <div class="document-container">
    <div class="header">
      <div class="title-section">植物地理实习</div>
      <div class="nav-tabs">
        <button
          v-for="section in Object.keys(sections)"
          :key="section"
          :class="{ active: activeSection === section }"
          @click="toggleSection(section)"
        >
          {{ section }}
        </button>
      </div>
    </div>

    <div class="nav-tabs">
      <button
        v-for="tab in sections[activeSection]"
        :key="tab.name"
        :class="{ active: activeTab === tab.name }"
        @click="toggleTab(tab.name)"
      >
        {{ tab.icon }} {{ tab.name }}
      </button>
    </div>

    <div class="content-section">
      <!-- 乔木观测内容 -->
      <div v-if="activeTab === '乔木观测'">
        <h2 class="section-title">乔木观测</h2>
        <div class="single-image-container">
          <img
            src="@/assets/SoilGeography/土壤.jpg"
            alt="土壤"
            class="geology-image single-image"
          />
          <p class="image-caption">土壤</p>
        </div>
        <p>
          乔木层调查数据表包括样方编号、样方长、样方宽、物种中文名、名、胸径、高度、枝下高、冠幅长、冠幅宽和备注等11个字段，用于记录样方中乔木的调查数据。
        </p>

        <div class="field-grid">
          <div class="field-card">
            <h3>（1）样方编号</h3>
            <p class="field-item"><strong>标识：</strong>quadratCode</p>
            <p class="field-item"><strong>中文名称：</strong>样方编号</p>
            <p class="field-item"><strong>英文名称：</strong>Quadrat Code</p>
            <p class="field-item">
              <strong>定义：</strong>调查乔木样方的顺序号
            </p>
            <p class="field-item"><strong>字段类型：</strong>C</p>
            <p class="field-item"><strong>字段示例：</strong>a1</p>
          </div>

          <div class="field-card">
            <h3>（2）样方长</h3>
            <p class="field-item"><strong>标识：</strong>quadratLength</p>
            <p class="field-item"><strong>中文名称：</strong>样方长</p>
            <p class="field-item"><strong>英文名称：</strong>Quadrat Length</p>
            <p class="field-item"><strong>定义：</strong>植被调查样方的长度</p>
            <p class="field-item"><strong>字段类型：</strong>N</p>
            <p class="field-item"><strong>字段单位：</strong>m</p>
            <p class="field-item"><strong>字段示例：</strong>5</p>
          </div>

          <div class="field-card">
            <h3>（3）样方宽</h3>
            <p class="field-item"><strong>标识：</strong>quadratWidth</p>
            <p class="field-item"><strong>中文名称：</strong>样方宽</p>
            <p class="field-item"><strong>英文名称：</strong>Quadrat Width</p>
            <p class="field-item"><strong>定义：</strong>植被调查样方的宽度</p>
            <p class="field-item"><strong>字段类型：</strong>N</p>
            <p class="field-item"><strong>字段单位：</strong>m</p>
            <p class="field-item"><strong>字段示例：</strong>10</p>
          </div>

          <div class="field-card">
            <h3>（4）物种中文名</h3>
            <p class="field-item"><strong>标识：</strong>vernacularName</p>
            <p class="field-item"><strong>中文名称：</strong>物种中文名</p>
            <p class="field-item"><strong>英文名称：</strong>Vernacular Name</p>
            <p class="field-item"><strong>定义：</strong>植物种中文名</p>
            <p class="field-item"><strong>字段类型：</strong>C</p>
            <p class="field-item"><strong>注释：</strong>推荐以《中国植物志》为标准填写</p>
            <p class="field-item"><strong>字段示例：</strong>白颜树</p>
          </div>

          <div class="field-card">
            <h3>（5）物种学名</h3>
            <p class="field-item"><strong>标识：</strong>scientificName</p>
            <p class="field-item"><strong>中文名称：</strong>物种学名</p>
            <p class="field-item"><strong>英文名称：</strong>Scientific Name</p>
            <p class="field-item"><strong>定义：</strong>使用双名法命名的物种的完整名称，包含命名人</p>
            <p class="field-item"><strong>字段类型：</strong>C</p>
            <p class="field-item"><strong>注释：</strong>推荐以《中国植物志》为标准填写</p>
            <p class="field-item"><strong>字段示例：</strong>Gironniera subaequalis Planch.</p>
          </div>

          <div class="field-card">
            <h3>（6）胸径</h3>
            <p class="field-item"><strong>标识：</strong>DBH</p>
            <p class="field-item"><strong>中文名称：</strong>胸径</p>
            <p class="field-item"><strong>英文名称：</strong>Diameter at Breast Height</p>
            <p class="field-item"><strong>定义：</strong>调查植株的胸径</p>
            <p class="field-item"><strong>字段类型：</strong>N</p>
            <p class="field-item"><strong>字段单位：</strong>厘米（cm）</p>
            <p class="field-item"><strong>字段示例：</strong>5.1</p>
          </div>

          <div class="field-card">
            <h3>（7）高度</h3>
            <p class="field-item"><strong>标识：</strong>Height</p>
            <p class="field-item"><strong>中文名称：</strong>高度</p>
            <p class="field-item"><strong>英文名称：</strong>Height</p>
            <p class="field-item"><strong>定义：</strong>调查植株的高度</p>
            <p class="field-item"><strong>字段类型：</strong>N</p>
            <p class="field-item"><strong>字段单位：</strong>米（m）</p>
           极速赛车开奖结果查询
            <p class="field-item"><strong>字段示例：</strong>3.7</p>
          </div>

          <div class="field-card">
            <h3>（8）枝下高</h3>
            <p class极速赛车开奖结果查询class="field-item"><strong>标识：</strong>clearboleHeight</p>
            <p class="field-item"><strong>中文名称：</strong>枝下高</p>
            <p class="field-item"><strong>英文名称：</strong>Clear Bole height</p>
            <p class="field-item"><strong>定义：</strong>调查植株的树干上第一个一级分枝以下的高度</p>
            <p class="field-item"><strong>字段类型：</strong>N</p>
            <p class="field-item"><strong>字段单位：</strong>米（m）</p>
            <p class="field-item"><strong>字段示例：</strong>1.5</p>
          </div>

          <div class="field-card">
            <h3>（9）冠幅长</h3>
            <p class="field-item"><strong>标识：</strong>crownLength</p>
            <p class="field-item"><strong>中文名称：</strong>冠幅长</p>
            <p class="field-item"><strong>英文名称：</strong>Crown Length</p>
            <p class="field-item"><strong>定义：</strong>调查植株冠幅长度</p>
            <p class="field-item"><strong>字段类型：</strong>N</p>
            <p class="field-item"><strong>字段单位：</strong>厘米（cm）</p>
            <p class="field-item"><strong>字段示例：</strong>120</p>
          </div>

          <div class="field-card">
            <h3>（10）冠幅宽</h3>
            <p class="field-item"><strong>标识：</strong>crownWidth</p>
            <p class="field-item"><strong>中文名称：</strong>冠幅宽</p>
            <p class="field-item"><strong>英文名称：</strong>Crown Width</p>
            <p class="field-item"><strong>定义：</strong>调查植株冠幅宽度</p>
            <p class="field-item"><strong>字段类型：</strong>N</p>
            <p class="field-item"><strong>字段单位：</strong>厘米（cm）</p>
            <p class="field-item"><strong>字段示例：</strong>100</p>
          </div>

          <div class="field-card">
            <h3>（11）备注</h3>
            <p class="field-item"><strong>标识：</strong>eventRemarks</p>
            <p class="field-item"><strong>中文名称：</strong>备注</p>
            <p class="field-item"><strong>英文名称：</strong>Event Remarks</p>
            <p class="field-item"><strong>定义：</strong>对字段中未包含的内容进行的补充说明</p>
            <p class="field-item"><strong>字段类型：</strong>C</p>
            <p class="field-item"><strong>字段示例：</strong>高度为估测值</p>
          </div>
        </div>
      </div>

      <!-- 灌木观测内容 -->
      <div v-if="activeTab === '灌木观测'">
        <h2 class="section-title">灌木观测</h2>
        <div class="single-image-container">
          <img
            src="@/assets/SoilGeography/灌木.jpg"
            alt="土壤"
            class="geology-image single-image"
          />
          <p class="image-caption">土壤</p>
        </div>
        <p>
          灌木调查数据表包括样方编号、样方长、样方宽、物种中文名、物种学名、最大高度、平均高度、最大基径、平均基径、株丛数、盖度和备注等12个字段，用于记录森林样方调查中灌木层调查数据和灌丛（无乔木层覆盖）样方调查数据。
        </p>

        <div class="field-grid">
          <div class="field-card">
            <h3>（1）样方编号</h3>
            <p class="field-item"><strong>标识：</strong>quadratCode</p>
            <p class="field-item"><strong>中文名称：</strong>样方编号</p>
            <p class="field-item"><strong>英文名称：</strong>Quadrat Code</p>
            <p class="field-item">
              <strong>定义：</strong>调查灌木样方的顺序号
            </p>
            <p class="field-item"><strong>字段类型：</strong>C</p>
            <p class="field-item"><strong>字段示例：</strong>s1</p>
          </div>

          <!-- 其他灌木观测字段卡片 -->
          <div class="field-card">
            <h3>（2）样方长</h3>
            <p class="field-item"><strong>标识：</strong>quadratLength</p>
            <p class="field-item"><strong>中文名称：</strong>样方长</p>
            <p class="field-item"><strong>英文名称：</strong>Quadrat Length</p>
            <p class="field-item"><strong>定义：</strong>植被调查样方的长度</p>
            <p class="field-item"><strong>字段类型：</strong>N</p>
            <p class="field-item"><strong>字段单位：</strong>米（m）</p>
            <p class="field-item"><strong>字段示例：</strong>5</p>
          </div>

          <!-- 更多字段卡片... -->
        </div>
      </div>

      <!-- 草本植物观测内容 -->
      <div v-if="activeTab === '草本植物观测'">
        <h2 class="section-title">草本植物观测</h2>
        <!-- <div class="single-image-container">
          <img
            src="@/assets/SoilGeography/草本植物.jpg"
            alt="草本植物"
            class="geology-image single-image"
          />
          <p class="image-caption">草本植物</p>
        </div> -->
        <p>
          草本调查数据表包括样方编号、样方长、样方宽、物种中文名、物种学名、最大高度、平均高度、株丛数、盖度和备注等10个字段，用于记录森林和灌丛中的草本层植物或者草地植物调查数据。
        </p>

        <div class="field-grid">
          <div class="field-card">
            <h3>（1）样方编号</h3>
            <p class="field-item"><strong>标识：</strong>quadratCode</p>
            <p class="field-item"><strong>中文名称：</strong>样方编号</p>
            <p class="field-item"><strong>英文名称：</strong>Quadrat Code</p>
            <p class="field-item">
              <strong>定义：</strong>调查的草本植物样方顺序号
            </p>
            <p class="field-item"><strong>字段类型：</strong>C</p>
            <p class="field-item"><strong>字段示例：</strong>h1</p>
          </div>

          <!-- 其他草本观测字段卡片 -->
          <div class="field-card">
            <h3>（2）样方长</h3>
            <p class="field-item"><strong>标识：</strong>quadratLength</p>
            <p class="field-item"><strong>中文名称：</strong>样方长</p>
            <p class="field-item"><strong>英文名称：</strong>Quadrat Length</p>
            <p class="field-item"><strong>定义：</strong>植被调查样方的长度</p>
            <p class="field-item"><strong>字段类型：</strong>N</p>
            <p class="field-item"><strong>字段单位：</strong>米（m）</p>
            <p class="field-item"><strong>字段示例：</strong>5</p>
          </div>

          <!-- 更多字段卡片... -->
        </div>
      </div>

      <!-- 辨认内容 -->
      <div v-if="activeTab === '辨认内容'">
        <h2 class="section-title">辨认内容</h2>
        <p>（内容待补充）</p>
      </div>

      <!-- 植物对比 -->
      <div v-if="activeTab === '植物对比'">
        <h2 class="section-title">植物对比</h2>
        <p>（内容待补充）</p>

        <div class="external-resources">
          <h3>相关链接：</h3>
          <a
            href="https://www.cvh.ac.cn/index.php"
            target="_blank"
            class="resource-link"
            >中国数字植物标本馆</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 图片 */
.single-image-container {
  text-align: center;
  margin: 20px 0;
}

.geology-image {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.geology-image:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.single-image {
  max-width: 80%;
  border: 1px solid #ddd;
}

.image-caption {
  text-align: center;
  font-size: 0.9rem;
  color: #666;
  margin-top: 8px;
}

/* 页面 */
.document-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #ffffff;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 30px;
}

.title-section {
  font-size: 1.8rem;
  color: #2c3e50;
  font-weight: 600;
}

.nav-tabs {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
}

.nav-tabs button {
  padding: 12px 24px;
  background-color: #f8f9fa;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  color: #495057;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.nav-tabs button:hover {
  background-color: #e9ecef;
  transform: translateY(-2px);
}

.nav-tabs button.active {
  background-color: #3498db;
  color: white;
  box-shadow: 0 4px 8px rgba(52, 152, 219, 0.3);
}

.content-section {
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.section-title {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-top: 0;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eaeaea;
}

.field-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 25px;
}

.field-card {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 4px solid #3498db;
}

.field-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.field-card h3 {
  color: #3498db;
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.field-item {
  margin-bottom: 12px;
  line-height: 1.6;
}

.field-item strong {
  color: #495057;
  display: inline-block;
  min-width: 100px;
}

.external-resources {
  margin-top: 40px;
  padding: 20px;
  background-color: #e9f5fe;
  border-radius: 8px;
}

.external-resources h3 {
  color: #2c3e50;
  margin-top: 0;
}

.resource-link {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 16px;
  background-color: white;
  color: #3498db;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.resource-link:hover {
  background-color: #3498db;
  color: white;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  .nav-tabs {
    flex-wrap: wrap;
  }

  .field-grid {
    grid-template-columns: 1fr;
  }

  .content-section {
    padding: 20px;
  }
}
</style>
