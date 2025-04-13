<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

const activeNav = ref("history"); // 默认激活第一个导航项

onMounted(() => {
  const sections = [
    "history",
    "rock-stratigraphy",
    "bio-stratigraphy",
    "chrono-stratigraphy",
    "sedimentary-structures",
    "sedimentary-facies",
    "river-facies",
    "delta-facies",
    "alluvial-fan",
    "lake-facies",
    "rift-basin",
    "marine-deposit",
  ];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeNav.value = entry.target.id;
        }
      });
    },
    {
      threshold: 0.1, // 降低触发阈值
      rootMargin: "0px 0px -50% 0px", // 调整视口触发区域
    }
  );

  sections.forEach((id) => {
    const element = document.getElementById(id);
    if (element) observer.observe(element);
  });

  onUnmounted(() => {
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.unobserve(element);
    });
  });
});

const handleNavClick = (e, id) => {
  e.preventDefault();
  activeNav.value = id;
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start", // 对齐到视口顶部
    });
  }
};

// 沉积相
// 导入图片
import sedimentaryFaciesImage1 from "@/assets/FeatureRecog/06沉积相/沉积相图.jpg";
import sedimentaryFaciesImage2 from "@/assets/FeatureRecog/06沉积相/水上雅丹.jpg";
import sedimentaryFaciesImage3 from "@/assets/FeatureRecog/06沉积相/流水地貌.jpg";

const currentIndex2 = ref(0);
const slideCount2 = 3;

const carouselSlides2 = ref([
  {
    image: sedimentaryFaciesImage1,
    title: "沉积相图",
    theme: "theme-desert",
  },
  {
    image: sedimentaryFaciesImage2,
    title: "水上雅丹",
    theme: "theme-desert",
  },
  {
    image: sedimentaryFaciesImage3,
    title: "流水地貌",
    theme: "theme-desert",
  },
]);

// 计算轨道偏移样式
const trackStyle2 = computed(() => ({
  transform: `translateX(-${currentIndex.value * 100}%)`,
}));

// 上一张
const prevSlide2 = () => {
  currentIndex.value = (currentIndex.value - 1 + slideCount) % slideCount;
};

// 下一张
const nextSlide2 = () => {
  currentIndex.value = (currentIndex.value + 1) % slideCount;
};

// 跳转到指定幻灯片
const goToSlide2 = (index) => {
  currentIndex.value = index;
};

// 沉积构造
// 导入图片
import sedimentaryStructureImage1 from "@/assets/FeatureRecog/05沉积构造/沉积构造1.jpg";
import sedimentaryStructureImage2 from "@/assets/FeatureRecog/05沉积构造/沉积构造2.jpg";
import sedimentaryStructureImage3 from "@/assets/FeatureRecog/05沉积构造/沉积构造3.jpg";

const currentIndex1 = ref(0);
const slideCount1 = 3;

const carouselSlides1 = ref([
  {
    image: sedimentaryStructureImage1,
    title: "沉积构造1",
    theme: "theme-fluvial",
  },
  {
    image: sedimentaryStructureImage2,
    title: "沉积构造2",
    theme: "theme-fluvial",
  },
  {
    image: sedimentaryStructureImage3,
    title: "沉积构造3",
    theme: "theme-fluvial",
  },
]);

// 计算轨道偏移样式
const trackStyle1 = computed(() => ({
  transform: `translateX(-${currentIndex.value * 100}%)`,
}));

// 上一张
const prevSlide1 = () => {
  currentIndex.value = (currentIndex.value - 1 + slideCount) % slideCount;
};

// 下一张
const nextSlide1 = () => {
  currentIndex.value = (currentIndex.value + 1) % slideCount;
};

// 跳转到指定幻灯片
const goToSlide1 = (index) => {
  currentIndex.value = index;
};

// 地层特征识别
// 静态导入图片
import stratummapImage1 from "@/assets/FeatureRecog/地层图1.jpg";
import stratummapImage2 from "@/assets/FeatureRecog/地层图2.jpg";
import stratummapImage3 from "@/assets/FeatureRecog/地层图3.jpg";

const currentIndex = ref(0);
const slideCount = 3;

const carouselSlides = ref([
  {
    image: stratummapImage1,
    title: "地层图1",
    theme: "theme-fluvial",
  },
  {
    image: stratummapImage2,
    title: "地层图2",
    theme: "theme-fluvial",
  },
  {
    image: stratummapImage3,
    title: "地层图3",
    theme: "theme-fluvial",
  },
]);

// 计算轨道偏移样式
const trackStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * 100}%)`,
}));

// 上一张
const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slideCount) % slideCount;
};

// 下一张
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slideCount;
};

// 跳转到指定幻灯片
const goToSlide = (index) => {
  currentIndex.value = index;
};

// 海相沉积
// 导航标签控制
const marineTabs = ref([
  { id: "topography", name: "海底地形分类" },
  { id: "environment", name: "沉积环境分类" },
  { id: "characteristics", name: "沉积特征" },
]);
const activeMarineTab = ref("topography");

// 海底地形部分折叠控制
const terrainDetails = ref({
  shelf: false,
  slope: false,
  rise: false,
  basin: false,
});

const toggleTerrainDetail = (type) => {
  terrainDetails.value[type] = !terrainDetails.value[type];
};

const hydroDetails = ref({
  wave: false,
  tide: false,
  current: false,
});

const toggleHydroDetail = (type) => {
  hydroDetails.value[type] = !hydroDetails.value[type];
};

// 沉积环境部分折叠控制
const envGroups = ref({
  littoral: false,
  shelf: false,
  bathyal: false,
  abyssal: false,
});

const toggleEnvGroup = (type) => {
  envGroups.value[type] = !envGroups.value[type];
};

const envSubgroups = ref({
  barrier: false,
  nonBarrier: false,
});

const toggleEnvSubgroup = (type) => {
  envSubgroups.value[type] = !envSubgroups.value[type];
};

const features = ref({
  island: false,
  lagoon: false,
  tidal: false,
});

const toggleFeature = (type) => {
  features.value[type] = !features.value[type];
};

const shelfTypes = ref({
  tidal: false,
  current: false,
  storm: false,
});

const toggleShelfType = (type) => {
  shelfTypes.value[type] = !shelfTypes.value[type];
};

// 沉积特征部分折叠控制
const depositFeatures = ref({
  bathyal: false,
  abyssal: false,
});

const toggleDepositFeature = (type) => {
  depositFeatures.value[type] = !depositFeatures.value[type];
};

// 裂陷盆地
// 导航标签控制
const basinTabs = ref([
  { id: "definition", name: "定义" },
  { id: "classification1", name: "分类1" },
  { id: "classification2", name: "分类2" },
]);
const activeBasinTab = ref("definition");

// 定义部分折叠控制
const definitionDetails = ref({
  basic: false,
  mechanism: false,
  sequence: false,
});

const toggleDefinitionDetail = (type) => {
  definitionDetails.value[type] = !definitionDetails.value[type];
};

// 分类1部分折叠控制
const classificationGroups = ref({
  intracontinental: false,
  divergent: false,
  subduction: false,
  collision: false,
});

const toggleClassificationGroup = (type) => {
  classificationGroups.value[type] = !classificationGroups.value[type];
};

const basinTypes = ref({
  sag: false,
  wide: false,
  narrow: false,
  intercontinental: false,
  failed: false,
  oceanic: false,
  passive: false,
});

const toggleBasinType = (type) => {
  basinTypes.value[type] = !basinTypes.value[type];
};

// 分类2部分折叠控制
const faultTypes = ref({
  geometry: false,
  structural: false,
  distribution: false,
  transfer: false,
});

const toggleFaultType = (type) => {
  faultTypes.value[type] = !faultTypes.value[type];
};
// 湖泊相
// 导航标签控制
const lakeTabs = ref([
  { id: "genesis", name: "成因" },
  { id: "types", name: "类型" },
  { id: "markers", name: "标志" },
]);
const activeLakeTab = ref("genesis");

// 水动力折叠控制
const lakeHydrodynamic = ref({
  wave: false,
  river: false,
  gravity: false,
});

const toggleLakeHydrodynamic = (type) => {
  lakeHydrodynamic.value[type] = !lakeHydrodynamic.value[type];
};

// 亚相折叠控制
const lakeSubfacies = ref({
  deep: false,
  shallow: false,
  littoral: false,
  expanded: false,
});

const toggleLakeSubfacies = (type) => {
  lakeSubfacies.value[type] = !lakeSubfacies.value[type];
};

// 特征折叠控制
const lakeCharacteristics = ref({
  rock: false,
  structure: false,
  fossil: false,
});

const toggleLakeCharacteristic = (type) => {
  lakeCharacteristics.value[type] = !lakeCharacteristics.value[type];
};

// 冲积扇
const fanTabs = ref([
  { id: "formation", name: "形成与形态" },
  { id: "deposition", name: "沉积类型" },
  { id: "subfacies", name: "亚相划分" },
]);
const activeFanTab = ref("formation");

// 折叠控制状态
const expandedClimate = ref({
  arid: false,
  humid: false,
});

const expandedClassification = ref({
  arid: false,
  humid: false,
});

const expandedTypes = ref({
  debris: false,
  channel: false,
  sheet: false,
  sieve: false,
});

const expandedSubfacies = ref({
  root: false,
  middle: false,
  edge: false,
});

// 河流相
const riverTypes = [
  { id: "basics", name: "河流基础" },
  { id: "meandering", name: "曲流河" },
  { id: "braided", name: "辫状河/网状河" },
];
const activeRiverType = ref("basics");

const riverCharacteristics = [
  {
    title: "树枝状水系",
    content:
      "树枝状水系是水系发育中最普遍的一种类型，干支流呈树枝状。一般发育在抗侵蚀力较一致的沉积岩或变质岩地区。如西江（珠江水系干流之一）上游接纳柳江、郁江、桂江等支流。",
  },
  {
    title: "扇形水系",
    content: "扇形水系是干支流组合而成的流域轮廓形如扇状的水系，如海河水系。",
  },
  {
    title: "格子状水系",
    content: "格子状水系由干支流沿着两组垂直相交的构造线发育而成，如闽江水系。",
  },
];

// 三角洲相
// 导航标签控制
const tabs = ref([
  { id: "formation", name: "形成过程" },
  { id: "types", name: "河流/波浪/潮汐" },
  { id: "fan", name: "扇三角洲" },
]);
const activeTab = ref("formation");

// 形成过程折叠控制
const formationSteps = ref([
  {
    id: "step1",
    title: "阶段一：河口砂坝与河道分叉的形成",
    content: [
      "在河流入海(湖)的近河口处，由于水流展宽和潮流的顶托作用，河流流速骤减，河流底负载下沉而堆积成水下浅滩。",
      "浅滩逐渐淤高、增大，露出水面形成新月型河口砂坝。水流自砂坝顶端分开，形成两个分支河道(分流河道)，并向外侧扩展。",
    ],
  },
  {
    id: "step2",
    title: "阶段二：决口扇的形成与三角洲的延伸",
    content: [
      "分支河道不断向海延伸，河床坡度减小，流速减缓，河床淤高。坡度减小至一定程度，洪水季节洪流冲决天然堤，呈散流倾泻于滨海平原或叉道间海湾，流速骤减，沉积物逐渐淤积而成决口扇滩，从而使三角洲在横向上逐渐扩大。",
      "河水冲决天然堤后，取道于较大坡度的新河床入海。旧河道淤塞，泥砂供应断绝，加之海浪的改造和侵蚀，使原来的三角洲废弃，而在其旁侧新河道入海处，新的三角洲开始发育成长。",
    ],
  },
]);
const expandedSteps = ref({});

const toggleStep = (stepId) => {
  expandedSteps.value[stepId] = !expandedSteps.value[stepId];
};

// 三角洲类型控制
const deltaTypes = ref([
  { id: "river", name: "河控三角洲" },
  { id: "wave", name: "浪控三角洲" },
  { id: "tide", name: "潮控三角洲" },
]);
const activeDeltaType = ref("river");

// 河控三角洲子类型
const riverSubtypes = ref([
  { id: "elongate", name: "长形(鸟足状)" },
  { id: "lobate", name: "朵叶状" },
]);
const activeRiverSubtype = ref("elongate");

// 三角洲相亚相
const deltaFacies = ref([
  {
    id: "plain",
    name: "三角洲平原亚相",
    content: [
      "是三角洲沉积的陆上部分，其范围包括从河流大量分叉位置至海平面以上的广大河口区，是与河流有关的沉积体系在滨海区的延伸。",
      "岩性主要为砂岩、粉砂岩、泥岩(包括泥炭、褐煤等)。碎屑颗粒分选差。",
    ],
  },
  {
    id: "front",
    name: "三角洲前缘亚相",
    content: [
      "围绕三角洲平原的边缘伸向海洋或湖，位于海平面以下。为河流和海水的剧烈交锋带，沉积作用活跃，是三角洲砂体的主体。",
    ],
  },
  {
    id: "prodelta",
    name: "前三角洲亚相",
    content: [
      "位于三角洲前缘的前方，是三角洲沉积最厚的地区。沉积物大部分是在浪基面以下深度范围内形成的，基本上不受浅水波浪的干扰。",
      "主要由暗灰色粘土和粉砂质粘土组成。主要发育水平层理，块状层理，生物扰动构造，含广盐度的化石，如介形虫、双壳类等。",
    ],
  },
]);
const expandedFacies = ref({});

const toggleFacies = (faciesId) => {
  expandedFacies.value[faciesId] = !expandedFacies.value[faciesId];
};

// 扇三角洲类型
const fanTypes = ref([
  { id: "lake", name: "湖泊扇三角洲" },
  { id: "wave", name: "波浪改造型" },
  { id: "tide", name: "潮汐改造型" },
]);
const activeFanType = ref("lake");

// 扇三角洲亚相
const fanDeltaFacies = ref([
  {
    id: "fan-plain",
    name: "扇三角洲平原",
    content: [
      "是扇三角洲的陆上部分，其范围包括从扇端至岸线之间的近海平原地带。以水流和重力流的粗粒沉积物为特征，砂砾层具不明显的平行层理或交错层理，分选差。",
    ],
  },
  {
    id: "fan-front",
    name: "扇三角洲前缘",
    content: [
      "亦称过渡带，位于岸线至正常天气浪基面之间的浅水区。以较陡的前积相为特征，牵引流为主，常见大、中型交错层理。",
    ],
  },
  {
    id: "fan-prodelta",
    name: "前扇三角洲",
    content: [
      "是指扇三角洲的浪基面以下部分，向下与陆架泥或深水盆地沉积过渡，没有明显的岩性界线。以不规则分布的泥、砂和砾石的透镜状层理为特点。",
    ],
  },
]);
const expandedFanFacies = ref({});

const toggleFanFacies = (faciesId) => {
  expandedFanFacies.value[faciesId] = !expandedFanFacies.value[faciesId];
};

// 扇三角洲沉积模式
const fanModels = ref([
  {
    id: "slope",
    name: "斜坡型模式",
    content: [
      "主要是根据牙买加东南部耶拉斯扇三角洲的沉积特点建立的。该模式可适用于进积到岛坡、陆坡或断陷盆地边缘的扇三角洲。",
    ],
  },
  {
    id: "shelf",
    name: "陆棚型模式",
    content: [
      "发育在坡度低缓而宽阔的陆棚海边缘，又称缓坡型扇三角洲。陆棚型扇三角洲模式是根据阿拉斯加东南海岸，以科珀河扇三角洲为代表的一些扇三角洲的沉积特点建立的。",
    ],
  },
  {
    id: "gilbert",
    name: "吉伯特型模式",
    content: [
      '最早被吉尔伯特研究的美国邦维尔湖(Lake Bonneville)的三角洲实际上是个典型的湖泊扇三角洲。该扇三角洲以具有顶积层、前积层和底积层"三褶构造"为特征。',
    ],
  },
]);
const expandedModels = ref({});

const toggleModel = (modelId) => {
  expandedModels.value[modelId] = !expandedModels.value[modelId];
};

// 河流相
const classificationTabs = [
  { id: "topography", name: "地形分类" },
  { id: "development", name: "发育阶段" },
  { id: "rust", name: "拉斯特分类" },
];
const activeClassificationTab = ref("topography");

const meanderingSubfacies = [
  { id: "channel", name: "河床亚相" },
  { id: "levee", name: "堤岸亚相" },
  { id: "floodplain", name: "河漫亚相" },
  { id: "oxbow", name: "牛轭湖亚相" },
];
const activeSubfacies = ref("channel");

const comparisonRivers = [
  { id: "braided", name: "辫状河" },
  { id: "anastomosed", name: "网状河" },
];
const activeComparisonRiver = ref("braided");

// 沉积相
const faciesGroups = [
  { id: "definition", name: "定义" },
  { id: "continental", name: "陆相组" },
  { id: "transitional", name: "过渡相组" },
  { id: "marine", name: "海相组" },
];
const currentFaciesGroup = ref("definition");

// 折叠控制
const isCollapsed = ref({
  eluvial: true,
  slope: true,
  desert: true,
  glacial: true,
  alluvial: true,
  fluvial: true,
  lacustrine: true,
  swamp: true,
  delta: true,
  estuary: true,
  shore: true,
  shelf: true,
  bathyal: true,
  abyssal: true,
});

const toggleSection = (key) => {
  isCollapsed.value[key] = !isCollapsed.value[key];
};

// 分类导航
const categories = [
  { id: "physical", name: "物理成因构造" },
  { id: "chemical", name: "化学成因构造" },
  { id: "biological", name: "生物成因构造" },
];
const activeCategory = ref("physical");

// 折叠控制
const collapsed = ref({
  ripple: false,
  bedding: true,
  erosion: true,
  deformation: true,
  crystalImprint: false,
  birdseye: true,
  nodule: true,
  stylolite: true,
  stromatolite: false,
  traceFossil: true,
});

const toggleCollapse = (key) => {
  collapsed.value[key] = !collapsed.value[key];
};

// 波痕类型
const rippleTypes = [
  { id: "current", name: "流水波痕" },
  { id: "wave", name: "浪成波痕" },
  { id: "wind", name: "风成波痕" },
];
const activeRippleType = ref("current");

// 层理类型
const beddingTypes = [
  { id: "graded", name: "递变层理" },
  { id: "horizontal", name: "水平层理" },
  { id: "cross", name: "交错层理" },
  { id: "parallel", name: "平行层理" },
];
const activeBeddingType = ref("graded");

// 侵蚀构造类型
const erosionTypes = [
  { id: "scour", name: "冲刷痕" },
  { id: "tool", name: "压刻痕" },
  { id: "rill", name: "细流痕" },
];
const activeErosionType = ref("scour");

// 变形构造类型
const deformationTypes = [
  { id: "flame", name: "火焰状构造" },
  { id: "convolute", name: "包卷层理" },
  { id: "raindrop", name: "雨痕" },
];
const activeDeformationType = ref("flame");
</script>

<template>
  <div class="main-content">
    <!-- 浮动导航栏 -->
    <div class="floating-nav">
      <div class="nav-title">页面导航</div>
      <ul class="nav-list">
        <li>
          <a
            href="#history"
            class="nav-link"
            :class="{ active: activeNav === 'history' }"
            @click="(e) => handleNavClick(e, 'history')"
          >
            01 历史回望
          </a>
        </li>
        <li>
          <a
            href="#rock-stratigraphy"
            class="nav-link"
            :class="{ active: activeNav === 'rock-stratigraphy' }"
            @click="(e) => handleNavClick(e, 'rock-stratigraphy')"
          >
            02 岩石地层
          </a>
        </li>
        <li>
          <a
            href="#bio-stratigraphy"
            class="nav-link"
            :class="{ active: activeNav === 'bio-stratigraphy' }"
            @click="(e) => handleNavClick(e, 'bio-stratigraphy')"
          >
            03 生物地层
          </a>
        </li>
        <li>
          <a
            href="#chrono-stratigraphy"
            class="nav-link"
            :class="{ active: activeNav === 'chrono-stratigraphy' }"
            @click="(e) => handleNavClick(e, 'chrono-stratigraphy')"
          >
            04 年代地层
          </a>
        </li>
        <li>
          <a
            href="#sedimentary-structures"
            class="nav-link"
            :class="{ active: activeNav === 'sedimentary-structures' }"
            @click="(e) => handleNavClick(e, 'sedimentary-structures')"
          >
            05 沉积构造
          </a>
        </li>
        <li>
          <a
            href="#sedimentary-facies"
            class="nav-link"
            :class="{ active: activeNav === 'sedimentary-facies' }"
            @click="(e) => handleNavClick(e, 'sedimentary-facies')"
          >
            06 沉积相
          </a>
        </li>
        <li>
          <a
            href="#river-facies"
            class="nav-link"
            :class="{ active: activeNav === 'river-facies' }"
            @click="(e) => handleNavClick(e, 'river-facies')"
          >
            07 河流相
          </a>
        </li>
        <li>
          <a
            href="#delta-facies"
            class="nav-link"
            :class="{ active: activeNav === 'delta-facies' }"
            @click="(e) => handleNavClick(e, 'delta-facies')"
          >
            08 三角洲相
          </a>
        </li>
        <li>
          <a
            href="#lake-facies"
            class="nav-link"
            :class="{ active: activeNav === 'lake-facies' }"
            @click="(e) => handleNavClick(e, 'lake-facies')"
          >
            09 湖泊相
          </a>
        </li>
        <li>
          <a
            href="#alluvial-fan"
            class="nav-link"
            :class="{ active: activeNav === 'alluvial-fan' }"
            @click="(e) => handleNavClick(e, 'alluvial-fan')"
          >
            10 冲积扇
          </a>
        </li>
        <li>
          <a
            href="#rift-basin"
            class="nav-link"
            :class="{ active: activeNav === 'rift-basin' }"
            @click="(e) => handleNavClick(e, 'rift-basin')"
          >
            11 裂陷盆地
          </a>
        </li>
        <li>
          <a
            href="#marine-deposit"
            class="nav-link"
            :class="{ active: activeNav === 'marine-deposit' }"
            @click="(e) => handleNavClick(e, 'marine-deposit')"
          >
            12 海相沉积
          </a>
        </li>
      </ul>
    </div>

    <!-- 原有内容容器 -->
    <div class="stratigraphy-container">
      <div class="header">
        <h1>地层特征识别</h1>

        <div class="geo-carousel">
          <!-- 轮播容器，使用transform实现滑动效果 -->
          <div class="geo-carousel-track" :style="trackStyle">
            <div
              v-for="(slide, index) in carouselSlides"
              :key="index"
              class="geo-slide"
            >
              <div class="geo-image-wrapper">
                <img :src="slide.image" class="geo-image" :alt="slide.title" />
                <div class="geo-image-caption" :class="slide.theme">
                  {{ slide.title }}
                </div>
              </div>
            </div>
          </div>

          <!-- 导航控制 -->
          <div class="geo-carousel-controls">
            <button class="geo-carousel-btn prev" @click="prevSlide">‹</button>
            <div class="geo-carousel-dots">
              <button
                v-for="(_, index) in carouselSlides"
                :key="index"
                class="geo-carousel-dot"
                :class="{ active: currentIndex === index }"
                @click="goToSlide(index)"
              ></button>
            </div>
            <button class="geo-carousel-btn next" @click="nextSlide">›</button>
          </div>
        </div>

        <p class="subtitle">
          从"雪球地球到盘古大陆"，从"生物大爆发到生物大灭绝"...几十亿年的演化中，地球经历了无数的变化。为了了解这漫长的历史，地质学家们通过采集分析资料，将其与地质年代结合，重现了地球的演化。而这些有关地球历史的最详细、最精确的信息大部分都来自于地球上最为神奇的构造——地层！
        </p>
      </div>

      <!-- 01历史回望 -->
      <div class="content-section historical-review" id="history">
        <h2 class="section-title">01历史回望</h2>
        <p class="section-intro">
          地层学（stratigraphy）作为地质学中奠基性的基础学科，自产生至今已有几百年历史。形成了以原始地层学、狭义地层学和现代地层学为特色的3个发展阶段。
        </p>

        <div class="timeline">
          <!-- 原始地层学阶段 -->
          <div class="timeline-item">
            <div class="timeline-header">
              <div class="timeline-period">1669-1900</div>
              <h3 class="timeline-title">（1）原始地层学阶段</h3>
            </div>
            <div class="timeline-content">
              <div class="geo-image-group uniform-height">
                <div class="geo-image-wrapper">
                  <img
                    src="@/assets/FeatureRecog/01历史回望/丹麦学者 N. Steno.jpg"
                    class="geo-image"
                    alt="丹麦学者 N. Steno"
                  />
                  <div class="geo-image-caption theme-desert">
                    丹麦学者 N. Steno
                  </div>
                </div>
                <div class="geo-image-wrapper">
                  <img
                    src="@/assets/FeatureRecog/01历史回望/英国地质学家w. Smith.jpg"
                    class="geo-image"
                    alt="英国地质学家w. Smith"
                  />
                  <div class="geo-image-caption theme-desert">
                    英国地质学家w. Smith
                  </div>
                </div>
              </div>
              <p>17 世纪后期，丹麦学者 N. Steno 提出了地层三定律：</p>
              <ul class="stratigraphy-laws">
                <li><strong>层序叠加律</strong>：若地层未经变动则下老上新</li>
                <li>
                  <strong>原始侧向连续律</strong
                  >：若地层未经变动则呈连续体并逐渐尖灭
                </li>
                <li>
                  <strong>原始水平律</strong
                  >：若地层未经变动则呈水平或大致水平产状
                </li>
              </ul>
              <p class="stage-theory">
                18世纪，英国地质学家w.
                Smith提出的生物层序律奠定了岩石和生物地层学的基本原理及研究方法，并厘定了最初的地层系统，使得第一张地层表在1799
                年诞生。
              </p>
              <p class="stage-theory">
                而到了19世纪末，德国学者J.
                Walther又提出："只有那些目前可以观察到是彼此毗邻的相和相区，才能原生的重叠在一起。"这就是著名的瓦尔特相律，又称为相对比原理。
              </p>
              <div>
                这些概念和原理的提出标志着原始地层学阶段（1669-1900）的出现。尽管它们大多来源于直觉或经验性总结，但仍对之后地层学的研究产生了重要的影响。
              </div>
            </div>
          </div>

          <!-- 狭义地层学阶段 -->
          <div class="timeline-item">
            <div class="timeline-header">
              <div class="timeline-period">1900-1976</div>
              <h3 class="timeline-title">（2）狭义地层学阶段</h3>
            </div>
            <div class="timeline-content">
              <p>狭义地层学阶段(1900-1976)具有几个显著的特征：</p>
              <ol class="stage-features">
                <li>
                  <strong>统一地层划分对比思想为主导。</strong
                  >即一切地层单位和地层界线均统一于年代地层单位和界线的观点，在地层学中主导了数百年的时间。
                </li>
                <li>
                  <strong>地层分类、术语、概念和原理激烈变动。</strong
                  >各种地层学概念和术语大量出现，又被摒弃。
                </li>
              </ol>
              <div class="geo-image-group uniform-height">
                <div class="geo-image-wrapper">
                  <img
                    src="@/assets/FeatureRecog/01历史回望/《地层学原理》(1913).jpg"
                    class="geo-image"
                    alt="《地层学原理》(1913)"
                  />
                  <div class="geo-image-caption theme-desert">
                    《地层学原理》(1913)
                  </div>
                </div>
                <div class="geo-image-wrapper">
                  <img
                    src="@/assets/FeatureRecog/01历史回望/《国际地层指南》（简化版）.jpg"
                    class="geo-image"
                    alt="《国际地层指南》（简化版）"
                  />
                  <div class="geo-image-caption theme-desert">
                    《国际地层指南》（简化版）
                  </div>
                </div>
              </div>
              <p class="stage-theory">
                在这期间，虽然有地质学家葛利普在其地层学著作《地层学原理》(1913)中明确描述了相变和岩相界线穿时，以及岩石地层单位与年代地层单位不一致的科学理论。
              </p>
              <p class="stage-theory">
                但直到20世纪70年代，H. D.
                Hedberg(赫德伯格)主编的《国际地层指南》(第一版)出版（1976）,多重地层划分对比的思想才逐渐被地层学家所接受。
              </p>
              <p>
                这些新观念和思想的出现，促进了以宏观露头研究为主体的区域地层学资料的迅速积累，大量新的地层学分支也逐渐出现。
              </p>
            </div>
          </div>

          <!-- 现代地层学阶段 -->
          <div class="timeline-item">
            <div class="timeline-header">
              <div class="timeline-period">1976-至今</div>
              <h3 class="timeline-title">（3）现代地层学阶段</h3>
            </div>
            <div class="timeline-content">
              <p>
                自1976年至今，随着多重地层划分对比理论、板块构造理论和新灾变论的发展，矿产资源勘探等领域对地层学理论和技术的大量需求，给狭义地层学理论的完善和现代地层学理论的形成带来了良好的契机。
              </p>
              <div class="geo-image-container">
                <div class="geo-image-wrapper proportional">
                  <img
                    src="@/assets/FeatureRecog/01历史回望/板块运动.jpg"
                    class="geo-image"
                    alt="板块运动"
                  />
                  <div class="geo-image-caption theme-desert">板块运动</div>
                </div>
              </div>
              <p>
                20世纪中后期，地层学的发展进入了一个极速时代。该阶段的现代地层学具有4个典型的特征：
              </p>
              <ol class="stage-features">
                <li>
                  在研究对象和内容上大为扩展和深化。以对传统层状岩石的研究为基础，进一步增加了对非传统层状岩石的研究，从而更广泛地认识了层状岩石和地球演化史。
                </li>
                <li>
                  在研究范围上，现代地层学越来越重视区域地层研究基础上的国际交流合作与全球对比。提倡地层学术用语、概念、方法及过程的国际化和专业化已成为地层学家们的共识。
                </li>
                <li>
                  在研究尺度和手段上，现代地层学逐渐开始重视从微观尺度和借助现代科技手段获取地层特征，如对磁性地层、同位素地层和分子地层等的研究。
                </li>
                <li>
                  而在地层划分对比中，现代地层学使其分辨率已在部分地区和时代达到了从百万年级至万年级精度的提升。
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <!-- 02岩石地层 -->
      <div class="content-section rock-stratigraphy" id="rock-stratigraphy">
        <h2 class="section-title">02岩石地层</h2>
        <div class="section-content">
          <div class="definition-box">
            <p>
              <strong>地层（stratum）</strong
              >是一切成层岩石的总称，是一层或一组具有某种统一的特征和属性的，并和上下层有着明显区别的岩层。
            </p>
            <p>
              而根据地层的岩性及岩性组合，对地层进行划分、对比的学科被称为<strong>岩石地层学</strong>。岩石地层划分是指根据地层的岩性、岩相和变质、变形特征将地层组织成相应的岩石地层单位。
            </p>
          </div>
          <div class="geo-image-container">
            <div class="geo-image-wrapper proportional">
              <img
                src="@/assets/FeatureRecog/02岩石地层/峡谷地国家公园地层.jpg"
                class="geo-image"
                alt="峡谷地国家公园地层"
              />
              <div class="geo-image-caption theme-fluvial">
                峡谷地国家公园地层
              </div>
            </div>
          </div>
          <div class="stratigraphy-principle">
            <p>
              地层的结构、基本层序和各岩层之间的接触关系等，均是岩石地层划分的重要依据。只有在建立了岩石地层序列或格架的基础上，才能进行生物地层、年代地层等其他分支地层类别的研究。
            </p>
          </div>
          <div class="geo-image-container">
            <div class="geo-image-wrapper proportional">
              <img
                src="@/assets/FeatureRecog/02岩石地层/岩石地层单位.jpg"
                class="geo-image"
                alt="岩石地层单位"
              />
              <div class="geo-image-caption theme-fluvial">岩石地层单位</div>
            </div>
          </div>
          <div class="unit-characteristics">
            <h3 class="subsection-title">岩石地层单位特征</h3>
            <ul class="feature-list">
              <li>
                岩石地层单位是由岩性、岩相或变质程度均一的岩石构成的三度空间岩层体
              </li>
              <li>是大、中比例尺野外地质填图的基本单位，应具有一定的厚度</li>
              <li>
                必须以实际岩石组分的特征为基础，而不是以岩石的地球物理性能(电性、磁性、放射性和其他推论或度量的物理性质)、推论出的时间间隔、地质事件、成因等为基础
              </li>
              <li>
                化石为岩石中的一种物质成分，有时对于识别一个岩石地层单位具有重要作用。但不论在什么情况下，岩石地层单位绝不根据所含古生物化石来下定义
              </li>
            </ul>
            <div class="geo-image-container">
              <div class="geo-image-wrapper proportional">
                <img
                  src="@/assets/FeatureRecog/02岩石地层/化石.jpg"
                  class="geo-image"
                  alt="化石"
                />
                <div class="geo-image-caption theme-fluvial">化石</div>
              </div>
            </div>
          </div>
          <div class="unit-classification">
            <h3 class="subsection-title">岩石地层单位分类</h3>
            <p>
              岩石地层单位可分为3种：正式岩石地层单位、非正式岩石地层单位和特殊岩石地层单位。
            </p>
            <div class="formal-unit">
              <h4 class="unit-type-title">正式岩石地层单位</h4>
              <p>
                严格遵循地层单位命名与修订程序划分、定义、命名或修订，出版的岩石地层单位为正式岩石地层单位（formal
                lithostratigraphic units）。
              </p>
              <p>正式岩石地层单位按级别可分为四级：</p>
              <ol class="unit-level-list">
                <li><strong>群(Group)</strong></li>
                <li><strong>组(Formation)</strong> - 基本的单位</li>
                <li><strong>段(Member)</strong></li>
                <li><strong>层(Bed)</strong></li>
              </ol>
            </div>
            <div class="geo-image-container">
              <div class="geo-image-wrapper proportional">
                <img
                  src="@/assets/FeatureRecog/02岩石地层/美国加利福尼亚州地层.jpg"
                  class="geo-image"
                  alt="美国加利福尼亚州地层"
                />
                <div class="geo-image-caption theme-fluvial">
                  美国加利福尼亚州地层
                </div>
              </div>
            </div>
            <div class="informal-unit">
              <h4 class="unit-type-title">非正式岩石地层单位</h4>
              <p>
                非正式岩石地层单位（informal lithostratigraphic
                units）是指未正式命名，或无需正式命名，并依附于某一正式单位的岩石地层单位，其常用单位术语之间无等级和大小之分。
              </p>
            </div>
            <div class="geo-image-container">
              <div class="geo-image-wrapper proportional">
                <img
                  src="@/assets/FeatureRecog/02岩石地层/印度地层.jpg"
                  class="geo-image"
                  alt="印度地层"
                />
                <div class="geo-image-caption theme-fluvial">印度地层</div>
              </div>
            </div>
            <div class="special-unit">
              <h4 class="unit-type-title">特殊岩石地层单位</h4>
              <p>
                特殊岩石地层单位是相对于正常岩石地层单位提出的。正常岩石地层(史密斯地层)的形成，符合地层学三定律、化石层序律和瓦尔特相律。
              </p>
              <p>
                而特殊岩石地层(非史密斯地层)，主要是原始层状或非层状岩石体，遭受后期不同程度和不同期次的构造变形、变质作用及岩浆作用的影响和强烈改造后，形成的一套岩石体。
              </p>
              <p>难以用正常的岩石地层分类方法对其进行划分。其地层单位包括：</p>
              <ul class="special-unit-list">
                <li>岩群</li>
                <li>岩组</li>
                <li>杂岩</li>
                <li>混杂岩</li>
                <li>蛇绿岩等</li>
              </ul>
              <div class="geo-image-container">
                <div class="geo-image-wrapper proportional">
                  <img
                    src="@/assets/FeatureRecog/02岩石地层/地中海东部岛屿地层.jpg"
                    class="geo-image"
                    alt="地中海东部岛屿地层"
                  />
                  <div class="geo-image-caption theme-fluvial">
                    地中海东部岛屿地层
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 03生物地层 -->
      <div class="content-section bio-stratigraphy" id="bio-stratigraphy">
        <h2 class="section-title">03生物地层</h2>
        <div class="section-content">
          <div class="intro-section">
            <div class="geo-image-group uniform-height">
              <div class="geo-image-wrapper">
                <img
                  src="@/assets/FeatureRecog/03生物地层/地质年代表.jpg"
                  class="geo-image"
                  alt="地质年代表"
                />
                <div class="geo-image-caption theme-lake">地质年代表</div>
              </div>
              <div class="geo-image-wrapper">
                <img
                  src="@/assets/FeatureRecog/03生物地层/生物演化图.jpg"
                  class="geo-image"
                  alt="生物演化图"
                />
                <div class="geo-image-caption theme-lake">生物演化图</div>
              </div>
            </div>
            <p>
              在过去的地质时间里，地球上曾经出现过各种各样的生物，它们伴随地球历史进程经过了一段长期而又复杂的演化过程。这些生物有着与现代生物相似的发展演化规律。它们的生存环境与沉积地层所反映的环境有密切联系。
            </p>
            <p>
              因此，对生物地层的研究不仅为地层序列的建立、划分和对比提供了最常用的可靠手段，而且为研究生物演化的过程和机制，重建地质历史时期的古构造、古地理和古环境格局提供了具体的时空格架。
            </p>
          </div>

          <div class="research-object">
            <h3 class="subsection-title">研究对象</h3>
            <p>
              生物地层学的主要研究对象是包含化石的岩层，其依赖的客观实体是与古代生命活动相联系并在岩层中记录下来的化石。
            </p>
            <div class="geo-image-container">
              <div class="geo-image-wrapper proportional">
                <img
                  src="@/assets/FeatureRecog/03生物地层/三叶虫化石.jpg"
                  class="geo-image"
                  alt="三叶虫化石"
                />
                <div class="geo-image-caption theme-lake">三叶虫化石</div>
              </div>
            </div>
          </div>

          <div class="bio-facies">
            <h3 class="subsection-title">生物相</h3>
            <p>
              地层中所保存的生物化石及其所代表的自然环境称之为生物相。生物相和岩相结合是恢复古环境的主要手段。有重要指相意义的生物化石称之为指相化石。
            </p>
          </div>

          <div class="historical-development">
            <h3 class="subsection-title">历史发展</h3>
            <div class="historical-note">
              <p>
                威廉·史密斯在1816年发表的名著《用生物化石鉴别的地层》中，首次提出生物顺序发生的概念，既在整个地质时期内各种生物一个接着另一个按先后顺序出现。并指出，相同的层总是发现有相同的叠覆次序，并且包含相同的特有化石。
              </p>
            </div>
            <p>
              生物化石在不同的地质年代中显示着各不相同的特定面貌，而在同一地质年代的化石却有着大致相同的面貌。
            </p>
            <p>
              由于这种生物阶段性的发展与地质历史的阶段性是密切结合在一起的，所以就有可能用生物发展面貌命名大的地质年代，如古生代与中生代和新生代等。
            </p>
          </div>

          <div class="bio-stratigraphic-unit">
            <h3 class="subsection-title">生物地层单位</h3>
            <p>
              生物地层单位是指具有相同化石内容和分布特征的一种地层单位，是根据岩石中所含化石的特征来定义和说明其特性的岩石地层体。
            </p>

            <div class="biozone-types">
              <h4 class="unit-type-title">生物带(Biozone)</h4>
              <p>生物带(biozone)是生物地层单位的总称。常用的生物带有5种：</p>
              <ul class="biozone-list">
                <li>延限带</li>
                <li>间隔带</li>
                <li>组合带</li>
                <li>富集带</li>
                <li>谱系带</li>
              </ul>
              <div class="geo-image-container">
                <div class="geo-image-wrapper proportional">
                  <img
                    src="@/assets/FeatureRecog/03生物地层/生物带类型.jpg"
                    class="geo-image"
                    alt="生物带类型"
                  />
                  <div class="geo-image-caption theme-lake">生物带类型</div>
                </div>
              </div>
              <p class="note">
                各类生物带之间无级别上的差别，也不相互排斥。同一地层间隔可以根据所选用的化石特征，独立地划分出延限带、间隔带、组合带、富集带或谱系带。
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 04年代地层 -->
      <div class="content-section chrono-stratigraphy" id="chrono-stratigraphy">
        <h2 class="section-title">04年代地层</h2>
        <div class="section-content">
          <div class="definition-section">
            <div class="geo-image-group uniform-height">
              <div class="geo-image-wrapper">
                <img
                  src="@/assets/FeatureRecog/04年代地层/年代地层学.jpg"
                  class="geo-image"
                  alt="年代地层学"
                />
                <div class="geo-image-caption theme-desert">年代地层学</div>
              </div>
            </div>
            <p>
              研究岩石体的相对时间关系及年龄的地层学分支被称为<strong>年代地层学</strong>。
            </p>
            <p>
              <strong>年代地层单位(chronostratigraphic units)</strong
              >是指在一特定的地质时间间隔中形成的所有成层或非成层的综合岩石体。
            </p>
            <p>
              这些单位在年代地层单位等级系列中的级别和相对大小，并不参照其岩石的实际厚度，而是与其岩石所涵盖的时间间隔长短所对应。
            </p>
          </div>

          <div class="boundary-characteristics">
            <h3 class="subsection-title">年代地层界线特征</h3>
            <p>
              年代地层单位的顶、底界线为等时面，亦被称为<strong>年代地层面(年代面)</strong>。形成年代地层单位的地质时间单位称为<strong
                >地质年代单位(geochronologic units)</strong
              >。
            </p>
          </div>

          <div class="unit-hierarchy">
            <h3 class="subsection-title">年代地层单位等级</h3>
            <p>由高到低可将年代地层单位划分为五个级别：</p>
            <ul class="stratigraphic-units">
              <li><strong>宇</strong></li>
              <li><strong>界</strong></li>
              <li><strong>系</strong></li>
              <li><strong>统</strong></li>
              <li><strong>阶</strong></li>
            </ul>
            <p>
              每个年代地层单位都严格对应着地质年代单位，分别为：<strong>宙、代、纪、世、期</strong>。
            </p>
            <div class="geo-image-container">
              <div class="geo-image-wrapper proportional">
                <img
                  src="@/assets/FeatureRecog/04年代地层/年代地层单位表.jpg"
                  class="geo-image"
                  alt="年代地层单位表"
                />
                <div class="geo-image-caption theme-desert">年代地层单位表</div>
              </div>
            </div>
          </div>

          <div class="classification-system">
            <h3 class="subsection-title">年代地层分类系统</h3>
            <p>
              地质学家们根据地壳岩石的年龄及形成时间，进行了年代地层分类。并建立了一个<strong>全球标准年代地层表</strong>。
            </p>
            <p>
              该表是对已定义并命名的年代地层单位进行系统排列的一个完整的等级系列，兼有区域和世界的可应用性。
            </p>
            <div class="geo-image-group uniform-height">
              <div class="geo-image-wrapper">
                <img
                  src="@/assets/FeatureRecog/04年代地层/国际年代地层表（英文版）.jpg"
                  class="geo-image"
                  alt="国际年代地层表（英文版）"
                />
                <div class="geo-image-caption theme-desert">
                  国际年代地层表（英文版）
                </div>
              </div>
              <div class="geo-image-wrapper">
                <img
                  src="@/assets/FeatureRecog/04年代地层/国际年代地层表（中文版）.jpg"
                  class="geo-image"
                  alt="国际年代地层表（中文版）"
                />
                <div class="geo-image-caption theme-desert">
                  国际年代地层表（中文版）
                </div>
              </div>
            </div>
            <div class="importance-note">
              <p>
                全球标准年代地层表作为将所有岩石与地球历史相联系的标准框架，包含了整个地质时代的所有地层，成为了划分地质历史的最重要的依据！
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 05沉积构造 -->
      <div
        class="content-section sedimentary-structures"
        id="sedimentary-structures"
      >
        <h2 class="section-title">05沉积构造</h2>
        <div class="section-content">
          <div class="intro-section">
            <div class="geo-carousel">
              <!-- 轮播容器，使用transform实现滑动效果 -->
              <div class="geo-carousel-track" :style="trackStyle1">
                <div
                  v-for="(slide, index) in carouselSlides1"
                  :key="index"
                  class="geo-slide"
                >
                  <div class="geo-image-wrapper">
                    <img
                      :src="slide.image"
                      class="geo-image"
                      :alt="slide.title"
                    />
                    <div class="geo-image-caption" :class="slide.theme">
                      {{ slide.title }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- 导航控制 -->
              <div class="geo-carousel-controls">
                <button class="geo-carousel-btn prev" @click="prevSlide1">
                  ‹
                </button>
                <div class="geo-carousel-dots">
                  <button
                    v-for="(_, index) in carouselSlides1"
                    :key="index"
                    class="geo-carousel-dot"
                    :class="{ active: currentIndex1 === index }"
                    @click="goToSlide1(index)"
                  ></button>
                </div>
                <button class="geo-carousel-btn next" @click="nextSlide1">
                  ›
                </button>
              </div>
            </div>
            <p>沉积构造是沉积物和沉积岩中最常见的宏观特征之一。</p>
          </div>

          <!-- 分类导航 -->
          <div class="category-nav">
            <button
              v-for="category in categories"
              :key="category.id"
              @click="activeCategory = category.id"
              :class="{ active: activeCategory === category.id }"
            >
              {{ category.name }}
            </button>
          </div>

          <!-- 物理成因构造 -->
          <div
            v-show="activeCategory === 'physical'"
            class="physical-structures"
          >
            <h3 class="subsection-title">（1）物理成因构造</h3>
            <p>
              物理成因的原生沉积构造是由于沉积物在搬运和沉积时以及沉积后不久在流体、重力等因素作用下产生的。包括波痕、层理、侵蚀构造、变形构造等。
            </p>

            <!-- 波痕部分 -->
            <div class="structure-type">
              <h4 class="structure-title" @click="toggleCollapse('ripple')">
                <span class="toggle-icon">{{
                  collapsed.ripple ? "+" : "-"
                }}</span>
                波痕
              </h4>
              <div v-show="!collapsed.ripple">
                <div class="geo-image-container">
                  <div class="geo-image-wrapper proportional">
                    <img
                      src="@/assets/FeatureRecog/05沉积构造/波痕.jpg"
                      class="geo-image"
                      alt="波痕"
                    />
                    <div class="geo-image-caption theme-fluvial">波痕</div>
                  </div>
                </div>
                <p>
                  波痕是非粘性沉积物在水流、波浪或风的作用下形成的一种有规律的波状起伏的表面痕迹。
                </p>
                <p>
                  自然界中的波痕往往成组出现，在平面上表现为一系列近似平行或分叉的波峰和波谷，在剖面中则由起伏相间的峰和谷组成。
                </p>

                <!-- 波痕类型切换 -->
                <div class="ripple-types">
                  <button
                    v-for="type in rippleTypes"
                    :key="type.id"
                    @click="activeRippleType = type.id"
                    :class="{ active: activeRippleType === type.id }"
                  >
                    {{ type.name }}
                  </button>
                </div>

                <!-- 流水波痕 -->
                <div v-show="activeRippleType === 'current'" class="subtype">
                  <h5 class="subtype-title">流水波痕</h5>
                  <p>
                    单向水流作用于非粘性沉积物表面所形成的波痕为流水波痕。其特点是波痕垂直于水流流向延长，横剖面中显示不对称，向流面平缓，背流面较陡。
                  </p>
                  <p>
                    随着水深减小和流速增大，流水波痕的波脊形态由简单平直变得复杂弯曲，由连续变为断续。
                  </p>
                  <div class="geo-image-container">
                    <div class="geo-image-wrapper proportional">
                      <img
                        src="@/assets/FeatureRecog/05沉积构造/流水波痕.jpg"
                        class="geo-image"
                        alt="流水波痕"
                      />
                      <div class="geo-image-caption theme-fluvial">
                        流水波痕
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 浪成波痕 -->
                <div v-show="activeRippleType === 'wave'" class="subtype">
                  <h5 class="subtype-title">浪成波痕</h5>
                  <p>
                    波浪作用于非粘性沉积物表面所产生的波状痕迹为浪成波痕。根据波脊的对称性，浪成波痕可分为对称的和不对称的浪成波痕。
                  </p>
                  <p>
                    控制浪成波痕的形成和规模的因素主要有两个，第一个为波浪的传播速度和波长，第二个因素是沉积物的粒径。
                  </p>
                  <div class="geo-image-container">
                    <div class="geo-image-wrapper proportional">
                      <img
                        src="@/assets/FeatureRecog/05沉积构造/浪成波痕（对称）.jpg"
                        class="geo-image"
                        alt="浪成波痕（对称）"
                      />
                      <div class="geo-image-caption theme-fluvial">
                        浪成波痕（对称）
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 风成波痕 -->
                <div v-show="activeRippleType === 'wind'" class="subtype">
                  <h5 class="subtype-title">风成波痕</h5>
                  <p>
                    风成波痕是指风作用于沉积物表面而形成的一种层面构造。一般具有直、长而平行的脊，形态不对称，部分分叉。
                  </p>
                  <div class="geo-image-container">
                    <div class="geo-image-wrapper proportional">
                      <img
                        src="@/assets/FeatureRecog/05沉积构造/风成波痕.jpg"
                        class="geo-image"
                        alt="风成波痕"
                      />
                      <div class="geo-image-caption theme-fluvial">
                        风成波痕
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 层理部分 -->
            <div class="structure-type">
              <h4 class="structure-title" @click="toggleCollapse('bedding')">
                <span class="toggle-icon">{{
                  collapsed.bedding ? "+" : "-"
                }}</span>
                层理
              </h4>
              <div v-show="!collapsed.bedding">
                <div class="geo-image-container">
                  <div class="geo-image-wrapper proportional">
                    <img
                      src="@/assets/FeatureRecog/05沉积构造/层理.jpg"
                      class="geo-image"
                      alt="层理"
                    />
                    <div class="geo-image-caption theme-fluvial">层理</div>
                  </div>
                </div>
                <p>
                  层理是沉积物成层沉积所产生的构造，系由组成物质的成分、颜色、粒度、形状、排列方向或填集方式等在垂直F沉积表而的方向上的变化显示出来。
                </p>

                <!-- 层理类型切换 -->
                <div class="bedding-types">
                  <button
                    v-for="type in beddingTypes"
                    :key="type.id"
                    @click="activeBeddingType = type.id"
                    :class="{ active: activeBeddingType === type.id }"
                  >
                    {{ type.name }}
                  </button>
                </div>

                <!-- 递变层理 -->
                <div v-show="activeBeddingType === 'graded'" class="subtype">
                  <h5 class="subtype-title">递变层理</h5>
                  <p>
                    递变层理又称粒级层理（粒序层理），是指以组分颗粒的粒度递变为特征的一个沉积单元，层面基本上相互平行，没有交切与交错。除粒度变化之外，一般没有任何内部纹层。
                  </p>
                  <div class="geo-image-container">
                    <div class="geo-image-wrapper proportional">
                      <img
                        src="@/assets/FeatureRecog/05沉积构造/递变层理.jpg"
                        class="geo-image"
                        alt="递变层理"
                      />
                      <div class="geo-image-caption theme-fluvial">
                        递变层理
                      </div>
                    </div>
                  </div>
                  <p>
                    递变层理的递变型式主要有两种。一种是颗粒向上逐渐变细，但下部不含细颗粒，可能是由流速和搬运能力逐渐减小的水流沉积而成的。
                  </p>
                  <p>
                    另一种是细颗粒从底到顶均有分布，粗颗粒向上逐渐减少。这大概是含有各种不同大小颗粒的悬浮体沉积的结果，多数递变层属于此种。
                  </p>
                  <div class="geo-image-container">
                    <div class="geo-image-wrapper proportional">
                      <img
                        src="@/assets/FeatureRecog/05沉积构造/正向递变层理（左）和反向递变层理（右）.jpg"
                        class="geo-image"
                        alt="正向递变层理（左）和反向递变层理（右）"
                      />
                      <div class="geo-image-caption theme-fluvial">
                        正向递变层理（左）和反向递变层理（右）
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 水平层理 -->
                <div
                  v-show="activeBeddingType === 'horizontal'"
                  class="subtype"
                >
                  <h5 class="subtype-title">水平层理</h5>
                  <p>
                    水平层理主要见于细粒的泥岩、细粉砂岩和泥晶灰岩中，由彼此间与层面平行的平直细层所组成。细层可连续或不连续，可因物质成分，有机质含量或颜色不同而显现出来。
                  </p>
                  <p>
                    一般认为水平层理是在比较稳定的水动力条件下，细粒沉积物在静水环境中由垂向加积作用所致，物质从悬浮物或溶液中沉淀而成。
                  </p>
                  <div class="geo-image-container">
                    <div class="geo-image-wrapper proportional">
                      <img
                        src="@/assets/FeatureRecog/05沉积构造/水平层理（南威尔士）.jpg"
                        class="geo-image"
                        alt="水平层理（南威尔士）"
                      />
                      <div class="geo-image-caption theme-fluvial">
                        水平层理（南威尔士）
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 交错层理 -->
                <div v-show="activeBeddingType === 'cross'" class="subtype">
                  <h5 class="subtype-title">交错层理</h5>
                  <p>
                    交错层理由一系列斜交于层系界面的纹层组成，也称为斜层理。斜层系可以彼此重叠、交错、切割的方式组合。
                  </p>
                  <p>
                    这种层理是由沉积介质（水流及风）的流动造成的。当介质具有一定流速时，底床上可产生一系列砂波。
                  </p>
                  <p>
                    砂波顺流移动的结果是，在陡坡加积作用一侧形成了由一系列纹层组成的斜层系。纹层倾向可表示介质流动方向。
                  </p>
                  <div class="geo-image-container">
                    <div class="geo-image-wrapper proportional">
                      <img
                        src="@/assets/FeatureRecog/05沉积构造/交错层理.jpg"
                        class="geo-image"
                        alt="交错层理"
                      />
                      <div class="geo-image-caption theme-fluvial">
                        交错层理
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 平行层理 -->
                <div v-show="activeBeddingType === 'parallel'" class="subtype">
                  <h5 class="subtype-title">平行层理</h5>
                  <p>
                    平行层理是指在较强的水动力条件下，高流态中由平坦的床沙迁移、在床面上连续滚动的沙粒产生粗细分离而显出的水平细层，沿层理面易剥开，在剥开面上可见到剥离线理构造。
                  </p>
                  <p>
                    平行层理一般出现在急流及能量高的环境，如河流、海滩等环境中，常与大型交错层理、底冲刷相伴生。
                  </p>
                  <div class="geo-image-container">
                    <div class="geo-image-wrapper proportional">
                      <img
                        src="@/assets/FeatureRecog/05沉积构造/平行层理.jpg"
                        class="geo-image"
                        alt="平行层理"
                      />
                      <div class="geo-image-caption theme-fluvial">
                        平行层理
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 侵蚀作用部分 -->
            <div class="structure-type">
              <h4 class="structure-title" @click="toggleCollapse('erosion')">
                <span class="toggle-icon">{{
                  collapsed.erosion ? "+" : "-"
                }}</span>
                侵蚀作用
              </h4>
              <div v-show="!collapsed.erosion">
                <div class="geo-image-container">
                  <div class="geo-image-wrapper proportional">
                    <img
                      src="@/assets/FeatureRecog/05沉积构造/侵蚀构造.jpg"
                      class="geo-image"
                      alt="侵蚀构造"
                    />
                    <div class="geo-image-caption theme-fluvial">侵蚀构造</div>
                  </div>
                </div>
                <p>
                  大多数沉积岩层系并不反映稳定、连续的沉积作用，而是沉积作用与侵独作用复杂的相互影响的最终产物。因此由侵蚀作用形成的构造是普遍存在的。
                </p>

                <!-- 侵蚀构造类型切换 -->
                <div class="erosion-types">
                  <button
                    v-for="type in erosionTypes"
                    :key="type.id"
                    @click="activeErosionType = type.id"
                    :class="{ active: activeErosionType === type.id }"
                  >
                    {{ type.name }}
                  </button>
                </div>

                <!-- 冲刷痕 -->
                <div v-show="activeErosionType === 'scour'" class="subtype">
                  <h5 class="subtype-title">冲刷痕</h5>
                  <p>
                    冲刷痕是水流在泥质沉积物层面上流动时，由于水流分离伴生有强大的涡流，导致对沉积物表面产生差异冲蚀的结果。典型的冲刷痕包括槽痕、纵向脊与沟等。
                  </p>
                  <div class="geo-image-container">
                    <div class="geo-image-wrapper proportional">
                      <img
                        src="@/assets/FeatureRecog/05沉积构造/槽模（槽痕被充填）.jpg"
                        class="geo-image"
                        alt="槽模（槽痕被充填）"
                      />
                      <div class="geo-image-caption theme-fluvial">
                        槽模（槽痕被充填）
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 压刻痕 -->
                <div v-show="activeErosionType === 'tool'" class="subtype">
                  <h5 class="subtype-title">压刻痕</h5>
                  <p>
                    压刻痕是水流携带物体在松软的细粒沉积物层面上运动时所刻划出的痕迹。包括沟痕、V形痕和戳痕等。
                  </p>
                  <p>
                    这类层面痕迹在古代沉积物中多以铸型保存在上覆粗粒层的底面上。是浊流沉积的良好标志之一，其指向特征可用于恢复古流向。
                  </p>
                  <div class="geo-image-container">
                    <div class="geo-image-wrapper proportional">
                      <img
                        src="@/assets/FeatureRecog/05沉积构造/浊积层基底（含沟模（沟痕的铸型）和遗迹化石）.jpg"
                        class="geo-image"
                        alt="压刻痕"
                      />
                      <div class="geo-image-caption theme-fluvial">压刻痕</div>
                    </div>
                  </div>
                </div>

                <!-- 细流痕 -->
                <div v-show="activeErosionType === 'rill'" class="subtype">
                  <h5 class="subtype-title">细流痕</h5>
                  <p>
                    细流痕是指当沉积物层面在水退却后露出水面时，从沉积物中不断渗出的薄水层沿自然倾斜表面向下流动，从而在其上侵蚀出各种形状的微细沟槽。
                  </p>
                  <div class="geo-image-container">
                    <div class="geo-image-wrapper proportional">
                      <img
                        src="@/assets/FeatureRecog/05沉积构造/细流痕.jpg"
                        class="geo-image"
                        alt="细流痕"
                      />
                      <div class="geo-image-caption theme-fluvial">细流痕</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 变形构造部分 -->
            <div class="structure-type">
              <h4
                class="structure-title"
                @click="toggleCollapse('deformation')"
              >
                <span class="toggle-icon">{{
                  collapsed.deformation ? "+" : "-"
                }}</span>
                变形构造
              </h4>
              <div v-show="!collapsed.deformation">
                <p>
                  变形构造是沉积物在沉积之后到固结成岩之前，受局部性物理因素的作用而发生不同程度形变所形成的构造，通常限于上、下未变形层之间的一个层内。
                </p>
                <p>
                  导致沉积物变形的作用因素是多种多样的，主要有重力、沉积物液化、超礼隙压力、收缩、破裂、撞击等。
                </p>

                <!-- 变形构造类型切换 -->
                <div class="deformation-types">
                  <button
                    v-for="type in deformationTypes"
                    :key="type.id"
                    @click="activeDeformationType = type.id"
                    :class="{ active: activeDeformationType === type.id }"
                  >
                    {{ type.name }}
                  </button>
                </div>

                <!-- 火焰状构造 -->
                <div v-show="activeDeformationType === 'flame'" class="subtype">
                  <h5 class="subtype-title">火焰状构造</h5>
                  <div class="geo-image-container">
                    <div class="geo-image-wrapper proportional">
                      <img
                        src="@/assets/FeatureRecog/05沉积构造/火焰状构造.jpg"
                        class="geo-image"
                        alt="火焰状构造"
                      />
                      <div class="geo-image-caption theme-fluvial">
                        火焰状构造
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 包卷层理 -->
                <div
                  v-show="activeDeformationType === 'convolute'"
                  class="subtype"
                >
                  <h5 class="subtype-title">包卷层理</h5>
                  <div class="geo-image-wrapper proportional">
                    <img
                      src="@/assets/FeatureRecog/05沉积构造/包卷层理.jpg"
                      class="geo-image"
                      alt="包卷层理"
                    />
                    <div class="geo-image-caption theme-fluvial">包卷层理</div>
                  </div>
                </div>

                <!-- 雨痕 -->
                <div
                  v-show="activeDeformationType === 'raindrop'"
                  class="subtype"
                >
                  <h5 class="subtype-title">雨痕</h5>
                  <div class="geo-image-container">
                    <div class="geo-image-wrapper proportional">
                      <img
                        src="@/assets/FeatureRecog/05沉积构造/雨痕.jpg"
                        class="geo-image"
                        alt="雨痕"
                      />
                      <div class="geo-image-caption theme-fluvial">雨痕</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 化学成因构造... -->
          <div
            v-show="activeCategory === 'chemical'"
            class="chemical-structures"
          >
            <h3 class="subsection-title">（2）化学成因构造</h3>
            <p>
              化学成因构造是指沉积时期和沉积期后由结晶、溶解、沉淀等化学作用在沉积面上或沉积物中所形成的沉积构造。如晶体印痕、鸟眼构造、结核和缝合线等。
            </p>

            <!-- 晶体印痕部分 -->
            <div class="structure-type">
              <h4
                class="structure-title"
                @click="toggleCollapse('crystalImprint')"
              >
                <span class="toggle-icon">{{
                  collapsed.crystalImprint ? "+" : "-"
                }}</span>
                晶体印痕
              </h4>
              <div v-show="!collapsed.crystalImprint">
                <p>
                  在适宜的条件下，冰、盐类等物质在松软的沉积物层面上结晶生长，它们后来由于溶融、溶解而消失，从而在层面上留下其晶体的印痕。
                </p>
                <div class="geo-image-container">
                  <div class="geo-image-wrapper proportional">
                    <img
                      src="@/assets/FeatureRecog/05沉积构造/晶体印痕.jpg"
                      class="geo-image"
                      alt="晶体印痕"
                    />
                    <div class="geo-image-caption theme-fluvial">晶体印痕</div>
                  </div>
                </div>
                <p>
                  如果这类晶体后来被其它物质交代，或者晶体印痕为其它物质充填，就形成晶体假象即假晶。
                </p>
                <div class="geo-image-container">
                  <div class="geo-image-wrapper proportional">
                    <img
                      src="@/assets/FeatureRecog/05沉积构造/石膏假晶.jpg"
                      class="geo-image"
                      alt="石膏假晶"
                    />
                    <div class="geo-image-caption theme-fluvial">石膏假晶</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 鸟眼构造部分 -->
            <div class="structure-type">
              <h4 class="structure-title" @click="toggleCollapse('birdseye')">
                <span class="toggle-icon">{{
                  collapsed.birdseye ? "+" : "-"
                }}</span>
                鸟眼构造
              </h4>
              <div v-show="!collapsed.birdseye">
                <div class="geo-image-group uniform-height">
                  <div class="geo-image-wrapper">
                    <img
                      src="@/assets/FeatureRecog/05沉积构造/鸟眼构造1.jpg"
                      class="geo-image"
                      alt="鸟眼构造1"
                    />
                    <div class="geo-image-caption theme-fluvial">鸟眼构造1</div>
                  </div>
                  <div class="geo-image-wrapper">
                    <img
                      src="@/assets/FeatureRecog/05沉积构造/鸟眼构造2.jpg"
                      class="geo-image"
                      alt="鸟眼构造2"
                    />
                    <div class="geo-image-caption theme-fluvial">鸟眼构造2</div>
                  </div>
                </div>
                <p>
                  鸟眼构造主要发育于泥晶或粉晶石灰岩及白云岩中，由单个或成群的毫米级鸟眼状孔隙被亮晶方解石或石膏等胶结物充填而成。
                </p>
                <p>
                  它们常呈浅色斑点出现在暗色的基底中,如果成群定向排列,则形成筛状、窗格状或网格状构造。
                </p>
                <p>关于鸟眼构造的成因有以下多种说法：</p>
                <div class="geo-image-container">
                  <div class="geo-image-wrapper proportional">
                    <img
                      src="@/assets/FeatureRecog/05沉积构造/鸟眼构造的成因.jpg"
                      class="geo-image"
                      alt="鸟眼构造的成因"
                    />
                    <div class="geo-image-caption theme-fluvial">
                      鸟眼构造的成因
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 结核部分 -->
            <div class="structure-type">
              <h4 class="structure-title" @click="toggleCollapse('nodule')">
                <span class="toggle-icon">{{
                  collapsed.nodule ? "+" : "-"
                }}</span>
                结核
              </h4>
              <div v-show="!collapsed.nodule">
                <p>
                  结核是指在成分、结构、颜色等方面与围岩有显著区别，且与围岩间有明显界面的矿物集合体。
                </p>
                <p>
                  结核的成分有碳酸盐质、锰质、铁质、硅质、磷酸盐质和硫化铁等。形状有球形、椭球形、透镜形或不规则团块状等；大小悬殊，其内部构造也很不一致。
                </p>
                <p>
                  结核常在碎屑岩、粘土岩、碳酸盐岩中成单个或串珠状群体出现。
                </p>
                <div class="geo-image-container">
                  <div class="geo-image-wrapper proportional">
                    <img
                      src="@/assets/FeatureRecog/05沉积构造/结核群（加利福尼亚州）.jpg"
                      class="geo-image"
                      alt="结核群（加利福尼亚州）"
                    />
                    <div class="geo-image-caption theme-fluvial">
                      结核群（加利福尼亚州）
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 缝合线构造部分 -->
            <div class="structure-type">
              <h4 class="structure-title" @click="toggleCollapse('stylolite')">
                <span class="toggle-icon">{{
                  collapsed.stylolite ? "+" : "-"
                }}</span>
                缝合线构造
              </h4>
              <div v-show="!collapsed.stylolite">
                <div class="geo-image-group uniform-height">
                  <div class="geo-image-wrapper">
                    <img
                      src="@/assets/FeatureRecog/05沉积构造/缝合线.jpg"
                      class="geo-image"
                      alt="缝合线"
                    />
                    <div class="geo-image-caption theme-fluvial">缝合线</div>
                  </div>
                  <div class="geo-image-wrapper">
                    <img
                      src="@/assets/FeatureRecog/05沉积构造/缝合线（瑞士）.jpg"
                      class="geo-image"
                      alt="缝合线（瑞士）"
                    />
                    <div class="geo-image-caption theme-fluvial">
                      缝合线（瑞士）
                    </div>
                  </div>
                </div>
                <p>
                  缝合线构造在碳酸盐岩地层中广泛发育，在石英砂岩、硅质岩、盐岩等岩层内也有产出。
                </p>
                <p>
                  它在剖面上表现为连接岩层的两个相邻部分的锯齿状接缝，其中常富集粘土等不溶残余物，在平面上呈参差起伏的表面。
                </p>
                <p>
                  缝合线的起伏幅度变化较大，小者小于1mm，大者可达十几厘米或更大。它的几何形状常见的有简单波曲形、复杂弯曲形、尖齿形、方齿形和震波曲线形。
                </p>
                <div class="geo-image-container">
                  <div class="geo-image-wrapper proportional">
                    <img
                      src="@/assets/FeatureRecog/05沉积构造/缝合线类别.jpg"
                      class="geo-image"
                      alt="缝合线类别"
                    />
                    <div class="geo-image-caption theme-fluvial">
                      缝合线类别
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 生物成因构造... -->
          <div
            v-show="activeCategory === 'biological'"
            class="biological-structures"
          >
            <h3 class="subsection-title">（3）生物成因构造</h3>
            <p>
              生物成因构造指生物由于活动或生长在沉积物表面或内部遗留下来的各种痕迹。包括叠层石构造和遗迹化石等。
            </p>

            <!-- 叠层石部分 -->
            <div class="structure-type">
              <h4
                class="structure-title"
                @click="toggleCollapse('stromatolite')"
              >
                <span class="toggle-icon">{{
                  collapsed.stromatolite ? "+" : "-"
                }}</span>
                叠层石
              </h4>
              <div v-show="!collapsed.stromatolite">
                <div class="geo-image-group uniform-height">
                  <div class="geo-image-wrapper">
                    <img
                      src="@/assets/FeatureRecog/05沉积构造/叠层石（澳大利亚）.jpg"
                      class="geo-image"
                      alt="叠层石（澳大利亚）"
                    />
                    <div class="geo-image-caption theme-fluvial">
                      叠层石（澳大利亚）
                    </div>
                  </div>
                  <div class="geo-image-wrapper">
                    <img
                      src="@/assets/FeatureRecog/05沉积构造/叠层石剖面（加拿大）.jpg"
                      class="geo-image"
                      alt="叠层石剖面（加拿大）"
                    />
                    <div class="geo-image-caption theme-fluvial">
                      叠层石剖面（加拿大）
                    </div>
                  </div>
                </div>
                <p>
                  叠层石是是由藻类在生命活动过程中，将海水中的钙、镁碳酸盐及其碎屑颗粒粘结、沉淀而形成的一种化石。
                </p>
                <p>
                  随着季节的变化、生长沉淀的快慢，形成了叠层石深浅相间的复杂色层构造。这种构造主要有纹层状、球状、半球状、柱状、锥状及枝状等。
                </p>
                <p>
                  在地质年代中，叠层石从古至今均可见及。它几乎出露于世界各地。如在我国，以前寒武纪，主要是中、晚元古宙最为繁盛。
                </p>
              </div>
            </div>

            <!-- 遗迹化石部分 -->
            <div class="structure-type">
              <h4
                class="structure-title"
                @click="toggleCollapse('traceFossil')"
              >
                <span class="toggle-icon">{{
                  collapsed.traceFossil ? "+" : "-"
                }}</span>
                遗迹化石
              </h4>
              <div v-show="!collapsed.traceFossil">
                <p>
                  遗迹化石是指地质历史时期的生物遗留在沉积物表面或沉积物内部的各种生命活动的形迹构造形成的化石。
                </p>
                <p>
                  从沉积学角度来看也可认为遗迹化石是各种生物成因的沉积构造，如各种生物扰动、足迹、移迹、潜穴、粪化石等；以及生物侵蚀构造，如钻孔等。
                </p>
                <p>
                  绝大多数遗迹化石都是原地保存。无论是产生于沉积物表面的足迹、移迹或产生在沉积物内部的潜穴、钻孔，都会随着沉积物的成岩固结作用而保存在原地。
                </p>
                <p>
                  遗迹化石既可以同古生物实体化石共同产生，也可以在缺乏实体化石的地层中产生，具有硬壳的生物可以造成遗迹，缺乏硬体只有软躯体的生物（例如蠕形动物）也可以造成遗迹。
                </p>
                <div class="geo-image-group uniform-height">
                  <div class="geo-image-wrapper">
                    <img
                      src="@/assets/FeatureRecog/05沉积构造/Chirotherium脚印化石（三叠纪）.jpg"
                      class="geo-image"
                      alt="Chirotherium脚印化石（三叠纪）"
                    />
                    <div class="geo-image-caption theme-fluvial">
                      Chirotherium脚印化石（三叠纪）
                    </div>
                  </div>
                  <div class="geo-image-wrapper">
                    <img
                      src="@/assets/FeatureRecog/05沉积构造/爬行痕迹化石（寒武纪）.jpg"
                      class="geo-image"
                      alt="爬行痕迹化石（寒武纪）"
                    />
                    <div class="geo-image-caption theme-fluvial">
                      爬行痕迹化石（寒武纪）
                    </div>
                  </div>
                  <div class="geo-image-wrapper">
                    <img
                      src="@/assets/FeatureRecog/05沉积构造/针管迹化石.jpg"
                      class="geo-image"
                      alt="针管迹化石"
                    />
                    <div class="geo-image-caption theme-fluvial">
                      针管迹化石
                    </div>
                  </div>
                  <div class="geo-image-wrapper">
                    <img
                      src="@/assets/FeatureRecog/05沉积构造/蠕动痕迹化石.jpg"
                      class="geo-image"
                      alt="蠕动痕迹化石"
                    />
                    <div class="geo-image-caption theme-fluvial">
                      蠕动痕迹化石
                    </div>
                  </div>
                  <div class="geo-image-wrapper">
                    <img
                      src="@/assets/FeatureRecog/05沉积构造/钻孔遗迹.jpg"
                      class="geo-image"
                      alt="钻孔遗迹"
                    />
                    <div class="geo-image-caption theme-fluvial">钻孔遗迹</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 06沉积相 -->
      <div class="content-section sedimentary-facies" id="sedimentary-facies">
        <h2 class="section-title">06沉积相</h2>
        <div class="section-content">
          <div class="intro-section">
            <div class="geo-carousel">
              <!-- 轮播容器，使用transform实现滑动效果 -->
              <div class="geo-carousel-track" :style="trackStyle2">
                <div
                  v-for="(slide, index) in carouselSlides2"
                  :key="index"
                  class="geo-slide"
                >
                  <div class="geo-image-wrapper">
                    <img
                      :src="slide.image"
                      class="geo-image"
                      :alt="slide.title"
                    />
                    <div class="geo-image-caption" :class="slide.theme">
                      {{ slide.title }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- 导航控制 -->
              <div class="geo-carousel-controls">
                <button class="geo-carousel-btn prev" @click="prevSlide2">
                  ‹
                </button>
                <div class="geo-carousel-dots">
                  <button
                    v-for="(_, index) in carouselSlides2"
                    :key="index"
                    class="geo-carousel-dot"
                    :class="{ active: currentIndex2 === index }"
                    @click="goToSlide2(index)"
                  ></button>
                </div>
                <button class="geo-carousel-btn next" @click="nextSlide2">
                  ›
                </button>
              </div>
            </div>
            <p>
              "沉积相(sedimentary
              facies)"，是地质学中的一个基本概念。通过研究沉积相，我们可以更清楚地判断沉积时的环境和作用过程。
            </p>
            <p>
              正确识别沉积相，是研究地貌学、地层学以及进行油气勘探开发工作等领域的重要内容。
            </p>
          </div>

          <!-- 分类导航 -->
          <div class="category-nav">
            <button
              v-for="group in faciesGroups"
              :key="group.id"
              @click="currentFaciesGroup = group.id"
              :class="{ active: currentFaciesGroup === group.id }"
            >
              {{ group.name }}
            </button>
          </div>

          <!-- 定义部分 -->
          <div
            v-show="currentFaciesGroup === 'definition'"
            class="definition-section"
          >
            <h3 class="subsection-title">（1）定义</h3>
            <div class="geo-image-group uniform-height">
              <div class="geo-image-wrapper">
                <img
                  src="@/assets/FeatureRecog/06沉积相/丹麦地质学家斯丹诺.jpg"
                  class="geo-image"
                  alt="丹麦地质学家斯丹诺"
                />
                <div class="geo-image-caption theme-desert">
                  丹麦地质学家斯丹诺
                </div>
              </div>
              <div class="geo-image-wrapper">
                <img
                  src="@/assets/FeatureRecog/06沉积相/瑞士地质学家格列斯利.jpg"
                  class="geo-image"
                  alt="瑞士地质学家格列斯利"
                />
                <div class="geo-image-caption theme-desert">
                  瑞士地质学家格列斯利
                </div>
              </div>
            </div>
            <p>
              "相"这一概念最早由丹麦地质学家斯丹诺（Steno，1699）首先引入地质文献。他认为"相是一定地质历史时期中地表某一部分的全貌"。
            </p>
            <p>
              1838年，瑞士地质学家格列斯利（Gressly）在研究欧洲的侏罗纪地层时，首先使用了"沉积相"这个术语，来说明地层在岩石成分上和化石特征上的侧向变化性质。由此开始，"相"逐渐广泛应用于地层学、沉积岩石学及其他地质学科中。
            </p>
            <p>
              自20世纪以来，相的概念随着沉积岩石学（sedimentary
              petrology）、地貌学（geomorphology）等的发展而广为流行。但由于研究者们的侧重点不同，有关相的概念便出现了较大的分歧。
            </p>
            <p>现代地质学中所有关于沉积相的理解可以归纳为以下4种：</p>
            <div class="geo-image-container">
              <div class="geo-image-wrapper proportional">
                <img
                  src="@/assets/FeatureRecog/06沉积相/关于沉积相的理解.jpg"
                  class="geo-image"
                  alt="关于沉积相的理解"
                />
                <div class="geo-image-caption theme-desert">
                  关于沉积相的理解
                </div>
              </div>
            </div>
            <p>
              而目前，有关相的看法较为一致的是：相的概念中应包括沉积环境和沉积特征这两方面的内容，而不应把相简单地理解为环境，更不能把相与地层的概念混淆起来。因此，相的较为完整准确的概念为："沉积环境及在该环境中形成的沉积物（岩）特征的综合"。
            </p>
            <p>
              沉积相分为碎屑岩沉积相和碳酸盐沉积相。由于碎屑岩储集层较常见，因此以介绍碎屑岩沉积相分类为主，可分为陆相组、过渡相组和海相组。
            </p>
            <div class="geo-image-container">
              <div class="geo-image-wrapper proportional">
                <img
                  src="@/assets/FeatureRecog/06沉积相/沉积相的主要分类.jpg"
                  class="geo-image"
                  alt="沉积相的主要分类"
                />
                <div class="geo-image-caption theme-desert">
                  沉积相的主要分类
                </div>
              </div>
            </div>
          </div>

          <!-- 陆相组 -->
          <div
            v-show="currentFaciesGroup === 'continental'"
            class="continental-facies"
          >
            <h3 class="subsection-title">（2）陆相组</h3>

            <!-- 残积相 -->
            <div class="facies-type">
              <h4 class="facies-title" @click="toggleSection('eluvial')">
                <span class="toggle-icon">{{
                  isCollapsed.eluvial ? "+" : "-"
                }}</span>
                残积相
              </h4>
              <div v-show="!isCollapsed.eluvial">
                <p>
                  地表岩石经受风化作用发生物理破坏和化学成分改变后，残留在原地的堆积物，称为残积相（eluvial
                  facies）。沿剖面向下，它逐渐过渡为基岩。
                </p>
                <p>
                  主要由基岩碎屑及铁质、红土质（铁铝质）、粘土质沉积物组成。无分选性，层理也不清楚。由于残积相经常被冲刷，一般分布面积不大，古代的残积相不多见。
                </p>
                <div class="geo-image-container">
                  <div class="geo-image-wrapper proportional">
                    <img
                      src="@/assets/FeatureRecog/06沉积相/风化堆积物.jpg"
                      class="geo-image"
                      alt="风化堆积物"
                    />
                    <div class="geo-image-caption theme-desert">风化堆积物</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 坡积相 -->
            <div class="facies-type">
              <h4 class="facies-title" @click="toggleSection('slope')">
                <span class="toggle-icon">{{
                  isCollapsed.slope ? "+" : "-"
                }}</span>
                坡积相
              </h4>
              <div v-show="!isCollapsed.slope">
                <p>
                  坡积相（slope wash
                  facies）是高地基岩的风化产物，由于雨雪等的作用，借助于重力沿斜坡滚动，堆积在山坡上形成的沉积物。
                </p>
                <p>
                  坡积相主要由砂砾岩、粉砂岩等组成，碎屑物分选差，呈棱角状，常具与斜坡平行的层理。
                </p>
                <div class="geo-image-container">
                  <div class="geo-image-wrapper proportional">
                    <img
                      src="@/assets/FeatureRecog/06沉积相/坡积堆积物.jpg"
                      class="geo-image"
                      alt="坡积堆积物"
                    />
                    <div class="geo-image-caption theme-desert">坡积堆积物</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 沙漠相 -->
            <div class="facies-type">
              <h4 class="facies-title" @click="toggleSection('desert')">
                <span class="toggle-icon">{{
                  isCollapsed.desert ? "+" : "-"
                }}</span>
                沙漠相
              </h4>
              <div v-show="!isCollapsed.desert">
                <p>
                  沙漠相（desert
                  facies）是陆相沉积类型之一，是在沙漠地区形成的沉积物。
                </p>
                <p>
                  沙漠相按成因可划分为岩漠沉积物、戈壁沉积物、风成沙沉积物、旱谷沉积物、沙漠湖及内陆盐碱滩沉积物等。
                </p>
                <p>
                  其中风成沙是沙漠环境的最主要沉积物，它的特征是分选好，风成交错层理（巨型板状或槽状交错层理）广泛发育，生物化石稀少（尤其是植物化石），有时在分选差的粗粒砂岩中可找到风棱石。
                </p>
                <div class="geo-image-group uniform-height">
                  <div class="geo-image-wrapper">
                    <img
                      src="@/assets/FeatureRecog/06沉积相/沙漠.jpg"
                      class="geo-image"
                      alt="沙漠"
                    />
                    <div class="geo-image-caption theme-desert">沙漠</div>
                  </div>
                  <div class="geo-image-wrapper">
                    <img
                      src="@/assets/FeatureRecog/06沉积相/风棱石.jpg"
                      class="geo-image"
                      alt="风棱石"
                    />
                    <div class="geo-image-caption theme-desert">风棱石</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 冰川相 -->
            <div class="facies-type">
              <h4 class="facies-title" @click="toggleSection('glacial')">
                <span class="toggle-icon">{{
                  isCollapsed.glacial ? "+" : "-"
                }}</span>
                冰川相
              </h4>
              <div v-show="!isCollapsed.glacial">
                <p>
                  冰川相（glacial
                  facies）是陆相沉积类型之一，是由冰川作用堆积形成的沉积物，形成于年平均温度很低的地区。
                </p>
                <p>
                  冰川相又可细分为冰碛相、冰湖相等。冰碛相主要由碎屑岩组成，碎屑呈尖角状,分选差，在巨大的砾块上有冰川擦痕。
                </p>
                <p>
                  冰水相由碎屑岩及粘土岩组成，碎屑物具有一定程度的分选，有时还具斜层理。冰湖相则由粘土岩和粉砂岩组成，具带状构造，因此也称"纹泥"。
                </p>
                <div class="geo-image-group uniform-height">
                  <div class="geo-image-wrapper">
                    <img
                      src="@/assets/FeatureRecog/06沉积相/冰川.jpg"
                      class="geo-image"
                      alt="冰川"
                    />
                    <div class="geo-image-caption theme-desert">冰川</div>
                  </div>
                  <div class="geo-image-wrapper">
                    <img
                      src="@/assets/FeatureRecog/06沉积相/冰碛褶皱.jpg"
                      class="geo-image"
                      alt="冰碛褶皱"
                    />
                    <div class="geo-image-caption theme-desert">冰碛褶皱</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 冲积扇相 -->
            <div class="facies-type">
              <h4 class="facies-title" @click="toggleSection('alluvial')">
                <span class="toggle-icon">{{
                  isCollapsed.alluvial ? "+" : "-"
                }}</span>
                冲积扇相
              </h4>
              <div v-show="!isCollapsed.alluvial">
                <div class="geo-image-container">
                  <div class="geo-image-wrapper proportional">
                    <img
                      src="@/assets/FeatureRecog/06沉积相/冲积扇.jpg"
                      class="geo-image"
                      alt="冲积扇"
                    />
                    <div class="geo-image-caption theme-desert">冲积扇</div>
                  </div>
                </div>
                <p>
                  冲积扇是山地河流出口处的堆积地貌。山地河流流过山麓后，因坡度变缓，流速降低，河道变宽，河水携带的砂石大量堆积，使河床抬高，因此河流不断变迁改道，或分成多股水流，形成一个延伸很广，坡度较缓的台地，外形如同折扇。
                </p>
                <p>
                  根据现代冲积扇地貌及沉积物的分布特征，可将冲积扇相划分成扇根(顶)、扇中和扇缘(端)3个亚相，它们之间没有明显的界线。此外，在扇与扇之间，还存在着扇间地带。
                </p>
              </div>
            </div>

            <!-- 河流相 -->
            <div class="facies-type">
              <h4 class="facies-title" @click="toggleSection('fluvial')">
                <span class="toggle-icon">{{
                  isCollapsed.fluvial ? "+" : "-"
                }}</span>
                河流相
              </h4>
              <div v-show="!isCollapsed.fluvial">
                <p>
                  河流相（fluvial
                  facies）属陆相沉积类型。是由河流或其它径流作用形成的一套沉积物或沉积岩。
                </p>
                <p>
                  它的亚相类型主要有：谷底滞流沉积、边滩沉积、心滩沉积、天然堤沉积、决口扇沉积、河漫滩沉积、废弃河道填谷沉积等等。
                </p>
                <p>
                  古代河流沉积的主要标志主要为：岩石由砾砂、粉砂、粘土等碎屑沉积物组成，成分成熟度低，常见底部冲刷面，其上有泥砾；
                </p>
                <p>
                  分选性差到中等，粒度分布多双峰态，粒度概率图显两段式；层理类型多样，以反映单向水流的大型槽状和板状交错层理为特征，波痕不对称，可见砾石呈迭瓦状排列；
                </p>
                <p>
                  具明显的间断正韵律，砂体呈透镜状，平面上沿水流方向呈弯曲的带状分布。
                </p>
                <div class="geo-image-group uniform-height">
                  <div class="geo-image-wrapper">
                    <img
                      src="@/assets/FeatureRecog/06沉积相/河流.jpg"
                      class="geo-image"
                      alt="河流"
                    />
                    <div class="geo-image-caption theme-desert">河流</div>
                  </div>
                  <div class="geo-image-wrapper">
                    <img
                      src="@/assets/FeatureRecog/06沉积相/河流沉积.jpg"
                      class="geo-image"
                      alt="河流沉积"
                    />
                    <div class="geo-image-caption theme-desert">河流沉积</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 湖泊相 -->
            <div class="facies-type">
              <h4 class="facies-title" @click="toggleSection('lacustrine')">
                <span class="toggle-icon">{{
                  isCollapsed.lacustrine ? "+" : "-"
                }}</span>
                湖泊相
              </h4>
              <div v-show="!isCollapsed.lacustrine">
                <div class="geo-image-group uniform-height">
                  <div class="geo-image-wrapper">
                    <img
                      src="@/assets/FeatureRecog/06沉积相/湖泊.jpg"
                      class="geo-image"
                      alt="湖泊"
                    />
                    <div class="geo-image-caption theme-desert">湖泊</div>
                  </div>
                  <div class="geo-image-wrapper">
                    <img
                      src="@/assets/FeatureRecog/06沉积相/湖泊亚相划分示意图.jpg"
                      class="geo-image"
                      alt="湖泊亚相划分示意图"
                    />
                    <div class="geo-image-caption theme-desert">
                      湖泊亚相划分示意图
                    </div>
                  </div>
                </div>
                <p>湖泊是大陆上地形相对低洼和流水汇集的地区。</p>
                <p>
                  根据洪水面、枯水面和浪基面，把湖泊相（lacustrine
                  facies）划分为滨湖亚相、浅湖亚相、半深湖亚相和深湖亚相，平面上它们大致呈环带状分布，另外，还可划分出湖湾亚相。
                </p>
              </div>
            </div>

            <!-- 沼泽相 -->
            <div class="facies-type">
              <h4 class="facies-title" @click="toggleSection('swamp')">
                <span class="toggle-icon">{{
                  isCollapsed.swamp ? "+" : "-"
                }}</span>
                沼泽相
              </h4>
              <div v-show="!isCollapsed.swamp">
                <div class="geo-image-group uniform-height">
                  <div class="geo-image-wrapper">
                    <img
                      src="@/assets/FeatureRecog/06沉积相/沼泽相.jpg"
                      class="geo-image"
                      alt="沼泽相"
                    />
                    <div class="geo-image-caption theme-desert">沼泽相</div>
                  </div>
                  <div class="geo-image-wrapper">
                    <img
                      src="@/assets/FeatureRecog/06沉积相/湖岸浅水区沼泽.jpg"
                      class="geo-image"
                      alt="湖岸浅水区沼泽"
                    />
                    <div class="geo-image-caption theme-desert">
                      湖岸浅水区沼泽
                    </div>
                  </div>
                </div>
                <p>
                  沼泽相（swamp
                  facies）是在沼泽环境形成的沉积物。地质历史中沼泽发育的主要时代是石炭纪、侏罗纪等。
                </p>
                <p>
                  当时气候温暖潮湿，沼泽中植物丛生，有大量的泥炭堆积。泥炭埋藏在地下，经煤化作用转变为煤，所以煤成为古代沼泽相的主要成分。
                </p>
              </div>
            </div>
          </div>

          <!-- 过渡相组 -->
          <div
            v-show="currentFaciesGroup === 'transitional'"
            class="transitional-facies"
          >
            <h3 class="subsection-title">（3）过渡相组</h3>

            <!-- 三角洲相 -->
            <div class="facies-type">
              <h4 class="facies-title" @click="toggleSection('delta')">
                <span class="toggle-icon">{{
                  isCollapsed.delta ? "+" : "-"
                }}</span>
                三角洲相
              </h4>
              <div v-show="!isCollapsed.delta">
                <div class="geo-image-group uniform-height">
                  <div class="geo-image-wrapper">
                    <img
                      src="@/assets/FeatureRecog/06沉积相/恒河三角洲.jpg"
                      class="geo-image"
                      alt="恒河三角洲"
                    />
                    <div class="geo-image-caption theme-desert">恒河三角洲</div>
                  </div>
                  <div class="geo-image-wrapper">
                    <img
                      src="@/assets/FeatureRecog/06沉积相/三角洲.jpg"
                      class="geo-image"
                      alt="三角洲"
                    />
                    <div class="geo-image-caption theme-desert">三角洲</div>
                  </div>
                </div>
                <p>
                  三角洲相（delta
                  facies）是海陆过渡相组的重要组成部分，指河流与海盆(或与湖泊)的汇合处形成的大型锥状沉积物堆积体。
                </p>
                <p>
                  在河流入海(或入湖)
                  盆地的河口区，因坡度减缓，水流扩散，流速降低，遂将携带的泥沙沉积于此，形成近于顶尖向陆的三角形沉积体，规模可自数平方千米到几千平方千米。
                </p>
                <p>
                  依据河流汇入的蓄水体盆地性质的不同，有海洋三角洲和湖泊三角洲之分。
                </p>
              </div>
            </div>

            <!-- 河口湾相 -->
            <div class="facies-type">
              <h4 class="facies-title" @click="toggleSection('estuary')">
                <span class="toggle-icon">{{
                  isCollapsed.estuary ? "+" : "-"
                }}</span>
                河口湾相
              </h4>
              <div v-show="!isCollapsed.estuary">
                <div class="geo-image-group uniform-height">
                  <div class="geo-image-wrapper">
                    <img
                      src="@/assets/FeatureRecog/06沉积相/河口地区.jpg"
                      class="geo-image"
                      alt="河口地区"
                    />
                    <div class="geo-image-caption theme-desert">河口地区</div>
                  </div>
                  <div class="geo-image-wrapper">
                    <img
                      src="@/assets/FeatureRecog/06沉积相/河口地区图.jpg"
                      class="geo-image"
                      alt="河口地区图"
                    />
                    <div class="geo-image-caption theme-desert">河口地区图</div>
                  </div>
                </div>
                <p>
                  河口湾相属于海陆过渡相组。在构造沉降幅度大的海岸地区，一般都为潮汐作用很强的高潮差区，在此类海岸的河口地区，受潮汐和河流两个因素的作用。
                </p>
                <p>
                  当河流泥沙供应不足时并不形成三角洲，而是形成喇叭形的河口湾（
                  estuary），又因其形似三角形故又叫三角港。主要由上三角洲平原(无潮汐作用)、下三角洲平原(潮间泥坪)、分流河道、潮道、潮汐沙坝等组成。
                </p>
              </div>
            </div>
          </div>

          <!-- 海相组 -->
          <div v-show="currentFaciesGroup === 'marine'" class="marine-facies">
            <h3 class="subsection-title">（4）海相组</h3>

            <!-- 滨岸相 -->
            <div class="facies-type">
              <h4 class="facies-title" @click="toggleSection('shore')">
                <span class="toggle-icon">{{
                  isCollapsed.shore ? "+" : "-"
                }}</span>
                滨岸相
              </h4>
              <div v-show="!isCollapsed.shore">
                <div class="geo-image-group uniform-height">
                  <div class="geo-image-wrapper">
                    <img
                      src="@/assets/FeatureRecog/06沉积相/意大利威尼斯泻湖.jpg"
                      class="geo-image"
                      alt="意大利威尼斯泻湖"
                    />
                    <div class="geo-image-caption theme-desert">
                      意大利威尼斯泻湖
                    </div>
                  </div>
                  <div class="geo-image-wrapper">
                    <img
                      src="@/assets/FeatureRecog/06沉积相/障壁岛.jpg"
                      class="geo-image"
                      alt="障壁岛"
                    />
                    <div class="geo-image-caption theme-desert">障壁岛</div>
                  </div>
                </div>
                <p>
                  滨岸相（Shore
                  facies）又称海岸相，是海相的亚相之一。滨岸指海水波浪基准面之上，紧邻陆地的滨浅海地带，包括潮上带、潮间带和潮下带。
                </p>
                <p>
                  这一地带的水动力条件、水化学状况及海洋地貌均较复杂。主要由于波浪作用和潮汐作用，形成海岸相的各种沉积体，其中重要的有海滩、堤岛、泻湖、潮坪等沉积类型。
                </p>
                <p>
                  根据有无障壁性地形的存在，海岸类型可划分为两类：无障壁海岸和障壁海岸。根据沉积物的性质又可进一步分为陆源碎屑沉积海岸及碳酸盐沉积海岸。
                </p>
              </div>
            </div>

            <!-- 浅海陆棚相 -->
            <div class="facies-type">
              <h4 class="facies-title" @click="toggleSection('shelf')">
                <span class="toggle-icon">{{
                  isCollapsed.shelf ? "+" : "-"
                }}</span>
                浅海陆棚相
              </h4>
              <div v-show="!isCollapsed.shelf">
                <div class="geo-image-container">
                  <div class="geo-image-wrapper proportional">
                    <img
                      src="@/assets/FeatureRecog/06沉积相/浅海陆棚相.jpg"
                      class="geo-image"
                      alt="浅海陆棚相"
                    />
                    <div class="geo-image-caption theme-desert">浅海陆棚相</div>
                  </div>
                </div>
                <p>
                  浅海陆棚相（shallow sea shelf
                  facies）与滨岸相相邻，即从近滨的外侧至大陆坡内侧的广阔陆棚区，宽度由数公里至百公里。
                </p>
                <p>
                  古代浅海陆棚相是长期地质发展的沉积产物，沉积厚度大，分布面积广。浅海陆棚相可划分为过渡带及滨外陆棚两个亚相，但有时难以分出过渡带。
                </p>
                <p>
                  古代滨外陆棚主要为粘土—粉砂沉积，砂砾较小，常有大量化学岩及生物化学岩，如碳酸盐岩及部分铁、锰、铝、磷沉积岩等。
                </p>
              </div>
            </div>

            <!-- 半深海相 -->
            <div class="facies-type">
              <h4 class="facies-title" @click="toggleSection('bathyal')">
                <span class="toggle-icon">{{
                  isCollapsed.bathyal ? "+" : "-"
                }}</span>
                半深海相
              </h4>
              <div v-show="!isCollapsed.bathyal">
                <div class="geo-image-container">
                  <div class="geo-image-wrapper proportional">
                    <img
                      src="@/assets/FeatureRecog/06沉积相/半深海相.jpg"
                      class="geo-image"
                      alt="半深海相"
                    />
                    <div class="geo-image-caption theme-desert">半深海相</div>
                  </div>
                </div>
                <p>
                  半深海相（bathyal facies）形成于大陆坡（continental
                  slope），海水深度200～2000米或3000米，指大陆斜坡环境中沉积物质的总特征。
                </p>
                <p>
                  半深海相的沉积物中泥质沉积占多数。从沉积作用的机理上看，半深海相的碎屑沉积主要是重力流成因，在沉积层序中保留着由重力流沉积作用而造成的结构、构造特征。
                </p>
                <p>
                  大陆坡上常发育有海底峡谷，它是重力流沉积物进入洋底的通道，在峡谷中及其附近可发育滑塌沉积及泥石流沉积。
                </p>
              </div>
            </div>

            <!-- 深海相 -->
            <div class="facies-type">
              <h4 class="facies-title" @click="toggleSection('abyssal')">
                <span class="toggle-icon">{{
                  isCollapsed.abyssal ? "+" : "-"
                }}</span>
                深海相
              </h4>
              <div v-show="!isCollapsed.abyssal">
                <div class="geo-image-group uniform-height">
                  <div class="geo-image-wrapper">
                    <img
                      src="@/assets/FeatureRecog/06沉积相/深海相.jpg"
                      class="geo-image"
                      alt="深海相"
                    />
                    <div class="geo-image-caption theme-desert">深海相</div>
                  </div>
                  <div class="geo-image-wrapper">
                    <img
                      src="@/assets/FeatureRecog/06沉积相/浊积岩.jpg"
                      class="geo-image"
                      alt="浊积岩"
                    />
                    <div class="geo-image-caption theme-desert">浊积岩</div>
                  </div>
                </div>
                <p>
                  深海相（abyssal facies
                  ）是海相沉积类型之一。形成于大洋底部，海水深度>2000--3000米。海深相中的主要沉积物是含抱球虫的石灰质软泥、含硅藻和放射虫的硅质软泥、红色软泥等。
                </p>
                <p>
                  近年来由于海洋地质学的迅速发展，逐渐揭开了深海沉积的秘密。许多资料证实，由于浊流沉积作用，在深海中沉积有厚度大面积广的浊积岩。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 07河流相 -->
      <div class="content-section river-facies" id="river-facies">
        <h2 class="section-title">07河流相</h2>
        <div class="section-content">
          <div class="intro-section">
            <div class="geo-image-container">
              <div class="geo-image-wrapper proportional">
                <img
                  src="@/assets/FeatureRecog/07河流相/河流.jpg"
                  class="geo-image"
                  alt="河流"
                />
                <div class="geo-image-caption theme-marine">河流</div>
              </div>
            </div>
            <p>
              河流是陆地表面上经常或间歇有水流动的线形天然水道。是陆地上最活跃,最有生气的侵蚀、搬运和沉积地质营力。
            </p>
            <p>
              河流沿途接纳众多支流，并形成复杂的干支流网络系统，即为水系。通常可分为树枝状水系、扇形水系和格子状水系等。
            </p>
          </div>

          <!-- River Type Navigation -->
          <div class="river-type-nav">
            <button
              v-for="type in riverTypes"
              :key="type.id"
              @click="activeRiverType = type.id"
              :class="{ active: activeRiverType === type.id }"
            >
              {{ type.name }}
            </button>
          </div>

          <!-- River Basics -->
          <div v-show="activeRiverType === 'basics'" class="river-basics">
            <h3 class="subsection-title">（1）河流</h3>

            <div class="river-characteristics">
              <div
                class="characteristic-card"
                v-for="(item, index) in riverCharacteristics"
                :key="index"
              >
                <h4>{{ item.title }}</h4>
                <p>{{ item.content }}</p>
              </div>
            </div>

            <div class="river-classification">
              <h4>河流分类</h4>
              <div class="classification-tabs">
                <button
                  v-for="tab in classificationTabs"
                  :key="tab.id"
                  @click="activeClassificationTab = tab.id"
                  :class="{ active: activeClassificationTab === tab.id }"
                >
                  {{ tab.name }}
                </button>
              </div>

              <div
                v-show="activeClassificationTab === 'topography'"
                class="classification-content"
              >
                <p>按照地形及坡降，可将河流分为山区河流和平原河流。</p>
              </div>

              <div
                v-show="activeClassificationTab === 'development'"
                class="classification-content"
              >
                <p>
                  按河流发育阶段，又可分为幼年期、壮年期、老年期河流。同一河系，上游可属幼年期，中游属壮年期，下游则属老年期。
                </p>
              </div>

              <div
                v-show="activeClassificationTab === 'rust'"
                class="classification-content"
              >
                <p>
                  根据拉斯特(Rust,1978)的划分方案，河流被分为顺直河、曲流河、辫状河、网状河四种类型。
                </p>
                <p>
                  该方案目前最被认可，其中以曲流河和辫状河分布最广，而顺直河和网状河较少见。
                </p>
              </div>
            </div>
          </div>

          <!-- Meandering River -->
          <div
            v-show="activeRiverType === 'meandering'"
            class="meandering-river"
          >
            <h3 class="subsection-title">曲流河沉积</h3>
            <div class="subfacies-section">
              <div class="geo-image-container">
                <div class="geo-image-wrapper proportional">
                  <img
                    src="@/assets/FeatureRecog/07河流相/曲流河.jpg"
                    class="geo-image"
                    alt="曲流河"
                  />
                  <div class="geo-image-caption theme-marine">曲流河</div>
                </div>
              </div>
              <h4>
                根据次一级环境及其沉积物特征的不同，曲流河主要亚环境类型可分为：
              </h4>
              <div class="subfacies-tabs">
                <button
                  v-for="subfacies in meanderingSubfacies"
                  :key="subfacies.id"
                  @click="activeSubfacies = subfacies.id"
                  :class="{ active: activeSubfacies === subfacies.id }"
                >
                  {{ subfacies.name }}
                </button>
              </div>

              <!-- Channel Subfacies -->
              <div
                v-show="activeSubfacies === 'channel'"
                class="subfacies-content"
              ></div>
              <p>
                河床亚相主要包括河床滞留沉积和边滩沉积两个微相。河床中流水的选择性搬运，使细粒物质被悬浮和带走，而将上游搬来的或就近侧向侵蚀河岸形成的砾石等粗碎屑物质留在河床底部，集中堆积成不连续的透镜体，为河床滞留沉积。
              </p>
              <p>
                边滩（点砂坝、曲流砂坝）（point
                bar）沉积是曲流河中最重要的砂体类型。河水在前进过程中不断对外岸进行冲刷，又由于横向环流将河流中搬运物带至内岸沉积下来，形成了以侧向加积为主的沉积特征。
              </p>
              <p>
                边滩下部靠近河心处，沉积颗粒较粗（以砂粒为主）；上部远离河心，沉积物较细。边滩厚度近似于河床深度，河道宽、弯曲度大，边滩发育越宽阔，反之亦然。
              </p>
              <div class="geo-image-container">
                <div class="geo-image-wrapper proportional">
                  <img
                    src="@/assets/FeatureRecog/07河流相/边滩.jpg"
                    class="geo-image"
                    alt="边滩"
                  />
                  <div class="geo-image-caption theme-marine">边滩</div>
                </div>
              </div>

              <!-- Levee Subfacies -->
              <div
                v-show="activeSubfacies === 'levee'"
                class="subfacies-content"
              >
                <p>
                  堤岸亚相作为河流相的顶层沉积，垂向上发育在河床沉积的上部。其岩石粒度较细，类型简单，以小型交错层理为主。主要包括的微相为天然堤和决口扇。
                </p>
                <p>
                  天然堤（Natural
                  levee）是由于洪水期河水漫越河岸，当河水流速降低时，携带的大量悬浮物质在岸边很快沉积下来所形成。
                </p>
                <p>
                  天然堤主要分布于曲流河道两岸，沉积物粒度细于边滩，粗于河漫滩，内部主要发育小波痕交错层理和槽状交错层理等。顶面代表了最大洪水期所到达的水位高度。
                </p>
                <p>
                  在高水位时，洪水冲决天然堤，在堤岸靠平原方向的斜坡上形成树枝状水系的扇状堆积物，即决口扇（Crevasse
                  splay）。决口扇沉剖面上呈透镜体状，厚度一般从十几厘米到几米，粒度常比与之相连的堤岸沉积要粗。
                </p>
                <div class="subfacies-section">
              <div class="geo-image-container">
                <div class="geo-image-wrapper proportional">
                  <img
                    src="@/assets/FeatureRecog/07河流相/天然堤.jpg"
                    class="geo-image"
                    alt="天然堤"
                  />
                  <div class="geo-image-caption theme-marine">天然堤</div>
                </div>
              </div>
              </div>

              <!-- Floodplain Subfacies -->
              <div
                v-show="activeSubfacies === 'floodplain'"
                class="subfacies-content"
              >
                <p>
                  河漫亚相位于天然堤外侧，地势低洼、平坦，洪水泛滥期间，水流漫溢天然堤，流速降低，使河流悬浮沉积物大量堆积。
                </p>
                <p>
                  根据其沉积环境和沉积特征，河漫亚相可进一步划分为河漫滩、河漫湖泊和河漫沼泽三个沉积微相。
                </p>
                <p>
                  其中，河漫滩（floodplain）作为曲流河沉积体系中重要的部分，是河床外广阔的滩地，平水期无水，洪水期被水港没。
                </p>
                <p>
                  特点是其沉积物二元结构鲜明，下部由较粗大的河床冲积物（主要为粗砂和砾石）组成，上部由洪水泛滥时沉积的较细的河漫滩堆积物（主要是细砂和粘土）组成。
                </p>
              </div>

              <!-- Oxbow Subfacies -->
              <div
                v-show="activeSubfacies === 'oxbow'"
                class="subfacies-content"
              >
                <p>
                  牛轭湖亚相（Oxbow
                  lake）属废弃河道沉积。曲流河道在发育过程中，由于截直作用或冲裂作用，可以使某一段河道或整个河道废弃，从而形成牛轭湖沉积或废弃河道沉积。
                </p>
              </div>
            </div>
          </div>

          <!-- Braided and Anastomosed Rivers -->
          <div v-show="activeRiverType === 'braided'" class="braided-river">
            <h3 class="subsection-title">（3）辫状河和网状河沉积</h3>

            <div class="comparison-section">
              <div class="river-comparison">
                <div class="comparison-tabs">
                  <button
                    v-for="river in comparisonRivers"
                    :key="river.id"
                    @click="activeComparisonRiver = river.id"
                    :class="{ active: activeComparisonRiver === river.id }"
                  >
                    {{ river.name }}
                  </button>
                </div>

                <!-- Braided River -->
                <div
                  v-show="activeComparisonRiver === 'braided'"
                  class="comparison-content"
                >
                  <p>
                    辫状河（ braided
                    river）的河道宽而浅，频繁迁移，游荡不定，也称作游荡性河道。
                  </p>
                  <p>
                    辫状河具有的强烈侵蚀性和快速迁移性，一旦发生决口，河道便直接改道，堤岸沉积和决口扇沉积很难被保存下来。
                  </p>
                  <p>
                    心滩（ mid-channel
                    bar）是辫状河河道中的标志性地貌单元。狭义的心滩是指在正常情况下（平水季节）露出水面的河心洲（滩、岛）。
                  </p>
                  <p>
                    广义的心滩则是泛指辫状河河道内的所有一定规模的正向地貌单元，即包括河心洲在内的各类砂坝：纵向砂坝（Longitudinal
                    bar）、横向砂坝（Transverse bar）、斜列砂坝（Diagonal
                    bar）。
                  </p>
                </div>

                <!-- Anastomosed River -->
                <div
                  v-show="activeComparisonRiver === 'anastomosed'"
                  class="comparison-content"
                >
                  <p>
                    网状河（anastomosed
                    river）是多河道高弯度河流，一般来说其河道坡度小，水流能量低，河流的侧向迁移能力弱。因此沉积环境较稳定，各沉积相在垂向上增生、叠加。
                  </p>
                  <p>就网状河的沉积环境来说可分为河道沉积和湿地沉积。</p>
                  <p>
                    河道沉积沉积物以砂为主，结构以跳跃组分为主，构造上具有槽状交错层理，平面上呈带状、网状，剖面上砂体厚、窄，呈多层叠置的透镜状。
                  </p>
                  <p>
                    湿地沉积物以富含泥炭的粉砂、粘土为主，类似于沼泽的沉积环境。整体上网状河具有"泥包砂"的沉积特征。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 08三角洲相 -->
      <div class="content-section delta-facies" id="delta-facies">
        <h2 class="section-title">08三角洲相</h2>
        <div class="section-content">
          <div class="intro-section">
            <p>
              三角洲——河流的最佳杰作之一，有着广阔的面积，土层深厚，水网密布，是最常见的地表形貌。
            </p>
          </div>

          <!-- 导航标签 -->
          <div class="river-type-nav">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              @click="activeTab = tab.id"
              :class="{ active: activeTab === tab.id }"
            >
              {{ tab.name }}
            </button>
          </div>

          <!-- 形成过程 -->
          <div v-show="activeTab === 'formation'" class="river-basics">
            <h3 class="subsection-title">（1）形成</h3>

            <div class="river-characteristics">
              <div class="characteristic-card">
                <p>
                  "三角洲"这个术语源自希腊字母"Δ"(delta)
                  ，最早被古希腊人用于描述尼罗河三角洲沉积体的陆表形态。
                </p>
                <p>
                  而三角洲的现代定义是由巴雷尔(1912)提出的，他认为"三角洲是河流在一个稳定的水体中或紧靠水体处形成的、部分露出水面的一种沉积物"。
                </p>
              </div>

              <div class="characteristic-card definition-box">
                <h4>此定义主要包括了如下四个方面的含义：</h4>
                <ol>
                  <li>三角洲沉积物来源于一个或几个可确定的点物源；</li>
                  <li>三角洲以进积结构为特征；</li>
                  <li>管三角洲能最终充填盆地，但它们都发育于盆地周缘；</li>
                  <li>
                    因河流提供了进入盆地的物源；所以三角洲最大沉积位置受到限制。
                  </li>
                </ol>
              </div>
            </div>

            <!-- 形成过程折叠面板 -->
            <div class="formation-process">
              <div
                class="process-step"
                v-for="step in formationSteps"
                :key="step.id"
                @click="toggleStep(step.id)"
              >
                <div class="step-header">
                  <h4>{{ step.title }}</h4>
                  <span class="step-toggle">{{
                    expandedSteps[step.id] ? "−" : "+"
                  }}</span>
                </div>
                <div v-show="expandedSteps[step.id]" class="step-content">
                  <p v-for="(paragraph, idx) in step.content" :key="idx">
                    {{ paragraph }}
                  </p>
                </div>
              </div>
            </div>

            <div class="factor-box">
              <h4>三角洲形成影响因素：</h4>
              <ul>
                <li>河流的作用</li>
                <li>蓄水体密度与河水密度差异</li>
                <li>蓄水体的水动力条件</li>
                <li>河口区海底地形</li>
                <li>蓄水盆地的构造特征</li>
              </ul>
            </div>
          </div>

          <!-- 河流、波浪、潮汐 -->
          <div v-show="activeTab === 'types'" class="river-types">
            <h3 class="subsection-title">（2）河流、波浪、潮汐</h3>

            <div class="type-selector">
              <button
                v-for="type in deltaTypes"
                :key="type.id"
                @click="activeDeltaType = type.id"
                :class="{ active: activeDeltaType === type.id }"
              >
                {{ type.name }}
              </button>
            </div>

            <!-- 河控三角洲 -->
            <div
              v-show="activeDeltaType === 'river'"
              class="delta-type-content"
            >
              <div class="river-characteristics">
                <div class="characteristic-card">
                  <h4>河控三角洲（river-dominated delta）</h4>
                  <p>
                    是在河流输入泥沙量大，波浪、潮汐作用较弱，河流建设作用远超波浪和潮沙破坏作用的条件下形成的。
                  </p>
                </div>
              </div>

              <div class="subtype-selector">
                <button
                  v-for="subtype in riverSubtypes"
                  :key="subtype.id"
                  @click="activeRiverSubtype = subtype.id"
                  :class="{ active: activeRiverSubtype === subtype.id }"
                >
                  {{ subtype.name }}
                </button>
              </div>

              <div class="subtype-content">
                <div
                  v-show="activeRiverSubtype === 'elongate'"
                  class="characteristic-card"
                >
                  <h4>长形（鸟足状）三角洲</h4>
                  <p>是以河流作用为主的极端类型，是最典型的高建设性三角洲。</p>
                </div>

                <div
                  v-show="activeRiverSubtype === 'lobate'"
                  class="characteristic-card"
                >
                  <h4>朵叶状三角洲</h4>
                  <p>
                    形态呈向海突出的朵状或半圆状。与鸟足状三角洲相比，此类三角洲在形成时泥砂输入量相对较少，砂/泥比值较高。
                  </p>
                  <p>
                    波浪作用略增强，但河流输入沉积物的数量仍高于波浪和潮汐作用改造的能力。
                  </p>
                </div>
              </div>

              <div class="facies-section">
                <h4>三角洲相亚相划分：</h4>
                <div class="facies-tabs">
                  <div
                    class="facies-tab"
                    v-for="facies in deltaFacies"
                    :key="facies.id"
                    @click="toggleFacies(facies.id)"
                  >
                    <div class="facies-header">
                      <h5>{{ facies.name }}</h5>
                      <span class="facies-toggle">{{
                        expandedFacies[facies.id] ? "−" : "+"
                      }}</span>
                    </div>
                    <div
                      v-show="expandedFacies[facies.id]"
                      class="facies-content"
                    >
                      <p v-for="(paragraph, idx) in facies.content" :key="idx">
                        {{ paragraph }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 浪控三角洲 -->
            <div v-show="activeDeltaType === 'wave'" class="delta-type-content">
              <div class="river-characteristics">
                <div class="characteristic-card">
                  <h4>浪控三角洲（wave-dominated delta）</h4>
                  <p>
                    仅发育在海洋三角洲中，形成浪控三角洲的主导因素是由于波浪作用大于河流作用的结果。
                  </p>
                  <p>
                    一般只有一条或二条主河流入海，分支流不多也不大；河流输入海的泥砂量少，砂与泥的比值高；平面形态呈鸟嘴状，故又称鸟嘴状三角洲。
                  </p>
                </div>
              </div>
            </div>

            <!-- 潮控三角洲 -->
            <div v-show="activeDeltaType === 'tide'" class="delta-type-content">
              <div class="river-characteristics">
                <div class="characteristic-card">
                  <h4>潮控三角洲（tide-dominated delta）</h4>
                  <p>
                    河流流入三角港或其他形状的港湾，由于潮汐作用远大于河流作用，港湾中的泥砂受潮汐强烈破坏和改造，仅形成小型三角洲。
                  </p>
                  <p>
                    外形受港湾控制，也称港湾型三角洲。一般发育于中高潮差、低波浪能量、低沿岸流的盆地狭窄地区。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- 扇三角洲 -->
          <div v-show="activeTab === 'fan'" class="fan-delta">
            <h3 class="subsection-title">（3）扇三角洲</h3>

            <div class="river-characteristics">
              <div class="characteristic-card">
                <p>
                  Holmes(1965)，Mcgowen(1970)将扇三角洲定义为:
                  由相邻高地进积到安静水体中的冲积扇。
                </p>
                <p>
                  扇三角洲主要形成于构造活动较强烈的地区，例如活动大陆边缘、岛弧体系边缘、断陷湖盆边缘等。
                </p>
              </div>
            </div>

            <div class="fan-type-selector">
              <button
                v-for="type in fanTypes"
                :key="type.id"
                @click="activeFanType = type.id"
                :class="{ active: activeFanType === type.id }"
              >
                {{ type.name }}
              </button>
            </div>

            <div class="fan-content">
              <div
                v-show="activeFanType === 'lake'"
                class="characteristic-card"
              >
                <h4>湖泊扇三角洲</h4>
                <p>
                  中国东部断陷湖盆中常发育规模不等的湖泊扇三角洲。它由扇三角洲平原（fan
                  delta plain）、扇三角洲前缘（fan delta
                  front）和前扇三角洲（fan prodelta）3个亚相组成。
                </p>
              </div>

              <div
                v-show="activeFanType === 'wave'"
                class="characteristic-card"
              >
                <h4>波浪改造的扇三角洲</h4>
                <p>受波浪作用改造的扇三角洲类型。</p>
              </div>

              <div
                v-show="activeFanType === 'tide'"
                class="characteristic-card"
              >
                <h4>潮汐改造的扇三角洲</h4>
                <p>受潮汐作用改造的扇三角洲类型。</p>
              </div>
            </div>

            <div class="fan-facies-section">
              <h4>扇三角洲亚相划分：</h4>
              <div class="fan-facies-tabs">
                <div
                  class="fan-facies-tab"
                  v-for="facies in fanDeltaFacies"
                  :key="facies.id"
                  @click="toggleFanFacies(facies.id)"
                >
                  <div class="facies-header">
                    <h5>{{ facies.name }}</h5>
                    <span class="facies-toggle">{{
                      expandedFanFacies[facies.id] ? "−" : "+"
                    }}</span>
                  </div>
                  <div
                    v-show="expandedFanFacies[facies.id]"
                    class="facies-content"
                  >
                    <p v-for="(paragraph, idx) in facies.content" :key="idx">
                      {{ paragraph }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="fan-model-section">
              <h4>扇三角洲沉积模式：</h4>
              <div class="model-tabs">
                <div
                  class="model-tab"
                  v-for="model in fanModels"
                  :key="model.id"
                  @click="toggleModel(model.id)"
                >
                  <div class="model-header">
                    <h5>{{ model.name }}</h5>
                    <span class="model-toggle">{{
                      expandedModels[model.id] ? "−" : "+"
                    }}</span>
                  </div>
                  <div v-show="expandedModels[model.id]" class="model-content">
                    <p v-for="(paragraph, idx) in model.content" :key="idx">
                      {{ paragraph }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 09湖泊相 -->
      <div class="content-section lake-facies" id="lake-facies">
        <h2 class="section-title">09湖泊相</h2>
        <div class="section-content">
          <div class="intro-section">
            <p>
              湖泊在世界上发育广泛，数量众多，各具特色，是大陆上地形相对低洼和水流汇集的地区。
            </p>
            <p>
              湖泊沉积物具有重要的经济价值，除了富含油气资源外，也是油页岩、蒸发矿物以及铁矿的沉积场所。
            </p>
          </div>

          <!-- 导航标签 -->
          <div class="lake-type-nav">
            <button
              v-for="tab in lakeTabs"
              :key="tab.id"
              @click="activeLakeTab = tab.id"
              :class="{ active: activeLakeTab === tab.id }"
            >
              {{ tab.name }}
            </button>
          </div>

          <!-- 成因 -->
          <div v-show="activeLakeTab === 'genesis'" class="lake-genesis">
            <h3 class="subsection-title">（1）成因</h3>

            <div class="content-card">
              <p>
                湖泊成因类型多种多样，构造活动和气候变化常是湖泊生成、发展的最主要控制因素。
              </p>

              <div class="hydrodynamic-section">
                <h4>水动力作用：</h4>
                <div
                  class="hydrodynamic-item"
                  @click="toggleLakeHydrodynamic('wave')"
                >
                  <h5>波浪和岸流作用</h5>
                  <div
                    v-show="lakeHydrodynamic.wave"
                    class="hydrodynamic-detail"
                  >
                    <p>
                      湖泊的水动力作用主要表现为波浪和岸流作用，缺乏潮汐作用，这是与海洋的重要区别之一。在特别大的湖泊中可能存在潮汐作用，但难以产生较明显的湖流。
                    </p>
                    <p>
                      作为侵蚀和搬运沉积物的动力，湖浪在滨浅湖地区表现较为明显。当湖浪推进方向与湖岸斜交时，可形成沿岸流。
                    </p>
                    <p>
                      湖浪和沿岸流的冲刷和搬运作用可形成各种侵蚀地形和沉积砂体，如浪蚀湖岸以及湖滩、沙坝、沙嘴、堤岛等。
                    </p>
                  </div>
                </div>

                <div
                  class="hydrodynamic-item"
                  @click="toggleLakeHydrodynamic('river')"
                >
                  <h5>河流影响</h5>
                  <div
                    v-show="lakeHydrodynamic.river"
                    class="hydrodynamic-detail"
                  >
                    <p>
                      对部分湖泊来说，河流的影响可超过湖浪和岸流作用。当众多河流注入湖泊，可能会导致大量碎屑物倾入湖盆。而河道在湖底可以继续延伸，从而改变砂体的分布。
                    </p>
                  </div>
                </div>

                <div
                  class="hydrodynamic-item"
                  @click="toggleLakeHydrodynamic('gravity')"
                >
                  <h5>重力流沉积作用</h5>
                  <div
                    v-show="lakeHydrodynamic.gravity"
                    class="hydrodynamic-detail"
                  >
                    <p>
                      在湖泊沉积过程中，常存在重力流沉积作用。在较深湖地区，重力流是搬运沉积物的主要水动力类型。
                    </p>
                  </div>
                </div>
              </div>

              <div class="water-property">
                <h4>湖水特性：</h4>
                <div class="property-card">
                  <p>
                    湖水含盐度变化较大，由小于1%至大于25%。其汇集了来自不同源区河流的流水，故湖泊的地球化学性质在一定程度上反映了源区物质和盆地气候条件的特征。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- 类型 -->
          <div v-show="activeLakeTab === 'types'" class="lake-types">
            <h3 class="subsection-title">（2）类型</h3>

            <div class="content-card">
              <p>湖泊类型众多，但其亚相划分原则基本相同。</p>
              <p>
                根据沉积岩的颜色、成分、结构、沉积构造、厚度等沉积标志以及洪水面、枯水面、浪基面的位置，考虑气候背景，可将湖泊相划分为深湖和半深湖、滨浅湖、扩张湖等亚相类型。
              </p>

              <div class="subfacies-section">
                <div
                  class="subfacies-card"
                  @click="toggleLakeSubfacies('deep')"
                >
                  <h4>深湖和半深湖亚相</h4>
                  <div v-show="lakeSubfacies.deep" class="subfacies-detail">
                    <p>位于浪基面以下的水体较深部位，为缺氧的还原环境。</p>
                    <p>
                      岩性以灰黑色、深灰色、灰褐色泥页岩为特征，常见油页岩、薄层泥灰岩或白云岩夹层，发育水平层理及细波状层理。
                    </p>
                    <p>
                      化石较丰富保存较好，以浮游生物为主，底栖生物不发育。可见菱铁矿和黄铁矿等自生矿物。岩性横向分布稳定，垂向上常具连续的完整韵律，沉积厚度大。
                    </p>
                    <p>
                      长期稳定持续下沉、沉积中心与沉降中心吻合的大型湖盆中深湖亚相沉积厚度大、分布广。但有些气候干旱、面积小的内陆湖盆，不发育甚至缺少深湖亚相。
                    </p>
                  </div>
                </div>

                <div
                  class="subfacies-card"
                  @click="toggleLakeSubfacies('shallow')"
                >
                  <h4>浅湖亚相</h4>
                  <div v-show="lakeSubfacies.shallow" class="subfacies-detail">
                    <p>
                      指位于枯水期最低水位线至正常浪基面之间的地带。基本位于水下，波浪和湖流作用较强，属弱还原到弱氧化环境。
                    </p>
                    <p>
                      岩性为浅灰、灰绿色粉砂质泥岩和粉细砂岩的薄互层，经常夹有鲕粒灰岩和生物碎屑灰岩薄层，常含菱铁矿或鲕绿泥石的细条带。
                    </p>
                    <p>
                      砂岩成熟度高，常为钙质胶结。显水平、波状、斜波状、中小型交错层等多种层理。常见浪成波痕、虫孔、水下收缩裂纹等沉积构造。
                    </p>
                  </div>
                </div>

                <div
                  class="subfacies-card"
                  @click="toggleLakeSubfacies('littoral')"
                >
                  <h4>滨湖亚相</h4>
                  <div v-show="lakeSubfacies.littoral" class="subfacies-detail">
                    <p>
                      位于湖岸线附近，是经常受湖水进退影响，时而为湖水淹没，时而出露水面的地区。
                    </p>
                    <p>
                      这里的水动力虽然很强，但具间歇性，为氧化环境。岩性特点为泥岩呈红色、紫色杂灰绿色、常见泥裂、雨痕、气泡等暴露标志。
                    </p>
                    <p>
                      由于滨湖亚相的宽度较窄，对于古代湖相沉积来说，很难将其与浅湖亚相完全分开，故经常合称滨一浅湖亚相。
                    </p>
                  </div>
                </div>

                <div
                  class="subfacies-card"
                  @click="toggleLakeSubfacies('expanded')"
                >
                  <h4>扩张湖亚相</h4>
                  <div v-show="lakeSubfacies.expanded" class="subfacies-detail">
                    <p>
                      或称为洪水漫湖亚相，指枯水期湖面与洪水期湖面之间宽缓的沉积地带，主要在气候较干旱的洪水期发生堆积。
                    </p>
                    <p>
                      在地层剖面上表现为河流砂砾岩、泥质岩与分布稳定的湖相杂色泥岩、泥灰岩的频繁互层。
                    </p>
                    <p>
                      气候干旱、沉降缓慢、地形平缓、面积较大的坳陷盆地易形成大面积扩张湖沉积，而断陷湖泊不易发育扩张湖沉积。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 标志 -->
          <div v-show="activeLakeTab === 'markers'" class="lake-markers">
            <h3 class="subsection-title">（3）标志</h3>

            <div class="content-card">
              <p>湖泊沉积鉴别的标志主要包括以下几种：</p>

              <div class="markers-list">
                <ol>
                  <li>岩石类型较单一，缺少碳酸盐岩沉积；</li>
                  <li>沉积构造多样，多见水平层理；</li>
                  <li>生物化石丰富，生物化石丰富是碎屑湖泊沉积的重要标志；</li>
                  <li>垂向层序多呈反韵律。</li>
                </ol>
              </div>

              <div class="rock-characteristics">
                <h4>岩石特征：</h4>
                <div
                  class="characteristic-card"
                  @click="toggleLakeCharacteristic('rock')"
                >
                  <h5>岩石类型</h5>
                  <div
                    v-show="lakeCharacteristics.rock"
                    class="characteristic-detail"
                  >
                    <p>
                      自生矿物及其组合与海水形成的组合不同。岩石类型以粘土岩、砂岩和粉砂岩为主，砾岩较少，仅分布于滨湖地区，多由击岸浪的剥蚀作用形成。
                    </p>
                    <p>
                      砂岩一般比海相的复杂，各种类型都有出现，与河流相相比，矿物成熟度高，石英含量可达70%以上。
                    </p>
                    <p>
                      粘土岩在碎屑湖泊沉积中广泛分布，且由湖岸向中心增多。形成于较深水还原环境的湖相粘土岩常含丰富的有机质，成为良好的生油岩系。
                    </p>
                  </div>
                </div>

                <div
                  class="characteristic-card"
                  @click="toggleLakeCharacteristic('structure')"
                >
                  <h5>沉积构造</h5>
                  <div
                    v-show="lakeCharacteristics.structure"
                    class="characteristic-detail"
                  >
                    <p>
                      由于湖泊的范围有限，浪基面深度小，湖泊广大地区多处于浪基面以下，故在此地区的粘土岩多发育水平层理，有时亦为块状层理。在近岸地区可见交错层理、斜波状层理等。
                    </p>
                  </div>
                </div>

                <div
                  class="characteristic-card"
                  @click="toggleLakeCharacteristic('fossil')"
                >
                  <h5>生物化石</h5>
                  <div
                    v-show="lakeCharacteristics.fossil"
                    class="characteristic-detail"
                  >
                    <p>
                      常见的生物种类如介形虫、瓣鳃类、腹足类等，没有海相生物化石。藻类也是湖泊中较发育的生物。
                    </p>
                    <p>
                      轮藻为淡水环境所特有，蓝绿藻、硅藻和部分绿藻也是常见的类型。其中蓝绿藻与海相见到的呈叠层状构造者不同，常呈树枝状或分离的结核团块状构造。
                    </p>
                    <p>
                      此外,陆生植物的根、干、叶、孢子花粉等大量出现也是湖相的重要特征，尽管海相也出现植物化石，但以其种属和数量远离滨岸越来越少这种梯度变化来加以鉴别。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 10冲积扇 -->
      <div class="content-section alluvial-fan" id="alluvial-fan">
        <h2 class="section-title">10冲积扇</h2>
        <div class="section-content">
          <div class="intro-section">
            <p>
              当奔腾的河流带着泥沙，摆脱束缚冲出山谷，地球上最壮观之一的景观——冲积扇，开始逐渐形成！
            </p>
            <p>冲积扇形成之震撼绝不亚于山峰、海洋、河流和湖泊……</p>
          </div>

          <!-- 使用现有的tabs结构 -->
          <div class="river-type-nav">
            <button
              v-for="tab in fanTabs"
              :key="tab.id"
              @click="activeFanTab = tab.id"
              :class="{ active: activeFanTab === tab.id }"
            >
              {{ tab.name }}
            </button>
          </div>

          <!-- 形成与形态 -->
          <div v-show="activeFanTab === 'formation'" class="fan-formation">
            <h3 class="subsection-title">（1）形成与形态</h3>

            <div class="content-card">
              <p>
                冲积扇(alluvial
                fan)是指河流流出峡谷后，因突变为宽浅水体而流速顿减，所携带的碎屑物在山前堆积成的扇形沉积体。
              </p>
              <p>
                冲积扇的形成需要有充足的陆源碎屑供应，以及从山区向盆地过渡的高差悬殊的地形突变。
              </p>

              <div class="climate-section">
                <div
                  class="climate-type"
                  @click="expandedClimate.arid = !expandedClimate.arid"
                >
                  <h4>干旱-半干旱气候区</h4>
                  <div v-show="expandedClimate.arid" class="climate-detail">
                    <p>
                      在干旱-半干旱气候区，植被稀少，物理风化作用剧烈。降雨量虽少但多为暴雨，洪水短暂而猛烈，因此在山区向内陆盆地或平原过渡的地形转换地带多有冲积扇发育。
                    </p>
                    <p>
                      例如我国西北地区沿祁连山一阿尔金山—昆仑山北麓地带发育有一系列冲积扇。它们整体延绵数千公里，相互叠接，极为壮观。
                    </p>
                    <p>干旱-半干旱气候区是最有利于冲积扇发育的地区。</p>
                  </div>
                </div>

                <div
                  class="climate-type"
                  @click="expandedClimate.humid = !expandedClimate.humid"
                >
                  <h4>潮湿或半潮湿气候区</h4>
                  <div v-show="expandedClimate.humid" class="climate-detail">
                    <p>
                      而在潮湿或半潮湿气候区，如果有合适的地质条件及充分的物质供应也可形成规模较大的冲积扇。
                    </p>
                    <p>
                      例如位于喜马拉雅山南麓热带潮湿气候区的柯西河。由于坡降陡、水量充足且流速急，侧向摆动迅速，仅在近两个多世纪以来，即从东向西侧移170公里，形成了著名的柯西河冲积扇。
                    </p>
                  </div>
                </div>
              </div>

              <div class="fan-classification">
                <h4>冲积扇分类：</h4>
                <div class="classification-cards">
                  <div
                    class="classification-card"
                    @click="
                      expandedClassification.arid = !expandedClassification.arid
                    "
                  >
                    <h5>旱地扇(arid alluvial-fan)</h5>
                    <div
                      v-show="expandedClassification.arid"
                      class="classification-detail"
                    >
                      <p>发育于干旱—半干旱气候区的冲积扇称作旱地扇</p>
                    </div>
                  </div>

                  <div
                    class="classification-card"
                    @click="
                      expandedClassification.humid =
                        !expandedClassification.humid
                    "
                  >
                    <h5>湿地扇（humid alluvial-fan）</h5>
                    <div
                      v-show="expandedClassification.humid"
                      class="classification-detail"
                    >
                      <p>在潮湿—亚潮湿气候区的冲积扇可称作湿地扇</p>
                      <p>
                        两种扇体平面形态均呈扇状或朵状体，从山口向内陆盆地或冲积平原辐射散开。
                      </p>
                      <p>
                        旱地扇与湿地扇发育明显受到地质构造控制。在强烈差异升降的活动性断裂带的断陷盆地边缘，往往分布着面积广泛和厚度巨大的冲积扇。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 沉积类型 -->
          <div v-show="activeFanTab === 'deposition'" class="fan-deposition">
            <h3 class="subsection-title">（2）沉积类型</h3>

            <div class="content-card">
              <p>
                冲积扇沉积物类型比较复杂，包括了粗大的砾石、砂以及泥质。各种类型沉积物之间存在着较规律的组合关系，主要受水流的不同流动机制控制。
              </p>
              <p>
                冲积扇上水流形态既有高粘度洪流的泥石流，也有低粘度的液态流。这些水流在洪水期溢出河道，形成宽而浅的片状漫流或席状洪流(sheet
                flood)。
              </p>

              <div class="deposition-types">
                <h4>四种沉积类型：</h4>
                <div class="type-cards">
                  <div
                    class="type-card"
                    @click="expandedTypes.debris = !expandedTypes.debris"
                  >
                    <h5>泥石流沉积</h5>
                    <div v-show="expandedTypes.debris" class="type-detail">
                      <p>
                        泥石流是由沉积物和水混合在一起的一种高密度、高粘度的流体。
                      </p>
                      <p>
                        沉积物含量一般大于40%的称作粘性泥石流；大于10%，小于40%的称作稀性泥石流。泥石流因含有大量沉基，流体强度很大，可以将巨大漂砾托起和搬运走。
                      </p>
                      <p>
                        形成泥石流的必要条件是植被稀少，有突发性的洪水和陡峭的坡度，以及大量碎屑和泥质基质的供应。
                      </p>
                      <p>
                        泥石流具有强大的侵蚀作用，在水道中央和两侧因剪切力不足以克服沉积物强度，可形成刚性的中央塞(central
                        plug)和天然堤。
                      </p>
                      <p>
                        泥石流流速减缓时，大小不同的负载同时堆积下来，形成分选很差的砾、砂、泥混合沉积物。
                      </p>
                      <p>
                        因此泥石流沉积相为几乎没有内部构造的块状层，颗粒大小混杂，粒度相差悬殊，从直径可达数米的漂砾到极细的泥质混杂在一起。
                      </p>
                      <p>
                        板状或长条状漂砾垂直定向排列，在泥基中漂浮状产出或突出在层面之上等现象，均为泥石流的显著特征。
                      </p>
                    </div>
                  </div>

                  <div
                    class="type-card"
                    @click="expandedTypes.channel = !expandedTypes.channel"
                  >
                    <h5>河道沉积</h5>
                    <div v-show="expandedTypes.channel" class="type-detail">
                      <p>
                        冲积扇上的河道多分布在冲积扇上半部，因为在交会点(水道纵剖面线与扇面的交点)之下，河水易漫出河道形成片流。
                      </p>
                      <p>
                        半旱一旱地扇上的河道多为宽浅的间歇河，主要的沉积作用发生在雨季短暂的洪水期。
                      </p>
                      <p>
                        河道充填物由分选不好的砾石和砂组成透镜层，成层性较差。砂层具过渡流态和高流态型的平行层理和粗糙的板状及槽状交错层理。砾石多呈叠瓦状排列，底部为明显的凹槽状突变接触关系。
                      </p>
                      <p>
                        冲积扇上的河道很不稳定，经常迁移改道，每次洪水期的水系分布都有较大变化，老的河道充填沉积物常被之后的片流沉积物覆盖，因此河道沉积相向上多过渡为片（漫）流沉积相。
                      </p>
                    </div>
                  </div>

                  <div
                    class="type-card"
                    @click="expandedTypes.sheet = !expandedTypes.sheet"
                  >
                    <h5>片（漫）流沉积</h5>
                    <div v-show="expandedTypes.sheet" class="type-detail">
                      <p>
                        片流为在洪水期漫出河道，在部分扇面或全部扇面上大面积流动的一种席状洪流。水浅流急，为高流态的暂时水流。
                      </p>
                      <p>
                        片流多出现在交会点以下河道的下游地带。洪峰过后，片流又迅速变为辫状河道及沙坝。
                      </p>
                      <p>
                        片流沉积物主要由分选较好的砂层组成，并常具小型透镜状砾石夹层和冲刷构造。
                      </p>
                    </div>
                  </div>

                  <div
                    class="type-card"
                    @click="expandedTypes.sieve = !expandedTypes.sieve"
                  >
                    <h5>筛状沉积</h5>
                    <div v-show="expandedTypes.sieve" class="type-detail">
                      <p>
                        当洪水携带的沉积物缺少细粒物质(粉砂和泥)时，便形成由砾石组成的沉积体。
                      </p>
                      <p>
                        由于砾石层具有极高的孔隙和渗透性，在紧靠交会点的下面，水流大量从砾石层渗到地下，同时将携带的细碎屑填积在大砾石间的孔隙内。形成的具双众数粒度分布特征的砂砾石沉积，即为筛状沉积。
                      </p>
                      <p>
                        河道沉积和片流沉积在冲积扇沉积区内分布最广。在细粒物源充足的冲积扇上，泥石流沉积也可占据冲积扇上部的相当大部分，而筛状沉积通常只在局部发生。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 亚相划分 -->
          <div v-show="activeFanTab === 'subfacies'" class="fan-subfacies">
            <h3 class="subsection-title">（3）亚相划分</h3>

            <div class="content-card">
              <p>
                根据现代冲积扇地貌及沉积物的分布特征，可进一步将冲积扇划分成扇根(顶)、扇中和扇缘(端)3个亚相，它们之间没有明显的界线。在扇与扇之间，还存在着扇间地带。
              </p>

              <div class="subfacies-types">
                <div
                  class="subfacies-card"
                  @click="expandedSubfacies.root = !expandedSubfacies.root"
                >
                  <h4>扇根(顶)</h4>
                  <div v-show="expandedSubfacies.root" class="subfacies-detail">
                    <p>
                      分布在邻近冲积扇顶部地带的断崖处，其特点是沉积坡角最大，并发育有单一的或2～3个直而深的主河道。
                    </p>
                    <p>
                      其沉积物主要为泥石流沉积和河道沉积，由分选极差的、无组构的混杂砾岩或具叠瓦状的砾岩、砂砾岩组成。
                    </p>
                  </div>
                </div>

                <div
                  class="subfacies-card"
                  @click="expandedSubfacies.middle = !expandedSubfacies.middle"
                >
                  <h4>扇中</h4>
                  <div
                    v-show="expandedSubfacies.middle"
                    class="subfacies-detail"
                  >
                    <p>
                      位于冲积扇的中部，是冲积扇的主要组成部分，以具有中到较低的沉积坡角和发育的辫状河道为特征。因此，沉积物主要由砂岩、砾状砂岩和砾岩组成。
                    </p>
                    <p>
                      与扇根沉积相比较，沉积物的分选性明显变好。可见辫状河流作用形成的不明显的平行层理和交错层理，甚至局部可见逆行沙丘交错层理。
                    </p>
                  </div>
                </div>

                <div
                  class="subfacies-card"
                  @click="expandedSubfacies.edge = !expandedSubfacies.edge"
                >
                  <h4>扇缘(端)</h4>
                  <div v-show="expandedSubfacies.edge" class="subfacies-detail">
                    <p>
                      出现在冲积扇的趾部，其地貌特征是具有最低的沉积坡角和地形较平缓。
                    </p>
                    <p>
                      沉积物通常由砂岩和含砾砂岩组成，其中夹杂粉砂岩和黏土岩，局部也可见有膏盐层。其砂岩粒级变细，分选性变好。
                    </p>
                    <p>
                      除在砂岩和含砾砂岩中仍可见到不明显的平行层理、交错层理和冲刷一充填构造外，粉砂岩和泥岩则可显示块状层理、水平纹理以及变形构造和暴露构造(如干裂、雨痕)。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 11裂陷盆地 -->
      <div class="content-section rift-basin" id="rift-basin">
        <h2 class="section-title">11裂陷盆地</h2>
        <div class="section-content">
          <div class="intro-section">
            <p>
              大到大洋裂谷，小到由正断层控制的地堑，这些在地壳或岩石圈伸展变形过程中形成的盆地都可视作伸展型盆地。
            </p>
            <p>
              裂陷盆地作为典型的伸展型盆地，是指那些由于岩石圈或地壳裂陷作用过程中形成的沉积盆地，在地地质学中有着极其重要的意义。
            </p>
          </div>

          <!-- 导航标签 -->
          <div class="basin-type-nav">
            <button
              v-for="tab in basinTabs"
              :key="tab.id"
              @click="activeBasinTab = tab.id"
              :class="{ active: activeBasinTab === tab.id }"
            >
              {{ tab.name }}
            </button>
          </div>

          <!-- 定义 -->
          <div
            v-show="activeBasinTab === 'definition'"
            class="basin-definition"
          >
            <h3 class="subsection-title">（1）定义</h3>

            <div class="content-card">
              <p>
                裂陷作用是指引张力作用于整个岩石圈并导致地壳和岩石圈发生大规模的开裂和断陷的地质作用过程。
              </p>
              <p>
                而伸展构造是指在裂陷作用(或区域引张作用)下形成的一切使地壳或岩石圈沿水平方向发生伸长变形的构造的总称。
              </p>

              <div class="definition-section">
                <div class="definition-group">
                  <div
                    class="group-header"
                    @click="toggleDefinitionDetail('basic')"
                  >
                    <h4>裂陷盆地基本特征</h4>
                    <span class="toggle-icon">{{
                      definitionDetails.basic ? "−" : "+"
                    }}</span>
                  </div>
                  <div v-show="definitionDetails.basic" class="group-content">
                    <p>
                      裂陷盆地是地壳表浅层的大型伸展构造,
                      主要特征为沉积盆地是在地壳的伸长减薄过程中形成和发展的。
                    </p>
                  </div>
                </div>

                <div class="definition-group">
                  <div
                    class="group-header"
                    @click="toggleDefinitionDetail('mechanism')"
                  >
                    <h4>裂陷作用动力学机制</h4>
                    <span class="toggle-icon">{{
                      definitionDetails.mechanism ? "−" : "+"
                    }}</span>
                  </div>
                  <div
                    v-show="definitionDetails.mechanism"
                    class="group-content"
                  >
                    <p>
                      岩石圈的伸展变形需要水平方向的引张作用力。因此岩石圈裂陷作用可根据引张力的起因，分成主动的和被动的两种动力学机制。
                    </p>
                    <p>
                      主动裂陷作用是指岩石圈下软流圈热物质主动上涌，引起整个岩石圈水平引张的过程。被动裂陷作用的力源是板块构造演化过程中产生的区域水平引张力。
                    </p>
                  </div>
                </div>

                <div class="definition-group">
                  <div
                    class="group-header"
                    @click="toggleDefinitionDetail('sequence')"
                  >
                    <h4>构造事件序列</h4>
                    <span class="toggle-icon">{{
                      definitionDetails.sequence ? "−" : "+"
                    }}</span>
                  </div>
                  <div
                    v-show="definitionDetails.sequence"
                    class="group-content"
                  >
                    <p>
                      主动裂陷可能出现：热隆起→火山活动→裂陷盆地形成→热沉降等构造事件序列。
                    </p>
                    <p>
                      而在被动裂陷机制中,
                      由于区域应力场是主要动力源。因而可能出现：裂陷盆地形成→热隆起→火山活动→均衡沉降、
                      热沉降等构造事件序列。
                    </p>
                    <p>
                      实际上，裂陷作用的主动和被动并非彼此孤立。在裂陷盆地形成的过程中,
                      裂陷作用既有"主动"成分，亦有
                      "被动"成分，且在不同阶段可能表现为不同动力学机制占优势。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 分类1 -->
          <div
            v-show="activeBasinTab === 'classification1'"
            class="basin-classification1"
          >
            <h3 class="subsection-title">（2）分类1</h3>

            <div class="content-card">
              <p>
                在板块的内部或不同板块边缘都可以有裂陷盆地的存在。它们的形成和演化直接或间接受到板块构造运动制约。
              </p>
              <p>
                因此，根据裂陷盆地形成演化过程与板块构造运动的关系,
                可将该盆地分成如下图的四大类。
              </p>

              <div class="classification-section">
                <div class="classification-group">
                  <div
                    class="group-header"
                    @click="toggleClassificationGroup('intracontinental')"
                  >
                    <h4>大陆板块内部的裂陷盆地</h4>
                    <span class="toggle-icon">{{
                      classificationGroups.intracontinental ? "−" : "+"
                    }}</span>
                  </div>
                  <div
                    v-show="classificationGroups.intracontinental"
                    class="group-content"
                  >
                    <div
                      class="basin-type-card"
                      @click.stop="toggleBasinType('sag')"
                    >
                      <div class="basin-header">
                        <h5>伸展型拗陷盆地</h5>
                        <span class="toggle-icon">{{
                          basinTypes.sag ? "−" : "+"
                        }}</span>
                      </div>
                      <div v-show="basinTypes.sag" class="type-detail">
                        <p>
                          指地壳或岩石圈受引张减薄而形成的碟状坳陷。其形成的可能原因：岩石圈减薄未造成大规模破裂，或盆地位于大型坡坪式拆离断层的断坡部位。
                        </p>
                      </div>
                    </div>

                    <div
                      class="basin-type-card"
                      @click.stop="toggleBasinType('wide')"
                    >
                      <div class="basin-header">
                        <h5>陆内宽裂陷盆地</h5>
                        <span class="toggle-icon">{{
                          basinTypes.wide ? "−" : "+"
                        }}</span>
                      </div>
                      <div v-show="basinTypes.wide" class="type-detail">
                        <p>
                          是由一系列平行延伸或分叉、 斜交的地堑、 半地堑组成，
                          裂陷作用发生在很宽阔的地区。
                        </p>
                        <p>
                          宽裂陷盆地可以被埋藏在后继的盆地沉积层之下，如渤海湾盆地，也可直接露出地表，
                          如美国西部盆地。
                        </p>
                      </div>
                    </div>

                    <div
                      class="basin-type-card"
                      @click.stop="toggleBasinType('narrow')"
                    >
                      <div class="basin-header">
                        <h5>陆内窄裂陷盆地</h5>
                        <span class="toggle-icon">{{
                          basinTypes.narrow ? "−" : "+"
                        }}</span>
                      </div>
                      <div v-show="basinTypes.narrow" class="type-detail">
                        <p>
                          裂陷作用发生在比较窄的范围内，地堑、半地堑呈链状、斜列式分布，构成平面上狭长沉降带，为典型大陆裂谷。如东非裂谷、
                          苏伊士湾等。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="classification-group">
                  <div
                    class="group-header"
                    @click="toggleClassificationGroup('divergent')"
                  >
                    <h4>与板块离散运动有关的裂陷盆地</h4>
                    <span class="toggle-icon">{{
                      classificationGroups.divergent ? "−" : "+"
                    }}</span>
                  </div>
                  <div
                    v-show="classificationGroups.divergent"
                    class="group-content"
                  >
                    <div
                      class="basin-type-card"
                      @click.stop="toggleBasinType('intercontinental')"
                    >
                      <div class="basin-header">
                        <h5>陆间裂谷或原始大洋裂谷</h5>
                        <span class="toggle-icon">{{
                          basinTypes.intercontinental ? "−" : "+"
                        }}</span>
                      </div>
                      <div
                        v-show="basinTypes.intercontinental"
                        class="type-detail"
                      >
                        <p>
                          裂陷作用使岩石圈完全裂解成两或三部分。
                          裂谷底部是新生洋壳并有进一步扩张趋势，
                          成为岩石圈板块离散运动边界。如红海裂谷南部。
                        </p>
                      </div>
                    </div>

                    <div
                      class="basin-type-card"
                      @click.stop="toggleBasinType('failed')"
                    >
                      <div class="basin-header">
                        <h5>衰退裂谷</h5>
                        <span class="toggle-icon">{{
                          basinTypes.failed ? "−" : "+"
                        }}</span>
                      </div>
                      <div v-show="basinTypes.failed" class="type-detail">
                        <p>
                          是从大洋以高角度伸入大陆内部的裂陷盆地，
                          是大洋形成初期的三叉裂谷系中一支，
                          如西非的贝努埃裂谷。
                        </p>
                        <p>
                          大洋封闭并发生大陆碰撞形成造山带后，
                          早期衰退裂谷演化成为与造山带近直角相交并伸向克拉通内部的拗拉槽，如俄克拉荷马州周围盆地。
                        </p>
                      </div>
                    </div>

                    <div
                      class="basin-type-card"
                      @click.stop="toggleBasinType('oceanic')"
                    >
                      <div class="basin-header">
                        <h5>新生大洋盆地和洋中脊</h5>
                        <span class="toggle-icon">{{
                          basinTypes.oceanic ? "−" : "+"
                        }}</span>
                      </div>
                      <div v-show="basinTypes.oceanic" class="type-detail">
                        <p>
                          大陆板块破裂后继续发生海底扩张，
                          形成大面积以洋壳为底的新生洋盆，
                          海底扩张仍然在洋中脊发生，如大西洋盆地和大西洋中脊。
                        </p>
                      </div>
                    </div>

                    <div
                      class="basin-type-card"
                      @click.stop="toggleBasinType('passive')"
                    >
                      <div class="basin-header">
                        <h5>被动大陆边缘</h5>
                        <span class="toggle-icon">{{
                          basinTypes.passive ? "−" : "+"
                        }}</span>
                      </div>
                      <div v-show="basinTypes.passive" class="type-detail">
                        <p>
                          指在离散板块运动造成的大陆边缘。被动大陆边缘包括陆阶和陆隆或陆堤等盆地单元。如大西洋两侧的大陆边缘。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="classification-group">
                  <div
                    class="group-header"
                    @click="toggleClassificationGroup('subduction')"
                  >
                    <h4>与板块俯冲作用有关的裂陷盆地</h4>
                    <span class="toggle-icon">{{
                      classificationGroups.subduction ? "−" : "+"
                    }}</span>
                  </div>
                  <div
                    v-show="classificationGroups.subduction"
                    class="group-content"
                  >
                    <p>
                      主要包括弧内（裂陷）盆地、弧后（裂陷）盆地和弧间（裂陷）盆地等。
                    </p>
                  </div>
                </div>

                <div class="classification-group">
                  <div
                    class="group-header"
                    @click="toggleClassificationGroup('collision')"
                  >
                    <h4>撞击裂谷</h4>
                    <span class="toggle-icon">{{
                      classificationGroups.collision ? "−" : "+"
                    }}</span>
                  </div>
                  <div
                    v-show="classificationGroups.collision"
                    class="group-content"
                  >
                    <p>
                      指大陆板块碰撞过程中在碰撞带前方的大陆内部形成的走向与碰撞带近垂直的狭长盆地。为典型被动裂陷作用过程，如莱茵地堑、
                      贝加尔湖盆地等。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 分类2 -->
          <div
            v-show="activeBasinTab === 'classification2'"
            class="basin-classification2"
          >
            <h3 class="subsection-title">（3）分类2</h3>

            <div class="content-card">
              <p>
                多数裂陷盆地是由正断层作为同沉积边界断层的沉积盆地。正断层作为伸展构造变形中的基本要素,
                控制着裂陷盆地的形成和构造演化。
              </p>

              <div class="fault-section">
                <div class="fault-group">
                  <div
                    class="group-header"
                    @click="toggleFaultType('geometry')"
                  >
                    <h4>正断层几何形态分类</h4>
                    <span class="toggle-icon">{{
                      faultTypes.geometry ? "−" : "+"
                    }}</span>
                  </div>
                  <div v-show="faultTypes.geometry" class="group-content">
                    <p>
                      正断层按其断层面形态可分为平面式和铲式；按断层两盘岩层及断层面本身是否发生旋转运动分为非旋转和旋转两类。
                    </p>
                    <p>
                      另有一种常见正断层由较陡倾斜的断坡和较缓倾斜的断坪组合成台阶状断层面，特别是多级的坡坪式形态，可称为坡坪式正断层。属于旋转类正断层。
                    </p>
                  </div>
                </div>

                <div class="fault-group">
                  <div
                    class="group-header"
                    @click="toggleFaultType('structural')"
                  >
                    <h4>裂陷盆地构造样式分类</h4>
                    <span class="toggle-icon">{{
                      faultTypes.structural ? "−" : "+"
                    }}</span>
                  </div>
                  <div v-show="faultTypes.structural" class="group-content">
                    <p>
                      根据这些边界正断层的差异性，可将裂陷盆地构造样式类型分为如下四类：
                    </p>
                    <ol>
                      <li>由非旋转平面式正断层控制的地堑与地垒；</li>
                      <li>由旋转平面式正断层控制的多米诺式半地堑系;</li>
                      <li>由铲式正断层控制的半地堑或滚动式半地堑；</li>
                      <li>由坡坪式正断层控制的复式半地堑。</li>
                    </ol>
                  </div>
                </div>

                <div class="fault-group">
                  <div
                    class="group-header"
                    @click="toggleFaultType('distribution')"
                  >
                    <h4>裂陷盆地平面分布特征</h4>
                    <span class="toggle-icon">{{
                      faultTypes.distribution ? "−" : "+"
                    }}</span>
                  </div>
                  <div v-show="faultTypes.distribution" class="group-content">
                    <p>
                      同一构造背景可形成多个裂陷盆地，
                      即裂陷盆地区。盆地中控制地堑或半地堑的主干正断层在平面上展布型式多样，
                      使整体盆地也呈现不同平面形态。
                    </p>
                    <p>
                      裂陷盆地可能只有一侧发育主边界断层，另一侧为构造斜坡。即使发育两条平行的主边界断层，多数情况下两条断层的位移往往是相互消长，此强彼弱。
                    </p>
                  </div>
                </div>

                <div class="fault-group">
                  <div
                    class="group-header"
                    @click="toggleFaultType('transfer')"
                  >
                    <h4>构造变换带特征</h4>
                    <span class="toggle-icon">{{
                      faultTypes.transfer ? "−" : "+"
                    }}</span>
                  </div>
                  <div v-show="faultTypes.transfer" class="group-content">
                    <p>
                      伸展主干断层之间发育的构造变换带在盆地构造演化中起着十分重要的作用。伸展构造样式的变化情况及主干断层位态和规模决定了构造变换带可以不同尺度和型式发生。
                    </p>
                    <p>
                      连接基底主断层的一些横向斜向断层是典型的变换带，称为变换断层。变换断层运动性质受被传递的主干伸展断层位态及伸展位移方式等多种因素影响。
                    </p>
                    <p>
                      变换断层并非是传递伸展应变的唯一形式。
                      如在东非裂谷中的基底主断层间常发育走向斜坡、
                      凸起带和复杂多边形断块体等多种样式的变换构造。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 12海相沉积 -->
      <div class="content-section marine-deposit" id="marine-deposit">
        <h2 class="section-title">12海相沉积</h2>
        <div class="section-content">
          <div class="intro-section">
            <p>海洋是指被大面积海水淹没的地区，具有硅镁层薄层地壳。</p>
            <p>
              地球上海洋总面积约为3.6亿平方公里，约占地球表面积的70.8%。海洋是地球上沉积物堆积的重要场所之一。
            </p>
            <p>
              海洋环境与大陆环境有着明显的不同，诸如在物理化学条件、水动力状况、地貌特征等方面，都有其自身的特点。
            </p>
          </div>

          <!-- 导航标签 -->
          <div class="marine-nav">
            <button
              v-for="tab in marineTabs"
              :key="tab.id"
              @click="activeMarineTab = tab.id"
              :class="{ active: activeMarineTab === tab.id }"
            >
              {{ tab.name }}
            </button>
          </div>

          <!-- 海底地形分类 -->
          <div
            v-show="activeMarineTab === 'topography'"
            class="marine-topography"
          >
            <h3 class="subsection-title">（1）海底地形分类</h3>

            <div class="content-card">
              <p>
                海底地形可细分为大陆架(陆棚)、大陆坡、陆隆和大洋盆地等地貌单元。
              </p>

              <div class="terrain-section">
                <div class="terrain-card" @click="toggleTerrainDetail('shelf')">
                  <div class="terrain-header">
                    <h4>大陆架(陆棚)</h4>
                    <span class="toggle-icon">{{
                      terrainDetails.shelf ? "−" : "+"
                    }}</span>
                  </div>
                  <div v-show="terrainDetails.shelf" class="terrain-detail">
                    <p>
                      是指围绕大陆边缘的、平坦的浅水沉积台地。绝大部分陆棚水深在200m以内,平均为133m，是海洋沉积最集中和最活跃的地区。
                    </p>
                  </div>
                </div>

                <div class="terrain-card" @click="toggleTerrainDetail('slope')">
                  <div class="terrain-header">
                    <h4>大陆坡</h4>
                    <span class="toggle-icon">{{
                      terrainDetails.slope ? "−" : "+"
                    }}</span>
                  </div>
                  <div v-show="terrainDetails.slope" class="terrain-detail">
                    <p>
                      是大陆架边缘(陆棚坡折带)向大洋倾斜的部分。平均深为1270m。陆坡上常具有洼地、阶梯状地形、孤立山或被大量的海底峡谷所切穿。
                    </p>
                  </div>
                </div>

                <div class="terrain-card" @click="toggleTerrainDetail('rise')">
                  <div class="terrain-header">
                    <h4>陆隆（大陆隆起）</h4>
                    <span class="toggle-icon">{{
                      terrainDetails.rise ? "−" : "+"
                    }}</span>
                  </div>
                  <div v-show="terrainDetails.rise" class="terrain-detail">
                    <p>
                      陆坡下部为陆隆（大陆隆起），它是陆坡与深海盆地间的平缓过渡区，水深约1400~3700m，常是浊流或陆坡滑坍的碎屑堆积于深海平原边部而成。
                    </p>
                    <p>
                      陆棚、陆坡、陆隆合称为大陆边缘，是大陆的水下延伸部分，为大陆与深海盆地间的过渡区。
                    </p>
                  </div>
                </div>

                <div class="terrain-card" @click="toggleTerrainDetail('basin')">
                  <div class="terrain-header">
                    <h4>大洋盆地</h4>
                    <span class="toggle-icon">{{
                      terrainDetails.basin ? "−" : "+"
                    }}</span>
                  </div>
                  <div v-show="terrainDetails.basin" class="terrain-detail">
                    <p>
                      面积广阔、深度巨大、地貌形态多样，占全部海洋面积的2/3,它包括深海盆地、海岭、海峰、火山脊等。其中主要部分为水深达4~5公里的深海盆地，深海平原又是深海盆地中最平坦的部分。
                    </p>
                  </div>
                </div>
              </div>

              <div class="hydrodynamics-section">
                <h4>海洋水动力作用</h4>
                <div class="hydro-card" @click="toggleHydroDetail('wave')">
                  <div class="hydro-header">
                    <h5>波浪</h5>
                    <span class="toggle-icon">{{
                      hydroDetails.wave ? "−" : "+"
                    }}</span>
                  </div>
                  <div v-show="hydroDetails.wave" class="hydro-detail">
                    <p>
                      海洋水域辽阔，风的吹程长，波浪规模巨大。它是海洋中产生侵蚀、搬运、沉积作用的主要动力,尤以在海岸附近最为显著。
                    </p>
                    <p>
                      在这里它塑造着不同的海岸类型,改造和重新分配着沉积物。波浪触及海底的位置称为浪底(水深为1/2波长处)。
                    </p>
                  </div>
                </div>

                <div class="hydro-card" @click="toggleHydroDetail('tide')">
                  <div class="hydro-header">
                    <h5>潮汐</h5>
                    <span class="toggle-icon">{{
                      hydroDetails.tide ? "−" : "+"
                    }}</span>
                  </div>
                  <div v-show="hydroDetails.tide" class="hydro-detail">
                    <p>
                      海洋的潮汐作用引起海面水位的垂直升降称潮位(潮差)，引起海水的水平移动称潮流。
                    </p>
                    <p>
                      潮位的升降扩大了波浪对海岸作用的宽度和范围,形成潮间带沉积环境;而潮流对海底沉积物的改造、搬运，堆积起着重要作用，尤以近岸浅海地区最为显著。
                    </p>
                  </div>
                </div>

                <div class="hydro-card" @click="toggleHydroDetail('current')">
                  <div class="hydro-header">
                    <h5>海流</h5>
                    <span class="toggle-icon">{{
                      hydroDetails.current ? "−" : "+"
                    }}</span>
                  </div>
                  <div v-show="hydroDetails.current" class="hydro-detail">
                    <p>
                      由地球重力场或海水温度、盐度分布不均产生密度梯度而引起的海水流动，称为海流，其搬运作用要比波浪、潮汐大得多。
                    </p>
                    <p>
                      尤其对粘土等细粒沉积物，可进行长达数百至数千公里的搬运。一般将发生在大洋里的海流称为洋流。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 海洋沉积环境分类 -->
          <div
            v-show="activeMarineTab === 'environment'"
            class="marine-environment"
          >
            <h3 class="subsection-title">（2）海洋沉积环境分类</h3>

            <div class="content-card">
              <p>
                根据海底地形和海水深度,以及陆棚区地形、水深和潮汐、波浪作用的特点，可将海洋沉积环境细分为滨海、浅海、半深海和深海4种环境
              </p>

              <div class="env-section">
                <div class="env-group" @click="toggleEnvGroup('littoral')">
                  <div class="env-header">
                    <h4>滨岸相</h4>
                    <span class="toggle-icon">{{
                      envGroups.littoral ? "−" : "+"
                    }}</span>
                  </div>
                  <div v-show="envGroups.littoral" class="env-content">
                    <p>
                      位于浪基面及最高涨潮线之间。根据海岸环境特征，可划分为障壁型和无障壁型两类。其中障壁型滨岸环境发育障壁岛、潟湖、潮坪等沉积体系。
                    </p>

                    <div
                      class="env-subgroup"
                      @click.stop="toggleEnvSubgroup('barrier')"
                    >
                      <div class="subgroup-header">
                        <h5>障壁型滨岸环境</h5>
                        <span class="toggle-icon">{{
                          envSubgroups.barrier ? "−" : "+"
                        }}</span>
                      </div>
                      <div
                        v-show="envSubgroups.barrier"
                        class="subgroup-content"
                      >
                        <div
                          class="feature-card"
                          @click.stop="toggleFeature('island')"
                        >
                          <div class="feature-header">
                            <h6>障壁岛</h6>
                            <span class="toggle-icon">{{
                              features.island ? "−" : "+"
                            }}</span>
                          </div>
                          <div v-show="features.island" class="feature-detail">
                            <p>
                              是指一种狭长形的高出海水面的砂岩体，大致平行海岸分布。障壁岛可以是笔直的，也可稍有弯曲或具微弱分支。
                            </p>
                            <p>
                              障壁岛砂体一般厚10～20m，宽几百米至几千米，长几至几十千米。其高度取决于海浪的高度，宽度则与波浪作用的时间和方向有关。
                            </p>
                          </div>
                        </div>

                        <div
                          class="feature-card"
                          @click.stop="toggleFeature('lagoon')"
                        >
                          <div class="feature-header">
                            <h6>潟湖</h6>
                            <span class="toggle-icon">{{
                              features.lagoon ? "−" : "+"
                            }}</span>
                          </div>
                          <div v-show="features.lagoon" class="feature-detail">
                            <p>
                              是被海岸所限制、被障壁岛所遮拦的浅水盆地。它以潮道与广海相通或与广海呈半隔绝状态。
                            </p>
                            <p>
                              现今海岸的13%属于障壁型海岸，在障壁岛的背后一般均有潟湖。
                            </p>
                          </div>
                        </div>

                        <div
                          class="feature-card"
                          @click.stop="toggleFeature('tidal')"
                        >
                          <div class="feature-header">
                            <h6>潮坪</h6>
                            <span class="toggle-icon">{{
                              features.tidal ? "−" : "+"
                            }}</span>
                          </div>
                          <div v-show="features.tidal" class="feature-detail">
                            <p>
                              是宽广缓斜或近于水平的、具有明显潮汐周期作用的海岸坪地，主要受潮汐影响，可分为潮上带、潮间带和潮下带。
                            </p>
                            <p>
                              潮上带是指位于平均高潮面以上的部分；潮间带是指位于平均高潮面和平均低潮面之间的部分；潮下带是指位于平均低潮面以下的部分。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="env-subgroup"
                      @click.stop="toggleEnvSubgroup('nonBarrier')"
                    >
                      <div class="subgroup-header">
                        <h5>无障壁滨岸相</h5>
                        <span class="toggle-icon">{{
                          envSubgroups.nonBarrier ? "−" : "+"
                        }}</span>
                      </div>
                      <div
                        v-show="envSubgroups.nonBarrier"
                        class="subgroup-content"
                      >
                        <p>
                          的沉积环境是无障壁岛遮挡、海水循环良好的开阔海岸带。可分为砂质或砾质高能海岸及粉砂淤泥质低能海岸两种类型。
                        </p>
                        <p>
                          高能海岸环境以砂质类型居多，砾质者少见。按海岸地貌特征可划分为海岸沙丘、后滨、前滨、临滨等几个次级环境。
                        </p>
                        <p>
                          低能海岸带以潮流作用为主，为粉砂淤泥质海岸。海岸坡度平缓,具有较宽阔的潮间带，缺失后滨带。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="env-group" @click="toggleEnvGroup('shelf')">
                  <div class="env-header">
                    <h4>浅海陆棚</h4>
                    <span class="toggle-icon">{{
                      envGroups.shelf ? "−" : "+"
                    }}</span>
                  </div>
                  <div v-show="envGroups.shelf" class="env-content">
                    <p>
                      位于正常浪基面与陆架边缘之间，深度一般10~200m,宽度由数公里至数百公里不等。
                    </p>
                    <p>
                      根据浅海地区潮汐流、风暴流、海流以及密度流的作用，可将浅海陆棚沉积划分为潮汐控制的陆棚、海流控制的陆棚和风暴控制的陆棚三种。
                    </p>

                    <div
                      class="shelf-type"
                      @click.stop="toggleShelfType('tidal')"
                    >
                      <div class="shelf-header">
                        <h5>潮汐控制的陆棚</h5>
                        <span class="toggle-icon">{{
                          shelfTypes.tidal ? "−" : "+"
                        }}</span>
                      </div>
                      <div v-show="shelfTypes.tidal" class="shelf-detail">
                        <p>
                          潮汐由月球对地球表面水的引力产生。在强潮流地区，流速较大的优势潮流控制了沉积物的搬运和沉积方向。
                        </p>
                        <p>
                          由优势潮流形成的大型纵向沉积底形称为沙垄和潮汐沙脊，形成的中小型横向沉积底形称为沙波和沙纹。
                        </p>
                      </div>
                    </div>

                    <div
                      class="shelf-type"
                      @click.stop="toggleShelfType('current')"
                    >
                      <div class="shelf-header">
                        <h5>海流控制的陆棚</h5>
                        <span class="toggle-icon">{{
                          shelfTypes.current ? "−" : "+"
                        }}</span>
                      </div>
                      <div v-show="shelfTypes.current" class="shelf-detail">
                        <p>
                          海流对临近较深海的外陆棚碎屑沉积也存在影响。规模较大的海流主要与洋流的入侵相关，洋流的速度可达到2m/s，它们搬运沉积物形成沙波。
                        </p>
                      </div>
                    </div>

                    <div
                      class="shelf-type"
                      @click.stop="toggleShelfType('storm')"
                    >
                      <div class="shelf-header">
                        <h5>风暴控制的陆棚</h5>
                        <span class="toggle-icon">{{
                          shelfTypes.storm ? "−" : "+"
                        }}</span>
                      </div>
                      <div v-show="shelfTypes.storm" class="shelf-detail">
                        <p>
                          风暴流沉积的形成与风暴巨浪密切相关。风暴巨浪强烈冲刷海岸沉积物并使其呈悬浮状态，回流将这些悬浮的海岸沉积物带回海中，形成砂泥含量很高的密度流。
                        </p>
                        <p>
                          当这些密度流在风暴浪基面之下的安静水体中沉积时，便形成具鲍玛序列的浊流沉积物。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="env-group" @click="toggleEnvGroup('bathyal')">
                  <div class="env-header">
                    <h4>半深海相</h4>
                    <span class="toggle-icon">{{
                      envGroups.bathyal ? "−" : "+"
                    }}</span>
                  </div>
                  <div v-show="envGroups.bathyal" class="env-content">
                    <p>
                      对应大陆坡沉积环境，陆棚边缘坡折带沉积水深一般为90~180m，大陆坡底水深一般为2000m~3700m。
                    </p>
                    <p>
                      半深海相沉积主要由泥质、浮游生物和碎屑三部分沉积物组成，来源主要是陆源物质和海洋浮游生物，其次为冰川和海底火山喷发物。
                    </p>
                    <p>
                      海底洋流(等深流)可搬运大量粉砂级沉积物并在陆坡上堆积下来。风、河流、潮汐和波浪搬运的细粒悬浮物质在较深水区也可发生大量沉积。
                    </p>
                    <p>
                      因此，重力流、等深流和悬浮沉积等是半深海的主要沉积成因类型。
                    </p>
                    <p>
                      由于半深海区光合作用最需要的红光和黄光传播深度很小，故此环境无植物发育。生物群以腹足类为主，还可见瓣鳃类、腕足类、放射虫、有孔虫等。
                    </p>
                  </div>
                </div>

                <div class="env-group" @click="toggleEnvGroup('abyssal')">
                  <div class="env-header">
                    <h4>深海相</h4>
                    <span class="toggle-icon">{{
                      envGroups.abyssal ? "−" : "+"
                    }}</span>
                  </div>
                  <div v-show="envGroups.abyssal" class="env-content">
                    <p>
                      发育于大洋盆地，水深在2000m以下，平均深度为4000m。深海底阳光已不能到达，氧气不足，底栖生物稀少,种类单调，故不能形成底栖生物的显著堆积。现代深海沉积物主要为各种软泥，其中大部分属远洋沉积物，即多半是繁殖于大洋上层的微小浮游生物的钙质和硅质骨骼下沉堆积而成的软泥。
                    </p>
                    <p>
                      另一部分为底流活动、冰山搬运、浊流、滑坡作用形成的陆源沉积物,以及局部地区各种矿物的化学和生物化学沉淀作用形成的锰、铁、磷等沉积物。现代深海的许多地区存在着流速达4~40cm/s的强烈底流，它可引起沉积物的搬运,并在沉积物表面形成波痕、冲刷痕、水流线理、交错层理等。
                    </p>
                    <p>
                      深海沉积物的波痕可以是对称的、舌形的、新月形的，波长从十厘米至数米,波高可达20cm或更高。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 沉积特征 -->
          <div
            v-show="activeMarineTab === 'characteristics'"
            class="marine-characteristics"
          >
            <h3 class="subsection-title">（3）沉积特征</h3>

            <div class="content-card">
              <div class="deposit-features">
                <div
                  class="feature-card"
                  @click="toggleDepositFeature('bathyal')"
                >
                  <div class="feature-header">
                    <h4>半深海相沉积特征</h4>
                    <span class="toggle-icon">{{
                      depositFeatures.bathyal ? "−" : "+"
                    }}</span>
                  </div>
                  <div v-show="depositFeatures.bathyal" class="feature-detail">
                    <p>
                      半深海对应大陆坡沉积环境，陆棚边缘坡折带沉积水深一般为90~180m，大陆坡底水深一般为2000m~3700m。
                    </p>
                    <p>
                      半深海相沉积主要由泥质、浮游生物和碎屑三部分沉积物组成，来源主要是陆源物质和海洋浮游生物，其次为冰川和海底火山喷发物。
                    </p>
                    <p>
                      海底洋流(等深流)可搬运大量粉砂级沉积物并在陆坡上堆积下来。风、河流、潮汐和波浪搬运的细粒悬浮物质在较深水区也可发生大量沉积。
                    </p>
                    <p>
                      因此，重力流、等深流和悬浮沉积等是半深海的主要沉积成因类型。
                    </p>
                    <p>
                      由于半深海区光合作用最需要的红光和黄光传播深度很小，故此环境无植物发育。生物群以腹足类为主，还可见瓣鳃类、腕足类、放射虫、有孔虫等。
                    </p>
                  </div>
                </div>

                <div
                  class="feature-card"
                  @click="toggleDepositFeature('abyssal')"
                >
                  <div class="feature-header">
                    <h4>深海相沉积特征</h4>
                    <span class="toggle-icon">{{
                      depositFeatures.abyssal ? "−" : "+"
                    }}</span>
                  </div>
                  <div v-show="depositFeatures.abyssal" class="feature-detail">
                    <p>
                      深海相发育于大洋盆地，水深在2000m以下，平均深度为4000m。深海底阳光已不能到达，氧气不足，底栖生物稀少,种类单调，故不能形成底栖生物的显著堆积。现代深海沉积物主要为各种软泥，其中大部分属远洋沉积物，即多半是繁殖于大洋上层的微小浮游生物的钙质和硅质骨骼下沉堆积而成的软泥。
                    </p>
                    <p>
                      另一部分为底流活动、冰山搬运、浊流、滑坡作用形成的陆源沉积物,以及局部地区各种矿物的化学和生物化学沉淀作用形成的锰、铁、磷等沉积物。现代深海的许多地区存在着流速达4~40cm/s的强烈底流，它可引起沉积物的搬运,并在沉积物表面形成波痕、冲刷痕、水流线理、交错层理等。
                    </p>
                    <p>
                      深海沉积物的波痕可以是对称的、舌形的、新月形的，波长从十厘米至数米,波高可达20cm或更高.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.geo-image-container {
  width: 100%;
  text-align: center; /* 水平居中 */
  padding: 20px 0; /* 上下留白 */
}

/* ========== 通用图片样式 ========== */
.geo-image-wrapper {
  margin: 20px auto;
  max-width: 800px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background: white;
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;
}

/* 按比例缩放的容器变体 */
.geo-image-wrapper.proportional {
  width: auto; /* 宽度由内容决定 */
  display: inline-block; /* 使容器随内容缩放 */
  max-width: 100%; /* 确保不超过父容器 */
}

/* 图片样式 */
.geo-image-wrapper.proportional .geo-image {
  width: auto; /* 保持原始宽度 */
  max-width: 100%; /* 确保不超过容器 */
  height: auto; /* 保持原始高度比例 */
  display: block; /* 移除底部间隙 */
}

.geo-image-wrapper:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.geo-image {
  width: 100%;
  height: auto; /* 高度自动保持比例 */
  display: block;
  border-bottom: 1px solid #e0e0e0;
  object-position: center; /* 确保图片居中显示 */
  flex-grow: 1; /* 新增 */
  max-height: 600px; /* 可选：限制最大高度 */
}

.geo-image-caption {
  padding: 12px 16px;
  background: #5d4037;
  color: white;
  font-size: 0.95em;
  text-align: center;
  font-weight: 500;
  flex-shrink: 0; /* 防止标题栏被压缩 */
}

/* ========== 图片组样式 ========== */
.geo-image-group {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin: 25px 0;
}

/* 统一高度模式 */
.geo-image-group.uniform-height .geo-image-wrapper {
  height: 450px; /* 统一高度 */
}

.geo-image-group .geo-image-wrapper {
  flex: 1 1 300px;
  max-width: 400px;
  margin: 0;
}

/* ========== 轮播图样式 ========== */
/* 轮播图容器 */
.geo-carousel {
  position: relative;
  max-width: 900px;
  margin: 40px auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
}

/* 轨道样式 */
.geo-carousel-track {
  display: flex;
  transition: transform 0.5s ease;
  height: 500px;
}

/* 单张幻灯片 */
.geo-slide {
  min-width: 100%;
  flex-shrink: 0;
}

/* 图片容器 */
.geo-image-wrapper {
  height: 100%;
  position: relative;
}

.geo-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.geo-image-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  font-size: 1.1em;
}

/* 导航控制区 */
.geo-carousel-controls {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  z-index: 10;
}

/* 导航按钮 */
.geo-carousel-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  color: #5d4037;
  font-size: 1.5em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.geo-carousel-btn:hover {
  background: white;
  transform: scale(1.1);
}

/* 导航点 */
.geo-carousel-dots {
  display: flex;
  gap: 10px;
}

.geo-carousel-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.geo-carousel-dot.active {
  background: white;
  transform: scale(1.2);
}

/* ========== 主题色 ========== */
.theme-marine {
  background: #0288d1;
}
.theme-lake {
  background: #00796b;
}
.theme-fluvial {
  background: #5d4037;
}
.theme-desert {
  background: #f57c00;
}

/* ========== 响应式设计 ========== */
@media (max-width: 768px) {
  .geo-image {
    height: 300px; /* 移动端减小高度 */
  }

  .geo-image-group.uniform-height .geo-image-wrapper {
    height: 350px;
  }

  .geo-carousel {
    margin: 20px 0;
    border-radius: 0;
  }

  .geo-carousel-inner {
    height: 350px;
  }

  .geo-carousel-controls {
    bottom: 10px;
  }
}

/* 海相沉积 */
.marine-nav {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.marine-nav button {
  padding: 8px 16px;
  background-color: #e1f5fe;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.marine-nav button.active {
  background-color: #0288d1;
  color: white;
}

.subsection-title {
  color: #0277bd;
  margin: 20px 0 15px;
  font-size: 1.2em;
  border-left: 4px solid #0288d1;
  padding-left: 10px;
}

.content-card {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

/* 地形卡片样式 */
.terrain-card {
  margin-bottom: 10px;
  border: 1px solid #b3e5fc;
  border-radius: 6px;
  overflow: hidden;
}

.terrain-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  background-color: #4fc3f7;
  color: white;
  cursor: pointer;
  transition: all 0.3s;
}

.terrain-header:hover {
  background-color: #29b6f6;
}

.terrain-detail {
  padding: 15px;
  background-color: white;
}

/* 水动力卡片样式 */
.hydrodynamics-section {
  margin-top: 20px;
}

.hydro-card {
  margin-bottom: 10px;
  border: 1px solid #b3e5fc;
  border-radius: 6px;
  overflow: hidden;
}

.hydro-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: #81d4fa;
  color: white;
  cursor: pointer;
  transition: all 0.3s;
}

.hydro-header:hover {
  background-color: #4fc3f7;
}

.hydro-detail {
  padding: 15px;
  background-color: white;
}

/* 环境分组样式 */
.env-group {
  margin-bottom: 15px;
  border: 1px solid #b3e5fc;
  border-radius: 6px;
  overflow: hidden;
}

.env-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  background-color: #0288d1;
  color: white;
  cursor: pointer;
  transition: all 0.3s;
}

.env-header:hover {
  background-color: #0277bd;
}

.env-content {
  padding: 15px;
  background-color: white;
}

/* 子环境分组样式 */
.env-subgroup {
  margin-top: 10px;
  border: 1px solid #e1f5fe;
  border-radius: 4px;
  overflow: hidden;
}

.subgroup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: #03a9f4;
  color: white;
  cursor: pointer;
  transition: all 0.3s;
}

.subgroup-header:hover {
  background-color: #039be5;
}

.subgroup-content {
  padding: 12px;
  background-color: #e1f5fe;
}

/* 特征卡片样式 */
.feature-card {
  margin-top: 8px;
  border: 1px solid #e1f5fe;
  border-radius: 4px;
  overflow: hidden;
}

.feature-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: #4fc3f7;
  color: white;
  cursor: pointer;
  transition: all 0.3s;
}

.feature-header:hover {
  background-color: #29b6f6;
}

.feature-detail {
  padding: 12px;
  background-color: white;
}

/* 陆棚类型样式 */
.shelf-type {
  margin-top: 10px;
  border: 1px solid #b3e5fc;
  border-radius: 4px;
  overflow: hidden;
}

.shelf-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: #4fc3f7;
  color: white;
  cursor: pointer;
  transition: all 0.3s;
}

.shelf-header:hover {
  background-color: #29b6f6;
}

.shelf-detail {
  padding: 12px;
  background-color: white;
}

/* 沉积特征样式 */
.deposit-features {
  margin-top: 15px;
}

/* 展开/收起图标 */
.toggle-icon {
  font-weight: bold;
  font-size: 1.2em;
  margin-left: 10px;
  min-width: 20px;
  text-align: center;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .marine-nav {
    flex-wrap: wrap;
  }

  .terrain-header,
  .hydro-header,
  .env-header,
  .subgroup-header,
  .feature-header,
  .shelf-header {
    padding: 10px 12px;
    font-size: 0.95em;
  }

  .terrain-detail,
  .hydro-detail,
  .env-content,
  .subgroup-content,
  .feature-detail,
  .shelf-detail {
    padding: 12px;
  }

  .subsection-title {
    font-size: 1.1em;
  }
}

/* 裂陷盆地 */
.intro-section {
  margin-bottom: 20px;
}

.intro-section p {
  line-height: 1.6;
  margin-bottom: 10px;
  color: #3e2723;
}

.basin-type-nav {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.basin-type-nav button {
  padding: 8px 16px;
  background-color: #d7ccc8;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.basin-type-nav button.active {
  background-color: #5d4037;
  color: white;
}

.subsection-title {
  color: #4e342e;
  margin: 20px 0 15px;
  font-size: 1.2em;
  border-left: 4px solid #5d4037;
  padding-left: 10px;
}

.content-card {
  background-color: #efebe9;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

/* 通用分组样式 */
.group-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  background-color: #8d6e63;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 8px;
}

.group-header:hover {
  background-color: #6d4c41;
}

.group-header:active {
  transform: scale(0.98);
}

.group-content {
  padding: 15px;
  background-color: white;
  border-radius: 0 0 6px 6px;
  margin-bottom: 15px;
  border: 1px solid #d7ccc8;
  border-top: none;
}

/* 盆地类型卡片样式 */
.basin-type-card {
  margin-bottom: 10px;
  border: 1px solid #d7ccc8;
  border-radius: 6px;
  overflow: hidden;
}

.basin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: #efebe9;
  cursor: pointer;
  transition: all 0.3s;
}

.basin-header:hover {
  background-color: #d7ccc8;
}

.type-detail {
  padding: 15px;
  background-color: white;
  border-top: 1px solid #efebe9;
}

/* 展开/收起图标 */
.toggle-icon {
  font-weight: bold;
  font-size: 1.2em;
  margin-left: 10px;
  min-width: 20px;
  text-align: center;
}

/* 列表样式 */
ol {
  padding-left: 20px;
  margin: 10px 0;
}

ol li {
  margin-bottom: 8px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .basin-type-nav {
    flex-wrap: wrap;
  }

  .group-header,
  .basin-header {
    padding: 10px 12px;
    font-size: 0.95em;
  }

  .group-content,
  .type-detail {
    padding: 12px;
  }

  .subsection-title {
    font-size: 1.1em;
  }
}

/* 09湖泊相 */
.content-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.section-title {
  color: #2c3e50;
  border-bottom: 2px solid #0288d1;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.intro-section {
  margin-bottom: 20px;
}

.intro-section p {
  line-height: 1.6;
  margin-bottom: 10px;
  color: #01579b;
}

.lake-type-nav {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.lake-type-nav button {
  padding: 8px 16px;
  background-color: #e1f5fe;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.lake-type-nav button.active {
  background-color: #0288d1;
  color: white;
}

.subsection-title {
  color: #0277bd;
  margin: 20px 0 15px;
  font-size: 1.2em;
  border-left: 4px solid #0288d1;
  padding-left: 10px;
}

.content-card {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.hydrodynamic-section {
  margin: 20px 0;
}

.hydrodynamic-item {
  background-color: #e1f5fe;
  padding: 15px;
  border-radius: 6px;
  margin-bottom: 10px;
  cursor: pointer;
}

.hydrodynamic-item h5 {
  margin: 0;
  color: #01579b;
  display: flex;
  justify-content: space-between;
}

.hydrodynamic-detail {
  padding-top: 10px;
  border-top: 1px dashed #81d4fa;
  margin-top: 10px;
}

.water-property {
  margin: 20px 0;
}

.property-card {
  background-color: #e1f5fe;
  padding: 15px;
  border-radius: 6px;
}

.subfacies-section {
  margin: 20px 0;
}

.subfacies-card {
  background-color: #e1f5fe;
  padding: 15px;
  border-radius: 6px;
  margin-bottom: 15px;
  cursor: pointer;
}

.subfacies-card h4 {
  margin: 0;
  color: #01579b;
  display: flex;
  justify-content: space-between;
}

.subfacies-detail {
  padding-top: 10px;
  border-top: 1px dashed #81d4fa;
  margin-top: 10px;
}

.markers-list {
  background-color: #e1f5fe;
  padding: 15px;
  border-radius: 6px;
  margin: 20px 0;
}

.markers-list ol {
  padding-left: 20px;
  margin: 0;
}

.rock-characteristics {
  margin: 20px 0;
}

.characteristic-card {
  background-color: #e1f5fe;
  padding: 15px;
  border-radius: 6px;
  margin-bottom: 10px;
  cursor: pointer;
}

.characteristic-card h5 {
  margin: 0;
  color: #01579b;
  display: flex;
  justify-content: space-between;
}

.characteristic-detail {
  padding-top: 10px;
  border-top: 1px dashed #81d4fa;
  margin-top: 10px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .lake-type-nav {
    flex-wrap: wrap;
  }
}

/* 10冲积扇 */
.content-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.section-title {
  color: #2c3e50;
  border-bottom: 2px solid #8d6e63;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.intro-section {
  margin-bottom: 20px;
}

.intro-section p {
  line-height: 1.6;
  margin-bottom: 10px;
  font-style: italic;
  color: #5d4037;
}

.river-type-nav {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.river-type-nav button {
  padding: 8px 16px;
  background-color: #d7ccc8;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.river-type-nav button.active {
  background-color: #8d6e63;
  color: white;
}

.subsection-title {
  color: #6d4c41;
  margin: 20px 0 15px;
  font-size: 1.2em;
  border-left: 4px solid #8d6e63;
  padding-left: 10px;
}

.content-card {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.climate-section,
.fan-classification,
.deposition-types,
.subfacies-types {
  margin: 20px 0;
}

.climate-type,
.classification-card,
.type-card,
.subfacies-card {
  background-color: #efebe9;
  padding: 15px;
  border-radius: 6px;
  margin-bottom: 10px;
  cursor: pointer;
}

.climate-type h4,
.classification-card h5,
.type-card h5,
.subfacies-card h4 {
  margin: 0;
  color: #5d4037;
  display: flex;
  justify-content: space-between;
}

.climate-detail,
.classification-detail,
.type-detail,
.subfacies-detail {
  padding-top: 10px;
  border-top: 1px dashed #bcaaa4;
  margin-top: 10px;
}

.classification-cards,
.type-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .classification-cards,
  .type-cards {
    grid-template-columns: 1fr;
  }

  .river-type-nav {
    flex-wrap: wrap;
  }
}

/* 08三角洲相 */
.content-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.section-title {
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.intro-section {
  margin-bottom: 20px;
}

.intro-section p {
  line-height: 1.6;
  margin-bottom: 10px;
}

.river-type-nav {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.river-type-nav button {
  padding: 8px 16px;
  background-color: #ecf0f1;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.river-type-nav button.active {
  background-color: #3498db;
  color: white;
}

.subsection-title {
  color: #2980b9;
  margin: 20px 0 15px;
  font-size: 1.2em;
}

.river-characteristics {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  margin-bottom: 20px;
}

.characteristic-card {
  background-color: #f8fafc;
  padding: 15px;
  border-radius: 6px;
  border-left: 3px solid #3498db;
}

.definition-box {
  background-color: #f0f7ff;
  padding: 15px;
  border-radius: 6px;
  margin: 15px 0;
}

.definition-box h4 {
  margin-top: 0;
  color: #2c3e50;
}

.formation-process {
  margin: 20px 0;
}

.process-step {
  background-color: #f8f9fa;
  border-radius: 6px;
  margin-bottom: 10px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.step-header {
  padding: 12px 15px;
  background-color: #e3f2fd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.step-header h4 {
  margin: 0;
  color: #1565c0;
}

.step-toggle {
  font-weight: bold;
  font-size: 1.2em;
}

.step-content {
  padding: 15px;
  background-color: #fff;
}

.step-content p {
  margin: 0 0 10px 0;
  line-height: 1.6;
}

.step-content p:last-child {
  margin-bottom: 0;
}

.factor-box {
  background-color: #f1f8e9;
  padding: 15px;
  border-radius: 6px;
  margin: 20px 0;
}

.factor-box h4 {
  margin-top: 0;
  color: #2e7d32;
}

.factor-box ul {
  padding-left: 20px;
  margin: 10px 0 0 0;
}

.type-selector,
.subtype-selector,
.fan-type-selector {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.type-selector button,
.subtype-selector button,
.fan-type-selector button {
  padding: 8px 16px;
  background-color: #e3f2fd;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.type-selector button.active,
.subtype-selector button.active,
.fan-type-selector button.active {
  background-color: #2196f3;
  color: white;
}

.facies-section,
.fan-facies-section,
.fan-model-section {
  margin-top: 30px;
}

.facies-section h4,
.fan-facies-section h4,
.fan-model-section h4 {
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: 1.1em;
}

.facies-tabs,
.fan-facies-tabs,
.model-tabs {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

.facies-tab,
.fan-facies-tab,
.model-tab {
  background-color: #f8f9fa;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.facies-header,
.model-header {
  padding: 12px 15px;
  background-color: #e8f5e9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.facies-header h5,
.model-header h5 {
  margin: 0;
  color: #2e7d32;
}

.facies-toggle,
.model-toggle {
  font-weight: bold;
  font-size: 1.2em;
}

.facies-content,
.model-content {
  padding: 15px;
  background-color: #fff;
}

.facies-content p,
.model-content p {
  margin: 0 0 10px 0;
  line-height: 1.6;
}

.facies-content p:last-child,
.model-content p:last-child {
  margin-bottom: 0;
}

/* 07河流相 */
.content-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.section-title {
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.river-type-nav {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.river-type-nav button {
  padding: 8px 16px;
  background-color: #ecf0f1;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.river-type-nav button.active {
  background-color: #3498db;
  color: white;
}

.river-type-nav button:hover {
  background-color: #2980b9;
  color: white;
}

.river-characteristics {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.characteristic-card {
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.classification-tabs,
.subfacies-tabs,
.comparison-tabs {
  display: flex;
  gap: 10px;
  margin: 15px 0;
}

.classification-tabs button,
.subfacies-tabs button,
.comparison-tabs button {
  padding: 8px 16px;
  background-color: #ecf0f1;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.classification-tabs button.active,
.subfacies-tabs button.active,
.comparison-tabs button.active {
  background-color: #3498db;
  color: white;
}

.subsection-title {
  color: #2980b9;
  margin: 20px 0 10px;
}

.subfacies-content {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.comparison-section {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (max-width: 768px) {
  .river-characteristics {
    grid-template-columns: 1fr;
  }
}

/* 06沉积相 */
.content-section {
  font-family: "Arial", sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.section-title {
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.category-nav {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.category-nav button {
  padding: 8px 16px;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.category-nav button.active {
  background-color: #3498db;
  color: white;
  border-color: #3498db;
}

.subsection-title {
  color: #2980b9;
  margin: 25px 0 15px;
  padding-left: 10px;
  border-left: 3px solid #3498db;
}

.facies-type {
  margin-bottom: 20px;
  border: 1px solid #eee;
  border-radius: 5px;
  overflow: hidden;
}

.facies-title {
  background-color: #f8f9fa;
  padding: 12px 15px;
  margin: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.3s;
}

.facies-title:hover {
  background-color: #e9ecef;
}

.toggle-icon {
  display: inline-block;
  width: 20px;
  text-align: center;
  margin-right: 10px;
}

.facies-type > div {
  padding: 15px;
}

.classification-box,
.feature-box {
  background-color: #f8f9fa;
  padding: 12px;
  border-radius: 5px;
  margin: 15px 0;
  border-left: 3px solid #a1887f;
}

.classification-box h5,
.feature-box h5 {
  margin-top: 0;
  color: #5d4037;
}

ul {
  padding-left: 20px;
}

li {
  margin-bottom: 8px;
}

.timeline {
  position: relative;
  padding-left: 30px;
  margin: 20px 0;
}

.timeline-item {
  position: relative;
  padding-bottom: 15px;
}

.timeline-marker {
  position: absolute;
  left: -30px;
  top: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #8d6e63;
  border: 3px solid #d7ccc8;
}

.timeline-content {
  padding-left: 10px;
}

.highlight-box {
  background-color: #e8eaf6;
  padding: 12px 15px;
  border-left: 4px solid #3949ab;
  margin: 15px 0;
  border-radius: 0 4px 4px 0;
}
/* 05沉积构造 */
/* 分类导航 */
.category-nav {
  display: flex;
  gap: 10px;
  margin: 20px 0;
}

.category-nav button {
  padding: 8px 16px;
  background-color: #f1f8fe;
  border: 1px solid #3498db;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.category-nav button.active {
  background-color: #3498db;
  color: white;
}

/* 可折叠标题 */
.structure-title {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 4px;
  margin: 15px 0 10px;
}

.toggle-icon {
  display: inline-block;
  width: 20px;
  text-align: center;
  margin-right: 10px;
}

/* 类型切换 */
.ripple-types,
.bedding-types,
.erosion-types,
.deformation-types {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 10px 0;
}

.ripple-types button,
.bedding-types button,
.erosion-types button,
.deformation-types button {
  padding: 6px 12px;
  background-color: #f1f8fe;
  border: 1px solid #3498db;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.ripple-types button.active,
.bedding-types button.active,
.erosion-types button.active,
.deformation-types button.active {
  background-color: #3498db;
  color: white;
}

.close-btn {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .category-nav {
    flex-direction: column;
  }
}

/* 年代地层 */
.chrono-stratigraphy {
  margin-top: 2rem;
}

.section-content {
  line-height: 1.7;
}

.subsection-title {
  color: #2c3e50;
  font-size: 1.2rem;
  margin: 1.5rem 0 1rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid #ddd;
}

.definition-section,
.boundary-characteristics,
.unit-hierarchy,
.classification-system {
  margin-bottom: 1.5rem;
}

.stratigraphic-units {
  margin: 0.8rem 0;
  padding-left: 1.8rem;
}

.stratigraphic-units li {
  margin-bottom: 0.6rem;
}

.importance-note {
  background-color: #fff8e1;
  padding: 1rem;
  border-left: 4px solid #ffc107;
  margin-top: 1rem;
  border-radius: 0 4px 4px 0;
  font-weight: 500;
}

@media (max-width: 768px) {
  .subsection-title {
    font-size: 1.1rem;
  }

  .stratigraphic-units {
    padding-left: 1.5rem;
  }
}

/* 生物地层 */
.bio-stratigraphy {
  margin-top: 2rem;
}

.section-content {
  line-height: 1.7;
}

.subsection-title {
  color: #2c3e50;
  font-size: 1.2rem;
  margin: 1.5rem 0 1rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid #ddd;
}

.unit-type-title {
  color: #e74c3c;
  font-size: 1.1rem;
  margin: 1.2rem 0 0.8rem;
}

.intro-section,
.research-object,
.bio-facies,
.historical-development,
.bio-stratigraphic-unit {
  margin-bottom: 1.5rem;
}

.historical-note {
  background-color: #f1f8fe;
  padding: 1rem;
  border-left: 4px solid #3498db;
  margin: 1rem 0;
  border-radius: 0 4px 4px 0;
}

.biozone-list {
  margin: 0.8rem 0;
  padding-left: 1.8rem;
}

.biozone-list li {
  margin-bottom: 0.6rem;
}

.note {
  font-style: italic;
  color: #555;
  padding: 0.5rem;
  background-color: #f8f9fa;
  border-left: 3px solid #27ae60;
  margin-top: 0.8rem;
}

@media (max-width: 768px) {
  .subsection-title {
    font-size: 1.1rem;
  }

  .unit-type-title {
    font-size: 1rem;
  }

  .biozone-list {
    padding-left: 1.5rem;
  }
}

/* 岩石地层 */
.rock-stratigraphy {
  margin-top: 2rem;
}

.section-content {
  line-height: 1.7;
}

.definition-box {
  background-color: #f1f8fe;
  padding: 1.5rem;
  border-left: 4px solid #3498db;
  margin-bottom: 1.5rem;
  border-radius: 0 4px 4px 0;
}

.subsection-title {
  color: #2c3e50;
  font-size: 1.2rem;
  margin: 1.5rem 0 1rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid #ddd;
}

.unit-type-title {
  color: #e74c3c;
  font-size: 1.1rem;
  margin: 1.2rem 0 0.8rem;
}

.feature-list,
.unit-level-list,
.special-unit-list {
  margin: 0.8rem 0;
  padding-left: 1.8rem;
}

.feature-list li,
.unit-level-list li,
.special-unit-list li {
  margin-bottom: 0.6rem;
}

.stratigraphy-principle {
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 4px;
  margin: 1.2rem 0;
}

.formal-unit,
.informal-unit,
.special-unit {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: #f8fafc;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .subsection-title {
    font-size: 1.1rem;
  }

  .unit-type-title {
    font-size: 1rem;
  }

  .feature-list,
  .unit-level-list,
  .special-unit-list {
    padding-left: 1.5rem;
  }
}

/* 响应式调整 */
@media (max-width: 992px) {
  .page-container {
    flex-direction: column;
  }

  .sidebar-nav {
    position: static;
    width: auto;
    margin-left: 0;
    margin-bottom: 20px;
    order: -1;
  }

  .stratigraphy-container {
    width: 100%;
    padding: 1rem;
  }
}

/* 新增的导航栏样式 */
/* 主内容容器样式保持不变 */
.main-content {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* 浮动导航栏样式 */
.floating-nav {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 150px;
  padding: 15px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.nav-title {
  font-size: 1rem;
  font-weight: bold;
  color: #2c3e50;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-list li {
  margin-bottom: 8px;
}

.nav-link {
  display: block;
  padding: 6px 10px;
  color: #555;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.nav-link:hover {
  background-color: #f1f8fe;
  color: #3498db;
}

.nav-link.active {
  background-color: #3498db;
  color: white;
  font-weight: bold;
}

/* 响应式调整 */
@media (max-width: 1200px) {
  .floating-nav {
    right: 10px;
    width: 160px;
  }
}

@media (max-width: 992px) {
  .floating-nav {
    display: none; /* 在小屏幕上隐藏浮动导航 */
  }
}

.stratigraphy-container {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  line-height: 1.6;
  background-color: #f9f9f9;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem;
  background-color: #2c3e50;
  color: white;
  border-radius: 8px;
}

.header h1 {
  margin: 0;
  font-size: 2rem;
  color: white;
}

.subtitle {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-top: 1rem;
  line-height: 1.6;
}

.content-section {
  background-color: white;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.section-title {
  color: #2c3e50;
  font-size: 1.5rem;
  border-bottom: 2px solid #e74c3c;
  padding-bottom: 0.5rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
}

.section-intro {
  margin-bottom: 2rem;
  color: #555;
}

.timeline {
  position: relative;
  padding-left: 3rem;
  margin-top: 2rem;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 1rem;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, #3498db, #e74c3c);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  padding-bottom: 1rem;
  border-bottom: 1px dashed #eee;
}

.timeline-item:last-child {
  border-bottom: none;
}

.timeline-period {
  position: absolute;
  left: -4.5rem;
  top: -1.8rem;
  width: 6rem;
  padding: 0.3rem 0.5rem;
  background-color: #e74c3c;
  color: white;
  border-radius: 4px;
  font-size: 0.9rem;
  text-align: center;
  font-weight: bold;
}

.timeline-title {
  color: #2c3e50;
  font-size: 1.3rem;
  margin-top: 0;
  margin-bottom: 1rem;
  padding-left: 1rem;
}

.timeline-content {
  padding-left: 1rem;
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: -2.7rem;
  top: 0.8rem;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background-color: white;
  border: 3px solid #3498db;
  z-index: 1;
}

.stratigraphy-laws {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.stratigraphy-laws li {
  margin-bottom: 0.5rem;
  position: relative;
}

.stage-features {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.stage-features li {
  margin-bottom: 1rem;
}

.stage-theory {
  font-style: italic;
  color: #555;
  padding: 1rem;
  background-color: #f1f8fe;
  border-left: 3px solid #3498db;
  margin-top: 1rem;
}

.definition-box {
  background-color: #f1f8fe;
  padding: 1.5rem;
  border-left: 4px solid #3498db;
  margin: 1.5rem 0;
}

@media (max-width: 768px) {
  .stratigraphy-container {
    padding: 1rem;
  }

  .header {
    padding: 1.5rem;
  }

  .content-section {
    padding: 1.5rem;
  }

  .timeline {
    padding-left: 2rem;
  }

  .timeline::before {
    left: 0.5rem;
  }

  .timeline-item::before {
    left: -1.7rem;
  }

  .timeline-period {
    left: -2.5rem;
    width: 5rem;
  }
}
</style>
