<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

const activeNav = ref("history"); // 默认激活第一个导航项

// 卡片状态管理
const cards = ref([]);

// 初始化卡片状态
const initCards = () => {
  const cardElements = document.querySelectorAll(".facies-card");
  cards.value = Array.from(cardElements).map(() => ({
    showDetails: false,
  }));
};

// 相组状态管理
const subsections = ref([]);

// 初始化相组状态
const initSubsections = () => {
  const subsectionElements = document.querySelectorAll(".geo-subsection");
  subsections.value = Array.from(subsectionElements).map(() => ({
    expanded: true,
  }));
};

// 切换卡片详情显示
const toggleCardDetails = (index) => {
  cards.value[index].showDetails = !cards.value[index].showDetails;

  const card = document.querySelectorAll(".facies-card")[index];
  const content = card.querySelector(".facies-card-content");
  const classifications = card.querySelectorAll(".facies-classification");

  if (cards.value[index].showDetails) {
    classifications.forEach((item) => {
      item.style.display = "block";
    });
    content.style.display = "none";
  } else {
    classifications.forEach((item) => {
      item.style.display = "none";
    });
    content.style.display = "block";
  }
};

// 切换相组展开/折叠
const toggleSubsection = (index) => {
  subsections.value[index].expanded = !subsections.value[index].expanded;

  const subsection = document.querySelectorAll(".geo-subsection")[index];
  const cardsContainer = subsection.querySelector(".facies-cards-container");
  const icon = subsection.querySelector(".geo-subsection-title i:last-child");

  if (subsections.value[index].expanded) {
    cardsContainer.style.maxHeight = cardsContainer.scrollHeight + "px";
    icon.classList.remove("fa-chevron-down");
    icon.classList.add("fa-chevron-up");
  } else {
    cardsContainer.style.maxHeight = null;
    icon.classList.remove("fa-chevron-up");
    icon.classList.add("fa-chevron-down");
  }
};

onMounted(() => {
  initCards();
  initSubsections();

  // 为每个相组标题添加折叠图标
  document.querySelectorAll(".geo-subsection-title").forEach((title) => {
    const icon = document.createElement("i");
    icon.className = "fas fa-chevron-up";
    icon.style.marginLeft = "auto";
    title.appendChild(icon);
  });

  const sections = [
    "history",
    "rock-stratigraphy",
    "bio-stratigraphy",
    "chrono-stratigraphy",
    "sedimentary-structures",
    "sedimentary-facies",
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
  { id: "mudcrack", name: "干裂" },
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
      </ul>
    </div>

    <!-- 原有内容容器 -->
    <div class="stratigraphy-container">
      <div class="header">
        <h1>地层特征识别</h1>
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

          <div class="stratigraphy-principle">
            <p>
              地层的结构、基本层序和各岩层之间的接触关系等，均是岩石地层划分的重要依据。只有在建立了岩石地层序列或格架的基础上，才能进行生物地层、年代地层等其他分支地层类别的研究。
            </p>
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

            <div class="informal-unit">
              <h4 class="unit-type-title">非正式岩石地层单位</h4>
              <p>
                非正式岩石地层单位（informal lithostratigraphic
                units）是指未正式命名，或无需正式命名，并依附于某一正式单位的岩石地层单位，其常用单位术语之间无等级和大小之分。
              </p>
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
            </div>
          </div>
        </div>
      </div>

      <!-- 03生物地层 -->
      <div class="content-section bio-stratigraphy" id="bio-stratigraphy">
        <h2 class="section-title">03生物地层</h2>
        <div class="section-content">
          <div class="intro-section">
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
          </div>

          <div class="classification-system">
            <h3 class="subsection-title">年代地层分类系统</h3>
            <p>
              地质学家们根据地壳岩石的年龄及形成时间，进行了年代地层分类。并建立了一个<strong>全球标准年代地层表</strong>。
            </p>
            <p>
              该表是对已定义并命名的年代地层单位进行系统排列的一个完整的等级系列，兼有区域和世界的可应用性。
            </p>
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
                </div>

                <!-- 风成波痕 -->
                <div v-show="activeRippleType === 'wind'" class="subtype">
                  <h5 class="subtype-title">风成波痕</h5>
                  <p>
                    风成波痕是指风作用于沉积物表面而形成的一种层面构造。一般具有直、长而平行的脊，形态不对称，部分分叉。
                  </p>
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
                  <p>
                    递变层理的递变型式主要有两种。一种是颗粒向上逐渐变细，但下部不含细颗粒，可能是由流速和搬运能力逐渐减小的水流沉积而成的。
                  </p>
                  <p>
                    另一种是细颗粒从底到顶均有分布，粗颗粒向上逐渐减少。这大概是含有各种不同大小颗粒的悬浮体沉积的结果，多数递变层属于此种。
                  </p>
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
                </div>

                <!-- 细流痕 -->
                <div v-show="activeErosionType === 'rill'" class="subtype">
                  <h5 class="subtype-title">细流痕</h5>
                  <p>
                    细流痕是指当沉积物层面在水退却后露出水面时，从沉积物中不断渗出的薄水层沿自然倾斜表面向下流动，从而在其上侵蚀出各种形状的微细沟槽。
                  </p>
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
                </div>

                <!-- 包卷层理 -->
                <div
                  v-show="activeDeformationType === 'convolute'"
                  class="subtype"
                >
                  <h5 class="subtype-title">包卷层理</h5>
                </div>

                <!-- 干裂 -->
                <div
                  v-show="activeDeformationType === 'mudcrack'"
                  class="subtype"
                >
                  <h5 class="subtype-title">干裂</h5>
                </div>

                <!-- 雨痕 -->
                <div
                  v-show="activeDeformationType === 'raindrop'"
                  class="subtype"
                >
                  <h5 class="subtype-title">雨痕</h5>
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
                <p>
                  如果这类晶体后来被其它物质交代，或者晶体印痕为其它物质充填，就形成晶体假象即假晶。
                </p>
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
                <p>
                  鸟眼构造主要发育于泥晶或粉晶石灰岩及白云岩中，由单个或成群的毫米级鸟眼状孔隙被亮晶方解石或石膏等胶结物充填而成。
                </p>
                <p>
                  它们常呈浅色斑点出现在暗色的基底中,如果成群定向排列,则形成筛状、窗格状或网格状构造。
                </p>
                <p>关于鸟眼构造的成因有以下多种说法：</p>
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
                <p>
                  缝合线构造在碳酸盐岩地层中广泛发育，在石英砂岩、硅质岩、盐岩等岩层内也有产出。
                </p>
                <p>
                  它在剖面上表现为连接岩层的两个相邻部分的锯齿状接缝，其中常富集粘土等不溶残余物，在平面上呈参差起伏的表面。
                </p>
                <p>
                  缝合线的起伏幅度变化较大，小者小于1mm，大者可达十几厘米或更大。它的几何形状常见的有简单波曲形、复杂弯曲形、尖齿形、方齿形和震波曲线形。
                </p>
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 06沉积相 -->
      <div class="geo-content-section" id="sedimentary-facies">
        <h2 class="geo-section-title">
          <i class="geo-icon fas fa-layer-group"></i>
          06沉积相
        </h2>

        <!-- 定义部分 -->
        <div class="geo-subsection">
          <h3 class="geo-subsection-title">
            <span class="geo-numbering">（1）</span>定义
          </h3>
          <div class="facies-cards-container">
            <div class="facies-card">
              <div class="facies-card-header">
                <i class="facies-icon fas fa-book"></i>
                <h3 class="facies-card-title">沉积相定义</h3>
              </div>
              <div class="facies-card-body">
                <div class="facies-card-content">
                  <p>
                    "沉积相(sedimentary
                    facies)"，是地质学中的一个基本概念。通过研究沉积相，我们可以更清楚地判断沉积时的环境和作用过程。
                  </p>
                  <p>
                    正确识别沉积相，是研究地貌学、地层学以及进行油气勘探开发工作等领域的重要内容。
                  </p>
                </div>
              </div>
            </div>

            <div class="facies-card">
              <div class="facies-card-header">
                <i class="facies-icon fas fa-history"></i>
                <h3 class="facies-card-title">历史发展</h3>
              </div>
              <div class="facies-card-body">
                <div class="facies-card-content">
                  <p>
                    "相"这一概念最早由丹麦地质学家<strong>斯丹诺（Steno，1699）</strong>首先引入地质文献。他认为"相是一定地质历史时期中地表某一部分的全貌"。
                  </p>
                  <p>
                    1838年，瑞士地质学家<strong>格列斯利（Gressly）</strong>在研究欧洲的侏罗纪地层时，首先使用了"沉积相"这个术语。
                  </p>
                </div>
              </div>
            </div>

            <div class="facies-card">
              <div class="facies-card-header">
                <i class="facies-icon fas fa-project-diagram"></i>
                <h3 class="facies-card-title">分类体系</h3>
              </div>
              <div class="facies-card-body">
                <div class="facies-card-content">
                  <p>
                    相的较为完整准确的概念为：<strong>"沉积环境及在该环境中形成的沉积物（岩）特征的综合"</strong>。
                  </p>
                  <div class="facies-classification">
                    <h5>沉积相分类：</h5>
                    <ul class="facies-feature-list">
                      <li>碎屑岩沉积相</li>
                      <li>碳酸盐沉积相</li>
                    </ul>
                    <p>以碎屑岩沉积相分类为主，可分为：</p>
                    <ul class="facies-feature-list">
                      <li>陆相组</li>
                      <li>过渡相组</li>
                      <li>海相组</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 陆相组 -->
        <div class="geo-subsection">
          <h3 class="geo-subsection-title continental">
            <span class="geo-numbering">（2）</span>陆相组
          </h3>
          <div class="facies-cards-container">
            <!-- 冰川相 -->
            <div class="facies-card continental-card">
              <div class="facies-card-header">
                <i class="facies-icon fas fa-snowflake"></i>
                <h3 class="facies-card-title">冰川相（glacial facies）</h3>
              </div>
              <div class="facies-card-body">
                <div class="facies-card-content">
                  <p>
                    是陆相沉积类型之一，是由冰川作用堆积形成的沉积物，形成于年平均温度很低的地区。
                  </p>
                </div>

                <div class="facies-classification">
                  <h5>细分类型：</h5>
                  <ul class="facies-feature-list">
                    <li>冰碛相</li>
                    <li>冰湖相</li>
                  </ul>
                </div>

                <div class="facies-classification">
                  <h5>冰碛相特征：</h5>
                  <ul class="facies-feature-list">
                    <li>主要由碎屑岩组成</li>
                    <li>碎屑呈尖角状</li>
                    <li>分选差</li>
                    <li>在巨大的砾块上有冰川擦痕</li>
                  </ul>
                </div>

                <div class="facies-classification">
                  <h5>冰水相特征：</h5>
                  <ul class="facies-feature-list">
                    <li>由碎屑岩及粘土岩组成</li>
                    <li>碎屑物具有一定程度的分选</li>
                    <li>有时具斜层理</li>
                  </ul>
                </div>

                <div class="facies-classification">
                  <h5>冰湖相特征：</h5>
                  <ul class="facies-feature-list">
                    <li>由粘土岩和粉砂岩组成</li>
                    <li>具带状构造</li>
                    <li>因此也称"纹泥"</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- 冲积扇 -->
            <div class="facies-card continental-card">
              <div class="facies-card-header">
                <i class="facies-icon fas fa-fan"></i>
                <h3 class="facies-card-title">冲积扇</h3>
              </div>
              <div class="facies-card-body">
                <div class="facies-card-content">
                  <p>
                    是山地河流出口处的堆积地貌。山地河流流过山麓后，因坡度变缓，流速降低，河道变宽，河水携带的砂石大量堆积，使河床抬高，因此河流不断变迁改道，或分成多股水流，形成一个延伸很广，坡度较缓的台地，外形如同折扇。
                  </p>
                </div>

                <div class="facies-classification">
                  <h5>冲积扇相划分：</h5>
                  <ul class="facies-feature-list">
                    <li>扇根(顶)</li>
                    <li>扇中</li>
                    <li>扇缘(端)</li>
                  </ul>
                  <p>
                    它们之间没有明显的界线。此外，在扇与扇之间，还存在着扇间地带。
                  </p>
                </div>
              </div>
            </div>

            <!-- 河流相 -->
            <div class="facies-card continental-card">
              <div class="facies-card-header">
                <i class="facies-icon fas fa-water"></i>
                <h3 class="facies-card-title">河流相（fluvial facies）</h3>
              </div>
              <div class="facies-card-body">
                <div class="facies-card-content">
                  <p>
                    属陆相沉积类型。是由河流或其它径流作用形成的一套沉积物或沉积岩。
                  </p>
                </div>

                <div class="facies-classification">
                  <h5>亚相类型：</h5>
                  <ul class="facies-type-list">
                    <li>谷底滞流沉积</li>
                    <li>边滩沉积</li>
                    <li>心滩沉积</li>
                    <li>天然堤沉积</li>
                    <li>决口扇沉积</li>
                    <li>河漫滩沉积</li>
                    <li>废弃河道填谷沉积</li>
                  </ul>
                </div>

                <div class="facies-classification">
                  <h5>古代河流沉积的主要标志：</h5>
                  <ul class="facies-feature-list">
                    <li>岩石由砾砂、粉砂、粘土等碎屑沉积物组成</li>
                    <li>成分成熟度低</li>
                    <li>常见底部冲刷面，其上有泥砾</li>
                    <li>分选性差到中等</li>
                    <li>粒度分布多双峰态</li>
                    <li>粒度概率图显两段式</li>
                    <li>
                      层理类型多样，以反映单向水流的大型槽状和板状交错层理为特征
                    </li>
                    <li>波痕不对称</li>
                    <li>可见砾石呈迭瓦状排列</li>
                    <li>具明显的间断正韵律</li>
                    <li>砂体呈透镜状</li>
                    <li>平面上沿水流方向呈弯曲的带状分布</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- 湖泊相 -->
            <div class="facies-card continental-card">
              <div class="facies-card-header">
                <i class="facies-icon fas fa-lake"></i>
                <h3 class="facies-card-title">湖泊相（lacustrine facies）</h3>
              </div>
              <div class="facies-card-body">
                <div class="facies-card-content">
                  <p>湖泊是大陆上地形相对低洼和流水汇集的地区。</p>
                </div>

                <div class="facies-classification">
                  <h5>根据洪水面、枯水面和浪基面划分：</h5>
                  <ul class="facies-feature-list">
                    <li>滨湖亚相</li>
                    <li>浅湖亚相</li>
                    <li>半深湖亚相</li>
                    <li>深湖亚相</li>
                  </ul>
                  <p>平面上它们大致呈环带状分布，另外，还可划分出湖湾亚相。</p>
                </div>
              </div>
            </div>

            <!-- 沼泽相 -->
            <div class="facies-card continental-card">
              <div class="facies-card-header">
                <i class="facies-icon fas fa-tree"></i>
                <h3 class="facies-card-title">沼泽相（swamp facies）</h3>
              </div>
              <div class="facies-card-body">
                <div class="facies-card-content">
                  <p>
                    是在沼泽环境形成的沉积物。地质历史中沼泽发育的主要时代是石炭纪、侏罗纪等。
                  </p>
                  <p>
                    当时气候温暖潮湿，沼泽中植物丛生，有大量的泥炭堆积。泥炭埋藏在地下，经煤化作用转变为煤，所以煤成为古代沼泽相的主要成分。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 过渡相组 -->
        <div class="geo-subsection">
          <h3 class="geo-subsection-title transitional">
            <span class="geo-numbering">（3）</span>过渡相组
          </h3>
          <div class="facies-cards-container">
            <!-- 三角洲相 -->
            <div class="facies-card transitional-card">
              <div class="facies-card-header">
                <i class="facies-icon fas fa-delta"></i>
                <h3 class="facies-card-title">三角洲相（delta facies）</h3>
              </div>
              <div class="facies-card-body">
                <div class="facies-card-content">
                  <p>
                    是海陆过渡相组的重要组成部分，指河流与海盆(或与湖泊)的汇合处形成的大型锥状沉积物堆积体。
                  </p>
                  <p>
                    在河流入海(或入湖)盆地的河口区，因坡度减缓，水流扩散，流速降低，遂将携带的泥沙沉积于此，形成近于顶尖向陆的三角形沉积体，规模可自数平方千米到几千平方千米。
                  </p>
                </div>

                <div class="facies-classification">
                  <h5>依据河流汇入的蓄水体盆地性质的不同：</h5>
                  <ul class="facies-feature-list">
                    <li>海洋三角洲</li>
                    <li>湖泊三角洲</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- 河口湾相 -->
            <div class="facies-card transitional-card">
              <div class="facies-card-header">
                <i class="facies-icon fas fa-water"></i>
                <h3 class="facies-card-title">河口湾相</h3>
              </div>
              <div class="facies-card-body">
                <div class="facies-card-content">
                  <p>
                    属于海陆过渡相组。在构造沉降幅度大的海岸地区，一般都为潮汐作用很强的高潮差区，在此类海岸的河口地区，受潮汐和河流两个因素的作用。
                  </p>
                  <p>
                    当河流泥沙供应不足时并不形成三角洲，而是形成喇叭形的河口湾（estuary），又因其形似三角形故又叫三角港。主要由上三角洲平原(无潮汐作用)、下三角洲平原(潮间泥坪)、分流河道、潮道、潮汐沙坝等组成。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 海相组 -->
        <div class="geo-subsection">
          <h3 class="geo-subsection-title marine">
            <span class="geo-numbering">（4）</span>海相组
          </h3>
          <div class="facies-cards-container">
            <!-- 滨岸相 -->
            <div class="facies-card marine-card">
              <div class="facies-card-header">
                <i class="facies-icon fas fa-umbrella-beach"></i>
                <h3 class="facies-card-title">滨岸相（Shore facies）</h3>
              </div>
              <div class="facies-card-body">
                <div class="facies-card-content">
                  <p>
                    又称海岸相，是海相的亚相之一。滨岸指海水波浪基准面之上，紧邻陆地的滨浅海地带，包括潮上带、潮间带和潮下带。
                  </p>
                  <p>
                    这一地带的水动力条件、水化学状况及海洋地貌均较复杂。主要由于波浪作用和潮汐作用，形成海岸相的各种沉积体，其中重要的有海滩、堤岛、泻湖、潮坪等沉积类型。
                  </p>
                </div>

                <div class="facies-classification">
                  <h5>海岸类型划分：</h5>
                  <ul class="facies-feature-list">
                    <li>无障壁海岸</li>
                    <li>障壁海岸</li>
                  </ul>
                  <p>
                    根据沉积物的性质又可进一步分为陆源碎屑沉积海岸及碳酸盐沉积海岸。
                  </p>
                </div>
              </div>
            </div>

            <!-- 浅海陆棚相 -->
            <div class="facies-card marine-card">
              <div class="facies-card-header">
                <i class="facies-icon fas fa-water"></i>
                <h3 class="facies-card-title">
                  浅海陆棚相（shallow sea shelf facies）
                </h3>
              </div>
              <div class="facies-card-body">
                <div class="facies-card-content">
                  <p>
                    与滨岸相相邻，即从近滨的外侧至大陆坡内侧的广阔陆棚区，宽度由数公里至百公里。
                  </p>
                  <p>
                    古代浅海陆棚相是长期地质发展的沉积产物，沉积厚度大，分布面积广。浅海陆棚相可划分为过渡带及滨外陆棚两个亚相，但有时难以分出过渡带。
                  </p>
                  <p>
                    古代滨外陆棚主要为粘土—粉砂沉积，砂砾较小，常有大量化学岩及生物化学岩，如碳酸盐岩及部分铁、锰、铝、磷沉积岩等。
                  </p>
                </div>
              </div>
            </div>

            <!-- 半深海相 -->
            <div class="facies-card marine-card">
              <div class="facies-card-header">
                <i class="facies-icon fas fa-water"></i>
                <h3 class="facies-card-title">半深海相（bathyal facies）</h3>
              </div>
              <div class="facies-card-body">
                <div class="facies-card-content">
                  <p>
                    形成于大陆坡（continental
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
            </div>

            <!-- 深海相 -->
            <div class="facies-card marine-card">
              <div class="facies-card-header">
                <i class="facies-icon fas fa-water"></i>
                <h3 class="facies-card-title">深海相（abyssal facies）</h3>
              </div>
              <div class="facies-card-body">
                <div class="facies-card-content">
                  <p>
                    是海相沉积类型之一。形成于大洋底部，海水深度>2000--3000米。海深相中的主要沉积物是含抱球虫的石灰质软泥、含硅藻和放射虫的硅质软泥、红色软泥等。
                  </p>
                  <p>
                    近年来由于海洋地质学的迅速发展，逐渐揭开了深海沉积的秘密。许多资料证实，由于浊流沉积作用，在深海中沉积有厚度大面积广的浊积岩。
                  </p>
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
/* 06c沉积相 */
.geo-content-section {
  max-width: 1200px;
  margin: 0 auto;
}

.geo-section-title {
  color: #5d4037;
  font-size: 1.8rem;
  border-bottom: 2px solid #bcaaa4;
  padding-bottom: 12px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
}

.geo-icon {
  margin-right: 12px;
  color: #6d4c41;
}

.geo-subsection {
  margin-bottom: 40px;
}

.geo-subsection-title {
  color: white;
  font-size: 1.4rem;
  margin: 25px 0 15px;
  padding: 12px 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.geo-subsection-title::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.3) 100%
  );
  z-index: 1;
}

.geo-subsection-title.continental {
  background-color: var(--continental-color);
}

.geo-subsection-title.transitional {
  background-color: var(--transitional-color);
}

.geo-subsection-title.marine {
  background-color: var(--marine-color);
}

.geo-numbering {
  font-weight: bold;
  margin-right: 8px;
  z-index: 2;
}

.facies-cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.facies-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.facies-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.facies-card-header {
  padding: 15px;
  color: white;
  display: flex;
  align-items: center;
}

.continental-card .facies-card-header {
  background-color: var(--continental-color);
}

.transitional-card .facies-card-header {
  background-color: var(--transitional-color);
}

.marine-card .facies-card-header {
  background-color: var(--marine-color);
}

.facies-icon {
  font-size: 1.5rem;
  margin-right: 12px;
}

.facies-card-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
}

.facies-card-body {
  padding: 15px;
}

.facies-card-content {
  margin-bottom: 15px;
}

.facies-feature-list {
  padding-left: 20px;
  margin: 10px 0;
}

.facies-feature-list li {
  margin-bottom: 8px;
  position: relative;
  list-style-type: none;
}

.facies-feature-list li:before {
  content: "•";
  color: #8d6e63;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

.facies-classification {
  background-color: #f5f5f5;
  padding: 12px;
  border-radius: 6px;
  margin: 15px 0;
  border-left: 3px solid #a1887f;
}

.facies-classification h5 {
  margin-top: 0;
  margin-bottom: 10px;
  color: #5d4037;
}

.facies-type-list {
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
  padding-left: 20px;
}

.facies-type-list li {
  margin-bottom: 8px;
  break-inside: avoid;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .facies-cards-container {
    grid-template-columns: 1fr;
  }

  .facies-type-list {
    columns: 1;
    -webkit-columns: 1;
    -moz-columns: 1;
  }
}

/* 动画效果 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.facies-card {
  animation: fadeIn 0.5s ease forwards;
  opacity: 0;
}

.facies-card:nth-child(1) {
  animation-delay: 0.1s;
}
.facies-card:nth-child(2) {
  animation-delay: 0.2s;
}
.facies-card:nth-child(3) {
  animation-delay: 0.3s;
}
.facies-card:nth-child(4) {
  animation-delay: 0.4s;
}
.facies-card:nth-child(5) {
  animation-delay: 0.5s;
}
.facies-card:nth-child(6) {
  animation-delay: 0.6s;
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
