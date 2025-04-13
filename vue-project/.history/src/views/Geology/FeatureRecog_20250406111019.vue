<script lang="ts" setup>
import { onMounted } from "vue";

onMounted(() => {
  // 默认高亮"01历史回望"
  const defaultLink = document.querySelector('.nav-link[href="#history"]');
  if (defaultLink) defaultLink.classList.add("active");

  // 处理手动点击导航
  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    // 移除所有active类
    document.querySelectorAll(".nav-link").forEach((el) => {
      el.classList.remove("active");
    });

    // 添加当前active类
    e.target.classList.add("active");

    // 平滑滚动到目标位置
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  // 为所有导航链接添加点击事件
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", handleNavClick);
  });

  // 滚动监听
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          const link = document.querySelector(`.nav-link[href="#${id}"]`);

          // 移除所有active类
          document.querySelectorAll(".nav-link").forEach((el) => {
            el.classList.remove("active");
          });

          // 添加当前active类
          link?.classList.add("active");
        }
      });
    },
    { threshold: 0.5 }
  );

  ["history", "rock-stratigraphy"].forEach((id) => {
    const element = document.getElementById(id);
    if (element) observer.observe(element);
  });

  return () => {
    // 清理事件监听
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.removeEventListener("click", handleNavClick);
    });
    // 清理观察器
    ["history", "rock-stratigraphy"].forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.unobserve(element);
    });
  };
});

import { ref } from "vue";

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
  bedding: false,
  // 其他折叠项...
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

// 图片灯箱
const lightboxVisible = ref(false);
const lightboxImage = ref("");

const openLightbox = (image) => {
  lightboxImage.value = image;
  lightboxVisible.value = true;
};

const closeLightbox = () => {
  lightboxVisible.value = false;
};
</script>

<template>
  <div class="main-content">
    <!-- 浮动导航栏 -->
    <div class="floating-nav">
      <div class="nav-title">页面导航</div>
      <ul class="nav-list">
        <li><a href="#history" class="nav-link">01 历史回望</a></li>
        <li><a href="#rock-stratigraphy" class="nav-link">02 岩石地层</a></li>
        <li><a href="#bio-stratigraphy" class="nav-link">03 生物地层</a></li>
        <li><a href="#chrono-stratigraphy" class="nav-link">04 年代地层</a></li>
        <li>
          <a href="#sedimentary-structures" class="nav-link">05 沉积构造</a>
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
                  <div class="image-gallery">
                    <img
                      src="@/assets/FeatureRecog/05沉积构造/流水波痕.jpg"
                      alt="流水波痕"
                      @click="openLightbox('current_ripple1.jpg')"
                    />
                    <img
                      src="@/assets/FeatureRecog/05沉积构造/流水波痕形态变化.jpg"
                      alt="流水波痕形态变化"
                      @click="openLightbox('current_ripple2.jpg')"
                    />
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
                  <div class="image-gallery">
                    <img
                      src="@/assets/FeatureRecog/05沉积构造/对称与不对称波痕.jpg"
                      alt="对称与不对称波痕"
                      @click="openLightbox('wave_ripple1.jpg')"
                    />
                    <img
                      src="@/assets/FeatureRecog/05沉积构造/浪成波痕（对称）.jpg"
                      alt="浪成波痕（对称）"
                      @click="openLightbox('wave_ripple2.jpg')"
                    />
                  </div>
                </div>

                <!-- 风成波痕 -->
                <div v-show="activeRippleType === 'wind'" class="subtype">
                  <h5 class="subtype-title">风成波痕</h5>
                  <p>
                    风成波痕是指风作用于沉积物表面而形成的一种层面构造。一般具有直、长而平行的脊，形态不对称，部分分叉。
                  </p>
                  <div class="image-gallery">
                    <img
                      src="@/assets/FeatureRecog/05沉积构造/风成波痕.jpg"
                      alt="风成波痕示例"
                      @click="openLightbox('wind_ripple1.jpg')"
                    />
                    <div class="image-caption">风成波痕示例</div>
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
                  <!-- <div class="image-gallery">
                    <img
                      src="@/assets/graded_bedding1.jpg"
                      alt="递变层理示例"
                      @click="openLightbox('graded_bedding1.jpg')"
                    />
                    <img
                      src="@/assets/graded_bedding2.jpg"
                      alt="递变层理剖面"
                      @click="openLightbox('graded_bedding2.jpg')"
                    />
                  </div> -->
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
                  <!-- <div class="image-gallery">
                    <img
                      src="@/assets/horizontal_bedding1.jpg"
                      alt="水平层理示例"
                      @click="openLightbox('horizontal_bedding1.jpg')"
                    />
                    <img
                      src="@/assets/horizontal_bedding2.jpg"
                      alt="水平层理剖面"
                      @click="openLightbox('horizontal_bedding2.jpg')"
                    />
                  </div> -->
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
                  <!-- <div class="image-gallery">
                    <img
                      src="@/assets/cross_bedding1.jpg"
                      alt="交错层理示例"
                      @click="openLightbox('cross_bedding1.jpg')"
                    />
                    <img
                      src="@/assets/cross_bedding2.jpg"
                      alt="交错层理剖面"
                      @click="openLightbox('cross_bedding2.jpg')"
                    />
                  </div> -->
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
                  <!-- <div class="image-gallery">
                    <img
                      src="@/assets/parallel_bedding1.jpg"
                      alt="平行层理示例"
                      @click="openLightbox('parallel_bedding1.jpg')"
                    />
                    <img
                      src="@/assets/parallel_bedding2.jpg"
                      alt="平行层理剖面"
                      @click="openLightbox('parallel_bedding2.jpg')"
                    />
                  </div> -->
                </div>
              </div>
            </div>

            <!-- 其他物理成因构造... -->
          </div>

          <!-- 化学成因构造... -->

          <!-- 生物成因构造... -->

          <!-- 图片灯箱 -->
          <div v-if="lightboxVisible" class="lightbox" @click="closeLightbox">
            <div class="lightbox-content">
              <img
                :src="require(`@/assets/${lightboxImage}`)"
                :alt="'沉积构造图片'"
              />
              <button class="close-btn" @click.stop="closeLightbox">×</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 05沉积构造 */
/* 分类导航 */
.image-caption {
  margin-top: 8px;
  font-size: 0.9rem;
  color: #555;
  text-align: center;
  padding: 0 5px;
}

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
.bedding-types {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 10px 0;
}

.ripple-types button,
.bedding-types button {
  padding: 6px 12px;
  background-color: #f1f8fe;
  border: 1px solid #3498db;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.ripple-types button.active,
.bedding-types button.active {
  background-color: #3498db;
  color: white;
}

/* 图片画廊 */
.image-gallery {
  display: flex;
  gap: 15px;
  margin: 15px 0;
  flex-wrap: wrap;
}

.image-gallery img {
  max-width: 200px;
  height: auto;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s;
  border: 1px solid #ddd;
}

.image-gallery img:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* 灯箱样式 */
.lightbox {
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

.lightbox-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 80vh;
  border-radius: 8px;
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

  .image-gallery {
    flex-direction: column;
  }

  .image-gallery img {
    max-width: 100%;
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
