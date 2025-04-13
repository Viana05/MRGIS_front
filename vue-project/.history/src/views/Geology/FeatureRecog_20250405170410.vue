<script lang="ts" setup></script>

<template>
  <div class="stratigraphy-container">
    <div class="header">
      <h1>地层特征识别</h1>
      <p class="subtitle">从雪球地球到盘古大陆，从生物大爆发到生物大灭绝...</p>
    </div>

    <div class="content-section historical-review">
      <h2 class="section-title">历史回望</h2>

      <div class="timeline">
        <div class="timeline-item">
          <h3>原始地层学阶段 (1669-1900)</h3>
          <div class="timeline-content">
            <p><strong>N. Steno 的地层三定律：</strong></p>
            <ul>
              <li>层序叠加律：若地层未经变动则下老上新</li>
              <li>原始侧向连续律：若地层未经变动则呈连续体并逐渐尖灭</li>
              <li>原始水平律：若地层未经变动则呈水平或大致水平产状</li>
            </ul>
            <p>18世纪，W. Smith提出生物层序律，1799年诞生第一张地层表。</p>
            <p>19世纪末，J. Walther提出瓦尔特相律（相对比原理）。</p>
          </div>
        </div>

        <div class="timeline-item">
          <h3>狭义地层学阶段 (1900-1976)</h3>
          <div class="timeline-content">
            <p>主要特征：</p>
            <ol>
              <li>统一地层划分对比思想为主导</li>
              <li>地层分类、术语、概念和原理激烈变动</li>
            </ol>
            <p>葛利普在《地层学原理》(1913)中描述了相变和岩相界线穿时现象。</p>
            <p>
              1976年《国际地层指南》(第一版)出版，多重地层划分对比思想被接受。
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <h3>现代地层学阶段 (1976-至今)</h3>
          <div class="timeline-content">
            <p>四大典型特征：</p>
            <ol>
              <li>研究对象和内容大为扩展和深化</li>
              <li>重视国际交流合作与全球对比</li>
              <li>重视微观尺度和现代科技手段</li>
              <li>地层划分对比分辨率显著提高</li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section rock-stratigraphy">
      <h2 class="section-title">岩石地层</h2>
      <div class="definition-box">
        <p>
          <strong>地层（stratum）</strong
          >：一切成层岩石的总称，是一层或一组具有某种统一的特征和属性的，并和上下层有着明显区别的岩层。
        </p>
        <p>
          <strong>岩石地层学</strong
          >：根据地层的岩性及岩性组合，对地层进行划分、对比的学科。
        </p>
        <p>
          <strong>岩石地层划分</strong
          >：根据地层的岩性、岩相和变质、变形特征将地层组织成相应的岩石地层单位。
        </p>
      </div>
    </div>

    <div class="interactive-section">
      <h2 class="section-title">地层特征识别工具</h2>
      <div class="tool-container">
        <div class="tool-option">
          <label for="rock-type">岩石类型：</label>
          <select id="rock-type" v-model="selectedRockType">
            <option value="sedimentary">沉积岩</option>
            <option value="igneous">火成岩</option>
            <option value="metamorphic">变质岩</option>
          </select>
        </div>

        <div class="tool-option">
          <label for="geological-age">地质年代：</label>
          <select id="geological-age" v-model="selectedAge">
            <option value="cenozoic">新生代</option>
            <option value="mesozoic">中生代</option>
            <option value="paleozoic">古生代</option>
            <option value="precambrian">前寒武纪</option>
          </select>
        </div>

        <button class="analyze-btn" @click="analyzeStratigraphy">
          分析地层特征
        </button>
      </div>

      <div class="result-display" v-if="analysisResult">
        <h3>分析结果</h3>
        <div class="result-content" v-html="analysisResult"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.stratigraphy-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Arial", sans-serif;
  color: #333;
  background-color: #f9f9f9;
}

.header {
  text-align: center;
  margin-bottom: 30px;
  padding: 20px;
  background-color: #2c3e50;
  color: white;
  border-radius: 5px;
}

.header h1 {
  margin: 0;
  font-size: 2.2em;
}

.subtitle {
  font-style: italic;
  margin-top: 10px;
  opacity: 0.9;
}

.content-section {
  background-color: white;
  padding: 25px;
  margin-bottom: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.section-title {
  color: #2c3e50;
  border-bottom: 2px solid #e74c3c;
  padding-bottom: 10px;
  margin-top: 0;
}

.timeline {
  position: relative;
  padding-left: 50px;
  margin-top: 30px;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: #3498db;
}

.timeline-item {
  position: relative;
  margin-bottom: 30px;
}

.timeline-item h3 {
  color: #e74c3c;
  margin-top: 0;
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: -40px;
  top: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #3498db;
  border: 4px solid #2980b9;
}

.definition-box {
  background-color: #f1f8fe;
  padding: 15px;
  border-left: 4px solid #3498db;
  margin: 20px 0;
}

.interactive-section {
  background-color: white;
  padding: 25px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.tool-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 0;
}

.tool-option {
  flex: 1;
  min-width: 200px;
}

.tool-option label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

.tool-option select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
}

.analyze-btn {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  margin-top: 10px;
}

.analyze-btn:hover {
  background-color: #c0392b;
}

.result-display {
  margin-top: 30px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 5px;
  border-left: 4px solid #27ae60;
}

.result-display h3 {
  margin-top: 0;
  color: #27ae60;
}

.result-content {
  line-height: 1.6;
}

@media (max-width: 768px) {
  .timeline {
    padding-left: 30px;
  }

  .timeline::before {
    left: 10px;
  }

  .timeline-item::before {
    left: -25px;
  }
}
</style>
