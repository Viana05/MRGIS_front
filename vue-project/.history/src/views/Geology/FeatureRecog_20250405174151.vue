<script lang="ts" setup></script>

<template>
  <div class="stratigraphy-container">
    <div class="header">
      <h1>地层特征识别</h1>
      <p class="subtitle">
        从"雪球地球到盘古大陆"，从"生物大爆发到生物大灭绝"...几十亿年的演化中，地球经历了无数的变化。为了了解这漫长的历史，地质学家们通过采集分析资料，将其与地质年代结合，重现了地球的演化。而这些有关地球历史的最详细、最精确的信息大部分都来自于地球上最为神奇的构造——地层！
      </p>
    </div>

    <div class="content-section historical-review">
      <h2 class="section-title">历史回望</h2>
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
                统一地层划分对比思想为主导。即一切地层单位和地层界线均统一于年代地层单位和界线的观点，在地层学中主导了数百年的时间。
              </li>
              <li>
                地层分类、术语、概念和原理激烈变动。各种地层学概念和术语大量出现，又被摒弃。
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

    <div class="content-section rock-stratigraphy">
      <h2 class="section-title">岩石地层</h2>
      <div class="definition-box">
        <p>
          <strong>地层（stratum）</strong
          >：一切成层岩石的总称，是一层或一组具有某种统一的特征和属性的，并和上下层有着明显区别的岩层。
        </p>
        <p>
          <strong>岩石地层学</strong
          >：根据地层的岩性及岩性组合，对地层进行划分、对比的学科。
        </p>
        <p>
          <strong>岩石地层划分</strong
          >：根据地层的岩性、岩相和变质、变形特征将地层组织成相应的岩石地层单位。
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stratigraphy-container {
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
  left: -3.5rem;
  top: -2rem;
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
