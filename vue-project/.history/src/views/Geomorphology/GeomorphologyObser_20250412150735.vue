<script setup>
import { ref } from "vue";

const expandedSections = ref({
  discussionObject: false,
  basicClassification: false,
  observationTools: false,
});

const toggleSection = (section) => {
  expandedSections.value[section] = !expandedSections.value[section];
};
</script>

<template>
  <div class="geography-content">
    <h1>地貌学基础概念</h1>

    <div
      class="section"
      :class="{ expanded: expandedSections.discussionObject }"
      @click="toggleSection('discussionObject')"
    >
      <h2>01 讨论对象</h2>
      <div class="content">
        <p>
          思考一个问题，必然涉及确定讨论对象。地貌主题讨论的对象是什么呢？同学们会说黄土地貌、喀斯特地貌、流水地貌、海岸地貌及冰川地貌等等，所有这些描述，都是地貌讨论中的一部分，任何一部分都不能涵盖地貌描述对象的全部。
        </p>
        <p>如果我们把部分讨论当成全部，不免出现"以偏概全"的认识错误。</p>
        <p class="highlight">
          说来说去，其实也很简单，讨论对象就是地球的岩石圈的表面形态。
        </p>
      </div>
    </div>

    <div
      class="section"
      :class="{ expanded: expandedSections.basicClassification }"
      @click="toggleSection('basicClassification')"
    >
      <h2>02 基本分类</h2>
      <div class="content">
        <p>从地球来看，地貌包括海洋地貌、陆地地貌，我们重点认识陆地地貌。</p>
      </div>
    </div>

    <div
      class="section"
      :class="{ expanded: expandedSections.observationTools }"
      @click="toggleSection('observationTools')"
    >
      <h2>03 专业观察工具和观察方法</h2>
      <div class="content">
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
</template>

<style scoped>
.geography-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  line-height: 1.6;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 2.2rem;
  border-bottom: 2px solid #42b983;
  padding-bottom: 0.5rem;
}

.section {
  background-color: #f9f9f9;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;
}

.section:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.section h2 {
  background-color: #42b983;
  color: white;
  padding: 1rem;
  margin: 0;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
}

.section h2::before {
  content: "▶";
  margin-right: 0.5rem;
  font-size: 0.8rem;
  transition: transform 0.3s ease;
}

.section.expanded h2::before {
  transform: rotate(90deg);
}

.content {
  padding: 0 1rem;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
}

.section.expanded .content {
  padding: 1rem;
  max-height: 1000px;
}

p {
  margin-bottom: 1rem;
}

.highlight {
  background-color: #e8f5e9;
  padding: 0.8rem;
  border-left: 4px solid #42b983;
  font-weight: 500;
}
</style>
