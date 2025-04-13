<script setup>
import { ref } from "vue";

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
});

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
        :class="{ active: activeTab === 'foliation' }"
        @click="activeTab = 'foliation'"
      >
        劈理构造
      </button>
      <button
        :class="{ active: activeTab === 'lineation' }"
        @click="activeTab = 'lineation'"
      >
        线理构造
      </button>
      <button
        :class="{ active: activeTab === 'folds' }"
        @click="activeTab = 'folds'"
      >
        褶皱构造
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
              <div class="fault-diagram"></div>
            </div>

            <div class="definition-card" style="border-left-color: #9b59b6">
              <h3>断层带</h3>
              <p>
                大型断层多是由一系列破裂面或次级断层组成的带，即断层(裂)带。断裂带内还夹杂有搓碎岩块、岩片及各种断层岩。断层规模越大，断裂带也越宽越复杂。
              </p>
            </div>

            <div class="definition-card" style="border-left-color: #3498db">
              <h3>断层线</h3>
              <p>
                断层线是断层面与地面的交线，即断层在地面的出露线。其形态决定于断层面弯曲程度、断层面产状及地面起伏。断层面倾角越缓地形起伏越大，断层线形态越复杂。
              </p>
              <div class="fault-line-diagram"></div>
            </div>

            <div class="definition-card" style="border-left-color: #e74c3c">
              <h3>断盘</h3>
              <p>
                断盘是断层面两侧沿断层面发生位移的岩块。位于倾斜断层面上侧的一盘为上盘，位于断层面下侧的一盘为下盘。根据两盘相对滑动，相对上滑的称为上升盘，相对下滑的称为下降盘。
              </p>
              <div class="fault-block-diagram"></div>
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
                <div class="fold-diagram"></div>
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

      <!-- 劈理内容 -->
      <div v-if="activeTab === 'foliation'" class="foliation-content">
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
      </div>

      <!-- 线理内容 -->
      <div v-if="activeTab === 'lineation'" class="lineation-content">
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
    </main>
  </div>
</template>

<style scoped>
/* 图片容器样式 - 保持原比例缩放 */
.geo-image-container {
  margin: 15px 0;
  text-align: center;
  background-color: #f8f5f2;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #d7ccc8;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

/* 图片样式 - 保持原比例 */
.geo-image {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: 3px;
}

/* 图片标题样式 */
.geo-image-caption {
  font-size: 0.9rem;
  color: #5d4037;
  text-align: center;
  margin-top: 8px;
  font-style: italic;
}

/* 响应式图片组 - 两列布局 */
.geo-image-group {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

/* 在卡片中添加图片的特殊样式 */
.definition-card .geo-image-container,
.type-card .geo-image-container {
  margin: 12px -8px;
  padding: 6px;
  background-color: #f5f2ee;
}

/* 小尺寸图片 (用于文中插图) */
.geo-image-small {
  max-width: 60%;
  margin: 10px auto;
}

/* 中尺寸图片 (用于重点说明) */
.geo-image-medium {
  max-width: 80%;
  margin: 15px auto;
}

/* 大尺寸图片 (用于关键概念) */
.geo-image-large {
  max-width: 90%;
  margin: 20px auto;
}

@media (max-width: 768px) {
  .geo-image-group {
    grid-template-columns: 1fr;
  }
  
  .geo-image-small {
    max-width: 80%;
  }
  
  .geo-image-medium {
    max-width: 90%;
  }
  
  .geo-image-large {
    max-width: 100%;
  }
}

.foliation-diagram, .lineation-diagram, .fold-diagram, .mechanism-diagram {
  height: 150px;
  margin-top: 15px;
  background-color: #efebe9;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  border: 1px solid #d7ccc8;
  box-shadow: inset 0 0 10px rgba(0,0,0,0.05);
}

.foliation-diagram::before {
  content: '';
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
  content: '';
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
  content: '';
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
  content: '';
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

.classification-card, .mechanism-card, .fold-types-card, .fold-mechanisms-card {
  background-color: #fffefb;
  border-left: 4px solid;
  padding: 18px;
  margin-bottom: 20px;
  border-radius: 0 4px 4px 0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(to bottom, transparent 95%, rgba(141, 110, 99, 0.05) 100%);
}

.lineation-types, .fold-types {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.type {
  padding: 12px;
  background-color: rgba(0,0,0,0.02);
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
  background-color: #fffefb;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  margin-bottom: 20px;
  overflow: hidden;
  border: 1px solid #d7ccc8;
  position: relative;
  background-image: linear-gradient(
    to bottom,
    transparent 95%,
    rgba(141, 110, 99, 0.05) 100%
  );
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
  padding: 18px 20px;
  background: linear-gradient(to right, #8d6e63, #5d4037);
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;
  position: relative;
}

.section-header:hover {
  background: linear-gradient(to right, #7b5d57, #4e342e);
}

.section-header h2 {
  margin: 0;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 10px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
}

.section-icon {
  font-size: 1.2rem;
}

.toggle-icon {
  font-weight: bold;
  font-size: 1.3rem;
  background-color: rgba(255, 255, 255, 0.2);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;
}

.section-header:hover .toggle-icon {
  transform: scale(1.1);
}

.section-content {
  padding: 20px;
  background-color: #fffefb;
}

/* 文本样式 */
.geo-text {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 15px;
  color: #4e342e;
  text-align: justify;
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
.fault-line-diagram,
.fault-block-diagram,
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
.fault-line-diagram::before,
.fault-block-diagram::before,
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

.fault-diagram::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60'%3E%3Cpath d='M10,10 L90,50' stroke='%23c0392b' stroke-width='2'/%3E%3Cpath d='M10,50 L90,10' stroke='%238e44ad' stroke-width='2' stroke-dasharray='5,2'/%3E%3C/svg%3E");
}

.fault-line-diagram::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60'%3E%3Cpath d='M10,30 Q50,10 90,30' stroke='%23c0392b' stroke-width='2'/%3E%3Cpath d='M0,30 L100,30' stroke='%233498db' stroke-width='1' stroke-dasharray='3,2'/%3E%3C/svg%3E");
}

.fault-block-diagram::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60'%3E%3Cpath d='M50,10 L50,50' stroke='%23c0392b' stroke-width='2'/%3E%3Crect x='10' y='10' width='40' height='40' fill='%23d2b48c' stroke='%233e2723'/%3E%3Crect x='50' y='20' width='40' height='30' fill='%23b8860b' stroke='%233e2723'/%3E%3C/svg%3E");
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
  .fault-line-diagram,
  .fault-block-diagram,
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
