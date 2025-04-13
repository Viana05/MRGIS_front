<script setup>
import { ref } from "vue";

const activeSection = ref("01");
const activeSubSection = ref(null);

const toggleSection = (section) => {
  activeSection.value = activeSection.value === section ? null : section;
};

const toggleSubSection = (subSection) => {
  activeSubSection.value =
    activeSubSection.value === subSection ? null : subSection;
};
</script>

<template>
  <div class="earth-knowledge">
    <header class="page-header">
      <h1>土壤地理实习</h1>
      <div class="header-decoration">
        <div class="soil-layer"></div>
        <div class="plant-decoration"></div>
      </div>
    </header>

    <main class="content-container">
      <article
        class="knowledge-card"
        :class="{ expanded: activeSection === '01' }"
      >
        <div class="card-header" @click="toggleSection('01')">
          <h2>土与土壤的区别</h2>
          <span class="toggle-icon">{{
            activeSection === "01" ? "▼" : "►"
          }}</span>
        </div>

        <div class="card-content" v-show="activeSection === '01'">
          <div class="single-image-container">
            <img
              src="@/assets/InternalForce/03火山地貌/维苏威火山2.jpg"
              alt="维苏威火山"
              class="geology-image single-image"
            />
            <p class="image-caption">维苏威火山</p>
          </div>
          <p class="lead-text">
            土壤，覆盖在陆地表面，若光线、温度、降水等外在条件充足，则可供植物生长。它的母材是通过水或风搬运、堆积的岩石风化物，在某段期间内，与气候、生物（包括人为因素）、地形等因素的交互作用下形成。
          </p>

          <div class="key-point">
            <div class="point-icon">💡</div>
            <p>
              现在，一般都会将"土"和"土壤"两个词分开使用。换言之，岩石风化后形成"土"；岩石风化变成细小颗粒后，若因为生物作用而呈现适合植物生长的状态，则称为"土壤"。
            </p>
          </div>

          <section class="sub-card" :class="{ open: activeSubSection === '1' }">
            <div class="sub-header" @click="toggleSubSection('1')">
              <h3>土的生成</h3>
              <span class="sub-toggle">{{
                activeSubSection === "1" ? "▽" : "▷"
              }}</span>
            </div>

            <div class="sub-content" v-show="activeSubSection === '1'">
              <p>
                科学家通过放射性元素测定陨石的年代，又分析阿波罗计划所带回来的月球岩石，推测我们所居住的地球，诞生至今大概经过了46亿年。一般认为，地球刚诞生的时候，地球表面和月球表面并没有太大差异，如今却变得截然不同。
              </p>

              <div class="comparison">
                <div class="moon">
                  <h4>月球表面</h4>
                  <ul>
                    <li>没有空气（真空）</li>
                    <li>温差极大（130°C到-170°C）</li>
                    <li>岩石风化成微粒子（粉尘）</li>
                    <li>不形成土壤</li>
                  </ul>
                </div>
                <div class="earth">
                  <h4>地球表面</h4>
                  <ul>
                    <li>有大气层保护</li>
                    <li>温差较小（40°C到-40°C）</li>
                    <li>有水存在</li>
                    <li>微生物形成腐殖质</li>
                    <li>最终形成土壤</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section class="sub-card" :class="{ open: activeSubSection === '2' }">
            <div class="sub-header" @click="toggleSubSection('2')">
              <h3>从土到土壤</h3>
              <span class="sub-toggle">{{
                activeSubSection === "2" ? "▽" : "▷"
              }}</span>
            </div>

            <div class="sub-content" v-show="activeSubSection === '2'">
              <div class="process-flow">
                <div class="process-step">
                  <div class="step-icon">1</div>
                  <p>岩石表面出现苔藓（地衣）</p>
                </div>
                <div class="process-arrow">→</div>
                <div class="process-step">
                  <div class="step-icon">2</div>
                  <p>形成含黏土、微生物的薄土层</p>
                </div>
                <div class="process-arrow">→</div>
                <div class="process-step">
                  <div class="step-icon">3</div>
                  <p>草类植物生长，增加土壤厚度</p>
                </div>
                <div class="process-arrow">→</div>
                <div class="process-step">
                  <div class="step-icon">4</div>
                  <p>灌木和树木出现，形成植物群落</p>
                </div>
              </div>

              <p class="process-note">
                这一过程需要数百年至数万年时间，土壤不断反复诞生又消失，消失再重生。
              </p>
            </div>
          </section>
        </div>
      </article>

      <article
        class="knowledge-card"
        :class="{ expanded: activeSection === '02' }"
      >
        <div class="card-header" @click="toggleSection('02')">
          <h2>脱硅富铝化作用</h2>
          <span class="toggle-icon">{{
            activeSection === "02" ? "▼" : "►"
          }}</span>
        </div>

        <div class="card-content" v-show="activeSection === '02'">
          <section class="sub-card" :class="{ open: activeSubSection === '3' }">
            <div class="sub-header" @click="toggleSubSection('3')">
              <h3>定义</h3>
              <span class="sub-toggle">{{
                activeSubSection === "3" ? "▽" : "▷"
              }}</span>
            </div>

            <div class="sub-content" v-show="activeSubSection === '3'">
              <p class="definition">
                热带、亚热带土壤中发生的硅酸和盐基遭受淋失、黏粒和次生矿物不断形成、铁铝氧化物明显聚积的过程。
              </p>
            </div>
          </section>

          <section class="sub-card" :class="{ open: activeSubSection === '4' }">
            <div class="sub-header" @click="toggleSubSection('4')">
              <h3>发生过程</h3>
              <span class="sub-toggle">{{
                activeSubSection === "4" ? "▽" : "▷"
              }}</span>
            </div>

            <div class="sub-content" v-show="activeSubSection === '4'">
              <div class="process-diagram">
                <div class="diagram-step">
                  <div class="diagram-label">高温多雨条件</div>
                  <div class="diagram-arrow">↓</div>
                </div>
                <div class="diagram-step">
                  <div class="diagram-label">硅酸盐矿物分解</div>
                  <div class="diagram-arrow">↓</div>
                </div>
                <div class="diagram-step">
                  <div class="diagram-label">硅酸和盐基淋失</div>
                  <div class="diagram-arrow">↓</div>
                </div>
                <div class="diagram-step">
                  <div class="diagram-label">铁铝氧化物聚集</div>
                  <div class="diagram-arrow">↓</div>
                </div>
                <div class="diagram-step">
                  <div class="diagram-label">形成红色土体</div>
                </div>
              </div>
            </div>
          </section>

          <section class="sub-card" :class="{ open: activeSubSection === '5' }">
            <div class="sub-header" @click="toggleSubSection('5')">
              <h3>反应成因</h3>
              <span class="sub-toggle">{{
                activeSubSection === "5" ? "▽" : "▷"
              }}</span>
            </div>

            <div class="sub-content" v-show="activeSubSection === '5'">
              <div class="data-card">
                <h4>元素迁移量</h4>
                <ul>
                  <li>硅迁移量: 50%-70%</li>
                  <li>钙镁钾钠迁移量: 70%-100%</li>
                  <li>铁富集量: 10%-12%</li>
                  <li>铝富集量: 7%-15%</li>
                </ul>
              </div>

              <div class="data-card">
                <h4>矿物组成比例</h4>
                <ul>
                  <li>高岭石: 30%-65%</li>
                  <li>三水铝石: 5%-13%</li>
                  <li>赤铁矿: 6%-18%</li>
                </ul>
              </div>
            </div>
          </section>

          <section
            class="sub-card warning"
            :class="{ open: activeSubSection === '6' }"
          >
            <div class="sub-header" @click="toggleSubSection('6')">
              <h3>土壤十大问题</h3>
              <span class="sub-toggle">{{
                activeSubSection === "6" ? "▽" : "▷"
              }}</span>
            </div>

            <div class="sub-content" v-show="activeSubSection === '6'">
              <div class="alert-box">
                <div class="alert-icon">⚠️</div>
                <p>
                  全国土壤污染总超标率为16.1%，耕地土壤点位超标率为19.4%，重金属镉的超标率达7%。
                </p>
              </div>

              <ol class="problem-list">
                <li
                  v-for="problem in [
                    '耕作层变浅',
                    '土壤有机质减少',
                    '土壤板结',
                    '土壤酸化',
                    '土壤次生盐碱化',
                    '土壤营养失调',
                    '土壤污染',
                    '土壤侵蚀',
                    '土壤-植物系统病',
                    '设施农业土壤综合症',
                  ]"
                  :key="problem"
                >
                  {{ problem }}
                </li>
              </ol>

              <div class="solution-box">
                <h4>解决方案</h4>
                <p>改土培肥势在必行！推荐使用：</p>
                <ul class="solution-list">
                  <li>土壤改良剂</li>
                  <li>有机肥</li>
                  <li>有机无机复混肥</li>
                  <li>生物有机肥</li>
                  <li>微生物菌剂</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
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
.earth-knowledge {
  font-family: "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif;
  color: #4a3a2a;
  background-color: #f9f5ed;
  min-height: 100vh;
  padding: 0;
}

.page-header {
  background: linear-gradient(to right, #6b4e3a, #8d6e63);
  color: #fff;
  padding: 2rem 1.5rem 3rem;
  position: relative;
  overflow: hidden;
  text-align: center;
}

.page-header h1 {
  font-size: 2.2rem;
  margin: 0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 2;
}

.header-decoration {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30px;
}

.soil-layer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 15px;
  background: linear-gradient(to right, #5d4037, #8d6e63);
  border-radius: 0 0 8px 8px;
}

.plant-decoration {
  position: absolute;
  bottom: 15px;
  left: 0;
  right: 0;
  height: 15px;
  background-image: radial-gradient(
      circle at 10% 50%,
      #81c784 3px,
      transparent 3px
    ),
    radial-gradient(circle at 30% 30%, #81c784 4px, transparent 4px),
    radial-gradient(circle at 70% 40%, #81c784 5px, transparent 5px),
    radial-gradient(circle at 90% 60%, #81c784 3px, transparent 3px);
  background-size: 20px 20px;
}

.content-container {
  max-width: 900px;
  margin: -20px auto 0;
  padding: 0 20px 40px;
  position: relative;
  z-index: 1;
}

.knowledge-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 25px;
  overflow: hidden;
  border: 1px solid #d7ccc8;
  transition: all 0.3s ease;
}

.knowledge-card.expanded {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.card-header {
  background: linear-gradient(to right, #a1887f, #bcaaa4);
  color: white;
  padding: 1rem 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}

.card-header:hover {
  background: linear-gradient(to right, #8d6e63, #a1887f);
}

.card-header h2 {
  margin: 0;
  font-size: 1.4rem;
}

.toggle-icon {
  font-size: 1.2rem;
}

.card-content {
  padding: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.4s ease;
}

.knowledge-card.expanded .card-content {
  padding: 1.5rem;
  max-height: 5000px;
}

.lead-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #5d4037;
  margin-bottom: 1.5rem;
}

.key-point {
  background-color: #f1f8e9;
  border-left: 4px solid #7cb342;
  padding: 1rem;
  margin: 1.5rem 0;
  display: flex;
  border-radius: 0 4px 4px 0;
}

.point-icon {
  font-size: 1.5rem;
  margin-right: 1rem;
}

.sub-card {
  margin: 1.5rem 0;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #d7ccc8;
  background-color: #fafafa;
}

.sub-card.warning {
  border-color: #ffcc80;
}

.sub-header {
  background-color: #efebe9;
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}

.sub-card.warning .sub-header {
  background-color: #fff3e0;
}

.sub-header:hover {
  background-color: #e0e0e0;
}

.sub-card.warning .sub-header:hover {
  background-color: #ffe0b2;
}

.sub-header h3 {
  margin: 0;
  font-size: 1.1rem;
  color: #5d4037;
}

.sub-toggle {
  font-size: 1rem;
}

.sub-content {
  padding: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.4s ease;
}

.sub-card.open .sub-content {
  padding: 1.2rem;
  max-height: 3000px;
}

.comparison {
  display: flex;
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.moon,
.earth {
  flex: 1;
  padding: 1rem;
  border-radius: 6px;
}

.moon {
  background-color: #e0e0e0;
  border-left: 4px solid #9e9e9e;
}

.earth {
  background-color: #e8f5e9;
  border-left: 4px solid #81c784;
}

.moon h4,
.earth h4 {
  margin-top: 0;
  color: #424242;
}

.process-flow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.5rem 0;
  flex-wrap: wrap;
}

.process-step {
  text-align: center;
  flex: 1;
  min-width: 120px;
}

.step-icon {
  background-color: #8d6e63;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
}

.process-arrow {
  color: #8d6e63;
  padding: 0 0.5rem;
}

.process-note {
  font-style: italic;
  color: #757575;
  text-align: center;
  margin-top: 1rem;
}

.definition {
  background-color: #e3f2fd;
  padding: 1rem;
  border-radius: 4px;
  border-left: 4px solid #2196f3;
}

.process-diagram {
  margin: 1.5rem 0;
}

.diagram-step {
  margin-bottom: 0.8rem;
  padding-left: 2rem;
  position: relative;
}

.diagram-step:before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  background-color: #5d4037;
  border-radius: 50%;
}

.diagram-label {
  background-color: #d7ccc8;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  display: inline-block;
}

.diagram-arrow {
  color: #5d4037;
  margin: 0.3rem 0;
}

.data-card {
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.data-card h4 {
  margin-top: 0;
  color: #5d4037;
}

.alert-box {
  background-color: #ffebee;
  border-left: 4px solid #f44336;
  padding: 1rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
}

.alert-icon {
  font-size: 1.5rem;
  margin-right: 1rem;
}

.problem-list {
  counter-reset: problem-counter;
  padding-left: 0;
  list-style: none;
}

.problem-list li {
  position: relative;
  padding-left: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.problem-list li:before {
  counter-increment: problem-counter;
  content: counter(problem-counter);
  position: absolute;
  left: 0;
  top: 0;
  background-color: #5d4037;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
}

.solution-box {
  background-color: #e8f5e9;
  padding: 1.5rem;
  border-radius: 6px;
  margin-top: 1.5rem;
}

.solution-box h4 {
  margin-top: 0;
  color: #2e7d32;
}

.solution-list {
  columns: 2;
  padding-left: 1.5rem;
}

.solution-list li {
  margin-bottom: 0.5rem;
  color: #5d4037;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 1.8rem;
  }

  .content-container {
    padding: 0 15px 30px;
  }

  .process-flow {
    flex-direction: column;
    align-items: stretch;
  }

  .process-step {
    margin-bottom: 1rem;
  }

  .process-arrow {
    transform: rotate(90deg);
    margin: 0.5rem 0;
    text-align: center;
  }

  .comparison {
    flex-direction: column;
  }

  .solution-list {
    columns: 1;
  }
}
</style>
