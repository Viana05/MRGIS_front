<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { Picture, Search, InfoFilled } from "@element-plus/icons-vue";

const activeNames = ref(["1"]);
const activeNames2 = ref(["4"]);

// 静态引入图片
import duniteImg from "@/assets/RockIdenti/闪长岩2.jpg";
import quartzDioriteImg from "@/assets/RockIdenti/石英闪长岩.jpg";
import dioritePorphyryImg from "@/assets/RockIdenti/闪长玢岩.jpg";
import andesiteImg from "@/assets/RockIdenti/安山岩.jpg";

// 静态引入辉长岩类图片
import gabbroImg from "@/assets/RockIdenti/辉长岩2.jpg";
import anorthositeImg from "@/assets/RockIdenti/斜长岩.jpg";
import diabaseImg from "@/assets/RockIdenti/辉绿岩.jpg";
import diabasePorphyryImg from "@/assets/RockIdenti/辉绿玢岩.jpg";
import microgabbroImg from "@/assets/RockIdenti/细晶辉长岩.jpg";
import olivineBasaltImg from "@/assets/RockIdenti/橄榄玄武岩.jpg";
import basaltImg from "@/assets/RockIdenti/玄武岩2.jpg";
import amygdaloidalBasaltImg from "@/assets/RockIdenti/杏仁状玄武岩.jpg";

// 静态引入橄榄岩类图片
import duniteImg1 from "@/assets/RockIdenti/纯橄榄岩.jpg";
import pyroxeniteImg from "@/assets/RockIdenti/辉石岩.jpg";
import serpentiniteImg from "@/assets/RockIdenti/蛇纹石化橄榄岩.jpg";
import picriteImg from "@/assets/RockIdenti/苦橄岩.jpg";

// 静态引入正长岩类图片
import syeniteImg from "@/assets/RockIdenti/正长岩.jpg";
import monzoniteImg from "@/assets/RockIdenti/二长岩.jpg";
import syenitePorphyryImg from "@/assets/RockIdenti/正长斑岩.jpg";
import trachyteImg from "@/assets/RockIdenti/粗面岩.jpg";

// 静态引入花岗岩类图片
import granodioriteImg from "@/assets/RockIdenti/花岗闪长岩.jpg";
import granitePorphyryImg from "@/assets/RockIdenti/花岗斑岩.jpg";
import granodioritePorphyryImg from "@/assets/RockIdenti/花岗闪长斑岩.jpg";
import graniteImg from "@/assets/RockIdenti/花岗岩.jpg";
import rhyoliteImg from "@/assets/RockIdenti/流纹岩2.jpg";
import rhyodaciteImg from "@/assets/RockIdenti/流纹英安岩.jpg";
import obsidianImg from "@/assets/RockIdenti/黑曜岩2.jpg";
import perliteImg from "@/assets/RockIdenti/珍珠岩.jpg";
import pitchstoneImg from "@/assets/RockIdenti/松脂岩.jpg";

// 静态引入煌斑岩类、伟晶岩类和细晶岩类图片
import minetteImg from "@/assets/RockIdenti/云煌岩.jpg";
import kimberliteImg from "@/assets/RockIdenti/金伯利岩.jpg";
import apliteImg from "@/assets/RockIdenti/花岗细晶岩.jpg";
import pegmatiteImg from "@/assets/RockIdenti/花岗伟晶岩.jpg";
import spessartiteImg from "@/assets/RockIdenti/闪斜煌斑岩.jpg";

// 响应式数据
const currentSlide = ref(0);
const slideInterval = ref(null);

// 岩石数据
const rocks = [
  {
    name: "闪长岩",
    image: duniteImg,
    macro:
      "主要由中性斜长石和角闪石组成，斜长石含量大于角闪石。颜色浅灰至灰绿色，暗色矿物含量约1/3。自形或半自形粒状结构，有时具似斑状结构。",
    micro:
      "主要矿物为中性斜长石和角闪石(或黑云母)，含少量黑云母、辉石、正长石和石英(＜5%)。块状构造。",
  },
  {
    name: "石英闪长岩",
    image: quartzDioriteImg,
    macro:
      "闪长岩中含有5%-20%的石英。颜色浅灰，暗色矿物含量约15%。除角闪石外，还含黑云母、辉石。半自形粒状结构，块状构造。",
    micro:
      "矿物仍以中性斜长石和角闪石为主，石英含量明显增加(5%-20%)，具半自形粒状结构。",
  },
  {
    name: "闪长玢岩",
    image: dioritePorphyryImg,
    macro:
      "矿物成分与闪长岩相同，为闪长岩体边部产物或浅成侵入岩石。暗灰至暗绿色。斑状结构，斑晶为中性斜长石和角闪石或黑云母。",
    micro:
      "斑状结构明显，斑晶为中性斜长石和角闪石/黑云母，基质为细粒或隐晶质物质。",
  },
  {
    name: "安山岩",
    image: andesiteImg,
    macro:
      "肉眼观察呈浅灰、深灰、红褐至黑色。蚀变后变绿色。常具斑状结构，斑晶为宽板状中长石、辉石、角闪石、黑云母等，块状或气孔构造。",
    micro:
      "主要由中性斜长石和角闪石组成。基质为隐晶质或玻基交织结构。斜长石有环带结构，角闪石和黑云母斑晶具暗化边现象。",
  },
];

// 计算属性
const carouselStyle = computed(() => ({
  transform: `translateX(-${currentSlide.value * 100}%)`,
}));

// 方法
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % rocks.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + rocks.length) % rocks.length;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

const startAutoPlay = () => {
  stopAutoPlay();
  slideInterval.value = setInterval(nextSlide, 5000);
};

const stopAutoPlay = () => {
  if (slideInterval.value) {
    clearInterval(slideInterval.value);
    slideInterval.value = null;
  }
};

// 辉长岩类数据
const gabbroRocks = [
  {
    name: "辉长岩",
    image: gabbroImg,
    macro:
      "主要矿物由基性斜长石和单斜辉石组成。次要矿物有橄榄石、斜方辉石，有时有角闪石和黑云母。岩石颜色深，常呈黑色、灰色等。辉长结构，块状构造，有时呈条带状构造。",
    micro:
      "主要由辉石和基性斜长石组成，粗-中粒辉长结构。副矿物有磁铁矿、钛铁矿、磷灰石。",
  },
  {
    name: "斜长岩",
    image: anorthositeImg,
    macro: "几乎全由斜长石组成，颜色较浅。",
    micro: "主要由基性斜长石组成，几乎不含或含极少量暗色矿物。",
  },
  {
    name: "辉绿岩",
    image: diabaseImg,
    macro:
      "为浅成侵入岩。未经蚀变的辉绿岩，颜色多为深灰或黑色，风化后呈浅绿或绿灰色。具辉绿结构。",
    micro:
      "主要由基性斜长石和单斜辉石组成，具典型的辉绿结构（白色的细长条斜长石搭成三角架，其间充填粒状的辉石）。",
  },
  {
    name: "辉绿玢岩",
    image: diabasePorphyryImg,
    macro: "具斑状结构的辉绿岩，斑晶为斜长石和暗色矿物。",
    micro: "斑状结构，斑晶为斜长石和暗色矿物，基质为辉绿结构。",
  },
  {
    name: "细晶辉长岩",
    image: microgabbroImg,
    macro: "成分与辉长岩相同，颜色较深，具细粒结构。",
    micro: "矿物组成与辉长岩相同，但具细粒结构而不具其它结构为特征。",
  },
  {
    name: "橄榄玄武岩",
    image: olivineBasaltImg,
    macro: "能见到橄榄石斑晶，常见橄榄石的蚀变产物——伊丁石。基质为隐晶质。",
    micro: "斑状结构，斑晶为橄榄石（常蚀变为伊丁石），基质为隐晶质或微晶结构。",
  },
  {
    name: "玄武岩",
    image: basaltImg,
    macro:
      "肉眼观察为隐晶质，颜色多为黑色，黑绿色，有时为暗紫色。粗玄结构或间隐结构。有时具斑状结构。块状构造、气孔状构造。厚层玄武岩中常见柱状节理。",
    micro:
      "矿物成分以辉石和基性斜长石为主，这是与安山岩的主要区别。基质常为隐晶质或玻璃质。",
  },
  {
    name: "杏仁状玄武岩",
    image: amygdaloidalBasaltImg,
    macro:
      "具有气孔构造的玄武岩，气孔中充填有白色的沸石等矿物，形成杏仁状构造。",
    micro: "基质特征与玄武岩相同，气孔中充填有次生矿物如沸石、方解石、石英等。",
  },
];

// 辉长岩类轮播控制
const gabbroCurrentSlide = ref(0);
const gabbroSlideInterval = ref(null);

const gabbroCarouselStyle = computed(() => ({
  transform: `translateX(-${gabbroCurrentSlide.value * 100}%)`,
}));

const gabbroNextSlide = () => {
  gabbroCurrentSlide.value =
    (gabbroCurrentSlide.value + 1) % gabbroRocks.length;
};

const gabbroPrevSlide = () => {
  gabbroCurrentSlide.value =
    (gabbroCurrentSlide.value - 1 + gabbroRocks.length) % gabbroRocks.length;
};

const gabbroGoToSlide = (index) => {
  gabbroCurrentSlide.value = index;
};

const gabbroStartAutoPlay = () => {
  gabbroStopAutoPlay();
  gabbroSlideInterval.value = setInterval(gabbroNextSlide, 5000);
};

const gabbroStopAutoPlay = () => {
  if (gabbroSlideInterval.value) {
    clearInterval(gabbroSlideInterval.value);
    gabbroSlideInterval.value = null;
  }
};

// 橄榄岩类数据
const peridotiteRocks = [
  {
    name: "纯橄榄岩",
    image: duniteImg1,
    macro: "几乎全由橄榄石组成。橄榄石为浅绿色，粒状，玻璃光泽，没有解理。",
    micro: "橄榄石呈自形粒状或他形粒状。",
  },
  {
    name: "辉石岩",
    image: pyroxeniteImg,
    macro: "几乎全由辉石组成。",
    micro: "斜方辉石和单斜辉石均有。",
  },
  {
    name: "蛇纹石化橄榄岩",
    image: serpentiniteImg,
    macro: "网格状构造，有粒状橄榄石的残核。蛇纹石为橄榄岩蚀变产物。",
    micro:
      "蛇纹石化从岩石裂隙或橄榄石粒间开始，蚀变不彻底，仍残留有小颗粒橄榄石（残留结构），蛇纹石化过程中析出铁质，生成磁铁矿小微粒，呈不规则地分布在蛇纹石中。",
  },
  {
    name: "苦橄岩",
    image: picriteImg,
    macro: "以橄榄石为主，可出现少量的角闪石、黑云母等。成分相当于橄榄岩。",
    micro: "镜下特征与橄榄岩相似，可见橄榄石与少量角闪石、黑云母共生。",
  },
];

// 橄榄岩类轮播控制
const peridotiteCurrentSlide = ref(0);
const peridotiteSlideInterval = ref(null);

const peridotiteCarouselStyle = computed(() => ({
  transform: `translateX(-${peridotiteCurrentSlide.value * 100}%)`,
}));

const peridotiteNextSlide = () => {
  peridotiteCurrentSlide.value =
    (peridotiteCurrentSlide.value + 1) % peridotiteRocks.length;
};

const peridotitePrevSlide = () => {
  peridotiteCurrentSlide.value =
    (peridotiteCurrentSlide.value - 1 + peridotiteRocks.length) %
    peridotiteRocks.length;
};

const peridotiteGoToSlide = (index) => {
  peridotiteCurrentSlide.value = index;
};

const peridotiteStartAutoPlay = () => {
  peridotiteStopAutoPlay();
  peridotiteSlideInterval.value = setInterval(peridotiteNextSlide, 5000);
};

const peridotiteStopAutoPlay = () => {
  if (peridotiteSlideInterval.value) {
    clearInterval(peridotiteSlideInterval.value);
    peridotiteSlideInterval.value = null;
  }
};

// 正长岩类数据
const syeniteRocks = [
  {
    name: "正长岩",
    image: syeniteImg,
    macro: "肉红色或浅土黄色的板状正长石为主，还有少量的斜长石和黑云母。",
    micro: "以正长石为主，暗色矿物为黑云母。",
  },
  {
    name: "二长岩",
    image: monzoniteImg,
    macro: "由钾长石、斜长石大致各半组成。",
    micro: "钾长石和斜长石含量相近，常含少量黑云母或角闪石。",
  },
  {
    name: "正长斑岩",
    image: syenitePorphyryImg,
    macro: "斑状结构，成分与正长岩相同。",
    micro: "斑晶为正长石，基质为细粒正长石和少量暗色矿物。",
  },
  {
    name: "粗面岩",
    image: trachyteImg,
    macro: "断口粗糙，斑状结构。透长石和斜长石组成斑晶，基质为隐晶质。",
    micro:
      "斑状结构，斑晶以透长石为主，并有少量黑云母、斜长石，基质为粗面结构或正斑结构。",
  },
];

// 正长岩类轮播控制
const syeniteCurrentSlide = ref(0);
const syeniteSlideInterval = ref(null);

const syeniteCarouselStyle = computed(() => ({
  transform: `translateX(-${syeniteCurrentSlide.value * 100}%)`,
}));

const syeniteNextSlide = () => {
  syeniteCurrentSlide.value =
    (syeniteCurrentSlide.value + 1) % syeniteRocks.length;
};

const syenitePrevSlide = () => {
  syeniteCurrentSlide.value =
    (syeniteCurrentSlide.value - 1 + syeniteRocks.length) % syeniteRocks.length;
};

const syeniteGoToSlide = (index) => {
  syeniteCurrentSlide.value = index;
};

const syeniteStartAutoPlay = () => {
  syeniteStopAutoPlay();
  syeniteSlideInterval.value = setInterval(syeniteNextSlide, 5000);
};

const syeniteStopAutoPlay = () => {
  if (syeniteSlideInterval.value) {
    clearInterval(syeniteSlideInterval.value);
    syeniteSlideInterval.value = null;
  }
};

// 响应式数据（花岗岩类特有前缀）
const graniticCurrentSlide = ref(0);
const graniticSlideInterval = ref(null);

// 花岗岩类岩石数据
const graniticRocks = [
  {
    name: "花岗闪长岩",
    image: granodioriteImg,
    macro:
      "为花岗岩向闪长岩的过渡岩石，与花岗岩的区别：①斜长石＞钾长石；②石英较少，含量在25％左右；③暗色矿物增多，10％－15％，并常有角闪石出现。颜色稍深，呈灰绿色或暗灰色。",
    micro:
      "主要矿物有石英(约20%)。酸性或中性斜长石占全部长石的65%-90%，碱性长石占全部长石的35%以下。暗色矿物约15%，以角闪石为主，还有黑云母和辉石。副矿物有榍石、磷灰石、磁铁矿、锆石、褐帘石、独居石等。",
  },
  {
    name: "花岗斑岩",
    image: granitePorphyryImg,
    macro:
      "成分相当于花岗岩的浅成岩。全晶质、斑状结构。斑晶主要是碱性长石和石英，有时也有黑云母、角闪石等。致密块状构造。",
    micro: "基质成分与斑晶相同，隐晶至微晶结构。",
  },
  {
    name: "花岗闪长斑岩",
    image: granodioritePorphyryImg,
    macro:
      "矿物成分相当于花岗闪长岩的浅成岩。全晶质、斑状结构。斑晶以斜长石为主，但有少量的铁镁矿物、钾长石和石英作斑晶。",
    micro: "基质为细粒石英、斜长石和碱性长石。",
  },
  {
    name: "花岗岩",
    image: graniteImg,
    macro:
      "中一细粒花岗结构，块状构造。石英占30％左右，长石占60％左右，暗色矿物（黑云母）＜10％。钾长石＞斜长石。",
    micro: "典型的花岗结构，石英呈他形粒状充填于长石间隙中。",
  },
  {
    name: "流纹岩",
    image: rhyoliteImg,
    macro: "具流纹构造。常呈浅色，如浅灰、粉红或淡黄色。",
    micro: "斑晶主要为石英和透长石，基质为隐晶质或玻璃质。",
  },
  {
    name: "流纹英安岩",
    image: rhyodaciteImg,
    macro:
      "成分与花岗闪长岩相同。斑晶为斜长石、角闪石、黑云母，可有少量石英和钾长石。",
    micro: "基质为隐晶质或玻璃质。",
  },
  {
    name: "黑曜岩",
    image: obsidianImg,
    macro: "黑色，灰黑色玻璃岩石。玻璃光泽，贝壳状断口，有时含少量透长石斑晶。",
    micro: "主要为玻璃质，偶见微晶。",
  },
  {
    name: "珍珠岩",
    image: perliteImg,
    macro: "具珍珠裂缝的玻璃质岩石（珍珠构造），有时含有各色的珍珠球。",
    micro: "玻璃质结构，珍珠状裂纹明显。",
  },
  {
    name: "松脂岩",
    image: pitchstoneImg,
    macro: "树脂光泽或油脂光泽。颜色通常为深褐色或黑色。",
    micro: "主要为玻璃质，含少量微晶。",
  },
];

// 计算属性（花岗岩类特有前缀）
const graniticCarouselStyle = computed(() => ({
  transform: `translateX(-${graniticCurrentSlide.value * 100}%)`,
}));

// 方法（花岗岩类特有前缀）
const graniticNextSlide = () => {
  graniticCurrentSlide.value =
    (graniticCurrentSlide.value + 1) % graniticRocks.length;
};

const graniticPrevSlide = () => {
  graniticCurrentSlide.value =
    (graniticCurrentSlide.value - 1 + graniticRocks.length) %
    graniticRocks.length;
};

const graniticGoToSlide = (index) => {
  graniticCurrentSlide.value = index;
};

const graniticStartAutoPlay = () => {
  graniticStopAutoPlay();
  graniticSlideInterval.value = setInterval(graniticNextSlide, 5000);
};

const graniticStopAutoPlay = () => {
  if (graniticSlideInterval.value) {
    clearInterval(graniticSlideInterval.value);
    graniticSlideInterval.value = null;
  }
};

// 响应式数据（煌斑岩类特有前缀）
const lamprophyreCurrentSlide = ref(0);
const lamprophyreSlideInterval = ref(null);

// 煌斑岩类岩石数据
const lamprophyreRocks = [
  {
    name: "云煌岩",
    image: minetteImg,
    macro:
      "主要成分为黑云母，其次为正长石。黑云母多呈褐色，略带红色，有时为绿色，假六方片状、自形晶。斑状结构，斑晶多为黑云母。多分布在花岗岩、花岗闪长岩和正长岩体内部。",
    micro:
      "黑云母自形程度好，有时可见斜长石的环带。碱性长石晶形完整，但易于分解而变得浑浊。基质主要由钾长石、黑云母组成。",
  },
  {
    name: "闪正煌岩",
    image: spessartiteImg,
    macro:
      "由富钾碱性长石、普通角闪石和普通辉石组成，并含少量斜长石、黑云母、石英、磷灰石、磁铁矿等。",
    micro: "斑状结构，角闪石和辉石自形程度好。",
  },
  {
    name: "云斜煌岩",
    image: minetteImg, // 使用相同图片，实际使用时请替换
    macro: "由斜长石、黑云母、普通辉石组成。有时呈斑状结构。",
    micro: "斜长石与黑云母、辉石共生，常见半自形结构。",
  },
  {
    name: "闪斜煌斑岩",
    image: spessartiteImg,
    macro:
      "由普通角闪石和斜长石组成，角闪石呈斑晶，含量在40％以上。可含有透辉石、橄榄石（假像）、黑云母、正长石、石英、磷灰石。",
    micro:
      "角闪石的自形程度很好。斑状结构，斑晶为角闪石，基质由斜长石及角闪石组成。",
  },
  {
    name: "金伯利岩",
    image: kimberliteImg,
    macro: "主要由橄榄石、铬透辉石、金云母组成，具角砾构造。",
    micro:
      "角砾状构造，斑状结构，角砾多为早期熔岩，斑晶为橄榄石（已蛇纹石化），熔蚀后成圆粒状。岩石碳酸盐化、金云母化、蛇纹石化、绿泥石化强烈。",
  },
  {
    name: "花岗细晶岩",
    image: apliteImg,
    macro: "细晶结构，主要由石英、钾长石、斜长石组成。",
    micro: "细粒等粒结构，矿物颗粒均匀细小。",
  },
  {
    name: "花岗伟晶岩",
    image: pegmatiteImg,
    macro: "伟晶结构，晶体颗粒粗大，有时呈文象结构。",
    micro: "矿物晶体巨大，常见石英和长石的文象交生。",
  },
];

// 计算属性（煌斑岩类特有前缀）
const lamprophyreCarouselStyle = computed(() => ({
  transform: `translateX(-${lamprophyreCurrentSlide.value * 100}%)`,
}));

// 方法（煌斑岩类特有前缀）
const lamprophyreNextSlide = () => {
  lamprophyreCurrentSlide.value =
    (lamprophyreCurrentSlide.value + 1) % lamprophyreRocks.length;
};

const lamprophyrePrevSlide = () => {
  lamprophyreCurrentSlide.value =
    (lamprophyreCurrentSlide.value - 1 + lamprophyreRocks.length) %
    lamprophyreRocks.length;
};

const lamprophyreGoToSlide = (index) => {
  lamprophyreCurrentSlide.value = index;
};

const lamprophyreStartAutoPlay = () => {
  lamprophyreStopAutoPlay();
  lamprophyreSlideInterval.value = setInterval(lamprophyreNextSlide, 5000);
};

const lamprophyreStopAutoPlay = () => {
  if (lamprophyreSlideInterval.value) {
    clearInterval(lamprophyreSlideInterval.value);
    lamprophyreSlideInterval.value = null;
  }
};

// 生命周期钩子
onMounted(() => {
  startAutoPlay();
  gabbroStartAutoPlay();
  peridotiteStartAutoPlay();
  syeniteStartAutoPlay();
  graniticStartAutoPlay();
  lamprophyreStartAutoPlay();
});

onBeforeUnmount(() => {
  stopAutoPlay();
  gabbroStopAutoPlay();
  peridotiteStopAutoPlay();
  syeniteStopAutoPlay();
  graniticStopAutoPlay();
  lamprophyreStopAutoPlay();
});
</script>

<template>
  <div class="geology-container">
    <el-tabs type="border-card" class="geology-tabs">
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Picture /></el-icon>
            <span>三大岩经典图集</span>
          </span>
        </template>
        <!-- 轮播图 -->
        <div class="block text-center">
          <el-carousel
            height="600px"
            width="80%"
            motion-blur
            class="rock-carousel"
          >
            <el-carousel-item>
              <div class="carousel-image-container">
                <img
                  src="@/assets/RockIdenti/Dan Bristy.jpg"
                  class="carousel-image"
                />
                <div class="image-caption">Dan Bristy（爱尔兰）</div>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="carousel-image-container">
                <img
                  src="@/assets/RockIdenti/希腊岩洞.jpg"
                  class="carousel-image"
                />
                <div class="image-caption">希腊岩洞</div>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="carousel-image-container">
                <img
                  src="@/assets/RockIdenti/Rock Kicker.jpg"
                  class="carousel-image"
                />
                <div class="image-caption">Rock Kicker（厄瓜多尔）</div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>

        <div class="geology-intro">
          <p class="geology-text">
            岩石是天然产出的，由矿物或类似矿物的物质(如有机质、玻璃、非晶质等)组成的固态集合体。它是组成地壳的物质之一，是构成地球岩石圈的主要成分。
          </p>
          <p class="geology-text">
            岩石按成因可分为火成岩、沉积岩和变质岩三大类。先存岩石可以在高温等条件下发生熔融形成岩浆，岩浆冷凝固结形成火成岩。
          </p>
          <div class="rock-image-container">
            <img
              src="@/assets/RockIdenti/岩石循环动图.jpg"
              class="rock-image"
              alt="岩石循环"
            />
            <div class="content-image-caption">岩石循环</div>
          </div>
          <p class="geology-text">
            先存的火成岩、沉积岩和变质岩暴露于地表后经过风化、剥蚀、搬运和沉积可以形成沉积岩。或者在不同的温度、压力等外界作用下发生化学成分、矿物成分、结构构造等的改变，形成与原先岩石特征不同的变质岩。这些岩石相互转化的过程被称为——岩石循环。
          </p>
          <div class="rock-image-container">
            <img
              src="@/assets/RockIdenti/岩石循环原理.jpg"
              class="rock-image"
              alt="岩石循环原理"
            />
            <div class="content-image-caption">岩石循环原理</div>
          </div>
        </div>

        <div class="demo-collapse">
          <el-collapse v-model="activeNames" accordion class="rock-collapse">
            <!-- 岩浆岩 -->
            <el-collapse-item
              title="01 岩浆岩"
              name="1"
              class="collapse-item igneous rock-section"
            >
              <div class="rock-content">
                <p>
                  火成岩又称岩浆岩，是在岩石循环过程中产生的三大岩类的一种，是指岩浆冷却后（地壳里喷出的岩浆，或者被融化的现存岩石），成形的一种岩石。
                </p>

                <div class="rock-image-container">
                  <img
                    src="@/assets/RockIdenti/火成岩.jpg"
                    class="rock-image"
                    alt="火成岩"
                  />
                  <div class="content-image-caption">火成岩</div>
                </div>
                <p>
                  目前，已经发现的岩浆岩有700多种，大部分是在地壳里面的岩石。一般来说，岩浆岩易出现于板块交界地带的火山区。
                </p>
                <div class="rock-image-container">
                  <img
                    src="@/assets/RockIdenti/火成岩的形成.jpg"
                    class="rock-image"
                    alt="火成岩的形成"
                  />
                  <div class="content-image-caption">火成岩的形成</div>
                </div>
                <p>
                  火成岩可以分为两种基本类型。第一种为<span
                    class="rock-term term-primary"
                    >侵入岩（Intrusive rocks）</span
                  >，是指当上覆岩层压力减轻时，软流层中的岩浆就钻出，在地壳深处冷凝而形成的岩石。例如闪长岩、辉长岩、花岗岩、伟晶岩和橄榄岩等。闪长岩为典型的中性岩，整体呈暗灰色。其中主要成分为白色的斜长石和深色的角闪石，还含有少量的辉石、黑云母和石英等。
                </p>
                <div class="rock-image-container">
                  <img
                    src="@/assets/RockIdenti/侵入岩.jpg"
                    class="rock-image"
                    alt="侵入岩"
                  />
                  <div class="content-image-caption">侵入岩</div>
                </div>
                <p class="highlight-info">
                  <strong>闪长岩</strong
                  >为典型的中性岩，整体呈暗灰色。其中主要成分为白色的斜长石和深色的角闪石，还含有少量的辉石、黑云母和石英等。
                </p>
                <p class="highlight-info">
                  <strong>辉长岩</strong
                  >为来源于深部地壳或上地幔的玄武质岩浆经侵入作用形成，主要矿物成分为基性斜长石和单斜辉石，广泛分布于地壳的各种构造环境和月球上。
                </p>
                <p class="highlight-info">
                  <strong>伟晶岩</strong
                  >是由巨粒矿物组成的淡色结晶岩，是富含挥发分的硅酸盐残浆，侵入到火成岩或围岩裂隙中缓慢结晶而成的。
                </p>
                <div class="rock-comparison-container">
                  <!-- 辉长岩 -->
                  <div class="comparison-image-wrapper">
                    <img
                      src="@/assets/RockIdenti/辉长岩1.jpg"
                      class="comparison-image"
                      alt="辉长岩"
                    />
                    <span class="comparison-caption"
                      >辉长岩<small>(点击放大查看矿物结构)</small></span
                    >
                  </div>
                  <!-- 伟晶岩 -->
                  <div class="comparison-image-wrapper">
                    <img
                      src="@/assets/RockIdenti/伟晶岩.jpg"
                      class="comparison-image"
                      alt="伟晶岩"
                    />
                    <span class="comparison-caption"
                      >伟晶岩<small>(点击放大查看矿物结构)</small></span
                    >
                  </div>
                  <!-- 辉长岩 -->
                  <div class="comparison-image-wrapper">
                    <img
                      src="@/assets/RockIdenti/闪长岩1.jpg"
                      class="comparison-image"
                      alt="闪长岩"
                    />
                    <span class="comparison-caption"
                      >闪长岩<small>(点击放大查看矿物结构)</small></span
                    >
                  </div>
                </div>
                <p>
                  第二种为<span class="rock-term term-danger"
                    >喷出岩（Extrusive rocks）</span
                  >，是指岩浆喷出地表冷凝而形成的火成岩。这种岩石包括安山岩、玄武岩、英安岩、黑曜岩和流纹岩等。
                </p>
                <div class="rock-image-container">
                  <img
                    src="@/assets/RockIdenti/喷出岩.jpg"
                    class="rock-image"
                    alt="喷出岩"
                  />
                  <div class="content-image-caption">喷出岩</div>
                </div>
                <p class="highlight-danger">
                  <strong>玄武岩</strong
                  >是一种细粒致密、外观呈黑色的火成岩，由基性岩浆喷发凝结而成，主要成分是硅铝酸钠或硅铝酸钙。玄武岩岩浆的黏度小，易于流动，常形成广大的熔岩台地，所以分布很广。
                </p>
                <p class="highlight-danger">
                  <strong>黑曜岩（黑曜石）</strong
                  >是一种致密块状或熔渣状的酸性玻璃质火山岩，和松脂岩、珍珠岩都统称为酸性火山玻璃岩。呈致密块状，有时见石泡构造。
                </p>
                <p class="highlight-danger">
                  <strong>流纹岩</strong
                  >的化学成分与花岗岩相同，是一种火山喷出岩。大多数流纹岩都具斑状结构，表明结晶作用在喷发作用以前就已开始。
                </p>
                <p class="highlight-danger">
                  <strong>安山岩</strong
                  >为中性喷出岩，分布范围仅次于玄武岩。岩石一般为灰、灰绿、淡紫或紫红色，其中含有少量斜长石、角闪石、辉石和黑云母的斑晶，且斑晶常呈定向排列，这是由于岩浆是在流动中冷却的。
                </p>
                <div class="rock-comparison-container">
                  <!-- 玄武岩 -->
                  <div class="comparison-image-wrapper">
                    <img
                      src="@/assets/RockIdenti/玄武岩1.jpg"
                      class="comparison-image"
                      alt="玄武岩"
                    />
                    <span class="comparison-caption"
                      >玄武岩<small>(点击放大查看矿物结构)</small></span
                    >
                  </div>
                  <!-- 黑曜岩 -->
                  <div class="comparison-image-wrapper">
                    <img
                      src="@/assets/RockIdenti/黑曜岩1.jpg"
                      class="comparison-image"
                      alt="黑曜岩"
                    />
                    <span class="comparison-caption"
                      >黑曜岩<small>(点击放大查看矿物结构)</small></span
                    >
                  </div>
                  <!-- 流纹岩 -->
                  <div class="comparison-image-wrapper">
                    <img
                      src="@/assets/RockIdenti/流纹岩1.jpg"
                      class="comparison-image"
                      alt="流纹岩"
                    />
                    <span class="comparison-caption"
                      >流纹岩<small>(点击放大查看矿物结构)</small></span
                    >
                  </div>
                  <!-- 安山岩 -->
                  <div class="comparison-image-wrapper">
                    <img
                      src="@/assets/RockIdenti/安山岩.jpg"
                      class="comparison-image"
                      alt="安山岩"
                    />
                    <span class="comparison-caption"
                      >安山岩<small>(点击放大查看矿物结构)</small></span
                    >
                  </div>
                </div>
              </div>
            </el-collapse-item>
            <!-- 沉积岩 -->
            <el-collapse-item
              title="02 沉积岩"
              name="2"
              class="collapse-item sedimentary rock-section"
            >
              <p>
                沉积岩是在岩石循环过程中产生的，三种组成地球岩石圈的主要岩石之一。
              </p>
              <div class="rock-image-container">
                <img
                  src="@/assets/RockIdenti/沉积岩.jpg"
                  class="rock-image"
                  alt="沉积岩"
                />
                <div class="content-image-caption">沉积岩</div>
              </div>
              <p>
                沉积岩是在地壳发展演化过程中，在地表或接近地表的常温常压条件下，任何先成岩遭受风化剥蚀作用的破坏产物，以及生物作用与火山作用的产物，在原地或经过外力的搬运，所形成的沉积层，又经成岩作用而成的岩石。
              </p>
              <div class="rock-row-container">
                <!-- 物理风化作用 -->
                <div class="rock-row-item">
                  <div class="rock-image-container">
                    <img
                      src="@/assets/RockIdenti/物理风化作用.jpg"
                      class="rock-image"
                      alt="物理风化作用"
                    />
                    <div class="content-image-caption">物理风化作用</div>
                  </div>
                </div>
                <!-- 化学风化作用 -->
                <div class="rock-row-item">
                  <div class="rock-image-container">
                    <img
                      src="@/assets/RockIdenti/化学风化作用.jpg"
                      class="rock-image"
                      alt="化学风化作用"
                    />
                    <div class="content-image-caption">化学风化作用</div>
                  </div>
                </div>
                <!-- 生物风化作用 -->
                <div class="rock-row-item">
                  <div class="rock-image-container">
                    <img
                      src="@/assets/RockIdenti/生物风化作用.jpg"
                      class="rock-image"
                      alt="生物风化作用"
                    />
                    <div class="content-image-caption">生物风化作用</div>
                  </div>
                </div>
              </div>
              <p>沉积岩根据其形成特征，可分为三种基本类型。</p>
              <p>
                第一种为<span class="rock-term term-success"
                  >碎屑沉积岩（Clastic sedimentary rocks）</span
                >，它们的形成主要与外动力地质因素有关，大多为机械破碎的产物经搬运沉积而成。如角砾岩、砾岩、砂岩和粉砂岩等。
              </p>
              <p class="highlight-success">
                <strong>角砾岩</strong
                >是由从母岩上破碎下来的，颗粒直径大于2毫米的碎屑，经过搬运、沉积、压实、胶结而形成的岩石。组成角砾岩的碎屑物质，一般因原地堆积或搬运距离很短，因此磨圆度极低，分选很差，形状各异，棱角分明。角砾岩能很好反映母岩成分和性质，它与母岩关系较砾岩更为密切。角砾岩最常见的形成位置之一是露头的底部，物理风化碎屑堆积处。另一种是在离露头不远的河流沉积物或冲积扇上。
              </p>
              <p class="highlight-success">
                <strong>砾岩</strong
                >是一种由从母岩上破碎下来的，颗粒直径大于2毫米的碎屑，经过搬运、沉积、压实、胶结而形成的岩石。砾岩比较粗糙，可以见到明显的砾石，如果胶结成岩石的砾石具有棱角，则称为角砾岩。
              </p>
              <p class="highlight-success">
                <strong>砂岩</strong
                >主要由各种砂粒胶结而成的，颗粒直径在0.05-2mm，其中砂粒含量要大于50%，结构稳定，通常呈淡褐色或红色，主要含硅、钙、黏土和氧化铁。
              </p>
              <p class="highlight-success">
                <strong>粉砂岩</strong
                >由粒径为0.0625～0.0039毫米的粉砂的含量占50%以粉砂岩标本的一种碎屑沉积岩。粉砂岩的颜色多种多样，随混入物的成分不同而变。粉砂岩是在经过了长距离搬运、水动力条件比较安静、沉积速度缓慢的环境下形成的。
              </p>
              <div class="rock-comparison-container">
                <!-- 角砾岩 -->
                <div class="comparison-image-wrapper">
                  <img
                    src="@/assets/RockIdenti/角砾岩.jpg"
                    class="comparison-image"
                    alt="角砾岩"
                  />
                  <span class="comparison-caption"
                    >角砾岩<small>(点击放大查看矿物结构)</small></span
                  >
                </div>
                <!-- 砾岩 -->
                <div class="comparison-image-wrapper">
                  <img
                    src="@/assets/RockIdenti/砾岩1.jpg"
                    class="comparison-image"
                    alt="砾岩"
                  />
                  <span class="comparison-caption"
                    >砾岩<small>(点击放大查看矿物结构)</small></span
                  >
                </div>
                <!-- 砂岩 -->
                <div class="comparison-image-wrapper">
                  <img
                    src="@/assets/RockIdenti/砂岩.jpg"
                    class="comparison-image"
                    alt="砂岩"
                  />
                  <span class="comparison-caption"
                    >砂岩<small>(点击放大查看矿物结构)</small></span
                  >
                </div>
                <!-- 粉砂岩 -->
                <div class="comparison-image-wrapper">
                  <img
                    src="@/assets/RockIdenti/粉砂岩.jpg"
                    class="comparison-image"
                    alt="粉砂岩"
                  />
                  <span class="comparison-caption"
                    >粉砂岩<small>(点击放大查看矿物结构)</small></span
                  >
                </div>
              </div>
              <p>
                第二种为<span class="rock-term term-warning"
                  >化学沉积岩（Chemical sedimentary rocks）</span
                >。是指由母岩风化产物中的溶解物质通过化学作用沉积而成的岩石。
              </p>
              <div class="rock-image-container">
                <img
                  src="@/assets/RockIdenti/化学作用沉积.jpg"
                  class="rock-image"
                  alt="化学作用沉积"
                />
                <div class="content-image-caption">化学作用沉积</div>
              </div>
              <p>
                地球上最重要的铁矿床是在沉积岩中发现的。它们是经过在海洋和淡水中铁和氧结合的化学反应形成的。
              </p>
              <p>
                地球上几乎所有的主要铁矿床都在18亿年前形成的岩石中。当时地球上的海洋含有大量的溶解铁，几乎没有溶解氧。
              </p>
              <p>
                当第一个有光合作用能力的生物开始向水中释放氧气时，氧气立即与大量溶解的铁结合，产生赤铁矿或磁铁矿，铁矿床逐渐开始形成。这些矿物大量地沉积在海底，形成了现在所说的条带状含铁建造(Banded
                iron formation)。
              </p>
              <div class="rock-comparison-container">
                <!-- 铁矿石 -->
                <div class="comparison-image-wrapper">
                  <img
                    src="@/assets/RockIdenti/铁矿石.jpg"
                    class="comparison-image"
                    alt="铁矿石"
                  />
                  <span class="comparison-caption"
                    >铁矿石<small>(点击放大查看矿物结构)</small></span
                  >
                </div>
                <!-- 赤铁矿 -->
                <div class="comparison-image-wrapper">
                  <img
                    src="@/assets/RockIdenti/赤铁矿.jpg"
                    class="comparison-image"
                    alt="赤铁矿"
                  />
                  <span class="comparison-caption"
                    >赤铁矿<small>(点击放大查看矿物结构)</small></span
                  >
                </div>
              </div>
              <p>
                最后一种为<span class="rock-term term-purple"
                  >生物沉积岩（Organic sedimentary rocks）</span
                >。生物沉积岩是由生物体的堆积造成的，如花粉、孢子、贝壳、珊瑚等大量堆积，经过成岩作用形成。
              </p>
              <p>
                例如部分生物成因的石灰岩（limestone）：白垩岩（Chalk）、贝壳灰岩（Coquina）等。
              </p>
              <div class="rock-image-container">
                <img
                  src="@/assets/RockIdenti/沉积岩.jpg"
                  class="rock-image"
                  alt="沉积岩"
                />
                <div class="content-image-caption">沉积岩</div>
              </div>
              <p class="highlight-purple">
                <strong>白垩岩</strong
                >是一种软质、白色、多孔的沉积碳酸盐岩，是一种由方解石组成的石灰岩。它是在相当深的海洋条件下，由一种叫做颗石藻的微生物脱落下来的细小方解石壳逐渐堆积而成的。
              </p>
              <p class="highlight-purple">
                <strong>贝壳灰岩</strong
                >是一种由完整的生物贝壳被泥晶方解石固结而成的石灰岩。
              </p>
              <p>
                按生物种类不同可分为腕足类贝壳灰岩、软体类贝壳灰岩等。也可直接按生物种类命名，如有孔虫灰岩、纺锤虫灰岩等。
              </p>
              <div class="rock-comparison-container">
                <!-- 白垩岩 -->
                <div class="comparison-image-wrapper">
                  <img
                    src="@/assets/RockIdenti/白垩岩.jpg"
                    class="comparison-image"
                    alt="白垩岩"
                  />
                  <span class="comparison-caption">白垩岩</span>
                </div>
                <!-- 贝壳灰岩 -->
                <div class="comparison-image-wrapper">
                  <img
                    src="@/assets/RockIdenti/贝壳灰岩.jpg"
                    class="comparison-image"
                    alt="贝壳灰岩"
                  />
                  <span class="comparison-caption"
                    >贝壳灰岩<small>(点击放大查看矿物结构)</small></span
                  >
                </div>
              </div>
            </el-collapse-item>
            <!-- 变质岩 -->
            <el-collapse-item
              title="03 变质岩"
              name="3"
              class="collapse-item metamorphic rock-section"
            >
              <p>变质岩是通过变质作用形成的三大岩之一。</p>
              <div class="rock-image-container">
                <img
                  src="@/assets/RockIdenti/变质岩.jpg"
                  class="rock-image"
                  alt="变质岩"
                />
                <div class="content-image-caption">变质岩</div>
              </div>
              <p>
                变质作用是指岩石在基本上处于固体状态下，受到温度、压力及化学活动性流体的作用，发生矿物成分、化学成分、岩石结构与构造变化的地质作用。
              </p>
              <p>
                变质岩的岩性特征，既受原岩的控制，具有一定继承性，又因经受了不同的变质作用，在矿物成分和结构构造上又具有新生性（如含有变质矿物和定向构造等），因此变质岩具有众多种类。
              </p>
              <p class="highlight-teal">
                <strong>片麻岩</strong>，
                是由岩浆岩或沉积岩经深变质作用而成的岩石。具有暗色与浅色矿物相间呈定向或条带状断续排列的片麻状构造特征，呈变晶结构。片麻岩按原岩的不同，可分为由岩浆岩变质而成的"正片麻岩"和由沉积岩变质而成的"副片麻岩"。
              </p>
              <p class="highlight-teal">
                <strong>千枚岩</strong
                >是具有千枚状构造的低级变质岩石。原岩通常为泥质岩石（或含硅质、钙质、炭质的泥质岩）、粉砂岩及中、酸性凝灰岩等。
              </p>
              <p class="highlight-teal">
                <strong>片岩</strong
                >是具有典型的片状构造的变质岩一种，是区域变质的产物。片状，板状，纤维状矿物相互平行排列，粒度较粗，肉眼可辨别。主要矿物为云母，石英，角闪石，绿泥石等。
              </p>
              <p class="highlight-teal">
                <strong>板岩</strong
                >是具有板状构造，基本没有重结晶的变质岩。原岩为泥质、粉质或中性凝灰岩，沿板理方向可以剥成薄片。
              </p>
              <p class="highlight-teal">
                <strong>大理岩</strong
                >是由碳酸盐岩经区域变质作用或接触变质作用形成的变质岩。主要由方解石和白云石组成，具粒状变晶结构，块状（有时为条带状）构造。
              </p>
              <p class="highlight-teal">
                <strong>石英岩</strong
                >是一种主要由石英组成的变质岩，多由石英砂岩或其他硅质岩石经变质作用，重结晶形成。石英岩一般为块状构造，粒状变晶结构，呈晶质集合体。
              </p>
              <div class="rock-comparison-container">
                <!-- 片麻岩 -->
                <div class="comparison-image-wrapper">
                  <img
                    src="@/assets/RockIdenti/片麻岩.jpg"
                    class="comparison-image"
                    alt="片麻岩"
                  />
                  <span class="comparison-caption"
                    >片麻岩<small>(点击放大查看矿物结构)</small></span
                  >
                </div>
                <!-- 千枚岩 -->
                <div class="comparison-image-wrapper">
                  <img
                    src="@/assets/RockIdenti/千枚岩.jpg"
                    class="comparison-image"
                    alt="千枚岩"
                  />
                  <span class="comparison-caption"
                    >千枚岩<small>(点击放大查看矿物结构)</small></span
                  >
                </div>
                <!-- 片岩 -->
                <div class="comparison-image-wrapper">
                  <img
                    src="@/assets/RockIdenti/片岩.jpg"
                    class="comparison-image"
                    alt="片岩"
                  />
                  <span class="comparison-caption"
                    >片岩<small>(点击放大查看矿物结构)</small></span
                  >
                </div>
                <!-- 板岩 -->
                <div class="comparison-image-wrapper">
                  <img
                    src="@/assets/RockIdenti/板岩1.jpg"
                    class="comparison-image"
                    alt="板岩"
                  />
                  <span class="comparison-caption"
                    >板岩<small>(点击放大查看矿物结构)</small></span
                  >
                </div>
                <!-- 大理岩 -->
                <div class="comparison-image-wrapper">
                  <img
                    src="@/assets/RockIdenti/大理岩.jpg"
                    class="comparison-image"
                    alt="大理岩"
                  />
                  <span class="comparison-caption"
                    >大理岩<small>(点击放大查看矿物结构)</small></span
                  >
                </div>
                <!-- 石英岩 -->
                <div class="comparison-image-wrapper">
                  <img
                    src="@/assets/RockIdenti/石英岩.jpg"
                    class="comparison-image"
                    alt="石英岩"
                  />
                  <span class="comparison-caption"
                    >石英岩<small>(点击放大查看矿物结构)</small></span
                  >
                </div>
              </div>
              <p class="summary-text">
                复杂又神奇的岩石循环在地球上重复进行着，形成了千奇百怪、各具特色的岩石，构成了地球上最具魅力的风景！
              </p>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Search /></el-icon>
            <span>三大岩识别</span>
          </span>
        </template>

        <div class="demo-collapse">
          <el-collapse
            v-model="activeNames2"
            accordion
            class="identification-collapse"
          >
            <el-collapse-item
              title="01 岩浆岩识别"
              name="4"
              class="collapse-item igneous"
            >
              <div class="igneous-content">
                <h3>1．颜色</h3>
                <p>
                  岩浆岩的颜色大致可分为浅色、中色和暗色几种。观察时，应分出原生色「即新鲜面的颜色」及次生色「即经过次生变化后风化面的颜色」。原生色可反映岩石的成分及形成环境，次生色可反映岩石的经历过程。
                </p>

                <p>
                  深成岩的颜色深浅，是暗色矿物含量和浅色矿物含量比率的反映。
                </p>

                <p>
                  辉长岩、撖榄岩为深色；闪长岩为中色；花岗岩、霞石正长岩为浅色。
                </p>

                <p>
                  浅成岩的颜色深浅，多受矿物拉度大小。结晶程度的影响，如微晶和隐晶质岩石比相同成分的深成岩颜色深。
                </p>

                <p>
                  喷出岩的颜色深浅，则受到岩石成分、次生变化、结晶程度等方面的影响。此外，还受到强烈氧化燃烧作用的影响。通常玄武岩类多呈黑、黑绿色、蚀变后呈中绿～浅绿色；安山岩类呈深灰、暗紫～紫红色；流纹岩类呈浅灰～粉红色。
                </p>

                <h3>2．结构</h3>
                <p>
                  显晶质岩石，其主要造岩矿物粒度大致相等时，应写出粒度与习惯用结构名称。如中粒辉长结构、粗粒花岗结构、中粒二长结、粗粒半自形结构等；
                </p>

                <p>
                  隐晶质至玻璃质岩石，应写明隐晶质结构或半晶质结构，或玻璃质结构。
                </p>

                <p>
                  具隐晶质至玻璃质的岩石，以及其它显微结构的岩石，只有在岩石薄片鉴定的情沉下，才能定出其具体结构。
                </p>

                <h3>3．构造</h3>
                <p>
                  最常见的岩浆岩构造的种类不多，只须准确描述即可。侵入岩多具块状、斑杂状、条带状构造；喷出岩则多具气孔、杏仁、流纹构造等。
                </p>

                <h3>4．矿物成分</h3>
                <p>
                  对矿物成分的观察和描述应包括以下内容：矿物名称、物性特点、粒度大小、百分含量等。
                </p>

                <p>
                  对显晶质等粒结构的岩石，应描述主要矿物、次要矿物、副矿物、次生矿物。描述时应按含量多的先描述，含量少的后描，即"先多后少"的顺序。
                </p>

                <p>
                  对矿物特征的描述应包括以下几方面：颜色、形态及鉴定特征（包括可反映岩石的结构、构造等特征）、粒度、目估百分含量等。
                </p>

                <p>
                  岩石具斑状或似斑状结构时，应首先指明斑晶矿物在整个岩石中的目估百分含量，然后以斑晶矿物含量"先多后少"的顺序描述其特征。接着描述基质中矿物的特征，如矿物粒度呈细粒时，其描述顺序与要求同前述。
                </p>

                <p>
                  玢岩和斑岩的区别：由基性斜长石和暗色矿物作斑晶的岩石称为：××玢岩；以钾长石和石英作斑晶的岩石称为：××斑岩。
                </p>

                <h3>5.岩浆岩描述实例</h3>

                <div class="example">
                  <h4>①．深成岩——橄揽辉长岩</h4>
                  <div class="example-flex-layout">
                    <!-- 新增的布局容器 -->
                    <div class="example-text-content">
                      <!-- 文字部分 -->
                      <p>
                        <strong>肉眼描述：</strong
                        >新鲜面暗灰色，风化面暗褐色。中粒辉长结构，颗粒均匀，颗粒直径在2－5mm。块状构造。岩石比较新鲜。暗色矿物主要为黑色的辉石，呈近于短轴状的颗粒，有时可见解理。其次，可见少量黄绿色（或暗绿），油脂光泽的橄榄石和具珍珠光泽的黑云母。暗色矿物含量约50％。浅色矿物为斜长石，呈长板状，白色至灰色，玻璃光泽，含量约50％。
                      </p>
                      <p>
                        <strong>镜下描述：</strong
                        >岩石新鲜，未经蚀交。主耍矿物为普通辉石、基性斜长石，次要矿物为橄榄石、黑云母。辉长结构。
                      </p>
                      <p><strong>岩石定名：</strong>橄榄辉长岩</p>
                    </div>
                    <div class="example-image-wrapper">
                      <!-- 图片部分 -->
                      <img
                        src="@/assets/RockIdenti/橄榄辉长岩.jpg"
                        class="rock-image"
                        alt="橄榄辉长岩"
                      />
                      <div class="content-image-caption">橄榄辉长岩</div>
                    </div>
                  </div>
                </div>
                <div class="example">
                  <h4>②．浅成岩——闪长玢岩</h4>
                  <div class="example-flex-layout">
                    <!-- 新增的布局容器 -->
                    <div class="example-text-content">
                      <!-- 文字部分 -->
                      <p>
                        <strong>肉眼描述：</strong
                        >浅灰色，斑状结构，块状构造。斑晶成分为灰白色板状斜长石和绿色柱状角闪石，斑晶直径1－6mm，斑晶占岩石体积30％左右。基质为隐晶质结构。
                      </p>
                      <p>
                        <strong>镜下描述：</strong
                        >斑状结构。斑晶由斜长石和角闪石组成，并有少量黑云母和石英。基质呈显微粒状结构，主要成分为斜长石，其次是角闪石，基质约占岩石体积的65%。
                      </p>
                      <p><strong>岩石定名：</strong>闪长玢岩</p>
                    </div>
                    <div class="example-image-wrapper">
                      <!-- 图片部分 -->
                      <img
                        src="@/assets/RockIdenti/闪长玢岩.jpg"
                        class="rock-image"
                        alt="闪长玢岩"
                      />
                      <div class="content-image-caption">闪长玢岩</div>
                    </div>
                  </div>
                </div>

                <div class="example">
                  <h4>③．喷出岩——流纹岩</h4>
                  <div class="example-flex-layout">
                    <!-- 新增的布局容器 -->
                    <div class="example-text-content">
                      <!-- 文字部分 -->
                      <p>
                        <strong>肉眼描述：</strong
                        >浅紫色，斑状结构，流纹构造，气孔构造，斑晶成分为石英和透长石。石英为不规则粒状，无色，油脂光泽，贝壳状断口。透长石为柱状，无色透明，玻璃光泽，有解理。基质为隐晶质，浅紫色为主，夹杂有粉红和白色，稍有拉长的气孔和柱状透长石组成的定向排列，斑晶直径1－2
                        mm，约占岩石体积15%。
                      </p>
                      <p>
                        <strong>镜下描述：</strong
                        >斑状结构，流纹构造，斑晶成分为透长石和石英。基质具霏细结构，局部玻璃质结构，略带黑色不透明微粒，占75%。
                      </p>
                      <p><strong>岩石定名：</strong>流纹岩</p>
                    </div>
                    <div class="example-image-wrapper">
                      <!-- 图片部分 -->
                      <img
                        src="@/assets/RockIdenti/流纹岩2.jpg"
                        class="rock-image"
                        alt="流纹岩"
                      />
                      <div class="content-image-caption">流纹岩</div>
                    </div>
                  </div>
                </div>
                <h3>6.岩浆岩类的野外鉴定特征</h3>

                <!-- 橄榄岩-苦橄岩类 -->
                <div class="geo-rock-ident-container">
                  <h2 class="geo-rock-class-title">①橄榄岩-苦橄岩类</h2>

                  <div
                    class="geo-rock-carousel"
                    @mouseenter="peridotiteStopAutoPlay"
                    @mouseleave="peridotiteStartAutoPlay"
                  >
                    <button
                      class="carousel-button prev"
                      @click="peridotitePrevSlide"
                    >
                      ❮
                    </button>

                    <div
                      class="geo-rock-carousel-container"
                      :style="peridotiteCarouselStyle"
                    >
                      <div
                        v-for="(rock, index) in peridotiteRocks"
                        :key="rock.name"
                        class="geo-rock-card-item carousel-slide"
                      >
                        <div class="geo-rock-card-header">
                          <h3 class="geo-rock-name">{{ rock.name }}</h3>
                        </div>
                        <div class="geo-rock-card-body">
                          <div class="geo-rock-visual">
                            <div class="geo-rock-img-box">
                              <img
                                :src="rock.image"
                                :alt="rock.name"
                                class="geo-rock-img"
                              />
                              <p class="geo-rock-img-desc">{{ rock.name }}</p>
                            </div>
                          </div>
                          <div class="geo-rock-details">
                            <div class="geo-rock-macro">
                              <h4 class="geo-feature-title">手标本特征</h4>
                              <p class="geo-feature-desc">{{ rock.macro }}</p>
                            </div>
                            <div class="geo-rock-micro">
                              <h4 class="geo-feature-title">镜下特征</h4>
                              <p class="geo-feature-desc">{{ rock.micro }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      class="carousel-button next"
                      @click="peridotiteNextSlide"
                    >
                      ❯
                    </button>
                  </div>

                  <div class="carousel-dots">
                    <span
                      v-for="(rock, index) in peridotiteRocks"
                      :key="'peridotite-dot-' + rock.name"
                      class="dot"
                      :class="{ active: peridotiteCurrentSlide === index }"
                      @click="peridotiteGoToSlide(index)"
                    ></span>
                  </div>
                </div>

                <!-- 辉长岩-玄武岩类 -->
                <div class="geo-rock-ident-container">
                  <h2 class="geo-rock-class-title">②辉长岩-玄武岩类</h2>

                  <div
                    class="geo-rock-carousel"
                    @mouseenter="gabbroStopAutoPlay"
                    @mouseleave="gabbroStartAutoPlay"
                  >
                    <button
                      class="carousel-button prev"
                      @click="gabbroPrevSlide"
                    >
                      ❮
                    </button>

                    <div
                      class="geo-rock-carousel-container"
                      :style="gabbroCarouselStyle"
                    >
                      <div
                        v-for="(rock, index) in gabbroRocks"
                        :key="rock.name"
                        class="geo-rock-card-item carousel-slide"
                      >
                        <div class="geo-rock-card-header">
                          <h3 class="geo-rock-name">{{ rock.name }}</h3>
                        </div>
                        <div class="geo-rock-card-body">
                          <div class="geo-rock-visual">
                            <div class="geo-rock-img-box">
                              <img
                                :src="rock.image"
                                :alt="rock.name"
                                class="geo-rock-img"
                              />
                              <p class="geo-rock-img-desc">{{ rock.name }}</p>
                            </div>
                          </div>
                          <div class="geo-rock-details">
                            <div class="geo-rock-macro">
                              <h4 class="geo-feature-title">手标本特征</h4>
                              <p class="geo-feature-desc">{{ rock.macro }}</p>
                            </div>
                            <div class="geo-rock-micro">
                              <h4 class="geo-feature-title">镜下特征</h4>
                              <p class="geo-feature-desc">{{ rock.micro }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      class="carousel-button next"
                      @click="gabbroNextSlide"
                    >
                      ❯
                    </button>
                  </div>

                  <div class="carousel-dots">
                    <span
                      v-for="(rock, index) in gabbroRocks"
                      :key="'gabbro-dot-' + rock.name"
                      class="dot"
                      :class="{ active: gabbroCurrentSlide === index }"
                      @click="gabbroGoToSlide(index)"
                    ></span>
                  </div>
                </div>

                <!-- 闪长岩-安山岩类 -->
                <div class="geo-rock-ident-container">
                  <h2 class="geo-rock-class-title">③闪长岩-安山岩类</h2>

                  <div
                    class="geo-rock-carousel"
                    @mouseenter="stopAutoPlay"
                    @mouseleave="startAutoPlay"
                  >
                    <button class="carousel-button prev" @click="prevSlide">
                      ❮
                    </button>

                    <div
                      class="geo-rock-carousel-container"
                      :style="carouselStyle"
                    >
                      <div
                        v-for="(rock, index) in rocks"
                        :key="rock.name"
                        class="geo-rock-card-item carousel-slide"
                      >
                        <div class="geo-rock-card-header">
                          <h3 class="geo-rock-name">{{ rock.name }}</h3>
                        </div>
                        <div class="geo-rock-card-body">
                          <div class="geo-rock-visual">
                            <div class="geo-rock-img-box">
                              <img
                                :src="rock.image"
                                :alt="rock.name"
                                class="geo-rock-img"
                              />
                              <p class="geo-rock-img-desc">{{ rock.name }}</p>
                            </div>
                          </div>
                          <div class="geo-rock-details">
                            <div class="geo-rock-macro">
                              <h4 class="geo-feature-title">手标本特征</h4>
                              <p class="geo-feature-desc">{{ rock.macro }}</p>
                            </div>
                            <div class="geo-rock-micro">
                              <h4 class="geo-feature-title">镜下特征</h4>
                              <p class="geo-feature-desc">{{ rock.micro }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button class="carousel-button next" @click="nextSlide">
                      ❯
                    </button>
                  </div>

                  <div class="carousel-dots">
                    <span
                      v-for="(rock, index) in rocks"
                      :key="'dot-' + rock.name"
                      class="dot"
                      :class="{ active: currentSlide === index }"
                      @click="goToSlide(index)"
                    ></span>
                  </div>
                </div>

                <!-- 正长岩-粗面岩类 -->
                <div class="geo-rock-ident-container">
                  <h2 class="geo-rock-class-title">④正长岩-粗面岩类</h2>

                  <div
                    class="geo-rock-carousel"
                    @mouseenter="syeniteStopAutoPlay"
                    @mouseleave="syeniteStartAutoPlay"
                  >
                    <button
                      class="carousel-button prev"
                      @click="syenitePrevSlide"
                    >
                      ❮
                    </button>

                    <div
                      class="geo-rock-carousel-container"
                      :style="syeniteCarouselStyle"
                    >
                      <div
                        v-for="(rock, index) in syeniteRocks"
                        :key="rock.name"
                        class="geo-rock-card-item carousel-slide"
                      >
                        <div class="geo-rock-card-header">
                          <h3 class="geo-rock-name">{{ rock.name }}</h3>
                        </div>
                        <div class="geo-rock-card-body">
                          <div class="geo-rock-visual">
                            <div class="geo-rock-img-box">
                              <img
                                :src="rock.image"
                                :alt="rock.name"
                                class="geo-rock-img"
                              />
                              <p class="geo-rock-img-desc">{{ rock.name }}</p>
                            </div>
                          </div>
                          <div class="geo-rock-details">
                            <div class="geo-rock-macro">
                              <h4 class="geo-feature-title">手标本特征</h4>
                              <p class="geo-feature-desc">{{ rock.macro }}</p>
                            </div>
                            <div class="geo-rock-micro">
                              <h4 class="geo-feature-title">镜下特征</h4>
                              <p class="geo-feature-desc">{{ rock.micro }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      class="carousel-button next"
                      @click="syeniteNextSlide"
                    >
                      ❯
                    </button>
                  </div>

                  <div class="carousel-dots">
                    <span
                      v-for="(rock, index) in syeniteRocks"
                      :key="'syenite-dot-' + rock.name"
                      class="dot"
                      :class="{ active: syeniteCurrentSlide === index }"
                      @click="syeniteGoToSlide(index)"
                    ></span>
                  </div>
                </div>

                <!-- 花岗闪长岩-流纹英安岩类和花岗岩-流纹岩类 -->
                <div class="geo-rock-ident-container">
                  <h2 class="geo-rock-class-title">
                    ⑤花岗闪长岩-流纹英安岩类和花岗岩-流纹岩类
                  </h2>

                  <div
                    class="geo-rock-carousel"
                    @mouseenter="graniticStopAutoPlay"
                    @mouseleave="graniticStartAutoPlay"
                  >
                    <button
                      class="carousel-button prev"
                      @click="graniticPrevSlide"
                    >
                      ❮
                    </button>

                    <div
                      class="geo-rock-carousel-container"
                      :style="graniticCarouselStyle"
                    >
                      <div
                        v-for="(rock, index) in graniticRocks"
                        :key="rock.name"
                        class="geo-rock-card-item carousel-slide"
                      >
                        <div class="geo-rock-card-header">
                          <h3 class="geo-rock-name">{{ rock.name }}</h3>
                        </div>
                        <div class="geo-rock-card-body">
                          <div class="geo-rock-visual">
                            <div class="geo-rock-img-box">
                              <img
                                :src="rock.image"
                                :alt="rock.name"
                                class="geo-rock-img"
                              />
                              <p class="geo-rock-img-desc">{{ rock.name }}</p>
                            </div>
                          </div>
                          <div class="geo-rock-details">
                            <div class="geo-rock-macro">
                              <h4 class="geo-feature-title">手标本特征</h4>
                              <p class="geo-feature-desc">{{ rock.macro }}</p>
                            </div>
                            <div class="geo-rock-micro">
                              <h4 class="geo-feature-title">镜下特征</h4>
                              <p class="geo-feature-desc">{{ rock.micro }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      class="carousel-button next"
                      @click="graniticNextSlide"
                    >
                      ❯
                    </button>
                  </div>

                  <div class="carousel-dots">
                    <span
                      v-for="(rock, index) in graniticRocks"
                      :key="'granitic-dot-' + rock.name"
                      class="dot"
                      :class="{ active: graniticCurrentSlide === index }"
                      @click="graniticGoToSlide(index)"
                    ></span>
                  </div>
                </div>

                <!-- 煌斑岩类、伟晶岩类和细晶岩类 -->
                <div class="geo-rock-ident-container">
                  <h2 class="geo-rock-class-title">
                    ⑥煌斑岩类、伟晶岩类和细晶岩类
                  </h2>

                  <div
                    class="geo-rock-carousel"
                    @mouseenter="lamprophyreStopAutoPlay"
                    @mouseleave="lamprophyreStartAutoPlay"
                  >
                    <button
                      class="carousel-button prev"
                      @click="lamprophyrePrevSlide"
                    >
                      ❮
                    </button>

                    <div
                      class="geo-rock-carousel-container"
                      :style="lamprophyreCarouselStyle"
                    >
                      <div
                        v-for="(rock, index) in lamprophyreRocks"
                        :key="rock.name"
                        class="geo-rock-card-item carousel-slide"
                      >
                        <div class="geo-rock-card-header">
                          <h3 class="geo-rock-name">{{ rock.name }}</h3>
                        </div>
                        <div class="geo-rock-card-body">
                          <div class="geo-rock-visual">
                            <div class="geo-rock-img-box">
                              <img
                                :src="rock.image"
                                :alt="rock.name"
                                class="geo-rock-img"
                              />
                              <p class="geo-rock-img-desc">{{ rock.name }}</p>
                            </div>
                          </div>
                          <div class="geo-rock-details">
                            <div class="geo-rock-macro">
                              <h4 class="geo-feature-title">手标本特征</h4>
                              <p class="geo-feature-desc">{{ rock.macro }}</p>
                            </div>
                            <div class="geo-rock-micro">
                              <h4 class="geo-feature-title">镜下特征</h4>
                              <p class="geo-feature-desc">{{ rock.micro }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      class="carousel-button next"
                      @click="lamprophyreNextSlide"
                    >
                      ❯
                    </button>
                  </div>

                  <div class="carousel-dots">
                    <span
                      v-for="(rock, index) in lamprophyreRocks"
                      :key="'lamprophyre-dot-' + rock.name"
                      class="dot"
                      :class="{ active: lamprophyreCurrentSlide === index }"
                      @click="lamprophyreGoToSlide(index)"
                    ></span>
                  </div>
                </div>
              </div>
            </el-collapse-item>

            <el-collapse-item
              title="02 沉积岩识别"
              name="5"
              class="collapse-item sedimentary"
            >
              <div class="sedimentary-content">
                <h3>一、砾岩、角砾岩、砂岩</h3>
                <p>常见岩石类型：</p>
                <p>
                  砾岩、角砾岩、石英砂岩、长石砂岩、岩屑杂砂岩、铁质砂岩、海绿石砂岩、细粒砂岩、中粒砂岩、粗粒砂岩。
                </p>

                <h4>1、鉴定方法和步骤</h4>
                <p>鉴别确定岩石中的碎屑成分并估计其含量。</p>
                <p>
                  实际测量（薄片中）和估测（手标本上）碎屑颗粒的粒径（最大、最小和一般的）。（也可利用粒度管或粒度盘以及较标准的标本进行对比）。并确定岩石的分选程度。
                </p>
                <p>鉴别碎屑颗粒的磨圆度。</p>
                <p>鉴别填隙物的成分</p>
                <p>硅质胶结物：白色、致密状、硬度大于小刀、加HCl 不起泡。</p>
                <p>铁质胶结物：岩石往往呈紫红色。</p>
                <p>碳酸盐质胶结物：浅灰一浅绿色、加HCl 起泡。</p>
                <p>海绿石胶结物：暗绿色，风化后使岩石带绿色斑痕。</p>
                <p>
                  泥质杂基：灰色、褐色、硬度小、岩石易破碎松散、加HCI 不起泡。
                </p>
                <p>
                  区分岩石的支撑性质并尽可能地区分出基底式、孔隙式、接触式等胶结类型。
                </p>

                <h4>2．描述实例</h4>
                <div class="example">
                  <h4>（1）砾岩</h4>
                  <div class="example-flex-layout">
                    <div class="example-text-content">
                      <p>
                        灰色、砾状结构、胶结紧密、标本呈块状构造。其中砾石占70%，填隙物占30%。砾石大小不一，粒径一般在2-20mm，以2－10mm
                        为主。砾石呈圆状及次圆状，少数次棱角状，断面多呈椭圆及长条形。砾石以石灰岩和白云岩为主，还有少量喷出岩和硅质岩。填隙物浅灰绿色，多为与砾石成分相同的砂及粉砂、砂及粉砂间有钙质、泥质等填隙物。属基底式胶结类型。
                      </p>
                    </div>
                    <div class="example-image-wrapper">
                      <img
                        src="@/assets/RockIdenti/砾岩2.jpg"
                        class="rock-image"
                        alt="砾岩"
                      />
                      <div class="content-image-caption">砾岩</div>
                    </div>
                  </div>
                </div>

                <div class="example">
                  <h4>（2）紫褐色中粒铁质砂岩</h4>
                  <div class="example-flex-layout">
                    <div class="example-text-content">
                      <p>
                        暗紫褐色、颜色分布不均匀。中粒砂状结构，标本呈块状构造。碎屑含量占整个岩石85%左右，胶结物约占15%。砂粒几乎都是石英，粒径0.15-1
                        mm
                        左右，分选性好，大小比较一致。胶结物主要为氧化铁，分布不均匀，局部聚集成团块。岩石为颗粒支撑，呈孔隙式胶结。
                      </p>
                    </div>
                    <div class="example-image-wrapper">
                      <img
                        src="@/assets/RockIdenti/铁质砂岩.jpg"
                        class="rock-image"
                        alt="铁质砂岩"
                      />
                      <div class="content-image-caption">铁质砂岩</div>
                    </div>
                  </div>
                </div>

                <h3>二、粉砂岩、泥质岩</h3>
                <p>
                  此类岩石的主要类型：细粉砂岩、粗粉砂岩、粘土、泥岩、含粉砂泥岩、砂质页岩、铁质页岩、钙质页岩、黑色页岩、碳质页岩、油页岩、硅质页岩。
                </p>

                <h4>1、鉴定方法与步骤</h4>
                <p>粉砂岩的观察方法与砂岩基本相同。</p>
                <p>
                  泥质岩因矿物颗位非常细小，肉眼无法鉴定，因而要注意其颜色及各种物理性质的观察。
                </p>
                <p>
                  要注意观察泥页岩的断口和手触摸时的感觉，据此来判断其结构类型以及与粉砂岩相区别。
                </p>
                <p>
                  正确区分层理和页理，利用颜色、条痕以及加酸起泡与否等区别各种不同类型的页岩。
                </p>

                <h4>2．描述实例</h4>
                <div class="example">
                  <h4>（1）含粉砂泥岩</h4>
                  <div class="example-flex-layout">
                    <div class="example-text-content">
                      <p>
                        浅灰色。含粉砂泥质结构，块状均造。断口不太平滑，手摸之略有粗糙感。在水中不易泡软，加盐酸不起泡。由此推断主要由粘土矿物组成，含少量粉砂。
                      </p>
                    </div>
                    <div class="example-image-wrapper">
                      <img
                        src="@/assets/RockIdenti/含粉砂泥岩.jpg"
                        class="rock-image"
                        alt="含粉砂泥岩"
                      />
                      <div class="content-image-caption">含粉砂泥岩</div>
                    </div>
                  </div>
                </div>

                <div class="example">
                  <h4>（2）红色页岩</h4>
                  <div class="example-flex-layout">
                    <div class="example-text-content">
                      <p>
                        砖红色。泥质结构，页理构造。由于岩石受到轻微变质，使其页理不甚明显。断口呈贝壳状。岩石主要由铁质及粘土矿物组成。
                      </p>
                    </div>
                    <div class="example-image-wrapper">
                      <img
                        src="@/assets/RockIdenti/红色页岩.jpg"
                        class="rock-image"
                        alt="红色页岩"
                      />
                      <div class="content-image-caption">红色页岩</div>
                    </div>
                  </div>
                </div>

                <h3>三、火山碎屑岩类</h3>
                <p>
                  火山碎屑岩在我国主要形成于中生代，在辽东、辽西和大兴安岭地区分布较广。
                </p>
                <p>
                  此类岩石的主要类型：角砾熔岩、熔结凝灰岩（或熔结角砾岩）、火山角砾岩、晶屑凝灰岩、玻屑凝灰岩、层凝灰岩、凝灰（质）砂岩、凝灰（质）页岩。
                </p>
                <p>野外最常见的火山碎屑岩有：火山角砾岩和凝灰岩。</p>
                <p>
                  火山角砾岩：由50％以上粒度在64－2mm
                  的火山碎屑物组成，具火山角砾结构，斑杂构造。火山角砾棱角明显，分选差，粒度变化大。火山角砾岩一般多分布在火山通道附近，也可在离火山口较远的地方堆积，分布范围较集块岩广泛一些。
                </p>
                <p>
                  凝灰岩：由70％以上粒度﹤2 mm
                  的火山碎屑物组成，具典型的凝灰结构，块状构造。颜色浅而多变，多孔疏松，有粗糙感，次生变化显著。由于粒度细小，常堆积在距火山口较远的地方。是分布最广的一种火山碎屑岩。
                </p>

                <h4>1．观察方法与步骤</h4>
                <p>
                  观察手标本时要注意区分沉积角砾和火山角砾。火山角砾多为火山岩岩屑、呈棱角状，颜色常为紫红色、灰绿色等，常具斑状结构。
                </p>
                <p>
                  凝灰岩的外貌很象细砂岩、粉砂岩，区别在于颜色较特殊，常为紫红、灰绿色等，有时颜色分布很不均匀。凝灰岩中晶屑多呈棱角状，破碎及熔蚀现象明显，晶面常有较多的裂纹。
                </p>
                <p>
                  凝灰岩与火山熔岩也很相似，但凝灰岩具火山碎屑结构，表面粗糙、粘舌。
                </p>

                <h4>2．描述实例</h4>
                <div class="example">
                  <h4>（1）火山角砾岩</h4>
                  <div class="example-flex-layout">
                    <div class="example-text-content">
                      <p>
                        褐红一紫红色。火山角砾结构、块状构造。岩石中火山碎屑占90％以上，其中以粒径在10－2mm
                        的熔岩角砾为主（约占75％），此外含少量长石和石英晶屑和玻屑。火山角砾外形不规则，呈尖棱角状。火山角砾为褐红色细小的凝灰质胶结。岩石次生变化不明显。
                      </p>
                    </div>
                    <div class="example-image-wrapper">
                      <img
                        src="@/assets/RockIdenti/火山角砾岩.jpg"
                        class="rock-image"
                        alt="火山角砾岩"
                      />
                      <div class="content-image-caption">火山角砾岩</div>
                    </div>
                  </div>
                </div>

                <div class="example">
                  <h4>（2）流纹质晶屑玻屑凝灰岩</h4>
                  <div class="example-flex-layout">
                    <div class="example-text-content">
                      <p>
                        <strong>手标本观察：</strong
                        >白至灰白色。凝灰结构，块状构造。主要成分为极细小的火山凝灰，石英及长石晶屑约占7％左右。岩石具粗糙感，有粘舌现象。
                      </p>
                      <p>
                        <strong>薄片观察：</strong
                        >主要成分为玻屑，呈楔状，局部已脱玻化变成石英、长石的微晶集合体。在玻屑中星散分布有酸性斜长石及少量透长石和石英的晶屑。长石和石英晶屑边缘有熔蚀现象。
                      </p>
                    </div>
                    <div class="example-image-wrapper">
                      <img
                        src="@/assets/RockIdenti/玻屑晶屑凝灰岩.jpg"
                        class="rock-image"
                        alt="玻屑晶屑凝灰岩"
                      />
                      <div class="content-image-caption">玻屑晶屑凝灰岩</div>
                    </div>
                  </div>
                </div>
              </div>
              <h3>四、碳酸盐岩</h3>

              <h4>（一）石灰岩</h4>
              <p>
                此类岩石的主要类型：砾屑（竹叶状）灰岩、亮晶砂屑灰岩、亮晶（或泥晶）鲡粒灰岩、泥品生物屑灰岩、亮晶生物屑灰岩、泥晶灰岩、结晶灰岩、礁灰岩。
              </p>

              <h4>1．方法与步骤</h4>
              <p>
                （1）利用显微放像设备或显微投影仪，认识和掌握颗粒的各种类型以及泥晶和亮晶的特征及区别。
              </p>
              <p>
                （2）用水着湿岩石标本的新鲜面，用放大镜观察各种结构组分并进行描述。
              </p>

              <h4>2．描述实例：</h4>
              <div class="example">
                <h4>（1）砾屑灰岩（竹叶状灰岩）</h4>
                <div class="example-flex-layout">
                  <div class="example-text-content">
                    <p>
                      <strong>颜色：</strong>灰绿色略带灰红色、颜色分布不均匀。
                    </p>
                    <p>
                      <strong>矿物成分：</strong
                      >几乎全由方解石组成，含微量的铁质。
                    </p>
                    <p>
                      <strong>结构组分：</strong
                      >颗粒：主要为砾屑，圆度好，断面呈长椭圆形，似竹叶状，大小不一，表面被氧化铁包围。砾石成分为泥晶灰岩。还有少量砂屑，其成分也是泥晶灰岩，充填于砾屑之间。填隙物：主要为泥晶基质，均已不同程度地重结晶。
                    </p>
                    <p>
                      <strong>结构：</strong>砾屑结构；颗粒支撑，为孔隙式胶结。
                    </p>
                    <p><strong>岩石名称：</strong>泥晶砾屑灰岩。</p>
                  </div>
                  <div class="example-image-wrapper">
                    <img
                      src="@/assets/RockIdenti/砾屑灰岩.jpg"
                      class="rock-image"
                      alt="砾屑灰岩"
                    />
                    <div class="content-image-caption">
                      砾屑灰岩（竹叶状灰岩）
                    </div>
                  </div>
                </div>
              </div>

              <div class="example">
                <h4>（2）鲕粒灰岩（山东箇山）</h4>
                <div class="example-flex-layout">
                  <div class="example-text-content">
                    <p><strong>颜色：</strong>暗紫红色。</p>
                    <p><strong>矿物成分：</strong>几乎全由方解石组成。</p>
                    <p>
                      <strong>结构组分：</strong
                      >颗粒：主要为鲕粒，一般呈球形，少数椭圆形，大小为1—2mm，有同心层圈），含有铁质，因而成暗红色。鲕粒约占岩石60％。还有＜5%的生物碎屑。填隙物：主要为灰白色，但较浑浊的泥晶方解石，与颗粒界限不清晰，约占岩石的20％－25％；有少量灰白色、较干净明亮的方解石，约占岩石10%。
                    </p>
                    <p>
                      <strong>结构：</strong
                      >鲕粒结构；基质支撑，为基底式胶结，颗粒互相不接触。
                    </p>
                    <p><strong>构造：</strong>块状构造。</p>
                    <p><strong>岩石名称：</strong>亮晶一泥晶缅拉灰岩</p>
                  </div>
                  <div class="example-image-wrapper">
                    <img
                      src="@/assets/RockIdenti/鲕粒灰岩.jpg"
                      class="rock-image"
                      alt="鲕粒灰岩"
                    />
                    <div class="content-image-caption">鲕粒灰岩</div>
                  </div>
                </div>
              </div>

              <h4>（二）白云岩、泥灰岩、硅质灰岩及硅质岩</h4>
              <p>
                此类岩石的主要类型：碎屑白云岩、细晶白云岩、中一粗晶白云岩、泥晶白云岩、白云质灰岩、泥灰岩、硅质灰岩、硅藻土、燧石岩、碧玉岩。
              </p>

              <h4>1、鉴定方法和步骤</h4>
              <p>同石灰岩</p>

              <h4>2．描述实例</h4>
              <div class="example">
                <h4>（1）泥晶白云岩</h4>
                <div class="example-flex-layout">
                  <div class="example-text-content">
                    <p>
                      暗灰色。隐晶结构，手标本呈块状构造。岩石致密，断口呈贝壳状，加盐酸微弱起泡。岩石由泥晶白云岩组成。
                    </p>
                  </div>
                  <div class="example-image-wrapper">
                    <img
                      src="@/assets/RockIdenti/泥晶白云岩.jpg"
                      class="rock-image"
                      alt="泥晶白云岩"
                    />
                    <div class="content-image-caption">泥晶白云岩</div>
                  </div>
                </div>
              </div>

              <div class="example">
                <h4>（2）硅质条带石灰岩</h4>
                <div class="example-flex-layout">
                  <div class="example-text-content">
                    <p>
                      灰色。隐晶一粉晶结构，条带状构造。岩石由浅灰的粉晶石灰岩（约占岩石70％）和暗灰色的硅质条带（约占岩石30％）组成。石灰岩由粉晶方解石组成，加盐酸剧烈起泡，断口略粗糙不平。硅质条带由燧石组成，致密、硬度大于小刀。
                    </p>
                  </div>
                </div>
              </div>
            </el-collapse-item>

            <el-collapse-item
              title="03 变质岩识别"
              name="6"
              class="collapse-item metamorphic"
            >
              <div class="metamorphic-content">
                <p>
                  变质岩的观察与岩浆岩相似，也是从颜色、结构、构造、矿物成分、次生变化、矿化蚀变特征等方面进行观察和描述。
                </p>

                <h3>1．变质岩结构的观察内容</h3>
                <ul class="structure-list">
                  <li>变余砂状结构（变质砂岩）</li>
                  <li>变余辉绿结构（变质辉绿岩）</li>
                  <li>粒状变晶结构（大理岩或石英岩）</li>
                  <li>角岩结构（长英角岩）</li>
                  <li>纤维变晶结构（阳起石片岩）</li>
                  <li>鳞片变晶结构（绿泥片岩）</li>
                  <li>斑状变晶结构（石榴白云母片岩）</li>
                </ul>

                <h3>2．变质岩构造的观察内容</h3>
                <ul class="structure-list">
                  <li>板状构造（板岩）</li>
                  <li>千枚构造（千枚岩）</li>
                  <li>片理构造（各种片岩）</li>
                  <li>片麻构造（片麻岩）</li>
                  <li>块状构造（大理岩）</li>
                </ul>

                <h3>3、观察内容</h3>
                <div class="observation-method">
                  <p>
                    变质岩结构构造观察，以手标本和野外宏观观察为主。其观察步骤一般是：
                  </p>
                  <p>
                    （1）首先确定结构构造的成因类型，如变余结构、变晶结构、碎裂结构、变余构造、变成构造等。
                  </p>
                  <p>
                    （2）然后再进一步定出结构构造的具体名称（如变晶结构则可根据变晶矿物的粒度、形状、相互关系等确定为粒状变晶结构、纤维变晶结构等）。
                  </p>
                  <p>
                    （3）当一种岩石同时具有几种不同的结构造时，可分清主次，采用综合描述的方法，即把次要结构构造放在前面，主要结构构造放在后面。如纤维鳞片变晶结石、鳞片花岗变晶结构、千枚板状构造等。
                  </p>
                  <p>
                    （4）对于斑状变晶结构的观察，除了观察变斑晶与基质的相互关系外，还应观察描述变斑晶和基质本身的结构，如基质的重结晶程度、粒度大小；变斑晶中有无包裹体等。例如其石榴二云片岩，则是基质具花岗鳞片变晶的斑状变晶结构，而宁变斑晶本身还具有残缕结构。
                  </p>
                </div>

                <h3>4、描述实例</h3>
                <div class="example">
                  <h4>（1）斜长角闪岩</h4>
                  <div class="example-flex-layout">
                    <div class="example-text-content">
                      <p><strong>手标本描述：</strong></p>
                      <p>
                        中细粒变晶结构，块状构造，局部地方因斜长石和透闪石的定向排列或分布不均匀，显示出不明显的片理构造及条带构造。
                      </p>
                      <p><strong>镜下观察及描述：</strong></p>
                      <p>
                        中粒等粒变晶结构，斜长石和角闪石呈他形粒状变晶，彼此紧密镶嵌，局部地方角闪石和斜长石颗粒明显拉长，从而形成定向排列。
                      </p>
                    </div>
                  </div>
                </div>

                <h3>一、区域变质岩的观察与描述</h3>
                <div class="regional-metamorphic">
                  <p>
                    1．观察区域变质岩时，应首先遵循结构构造和矿物组合相结合的原则，确定出岩石的基本名称，如板岩、干技岩、片岩等。在此基础上，再根据岩石中主要矿物、次要矿物、特征变质矿物等进行详细命名。
                  </p>
                  <p>2．要注意下列相近岩石的区别：</p>
                  <ul>
                    <li>①板岩、千枚岩</li>
                    <li>②片岩、片麻岩</li>
                    <li>③角闪斜长片庶岩、斜长角闪岩、角闪岩</li>
                    <li>④片麻岩、麻粒岩</li>
                    <li>⑤麻粒岩、榴辉岩</li>
                  </ul>
                </div>

                <h4>3、描述实例</h4>
                <div class="example">
                  <h4>（1）板岩</h4>
                  <div class="example-flex-layout">
                    <div class="example-text-content">
                      <p>
                        <strong>炭质板岩：</strong
                        >黑灰色，隐晶质结构，板状构造，矿物成分为粘土矿物，见有少量炭质斑点，风化后岩石板理发育。
                      </p>
                    </div>
                  </div>
                </div>

                <div class="example">
                  <h4>（2）硬绿泥石绢云母千枚岩</h4>
                  <div class="example-flex-layout">
                    <div class="example-text-content">
                      <p>
                        <strong>手标本特征：</strong
                        >土黄色。斑状变晶结构，基质具鳞片变晶结构，不明显的千枚状构造。丝绢光泽。基质矿物成分可能主要为绢云母，变斑晶为棕色呈放射状的球粒，该球粒硬度小于指甲，可能为硬绿泥石。
                      </p>
                      <p><strong>镜下特征：</strong></p>
                      <p><strong>矿物成分：</strong></p>
                      <p>绢云母；细小鳞片状，干涉色二级，含量占70％－85％ 。</p>
                      <p>
                        硬绿泥石：突起高，有聚片双晶，多色性显著，负延性。含量约10％－25％。
                      </p>
                      <p>石英：干涉色一级灰白，含量极少。</p>
                      <p>锆石、褐铁矿、磁铁矿：微量。</p>
                      <p>
                        <strong>结构：</strong
                        >斑状变晶结构，基质为显微鳞片花岗变晶结构，变斑晶为硬绿泥石，呈放射状、挂状、束状，较均匀地分布于基质中。基质以绢云母为主，呈细小鳞片状，略显定向排列，其它矿物呈零星分布。
                      </p>
                    </div>
                  </div>
                </div>

                <div class="example">
                  <h4>（3）二长片麻岩</h4>
                  <div class="example-flex-layout">
                    <div class="example-text-content">
                      <p>
                        <strong>手标本特征：</strong
                        >肉红色，鳞片花岗变晶结构，片麻状构造。矿物颗粒较大，可见肉红色的钾长石及灰白色的斜长石，无色透明的石英呈条状、透镜状定向排列，黑云母量很少。
                      </p>
                      <p><strong>镜下特征：</strong></p>
                      <p><strong>矿物成分：</strong></p>
                      <p>石英：含量约占60％左右。</p>
                      <p>
                        钾长石与更长石：含量大约为40%，二者含量近似。反条纹长石、黑云母微量。
                      </p>
                      <p>
                        <strong>结构构造：</strong
                        >花岗变晶结构，片麻状构造。石英呈粗粒变晶，沿一定方向拉长。更长石、钾长石及反条纹长石呈细粒变晶，其集合体与石英之拉长方向一致，构成岩石之片麻状构造。在更长石中有不规则的钾长石条带，形成反条纹长石，这种反条纹长石显然是交代成因的。暗色矿物仅有微量的黑云母，呈零星分布。有的黑云母已变为绿泥石，更长石沿解理面有绢云母化现象。
                      </p>
                    </div>
                    <div class="example-image-wrapper">
                      <img
                        src="@/assets/RockIdenti/二长片麻岩.jpg"
                        class="rock-image"
                        alt="二长片麻岩"
                      />
                      <div class="content-image-caption">二长片麻岩</div>
                    </div>
                  </div>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<style scoped>
/* 变质岩专属样式 */
.collapse-item.metamorphic .metamorphic-content {
  padding: 15px;
  line-height: 1.6;
  color: #333;
}

.collapse-item.metamorphic h3 {
  color: #2c3e50;
  margin-top: 25px;
  margin-bottom: 15px;
  font-size: 18px;
  border-left: 4px solid #2ecc71; 
  padding-left: 10px;
}

.collapse-item.metamorphic h4 {
  color: #34495e;
  margin: 20px 0 10px 0;
  font-size: 16px;
}

.collapse-item.metamorphic .structure-list {
  padding-left: 20px;
  margin: 10px 0;
}

.collapse-item.metamorphic .structure-list li {
  margin-bottom: 8px;
}

.collapse-item.metamorphic .observation-method {
  background-color: #f5f5f5;
  padding: 12px 15px;
  border-radius: 4px;
  margin: 15px 0;
}

.collapse-item.metamorphic .regional-metamorphic {
  margin: 20px 0;
}

.collapse-item.metamorphic .regional-metamorphic ul {
  padding-left: 25px;
  margin: 10px 0;
}

/* 示例区块样式 */
.collapse-item.metamorphic .example {
  background-color: #f9f9f9;
  border-left: 3px solidrgb(38, 205, 149);
  padding: 10px 15px;
  margin: 15px 0;
  border-radius: 0 4px 4px 0;
}

.collapse-item.metamorphic .example-flex-layout {
  display: flex;
  gap: 20px;
  margin-top: 10px;
}

.collapse-item.metamorphic .example-text-content {
  flex: 1;
}

.collapse-item.metamorphic .example-image-wrapper {
  flex: 0 0 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.collapse-item.metamorphic .rock-image {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.collapse-item.metamorphic .content-image-caption {
  margin-top: 8px;
  font-size: 14px;
  color: #666;
  text-align: center;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .collapse-item.metamorphic .example-flex-layout {
    flex-direction: column;
  }
  
  .collapse-item.metamorphic .example-image-wrapper {
    margin-top: 15px;
  }
}

.collapse-item.sedimentary .example {
  background-color: #f9f9f9;
  border-left: 3px solid #3498db;
  padding: 10px 15px;
  margin: 15px 0;
  border-radius: 0 4px 4px 0;
}

.collapse-item.sedimentary .example-flex-layout {
  display: flex;
  gap: 20px;
  margin-top: 10px;
}

.collapse-item.sedimentary .example-text-content {
  flex: 1;
}

.collapse-item.sedimentary .example-image-wrapper {
  flex: 0 0 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.collapse-item.sedimentary .rock-image {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.collapse-item.sedimentary .content-image-caption {
  margin-top: 8px;
  font-size: 14px;
  color: #666;
  text-align: center;
}

@media (max-width: 768px) {
  .collapse-item.sedimentary .example-flex-layout {
    flex-direction: column;
  }

  .collapse-item.sedimentary .example-image-wrapper {
    margin-top: 15px;
  }
}

.collapse-item.sedimentary .sedimentary-content {
  padding: 15px;
  line-height: 1.6;
  color: #333;
}

.collapse-item.sedimentary h3 {
  color: #2c3e50;
  margin-top: 25px;
  margin-bottom: 15px;
  font-size: 18px;
  border-left: 4px solid #3498db;
  padding-left: 10px;
}

.collapse-item.sedimentary h4 {
  color: #34495e;
  margin: 15px 0 8px 0;
  font-size: 16px;
}

.collapse-item.sedimentary p {
  margin-bottom: 10px;
  text-align: justify;
}

.geo-rock-ident-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.geo-rock-class-title {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}

.geo-rock-carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: 20px 0;
}

.geo-rock-carousel-container {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-slide {
  min-width: 100%;
  box-sizing: border-box;
  padding: 0 15px;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 12px 18px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 20px;
  z-index: 10;
  transition: background 0.3s;
}

.carousel-button.prev {
  left: 20px;
}

.carousel-button.next {
  right: 20px;
}

.carousel-button:hover {
  background: rgba(0, 0, 0, 0.8);
}

.carousel-dots {
  text-align: center;
  padding: 20px 0;
}

.dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin: 0 8px;
  background: #ccc;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s;
}

.dot.active {
  background: #333;
}
/* 框显示岩石 */
.geo-rock-ident-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.geo-rock-class-title {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 2px solid #3498db;
}

.geo-rock-card-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 25px;
}

.geo-rock-card-item {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.geo-rock-card-item:hover {
  transform: translateY(-5px);
}

.geo-rock-card-header {
  background-color: #3498db;
  color: white;
  padding: 12px 15px;
}

.geo-rock-name {
  margin: 0;
  font-size: 18px;
}

.geo-rock-card-body {
  display: flex;
  padding: 15px;
}

.geo-rock-visual {
  flex: 1;
  min-width: 120px;
  margin-right: 15px;
}

.geo-rock-img-box {
  border: 1px solid #eee;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中 */
}

.geo-rock-img {
  width: 100%;
  max-width: 150px;
  height: auto;
  border-radius: 4px;
  border: 1px solid #eee;
}

.geo-rock-img-desc {
  margin-top: 5px;
  font-size: 12px;
  color: #7f8c8d;
}

.geo-rock-details {
  flex: 2;
}

.geo-rock-macro,
.geo-rock-micro {
  margin-bottom: 12px;
}

.geo-feature-title {
  color: #2980b9;
  margin-bottom: 5px;
  font-size: 15px;
}

.geo-feature-desc {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .geo-rock-card-wrapper {
    grid-template-columns: 1fr;
  }

  .geo-rock-card-body {
    flex-direction: column;
  }

  .geo-rock-visual {
    margin-right: 0;
    margin-bottom: 15px;
    text-align: center;
  }
}

/* 新增：左右布局样式 */
.example-flex-layout {
  display: flex;
  gap: 20px; /* 文字和图片之间的间距 */
  margin-top: 10px;
}

.example-text-content {
  flex: 1; /* 文字部分占据剩余空间 */
}

.example-image-wrapper {
  flex: 0 0 300px; /* 图片固定宽度，不缩放 */
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 响应式：在小屏幕上改为上下排列 */
@media (max-width: 768px) {
  .example-flex-layout {
    flex-direction: column;
  }

  .example-image-wrapper {
    margin-top: 15px;
  }
}

.collapse-item.igneous .igneous-content {
  padding: 15px;
  line-height: 1.6;
  color: #333;
}

.collapse-item.igneous h3 {
  color: #2c3e50;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 18px;
  border-left: 4px solid #e74c3c;
  padding-left: 10px;
}

.collapse-item.igneous h4 {
  color: #34495e;
  margin: 15px 0 8px 0;
  font-size: 16px;
}

.collapse-item.igneous p {
  margin-bottom: 10px;
  text-align: justify;
}

.collapse-item.igneous .example {
  background-color: #f9f9f9;
  border-left: 3px solid #3498db;
  padding: 10px 15px;
  margin: 15px 0;
  border-radius: 0 4px 4px 0;
}

.collapse-item.igneous .field-feature {
  background-color: #f0f7ff;
  border-left: 3px solid #2980b9;
  padding: 10px 15px;
  margin: 15px 0;
  border-radius: 0 4px 4px 0;
}

.collapse-item.igneous strong {
  color: #2c3e50;
}

/* 新增的并排容器样式（全新类名） */
.rock-row-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin: 20px 0;
}

/* 并排图片容器调整 */
.rock-row-item {
  flex: 1;
  min-width: 250px;
  max-width: 400px;
  text-align: center;
}

/* 保持原有图片样式不变 */
.rock-row-item .rock-image {
  width: 100%;
  height: auto;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .rock-row-item {
    min-width: 100%;
  }
}

/* 图片容器交互增强 */
.comparison-image-wrapper {
  flex: 1 1 300px;
  text-align: center;
  position: relative;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* 图片悬停效果 */
.comparison-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  max-height: 300px;
  border-radius: 6px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: zoom-in;
  filter: brightness(0.98);
}

.comparison-image:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  filter: brightness(1.05);
  border-color: #3a8ee6;
}

/* 点击放大效果 */
.comparison-image:active {
  transform: scale(2.2); /* 增大放大倍数 */
  box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.7); /* 全屏遮罩 */
  z-index: 1000; /* 确保在最顶层 */
  position: relative; /* 建立新的堆叠上下文 */
  cursor: zoom-out;
}

/* 标题动画 */
.comparison-caption {
  display: block;
  margin-top: 10px;
  font-size: 15px;
  color: #666;
  font-weight: 500;
  transition: all 0.3s ease;
  transform-origin: center top;
}

.comparison-image-wrapper:hover .comparison-caption {
  color: #3a8ee6;
  transform: scale(1.05);
}

/* 专业标记点 */
.geo-marker {
  position: absolute;
  width: 12px;
  height: 12px;
  background: #f56c6c;
  border-radius: 50%;
  border: 2px solid white;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.comparison-image-wrapper:hover .geo-marker {
  opacity: 1;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .comparison-image-wrapper {
    flex-basis: 100%;
  }
  .comparison-image:active {
    transform: scale(1.8);
    box-shadow: 0 0 0 100vh rgba(0, 0, 0, 0.7);
  }
}

/* 新增的并排展示样式（全新类名） */
.rock-comparison-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px 0;
  gap: 30px;
  position: relative; /* 建立新的定位上下文 */
  z-index: 1; /* 确保容器在普通文档流上方 */
}

.comparison-image-wrapper {
  flex: 1 1 300px;
  text-align: center;
  position: static; /* 重置定位 */
}

.comparison-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  max-height: 300px;
  border-radius: 6px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), z-index 0.1s 0.3s; /* 延迟z-index变化 */
}

.comparison-caption {
  display: block;
  margin-top: 8px;
  font-size: 14px;
  color: #7f8c8d;
  font-style: italic;
}

@media (max-width: 768px) {
  .comparison-image-wrapper {
    flex-basis: 100%;
  }
}

/* 图片容器样式 */
.rock-image-container {
  margin: 20px auto;
  text-align: center;
  width: 80%; /* 控制容器宽度 */
  max-width: 600px; /* 最大宽度限制 */
}

.rock-image {
  max-width: 100%; /* 最大不超过容器宽度 */
  height: auto; /* 高度自动按比例调整 */
  max-height: 400px; /* 设置最大高度限制 */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #ebeef5;
  display: inline-block; /* 使图片居中 */
}

.rock-image:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* 图片标题样式 */
.content-image-caption {
  display: block;
  margin-top: 8px;
  font-size: 14px;
  color: #7f8c8d;
  font-style: italic;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .rock-image-container {
    width: 95%; /* 小屏幕上更宽 */
  }
  .rock-image {
    max-height: 300px; /* 小屏幕高度减小 */
  }
}

.rock-section p {
  text-indent: 2em;
  line-height: 1.8;
  margin-bottom: 12px;
}

.highlight-info {
  background-color: #f5f7fa;
  padding: 10px;
  border-left: 4px solid #3a8ee6;
}

.highlight-danger {
  background-color: #fef0f0;
  padding: 10px;
  border-left: 4px solid #f56c6c;
}

.highlight-success {
  background-color: #f0f9eb;
  padding: 10px;
  border-left: 4px solid #67c23a;
}

.highlight-warning {
  background-color: #fdf6ec;
  padding: 10px;
  border-left: 4px solid #e6a23c;
}

.highlight-purple {
  background-color: #f5eef8;
  padding: 10px;
  border-left: 4px solid #8e44ad;
}

.highlight-teal {
  background-color: #ecf8f8;
  padding: 10px;
  border-left: 4px solid #16a085;
}

.highlight-lavender {
  background-color: #f9f2f9;
  padding: 10px;
  border-left: 4px solid #9b59b6;
}

.summary-text {
  font-style: italic;
  color: #7f8c8d;
}

.rock-term {
  font-weight: bold;
}

.term-primary {
  color: #3a8ee6;
}

.term-danger {
  color: #f56c6c;
}

.term-success {
  color: #67c23a;
}

.term-warning {
  color: #e6a23c;
}

.term-purple {
  color: #8e44ad;
}

.geology-container {
  font-family: "Microsoft YaHei", Arial, sans-serif;
  background-color: #f5f5f5;
  padding: 20px;
}

.geology-tabs {
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.geology-tabs :deep(.el-tabs__item) {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.geology-tabs :deep(.el-tabs__item.is-active) {
  color: #409eff;
  background-color: #f0f7ff;
}

.custom-tabs-label {
  display: flex;
  align-items: center;
  gap: 8px;
}

.rock-carousel {
  margin: 20px auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.carousel-image-container {
  position: relative;
  height: 100%;
  width: 100%;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 10px 15px;
  font-size: 16px;
  text-align: center;
}

.geology-intro {
  background-color: #fff;
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.geology-text {
  line-height: 1.8;
  color: #333;
  margin-bottom: 15px;
  text-align: justify;
}

.rock-collapse {
  margin-top: 20px;
}

.collapse-item {
  margin-bottom: 10px;
  border-radius: 6px;
  overflow: hidden;
}

.collapse-item :deep(.el-collapse-item__header) {
  font-weight: bold;
  font-size: 16px;
  padding-left: 15px;
  background-color: #f7f7f7;
}

.collapse-item.igneous :deep(.el-collapse-item__header) {
  border-left: 4px solid #e74c3c;
}

.collapse-item.sedimentary :deep(.el-collapse-item__header) {
  border-left: 4px solid #3498db;
}

.collapse-item.metamorphic :deep(.el-collapse-item__header) {
  border-left: 4px solid #2ecc71;
}

.rock-content {
  padding: 15px;
  line-height: 1.7;
  background-color: #fff;
}

.rock-sample {
  background-color: #f9f9f9;
  border-left: 3px solid #ddd;
  padding: 12px 15px;
  margin: 15px 0;
  border-radius: 0 4px 4px 0;
}

.rock-sample h4 {
  margin-top: 0;
  color: #555;
}

.identification-collapse {
  margin-top: 20px;
}

.identification-content {
  padding: 15px;
  background-color: #fff;
}

.identification-step {
  margin-bottom: 20px;
}

.identification-step h3 {
  color: #333;
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;
  margin-bottom: 12px;
}

.field-tip {
  background-color: #e6f7ff;
  border-left: 4px solid #1890ff;
  padding: 10px;
  margin: 10px 0;
  border-radius: 0 4px 4px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #555;
}

.identification-sample {
  margin-top: 30px;
}

.sample-card {
  background-color: #f8f8f8;
  border: 1px solid #e7e7e7;
  border-radius: 6px;
  padding: 15px;
  margin-bottom: 15px;
}

.sample-card h4 {
  margin-top: 0;
  color: #333;
  border-bottom: 1px dashed #ccc;
  padding-bottom: 8px;
}

@media (max-width: 768px) {
  .rock-carousel {
    height: 300px;
  }

  .geology-text {
    font-size: 14px;
  }
}

.demonstration {
  color: var(--el-text-color-secondary);
}

.demonstration-center {
  display: block;
  text-align: center;
  font-size: 18px;
}

.el-carousel {
  width: 80% !important;
  margin: 0 auto;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
