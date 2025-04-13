<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

const activeNav = ref("history"); // 默认激活第一个导航项

onMounted(() => {
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
      <!-- 06沉积相 -->
      <div
        class="geo-content-section sedimentary-facies"
        id="sedimentary-facies"
      >
        <h2 class="geo-section-title">
          <i class="geo-icon fas fa-layer-group"></i>
          06沉积相
        </h2>
        <div class="geo-section-content">
          <div class="geo-definition-box">
            <p class="geo-intro-text">
              <span class="geo-term">"沉积相(sedimentary facies)"</span
              >，是地质学中的一个基本概念。通过研究沉积相，我们可以更清楚地判断沉积时的环境和作用过程。
            </p>
            <p class="geo-importance-text">
              <i class="fas fa-exclamation-circle geo-icon-important"></i>
              正确识别沉积相，是研究地貌学、地层学以及进行油气勘探开发工作等领域的重要内容。
            </p>
          </div>

          <div class="geo-subsection">
            <h3 class="geo-subsection-title">
              <span class="geo-numbering">（1）</span>定义
            </h3>
            <div class="geo-timeline">
              <div class="geo-timeline-item">
                <div class="geo-timeline-marker"></div>
                <div class="geo-timeline-content">
                  <p>
                    "相"这一概念最早由丹麦地质学家<strong>斯丹诺（Steno，1699）</strong>首先引入地质文献。他认为"相是一定地质历史时期中地表某一部分的全貌"。
                  </p>
                </div>
              </div>
              <div class="geo-timeline-item">
                <div class="geo-timeline-marker"></div>
                <div class="geo-timeline-content">
                  <p>
                    1838年，瑞士地质学家<strong>格列斯利（Gressly）</strong>在研究欧洲的侏罗纪地层时，首先使用了"沉积相"这个术语，来说明地层在岩石成分上和化石特征上的侧向变化性质。
                  </p>
                </div>
              </div>
            </div>

            <div class="geo-concept-box">
              <p>现代地质学中所有关于沉积相的理解可以归纳为以下4种：</p>
              <div class="geo-highlight-box">
                <p>
                  相的较为完整准确的概念为：<strong>"沉积环境及在该环境中形成的沉积物（岩）特征的综合"</strong>。
                </p>
              </div>
              <p>
                沉积相分为<strong>碎屑岩沉积相</strong>和<strong>碳酸盐沉积相</strong>。由于碎屑岩储集层较常见，因此以介绍碎屑岩沉积相分类为主，可分为<strong>陆相组</strong>、<strong>过渡相组</strong>和<strong>海相组</strong>。
              </p>
            </div>
          </div>

          <!-- 陆相组部分 -->
          <div class="geo-subsection">
            <h3 class="geo-subsection-title">
              <span class="geo-numbering">（2）</span>陆相组
            </h3>

            <!-- 残积相 -->
            <div class="geo-facies-type">
              <h4 class="geo-facies-title">
                <i class="fas fa-mountain geo-facies-icon"></i>
                残积相（eluvial facies）
              </h4>
              <div class="geo-facies-content">
                <p>
                  地表岩石经受风化作用发生物理破坏和化学成分改变后，残留在原地的堆积物，称为残积相。沿剖面向下，它逐渐过渡为基岩。
                </p>
                <ul class="geo-feature-list">
                  <li>
                    主要由基岩碎屑及铁质、红土质（铁铝质）、粘土质沉积物组成
                  </li>
                  <li>无分选性，层理不清楚</li>
                  <li>分布面积不大，古代的残积相不多见</li>
                </ul>
              </div>
            </div>

            <!-- 沙漠相 -->
            <div class="geo-facies-type">
              <h4 class="geo-facies-title">
                <i class="fas fa-sun geo-facies-icon"></i>
                沙漠相（desert facies）
              </h4>
              <div class="geo-facies-content">
                <p>是陆相沉积类型之一，是在沙漠地区形成的沉积物。</p>
                <div class="geo-classification-box">
                  <h5>按成因划分：</h5>
                  <ul class="geo-type-list">
                    <li>岩漠沉积物</li>
                    <li>戈壁沉积物</li>
                    <li>风成沙沉积物</li>
                    <li>旱谷沉积物</li>
                    <li>沙漠湖及内陆盐碱滩沉积物</li>
                  </ul>
                </div>
                <div class="geo-characteristic-box">
                  <h5>风成沙特征：</h5>
                  <ul class="geo-feature-list">
                    <li>分选好</li>
                    <li>风成交错层理（巨型板状或槽状交错层理）广泛发育</li>
                    <li>生物化石稀少（尤其是植物化石）</li>
                    <li>可能找到风棱石</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- 其他陆相类型... -->
          </div>

          <!-- 过渡相组部分... -->
          <!-- 海相组部分... -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 06c沉积相 */
/* 地质主题基础样式 */
.geo-content-section {
  font-family: "Segoe UI", "Microsoft YaHei", sans-serif;
  line-height: 1.7;
  color: #3e3e3e;
  margin: 25px 0;
  padding: 20px;
  background-color: #f8f5f0;
  border-radius: 8px;
  border-left: 5px solid #8d6e63;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
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

.geo-subsection-title {
  color: #4e342e;
  font-size: 1.4rem;
  margin: 25px 0 15px;
  padding: 8px 15px;
  background-color: #d7ccc8;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

.geo-numbering {
  color: #5d4037;
  font-weight: bold;
  margin-right: 8px;
}

/* 特殊内容块样式 */
.geo-definition-box {
  background-color: #efebe9;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
  border-left: 4px solid #a1887f;
}

.geo-term {
  font-weight: bold;
  color: #5d4037;
  border-bottom: 1px dashed #8d6e63;
}

.geo-highlight-box {
  background-color: #e8eaf6;
  padding: 12px 15px;
  border-left: 4px solid #3949ab;
  margin: 15px 0;
  border-radius: 0 4px 4px 0;
}

/* 相类型卡片 */
.geo-facies-type {
  background: white;
  border-radius: 6px;
  padding: 15px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  border-top: 3px solid #8d6e63;
}

.geo-facies-title {
  color: #4e342e;
  font-size: 1.2rem;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
}

.geo-facies-icon {
  margin-right: 10px;
  color: #6d4c41;
}

/* 列表样式 */
.geo-feature-list {
  padding-left: 20px;
}

.geo-feature-list li {
  margin-bottom: 8px;
  position: relative;
  list-style-type: none;
}

.geo-feature-list li:before {
  content: "•";
  color: #8d6e63;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

/* 重要提示 */
.geo-importance-text {
  background-color: #fff8e1;
  padding: 12px;
  border-left: 4px solid #ffa000;
  border-radius: 0 4px 4px 0;
}

.geo-icon-important {
  color: #ff8f00;
  margin-right: 8px;
}

/* 时间线样式 */
.geo-timeline {
  position: relative;
  padding-left: 30px;
  margin: 20px 0;
}

.geo-timeline-item {
  position: relative;
  padding-bottom: 15px;
}

.geo-timeline-marker {
  position: absolute;
  left: -30px;
  top: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #8d6e63;
  border: 3px solid #d7ccc8;
}

.geo-timeline-content {
  padding-left: 10px;
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
