<script setup>
import { ref } from "vue";

const activeTab = ref("usage");
const activeSection = ref("purpose");

const toggleTab = (tab) => {
  activeTab.value = tab;
};

const toggleSection = (section) => {
  activeSection.value = section;
};
</script>

<template>
  <div class="geology-compass-container">
    <h1>地质罗盘使用指南</h1>

    <div class="tabs">
      <button
        @click="toggleTab('usage')"
        :class="{ active: activeTab === 'usage' }"
      >
        罗盘的使用
      </button>
      <button
        @click="toggleTab('record')"
        :class="{ active: activeTab === 'record' }"
      >
        野簿定点记录和信手剖面图
      </button>
    </div>

    <div v-if="activeTab === 'usage'" class="content">
      <div class="sections">
        <button
          @click="toggleSection('purpose')"
          :class="{ active: activeSection === 'purpose' }"
        >
          作用
        </button>
        <button
          @click="toggleSection('structure')"
          :class="{ active: activeSection === 'structure' }"
        >
          结构
        </button>
        <button
          @click="toggleSection('usage-details')"
          :class="{ active: activeSection === 'usage-details' }"
        >
          使用方法
        </button>
      </div>

      <div class="section-content">
        <div v-if="activeSection === 'purpose'" class="purpose">
          <p>
            地质罗盘仪是进行野外地质工作必不可少的一种工具。借助它可以定出方向，观察点的所在位置，测出任何一个观察面的空间位置（如岩层层面、褶皱轴面、断层面、节理面...等构造面的空间位置），以及测定火成岩的各种构造要素，矿体的产状等。因此必须学会使用地质罗盘仪。
          </p>
        </div>

        <div v-if="activeSection === 'structure'" class="structure">
          <div
            class="structure-item"
            v-for="(item, index) in [
              {
                title: '磁针',
                content:
                  '一般为中间宽两边尖的菱形钢针，安装在底盘中央的顶针上，可自由转动，不用时应旋紧制动螺丝，将磁针抬起压在盖玻璃上避免磁针帽与项针尖的碰撞，以保护顶针尖，延长罗盘使用时间。在进行测量时放松固动螺丝，使磁针自由摆动，最后静止时磁针的指向就是磁针子午线方向。由于我国位于北半球磁针两端所受磁力不等，使磁针失去平衡。为了使磁针保持平衡常在磁针南端绕上几圈铜丝，用此也便于区分磁针的南北两端。',
              },
              {
                title: '水平刻度盘',
                content:
                  '水平刻度盘的刻度是采用这样的标示方式:从0度开始按逆时针方向每10度一记，连续刻至360度，0度和180度分别为N和S，90度和270度分别为E和W，利用它可以直接测得地面两点间直线的磁方位角。',
              },
              {
                title: '竖直刻度盘',
                content:
                  '专用来读倾角和坡角读数，以E或W位置为0度，以S或N为90度，每隔10度标记相应数字。',
              },
              {
                title: '悬锥',
                content:
                  '是测斜器的重要组成部分，悬挂在磁针的轴下方，通过底盘处的视板手可使悬锥转动，悬锥中央的尖端所指刻度即为倾角或坡角的度数。',
              },
              {
                title: '水准器',
                content:
                  '通常有两个，分别装在圆形玻璃管中，圆形水准器固定在底盘上，长形水准器固定在测斜仪上。',
              },
              {
                title: '瞄准器',
                content:
                  '包括接物和接目觇板，反光镜中间有细线，下部有透明小孔，使眼睛，细线，目的物三者成一线，作瞄准之用。',
              },
            ]"
            :key="index"
          >
            <h3>{{ item.title }}</h3>
            <p>{{ item.content }}</p>
          </div>
        </div>

        <div v-if="activeSection === 'usage-details'" class="usage-details">
          <div class="usage-item">
            <h3>目的物方位角确定</h3>
            <p>
              测定目的物与测者间的相对位置关系，也就是测定目的物的方位角(方位角是指从子午线[经线]顺时针方向到该测线的夹角)。
            </p>
            <p>
              测量时放松制动螺丝，使对物觇板指向测物，即使罗盘北端对着目的物，南端靠着自己，进行瞄准，使目的物，对物觇板小孔，盖玻璃上的细丝，对目觇板小孔等连在一直线上，同时使底盘水准器水泡居中，待磁针静止时指北针所指度数即为所测目的物之方位角。(若指针一时静止不了，可读磁针摆动时最小度数的二分之一处，测量其它要素读数时亦同样)。
            </p>
            <p>
              若用测量的对物觇板对着测者(此时罗盘南端对着目的物)进行瞄准时，指北针读数表示测者位于测物的什么方向，此时指南针所示读数才是目的物位于测者什么方向，与前者比较这是因为两次用罗盘瞄准测物时罗盘之南、北两端正好颠倒，故影响测物与测者的相对位置。
            </p>
            <p>
              为了避免时而读指北针，时而读指南针，产生混淆，应以对物觇板指着所求方向恒读指北针，此时所得读数即所求测物之方位角。
            </p>
            <p>
              方位角测定在野外地质调查中，也是经常使用，具体方法是:右手紧握地质罗盘贴放腰间，长瞄准器对准目标物，左手调整地质罗盘顶盖，从反光镜中找到目标物，使反光镜分划线平分目标物，再轻轻转动腰部，使地质罗盘内圆水准气泡居中，此时用左手按住罗盘制动按钮，读出罗盘度盘读数，即为目标物的方位角。
            </p>
          </div>

          <div class="usage-item">
            <h3>岩层产状</h3>
            <p>
              1)岩层走向（实质是山脉延伸方向）是岩层层面与水平面交线的延伸方向。
            </p>
            <p>
              2)岩层倾向（实质是山体倾斜方向）是岩层面上的倾斜线在水平面的投影所指方向。
            </p>
            <p>
              3)倾角是岩层层面与水平面所夹的锐角（真倾角是倾斜岩体的重心方向与水平面夹角)）
            </p>

            <p>在野外通常使用地质罗盘来测量岩层产状的三要素:</p>
            <p>
              <strong>测量走向：</strong
              >使罗盘的长边(即南北边)紧贴层面，将罗盘放平，水准泡居中，读指北针所示的方位角，就是岩层的走向。
            </p>
            <p>
              <strong>测量倾向：</strong
              >将罗盘的短边紧贴层面，水准泡居中，读指北针所示的方位角，就是岩层的倾向。
            </p>
            <p>
              <strong>测倾角时：</strong
              >需将罗盘横着竖起来，使长边与岩层的走向垂直，紧贴层面，待倾斜器上的水准泡居中后，读悬锤所示的角度，即为倾角。
            </p>
            <p>
              <strong>走向：</strong
              >因为走向是代表一条直线的方向，它可以两边延伸，指南针或指北针所读数正是该直线之两端延伸方向，如NE30度与SW210度均可代表该岩层之走向。
            </p>
            <p>
              <strong>倾向：</strong
              >假若测量底面时读指北针受障碍时，则用罗盘南端紧靠岩层底面，读指南针亦可。
            </p>
            <p>
              <strong>倾角：</strong
              >岩层倾角是岩层层面与假想水平面间的最大夹角，即真倾角，它是沿着岩层的真倾斜方向测量得到的，沿其它方向所测得的倾角是视倾角。视倾角恒小于真倾角，也就是说岩层层面上的真倾斜线与水平面的夹角为真倾角，层面上视倾斜线与水平面之夹角为视倾角。野外分辨层面之真倾斜方向甚为重要它恒与走向垂直，此外可用小石于使之在层面上滚动或滴水使之在层面上流动，此滚动或流动之方向即为层面之真倾斜方向。
            </p>

            <div class="notes">
              <h4>注意事项</h4>
              <ul>
                <li>
                  A测方向时读圆刻度盘，盘面要保持水平(圆水准居中)。走向是用长边贴岩层面；倾向是用短边贴岩层面。
                </li>
                <li>
                  B测角度时读半圆刻度盘，盘面垂直岩层面(管水准居中)。要注意测真倾角(最大角)。
                </li>
                <li>C走向为倾向加/减90。所以野外只需测倾向与倾角。</li>
              </ul>
              <p>
                表示方法：方位角法和象限角法。走向有两个方向，倾向只有一个方向。走向和倾向的关系。90˚关系
              </p>
              <p>2) 只能由倾向推断走向。</p>
              <p>
                水平岩层倾角为零，无走向和倾向
                直立岩层倾角为90°,有走向无倾向。其它地质体(岩脉、断层面、节理面)的表示方法相同。
              </p>
              <p>
                岩层产状的记录方式:
                例如，测量出某一岩层走向为310%,倾向为2200，倾角35，则可记录为
              </p>
              <ol>
                <li>NW310º/SW∠35˚</li>
                <li>310º/ SW∠35˚</li>
                <li>220˚∠35˚，推荐这种记录方式。</li>
              </ol>
              <p>
                野外测量岩层产状时需要在岩层露头测量，不能在转石(滚石)上测量，因此要区分露头和滚石。区别露头和滚石，主要是多观察和追索并要善于判断。
              </p>
              <p>
                测量岩层面的产状时，如果岩层凹凸不平，可把记录本平放在岩层上当作层面以便进行测量。
              </p>
            </div>
          </div>

          <div class="usage-item">
            <h3>坡度测量</h3>
            <p>(Content about slope measurement would go here)</p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="activeTab === 'record'" class="content">
      <h2>野簿定点记录和信手剖面图</h2>
      <p>
        (Content about field notebook recording and sketch profiles would go
        here)
      </p>
    </div>
  </div>
</template>

<style scoped>
.geology-compass-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  line-height: 1.6;
}

h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
}

h2,
h3,
h4 {
  color: #2980b9;
  margin-top: 20px;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
}

.tabs button {
  padding: 10px 20px;
  margin: 0 5px;
  background: none;
  border: none;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;
}

.tabs button:hover {
  color: #3498db;
}

.tabs button.active {
  color: #3498db;
  border-bottom: 3px solid #3498db;
  font-weight: bold;
}

.sections {
  display: flex;
  margin-bottom: 20px;
  background: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
}

.sections button {
  padding: 8px 15px;
  margin-right: 10px;
  background: #e0e0e0;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s;
}

.sections button:hover {
  background: #d0d0d0;
}

.sections button.active {
  background: #3498db;
  color: white;
}

.section-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.structure-item,
.usage-item {
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 1px dashed #eee;
}

.structure-item:last-child,
.usage-item:last-child {
  border-bottom: none;
}

.notes {
  background: #f9f9f9;
  padding: 15px;
  border-left: 4px solid #3498db;
  margin-top: 15px;
}

.notes h4 {
  margin-top: 0;
}

ul,
ol {
  padding-left: 20px;
}

li {
  margin-bottom: 8px;
}

p {
  margin-bottom: 15px;
}

strong {
  color: #2c3e50;
}
</style>
>
