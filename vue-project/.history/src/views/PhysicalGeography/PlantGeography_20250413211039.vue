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

const activeIdentification = ref(null);

const toggleIdentification = (index) => {
  activeIdentification.value =
    activeIdentification.value === index ? null : index;
};

const activeComparison = ref(null);

const toggleComparison = (index) => {
  activeComparison.value = activeComparison.value === index ? null : index;
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
            src="@/assets/PlantGeography/乔木.jpg"
            alt="乔木"
            class="geology-image single-image"
          />
          <p class="image-caption">乔木</p>
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
            <p class="field-item">
              <strong>注释：</strong>推荐以《中国植物志》为标准填写
            </p>
            <p class="field-item"><strong>字段示例：</strong>白颜树</p>
          </div>

          <div class="field-card">
            <h3>（5）物种学名</h3>
            <p class="field-item"><strong>标识：</strong>scientificName</p>
            <p class="field-item"><strong>中文名称：</strong>物种学名</p>
            <p class="field-item"><strong>英文名称：</strong>Scientific Name</p>
            <p class="field-item">
              <strong>定义：</strong>使用双名法命名的物种的完整名称，包含命名人
            </p>
            <p class="field-item"><strong>字段类型：</strong>C</p>
            <p class="field-item">
              <strong>注释：</strong>推荐以《中国植物志》为标准填写
            </p>
            <p class="field-item">
              <strong>字段示例：</strong>Gironniera subaequalis Planch.
            </p>
          </div>

          <div class="field-card">
            <h3>（6）胸径</h3>
            <p class="field-item"><strong>标识：</strong>DBH</p>
            <p class="field-item"><strong>中文名称：</strong>胸径</p>
            <p class="field-item">
              <strong>英文名称：</strong>Diameter at Breast Height
            </p>
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
            <p class极速赛车开奖结果查询class="field-item">
              <strong>标识：</strong>clearboleHeight
            </p>
            <p class="field-item"><strong>中文名称：</strong>枝下高</p>
            <p class="field-item">
              <strong>英文名称：</strong>Clear Bole height
            </p>
            <p class="field-item">
              <strong>定义：</strong>调查植株的树干上第一个一级分枝以下的高度
            </p>
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
            <p class="field-item">
              <strong>定义：</strong>对字段中未包含的内容进行的补充说明
            </p>
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
            src="@/assets/PlantGeography/灌木.jpg"
            alt="灌木"
            class="geology-image single-image"
          />
          <p class="image-caption">灌木</p>
        </div>
        <p>
          灌木调查数据表包括样方编号、样方长、样方宽、物种中文名、物种学名、最大高度、平均高度、最大基径、平均基径、株丛数、盖度和备注等12个字段，用于记录森林样方调查中灌木层调查数据和灌丛（无乔木层覆盖）样方调查数据。
        </p>

        <div class="field-grid">
          <div class="field-card">
            <h3>（1）极速赛车开奖结果查询样方编号</h3>
            <p class="field-item"><strong>标识：</strong>quadratCode</p>
            <p class="field-item"><strong>中文名称：</strong>样方编号</p>
            <p class="field-item"><strong>英文名称：</strong>Quadrat Code</p>
            <p class="field-item">
              <strong>定义：</strong>调查灌木样方的顺序号
            </p>
            <p class="field-item"><strong>字段类型：</strong>C</p>
            <p class="field-item"><strong>字段示例：</strong>s1</p>
          </div>

          <div class="field-card">
            <h3>（2）样方长</h3>
            <p class="field-item"><strong>标识：</strong>quadratLength</p>
            <p class="field-item"><strong>中文名称：</strong>样方长</p>
            <p class="field-item"><strong>英文名称：</strong>Quadrat Length</p>
            <p class="极速赛车开奖结果查询field-item">
              <strong>定义：</strong>植被调查样方的长度
            </p>
            <p class="field-item"><strong>字段类型：</strong>N</p>
            <p class="field-item"><strong>字段单位：</strong>米（m）</p>
            <p class="field-item"><strong>字段示例：</strong>5</p>
          </div>

          <div class="field-card">
            <h3>（3）样方宽</h3>
            <p class="field-item"><strong>标识：</strong>quadratWidth</p>
            <p class="field-item"><strong>中文名称：</strong>样方宽</p>
            <p class="field-item"><strong>英文名称：</strong>Quadrat Width</p>
            <p class="field-item"><strong>定义：</strong>植被调查样方的宽度</p>
            <p class="field-item"><strong>字段类型：</strong>N</p>
            <p class="field-item"><strong>字段单位：</strong>米（m）</p>
            <p class="field-item"><strong>字段示例：</strong>5</p>
          </div>

          <div class="field-card">
            <h3>（4）物种中文名</h3>
            <p class="field-item"><strong>标识：</strong>vernacularName</p>
            <p class="field-item"><strong>中文名称：</strong>物种中文名</p>
            <p class="field-item"><strong>英文名称：</strong>Vernacular Name</p>
            <p class="field-item"><strong>字段类型：</strong>C</p>
            <p class="field-item">
              <strong>注释：</strong>推荐以《中国植物志》为标准填写
            </p>
            <p class="field-item"><strong>字段示例：</strong>高山杜鹃</p>
          </div>

          <div class="field-card">
            <h3>（5）物种学名</h3>
            <p class="field-item"><strong>标识：</strong>scientificName</p>
            <p class="field-item"><strong>中文名称：</strong>物种学名</p>
            <p class="field-item"><strong>英文名称：</strong>Scientific Name</p>
            <p class="field-item">
              <strong>定义：</strong>使用双名法命名的物种的完整名称，包含命名人
            </p>
            <p class="field-item">
              <strong>字段类型：</strong>极速赛车开奖结果查询C
            </p>
            <p class="field-item">
              <strong>注释：</strong>推荐以《中国植物志》为标准填写
            </p>
            <p class="field-item">
              <strong>字段示例：</strong>Rhododendron lapponicum (L.) Wahl.
            </p>
          </div>

          <div class="field-card">
            <h3>（6）最大高度</h3>
            <p class="field-item"><strong>标识：</strong>maxHeight</p>
            <p class="field-item"><strong>中文名称：</strong>最大高度</p>
            <p class="field-item"><strong>英文名称：</strong>Maximum Height</p>
            <p class="field-item">
              <strong>定义：</strong>植株中最高植株的高度
            </p>
            <p class="field-item"><strong>字段类型：</strong>N</p>
            <p class="field-item"><strong>字段单位：</strong>米（m）</p>
            <p class="field-item"><strong>字段示例：</strong>2.1</p>
          </div>

          <div class="field-card">
            <h3>（7）平均高度</h3>
            <p class="field-item"><strong>标识：</strong>averageHeight</p>
            <p class="field-item"><strong>中文名称：</strong>平均高度</p>
            <p class="field-item"><strong>英文名称：</strong>Average Height</p>
            <p class="field-item">
              <strong>定义：</strong>调查样方中植株的平均高度
            </p>
            <p class="field-item"><strong>字段类型：</strong>N</p>
            <p class="field-item"><strong>字段单位：</strong>米（m）</p>
            <p class="field-item"><strong>字段示例：</strong>1.5</p>
          </div>

          <div class="field-card">
            <h3>（8）最大基径</h3>
            <p class="field-item"><strong>标识：</strong>maxbaseDiameter</p>
            <p class="field-item"><strong>中文名称：</strong>最大基径</p>
            <p class="field-item">
              <strong>英文名称：</strong>Maximum Base Diameter
            </p>
            <p class="field-item">
              <strong>定义：</strong>调查样方中植株的最大基径
            </p>
            <p class="field-item"><strong>字段类型：</strong>N</p>
            <p class="field-item"><strong>字段单位：</strong>厘米（cm）</p>
            <p class="field-item">
              <strong>注释：</strong>基径测量基准点为树木地面根颈部位的树干直径
            </p>
            <p class="field-item"><strong>字段示例：</strong>5.1</p>
          </div>

          <div class="field-card">
            <h3>（9）平均基径</h3>
            <p class="field-item"><strong>标识：</strong>averagebaseDiameter</p>
            <p class="field-item"><strong>中文名称：</strong>平均基径</p>
            <p class="field-item">
              <strong>英文名称：</strong>Average Base Diameter
            </p>
            <p class="field-item">
              <strong>定义：</strong>调查样方中植株的平均基径
            </p>
            <p class="field-item"><strong>字段类型：</strong>N</p>
            <p class="field-item"><strong>字段单位：</strong>厘米（cm）</p>
            <p class="field-item"><strong>字段示例：</strong>2.9</p>
          </div>

          <div class="field-card">
            <h3>（10）株丛数</h3>
            <p class="field-item"><strong>标识：</strong>stemCount</p>
            <p class="field-item"><strong>中文名称：</strong>株丛数</p>
            <p class="field-item"><strong>英文名称：</strong>Stem Count</p>
            <p class="field-item">
              <strong>定义：</strong>样方中灌木植物的总株数或总丛数
            </p>
            <p class="field-item"><strong>字段类型：</strong>N</p>
            <p class="field-item"><strong>字段单位：</strong>株或丛／样方</p>
            <p class="field-item"><strong>注释：</strong>整数型数据</p>
            <p class="field-item"><strong>字段示例：</strong>102</p>
          </div>

          <div class="field-card">
            <h3>（11）盖度</h3>
            <p class="field-item"><strong>标识：</strong>coverage</p>
            <p class="field-item"><strong>中文名称：</strong>盖度</p>
            <p class="field-item"><strong>英文名称：</strong>Coverage</p>
            <p class="field-item">
              <strong>定义：</strong
              >该植物地上部分的垂直投影面积占样方面积的百分比
            </p>
            <p class="field-item"><strong>字段类型：</strong>N</p>
            <p class="field-item"><strong>字段单位：</strong>%</p>
            <p class="field-item">
              <strong>注释：</strong>填写百分比数值，如"12.3%"，以"12.3"填写
            </p>
            <p class="field-item"><strong>字段示例：</strong>37.0</p>
          </div>

          <div class="field-card">
            <h3>（12）备注</h3>
            <p class="field-item"><strong>标识：</strong>eventRemarks</p>
            <p class="field-item"><strong>中文名称：</strong>备注</p>
            <p class="field-item"><strong>英文名称：</strong>Event Remarks</p>
            <p class="field-item">
              <strong>定义：</strong>对字段中未包含的内容进行的补充说明
            </p>
            <p class="field-item"><strong>字段类型：</strong>C</p>
            <p class="field-item"><strong>字段示例：</strong>高度为估测值</p>
          </div>
        </div>
      </div>

      <!-- 草本植物观测内容 -->
      <div v-if="activeTab === '草本植物观测'">
        <h2 class="section-title">草本植物观测</h2>
        <div class="single-image-container">
          <img
            src="@/assets/PlantGeography/草本植物.jpg"
            alt="草本植物"
            class="geology-image single-image"
          />
          <p class="image-caption">草本植物</p>
        </div>
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

          <div class="field-card">
            <h3>（3）样方宽</h3>
            <p class="field-item"><strong>标识：</strong>quadratWidth</p>
            <p class="field-item"><strong>中文名称：</strong>样方宽</p>
            <p class="field-item"><strong>英文名称：</strong>Quadrat Width</p>
            <p class="field-item"><strong>定义：</strong>植被调查样方的宽度</p>
            <p class="field-item"><strong>字段类型：</strong>N</p>
            <p class="field-item"><strong>字段单位：</strong>米（m）</p>
            <p class="field-item"><strong>字段示例：</strong>5</p>
          </div>

          <div class="field-card">
            <h3>（4）物种中文名</h3>
            <p class="field-item"><strong>标识：</strong>vernacularName</p>
            <p class="field-item"><strong>中文名称：</strong>物种中文名</p>
            <p class="field-item"><strong>英文名称：</strong>Vernacular Name</p>
            <p class="field-item"><strong>定义：</strong>植物种中文名</p>
            <p class="field-item"><strong>字段类型：</strong>C</p>
            <p class="field-item">
              <strong>注释：</strong>推荐以《中国植物志》为标准填写
            </p>
            <p class="field-item"><strong>字段示例：</strong>西北针茅</p>
          </div>

          <div class="field-card">
            <h3>（5）物种学名</h3>
            <p class="field-item"><strong>标识：</strong>scientificName</p>
            <p class="field-item"><strong>中文名称：</strong>物种学名</p>
            <p class="field-item"><strong>英文名称：</strong>Scientific Name</p>
            <p class="field-item">
              <strong>定义：</strong>使用双名法命名的物种的完整名称，包含命名人
            </p>
            <p class="field-item"><strong>字段类型：</strong>C</p>
            <p class="field-item">
              <strong>注释：</strong>推荐以《中国植物为标准填写
            </p>
            <p class="field-item">
              <strong>字段示例：</strong>Stipa sareptana A.K. Becker var.
              krylovii (Roshev.) P.C. Kuo & Y.H. Sun
            </p>
          </div>

          <div class="field-card">
            <h3>（6）最大高度</h3>
            <p class="field-item"><strong>标识：</strong>maxHeight</p>
            <p class="field-item"><strong>中文名称：</strong>最大高度</p>
            <p class="field-item"><strong>英文名称：</strong>Maximum Height</p>
            <p class="field-item">
              <strong>定义：</strong>植株中最高植株的高度
            </p>
            <p class="field-item"><strong>字段类型：</strong>N</p>
            <p class="field-item"><strong>字段单位：</strong>厘米（cm）</p>
            <p class="field-item"><strong>字段示例：</strong>22</p>
          </div>

          <div class="field-card">
            <h3>（7）平均高度</h3>
            <p class="field-item"><strong>标识：</strong>averageHeight</p>
            <p class="field-item"><strong>中文名称：</strong>平均高度</p>
            <p class="field-item"><strong>英文名称：</strong>Average Height</p>
            <p class="field-item">
              <strong>定义：</strong>调查样方中植株的平均高度
            </p>
            <p class="field-item"><strong>字段类型：</strong>N</p>
            <p class="field-item"><strong>字段单位：</strong>厘米（cm）</p>
            <p class="field-item"><strong>字段示例：</strong>18</p>
          </div>

          <div class="field-card">
            <h3>（8）株丛数</h3>
            <p class="field-item"><strong>标识：</strong>stemCount</p>
            <p class="field-item"><strong>中文名称：</strong>株丛数</p>
            <p class="field-item"><strong>英文名称：</strong>Stem Count</p>
            <p class="field-item">
              <strong>定义：</strong>样方中草本植物的总株数或总丛数
            </p>
            <p class="field-item"><strong>字段类型：</strong>N</p>
            <p class="field-item"><strong>字段单位：</strong>株或丛／样方</p>
            <p class="field-item"><strong>注释：</strong>整数型数据</p>
            <p class="field-item"><strong>字段示例：</strong>28</p>
          </div>

          <div class="field-card">
            <h3>（9）盖度</h3>
            <p class="field-item"><strong>标识：</strong>coverage</p>
            <p class="field-item"><strong>中文名称：</strong>盖度</p>
            <p class="field-item"><strong>英文名称：</strong>Coverage</p>
            <p class="field-item">
              <strong>定义：</strong
              >植物地上部分的垂直投影面积占样方面积的百分比
            </p>
            <p class="field-item"><strong>字段类型：</strong>N</p>
            <p class="field-item"><strong>字段单位：</strong>%</p>
            <p class="field-item">
              <strong>注释：</strong>填写百分比数值，如"21.0%"，以"21.0"填写
            </p>
            <p class="field-item"><strong>字段示例：</strong>21.0</p>
          </div>

          <div class="field-card">
            <h3>（10）备注</h3>
            <p class="field-item"><strong>标识：</strong>eventRemarks</p>
            <p class="field-item"><strong>中文名称：</strong>备注</p>
            <p class="field-item"><strong>英文名称：</strong>Event Remarks</p>
            <p class="field-item">
              <strong>定义：</strong>对字段中未包含的内容进行的补充说明
            </p>
            <p class="field-item"><strong>字段类型：</strong>C</p>
            <p class="field-item"><strong>字段示例：</strong>盖度为估测值</p>
          </div>
        </div>
      </div>

      <!-- 辨认内容 -->
      <div v-if="activeTab === '辨认内容'">
        <h2 class="section-title">辨认内容</h2>

        <div class="identification-container">
          <div class="identification-card">
            <div class="identification-header" @click="toggleIdentification(1)">
              <h3>1、植物器官形态的观察</h3>
              <span class="toggle-icon">{{
                activeIdentification === 1 ? "−" : "+"
              }}</span>
            </div>
            <div
              class="identification-content"
              v-show="activeIdentification === 1"
            >
              <p>
                包括对植物的质地、的生长形态、的分枝类型、叶的组成、叶的变态、叶序、叶片类型、叶尖类型、叶基类型、叶缘类型、叶裂类型、叶脉类型、叶的质地、花的组成、花序类型与果的类型等等的识别。
              </p>
            </div>
          </div>

          <div class="identification-card">
            <div class="identification-header" @click="toggleIdentification(2)">
              <h3>2、植物识别</h3>
              <span class="toggle-icon">{{
                activeIdentification === 2 ? "−" : "+"
              }}</span>
            </div>
            <div
              class="identification-content"
              v-show="activeIdentification === 2"
            >
              <p>初步掌握植物枝、叶和花的常用形态术语。</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 植物对比 -->
      <div v-if="activeTab === '植物对比'">
        <h2 class="section-title">植物对比</h2>

        <div class="comparison-container">
          <!-- 檵木与红花檵木 -->
          <div class="comparison-card">
            <div class="comparison-header" @click="toggleComparison(1)">
              <h3>（1）檵木与红花檵木</h3>
              <span class="toggle-icon">{{
                activeComparison === 1 ? "−" : "+"
              }}</span>
            </div>
            <div class="comparison-content" v-show="activeComparison === 1">
              <p>
                同属金缕梅科，常绿灌木。红花檵木是檵木的第一代产品，是檵木的原变种，老叶绿，新叶红，花为红色：檵木的花为白色。
              </p>
            </div>
          </div>

          <!-- 日本花柏与日本扁柏 -->
          <div class="comparison-card">
            <div class="comparison-header" @click="toggleComparison(2)">
              <h3>（2）日本花柏与日本扁柏</h3>
              <span class="toggle-icon">{{
                activeComparison === 2 ? "−" : "+"
              }}</span>
            </div>
            <div class="comparison-content" v-show="activeComparison === 2">
              <p>
                都属于柏科，原产于日本，是常绿乔木。日本花柏的楼叶尖端锐尖；日本扁柏的楼叶尖端较圆。
              </p>
            </div>
          </div>

          <!-- 小果蔷薇与土苓 -->
          <div class="comparison-card">
            <div class="comparison-header" @click="toggleComparison(3)">
              <h3>（3）小果蔷薇与土苓</h3>
              <span class="toggle-icon">{{
                activeComparison === 3 ? "−" : "+"
              }}</span>
            </div>
            <div class="comparison-content" v-show="activeComparison === 3">
              <p>
                小果蔷薇属于蔷薇科，茎上有皮刺，通常无小叶，果子小，花白，叶形为披针形，托叶与叶柄离生；土茯苓属于百合科，全株无毛，果子有白粉，可食用，托叶与叶柄合生。
              </p>
            </div>
          </div>

          <!-- 乐昌含笑、深山含笑与阔瓣含笑 -->
          <div class="comparison-card">
            <div class="comparison-header" @click="toggleComparison(4)">
              <h3>（4）乐昌含笑、深山含笑与阔瓣含笑</h3>
              <span class="toggle-icon">{{
                activeComparison === 4 ? "−" : "+"
              }}</span>
            </div>
            <div class="comparison-content" v-show="activeComparison === 4">
              <p>
                都属于木兰科的常绿乔木。乐昌含笑春芽有毛，叶为倒卵状圆形；深山含笑叶子有白粉，花生枝，叶较圆；阔含笑小枝黄褐色，花纯白，有芳香，春夏开花，叶子大。
              </p>
            </div>
          </div>

          <!-- 桂南木莲、木莲与深山含笑 -->
          <div class="comparison-card">
            <div class="comparison-header" @click="toggleComparison(5)">
              <h3>（5）桂南木莲、木莲与深山含笑</h3>
              <span class="toggle-icon">{{
                activeComparison === 5 ? "−" : "+"
              }}</span>
            </div>
            <div class="comparison-content" v-show="activeComparison === 5">
              <p>
                都属于木兰科的常绿乔木。桂南木莲叶大，叶为倒卵状圆形，小枝密布锈色毛，是园林观光树种，花生枝端；木莲的芽小枝，叶形为披针形，花生枝顶，花白树耐寒，叶脉不清晰，花芳香；深山含笑叶子有白粉，花生枝叶较圆。
              </p>
            </div>
          </div>
        </div>

        <div class="external-resources">
          <h3>相关链接：</h3>
          <a
            href="https://www.cvh.ac.cn/index.php"
            target="_blank"
            class="resource-link"
            >中国数字植物标本馆</a
          >
          <a
            href="http://www.aiplants.net/"
            target="_blank"
            class="resource-link"
            >花伴侣</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 植物对比样式 */
.comparison-container {
  max-width: 900px;
  margin: 20px auto;
}

.comparison-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 15px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  background-color: #f8f9fa;
}

.comparison-card:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  background-color: #f1f3f5;
}

.comparison-header {
  padding: 15px 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;
}

.comparison-header:hover {
  background-color: #e9ecef;
}

.comparison-header h3 {
  margin: 0;
  font-size: 18px;
  color: #2c3e50;
}

.toggle-icon {
  font-size: 20px;
  font-weight: bold;
  color: #6c757d;
}

.comparison-content {
  padding: 20px;
  background-color: #fff;
  border-top: 1px solid #e0e0e0;
  line-height: 1.8;
}

.comparison-content p {
  margin: 0;
  color: #495057;
  text-align: justify;
}

.external-resources {
  margin-top: 30px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.external-resources h3 {
  margin-top: 0;
  color: #2c3e50;
}

.resource-link {
  display: inline-block;
  margin-top: 10px;
  color: #1a73e8;
  text-decoration: none;
  transition: color 0.3s;
}

.resource-link:hover {
  color: #0d47a1;
  text-decoration: underline;
}

/* 辨认内容 */
.identification-container {
  max-width: 800px;
  margin: 20px auto;
}

.identification-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 15px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.identification-card:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.identification-header {
  background-color: #f8f9fa;
  padding: 15px 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;
}

.identification-header:hover {
  background-color: #e9ecef;
}

.identification-header h3 {
  margin: 0;
  font-size: 18px;
  color: #333;
}

.toggle-icon {
  font-size: 20px;
  font-weight: bold;
  color: #6c757d;
}

.identification-content {
  padding: 20px;
  background-color: #fff;
  border-top: 1px solid #e0e0e0;
  line-height: 1.6;
}

.identification-content p {
  margin: 0;
  color: #555;
}

/* 图片 */
.single-image-container {
  text-align: center;
  margin: 20px 0;
}

.geology-image {
  max-width: 60%;
  height: 500px;
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
