<script setup>
import { ref } from "vue";

const activeCard = ref(null);

const setActiveCard = (index) => {
  activeCard.value = activeCard.value === index ? null : index;
};
</script>

<template>
  <div class="geomorphology-container">
    <header class="page-header">
      <h1>地貌观测和记录内容</h1>
      <div class="header-decoration"></div>
    </header>

    <div class="cards-container">
      <div
        class="concept-card"
        :class="{ active: activeCard === 0 }"
        @click="setActiveCard(0)"
      >
        <div class="card-header">
          <div class="card-icon">🌍</div>
          <h2>01 讨论对象</h2>
        </div>
        <div class="card-content">
          <p>
            思考一个问题，必然涉及确定讨论对象。地貌主题讨论的对象是什么呢？同学们会说黄土地貌、喀斯特地貌、流水地貌、海岸地貌及冰川地貌等等，所有这些描述，都是地貌讨论中的一部分，任何一部分都不能涵盖地貌描述对象的全部。
          </p>
          <p>如果我们把部分讨论当成全部，不免出现"以偏概全"的认识错误。</p>
          <p class="key-point">
            总的来说，讨论对象就是地球的岩石圈的表面形态。
          </p>
        </div>
      </div>

      <div
        class="concept-card"
        :class="{ active: activeCard === 1 }"
        @click="setActiveCard(1)"
      >
        <div class="card-header">
          <div class="card-icon">🗺️</div>
          <h2>02 基本分类</h2>
        </div>
        <div class="card-content">
          <p>从地球来看，地貌包括海洋地貌、陆地地貌，我们重点认识陆地地貌。</p>
        </div>
      </div>

      <div
        class="concept-card"
        :class="{ active: activeCard === 2 }"
        @click="setActiveCard(2)"
      >
        <div class="card-header">
          <div class="card-icon">🔭</div>
          <h2>03 专业观察工具和观察方法</h2>
        </div>
        <div class="card-content">
          <p>
            讨论地貌，我们除了专业的文字与语言，有没有其它的专业工具呢？答案当然是"有"，我们介绍三种专业工具，首先是地貌景观图，肉眼可见，原初有笔绘景观图，摄影技术产生后有了景观照片。
          </p>
          <p>
            有人会发出疑问，"平平常常一张照片，怎么就成了你们地理的专业工具了呢？"，因为照片的拍摄是地貌知识指导，解读需要地貌知识支持，并且解读结果还服务地貌科学发展，所以地貌景观图就成了专业工具了。
          </p>
          <p>
            另外两种工具是等高线地形图和地貌遥感图像，三者各有所长，各有所短，人们扬长避短还可以发展更多种类的学习工具。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.geomorphology-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Roboto", "Helvetica Neue", Arial, sans-serif;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: 1px;
}

.header-decoration {
  height: 4px;
  width: 100px;
  background: linear-gradient(90deg, #3498db, #2c3e50);
  margin: 0 auto;
  border-radius: 2px;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.concept-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
  border: 1px solid #e0e0e0;
  cursor: pointer;
}

.concept-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.concept-card.active {
  border-left: 5px solid #3498db;
}

.card-header {
  padding: 1.5rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
  display: flex;
  align-items: center;
  gap: 1rem;
}

.card-icon {
  font-size: 1.8rem;
}

.card-header h2 {
  margin: 0;
  color: #2c3e50;
  font-size: 1.3rem;
  font-weight: 600;
}

.card-content {
  padding: 0 1.5rem;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.4s ease;
}

.concept-card.active .card-content {
  padding: 1.5rem;
  max-height: 1000px;
}

.card-content p {
  margin-bottom: 1.2rem;
  line-height: 1.7;
  color: #555;
}

.key-point {
  background-color: #e3f2fd;
  padding: 1rem;
  border-radius: 6px;
  font-weight: 500;
  color: #1976d2;
  border-left: 3px solid #1976d2;
}

@media (max-width: 768px) {
  .cards-container {
    grid-template-columns: 1fr;
  }

  .page-header h1 {
    font-size: 2rem;
  }
}
</style>
