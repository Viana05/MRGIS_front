<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const activeTab = ref("usage");
const activeSection = ref("purpose");

import compassImage1 from "@/assets/GeologySurvey/01罗盘的使用/罗盘仪的结构1.jpg";
import compassImage2 from "@/assets/GeologySurvey/01罗盘的使用/罗盘仪的结构2.jpg";
import compassImage3 from "@/assets/GeologySurvey/01罗盘的使用/罗盘仪的结构3.jpg";
import compassImage4 from "@/assets/GeologySurvey/01罗盘的使用/罗盘仪的结构4.jpg";
import compassImage5 from "@/assets/GeologySurvey/01罗盘的使用/罗盘仪的结构5.jpg";
import compassImage6 from "@/assets/GeologySurvey/01罗盘的使用/罗盘仪的结构6.jpg";

const props = defineProps({
  slides: {
    type: Array,
    required: true,
    default: () => [
      {
        image: compassImage1,
        alt: "罗盘仪的结构",
        title: "罗盘仪的结构",
      },
      {
        image: compassImage2,
        alt: "罗盘仪的结构",
        title: "罗盘仪的结构",
      },
      {
        image: compassImage3,
        alt: "罗盘仪的结构",
        title: "罗盘仪的结构",
      },
      {
        image: compassImage4,
        alt: "罗盘仪的结构",
        title: "罗盘仪的结构",
      },
      {
        image: compassImage5,
        alt: "罗盘仪的结构",
        title: "罗盘仪的结构",
      },
      {
        image: compassImage6,
        alt: "罗盘仪的结构",
        title: "罗盘仪的结构",
      },
    ],
  },
  interval: {
    type: Number,
    default: 5000,
  },
});

const currentIndex = ref(0);
const autoPlay = ref(true);
let timer = null;

const slideStyle = computed(() => {
  return {
    transform: `translateX(-${currentIndex.value * 100}%)`,
  };
});

const startAutoPlay = () => {
  if (autoPlay.value) {
    timer = setInterval(() => {
      nextSlide();
    }, props.interval);
  }
};

const pauseAutoPlay = () => {
  clearInterval(timer);
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.slides.length;
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + props.slides.length) % props.slides.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

onMounted(() => {
  startAutoPlay();
});

onBeforeUnmount(() => {
  pauseAutoPlay();
});

// 页面
const toggleTab = (tab) => {
  activeTab.value = tab;
};

const toggleSection = (section) => {
  activeSection.value = section;
};
</script>

<template>
  <div class="geology-guide-container">
    <header class="guide-header">
      <h1>地质调查基本方法</h1>
      <div class="header-decoration">
        <span class="rock-layer"></span>
        <span class="rock-layer"></span>
        <span class="rock-layer"></span>
      </div>
    </header>

    <div class="main-content">
      <div class="tabs">
        <button
          @click="toggleTab('usage')"
          :class="{ active: activeTab === 'usage' }"
          class="tab-btn"
        >
          <i class="icon-compass"></i>
          罗盘使用
        </button>
        <button
          @click="toggleTab('record')"
          :class="{ active: activeTab === 'record' }"
          class="tab-btn"
        >
          <i class="icon-notebook"></i>
          野簿记录
        </button>
      </div>

      <div v-if="activeTab === 'usage'" class="content-section">
        <div class="section-nav">
          <button
            @click="toggleSection('purpose')"
            :class="{ active: activeSection === 'purpose' }"
            class="nav-btn"
          >
            <i class="icon-purpose"></i>
            作用
          </button>
          <button
            @click="toggleSection('structure')"
            :class="{ active: activeSection === 'structure' }"
            class="nav-btn"
          >
            <i class="icon-structure"></i>
            结构
          </button>
          <button
            @click="toggleSection('usage-details')"
            :class="{ active: activeSection === 'usage-details' }"
            class="nav-btn"
          >
            <i class="icon-method"></i>
            使用方法
          </button>
        </div>

        <div class="content-detail">
          <div v-if="activeSection === 'purpose'" class="purpose-section">
            <div class="geology-card">
              <h2><i class="icon-title"></i>地质罗盘的作用</h2>
              <div class="card-content">
                <div class="geo-image-container center-image">
                  <img
                    src="@/assets/GeologySurvey/01罗盘的使用/地质罗盘仪.jpg"
                    alt="地质罗盘仪"
                    class="geo-image"
                  />
                  <p class="image-caption">地质罗盘仪</p>
                </div>
                <p>
                  地质罗盘仪是进行野外地质工作必不可少的一种工具。借助它可以定出方向，观察点的所在位置，测出任何一个观察面的空间位置（如岩层层面、褶皱轴面、断层面、节理面...等构造面的空间位置），以及测定火成岩的各种构造要素，矿体的产状等。因此必须学会使用地质罗盘仪。
                </p>
                <div class="illustration">
                  <div class="compass-illust"></div>
                  <div class="terrain-illust"></div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="activeSection === 'structure'" class="structure-section">
            <div class="geology-card">
              <h2><i class="icon-title"></i>地质罗盘的结构</h2>
              <div class="structure-grid">
                <div
                  class="structure-item"
                  v-for="(item, index) in [
                    {
                      title: '磁针',
                      icon: 'icon-magnet',
                      content:
                        '一般为中间宽两边尖的菱形钢针，安装在底盘中央的顶针上，可自由转动，不用时应旋紧制动螺丝，将磁针抬起压在盖玻璃上避免磁针帽与项针尖的碰撞，以保护顶针尖，延长罗盘使用时间。在进行测量时放松固动螺丝，使磁针自由摆动，最后静止时磁针的指向就是磁针子午线方向。由于我国位于北半球磁针两端所受磁力不等，使磁针失去平衡。为了使磁针保持平衡常在磁针南端绕上几圈铜丝，用此也便于区分磁针的南北两端。',
                    },
                    {
                      title: '水平刻度盘',
                      icon: 'icon-dial',
                      content:
                        '水平刻度盘的刻度是采用这样的标示方式:从0度开始按逆时针方向每10度一记，连续刻至360度，0度和180度分别为N和S，90度和270度分别为E和W，利用它可以直接测得地面两点间直线的磁方位角。',
                    },
                    {
                      title: '垂直刻度盘',
                      icon: 'icon-vertical',
                      content:
                        '专用来读倾角和坡角读数，以E或W位置为0度，以S或N为90度，每隔10度标记相应数字。',
                    },
                    {
                      title: '悬锥',
                      icon: 'icon-pendulum',
                      content:
                        '是测斜器的重要组成部分，悬挂在磁针的轴下方，通过底盘处的视板手可使悬锥转动，悬锥中央的尖端所指刻度即为倾角或坡角的度数。',
                    },
                    {
                      title: '水准器',
                      icon: 'icon-level',
                      content:
                        '通常有两个，分别装在圆形玻璃管中，圆形水准器固定在底盘上，长形水准器固定在测斜仪上。',
                    },
                    {
                      title: '瞄准器',
                      icon: 'icon-sight',
                      content:
                        '包括接物和接目觇板，反光镜中间有细线，下部有透明小孔，使眼睛，细线，目的物三者成一线，作瞄准之用。',
                    },
                  ]"
                  :key="index"
                >
                  <div class="item-header">
                    <i :class="item.icon"></i>
                    <h3>{{ item.title }}</h3>
                  </div>
                  <p>{{ item.content }}</p>
                </div>
              </div>
            </div>
          </div>

          <div v-if="activeSection === 'usage-details'" class="usage-section">
            <div class="geology-card">
              <h2><i class="icon-title"></i>地质罗盘使用方法</h2>

              <div class="method-item">
                <h3><i class="icon-azimuth"></i>目的物方位角确定</h3>
                <div class="method-content">
                  <p>
                    测定目的物与测者间的相对位置关系，也就是测定目的物的方位角(方位角是指从子午线[经线]顺时针方向到该测线的夹角)。
                  </p>
                  <p>
                    测量时放松制动螺丝，使对物觇板指向测物，即使罗盘北端对着目的物，南端靠着自己，进行瞄准，使目的物，对物觇板小孔，盖玻璃上的细丝，对目觇板小孔等连在一直线上，同时使底盘水准器水泡居中，待磁针静止时指北针所指度数即为所测目的物之方位角。(若指针一时静止不了，可读磁针摆动时最小度数的二分之一处，测量其它要素读数时亦同样)。
                  </p>
                  <div class="illustration-box">
                    <div class="azimuth-demo"></div>
                    <div class="compass-demo"></div>
                  </div>
                </div>
              </div>

              <div class="method-item">
                <h3><i class="icon-strata"></i>岩层产状测量</h3>
                <div class="method-content">
                  <div class="strata-types">
                    <div class="strata-def">
                      <h4>岩层走向</h4>
                      <p>
                        （实质是山脉延伸方向）是岩层层面与水平面交线的延伸方向。
                      </p>
                    </div>
                    <div class="strata-def">
                      <h4>岩层倾向</h4>
                      <p>
                        （实质是山体倾斜方向）是岩层面上的倾斜线在水平面的投影所指方向。
                      </p>
                    </div>
                    <div class="strata-def">
                      <h4>倾角</h4>
                      <p>
                        是岩层层面与水平面所夹的锐角（真倾角是倾斜岩体的重心方向与水平面夹角)）
                      </p>
                    </div>
                  </div>

                  <div class="measure-steps">
                    <div class="step">
                      <div class="step-icon">1</div>
                      <div class="step-content">
                        <h4>测量走向</h4>
                        <p>
                          使罗盘的长边(即南北边)紧贴层面，将罗盘放平，水准泡居中，读指北针所示的方位角，就是岩层的走向。
                        </p>
                      </div>
                    </div>
                    <div class="step">
                      <div class="step-icon">2</div>
                      <div class="step-content">
                        <h4>测量倾向</h4>
                        <p>
                          将罗盘的短边紧贴层面，水准泡居中，读指北针所示的方位角，就是岩层的倾向。
                        </p>
                      </div>
                    </div>
                    <div class="step">
                      <div class="step-icon">3</div>
                      <div class="step-content">
                        <h4>测量倾角</h4>
                        <p>
                          需将罗盘横着竖起来，使长边与岩层的走向垂直，紧贴层面，待倾斜器上的水准泡居中后，读悬锤所示的角度，即为倾角。
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="notes-box">
                    <h4><i class="icon-note"></i>注意事项</h4>
                    <ul>
                      <li>
                        <strong>A. 测方向时</strong
                        >读圆刻度盘，盘面要保持水平(圆水准居中)。走向是用长边贴岩层面；倾向是用短边贴岩层面。
                      </li>
                      <li>
                        <strong>B. 测角度时</strong
                        >读半圆刻度盘，盘面垂直岩层面(管水准居中)。要注意测真倾角(最大角)。
                      </li>
                      <li>
                        <strong>C. 走向与倾向关系</strong
                        >走向为倾向加/减90°。所以野外只需测倾向与倾角。
                      </li>
                    </ul>

                    <div class="record-method">
                      <h5>岩层产状记录方式示例：</h5>
                      <p>测量出某一岩层走向为310°,倾向为220°,倾角35°</p>
                      <div class="record-examples">
                        <span>1. NW310º/SW∠35˚</span>
                        <span>2. 310º/SW∠35˚</span>
                        <span>3. 220˚∠35˚（推荐）</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'record'" class="content-section">
        <div class="geology-card">
          <h2><i class="icon-title"></i>野簿定点记录和信手剖面图</h2>
          <div class="field-content">
            <p>野外记录内容将在此处展示...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 轮播图 */
.geo-carousel {
  width: 100%;
  max-width: 1200px;
  margin: 30px auto;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  border: 1px solid #d1e0e9;
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
}

.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
  height: 100%;
}

.slide {
  min-width: 100%;
  position: relative;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.8);
}

.slide-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  color: white;
  text-align: center;
}

.slide-caption h3 {
  font-size: 28px;
  margin-bottom: 10px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.slide-caption p {
  font-size: 18px;
  margin-bottom: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
}

.nav-arrow:hover {
  background: rgba(255, 255, 255, 0.5);
}

.prev {
  left: 20px;
}

.next {
  right: 20px;
}

.indicators {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
  z-index: 10;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: white;
  transform: scale(1.2);
}

/* 地质风格装饰 */
.geo-carousel::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(to right, #c2b280, #a8996e, #8a7c5d);
  z-index: 11;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .carousel-container {
    height: 350px;
  }

  .slide-caption {
    padding: 15px;
  }

  .slide-caption h3 {
    font-size: 20px;
  }

  .slide-caption p {
    font-size: 14px;
  }

  .nav-arrow {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }
}

/* 图标样式 */
.icon-arrow-left::before {
  content: "◀";
}

.icon-arrow-right::before {
  content: "▶";
}

/* 图片相关样式 */
.geo-image {
  max-width: 60%;
  aspect-ratio: 16/9; /* 设置宽高比(根据实际图片比例调整) */
  object-fit: contain; /* 保持比例填充 */
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border: 1px solid #d1e0e9;
  transition: transform 0.3s ease;
}

.geo-image:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.geo-image-container.center-image {
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
  margin: 20px auto; /* 上下20px，左右自动 */
  max-width: 90%; /* 控制最大宽度 */
  text-align: center; /* 文字也居中 */
}

.image-caption {
  text-align: center;
  font-size: 14px;
  color: #6d8ca0;
  margin-top: 8px;
  font-style: italic;
  width: 100%; /* 使标题宽度与图片一致 */
}

.image-container {
  margin: 20px 0;
  text-align: center;
}

.full-width-image {
  width: 100%;
  margin: 20px 0;
}

.image-with-text {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  margin: 20px 0;
}

.image-with-text .text-content {
  flex: 1;
  min-width: 300px;
}

.image-with-text .image-container {
  flex: 1;
  min-width: 300px;
}

.image-side-by-side {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin: 20px 0;
}

.image-side-by-side .image-box {
  flex: 1;
  min-width: 300px;
}

.image-side-by-side .text-box {
  flex: 1;
  min-width: 300px;
}

.image-with-legend {
  position: relative;
  margin: 30px 0;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.legend {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.85);
  padding: 12px;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.legend-item {
  display: flex;
  align-items: center;
  margin: 6px 0;
}

.legend-icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 8px;
}

.record-example,
.rock-layers-example {
  margin: 25px 0;
  text-align: center;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .image-with-text,
  .image-side-by-side {
    flex-direction: column;
  }

  .image-with-text .text-content,
  .image-with-text .image-container,
  .image-side-by-side .image-box,
  .image-side-by-side .text-box {
    min-width: 100%;
  }

  .legend {
    position: static;
    margin-top: 10px;
  }
}

.geology-guide-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  font-family: "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  color: #333;
  line-height: 1.8;
  font-size: 16px;
  background-color: #f8f8f8;
  min-height: 100vh;
}

.guide-header {
  text-align: center;
  padding: 30px 0 20px;
  position: relative;
  background: linear-gradient(to right, #e6f7ff, #f0fff0);
  border-radius: 0 0 15px 15px;
  margin-bottom: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.guide-header h1 {
  color: #2a5c7a;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 15px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.header-decoration {
  display: flex;
  justify-content: center;
  height: 10px;
  margin-top: 15px;
}

.rock-layer {
  width: 80px;
  height: 8px;
  margin: 0 5px;
  background: linear-gradient(to right, #c2b280, #a8996e, #8a7c5d);
  border-radius: 4px;
}

.rock-layer:nth-child(2) {
  background: linear-gradient(to right, #a8996e, #8a7c5d, #6d5c4c);
}

.rock-layer:nth-child(3) {
  background: linear-gradient(to right, #8a7c5d, #6d5c4c, #4e3d30);
}

.main-content {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  padding: 20px;
  margin-bottom: 30px;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  border-bottom: 2px solid #e0e0e0;
}

.tab-btn {
  padding: 12px 25px;
  margin: 0 10px;
  background: none;
  border: none;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  color: #555;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
}

.tab-btn i {
  margin-right: 8px;
  font-size: 20px;
}

.tab-btn:hover {
  color: #2a5c7a;
}

.tab-btn.active {
  color: #2a5c7a;
  border-bottom: 3px solid #4a90e2;
}

.section-nav {
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  background: linear-gradient(to right, #f0f8ff, #f5fff5);
  padding: 15px;
  border-radius: 8px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}

.nav-btn {
  padding: 10px 20px;
  margin: 0 8px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid #d1e0e9;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  color: #4a6b7d;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.nav-btn i {
  margin-right: 8px;
  font-size: 18px;
}

.nav-btn:hover {
  background: #e1f0f8;
  transform: translateY(-2px);
}

.nav-btn.active {
  background: #4a90e2;
  color: white;
  border-color: #4a90e2;
  box-shadow: 0 4px 8px rgba(74, 144, 226, 0.3);
}

.geology-card {
  background: white;
  border-radius: 10px;
  padding: 25px;
  margin-bottom: 25px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid #e0e7ee;
}

.geology-card h2 {
  color: #2a5c7a;
  font-size: 22px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #e0e7ee;
  display: flex;
  align-items: center;
}

.geology-card h2 i {
  margin-right: 10px;
  color: #4a90e2;
}

.structure-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
}

.structure-item {
  background: #f9fbfd;
  border-radius: 8px;
  padding: 18px;
  border-left: 4px solid #8ab3d6;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
}

.structure-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.item-header {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.item-header i {
  font-size: 24px;
  color: #4a90e2;
  margin-right: 10px;
}

.item-header h3 {
  color: #3a6a8a;
  font-size: 18px;
  margin: 0;
}

.method-item {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px dashed #d1e0e9;
}

.method-item:last-child {
  border-bottom: none;
}

.method-item h3 {
  color: #3a6a8a;
  font-size: 20px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.method-item h3 i {
  margin-right: 10px;
  color: #4a90e2;
}

.illustration-box {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
  flex-wrap: wrap;
  gap: 20px;
}

.azimuth-demo,
.compass-demo {
  width: 200px;
  height: 200px;
  background-color: #f0f7ff;
  border-radius: 10px;
  border: 1px solid #d1e0e9;
}

.strata-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.strata-def {
  background: #f5f9ff;
  padding: 15px;
  border-radius: 8px;
  border-left: 3px solid #8ab3d6;
}

.strata-def h4 {
  color: #3a6a8a;
  font-size: 16px;
  margin-bottom: 8px;
}

.measure-steps {
  margin: 25px 0;
}

.step {
  display: flex;
  margin-bottom: 15px;
  align-items: flex-start;
}

.step-icon {
  background-color: #4a90e2;
  color: white;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  flex-shrink: 0;
  font-weight: bold;
}

.step-content h4 {
  color: #3a6a8a;
  font-size: 16px;
  margin: 0 0 5px 0;
}

.notes-box {
  background-color: #fffaf0;
  border-left: 4px solid #e6b800;
  padding: 18px;
  border-radius: 0 8px 8px 0;
  margin: 25px 0;
}

.notes-box h4 {
  color: #8a6d3b;
  font-size: 18px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
}

.notes-box h4 i {
  margin-right: 10px;
}

.notes-box ul {
  padding-left: 20px;
}

.notes-box li {
  margin-bottom: 10px;
}

.record-method {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px dashed #d9c7a7;
}

.record-method h5 {
  color: #8a6d3b;
  font-size: 16px;
  margin-bottom: 8px;
}

.record-examples {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 10px;
}

.record-examples span {
  background-color: #fff5e6;
  padding: 8px 15px;
  border-radius: 20px;
  font-family: monospace;
  color: #8a6d3b;
  border: 1px solid #e6c999;
}

.guide-footer {
  text-align: center;
  padding: 20px;
  color: #6d8ca0;
  font-size: 14px;
  border-top: 1px solid #e0e7ee;
}

/* 图标样式（实际项目中应使用真实图标） */
.icon-compass:before {
  content: "🧭";
}
.icon-notebook:before {
  content: "📓";
}
.icon-purpose:before {
  content: "🎯";
}
.icon-structure:before {
  content: "⚙️";
}
.icon-method:before {
  content: "🔍";
}
.icon-title:before {
  content: "📍";
}
.icon-magnet:before {
  content: "🧲";
}
.icon-dial:before {
  content: "⏱️";
}
.icon-vertical:before {
  content: "📐";
}
.icon-pendulum:before {
  content: "⏳";
}
.icon-level:before {
  content: "⚖️";
}
.icon-sight:before {
  content: "🎯";
}
.icon-azimuth:before {
  content: "🧭";
}
.icon-strata:before {
  content: "🏔️";
}
.icon-note:before {
  content: "📝";
}

/* 响应式设计 */
@media (max-width: 768px) {
  .structure-grid {
    grid-template-columns: 1fr;
  }

  .strata-types {
    grid-template-columns: 1fr;
  }

  .tabs {
    flex-direction: column;
    align-items: center;
  }

  .tab-btn {
    margin: 5px 0;
    width: 100%;
    justify-content: center;
  }

  .section-nav {
    flex-wrap: wrap;
  }

  .nav-btn {
    margin: 5px;
    flex-grow: 1;
    text-align: center;
    justify-content: center;
  }
}
</style>
