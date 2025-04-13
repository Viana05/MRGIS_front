<script setup>
import { ref } from 'vue';

const activeTab = ref('乔木观测');
const activeSection = ref('01植物群落样方调查');

const sections = {
  '01植物群落样方调查': [
    '乔木观测',
    '灌木观测',
    '草本植物观测'
  ],
  '02植物的辨认': [
    '辨认内容',
    '植物对比'
  ]
};

const toggleSection = (section) => {
  activeSection.value = section;
  activeTab.value = sections[section][0];
};

const toggleTab = (tab) => {
  activeTab.value = tab;
};
</script>

<template>
  <div class="document-container">
    <div class="sidebar">
      <h3>文档目录</h3>
      <ul>
        <li 
          v-for="section in Object.keys(sections)" 
          :key="section"
          :class="{ active: activeSection === section }"
          @click="toggleSection(section)"
        >
          {{ section }}
        </li>
      </ul>
    </div>

    <div class="content">
      <div class="tabs">
        <button
          v-for="tab in sections[activeSection]"
          :key="tab"
          :class="{ active: activeTab === tab }"
          @click="toggleTab(tab)"
        >
          {{ tab }}
        </button>
      </div>

      <div class="tab-content">
        <div v-if="activeTab === '乔木观测'" class="tree-observation">
          <h2>乔木观测</h2>
          <p>乔木层调查数据表包括样方编号、样方长、样方宽、物种中文名、物种学名、胸径、高度、枝下高、冠幅长、冠幅宽和备注等11个字段，用于记录样方中乔木的调查数据。</p>
          
          <div class="field-list">
            <div class="field-item">
              <h3>（1）样方编号</h3>
              <p><strong>标识：</strong>quadratCode</p>
              <p><strong>中文名称：</strong>样方编号</p>
              <p><strong>英文名称：</strong>Quadrat Code</p>
              <p><strong>定义：</strong>调查乔木样方的顺序号</p>
              <p><strong>字段类型：</strong>C</p>
              <p><strong>字段示例：</strong>a1</p>
            </div>

            <div class="field-item">
              <h3>（2）样方长</h3>
              <p><strong>标识：</strong>quadratLength</p>
              <p><strong>中文名称：</strong>样方长</p>
              <p><strong>英文名称：</strong>Quadrat Length</p>
              <p><strong>定义：</strong>植被调查样方的长度</p>
              <p><strong>字段类型：</strong>N</p>
              <p><strong>字段单位：</strong>m</p>
              <p><strong>字段示例：</strong>5</p>
            </div>

            <div class="field-item">
              <h3>（3）样方宽</h3>
              <p><strong>标识：</strong>quadratWidth</p>
              <p><strong>中文名称：</strong>样方宽</p>
              <p><strong>英文名称：</strong>Quadrat Width</p>
              <p><strong>定义：</strong>植被调查样方的宽度</p>
              <p><strong>字段类型：</strong>N</p>
              <p><strong>字段单位：</strong>m</p>
              <p><strong>字段示例：</strong>10</p>
            </div>

            <div class="field-item">
              <h3>（4）物种中文名</h3>
              <p><strong>标识：</strong>vernacularName</p>
              <p><strong>中文名称：</strong>物种中文名</p>
              <p><strong>英文名称：</strong>Vernacular Name</p>
              <p><strong>定义：</strong>植物种中文名</p>
              <p><strong>字段类型：</strong>C</p>
              <p><strong>注释：</strong>推荐以《中国植物志》为标准填写</p>
              <p><strong>字段示例：</strong>白颜树</p>
            </div>

            <div class="field-item">
              <h3>（5）物种学名</h3>
              <p><strong>标识：</strong>scientificName</p>
              <p><strong>中文名称：</strong>物种学名</p>
              <p><strong>英文名称：</strong>Scientific Name</p>
              <p><strong>定义：</strong>使用双名法命名的物种的完整名称，包含命名人</p>
              <p><strong>字段类型：</strong>C</p>
              <p><strong>注释：</strong>推荐以《中国植物志》为标准填写</p>
              <p><strong>字段示例：</strong>Gironniera subaequalis Planch.</p>
            </div>

            <div class="field-item">
              <h3>（6）胸径</h3>
              <p><strong>标识：</strong>DBH</p>
              <p><strong>中文名称：</strong>胸径</p>
              <p><strong>英文名称：</strong>Diameter at Breast Height</p>
              <p><strong>定义：</strong>调查植株的胸径</p>
              <p><strong>字段类型：</strong>N</p>
              <p><strong>字段单位：</strong>厘米（cm）</p>
              <p><strong>字段示例：</strong>5.1</p>
            </div>

            <div class="field-item">
              <h3>（7）高度</h3>
              <p><strong>标识：</strong>Height</p>
              <p><strong>中文名称：</strong>高度</p>
              <p><strong>英文名称：</strong>Height</p>
              <p><strong>定义：</strong>调查植株的高度</p>
              <p><strong>字段类型：</strong>N</p>
              <p><strong>字段单位：</strong>米（m）</p>
              <p><strong>字段示例：</strong>3.7</p>
            </div>

            <div class="field-item">
              <h3>（8）枝下高</h3>
              <p><strong>标识：</strong>clearboleHeight</p>
              <p><strong>中文名称：</strong>枝下高</p>
              <p><strong>英文名称：</strong>Clear Bole height</p>
              <p><strong>定义：</strong>调查植株的树干上第一个一级分枝以下的高度</p>
              <p><strong>字段类型：</strong>N</p>
              <p><strong>字段单位：</strong>米（m）</p>
              <p><strong>字段示例：</strong>1.5</p>
            </div>

            <div class="field-item">
              <h3>（9）冠幅长</h3>
              <p><strong>标识：</strong>crownLength</p>
              <p><strong>中文名称：</strong>冠幅长</p>
              <p><strong>英文名称：</strong>Crown Length</p>
              <p><strong>定义：</strong>调查植株冠幅长度</p>
              <p><strong>字段类型：</strong>N</p>
              <p><strong>字段单位：</strong>厘米（cm）</p>
              <p><strong>字段示例：</strong>120</p>
            </div>

            <div class="field-item">
              <h3>（10）冠幅宽</h3>
              <p><strong>标识：</strong>crownWidth</p>
              <p><strong>中文名称：</strong>冠幅宽</p>
              <p><strong>英文名称：</strong>Crown Width</p>
              <p><strong>定义：</strong>调查植株冠幅宽度</p>
              <p><strong>字段类型：</strong>N</p>
              <p><strong>字段单位：</strong>厘米（cm）</p>
              <p><strong>字段示例：</strong>100</p>
            </div>

            <div class="field-item">
              <h3>（11）备注</h3>
              <p><strong>标识：</strong>eventRemarks</p>
              <p><strong>中文名称：</strong>备注</p>
              <p><strong>英文名称：</strong>Event Remarks</p>
              <p><strong>定义：</strong>对字段中未包含的内容进行的补充说明</p>
              <p><strong>字段类型：</strong>C</p>
              <p><strong>字段示例：</strong>高度为估测值</p>
            </div>
          </div>
        </div>

        <div v-if="activeTab === '灌木观测'" class="shrub-observation">
          <h2>灌木观测</h2>
          <p>灌木调查数据表包括样方编号、样方长、样方宽、物种中文名、物种学名、最大高度、平均高度、最大基径、平均基径、株丛数、盖度和备注等12个字段，用于记录森林样方调查中灌木层调查数据和灌丛（无乔木层覆盖）样方调查数据。</p>
          
          <div class="field-list">
            <div class="field-item">
              <h3>（1）样方编号</h3>
              <p><strong>标识：</strong>quadratCode</p>
              <p><strong>中文名称：</strong>样方编号</p>
              <p><strong>英文名称：</strong>Quadrat Code</p>
              <p><strong>定义：</strong>调查灌木样方的顺序号</p>
              <p><strong>字段类型：</strong>C</p>
              <p><strong>字段示例：</strong>s1</p>
            </div>

            <div class="field-item">
              <h3>（2）样方长</h3>
              <p><strong>标识：</strong>quadratLength</p>
              <p><strong>中文名称：</strong>样方长</p>
              <p><strong>英文名称：</strong>Quadrat Length</p>
              <p><strong>定义：</strong>植被调查样方的长度</p>
              <p><strong>字段类型：</strong>N</p>
              <p><strong>字段单位：</strong>米（m）</p>
              <p><strong>字段示例：</strong>5</p>
            </div>

            <div class="field-item">
              <h3>（3）样方宽</h3>
              <p><strong>标识：</strong>quadratWidth</p>
              <p><strong>中文名称：</strong>样方宽</p>
              <p><strong>英文名称：</strong>Quadrat Width</p>
              <p><strong>定义：</strong>植被调查样方的宽度</p>
              <p><strong>字段类型：</strong>N</p>
              <p><strong>字段单位：</strong>米（m）</p>
              <p><strong>字段示例：</strong>5</p>
            </div>

            <div class="field-item">
              <h3>（4）物种中文名</h3>
              <p><strong>标识：</strong>vernacularName</p>
              <p><strong>中文名称：</strong>物种中文名</p>
              <p><strong>英文名称：</strong>Vernacular Name</p>
              <p><strong>字段类型：</strong>C</p>
              <p><strong>注释：</strong>推荐以《中国植物志》为标准填写</p>
              <p><strong>字段示例：</strong>高山杜鹃</p>
            </div>

            <div class="field-item">
              <h3>（5）物种学名</h3>
              <p><strong>标识：</strong>scientificName</p>
              <p><strong>中文名称：</strong>物种学名</p>
              <p><strong>英文名称：</strong>Scientific Name</p>
              <p><strong>定义：</strong>使用双名法命名的物种的完整名称，包含命名人</p>
              <p><strong>字段类型：</strong>C</p>
              <p><strong>注释：</strong>推荐以《中国植物志》为标准填写</p>
              <p><strong>字段示例：</strong>Rhododendron lapponicum (L.) Wahl.</p>
            </div>

            <div class="field-item">
              <h3>（6）最大高度</h3>
              <p><strong>标识：</strong>maxHeight</p>
              <p><strong>中文名称：</strong>最大高度</p>
              <p><strong>英文名称：</strong>Maximum Height</p>
              <p><strong>定义：</strong>植株中最高植株的高度</p>
              <p><strong>字段类型：</strong>N</p>
              <p><strong>字段单位：</strong>米（m）</p>
              <p><strong>字段示例：</strong>2.1</p>
            </div>

            <div class="field-item">
              <h3>（7）平均高度</h3>
              <p><strong>标识：</strong>averageHeight</p>
              <p><strong>中文名称：</strong>平均高度</p>
              <p><strong>英文名称：</strong>Average Height</p>
              <p><strong>定义：</strong>调查样方中植株的平均高度</p>
              <p><strong>字段类型：</strong>N</p>
              <p><strong>字段单位：</strong>米（m）</p>
              <p><strong>字段示例：</strong>1.5</p>
            </div>

            <div class="field-item">
              <h3>（8）最大基径</h3>
              <p><strong>标识：</strong>maxbaseDiameter</p>
              <p><strong>中文名称：</strong>最大基径</p>
              <p><strong>英文名称：</strong>Maximum Base Diameter</p>
              <p><strong>定义：</strong>调查样方中植株的最大基径</p>
              <p><strong>字段类型：</strong>N</p>
              <p><strong>字段单位：</strong>厘米（cm）</p>
              <p><strong>注释：</strong>基径测量基准点为树木地面根颈部位的树干直径</p>
              <p><strong>字段示例：</strong>5.1</p>
            </div>

            <div class="field-item">
              <h3>（9）平均基径</h3>
              <p><strong>标识：</strong>averagebaseDiameter</p>
              <p><strong>中文名称：</strong>平均基径</p>
              <p><strong>英文名称：</strong>Average Base Diameter</p>
              <p><strong>定义：</strong>调查样方中植株的平均基径</p>
              <p><strong>字段类型：</strong>N</p>
              <p><strong>字段单位：</strong>厘米（cm）</p>
              <p><strong>字段示例：</strong>2.9</p>
            </div>

            <div class="field-item">
              <h3>（10）株丛数</h3>
              <p><strong>标识：</strong>stemCount</p>
              <p><strong>中文名称：</strong>株丛数</p>
              <p><strong>英文名称：</strong>Stem Count</p>
              <p><strong>定义：</strong>样方中灌木植物的总株数或总丛数</p>
              <p><strong>字段类型：</strong>N</p>
              <p><strong>字段单位：</strong>株或丛／样方</p>
              <p><strong>注释：</strong>整数型数据</p>
              <p><strong>字段示例：</strong>102</p>
            </div>

            <div class="field-item">
              <h3>（11）盖度</h3>
              <p><strong>标识：</strong>coverage</p>
              <p><strong>中文名称：</strong>盖度</p>
              <p><strong>英文名称：</strong>Coverage</p>
              <p><strong>定义：</strong>该植物地上部分的垂直投影面积占样方面积的百分比</p>
              <p><strong>字段类型：</strong>N</p>
              <p><strong>字段单位：</strong>%</p>
              <p><strong>注释：</strong>填写百分比数值，如"12.3%"，以"12.3"填写</p>
              <p><strong>字段示例：</strong>37.0</p>
            </div>

            <div class="field-item">
              <h3>（12）备注</h3>
              <p><strong>标识：</strong>eventRemarks</p>
              <p><strong>中文名称：</strong>备注</p>
              <p><strong>英文名称：</strong>Event Remarks</p>
              <p><strong>定义：</strong>对字段中未包含的内容进行的补充说明</p>
              <p><strong>字段单位：</strong>C</p>
              <p><strong>字段示例：</strong>高度为估测值</p>
            </div>
          </div>
        </div>

        <div v-if="activeTab === '草本植物观测'" class="herb-observation">
          <h2>草本植物观测</h2>
          <p>草本调查数据表包括样方编号、样方长、样方宽、物种中文名、物种学名、最大高度、平均高度、株丛数、盖度和备注等10个字段，用于记录森林和灌丛中的草本层植物或者草地植物调查数据。</p>
          
          <div class="field-list">
            <div class="field-item">
              <h3>（1）样方编号</h3>
              <p><strong>标识：</strong>quadratCode</p>
              <p><strong>中文名称：</strong>样方编号</p>
              <p><strong>英文名称：</strong>Quadrat Code</p>
              <p><strong>定义：</strong>调查的草本植物样方顺序号</p>
              <p><strong>字段类型：</strong>C</p>
              <p><strong>字段示例：</strong>h1</p>
            </div>

            <div class="field-item">
              <h3>（2）样方长</h3>
              <p><strong>标识：</strong>quadratLength</p>
              <p><strong>中文名称：</strong>样方长</p>
              <p><strong>英文名称：</strong>Quadrat Length</p>
              <p><strong>定义：</strong>植被调查样方的长度</p>
              <p><strong>字段类型：</strong>N</p>
              <p><strong>字段单位：</strong>米（m）</p>
              <p><strong>字段示例：</strong>5</p>
            </div>

            <div class="field-item">
              <h3>（3）样方宽</h3>
              <p><strong>标识：</strong>quadratWidth</p>
              <p><strong>中文名称：</strong>样方宽</p>
              <p><strong>英文名称：</strong>Quadrat Width</p>
              <p><strong>定义：</strong>植被调查样方的宽度</p>
              <p><strong>字段类型：</strong>N</p>
              <p><strong>字段单位：</strong>米（m）</p>
              <p><strong>字段示例：</strong>5</p>
            </div>

            <div class="field-item">
              <h3>（4）物种中文名</h3>
              <p><strong>标识：</strong>vernacularName</p>
              <p><strong>中文名称：</strong>物种中文名</p>
              <p><strong>英文名称：</strong>Vernacular Name</p>
              <p><strong>定义：</strong>植物种中文名</p>
              <p><strong>字段类型：</strong>C</p>
              <p><strong>注释：</strong>推荐以《中国植物志》为标准填写</p>
              <p><strong>字段示例：</strong>西北针茅</p>
            </div>

            <div class="field-item">
              <h3>（5）物种学名</h3>
              <p><strong>标识：</strong>scientificName</p>
              <p><strong>中文名称：</strong>物种学名</p>
              <p><strong>英文名称：</strong>Scientific Name</p>
              <p><strong>定义：</strong>使用双名法命名的物种的完整名称，包含命名人</p>
              <p><strong>字段类型：</strong>C</p>
              <p><strong>注释：</strong>推荐以《中国植物志》为标准填写</p>
              <p><strong>字段示例：</strong>Stipa sareptana A.K. Becker var. krylovii (Roshev.) P.C. Kuo & Y.H. Sun</p>
            </div>

            <div class="field-item">
              <h3>（6）最大高度</h3>
              <p><strong>标识：</strong>maxHeight</p>
              <p><strong>中文名称：</strong>最大高度</p>
              <p><strong>英文名称：</strong>Maximum Height</p>
              <p><strong>定义：</strong>植株中最高植株的高度</p>
              <p><strong>字段类型：</strong>N</p>
              <p><strong>字段单位：</strong>厘米（cm）</p>
              <p><strong>字段示例：</strong>22</p>
            </div>

            <div class="极field-item">
              <h3>（7）平均高度</h3>
              <p><strong>标识：</strong>averageHeight</p>
              <p><strong>中文名称：</strong>平均高度</p>
              <p><strong>英文名称：</strong>Average Height</p>
              <p><strong>定义：</strong>调查样方中植株的平均高度</p>
              <p><strong>字段类型：</strong>N</p>
              <p><strong>字段单位：</strong>厘米（cm）</p>
              <p><strong>字段示例：</strong>18</p>
            </div>

            <div class="field-item">
              <h3>（8）株丛数</h3>
              <p><strong>标识：</strong>stemCount</p>
              <p><strong>中文名称：</strong>株丛数</p>
              <p><strong>英文名称：</strong>Stem Count</p>
              <p><strong>定义：</strong>样方中草本植物的总株数或总丛数</p>
              <p><strong>字段类型：</strong>N</p>
              <p><strong>字段单位：</strong>株或丛／样方</p>
              <p><strong>注释：</strong>整数型数据</p>
              <p><strong>字段示例：</strong>28</p>
            </div>

            <div class="field-item">
              <h3>（9）盖度</h3>
              <p><strong>标识：</strong>coverage</p>
              <p><strong>中文名称：</strong>盖度</p>
              <p><strong>英文名称：</strong>Coverage</p>
              <p><strong>定义：</strong>植物地上部分的垂直投影面积占样方面积的百分比</p>
              <p><strong>字段类型：</strong>N</p>
              <p><strong>字段单位：</strong>%</p>
              <p><strong>注释：</strong>填写百分比数值，如"21.0%"，以"21.0"填写</p>
              <p><strong>字段示例：</strong>21.0</p>
            </div>

            <div class="field-item">
              <h3>（10）备注</h3>
              <p><strong>标识：</strong>eventRemarks</p>
              <p><strong>中文名称：</strong>备注</p>
              <p><strong>英文名称：</strong>Event Remarks</p>
              <p><strong>定义：</strong>对字段中未包含的内容进行的补充说明</p>
              <p><strong>字段类型：</strong>C</p>
              <p><strong>字段示例：</strong>盖度为估测值</p>
            </div>
          </div>
        </div>

        <div v-if="activeTab === '辨认内容'" class="identification">
          <h2>辨认内容</h2>
          <p>（内容待补充）</p>
        </div>

        <div v-if="activeTab === '植物对比'" class="comparison">
          <h2>植物对比</h2>
          <p>（内容待补充）</p>
          <div class="external-link">
            <h3>相关链接：</h3>
            <p><a href="https://www.cvh.ac.cn/index.php" target="_blank">中国数字植物标本馆</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
