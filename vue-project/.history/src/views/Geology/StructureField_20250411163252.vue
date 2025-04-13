<script setup>
import { ref } from "vue";

// 定义当前激活的选项卡
const activeTab = ref("fault");

// 定义是否展开的章节状态
const expandedSections = ref({
  faultDefinition: true,
  faultClassification: false,
  faultMovement: false,
  strikeSlipFault: false,
  jointDefinition: false,
  jointDevelopment: false,
});

// 切换章节展开状态
const toggleSection = (section) => {
  expandedSections.value[section] = !expandedSections.value[section];
};

// 定义走滑断层分类数据
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

// 定义断层分类数据
const faultTypes = [
  {
    name: "正断层",
    description: "断层上盘相对下盘沿断层面向下滑动的断层",
    angle: "一般较陡，以60°左右者较为常见",
  },
  {
    name: "逆断层",
    description: "断层的上盘相对下盘沿断层面向上滑动的断层",
    subtypes: [
      { name: "高角度逆断层", angle: "倾角大于45°" },
      { name: "低角度逆断层", angle: "倾角小于45°" },
    ],
  },
  {
    name: "逆冲断层",
    description: "位移量很大的低角度逆断层",
    angle: "倾角一般在30°左右或更小，位移量一般在数公里(通常指5km)以上",
  },
  {
    name: "平移断层",
    description: "断层两盘顺断层面走向相对位移的断层",
    subtypes: [
      {
        name: "右行平移断层",
        description: "沿垂直断层走向观察断层时，对盘向右滑动",
      },
      {
        name: "左行平移断层",
        description: "沿垂直断层走向观察断层时，对盘向左滑动",
      },
    ],
  },
];

// 定义节理分类数据
const jointTypes = [
  {
    name: "按产状分类",
    types: [
      { name: "走向节理", description: "节理走向与岩层走向大致平行" },
      { name: "倾向节理", description: "节理走向与岩层走向大致直交" },
      { name: "斜向节理", description: "节理走向与岩层走向斜交" },
      { name: "顺层节理", description: "节理面与岩层的层面大致平行" },
    ],
  },
  {
    name: "按力学性质分类",
    types: [
      {
        name: "剪节理",
        description:
          "由剪切应力产生的破裂面，产状稳定，延伸较远，节理面平直光滑",
      },
      {
        name: "张节理",
        description:
          "由张应力产生的破裂面，产状不稳定，延伸不远，节理面粗糙不平",
      },
    ],
  },
];
</script>

<template>
  <div class="geology-observation-system">
    <header class="header">
      <h1>地质构造野外观察系统</h1>
      <p class="subtitle">自然地理与地质地貌系统下的地质构造研究</p>
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
            <p>
              断层是地壳岩石体(地质体)中顺破裂面发生明显位移的一种破裂构造。
            </p>
            <p>
              断层发育广泛，是地壳中最重要的构造类型。大断层常构成区域地质格架，既控制区域地质的结构和演化，还控制和影响区域成矿作用。
            </p>

            <div class="definition-card">
              <h3>断层面</h3>
              <p>
                断层面是一个将岩块或岩层断开成两部分并借以滑动的破裂面。断层面往往不是一个产状稳定的平直面，它的空间位置由其走向、倾向和倾角来确定。
              </p>
            </div>

            <div class="definition-card">
              <h3>断层带</h3>
              <p>
                大型断层多是由一系列破裂面或次级断层组成的带，即断层(裂)带。断裂带内还夹杂有搓碎岩块、岩片及各种断层岩。断层规模越大，断裂带也越宽越复杂。
              </p>
            </div>

            <div class="definition-card">
              <h3>断层线</h3>
              <p>
                断层线是断层面与地面的交线，即断层在地面的出露线。其形态决定于断层面弯曲程度、断层面产状及地面起伏。断层面倾角越缓地形起伏越大，断层线形态越复杂。
              </p>
            </div>

            <div class="definition-card">
              <h3>断盘</h3>
              <p>
                断盘是断层面两侧沿断层面发生位移的岩块。位于倾斜断层面上侧的一盘为上盘，位于断层面下侧的一盘为下盘。根据两盘相对滑动，相对上滑的称为上升盘，相对下滑的称为下降盘。
              </p>
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
              <div class="feature">
                <h3>牵引褶皱</h3>
                <p>
                  断层两盘紧邻断层的岩层，常常发生明显的弧形弯曲，这种弯曲叫作牵引褶皱。一般认为这是两盘相对错动对岩层拖曳的结果，并且以褶皱的弧形弯曲的突出方向指示本盘的运动方向。
                </p>
              </div>

              <div class="feature">
                <h3>擦痕和阶步</h3>
                <p>
                  擦痕是两盘岩石被磨碎的岩屑和岩粉在断层面上刻划的结果。由粗而深端向细而浅端一般指示对盘运动方向。
                </p>
                <p>
                  阶步是在断层滑动面上常有与擦痕直交的微细陡坎，阶步的陡坎一般面向对盘的运动方向。
                </p>
              </div>

              <div class="feature">
                <h3>派生节理</h3>
                <p>
                  在断层两盘相对运动的过程中，断层一盘或两盘的岩石中常常产生羽状排列的张节理和剪节理。羽状张节理与主断层所交锐角一般指示节理所在盘的运动方向。
                </p>
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
            <p>
              走向滑动断层一般是指大型平移断层，是两盘顺直立断层面相对水平剪切滑动的构造，简称走滑断层（strike-slip
              fault）。
            </p>

            <div class="strike-slip-types">
              <div
                v-for="(type, index) in strikeSlipTypes"
                :key="index"
                class="type-card"
              >
                <h3>{{ type.name }}</h3>
                <p>{{ type.description }}</p>
              </div>
            </div>

            <div class="special-structures">
              <h3>走滑断层的特征性构造</h3>

              <div class="structure">
                <h4>拉分盆地 (Pull-apart basin)</h4>
                <p>
                  拉分盆地是走滑断层系中拉伸形成的断陷盆地。拉分盆地形似菱形，两条长边为走滑断层，短边为正断层。形态上可分为S型和Z型。
                </p>
                <p>
                  左行左阶雁列式走滑断层控制下形成的拉分盆地为Z型，右行右阶雁列式走滑断层控制下形成的拉分盆地为S型。
                </p>
              </div>

              <div class="structure">
                <h4>花状构造</h4>
                <p>
                  花状构造是走滑断层系中又一种特征性构造。剖面上一条走滑断层自下而上成花状撒开，故称为花状构造。
                </p>
                <p>
                  根据花状构造的结构和力学性质可分为正花状构造和负花状构造。正花状构造一般是聚敛型走滑断层派生的在压扭性应力状态中形成的构造；负花状构造是离散性走滑断层派生的在张扭性应力场中形成的构造。
                </p>
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
            <p>
              节理是岩体受力断裂后两侧岩块没有显著位移的小型断裂构造。节理分类主要依据节理与有关构造的几何关系，或是节理形成的力学性质。
            </p>

            <div class="joint-classification">
              <div
                v-for="(category, index) in jointTypes"
                :key="index"
                class="category"
              >
                <h3>{{ category.name }}</h3>
                <div class="types-grid">
                  <div
                    v-for="(type, typeIndex) in category.types"
                    :key="typeIndex"
                    class="type-card"
                  >
                    <h4>{{ type.name }}</h4>
                    <p>{{ type.description }}</p>
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
              <div class="feature">
                <h3>节理分期</h3>
                <p>
                  节理分期的主要依据是节理组的交切关系和各期节理的配套关系。
                </p>
                <p>
                  节理组的交切关系表现为节理组的错开、限制、互切和追踪。在节理组的错开上，后期的节理常切断前期的节理。
                </p>
              </div>

              <div class="feature">
                <h3>雁列节理</h3>
                <p>
                  雁列节理是一组呈雁行斜列式的节理，常被充填形成雁列脉。雁列脉可以是单列产出，是单剪作用的结果，也可以由左阶和右阶两条雁列脉交叉组合成共轭雁列脉。
                </p>
              </div>

              <div class="feature">
                <h3>羽饰构造</h3>
                <p>
                  羽饰构造是发生在比较均匀细粒脆性的岩层中节理面上的纹饰，主节理面上发育的羽状或人字形花纹，指示节理面的破裂扩展方向，人字纹尖端指向裂纹源。
                </p>
              </div>

              <div class="feature">
                <h3>缝合线</h3>
                <p>
                  缝合线是压溶构造的一种，是碳酸盐岩中常见的一种裂缝构造。其成因有争论，但多数认为主要受上覆地层压力和温度作用而形成溶蚀。
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <footer class="footer">
      <p>地质构造野外观察系统 © 2023 - 自然地理与地质地貌研究</p>
    </footer>
  </div>
</template>

<style scoped>
.geology-observation-system {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  color: #333;
  background-color: #f9f9f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  text-align: center;
  margin-bottom: 30px;
  padding: 20px;
  background-color: #2c3e50;
  color: white;
  border-radius: 8px;
}

.header h1 {
  margin: 0;
  font-size: 2.2rem;
}

.subtitle {
  margin: 10px 0 0;
  font-size: 1.1rem;
  opacity: 0.9;
}

.tabs {
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
}

.tabs button {
  padding: 12px 24px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  color: #555;
  transition: all 0.3s ease;
  border-bottom: 3px solid transparent;
}

.tabs button:hover {
  color: #2c3e50;
}

.tabs button.active {
  color: #2c3e50;
  border-bottom: 3px solid #3498db;
}

.content {
  flex: 1;
}

.section {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
  overflow: hidden;
}

.section-header {
  padding: 16px 20px;
  background-color: #3498db;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s;
}

.section-header:hover {
  background-color: #2980b9;
}

.section-header h2 {
  margin: 0;
  font-size: 1.3rem;
}

.toggle-icon {
  font-weight: bold;
  font-size: 1.2rem;
}

.section-content {
  padding: 20px;
}

.definition-card,
.type-card,
.feature,
.structure {
  background-color: #f5f7fa;
  border-left: 4px solid #3498db;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 0 4px 4px 0;
}

.definition-card h3,
.type-card h3,
.feature h3,
.structure h4 {
  margin-top: 0;
  color: #2c3e50;
}

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
  background-color: #f5f7fa;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.types-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 10px;
  margin-top: 10px;
}

.footer {
  text-align: center;
  padding: 20px;
  margin-top: 30px;
  color: #7f8c8d;
  font-size: 0.9rem;
}

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
}
</style>
