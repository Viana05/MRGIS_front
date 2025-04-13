<script setup>
import { ref, computed } from "vue";

// 背斜和向斜

const showModal = ref(false);
const modalTitle = ref("");
const currentModalImage = ref("");

const showFullscreen = (title) => {
  // 这里应该根据title设置对应的图片路径
  modalTitle.value = title;
  currentModalImage.value = getImagePath(title);
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

// 轮播图
import zhezhouImage1 from "@/assets/InternalForce/01褶皱地貌/褶皱1.jpg";
import zhezhouImage2 from "@/assets/InternalForce/01褶皱地貌/褶皱2.jpg";
import zhezhouImage3 from "@/assets/InternalForce/01褶皱地貌/褶皱3.jpg";
import zhezhouImage4 from "@/assets/InternalForce/01褶皱地貌/褶皱4.jpg";
import zhezhouImage5 from "@/assets/InternalForce/01褶皱地貌/褶皱5.jpg";

const slides = [
  {
    image: zhezhouImage1,
    title: "褶皱",
  },
  {
    image: zhezhouImage2,
    title: "褶皱",
  },
  {
    image: zhezhouImage3,
    title: "褶皱",
  },
  {
    image: zhezhouImage4,
    title: "褶皱",
  },
  {
    image: zhezhouImage5,
    title: "褶皱",
  },
];

const currentIndex = ref(0);
const currentSlide = computed(() => slides[currentIndex.value]);

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length;
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

// 页面
const expandedSections = ref({
  fold: true,
  fault: false,
  volcano: false,
});

const toggleSection = (section) => {
  expandedSections.value[section] = !expandedSections.value[section];
};
</script>

<template>
  <div class="geology-container">
    <h1 class="title">内营力主导地貌</h1>

    <div class="section">
      <div class="section-header" @click="toggleSection('fold')">
        <h2>01 褶皱地貌</h2>
        <span class="toggle-icon">{{ expandedSections.fold ? "−" : "+" }}</span>
      </div>
      <div v-if="expandedSections.fold" class="section-content">
        <div class="geology-carousel">
          <div
            class="carousel-track"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div
              v-for="(slide, index) in slides"
              :key="index"
              class="carousel-slide"
            >
              <img :src="slide.image" :alt="slide.title" />
              <div class="carousel-caption">{{ slide.title }}</div>
            </div>
          </div>

          <button class="carousel-button prev" @click="prevSlide">‹</button>
          <button class="carousel-button next" @click="nextSlide">›</button>

          <div class="carousel-indicators">
            <div
              v-for="(_, index) in slides"
              :key="index"
              class="carousel-indicator"
              :class="{ active: currentIndex === index }"
              @click="goToSlide(index)"
            ></div>
          </div>
        </div>
        <p>
          作为地壳中最基本的构造型式和最引人注目的地质现象。褶皱是由岩石中的各种面的弯曲而显示的变形。
        </p>
        <p>
          褶皱的形态千奇百怪、复杂多样，其规模小可至显微镜下的微型褶皱，大可至卫星图上的区域性褶皱。
        </p>

        <h3>（1）背斜和向斜</h3>
        <p>
          根据形态特征和组成褶皱的地层面向，褶皱可被分为两种基本类型：<strong>背斜（anticline）</strong>和<strong>向斜（syncline）</strong>。
        </p>
        <div class="single-image-container">
          <img
            src="@/assets/InternalForce/01褶皱地貌/背斜.jpg"
            alt="背斜"
            class="geology-image single-image"
          />
          <p class="image-caption">背斜</p>
        </div>
        <p>
          背斜外形上多为向上突出的弯曲，岩层自中心向外倾斜，核部是老岩层，两翼是新岩层。背斜顶部受张力作用，岩性脆弱，易被侵蚀，在外力作用下形成谷。
        </p>
        <div class="single-image-container">
          <img
            src="@/assets/InternalForce/01褶皱地貌/向斜.jpg"
            alt="向斜"
            class="geology-image single-image"
          />
          <p class="image-caption">向斜</p>
        </div>
        <p>
          向斜岩层则一般为向下突出的弯曲，岩层愈往中央，愈年轻。原始形态使向斜可成为谷地，但由于向斜槽部受挤压，物质坚实难被侵蚀，整体经长期侵蚀后反而可能成为山岭。
        </p>

        <div class="fold-features">
          <h3>褶皱要素</h3>
          <p>
            褶皱要素是褶皱的基本组成部分，主要包括核、翼、转折端、枢纽、轴面、拐点以及脊线和槽线。
          </p>
          <div class="single-image-container">
            <img
              src="@/assets/InternalForce/01褶皱地貌/褶皱要素1.jpg"
              alt="褶皱要素"
              class="geology-image single-image"
            />
            <p class="image-caption">褶皱要素</p>
          </div>

          <div class="term-definition">
            <p>
              <strong>核（core）</strong
              >是褶皱的中心部分，<strong>翼（limb）</strong>为褶皱中心两侧平弧状的部分。相邻背形和向形共用翼的褶皱面上凸与下凹部分的分界点（翼部曲率为零）被称为<strong>拐点</strong>。
            </p>
            <div class="single-image-container">
              <img
                src="@/assets/InternalForce/01褶皱地貌/褶皱要素2.jpg"
                alt="核（core）"
                class="geology-image single-image"
              />
              <p class="image-caption">核（core）</p>
            </div>

            <p>
              <strong>翼间角</strong
              >是指正交剖面上两翼间的内夹角，而单一褶皱面上最大弯曲点的连线为<strong>枢纽</strong>。褶皱面从一翼过渡到另一翼的弯曲部分被称为<strong
                >转折端（hinge zone）</strong
              >。
            </p>
            <div class="single-image-container">
              <img
                src="@/assets/InternalForce/01褶皱地貌/褶皱要素3.jpg"
                alt="翼间角"
                class="geology-image single-image"
              />
              <p class="image-caption">翼间角</p>
            </div>

            <p>
              同一背形褶皱面的最高点的连线称为<strong>脊线</strong>；反之，同一向形褶皱面的最低点的连线称为<strong>槽线</strong>。各相邻褶皱面的枢纽连成的面称为<strong
                >轴面（axial plane）</strong
              >，轴面与地面或其他任何面的交线称<strong>轴迹</strong>。
            </p>
          </div>
          <div class="single-image-container">
            <img
              src="@/assets/InternalForce/01褶皱地貌/轴迹.jpg"
              alt="轴迹"
              class="geology-image single-image"
            />
            <p class="image-caption">轴迹</p>
          </div>

          <h4>褶皱分类</h4>
          <div class="classification-section">
            <div class="classification-item">
              <h5>按转折端形态：</h5>
              <p>
                褶皱转折端的形态有圆弧状、尖棱状、箱状等，据此褶皱可被描述为以下几种：<strong>挠曲</strong>、<strong>尖棱褶皱</strong>、<strong>圆弧褶皱</strong>、<strong>箱状褶皱</strong>。
              </p>
              <div class="single-image-container">
                <img
                  src="@/assets/InternalForce/01褶皱地貌/褶皱分类1.jpg"
                  alt="褶皱按转折端形态分类"
                  class="geology-image single-image"
                />
                <p class="image-caption">褶皱按转折端形态分类</p>
              </div>
            </div>

            <div class="classification-item">
              <h5>按翼间角大小：</h5>
              <p>
                根据翼间角的大小，可将褶皱描述为<strong>平缓褶皱</strong>、<strong>开阔褶皱</strong>、<strong>中常褶皱</strong>、<strong>紧闭褶皱</strong>和<strong>等斜褶皱</strong>。
              </p>
              <div class="single-image-container">
                <img
                  src="@/assets/InternalForce/01褶皱地貌/褶皱分类2.jpg"
                  alt="褶皱按翼间角的大小分类"
                  class="geology-image single-image"
                />
                <p class="image-caption">褶皱按翼间角的大小分类</p>
              </div>
            </div>

            <div class="classification-item">
              <h5>按轴面产状：</h5>
              <p>
                根据轴面产状和两翼产状，褶皱可被分为<strong>直立褶皱</strong>、<strong>斜歪褶皱</strong>、<strong>褶皱</strong>、<strong>平卧褶皱</strong>和<strong>翻卷褶皱</strong>。
              </p>
              <div class="single-image-container">
                <img
                  src="@/assets/InternalForce/01褶皱地貌/褶皱分类3.jpg"
                  alt="褶皱按轴面产状分类"
                  class="geology-image single-image"
                />
                <p class="image-caption">褶皱按轴面产状分类</p>
                <p class="image-caption">
                  A.直立褶皱; B.斜歪褶皱; C.倒转褶皱; D.平卧褶皱; E.翻卷褶皱;
                  P.轴面(或正交剖面上的轴迹)
                </p>
              </div>
            </div>
          </div>

          <div class="symmetry-section">
            <h5>褶皱对称性</h5>
            <p>
              褶皱根据其对称性可分为<strong>对称褶皱</strong>和<strong>不对称褶皱</strong>。对称褶皱的轴面与褶皱包络面垂直，且两翼长度基本相等。不对称褶皱的轴面与褶皱的包络面斜交，且两翼长度不等。
            </p>
          </div>

          <div class="plane-morphology">
            <h5>褶皱平面出露形态</h5>
            <p>
              褶皱的平面出露形态可根据褶皱中的同一褶皱面在平面上出露的纵向长度和横向宽度之比来描述。
            </p>

            <div class="morphology-types">
              <div class="morphology-item">
                <p>
                  <strong>等轴褶皱</strong
                  >：长与宽之比近于1:1的褶皱为等轴褶皱，等轴背斜又称<strong>穹隆构造（dome）</strong>，等轴向斜又称<strong>构造盆地（basin）</strong>。
                </p>
              </div>
              <div class="morphology-item">
                <p>
                  <strong>短轴褶皱</strong
                  >：长与宽之比约3:1～10:1的枢纽向两端倾伏的褶皱为短轴褶皱。
                </p>
              </div>
              <div class="morphology-item">
                <p>
                  <strong>线状褶皱</strong
                  >：长与宽之比大于10:1的各类狭长褶皱被称为线状褶皱。
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 全屏图片查看模态框 -->
        <div class="modal" v-if="showModal" @click.self="closeModal">
          <div class="modal-content">
            <span class="close" @click="closeModal">&times;</span>
            <img :src="currentModalImage" :alt="modalTitle" />
            <p class="modal-caption">{{ modalTitle }}</p>
          </div>
        </div>

        <h3>（2）分类</h3>
        <p>
          褶皱的空间位态取决于轴面和枢纽的产状。以轴面倾角为横坐标，枢纽倾伏角为纵坐标，褶皱可被分为7种主要类型。
        </p>
        <div class="single-image-container">
          <img
            src="@/assets/InternalForce/01褶皱地貌/褶皱分类.jpg"
            alt="褶皱分类"
            class="geology-image single-image"
          />
          <p class="image-caption">褶皱分类</p>
        </div>
        <p>
          其中直立水平褶皱、直立倾伏褶皱和倾竖褶皱轴面直立，表示褶皱倾向相反，倾角相等。
        </p>

        <h3>（3）形成机制</h3>
        <p>
          褶皱的形成机制与其受力方式、变形环境及岩层的变形行为密切相关。不同的形成机制在不同的条件下起作用，常见的有：纵弯褶皱作用、横弯褶皱作用、剪切褶皱作用、柔流褶皱作用。
        </p>
      </div>
    </div>

    <div class="section">
      <div class="section-header" @click="toggleSection('fault')">
        <h2>02 断层地貌</h2>
        <span class="toggle-icon">{{
          expandedSections.fault ? "−" : "+"
        }}</span>
      </div>
      <div v-if="expandedSections.fault" class="section-content">
        <div class="single-image-container">
          <img
            src="@/assets/InternalForce/02断层地貌/断层图片2.jpg"
            alt="断层"
            class="geology-image single-image"
          />
          <p class="image-caption">断层</p>
        </div>
        <p>断层是地壳岩石体(地质体)中顺破裂面发生明显位移的一种破裂构造。</p>
        <p>
          断层发育广泛，是地壳中最重要的构造类型。大断层常构成区域地质格架，既控制区域地质的结构和演化，还控制和影响区域作用。
        </p>

        <h3>（1）定义</h3>
        <p>
          断层是一种面状构造。断层面是一个将岩块或岩层断开成两部分并借以滑动的破裂面。
        </p>
        <p>
          断层面往往不是一个产状稳定的平直面，它的空间位置由其走向、倾向和倾角来确定。
        </p>
        <div class="single-image-container">
          <img
            src="@/assets/InternalForce/02断层地貌/滑砾状断层面.jpg"
            alt="滑砾状断层面"
            class="geology-image single-image"
          />
          <p class="image-caption">滑砾状断层面</p>
        </div>

        <h3>（2）分类</h3>
        <p>
          依据断层走向与所切岩层走向方位的关系，断层可分为以下几类：走向断层、倾向断层、斜向断层、顺层断层。其中，走向断层的走向与岩层走向基本一致。
        </p>

        <h3>（3）断层运动</h3>
        <p>
          断层运动是复杂的,一定规模的断层常常经历了多次脉冲式滑动。如一条正断层，在各次微量滑动中，虽然上盘以沿倾斜下滑为主，但也包含多次斜向滑动。
        </p>

        <h3>（4）走滑断层</h3>
        <p>
          走向滑动断层一般是指大型平移断层，是两盘顺直立断层面相对水平剪切滑动的构造，简称走滑断层（strike-slip
          fault）。
        </p>
      </div>
    </div>

    <div class="section">
      <div class="section-header" @click="toggleSection('volcano')">
        <h2>03 火山地貌</h2>
        <span class="toggle-icon">{{
          expandedSections.volcano ? "−" : "+"
        }}</span>
      </div>
      <div v-if="expandedSections.volcano" class="section-content">
        <p>
          火山是一种常见的地貌形态，是由地下熔融物质及其携带的固体碎屑冲出地表后堆积形成的山体。
        </p>
        <p>
          火山喷出口是一条由地球上地幔或岩石圈到地表的管道，大部分物质堆积在火山口附近，有些被大气携带到高处而扩散到几百或几千公里外的地方。
        </p>

        <h3>（4）冠状山</h3>
        <p>冠状山是由一片平坦的岩层经翘曲或向上弯曲形成的。</p>
        <p>
          地壳下的岩浆上涌，使地球表层的岩石向上隆起，从而形成了冠状山。与火山不同的是，岩浆通常不会到达地球表面。
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.geology-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.6;
  color: #333;
}

h3,
h4,
h5 {
  color: #2c3e50;
  margin-top: 25px;
  -bottom: 15px;
}

h3 {
  font-size: 1.5rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

h4 {
  font-size: 1.3rem;
}

h5 {
  font-size: 1.1rem;
  color: #34495e;
}

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

.fold-features {
  margin-top: 40px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
}

.term-definition {
  background-color: white;
  padding: 15px;
  border-left: 4px solid #3498db;
  margin: 15px 0;
}

.classification-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.classification-item {
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.image-group {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.symmetry-section,
.plane-morphology {
  background-color: white;
  padding: 15px;
  margin: 20px 0;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.morphology-types {
  margin-top: 15px;
}

.morphology-item {
  margin-bottom: 10px;
  padding-left: 15px;
  border-left: 3px solid #27ae60;
}

/* 模态框样式 */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.modal-content img {
  max-height: 80vh;
  max-width: 100%;
  border-radius: 5px;
}

.close {
  position: absolute;
  top: -40px;
  right: 0;
  color: white;
  font-size: 35px;
  font-weight: bold;
  cursor: pointer;
}

.modal-caption {
  color: white;
  text-align: center;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .classification-section {
    grid-template-columns: ;
  }

  .image-group {
    grid-template-columns: 1fr 1fr;
  }

  .single-image {
    max-width: 100%;
  }
}

/* 轮播图 */
.geology-carousel {
  position: relative;
  max-width: 900px;
  margin: 30px auto;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background: #f8f9fa;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
  height: 400px;
}

.carousel-slide {
  min-width: 100%;
  position: relative;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 15px;
  font-size: 1.1rem;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
}

.carousel-button:hover {
  background: rgba(255, 255, 255, 0.5);
}

.carousel-button.prev {
  left: 20px;
}

.carousel-button.next {
  right: 20px;
}

.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.carousel-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background 0.3s ease;
}

.carousel-indicator.active {
  background: white;
}

@media (max-width: 768px) {
  .geology-carousel {
    height: 300px;
  }

  .carousel-button {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
}

/* 图片基础样式 */
.geology-image {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 20px auto;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* 单张图片居中样式 */
.single-image {
  max-width: 80%;
  border: 1px solid #e0e0e0;
}

/* 多图并列样式 */
.image-group {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin: 25px 0;
}

.image-group .geology-image {
  max-width: 45%;
  margin: 0;
}

/* 图片说明文字 */
.image-caption {
  text-align: center;
  font-size: 0.9rem;
  color: #666;
  margin-top: 8px;
  font-style: italic;
}

/* 悬停效果 */
.geology-image:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

/* 页面 */
.geology-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  line-height: 1.6;
}

.title {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
  font-size: 2.2rem;
  border-bottom: 2px solid #42b983;
  padding-bottom: 10px;
}

.section {
  margin-bottom: 25px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.section:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.section-header {
  background-color: #42b983;
  color: white;
  padding: 15px 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s;
}

.section-header:hover {
  background-color: #3aa876;
}

.section-header h2 {
  margin: 0;
  font-size: 1.4rem;
}

.toggle-icon {
  font-size: 1.2rem;
  font-weight: bold;
}

.section-content {
  padding: 20px;
  background-color: white;
}

h3 {
  color: #2c3e50;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 1.2rem;
  border-left: 4px solid #42b983;
  padding-left: 10px;
}

p {
  margin-bottom: 15px;
  text-align: justify;
}

strong {
  color: #2c3e50;
  font-weight: 600;
}
</style>
