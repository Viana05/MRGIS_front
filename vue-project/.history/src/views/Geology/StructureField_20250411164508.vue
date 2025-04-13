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
        <span class="icon">🗿</span> 节理构造
      </button>
    </nav>

    <main class="content">
      <!-- 断层内容 -->
      <div v-if="activeTab === 'fault'" class="fault-content">
        <section class="section">
          <div class="section-header" @click="toggleSection('faultDefinition')">
            <h2><span class="section-icon">🔍</span> 断层的定义与基本要素</h2>
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
              <h3><span class="card-icon">📐</span> 断层面</h3>
              <p>
                断层面是一个将岩块或岩层断开成两部分并借以滑动的破裂面。断层面往往不是一个产状稳定的平直面，它的空间位置由其走向、倾向和倾角来确定。
              </p>
              <div class="fault-diagram"></div>
            </div>

            <div class="definition-card" style="border-left-color: #9b59b6">
              <h3><span class="card-icon">🗻</span> 断层带</h3>
              <p>
                大型断层多是由一系列破裂面或次级断层组成的带，即断层(裂)带。断裂带内还夹杂有搓碎岩块、岩片及各种断层岩。断层规模越大，断裂带也越宽越复杂。
              </p>
            </div>

            <div class="definition-card" style="border-left-color: #3498db">
              <h3><span class="card-icon">🗺️</span> 断层线</h3>
              <p>
                断层线是断层面与地面的交线，即断层在地面的出露线。其形态决定于断层面弯曲程度、断层面产状及地面起伏。断层面倾角越缓地形起伏越大，断层线形态越复杂。
              </p>
              <div class="fault-line-diagram"></div>
            </div>

            <div class="definition-card" style="border-left-color: #e74c3c">
              <h3><span class="card-icon">⚖️</span> 断盘</h3>
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
            <h2><span class="section-icon">📊</span> 断层的分类</h2>
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
                <h3><span class="type-icon">⛏️</span> {{ type.name }}</h3>
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
            <h2><span class="section-icon">🔄</span> 断层运动与识别标志</h2>
            <span class="toggle-icon">{{
              expandedSections.faultMovement ? "−" : "+"
            }}</span>
          </div>
          <div v-if="expandedSections.faultMovement" class="section-content">
            <div class="movement-features">
              <div class="feature" style="border-left-color: #f39c12">
                <h3><span class="feature-icon">🌀</span> 牵引褶皱</h3>
                <p>
                  断层两盘紧邻断层的岩层，常常发生明显的弧形弯曲，这种弯曲叫作牵引褶皱。一般认为这是两盘相对错动对岩层拖曳的结果，并且以褶皱的弧形弯曲的突出方向指示本盘的运动方向。
                </p>
                <div class="fold-diagram"></div>
              </div>

              <div class="feature" style="border-left-color: #d35400">
                <h3><span class="feature-icon">✏️</span> 擦痕和阶步</h3>
                <p>
                  擦痕是两盘岩石被磨碎的岩屑和岩粉在断层面上刻划的结果。由粗而深端向细而浅端一般指示对盘运动方向。
                </p>
                <p>
                  阶步是在断层滑动面上常有与擦痕直交的微细陡坎，阶步的陡坎一般面向对盘的运动方向。
                </p>
                <div class="striation-diagram"></div>
              </div>

              <div class="feature" style="border-left-color: #16a085">
                <h3><span class="feature-icon">❌</span> 派生节理</h3>
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
            <h2><span class="section-icon">↔️</span> 走滑断层</h2>
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
              <h3>
                <span class="structure-icon">⭐</span> 走滑断层的特征性构造
              </h3>

              <div class="structure" style="border-left-color: #e74c3c">
                <h4>
                  <span class="structure-icon">🏞️</span> 拉分盆地 (Pull-apart
                  basin)
                </h4>
                <p>
                  拉分盆地是走滑断层系中拉伸形成的断陷盆地。拉分盆地形似菱形，两条长边为走滑断层，短边为正断层。形态上可分为S型和Z型。
                </p>
                <p>
                  左行左阶雁列式走滑断层控制下形成的拉分盆地为Z型，右行右阶雁列式走滑断层控制下形成的拉分盆地为S型。
                </p>
                <div class="basin-diagram"></div>
              </div>

              <div class="structure" style="border-left-color: #9b59b6">
                <h4><span class="structure-icon">🌺</span> 花状构造</h4>
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
            <h2><span class="section-icon">🔍</span> 节理的定义与分类</h2>
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
                  <span class="category-icon">{{
                    index === 0 ? "📏" : "⚙️"
                  }}</span>
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
            <h2><span class="section-icon">🌐</span> 节理的发育规律</h2>
            <span class="toggle-icon">{{
              expandedSections.jointDevelopment ? "−" : "+"
            }}</span>
          </div>
          <div v-if="expandedSections.jointDevelopment" class="section-content">
            <div class="development-features">
              <div class="feature" style="border-left-color: #16a085">
                <h3><span class="feature-icon">⏳</span> 节理分期</h3>
                <p>
                  节理分期的主要依据是节理组的交切关系和各期节理的配套关系。
                </p>
                <p>
                  节理组的交切关系表现为节理组的错开、限制、互切和追踪。在节理组的错开上，后期的节理常切断前期的节理。
                </p>
                <div class="stage-diagram"></div>
              </div>

              <div class="feature" style="border-left-color: #27ae60">
                <h3><span class="feature-icon">🦢</span> 雁列节理</h3>
                <p>
                  雁列节理是一组呈雁行斜列式的节理，常被充填形成雁列脉。雁列脉可以是单列产出，是单剪作用的结果，也可以由左阶和右阶两条雁列脉交叉组合成共轭雁列脉。
                </p>
                <div class="en-echelon-diagram"></div>
              </div>

              <div class="feature" style="border-left-color: #e67e22">
                <h3><span class="feature-icon">🪶</span> 羽饰构造</h3>
                <p>
                  羽饰构造是发生在比较均匀细粒脆性的岩层中节理面上的纹饰，主节理面上发育的羽状或人字形花纹，指示节理面的破裂扩展方向，人字纹尖端指向裂纹源。
                </p>
                <div class="plumose-diagram"></div>
              </div>

              <div class="feature" style="border-left-color: #d35400">
                <h3><span class="feature-icon">🦷</span> 缝合线</h3>
                <p>
                  缝合线是压溶构造的一种，是碳酸盐岩中常见的一种裂缝构造。其成因有争论，但多数认为主要受上覆地层压力和温度作用而形成溶蚀。
                </p>
                <div class="stylolite-diagram"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <footer class="footer">
      <p>地质构造野外观察系统 © 2023 - 自然地理与地质地貌研究</p>
      <div class="rock-sample">🪨</div>
    </footer>
  </div>
</template>

<style scoped>
.geology-observation-system {
  font-family: "Georgia", "Times New Roman", serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  color: #333;
  background-color: #f5f5f0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.geology-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.1;
  pointer-events: none;
}

.strata-layer-1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(45deg, #d2b48c 0%, transparent 50%, #d2b48c 100%);
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
    #b8860b 0%,
    transparent 50%,
    #b8860b 100%
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
      rgba(0, 0, 0, 0.05) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
}

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
}

.header h1 {
  margin: 0;
  font-size: 2.4rem;
  font-weight: 700;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.subtitle {
  margin: 10px 0 0;
  font-size: 1.2rem;
  font-style: italic;
  opacity: 0.9;
}

.compass-icon {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 2rem;
  opacity: 0.8;
}

.tabs {
  display: flex;
  margin-bottom: 20px;
  border-bottom: 2px solid #8d6e63;
  position: relative;
  z-index: 1;
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

.content {
  flex: 1;
  position: relative;
  z-index: 1;
}

.section {
  background-color: #fffefb;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  margin-bottom: 20px;
  overflow: hidden;
  border: 1px solid #d7ccc8;
  position: relative;
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
}

.section-content {
  padding: 20px;
  background-color: #fffefb;
}

.geo-text {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 15px;
  color: #4e342e;
}

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
}

.card-icon,
.type-icon,
.feature-icon,
.structure-icon,
.category-icon {
  font-size: 1.2rem;
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
  height: 120px;
  margin-top: 15px;
  background-color: #efebe9;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}

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
</style>
