<script setup>
import { ref, computed } from "vue";

const activeTab = ref("fault");

const expandedSections = ref({
  faultDefinition: true,
  faultClassification: false,
  faultMovement: false,
  strikeSlipFault: false,
  jointDefinition: false,
  jointDevelopment: false,
  foliation: false,
  lineation: false,
  folds: false,
  foldTypes: false,
  foldMechanisms: false,
  extensionTypes: false,
  extensionDevelopment: false,
  extensionReversal: false,
  shearTypes: false,
  ductileShear: false,
  shearDirection: false,
});

// 断层图片数据
import faultImage1 from "@/assets/StructureField/01断层/断层图片1.jpg";
import faultImage2 from "@/assets/StructureField/01断层/断层图片2.jpg";
import faultImage3 from "@/assets/StructureField/01断层/断层图片3.jpg";

const images = ref([
  {
    src: faultImage1,
    alt: "断层图片1",
    title: "断层",
  },
  {
    src: faultImage2,
    alt: "断层图片2",
    title: "断层",
  },
  {
    src: faultImage3,
    alt: "断层图片3",
    title: "断层",
  },
]);

const toggleSection = (section) => {
  expandedSections.value[section] = !expandedSections.value[section];
};

const strikeSlipTypes = [
  {
    name: "左行走滑断层",
    description: "在走滑断层的一侧，看另一侧运动是从右向左",
  },
  {
    name: "右行走滑断层",
    description: "在走滑断层的一侧，看另一侧运动是从左向右",
  },
  { name: "左阶式", description: "各次级断层顺走向依次向左错列" },
  { name: "右阶式", description: "各次级断层依次向右错列" },
];

import faultImage4 from "@/assets/StructureField/01断层/正断层.jpg";
import faultImage5 from "@/assets/StructureField/01断层/逆断层.jpg";
import faultImage6 from "@/assets/StructureField/01断层/逆冲推覆构造.jpg";
import faultImage7 from "@/assets/StructureField/01断层/行和左行平移断层.jpg";

const faultTypes = [
  {
    name: "正断层",
    description: "断层上盘相对下盘沿断层面向下滑动的断层",
    angle: "一般较陡，以60°左右者较为常见",
    color: "#8e44ad",
  },
  {
    name: "逆断层",
    description: "断层的上盘相对下盘沿断层面向上滑动的断层",
    subtypes: [
      { name: "高角度逆断层", angle: "倾角大于45°", color: "#e74c3c" },
      { name: "低角度逆断层", angle: "倾角小于45°", color: "#c0392b" },
    ],
    color: "#e74c3c",
  },
  {
    name: "逆冲断层",
    description: "位移量很大的低角度逆断层",
    angle: "倾角一般在30°左右或更小，位移量一般在数公里(通常指5km)以上",
    color: "#c0392b",
  },
  {
    name: "平移断层",
    description: "断层两盘顺断层面走向相对位移的断层",
    subtypes: [
      {
        name: "右行平移断层",
        description: "沿垂直断层走向观察断层时，对盘向右滑动",
        color: "#3498db",
      },
      {
        name: "左行平移断层",
        description: "沿垂直断层走向观察断层时，对盘向左滑动",
        color: "#2980b9",
      },
    ],
    color: "#3498db",
  },
];

const jointTypes = [
  {
    name: "按产状分类",
    types: [
      {
        name: "走向节理",
        description: "节理走向与岩层走向大致平行",
        color: "#16a085",
      },
      {
        name: "倾向节理",
        description: "节理走向与岩层走向大致直交",
        color: "#27ae60",
      },
      {
        name: "斜向节理",
        description: "节理走向与岩层走向斜交",
        color: "#2ecc71",
      },
      {
        name: "顺层节理",
        description: "节理面与岩层的层面大致平行",
        color: "#1abc9c",
      },
    ],
  },
  {
    name: "按力学性质分类",
    types: [
      {
        name: "剪节理",
        description:
          "由剪切应力产生的破裂面，产状稳定，延伸较远，节理面平直光滑",
        color: "#e67e22",
      },
      {
        name: "张节理",
        description:
          "由张应力产生的破裂面，产状不稳定，延伸不远，节理面粗糙不平",
        color: "#d35400",
      },
    ],
  },
];

const currentIndex = ref(0);

const currentImage = computed(() => images.value[currentIndex.value]);

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

const prevImage = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images.value.length) % images.value.length;
};

const goToImage = (index) => {
  currentIndex.value = index;
};
</script>

<template>
  <div class="geology-observation-system">
    <!-- 地质背景层 -->
    <div class="geology-background">
      <div class="strata-layer-1"></div>
      <div class="strata-layer-2"></div>
      <div class="fault-line"></div>
      <div class="joint-pattern"></div>
    </div>

    <header class="header">
      <h1>地质构造野外观察</h1>
    </header>

    <nav class="tabs">
      <button
        :class="{ active: activeTab === 'fault' }"
        @click="activeTab = 'fault'"
      >
        断层构造
      </button>
      <button
        :class="{ active: activeTab === 'joint' }"
        @click="activeTab = 'joint'"
      >
        节理构造
      </button>
      <button
        :class="{ active: activeTab === 'foliationLineation' }"
        @click="activeTab = 'foliationLineation'"
      >
        劈理构造&线理构造
      </button>
      <button
        :class="{ active: activeTab === 'folds' }"
        @click="activeTab = 'folds'"
      >
        褶皱构造
      </button>
      <button
        :class="{ active: activeTab === 'extension' }"
        @click="activeTab = 'extension'"
      >
        伸展构造
      </button>
      <button
        :class="{ active: activeTab === 'shear' }"
        @click="activeTab = 'shear'"
      >
        剪切带
      </button>
    </nav>

    <main class="content">
      <!-- 断层内容 -->
      <div v-if="activeTab === 'fault'" class="fault-content">
        <section class="section">
          <div class="section-header" @click="toggleSection('faultDefinition')">
            <h2>断层的定义与基本要素</h2>
            <span class="toggle-icon">{{
              expandedSections.faultDefinition ? "−" : "+"
            }}</span>
          </div>
          <div v-if="expandedSections.faultDefinition" class="section-content">
            <div class="geo-carousel">
              <!-- 当前显示的图片 -->
              <img
                :src="currentImage.src"
                :alt="currentImage.alt"
                class="geo-carousel-image"
              />

              <!-- 图片标题 -->
              <div class="geo-carousel-caption">
                <h3>{{ currentImage.title }}</h3>
                <p>{{ currentImage.description }}</p>
              </div>

              <!-- 导航按钮 -->
              <div class="geo-carousel-nav">
                <button class="geo-carousel-btn" @click="prevImage">‹</button>
                <button class="geo-carousel-btn" @click="nextImage">›</button>
              </div>

              <!-- 指示器 -->
              <div class="geo-carousel-indicators">
                <div
                  v-for="(img, index) in images"
                  :key="index"
                  class="geo-carousel-indicator"
                  :class="{ active: currentIndex === index }"
                  @click="goToImage(index)"
                ></div>
              </div>
            </div>
            <p class="geo-text">
              断层是地壳岩石体(地质体)中顺破裂面发生明显位移的一种破裂构造。
            </p>
            <p class="geo-text">
              断层发育广泛，是地壳中最重要的构造类型。大断层常构成区域地质格架，既控制区域地质的结构和演化，还控制和影响区域成矿作用。
            </p>

            <div class="definition-card" style="border-left-color: #8e44ad">
              <h3>断层面</h3>
              <p>
                断层面是一个将岩块或岩层断开成两部分并借以滑动的破裂面。断层面往往不是一个产状稳定的平直面，它的空间位置由其走向、倾向和倾角来确定。
              </p>
              <div class="geo-image-container">
                <img
                  src="@/assets/StructureField/01断层/滑砾状断层面.jpg"
                  alt="滑砾状断层面"
                  class="geo-image geo-image-small"
                />
                <div class="geo-image-caption">滑砾状断层面</div>
              </div>
            </div>

            <div class="definition-card" style="border-left-color: #9b59b6">
              <h3>断层带</h3>
              <p>
                大型断层多是由一系列破裂面或次级断层组成的带，即断层(裂)带。断裂带内还夹杂有搓碎岩块、岩片及各种断层岩。断层规模越大，断裂带也越宽越复杂。
              </p>
              <div class="geo-image-container">
                <img
                  src="@/assets/StructureField/01断层/断层带.jpg"
                  alt="断层带"
                  class="geo-image geo-image-small"
                />
                <div class="geo-image-caption">断层带</div>
              </div>
            </div>

            <div class="definition-card" style="border-left-color: #3498db">
              <h3>断层线</h3>
              <p>
                断层线是断层面与地面的交线，即断层在地面的出露线。其形态决定于断层面弯曲程度、断层面产状及地面起伏。断层面倾角越缓地形起伏越大，断层线形态越复杂。
              </p>
              <div class="geo-image-container">
                <img
                  src="@/assets/StructureField/01断层/断层示意图.jpg"
                  alt="断层示意图"
                  class="geo-image geo-image-small"
                />
                <div class="geo-image-caption">断层示意图</div>
              </div>
            </div>

            <div class="definition-card" style="border-left-color: #e74c3c">
              <h3>断盘</h3>
              <p>
                断盘是断层面两侧沿断层面发生位移的岩块。位于倾斜断层面上侧的一盘为上盘，位于断层面下侧的一盘为下盘。根据两盘相对滑动，相对上滑的称为上升盘，相对下滑的称为下降盘。
              </p>
              <div class="geo-image-container">
                <img
                  src="@/assets/StructureField/01断层/断盘.jpg"
                  alt="断盘"
                  class="geo-image geo-image-small"
                />
                <div class="geo-image-caption">断盘</div>
              </div>
            </div>
          </div>
        </section>

        <section class="section">
          <div
            class="section-header"
            @click="toggleSection('faultClassification')"
          >
            <h2>断层的分类</h2>
            <span class="toggle-icon">{{
              expandedSections.faultClassification ? "−" : "+"
            }}</span>
          </div>
          <div
            v-if="expandedSections.faultClassification"
            class="section-content"
          >
            <div class="classification-grid">
              <div
                v-for="(type, index) in faultTypes"
                :key="index"
                class="type-card"
                :style="{ borderLeftColor: type.color }"
              >
                <h3>{{ type.name }}</h3>

                <div class="type-image-container" v-if="type.image">
                  <img
                    :src="type.image"
                    :alt="`${type.name}示意图`"
                    class="type-image"
                    @click="showImageModal(type.image, type.name)"
                  />
                  <div class="image-caption" v-if="type.imageCaption">
                    {{ type.imageCaption }}
                  </div>
                </div>
                <p>{{ type.description }}</p>
                <p v-if="type.angle">
                  <strong>倾角特征:</strong> {{ type.angle }}
                </p>
                <div v-if="type.subtypes" class="subtypes">
                  <div
                    v-for="(subtype, subIndex) in type.subtypes"
                    :key="subIndex"
                    class="subtype"
                    :style="{ borderLeftColor: subtype.color }"
                  >
                    <h4>{{ subtype.name }}</h4>
                    <p>{{ subtype.description || subtype.angle }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section">
          <div class="section-header" @click="toggleSection('faultMovement')">
            <h2>断层运动与识别标志</h2>
            <span class="toggle-icon">{{
              expandedSections.faultMovement ? "−" : "+"
            }}</span>
          </div>
          <div v-if="expandedSections.faultMovement" class="section-content">
            <div class="movement-features">
              <div class="feature" style="border-left-color: #f39c12">
                <h3>牵引褶皱</h3>
                <p>
                  断层两盘紧邻断层的岩层，常常发生明显的弧形弯曲，这种弯曲叫作牵引褶皱。一般认为这是两盘相对错动对岩层拖曳的结果，并且以褶皱的弧形弯曲的突出方向指示本盘的运动方向。
                </p>
                <div class="geo-image-container">
                  <img
                    src="@/assets/StructureField/01断层/牵引褶皱1.jpg"
                    alt="牵引褶皱"
                    class="geo-image geo-image-small"
                  />
                  <div class="geo-image-caption">牵引褶皱</div>
                </div>
              </div>

              <div class="feature" style="border-left-color: #d35400">
                <h3>擦痕和阶步</h3>
                <p>
                  擦痕是两盘岩石被磨碎的岩屑和岩粉在断层面上刻划的结果。由粗而深端向细而浅端一般指示对盘运动方向。
                </p>
                <p>
                  阶步是在断层滑动面上常有与擦痕直交的微细陡坎，阶步的陡坎一般面向对盘的运动方向。
                </p>
                <div class="striation-diagram"></div>
              </div>

              <div class="feature" style="border-left-color: #16a085">
                <h3>派生节理</h3>
                <p>
                  在断层两盘相对运动的过程中，断层一盘或两盘的岩石中常常产生羽状排列的张节理和剪节理。羽状张节理与主断层所交锐角一般指示节理所在盘的运动方向。
                </p>
                <div class="joint-diagram"></div>
              </div>
            </div>
          </div>
        </section>

        <section class="section">
          <div class="section-header" @click="toggleSection('strikeSlipFault')">
            <h2>走滑断层</h2>
            <span class="toggle-icon">{{
              expandedSections.strikeSlipFault ? "−" : "+"
            }}</span>
          </div>
          <div v-if="expandedSections.strikeSlipFault" class="section-content">
            <p class="geo-text">
              走向滑动断层一般是指大型平移断层，是两盘顺直立断层面相对水平剪切滑动的构造，简称走滑断层（strike-slip
              fault）。
            </p>

            <div class="strike-slip-types">
              <div
                v-for="(type, index) in strikeSlipTypes"
                :key="index"
                class="type-card"
                :style="{ borderLeftColor: index % 2 ? '#3498db' : '#2980b9' }"
              >
                <h3>{{ type.name }}</h3>
                <p>{{ type.description }}</p>
                <div
                  class="slip-diagram"
                  :class="{
                    'left-slip': type.name.includes('左'),
                    'right-slip': type.name.includes('右'),
                  }"
                ></div>
              </div>
            </div>

            <div class="special-structures">
              <h3>走滑断层的特征性构造</h3>

              <div class="structure" style="border-left-color: #e74c3c">
                <h4>拉分盆地 (Pull-apart basin)</h4>
                <p>
                  拉分盆地是走滑断层系中拉伸形成的断陷盆地。拉分盆地形似菱形，两条长边为走滑断层，短边为正断层。形态上可分为S型和Z型。
                </p>
                <p>
                  左行左阶雁列式走滑断层控制下形成的拉分盆地为Z型，右行右阶雁列式走滑断层控制下形成的拉分盆地为S型。
                </p>
                <div class="basin-diagram"></div>
              </div>

              <div class="structure" style="border-left-color: #9b59b6">
                <h4>花状构造</h4>
                <p>
                  花状构造是走滑断层系中又一种特征性构造。剖面上一条走滑断层自下而上成花状撒开，故称为花状构造。
                </p>
                <p>
                  根据花状构造的结构和力学性质可分为正花状构造和负花状构造。正花状构造一般是聚敛型走滑断层派生的在压扭性应力状态中形成的构造；负花状构造是离散性走滑断层派生的在张扭性应力场中形成的构造。
                </p>
                <div class="flower-diagram"></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- 节理内容 -->
      <div v-if="activeTab === 'joint'" class="joint-content">
        <section class="section">
          <div class="section-header" @click="toggleSection('jointDefinition')">
            <h2>节理的定义与分类</h2>
            <span class="toggle-icon">{{
              expandedSections.jointDefinition ? "−" : "+"
            }}</span>
          </div>
          <div v-if="expandedSections.jointDefinition" class="section-content">
            <p class="geo-text">
              节理是岩体受力断裂后两侧岩块没有显著位移的小型断裂构造。节理分类主要依据节理与有关构造的几何关系，或是节理形成的力学性质。
            </p>

            <div class="joint-classification">
              <div
                v-for="(category, index) in jointTypes"
                :key="index"
                class="category"
              >
                <h3>
                  {{ category.name }}
                </h3>
                <div class="types-grid">
                  <div
                    v-for="(type, typeIndex) in category.types"
                    :key="typeIndex"
                    class="type-card"
                    :style="{ borderLeftColor: type.color }"
                  >
                    <h4>{{ type.name }}</h4>
                    <p>{{ type.description }}</p>
                    <div
                      class="joint-type-diagram"
                      :class="{
                        'shear-joint': type.name === '剪节理',
                        'tension-joint': type.name === '张节理',
                      }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section">
          <div
            class="section-header"
            @click="toggleSection('jointDevelopment')"
          >
            <h2>节理的发育规律</h2>
            <span class="toggle-icon">{{
              expandedSections.jointDevelopment ? "−" : "+"
            }}</span>
          </div>
          <div v-if="expandedSections.jointDevelopment" class="section-content">
            <div class="development-features">
              <div class="feature" style="border-left-color: #16a085">
                <h3>节理分期</h3>
                <p>
                  节理分期的主要依据是节理组的交切关系和各期节理的配套关系。
                </p>
                <p>
                  节理组的交切关系表现为节理组的错开、限制、互切和追踪。在节理组的错开上，后期的节理常切断前期的节理。
                </p>
                <div class="stage-diagram"></div>
              </div>

              <div class="feature" style="border-left-color: #27ae60">
                <h3>雁列节理</h3>
                <p>
                  雁列节理是一组呈雁行斜列式的节理，常被充填形成雁列脉。雁列脉可以是单列产出，是单剪作用的结果，也可以由左阶和右阶两条雁列脉交叉组合成共轭雁列脉。
                </p>
                <div class="en-echelon-diagram"></div>
              </div>

              <div class="feature" style="border-left-color: #e67e22">
                <h3>羽饰构造</h3>
                <p>
                  羽饰构造是发生在比较均匀细粒脆性的岩层中节理面上的纹饰，主节理面上发育的羽状或人字形花纹，指示节理面的破裂扩展方向，人字纹尖端指向裂纹源。
                </p>
                <div class="plumose-diagram"></div>
              </div>

              <div class="feature" style="border-left-color: #d35400">
                <h3>缝合线</h3>
                <p>
                  缝合线是压溶构造的一种，是碳酸盐岩中常见的一种裂缝构造。其成因有争论，但多数认为主要受上覆地层压力和温度作用而形成溶蚀。
                </p>
                <div class="stylolite-diagram"></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        v-if="activeTab === 'foliationLineation'"
        class="foliation-lineation-content"
      >
        <!-- 劈理构造部分 -->
        <section class="section">
          <div class="section-header" @click="toggleSection('foliation')">
            <h2>劈理构造</h2>
            <span class="toggle-icon">{{
              expandedSections.foliation ? "−" : "+"
            }}</span>
          </div>
          <div v-if="expandedSections.foliation" class="section-content">
            <p class="geo-text">
              面状构造和线状构造是地壳中最常见的重要构造现象，也是构造研究中最基础的研究对象和构造标志。面状构造与线状构造成因多样、种类繁多。劈理（面状构造）和线理（线状构造）是其中较为广泛发育的两大类型。
            </p>

            <div class="definition-card" style="border-left-color: #8e44ad">
              <h3>劈理定义</h3>
              <p>
                劈理是一种将岩石按一定方向分割成平行密集的薄片或薄板的次生面状构造。多发育在强烈变形、轻度变质的岩石中。
              </p>
              <p>
                劈理的基本微观特征之一是具有域结构，表现为岩石中劈理域和微劈石相间的平行排列。
              </p>
              <div class="foliation-diagram"></div>
            </div>

            <div class="classification-card" style="border-left-color: #9b59b6">
              <h3>劈理分类</h3>
              <p>
                按照传统分类方案，根据劈理的结构及其成因可将劈理分为流劈理、破劈理和滑劈理。
              </p>

              <div class="subtypes">
                <div class="subtype" style="border-left-color: #8e44ad">
                  <h4>流劈理</h4>
                  <p>
                    是变质岩中最常见的一种透入性面状构造，由片状、板状或扁圆状矿物或其集合体的平行排列而成，具有使岩石分裂成无数薄片的性能。
                  </p>
                </div>

                <div class="subtype" style="border-left-color: #e74c3c">
                  <h4>破劈理</h4>
                  <p>
                    是指岩石中一组与矿物的排列方向无关的、密集的平行破裂面，一般为剪裂面。破劈理相对来说较为不密集和不规则，常常具有进行过溶解作用的痕迹。
                  </p>
                </div>

                <div class="subtype" style="border-left-color: #3498db">
                  <h4>滑劈理</h4>
                  <p>
                    又称折劈理、应变滑劈理、剪劈理或褶劈。是一类被迭加在板劈理或片理之上的劈理，其劈面平直，平行排列，其间距宽窄不一。
                  </p>
                </div>
              </div>
            </div>

            <div class="mechanism-card" style="border-left-color: #16a085">
              <h3>劈理形成机制</h3>
              <p>
                劈理是如何形成的？其形成机制复杂多样，最可能的主要包括以下几种：机械旋转、重结晶、压溶作用、晶体塑性变形。
              </p>

              <div class="mechanism-diagram"></div>
            </div>
          </div>
        </section>
        <!-- 线理构造部分 -->
        <section class="section">
          <div class="section-header" @click="toggleSection('lineation')">
            <h2>线理构造</h2>
            <span class="toggle-icon">{{
              expandedSections.lineation ? "−" : "+"
            }}</span>
          </div>
          <div v-if="expandedSections.lineation" class="section-content">
            <p class="geo-text">
              线理是岩石中发育的一般具有透入性的线状构造。根据观察的尺度，可将线理划分为小型线理和大型线理。
            </p>

            <div class="definition-card" style="border-left-color: #e67e22">
              <h3>线理类型</h3>
              <p>
                在强烈变形岩石中，常常弥漫着各种微型或小型的线理，其形态和成因各异，主要有以下几种:
              </p>

              <div class="lineation-types">
                <div class="type" style="border-left-color: #e74c3c">
                  <h4>拉伸线理</h4>
                  <p>
                    是拉长的岩石碎屑、砾石、缅粒、矿物颗粒或集合体等平行排列而显示的线状构造。
                  </p>
                </div>

                <div class="type" style="border-left-color: #3498db">
                  <h4>矿物生长线理</h4>
                  <p>
                    是由针状、柱状或板状矿物顺其长轴定向排列而成的构造。它是岩石在变形、变质作用过程中，矿物在引张方向上重结晶生长定向排列的结果。
                  </p>
                </div>

                <div class="type" style="border-left-color: #9b59b6">
                  <h4>皱纹线理</h4>
                  <p>
                    指由面理小褶皱的枢纽平行排列而成的线状构造。多与折劈理的发育有关。某些面理上的X型极细微的皱纹线理，是x型微剪节理与面理交切的结果。
                  </p>
                </div>

                <div class="type" style="border-left-color: #16a085">
                  <h4>交面线理</h4>
                  <p>
                    是两组面理相交或面理与层理相交形成的线理，常平行于同期褶皱的枢纽方向。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- 褶皱内容 -->
      <div v-if="activeTab === 'folds'" class="folds-content">
        <section class="section">
          <div class="section-header" @click="toggleSection('folds')">
            <h2>褶皱构造</h2>
            <span class="toggle-icon">{{
              expandedSections.folds ? "−" : "+"
            }}</span>
          </div>
          <div v-if="expandedSections.folds" class="section-content">
            <p class="geo-text">
              作为地壳中最基本的构造型式和最引人注目的地质现象。褶皱是由岩石中的各种面的弯曲而显示的变形。褶皱的形态千奇百怪、复杂多样，其规模小可至显微镜下的微型褶皱，大可至卫星图上的区域性褶皱。
            </p>

            <div class="fold-types-card" style="border-left-color: #8e44ad">
              <h3>背斜和向斜</h3>
              <p>
                根据形态特征和组成褶皱的地层面向，褶皱可被分为两种基本类型：背斜（anticline）和向斜（syncline）。
              </p>

              <div class="fold-types">
                <div class="type" style="border-left-color: #e74c3c">
                  <h4>背斜</h4>
                  <p>
                    外形上多为向上突出的弯曲，岩层自中心向外倾斜，核部是老岩层，两翼是新岩层。背斜顶部受张力作用，岩性脆弱，易被侵蚀，在外力作用下形成谷。
                  </p>
                </div>

                <div class="type" style="border-left-color: #3498db">
                  <h4>向斜</h4>
                  <p>
                    岩层则一般为向下突出的弯曲，岩层愈往中央，愈年轻。原始形态使向斜可成为谷地，但由于向斜槽部受挤压，物质坚实难被侵蚀，整体经长期侵蚀后反而可能成为山岭。
                  </p>
                </div>
              </div>

              <div class="fold-diagram"></div>
            </div>

            <div
              class="fold-mechanisms-card"
              style="border-left-color: #16a085"
            >
              <h3>褶皱形成机制</h3>
              <p>
                褶皱的形成机制与其受力方式、变形环境及岩层的变形行为密切相关。不同的形成机制在不同的条件下起作用，常见的有：纵弯褶皱作用、横弯褶皱作用、剪切褶皱作用、柔流褶皱作用。
              </p>

              <div class="mechanism-diagram"></div>
            </div>
          </div>
        </section>
      </div>

      <!-- 伸展构造内容 -->
      <div v-if="activeTab === 'extension'" class="extension-content">
        <section class="section">
          <div class="section-header" @click="toggleSection('extensionTypes')">
            <h2>伸展构造型式</h2>
            <span class="toggle-icon">{{
              expandedSections.extensionTypes ? "−" : "+"
            }}</span>
          </div>
          <div v-if="expandedSections.extensionTypes" class="section-content">
            <p class="geo-text">
              伸展构造作为全球构造中最为醒目的构造类型之一，是在岩石圈拉伸及薄化作用下形成的特殊构造组合系统。
            </p>
            <p class="geo-text">
              重力及重力不稳定性是形成伸展构造的驱动机制之一，伸展作用可导致形成不同规模和样式的重力滑动及伸展坍陷构造。
            </p>

            <div class="geo-definition-card" style="border-left-color: #8e44ad">
              <h3>伸展构造型式</h3>
              <p>
                在大陆伸展地区，伸展构造主要表现为正向滑动为主的断层、剪切带和拆离带组合型式，发育在不同的层次、尺度、区域构造背景和构造演化阶段。包括了以下几个构造型式：<span
                  class="geo-term"
                  >地堑</span
                >和<span class="geo-term">地垒</span>、<span class="geo-term"
                  >断陷盆地</span
                >、<span class="geo-term">裂谷</span>、<span class="geo-term"
                  >变质核杂岩</span
                >、<span class="geo-term">岩墙群</span>。
              </p>

              <div class="geo-example">
                <div class="geo-example-title">地堑（graben）</div>
                <p>
                  是地壳上广泛发育的一种地质构造，为两侧被高角度断层围限，中间下降的槽形断块构造。
                </p>
              </div>

              <p>
                仅在一侧为断层所限的断陷，称为<span class="geo-term"
                  >半地堑</span
                >或<span class="geo-term">箕状构造</span
                >。大规模地堑发育的地方，预示着地壳拉伸变薄。
              </p>
              <p>
                地堑常成长条形的断陷盆地，<span class="geo-term"
                  >东非大裂谷</span
                >、我国东部新生代盆地都是典型地堑构造系。
              </p>

              <div class="geo-example">
                <div class="geo-example-title">地垒（horst</div>
                <p>
                  <span class="geo-term">地垒（horst）</span
                  >与地堑恰好相反，由两组走向平行反向倾斜的正断层构成。在简单情况下，由两条正断层组成的地垒，中间共同的下盘上升，两侧的断层上盘下降。
                </p>
              </div>

              <p>
                通常情况下，地堑和地垒相伴发育，正断层多呈阶梯状，形成<span
                  class="geo-term"
                  >盆岭构造</span
                >（以美国盆岭区为原型命名的大型伸展构造）。
              </p>

              <p>
                盆岭构造是指在伸展变形区域，由掀斜构造、阶梯状正断层、地堑、地垒等共同产出，形成由不对称的纵列单面山、山岭及其间的盆地组合而成的构造一地貌单元。
              </p>

              <div class="geo-example">
                <div class="geo-example-title">断陷盆地</div>
                <p>
                  在伸展背景条件下受基底及盆缘正断层控制发育的沉积盆地，称为断陷盆地。如我国东部的<span
                    class="geo-term"
                    >华北盆地</span
                  >、<span class="geo-term">松辽盆地</span>和<span
                    class="geo-term"
                    >江汉盆地</span
                  >等。
                </p>
              </div>

              <p>
                如果断陷盆地一侧断层发育，形成一侧由主干弧形或铲形正断层控制的不对称盆地，则称为<span
                  class="geo-term"
                  >箕状断陷</span
                >或<span class="geo-term">半地堑盆地</span
                >。一般情况下，断陷盆地规模越大，盆缘及盆内构造越复杂。
              </p>

              <div class="geo-example">
                <div class="geo-example-title">裂谷</div>
                <p>
                  是区域性伸展隆起背景上形成的巨大窄长断陷，切割深，发育演化期长，常具有地堑型式。按照裂谷发育的区域构造部位及其地质构造特征，可分为以下三类：<span
                    class="geo-term"
                    >大洋裂谷</span
                  >、<span class="geo-term">大陆裂谷</span>、<span
                    class="geo-term"
                    >陆间裂谷</span
                  >。
                </p>
              </div>
              <p>
                <span class="geo-term">裂谷</span
                >是区域性伸展隆起背景上形成的巨大窄长断陷，切割深，发育演化期长，常具有地堑型式。按照裂谷发育的区域构造部位及其地质构造特征，可分为以下三类：<span
                  class="geo-term"
                  >大洋裂谷</span
                >、<span class="geo-term">大陆裂谷</span>、<span
                  class="geo-term"
                  >陆间裂谷</span
                >。
              </p>

              <p>
                <span class="geo-term">大西洋中央海岭</span
                >上的裂谷是大洋裂谷的典型，<span class="geo-term">东非裂谷</span
                >是大陆裂谷的典型，<span class="geo-term">红海裂谷</span
                >是陆间裂谷的典型。
              </p>

              <p>
                裂谷在板块构造学中是大陆崩裂、大洋开启的初始阶段，是洋盆的雏形，但并非都会演化发展成为大洋。当裂谷中止伸展开裂，停止发育，裂谷坳陷就可能被各类岩石所充填而失去构造形态特征。
              </p>

              <div class="geo-example">
                <div class="geo-example-title">变质核杂岩</div>
                <p>
                  是由从深部抽拉抬升的强烈变质变形基底(下盘)和变质变形较弱的盖层（上盘）组成，外形近圆形或椭圆形，半径可达般万余米，呈分散孤立的穹隆状产出。
                </p>
              </div>

              <p>
                基底与盖层以规模巨大的低角度正断拆离断层分隔。拆离断层原始产状近水平，在伸展拆离中变成犁式。其上盘以发育多米诺式断层为特征，亦有次级顺层断层，并使地层拆离减薄和缺失。
              </p>

              <div class="geo-example">
                <div class="geo-example-title">岩墙</div>
                <p>
                  是横切围岩构造的板状侵入岩体，常成群出现，呈平行或放射状排列，是一种伸展构造的重要样式。
                </p>
              </div>

              <p>
                在全球各大克拉通内广泛发育前寒武纪岩墙群，主要以晚前寒武纪基性岩墙群为主。与超大陆裂解事件相关的基性岩墙群一般宽数十米至数百米，长数十公里至数百公里，甚至上千公里。
              </p>
            </div>
          </div>
        </section>

        <section class="section">
          <div
            class="section-header"
            @click="toggleSection('extensionDevelopment')"
          >
            <h2>发育规律及动力学过程</h2>
            <span class="toggle-icon">{{
              expandedSections.extensionDevelopment ? "−" : "+"
            }}</span>
          </div>
          <div
            v-if="expandedSections.extensionDevelopment"
            class="section-content"
          >
            <p class="geo-intro-text">
              一些几何学的、运动学的及动力学的模式可以来解释不同构造层次上伸展构造的发育规律及动力学过程。
            </p>

            <div class="definition-card" style="border-left-color: #9b59b6">
              <h3 class="geo-concept-title">发育规律</h3>

              <div class="geo-paragraph-group">
                <p class="geo-paragraph">
                  <span class="geo-scientist">B. Wernicke</span>和<span
                    class="geo-scientist"
                    >B. C. Burchfiel</span
                  >等人根据断层面几何形态及断块沿断层面位移特点，将正断层划分为两种类型，即<span
                    class="geo-term"
                    >非旋转(高角度)的</span
                  >和<span class="geo-term">旋转的</span>。
                </p>
                <p class="geo-paragraph">
                  其中旋转一类中又分出仅岩层旋转的<span class="geo-term"
                    >铲状断层</span
                  >及断层和岩层均旋转的<span class="geo-term">平面断层</span
                  >或<span class="geo-term">铲状断层</span
                  >，并分别讨论了计算它们伸展量的方法。
                </p>
                <p class="geo-paragraph">
                  <span class="geo-scientist">B. Wernicke</span
                  >等的正断层分类适合于地壳浅层次及伸展盆地内断层的观察和解释。当然，它们的组合型式也可能反映了深部更大规模的伸展构造。
                </p>
              </div>

              <div class="geo-paragraph-group">
                <p class="geo-paragraph">
                  <span class="geo-scientist">利斯特等(G. S. Lister, 1986)</span
                  >依据形成断层组合应力状态，总结了大陆伸展构造的如下三种模式，而不同模式形成的伸展构造型式也有明显差异。三种模式分别为：<span
                    class="geo-term"
                    >纯剪模式</span
                  >、<span class="geo-term">单剪模式</span>、<span
                    class="geo-term"
                    >分层剪切</span
                  >或<span class="geo-term">滑动剪切</span>。
                </p>
                <p class="geo-paragraph">
                  不同构造层次的伸展构造所表现的几何型式和和应力状态是不一致的，除此之外，不同构造层次的物质组成、相转换、流变状态及物理化学环境也不相同，因此在分析伸展构造建立模型，应当从组成及变形两个方面全面考虑。
                </p>
              </div>

              <div class="geo-paragraph-group">
                <p class="geo-paragraph">
                  <span class="geo-scientist">马杏垣(1982)</span>参考<span
                    class="geo-scientist"
                    >G. P. Eaton</span
                  >对北美大盆地地壳剖面解释，提出一个伸展大陆壳结构模型，具有代表性。
                </p>
                <p class="geo-paragraph">
                  从图中可以看出，地壳浅层次以各种<span class="geo-term"
                    >正断层</span
                  >及<span class="geo-term">低缓角度拆离带</span
                  >组合为主，中层次以<span class="geo-term">塑性变形</span
                  >为主，表现为<span class="geo-term">塑性伸展流动</span
                  >，出现<span class="geo-term">糜棱岩带</span>和<span
                    class="geo-term"
                    >网结状韧性剪切带</span
                  >，地壳深部除塑性伸展流动变形外，尚发育大量<span
                    class="geo-term"
                    >基性岩墙(床)群</span
                  >。
                </p>
              </div>

              <div class="geo-paragraph-group">
                <p class="geo-paragraph">
                  <span class="geo-scientist">Vink</span
                  >等人早已指出，大陆壳发育<span class="geo-term">裂谷作用</span
                  >要比在洋壳上容易得多，这是因为大陆岩石圈比大洋岩石圈强度小。大量的实践证明，大陆裂谷一般产生在古老的<span
                    class="geo-term"
                    >逆冲构造带</span
                  >，<span class="geo-term">变质核杂岩</span>大多发育于<span
                    class="geo-term"
                    >造山带</span
                  >，是<span class="geo-term">造山期后伸展作用</span>的结果。
                </p>
              </div>

              <div class="geo-paragraph-group highlight">
                <p class="geo-paragraph">
                  <span class="geo-scientist">G. Ranalli</span
                  >认为，增厚的岩石圈<span class="geo-term">拆沉作用</span
                  >是造山带构造演化的一个重要动力学过程，可以导致由<span
                    class="geo-term"
                    >挤压体制</span
                  >向<span class="geo-term">伸展体制</span>的反转。
                </p>
                <p class="geo-paragraph">
                  <span class="geo-term">拆沉作用</span
                  >的基本涵义是：大陆岩石圈地幔由于较软流圈温度低、密度较大，从而产生<span
                    class="geo-term"
                    >重力不稳</span
                  >，如有合适的断裂，岩石圈地慢将沉陷入软流圈中，并使岩石圈减薄。
                </p>
                <p class="geo-paragraph">
                  理论计算证明，岩石圈根带的<span class="geo-term"
                    >拆沉作用(delamination)</span
                  >，可产生水平方向的<span class="geo-term"
                    >差异张应力50~100MPa</span
                  >，足以驱动大规模伸展构造的发育。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="section">
          <div
            class="section-header"
            @click="toggleSection('extensionReversal')"
          >
            <h2>构造反转</h2>
            <span class="toggle-icon">{{
              expandedSections.extensionReversal ? "−" : "+"
            }}</span>
          </div>
          <div
            v-if="expandedSections.extensionReversal"
            class="section-content"
          >
            <div class="definition-card" style="border-left-color: #3498db">
              <h3>构造反转</h3>
              <p>近年来，构造反转受到地质学家广泛关注。</p>
              <p>
                狭义上的构造反转多限于盆地内部，是指早期一个张性或张扭性盆地后期转变为压性或压扭性构造盆地(正反转构造)，盆地由伸展沉降转为挤压上隆，正断层转变为逆断层。
              </p>
              <p>
                或盆地内先存的挤压系统部分转变为伸展系统(负反转构造)。这种构造反转虽然构造体制上发生重大转化，但变形不一定强烈，因此在不同层次上某些构造仍保持反转前的部分特征。
              </p>
              <p>
                挤压作用与伸展作用是紧密相关的，在区域尺度上，伸展构造最发育的部位，可能也是先期挤压缩短作用最为强烈、地壳甚至岩石圈厚度最大的地区。
              </p>
              <p>
                伸展构造与整个岩石圈（lithosphere）的组成、结构、强度和热状态等相关。因此在研究伸展构造变形时，应从不同构造层次的物理状况及岩石圈流变学观点进行分析应。伸展和挤压两种作用及其形成的两类构造各具特色。它们在一定区域构造演化中相互交替和重叠，往往引起构造的叠加和穿插。
              </p>
            </div>
          </div>
        </section>
      </div>

      <!-- 剪切带内容 -->
      <div v-if="activeTab === 'shear'" class="shear-content">
        <section class="section">
          <div class="section-header" @click="toggleSection('shearTypes')">
            <h2>剪切带类型</h2>
            <span class="toggle-icon">{{
              expandedSections.shearTypes ? "−" : "+"
            }}</span>
          </div>
          <div v-if="expandedSections.shearTypes" class="section-content">
            <p class="geo-text">
              剪切带是地壳和岩石圈中广泛发育的主要构造类型之一，可以在不同层次、不同环境下发育。
            </p>
            <p class="geo-text">
              其尺度范围包括从超显微的晶格位错到造山带或变质基底内几十公里宽和上千公里长的韧性剪切带。
            </p>
            <p class="geo-text">
              对于剪切带的研究在整个岩石圈构造及全球构造动力学方面具有重要意义。
            </p>

            <div class="fold-types-card" style="border-left-color: #e74c3c">
              <h3>剪切带类型</h3>
              <div class="fold-types">
                <div class="type" style="border-left-color: #e74c3c">
                  <h4>脆性剪切带</h4>
                  <p>
                    在地壳上部的低温及高孔隙压力与静岩压力比条件下发生的脆性变形的产物。其特点是具有一个或多个清楚的不连续界面，两盘位移明显，变形集中在个别不连续面上，伴生有各种碎裂岩系列的断层岩。
                  </p>
                </div>
                <div class="type" style="border-left-color: #f39c12">
                  <h4>脆-韧性剪切带</h4>
                  <p>
                    有多种类型，主要型式有两种：一种为似断层牵引现象的脆-韧性剪切带；另一种为韧-脆性剪切带由张裂脉的雁行状阵列表现出来。
                  </p>
                </div>
                <div class="type" style="border-left-color: #3498db">
                  <h4>韧性剪切带</h4>
                  <p>
                    岩石在塑性状态下发生连续变形的狭窄高剪切应变带。典型韧性剪切带内变形状态从一壁穿过剪切带到另一壁是连续的，无破裂或不连续面。带内变形和两盘的位移完全由岩石的塑性流动或晶内变形来完成。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section">
          <div class="section-header" @click="toggleSection('ductileShear')">
            <h2>韧性剪切带</h2>
            <span class="toggle-icon">{{
              expandedSections.ductileShear ? "−" : "+"
            }}</span>
          </div>
          <div v-if="expandedSections.ductileShear" class="section-content">
            <div class="definition-card" style="border-left-color: #3498db">
              <h3>韧性剪切带</h3>
              <p>
                从力学角度来看，韧性剪切带是地壳和岩石圈中不同尺度的缺陷，是应变软化带和应变局部化带。
              </p>
              <p>
                其变形过程中的应力、应变速率和温度等环境条件之间的关系，受不同的流动律控制，从而形成了特征性的岩石、构造和其他微观变形现象。
              </p>
              <p>
                糜棱岩是颗粒很细呈条带状分布的动力变质岩。岩石中大部分矿物不能用肉眼分辨。
              </p>
              <p>
                由原来粗粒岩石(花岗岩等)受强烈的定向压力破碎成粉末状(断层泥)，再经胶结形成坚硬岩石，矿物成分与原岩无多大变化。
              </p>
              <p>
                糜棱岩中不同矿物常常具有不同的形态和变形特征。石英相对容易发生塑性变形，常呈矩形，或为细小的重结晶颗粒围绕碎斑，构成糜棱岩的典型构造－核幔构造。
              </p>
              <p>
                长石等硬矿物一般颗粒较大，多以残斑出现，常表现为脆性碎裂，也可因位错滑移形成波状消光及机械双晶等现象。
              </p>
              <p>
                在各向异性的地质体内产出的韧性剪切带内,经常出现复杂的褶皱变形。
              </p>
              <p>
                由于剪切带内差异性剪切作用,改变了先存面状构造的方位,导致标志层出现被动褶皱，一般形成相似褶皱。
              </p>
              <p>
                主动纵弯褶皱是先存标志体或面状构造受挤压失稳形成的。褶皱形成的先决条件是：标志体与围岩之间存在能于性差。
              </p>
              <p>
                鞘褶皱是韧性剪切带中一种特殊的A型褶皱（剪切带中大部分褶皱的褶轴与拉伸线理的方向大致平行）。
              </p>
              <p>
                因形似刀鞘故名鞘褶皱。鞘褶皱常成群出现。大小不一，以中、小型为主。鞘褶皱大多呈扁圆状或舌状，或成圆筒状。多数为不对称褶皱
              </p>
              <p>
                韧性剪切带既是强烈的线状应变带，也是线状的变质作用带。伴随着变形作用，剪切带内岩石和矿物中形成一定的应力梯度和化学浓度梯度，为流体及组分的运动提供了驱动力，开辟了通道。
              </p>
              <p>
                流体和组分的运动,导致流体与岩石、矿物之间或岩石、矿物的组分与组分之间的不平衡，从而发生变质反应,使岩石间的差异变小，并使岩石发生软化。
              </p>
              <p>
                剪切带既是流体运移的主要通道，也是流体-岩石发生相互作用的主要场所。在剪切带的变质、变形作用过程中，流体-岩石相互作用主要表现为以下几种：变质作用，钾交代作用，脱硅作用，碳酸盐化作用，长英条带、硅质条带的生成等。
              </p>
            </div>
          </div>
        </section>

        <section class="section">
          <div class="section-header" @click="toggleSection('shearDirection')">
            <h2>剪切运动方向确定</h2>
            <span class="toggle-icon">{{
              expandedSections.shearDirection ? "−" : "+"
            }}</span>
          </div>
          <div v-if="expandedSections.shearDirection" class="section-content">
            <div class="definition-card" style="border-left-color: #16a085">
              <h3>剪切运动方向确定</h3>
              <p>韧性剪切带的剪切运动方向，可根据许多方面来确定:</p>
              <p>
                穿过剪切带的标志层往往呈"S"形弯曲,造成标志层在剪切带两盘明显位移,根据错开的方向可确定剪切方向，但应用这一方法时要注意先存标志层与剪切带之间的方位关系，否则会得出错误的结论。
              </p>
              <p>
                鞘褶皱枢纽的方向或垂直Y轴剖面上的褶皱倒向指示剪切方向。韧性剪切带内常发育两种面理平行于剪切带内的应变椭球的X，Y，面的剪切带内面理(S)，在剪切带内呈"S"型展布。
              </p>
              <p>
                糜棱岩面理(C)实际上是一系列平行于剪切带边界的间隔排列的小型强剪切应变带。
              </p>
              <p>
                常由更细小的颗粒或云母等矿物所组成,"S"型面理和"C"面理所交的锐夹角,指示剪切带的剪切方向。
              </p>
              <p>
                云母鱼构造多发育于石英云母片岩中。其两端发育由细粒的层状硅酸盐类矿物和长石等组成的尾部，代表强剪切应变的微剪切带。与S-C组构一样，其锐夹角指示剪切方向。
              </p>
              <p>
                韧性剪切带内压力影构造呈不对称状，坚硬单体两侧的纤维状的结晶尾呈单斜对称。据此可以确定剪切方向。
              </p>
              <p>
                糜棱岩中的较强硬的碎斑，在递进剪切作用下产生破裂并旋转，使每个碎片向剪切方向倾斜，尤如一叠书被推倒，形成"多米诺骨牌"构造。其裂面与剪切带的锐夹角指示剪切带的剪切指向。
              </p>
              <p>
                糜棱岩中的碎班或矿物集合体、侵入岩体中的捕虏体等，在递进剪切作用下,使其一侧被拉长(或拉断)，形成曲颈瓶状。曲颈弯曲方向表示剪切带的剪切方向。
              </p>
              <p>
                与小型剪切带相比，准确鉴定大型的、结构和变形历史复杂的剪切带的剪切方向更加困难。
              </p>
              <p>
                需要从不同尺度，全面地收集剪切带内和带外变形特征，再进行更多复杂的研究才可能判断大型剪切带复杂的运动。
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* 段落组样式 */
.geo-paragraph-group {
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px dashed #eee;
}

.geo-paragraph-group:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.geo-paragraph-group.highlight {
  background-color: #f8f5ff;
  padding: 15px;
  border-radius: 4px;
  border-left: 3px solid #9b59b6;
}

/* 段落文本样式 */
.geo-paragraph {
  margin-bottom: 12px;
  line-height: 1.7;
  text-align: justify;
}

.geo-paragraph:last-child {
  margin-bottom: 0;
}

/* 专业术语样式 */
.geo-term {
  color: #9b59b6;
  font-weight: 500;
  background-color: rgba(142, 68, 173, 0.1);
  padding: 2px 5px;
  border-radius: 3px;
}

/* 科学家名字样式 */
.geo-scientist {
  font-weight: 600;
  color: #6c3483;
}

/* 概念卡片标题 */
.geo-concept-title {
  color: #2c3e50;
  font-size: 1.4rem;
  margin-top: 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;
}

/* 介绍文本样式 */
.geo-intro-text {
  font-size: 1.05rem;
  color: #444;
  margin-bottom: 20px;
  line-height: 1.7;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .geo-paragraph-group {
    padding-bottom: 10px;
    margin-bottom: 15px;
  }

  .geo-paragraph {
    font-size: 0.95rem;
  }

  .geo-concept-title {
    font-size: 1.2rem;
  }
}

/* 地质卡片基础样式 */
.geo-definition-card {
  border-left: 4px solid #8e44ad;
  background-color: #f8f9fa;
  border-radius: 4px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.geo-definition-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

/* 卡片标题 */
.geo-definition-card h3 {
  color: #2c3e50;
  font-size: 1.5rem;
  margin-top: 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;
  position: relative;
}

.geo-definition-card h3::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100px;
  height: 2px;
  background-color: #8e44ad;
}

/* 段落样式 */
.geo-definition-card p {
  margin-bottom: 15px;
  line-height: 1.7;
  text-align: justify;
  position: relative;
  padding-left: 15px;
}

.geo-definition-card p::before {
  content: "•";
  color: #8e44ad;
  font-weight: bold;
  position: absolute;
  left: 0;
}

/* 专业术语高亮 */
.geo-term {
  color: #8e44ad;
  font-weight: 600;
  background-color: rgba(142, 68, 173, 0.1);
  padding: 2px 5px;
  border-radius: 3px;
}

/* 示例样式 */
.geo-example {
  background-color: #f0f7ff;
  padding: 12px 15px;
  border-left: 3px solid #3498db;
  margin: 15px 0;
  border-radius: 0 4px 4px 0;
}

.geo-example-title {
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 8px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .geo-definition-card {
    padding: 15px;
  }

  .geo-definition-card h3 {
    font-size: 1.3rem;
  }
}

/* 轮播图容器 */
.geo-carousel {
  position: relative;
  max-width: 800px;
  margin: 25px auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid #8d6e63;
  background-color: #f5f2ee;
}

/* 轮播图片样式 */
.geo-carousel-image {
  width: 100%;
  height: 450px;
  object-fit: cover;
  display: block;
  transition: opacity 0.5s ease;
}

/* 图片标题容器 */
.geo-carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(93, 64, 55, 0.9), transparent);
  padding: 20px 15px;
  color: #efebe9;
  text-align: center;
}

/* 图片标题文字 */
.geo-carousel-caption h3 {
  margin: 0 0 5px;
  font-size: 1.3rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.geo-carousel-caption p {
  margin: 0;
  font-size: 0.95rem;
  opacity: 0.9;
}

/* 导航按钮 */
.geo-carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  box-sizing: border-box;
}

.geo-carousel-btn {
  background-color: rgba(141, 110, 99, 0.7);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.geo-carousel-btn:hover {
  background-color: #5d4037;
  transform: scale(1.1);
}

/* 指示器 */
.geo-carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 10px 0;
}

.geo-carousel-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(239, 235, 233, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.geo-carousel-indicator.active {
  background-color: #efebe9;
  transform: scale(1.2);
}

/* 响应式设计 */
@media (max-width: 900px) {
  .geo-carousel {
    max-width: 90%;
  }

  .geo-carousel-image {
    height: 380px;
  }
}

@media (max-width: 600px) {
  .geo-carousel-image {
    height: 300px;
  }

  .geo-carousel-caption {
    padding: 15px 10px;
  }

  .geo-carousel-caption h3 {
    font-size: 1.1rem;
  }

  .geo-carousel-btn {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
}

@media (max-width: 400px) {
  .geo-carousel-image {
    height: 250px;
  }

  .geo-carousel-indicators {
    bottom: 5px;
  }
}

/* 图片容器基础样式 */
.geo-image-container {
  position: relative;
  margin: 20px auto;
  max-width: 100%;
  text-align: center;
  background-color: #f8f5f2;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #d7ccc8;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
}

/* 图片基础样式 */
.geo-image {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: 4px;
  transition: all 0.4s ease;
  transform-origin: center center;
  filter: grayscale(10%) contrast(105%);
  border: 1px solid #e0d7d3;
}

/* 图片标题样式 */
.geo-image-caption {
  font-size: 0.92rem;
  color: #5d4037;
  text-align: center;
  margin-top: 12px;
  font-style: italic;
  line-height: 1.5;
  transition: all 0.3s ease;
  opacity: 0.9;
}

/* 图片尺寸分级控制 */
.geo-image-small {
  max-width: 50%;
}

.geo-image-medium {
  max-width: 60%;
}

.geo-image-large {
  max-width: 70%;
}

/* 图片组布局 */
.geo-image-group {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin: 30px 0;
}

.geo-image-group .geo-image-container {
  margin: 0;
}

/* 卡片内图片特殊样式 */
.definition-card .geo-image-container {
  margin: 15px -10px 20px;
  padding: 10px;
  background-color: #f5f2ee;
}

/* 交互效果 */
.geo-image-container:hover {
  box-shadow: 0 8px 20px rgba(93, 64, 55, 0.15);
  border-color: #8d6e63;
  transform: translateY(-3px);
  background-color: #f9f7f4;
}

.geo-image-container:hover .geo-image {
  transform: scale(1.02);
  filter: grayscale(0%) contrast(110%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.geo-image-container:hover .geo-image-caption {
  color: #3e2723;
  transform: translateY(2px);
}

/* 响应式设计 */
@media (max-width: 900px) {
  .geo-image-container {
    padding: 10px;
  }

  .geo-image-small {
    max-width: 65%;
  }

  .geo-image-medium {
    max-width: 85%;
  }

  .geo-image-group {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

@media (max-width: 600px) {
  .geo-image-small {
    max-width: 75%;
  }

  .geo-image-medium {
    max-width: 95%;
  }

  .geo-image-caption {
    font-size: 0.85rem;
  }

  .geo-image-container:hover {
    transform: none;
  }
}

.foliation-diagram,
.lineation-diagram,
.fold-diagram,
.mechanism-diagram {
  height: 150px;
  margin-top: 15px;
  background-color: #efebe9;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  border: 1px solid #d7ccc8;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
}

.foliation-diagram::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60'%3E%3Cpath d='M10,10 L90,10 M10,20 L90,20 M10,30 L90,30 M10,40 L90,40 M10,50 L90,50' stroke='%238e44ad' stroke-width='1'/%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.8;
}

.lineation-diagram::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60'%3E%3Cpath d='M20,30 L80,30' stroke='%23e67e22' stroke-width='2'/%3E%3Cpath d='M30,20 L70,40' stroke='%23e67e22' stroke-width='1'/%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.8;
}

.fold-diagram::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60'%3E%3Cpath d='M10,40 Q30,10 50,40 Q70,70 90,40' stroke='%238e44ad' stroke-width='2' fill='none'/%3E%3Cpath d='M10,45 Q30,15 50,45 Q70,75 90,45' stroke='%238e44ad' stroke-width='2' fill='none'/%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.8;
}

.mechanism-diagram::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60'%3E%3Cpath d='M10,30 L90,30' stroke='%2316a085' stroke-width='1'/%3E%3Cpath d='M50,10 L50,50' stroke='%2316a085' stroke-width='1'/%3E%3Cpath d='M30,20 L70,40' stroke='%2316a085' stroke-width='1'/%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.8;
}

.classification-card,
.mechanism-card,
.fold-types-card,
.fold-mechanisms-card {
  background-color: #fffefb;
  border-left: 4px solid;
  padding: 18px;
  margin-bottom: 20px;
  border-radius: 0 4px 4px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(
    to bottom,
    transparent 95%,
    rgba(141, 110, 99, 0.05) 100%
  );
}

.lineation-types,
.fold-types {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.type {
  padding: 12px;
  background-color: rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  border-left: 4px solid;
}

/* 基础样式 */
.geology-observation-system {
  font-family: "Georgia", "Times New Roman", serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  color: #4e342e;
  background-color: #f5f5f0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(
      rgba(189, 169, 156, 0.1) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(189, 169, 156, 0.1) 1px, transparent 1px);
  background-size: 30px 30px;
}

/* 地质背景层 */
.geology-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.15;
  pointer-events: none;
}

.strata-layer-1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(
    45deg,
    rgba(210, 180, 140, 0.3) 0%,
    transparent 50%,
    rgba(210, 180, 140, 0.3) 100%
  );
  transform: skewY(-5deg);
}

.strata-layer-2 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(
    -45deg,
    rgba(184, 134, 11, 0.3) 0%,
    transparent 50%,
    rgba(184, 134, 11, 0.3) 100%
  );
  transform: skewY(5deg);
}

.fault-line {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background: repeating-linear-gradient(
    to right,
    #c0392b,
    #c0392b 10px,
    transparent 10px,
    transparent 20px
  );
  transform: rotate(-10deg);
}

.joint-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      to right,
      rgba(62, 39, 35, 0.05) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(62, 39, 35, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* 页眉样式 */
.header {
  text-align: center;
  margin-bottom: 30px;
  padding: 25px;
  background: linear-gradient(135deg, #5d4037 0%, #8d6e63 100%);
  color: #efebe9;
  border-radius: 8px;
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-bottom: 4px solid #3e2723;
  border-top: 1px solid #a1887f;
}

.header h1 {
  margin: 0;
  font-size: 2.4rem;
  font-weight: 700;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
}

.subtitle {
  margin: 10px 0 0;
  font-size: 1.2rem;
  font-style: italic;
  opacity: 0.9;
  color: #d7ccc8;
}

.compass-icon {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 2rem;
  opacity: 0.8;
  transform: rotate(15deg);
}

/* 选项卡样式 */
.tabs {
  display: flex;
  margin-bottom: 20px;
  border-bottom: 2px solid #8d6e63;
  position: relative;
  z-index: 1;
}

.tabs::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, #a1887f, transparent);
}

.tabs button {
  padding: 12px 24px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  color: #5d4037;
  transition: all 0.3s ease;
  border-bottom: 3px solid transparent;
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
}

.tabs button:hover {
  color: #3e2723;
  background-color: rgba(141, 110, 99, 0.1);
}

.tabs button.active {
  color: #3e2723;
  border-bottom: 3px solid #5d4037;
  background-color: rgba(141, 110, 99, 0.2);
}

.tabs button .icon {
  font-size: 1.2rem;
}

/* 内容区域 */
.content {
  flex: 1;
  position: relative;
  z-index: 1;
}

/* 章节样式 */
.section {
  margin-bottom: 30px;
  background-color: #fffefb;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(93, 64, 55, 0.1);
  border: 1px solid #d7ccc8;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  transform-style: preserve-3d;
  perspective: 1000px;
}

.section:hover {
  box-shadow: 0 12px 24px rgba(93, 64, 55, 0.15);
  transform: translateY(-3px) rotateX(1deg);
}

.section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #8d6e63, #5d4037);
}

.section-header {
  padding: 18px 25px;
  background: linear-gradient(145deg, #8d6e63, #6d4c41);
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.section-header::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0) 60%
  );
  transform: rotate(30deg);
}

.section-header:hover {
  background: linear-gradient(to right, #7b5d57, #4e342e);
}

.section-header h2 {
  margin: 0;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  position: relative;
}

.section-icon {
  font-size: 1.2rem;
}

.toggle-icon {
  font-weight: bold;
  font-size: 1.3rem;
  background-color: rgba(255, 255, 255, 0.2);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  position: relative;
  z-index: 2;
}

.section-header:hover .toggle-icon {
  transform: scale(1.1) rotate(90deg);
  background-color: rgba(255, 255, 255, 0.3);
}

.section-content {
  padding: 25px;
  background-color: #fffefb;
  background-image: linear-gradient(
      to bottom,
      transparent 95%,
      rgba(141, 110, 99, 0.03) 100%
    ),
    radial-gradient(
      circle at 10% 20%,
      rgba(141, 110, 99, 0.02) 0%,
      transparent 20%
    );
}

/* 文本样式 */
.geo-text {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
  color: #4e342e;
  text-align: justify;
  hyphens: auto;
  position: relative;
  padding-left: 15px;
}

.geo-text::before {
  content: "•";
  color: #8d6e63;
  font-weight: bold;
  position: absolute;
  left: 0;
}

/* 卡片样式 */
.definition-card,
.type-card,
.feature,
.structure,
.category {
  background-color: #fffefb;
  border-left: 4px solid;
  padding: 18px;
  margin-bottom: 20px;
  border-radius: 0 4px 4px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(
    to bottom,
    transparent 95%,
    rgba(141, 110, 99, 0.05) 100%
  );
}

.definition-card::after,
.type-card::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.03);
  transform: translate(20px, -20px) rotate(45deg);
}

.definition-card h3,
.type-card h3,
.feature h3,
.structure h4,
.category h3 {
  margin-top: 0;
  color: #3e2723;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
}

.card-icon,
.type-icon,
.feature-icon,
.structure-icon,
.category-icon {
  font-size: 1.2rem;
}

/* 图表样式 */
.fault-diagram,
.fold-diagram,
.striation-diagram,
.joint-diagram,
.slip-diagram,
.basin-diagram,
.flower-diagram,
.joint-type-diagram,
.stage-diagram,
.en-echelon-diagram,
.plumose-diagram,
.stylolite-diagram {
  height: 120px;
  margin-top: 15px;
  background-color: #efebe9;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  border: 1px solid #d7ccc8;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
}

/* 图表SVG定义 */
.fault-diagram::before,
.fold-diagram::before,
.striation-diagram::before,
.joint-diagram::before,
.slip-diagram::before,
.basin-diagram::before,
.flower-diagram::before,
.joint-type-diagram::before,
.stage-diagram::before,
.en-echelon-diagram::before,
.plumose-diagram::before,
.stylolite-diagram::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.8;
}

.fold-diagram::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60'%3E%3Cpath d='M10,30 Q30,10 50,30 Q70,50 90,30' stroke='%23c0392b' stroke-width='2' fill='none'/%3E%3Cpath d='M30,30 L30,20 M70,30 L70,40' stroke='%233e2723' stroke-width='1'/%3E%3C/svg%3E");
}

.striation-diagram::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60'%3E%3Crect x='20' y='10' width='60' height='40' fill='%23efebe9' stroke='%233e2723'/%3E%3Cpath d='M25,20 L75,20 M30,25 L70,25 M35,30 L65,30 M40,35 L60,35' stroke='%23c0392b' stroke-width='1'/%3E%3Cpath d='M50,15 L50,35' stroke='%233e2723' stroke-width='1'/%3E%3C/svg%3E");
}

.joint-diagram::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60'%3E%3Cpath d='M50,10 L50,50' stroke='%23c0392b' stroke-width='2'/%3E%3Cpath d='M30,20 L70,40 M40,15 L60,45' stroke='%2316a085' stroke-width='1' stroke-dasharray='3,2'/%3E%3C/svg%3E");
}

.slip-diagram::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60'%3E%3Cpath d='M50,10 L50,50' stroke='%233498db' stroke-width='2'/%3E%3Cpath d='M40,20 L60,20 M45,30 L55,30 M40,40 L60,40' stroke='%233e2723' stroke-width='1'/%3E%3C/svg%3E");
}

.left-slip::before {
  transform: rotate(180deg);
}

.basin-diagram::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60'%3E%3Cpath d='M30,20 L70,20 M30,40 L70,40 M30,20 L20,30 M70,20 L80,30 M30,40 L20,30 M70,40 L80,30' stroke='%23c0392b' stroke-width='2'/%3E%3Cpath d='M20,30 L80,30' stroke='%23e74c3c' stroke-width='1' stroke-dasharray='3,2'/%3E%3C/svg%3E");
}

.flower-diagram::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60'%3E%3Cpath d='M50,50 L50,30' stroke='%239b59b6' stroke-width='2'/%3E%3Cpath d='M50,30 L30,20 M50,30 L70,20 M50,30 L40,10 M50,30 L60,10' stroke='%239b59b6' stroke-width='1.5'/%3E%3C/svg%3E");
}

.joint-type-diagram::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60'%3E%3Crect x='20' y='10' width='60' height='40' fill='%23efebe9' stroke='%233e2723'/%3E%3C/svg%3E");
}

.shear-joint::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60'%3E%3Crect x='20' y='10' width='60' height='40' fill='%23efebe9' stroke='%233e2723'/%3E%3Cpath d='M25,15 L75,45 M35,15 L65,45 M45,15 L55,45' stroke='%23e67e22' stroke-width='1'/%3E%3C/svg%3E");
}

.tension-joint::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60'%3E%3Crect x='20' y='10' width='60' height='40' fill='%23efebe9' stroke='%233e2723'/%3E%3Cpath d='M30,15 L30,45 M45,15 L45,45 M60,15 L60,45' stroke='%23d35400' stroke-width='1'/%3E%3C/svg%3E");
}

.stage-diagram::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60'%3E%3Cpath d='M20,20 L80,20 M20,40 L80,40' stroke='%2316a085' stroke-width='2'/%3E%3Cpath d='M30,15 L50,25 M50,25 L70,35' stroke='%23c0392b' stroke-width='1'/%3E%3C/svg%3E");
}

.en-echelon-diagram::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60'%3E%3Cpath d='M20,20 L40,30 M35,25 L55,35 M50,30 L70,40' stroke='%2327ae60' stroke-width='1.5'/%3E%3C/svg%3E");
}

.plumose-diagram::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60'%3E%3Cpath d='M50,10 L50,40' stroke='%23e67e22' stroke-width='1'/%3E%3Cpath d='M50,20 L40,15 M50,20 L60,15 M50,30 L45,25 M50,30 L55,25' stroke='%23e67e22' stroke-width='0.8'/%3E%3C/svg%3E");
}

.stylolite-diagram::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60'%3E%3Cpath d='M20,30 Q40,25 60,30 Q80,35 100,30' stroke='%23d35400' stroke-width='1' fill='none'/%3E%3C/svg%3E");
}

/* 网格布局 */
.classification-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
}

.movement-features,
.development-features {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
}

.subtypes {
  margin-top: 10px;
  padding-left: 15px;
  border-left: 2px solid #95a5a6;
}

.subtype {
  margin-bottom: 8px;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}

.subtype h4 {
  margin: 8px 0 4px;
  font-size: 0.95rem;
  color: #34495e;
}

.strike-slip-types {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
}

.special-structures {
  margin-top: 20px;
}

.joint-classification {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
}

.category {
  background-color: #fffefb;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #d7ccc8;
}

.types-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 10px;
  margin-top: 10px;
}

/* 页脚样式 */
.footer {
  text-align: center;
  padding: 20px;
  margin-top: 30px;
  color: #7f8c8d;
  font-size: 0.9rem;
  position: relative;
  z-index: 1;
  border-top: 1px solid #d7ccc8;
}

.rock-sample {
  font-size: 1.5rem;
  margin-top: 10px;
  animation: rock-shake 5s infinite;
}

@keyframes rock-shake {
  0%,
  100% {
    transform: rotate(0deg);
  }
  2% {
    transform: rotate(5deg);
  }
  4% {
    transform: rotate(-5deg);
  }
  6% {
    transform: rotate(2deg);
  }
  8% {
    transform: rotate(-2deg);
  }
  10% {
    transform: rotate(0deg);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .classification-grid,
  .movement-features,
  .development-features,
  .strike-slip-types {
    grid-template-columns: 1fr;
  }

  .joint-classification {
    grid-template-columns: 1fr;
  }

  .tabs {
    justify-content: center;
  }

  .header h1 {
    font-size: 1.8rem;
  }

  .section-header h2 {
    font-size: 1.2rem;
  }

  .definition-card h3,
  .type-card h3,
  .feature h3 {
    font-size: 1.1rem;
  }

  .fault-diagram,
  .fold-diagram,
  .striation-diagram,
  .joint-diagram,
  .slip-diagram,
  .basin-diagram,
  .flower-diagram,
  .joint-type-diagram,
  .stage-diagram,
  .en-echelon-diagram,
  .plumose-diagram,
  .stylolite-diagram {
    height: 100px;
  }
}

@media (max-width: 480px) {
  .header {
    padding: 15px;
  }

  .header h1 {
    font-size: 1.5rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .tabs button {
    padding: 8px 12px;
    font-size: 1rem;
  }

  .section-header {
    padding: 12px 15px;
  }

  .section-content {
    padding: 15px;
  }

  .geo-text {
    font-size: 1rem;
  }
}
</style>
