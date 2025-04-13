<script setup>
import { ref } from 'vue'

const activeSection = ref('01')
const activeSubSection = ref(null)

const toggleSection = (section) => {
  if (activeSection.value === section) {
    activeSection.value = null
  } else {
    activeSection.value = section
  }
}

const toggleSubSection = (subSection) => {
  if (activeSubSection.value === subSection) {
    activeSubSection.value = null
  } else {
    activeSubSection.value = subSection
  }
}
</script>

<template>
  <div class="soil-container">
    <h1 class="main-title">土壤知识科普</h1>
    
    <div class="section" :class="{active: activeSection === '01'}">
      <div class="section-header" @click="toggleSection('01')">
        <h2>01 土与土壤的区别</h2>
        <span class="toggle-icon">{{ activeSection === '01' ? '−' : '+' }}</span>
      </div>
      
      <div class="section-content" v-show="activeSection === '01'">
        <p class="intro-paragraph">
          土壤，覆盖在陆地表面，若光线、温度、降水等外在条件充足，则可供植物生长。它的母材是通过水或风搬运、堆积的岩石风化物，在某段期间内，与气候、生物（包括人为因素）、地形等因素的交互作用下形成。土壤处于生态系统的核心，除了孕育植物等陆地生物之外，更能分解落叶及动物遗体，维持元素正常的生物地质化学循环。土壤与大气、水并列为构成环境的要素之一。
        </p>
        
        <p class="highlight-paragraph">
          现在，一般都会将"土"和"土壤"两个词分开使用。换言之，岩石风化后形成"土"；岩石风化变成细小颗粒后，若因为生物作用而呈现适合植物生长的状态，则称为"土壤"，与"土"有着明确的区分。
        </p>
        
        <div class="subsection" :class="{active: activeSubSection === '1'}">
          <div class="subsection-header" @click="toggleSubSection('1')">
            <h3>（1）土的h3>
            <span class="toggle-icon">{{ activeSubSection === '1' ? '−' : '+' }}</span>
          </div>
          
          <div class="subsection-content" v-show="activeSubSection === '1'">
            <p>科学家通过放射性元素测定陨石的年代，又分析阿波罗计划所带回来的月球岩石，推测我们所居住的地球，诞生至今大概经过了46亿年。一般认为，地球刚诞生的时候，地球表面和月球表面并没有太大差异，如今却变得截然不同。这样的差异，起因于月球上没有空气和水，因此没有生物诞生；而地球上却诞生了丰富多样的生物。</p>
            
            <p>由于月球表面没有空气（真空），因此受到太阳的影响非常大，强烈的紫外线和温差（摄氏130°到零下170°左右）使得岩石风化成微粒子（粉末）。这样的微粒子称为粉尘，土壤。</p>
            
            <p>相对地，在大气层保护下的地球，温差很小（摄氏40°到零下40°左右），再加上地球有水，微生物可栖息在风化后的岩石微粒子中，分解、缩合、聚合有机物，形成腐殖质，进而形成适合生物生长的环境——土壤。</p>
          </div>
        </div>
        
        <div class="subsection" :class="{active: activeSubSection === '2'}">
          <div class="subsection-header" @click="toggleSubSection('2')">
            <h3>（2）从土到土壤</h3>
            <span class="toggle-icon">{{ activeSubSection === '2' ? '−' : '+' }}</span>
          </div>
          
          <div class="subsection-content" v-show="activeSubSection === '2'">
            <p>由土土壤的过程中，生物的活动是不可或缺的因素。地球上首度出现生物，大约是在40亿年前；而地球上第一次出现土壤，应该也是在这个时候。土壤和生物一同出现在陆地之后，从此关系便密不可分，直到今日。</p>
            
            <p>岩石变成土，除了崩坏等物理原因之外，生物也拥有让岩石变成土的力量。一般认为，能使岩石变成土的生物，就是需要岩石上少许养分就能生长的苔藓（地衣）。我们常可以在山上或古老的寺院里看见长有青苔的岩石，而青苔的下方，其实已经出现了薄薄一层、微量的土，且是含有黏土、微生物和有机物的土。</p>
            
            <p>当岩石表面的凹陷或龟裂处积了水，产生拥有适度水分的环境，那么能利用阳光的青苔就会开始入侵。当青苔逐渐增殖，被青苔覆盖的岩石表面也就随之慢慢变成土。这时，便有各种能利用无机物或有机物的微生物，在土里增殖。在这些微生物作用下，土的性质便会渐渐变化为适合植物生长的环境，也就是"土壤"。</p>
            
            <p>当新生的土壤上出现了草类后，土壤就会因为草类的根以及微生物的作用而慢慢增加，成为适合灌木类生长的环境，接着便会出现高大树木类，植物群落就这样逐渐产生。</p>
            
            <p>在地面上的植物群落变化，对地面下的环境也有很大的影响。各种植物的根部往下伸展，分泌出能够溶解岩石的有机酸；枯萎后，除了能为微生物的能量（食物）来源，同时也能制造出细微的空隙。植物根部的作用促进了岩石的分解与微生物的活化，使得腐殖质堆积，继续产生新的土壤，连更深的岩石层都逐渐变成了土壤层。</p>
            
            <p>大型植物开始生长后，落叶等有机物带给地表更多的供给，大量蓄积腐殖质，使得土壤更加肥沃。</p>
            
            <p>再经过一段时间，土壤中的养分开始出现淋溶作用；养分流失后，土壤就会渐渐变成不适合植物生长的环境，也就是"土"。如上所述，在数百年至数万年的时间里，土壤不断反复诞生又消失，消失再重生。</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="section" :class="{active: activeSection === '02'}">
      <div class="section-header" @click="toggleSection('02')">
        <h2>02 脱硅富铝化作用</h2>
        <span class="toggle-icon">{{ activeSection === '02' ? '−' : '+' }}</span>
      </div>
      
      <div class="section-content" v-show="activeSection === '02'">
        <div class="subsection" :class="{active: activeSubSection === '3'}">
          <div class="subsection-header" @click="toggleSubSection('3')">
            <h3>（1）定义</h3>
            <span class="toggle-icon">{{ activeSubSection === '3' ? '−' : '+' }}</span>
          </div>
          
          <div class="subsection-content" v-show="activeSubSection === '3'">
            <p>脱硅富铝化作用是指热带、亚热带土壤中发生的硅酸和盐基遭受淋失、黏粒和次生矿物不断形成、铁铝氧化物明显聚积的过程。</p>
          </div>
        </div>
        
        <div class="subsection" :class="{active: activeSubSection === '4'}">
          <div class="subsection-header" @click="toggleSubSection('4')">
            <h3>（2）发生过程</h3>
            <span class="toggle-icon">{{ activeSubSection === '4' ? '−' : '+' }}</span>
          </div>
          
          <div class="subsection-content" v-show="activeSubSection === '4'">
            <p>在高温多雨条件下，风化淋溶作用强烈进行，硅酸盐类矿物强烈分解，风化产物向下淋溶。淋溶初期，溶液呈中性或碱性，致使硅酸和盐基大量淋失，而含水铁、铝氧化物相对聚集，形成富含铁、铝的红色土体。随着盐基的不断淋溶，风化层上部变为酸性。当酸性达到一定程度时，含水铁、铝氧化物开始溶解，并具有流动性，但一般向下移动不深，旱季可随毛管水上升至表层，经脱水以凝胶形式聚积或形成铁、铝结核体;又因土体上部植物残体矿化提供盐基较丰富，酸性较弱.故含水铁、铝氧化物活性也较弱，多淀积，更利于铁、铝残余积聚层的形成，富铝化是砖红壤和红壤的重要成土过程，但富铝化的程度不同，前者强于后者。</p>
          </div>
        </div>
        
        <div class="subsection" :class="{active: activeSubSection === '5'}">
          <div class="subsection-header" @click="toggleSubSection('5')">
            <h3>（3）反应成因</h3>
            <span class="toggle-icon">{{ activeSubSection === '5' ? '−' : '+' }}</span>
          </div>
          
          <div class="subsection-content" v-show="activeSubSection === '5'">
            <p>铁铝土纲土壤(砖红壤与红壤等)及古红土的形成多与此有关-这一作用的内容包括脱硅、富铝与富铁等，因铁的成分容易变化，而铝含量则相对稳定，所以用"富铝"来表达其特征。故又称脱硅富铝化作用。在湿热条件下，土壤中铝硅酸盐矿物分解后产生风化度最高的三氧化二物矿物(赤铁矿、针铁矿、三水铝石等)，氧化硅与盐基被大量淋失，粘粒矿物以1:1型的高岭石为主，铁、铝氧化物大量积聚。据统计，砖红壤与红壤中硅的迁移量达50%—70%，钙、镁、钾、钠的迁移量为70%—100%；铁与铝的富集量分别达10%—12%与7%—15%；粘粒矿物中两岭石占30%—65%，三水铝石约为5%-13%，赤铁矿为6g%-18%。富铝化作用在湿热的热带、亚热带进行最强，且涉及范围很广。中国北亚热带的黄棕壤有轻度富铝化，有少量高岭石，硅铝率（ki值，均指粘粒部分）常在2.4以上；中亚热带红壤富铝化明显，高岭行为优势粘粒矿物，ki值值为1.9—2.2；南亚热带的赤红壤与砖红壤地区，高岭石所占比例偏高，三水铝石的比例大大上升，ki值降为1.5—1.1。</p>
          </div>
        </div>
        
        <div class="subsection" :class="{active: activeSubSection === '6'}">
          <div class="subsection-header" @click="toggleSubSection('6')">
            <h3>（4）土壤最基本的十大问题</h3>
            <spantoggle-icon">{{ activeSubSection === '6' ? '−' : '+' }}</span>
          </div>
          
          <div class="subsection-content" v-show="active === '6'">
            <p class="warning-paragraph">据国家环保部2016年《全国土壤污染状况调查公报》显示，全国土壤污染总超标率为16.1%，其中重度污染点位比例为1.1%；全国耕地土壤点位超标率为19.4%，仅重金属镉的超标率就达7%。污水灌溉、化肥、农药、农膜等农业投入品的不合理使用，是导致耕地土壤污染的重要原因。</p>
            
            <p class="subtitle">常见的耕地土壤病有以下10种：</p>
            
            <ol class="problem-list">
              <li>
                <strong>耕作层变浅</strong>
                <p>在长期不深耕深松和机械耕作碾压、践踏条件下，耕地土壤耕作层由过去的20～30公分变为15公分左右，加之降雨、灌水沉实，"犁底层"位置上移并加厚，成为坚硬深厚的阻隔层，阻碍土壤水分、养分和空气的上下运行，阻碍作物根系下扎延伸，土壤蓄水减少，抗旱性能下降，土壤养分有效性和作物营养状况恶化。</p>
              </li>
              
              <li>
                <strong>土壤有机质减少</strong>
                <p>一是长期不施或少施农家肥，缺少秸秆还田，不种植绿肥，土壤有机质得不到补充；二是超量施用化学氮肥，以及超出土壤负荷的高产，频繁的表土耕翻，则加剧了土壤碳的耗竭，致使土壤有机质含量减少。土壤有机质减少会引发土壤结构破坏和土壤板结，土壤肥力下降，土壤理化和生物性质恶化，土壤酸化和次生盐碱化，土传病害加剧，土壤净化能力减退等。</p>
              </li>
              
              <li>
                <strong>土壤板结</strong>
                <p>由于耕地土壤有机质缺乏，以及不合理的耕作和灌溉，大量施用化肥，土壤酸化，土壤次生盐碱化，破坏了土壤团粒结，致使土壤板结。土壤板结直接导致土壤-植物系统缺氧、缺水、缺肥，影响到土壤植-物系统的物质转化和能量交换，甚至某些生理活动和生命代谢不能正常进行，或者终止，或者向有害方向转化。</p>
              </li>
              
              <li>
                <strong>土壤酸化</strong>
                <p>由于长期过量使用生理酸性肥料和化学氮肥，土壤中的酸性物质不断增加并积累，土壤中的钙镁等碱性物质被作物吸收利用或淋洗而减少，缺乏必要的补充调节，使土壤出现酸化现象。土壤酸化会加速土壤贫瘠化，土壤有害重金属活化，土壤有害微生物特别是寄生真菌增加，土传病害严重发生。</p>
              </li>
              
              <li>
                <strong>土壤次生盐碱化</strong>
                <p>由于长期过量使用化学肥料，使土壤中的盐分不断积累，尤其是硝酸盐积累更甚。这些盐分随土壤水分上行聚集到地表，形成土壤表层次生盐碱化，土壤结构破坏，理化生物性质恶化，轻则影响种子发芽出苗，阻碍养分吸收，作物生长不良，重则造成植物生理干旱，营养障碍、盐害、死亡。甚至失去农业利用价值。</p>
              </li>
              
              <li>
                <strong>土壤营养失调</strong>
                <p>生产中不按作物所需营养元素比例施肥，不搞测土配方施肥，盲目过量施用氮磷钾，不施或少施有机肥和中微量元素肥，造成土壤中氮、磷的富集，土壤中钾、硅及钙、镁、硼、锌、铁、钼等中微量元素耗竭，导致氮磷钾比例失调，大量元素与中微量元素间营养比例失调，硅等有益元素缺失，并导致土壤营养元素拮抗，有肥而无用。</p>
              </li>
              
              <li>
                <strong>土壤污染</strong>
                <p>由于农业系统外的"三废"污染，农业系统内过量化肥、农药、农膜残留污染，未经处理的有机肥污染，以及有害病原物污染，时常会进入耕地土壤。当这些污染物残留累积超出土壤自净化能力后就会"溢出"，直接造成耕地土壤的重金属、有机化合物和致病生物污染。</p>
                <p>耕地土壤被污染后，就会破坏土壤生态平衡，使土壤有益生物大量死亡，土壤生物种群减少，土壤理化生物性质恶化，土壤活性下降，土壤功能变差，严重污染者会使土壤丧失生产能力，失去农业利用价值。</p>
              </li>
              
              <li>
                <strong>土壤侵蚀</strong>
                <p>耕地土壤侵蚀主要表现有水蚀、风蚀和耕蚀。主要是坡地土壤垦殖过度，尤其是坡度大于15度以上的坡地，频繁地表土耕作扰动，使水土流失。其次是垦后缺乏如坡改梯沟耕作、植物篱等保护性耕作措施，而是随意挖地耕翻，既造成耕蚀，又加剧了风蚀、水蚀。长期水土流失, 导致土壤沙化, 土层变薄，养分流失，保水保肥能力降低，土壤贫瘠化，耕地面积减少。</p>
              </li>
              
              <li>
                <strong>土壤－植物系统病</strong>
                <p>由于连续在同一块耕地上种植同一种或同科作物，因作物根系分泌物和残留物及某些病原生物在土壤中大量积累，使这块耕地土壤成为有病土壤。加之该作物所需要的营养元素因连续被吸收而缺乏，不需要的营养元素在土壤中累积，致使土壤营养失衡。再是土壤微生物生态群落被破坏，土壤对"有害微生物"的净化能力或抑制作用下降，有害微生物增多，有益微生物减少，生物性质恶化。</p>
                <p>"土壤-植物系统病"的根源在土壤，表现在作物，当有病的土壤遇到免疫力差的植物，即会以植物病的形式表现出来，生产上常叫做重茬病、连作障碍、再植障碍。</p>
              </li>
              
              <li>
                <strong>设施农业土壤综合症</strong>
                <p>在全年或季节封闭的高温高湿环境下，加之高度集约化、高复种指数、高强度利用、高频度人为干扰，过量施肥，过量用药，过量灌水，过度耕作与践踏等强烈的干扰和巨大压力下，设施土壤健康急剧恶化。一般种植2-3年，就出现土壤结构破坏，土壤营养失衡，土壤酸化，土壤次生盐碱化，土壤有害物质积累，土壤微生物种群多样性和功能退化等一系列土壤病。</p>
              </li>
            </ol>
            
            <p class="solution-paragraph">针对以上情况，改土培肥势在必行！土壤改良剂、有机肥、有机无机复混肥、生物有机肥、微生物菌剂等都有一定的改土培肥作用。其中，生物有机肥不仅具有有机肥的疏松土壤，改善土壤结构水保肥，促进根系生长；还具有微生物菌剂的改善土壤微生物生存环境、刺激作物生长点、高抗逆、抗重茬的功效，因此，笔者认为，微生物菌肥以及有机肥的必将是中国土壤问题解决的主流方向。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.soil-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  line-height: 1.6;
}

.main-title {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
  font-size: 2.2em;
  border-bottom: 2px solid #42b983;
  padding-bottom: 10px;
}

.section {
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.section.active {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.section-header {
  background-color: #42b983;
  color: white;
  padding: 15px 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s;
}

.section-header:hover {
  background-color: #3aa876;
}

.section-header h2 {
  margin: 0;
  font-size: 1.4em;
}

.toggle-icon {
  font-size: 1.2em;
  font-weight: bold;
}

.section-content {
  background-color: white;
  padding: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
}

.section.active .section-content {
  padding: 20px;
  max-height: 10000px;
}

.intro-paragraph {
  font-size: 1.1em;
  margin-bottom: 20px;
  color: #444;
}

.highlight-paragraph {
  background-color: #f8f9fa;
  border-left: 4px solid #42b983;
  padding: 15px;
  margin: 20px 0;
  font-style: italic;
}

.subsection {
  margin-top: 20px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.subsection-header {
  background-color: #f1f8e9;
  padding: 12px 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s;
}

.subsection-header:hover {
  background-color: #e8f5e9;
}

.subsection-header h3 {
  margin: 0;
  color: #2c3e50;
  font-size: 1.1em;
}

.subsection-content {
  background-color: white;
  padding: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
}

.subsection.active .subsection-content {
  padding: 15px;
  max-height: 10000px;
}

.warning {
  background-color: #fff3e0;
  border-left: 4px solid #ff9800;
  padding: 15px;
  margin: 20px 0;
  color: #e65100;
}

.subtitle {
  font-weight: bold;
  font-size: 1.1em;
  margin: 25px 0 15px;
  color: #2c3e50;
}

.problem-list {
  counter-reset: problem-counter;
  padding-left: 0;
  list-style: none;
}

.problem-list li {
  margin-bottom: 25px;
  position: relative;
  padding-left: 40px;
}

.problem-list li::before {
  counter-increment: problem-counter;
  content: counter(problem-counter);
  position: absolute;
  left: 0;
  top: 0;
  background-color: #42b983;
  color: white;
: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.problem-list li strong {
  color: #2c3e50;
  font-size: 1.05em;
  display: block;
  margin-bottom: 8px;
}

.problem-list li p {
  margin: 8px 0;
}

.solution-paragraph {
  background-color: #e8f5e9;
  padding: 15px;
  border-radius: 6px;
  margin-top: 20px;
  font-weight: 500;
}

@media (max-width: 768px) {
  .soil-container {
    padding: 15px;
  }
  
  .main-title {
    font-size: 1.8em;
  }
  
  .section-header h2 {
    font-size: 1.2em;
  }
  
  .subsection-header h3 {
    font-size: 1em;
  }
}
</style>