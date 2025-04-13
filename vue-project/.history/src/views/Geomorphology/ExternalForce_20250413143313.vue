<script setup>
import { ref } from "vue";

const activeTab = ref("01丹霞地貌");
const expandedSections = ref([]);

const toggleSection = (section) => {
  if (expandedSections.value.includes(section)) {
    expandedSections.value = expandedSections.value.filter(
      (item) => item !== section
    );
  } else {
    expandedSections.value.push(section);
  }
};

const tabs = [
  "01丹霞地貌",
  "02喀斯特地貌",
  "03雅丹地貌",
  "04黄土地貌",
  "05河流地貌",
  "06冰川地貌",
  "07风积地貌",
];
</script>

<template>
  <div class="geomorphology-container">
    <h1 class="title">外营力主导地貌</h1>
    <p class="intro">
      地貌，是地球岩石圈表面起伏形态的总称，是人类所处生存环境的重要组成部分。"色如渥丹，灿若明霞"的丹霞地貌、"无边无际，沟壑纵横"的黄土地貌、"造型奇特，千姿百态"的雅丹地貌......地貌不仅是地球上的绝美景观，还具有重要的科研价值。
    </p>

    <div class="tabs">
      <button
        v-for="tab in tabs"
        :key="tab"
        @click="activeTab = tab"
        :class="{ active: activeTab === tab }"
      >
        {{ tab }}
      </button>
    </div>

    <div class="content">
      <!-- 丹霞地貌 -->
      <div v-if="activeTab === '01丹霞地貌'" class="landform-section">
        <h2>丹霞地貌</h2>
        <p>
          丹霞地貌是由红色砂砾岩经过千万年的物理风化和流水侵蚀形成的，以丹崖赤壁为主要特色的一类地貌，基本特征可以概括为"顶平、身陡、麓缓"。
        </p>

        <div class="feature-section">
          <div class="feature-card" @click="toggleSection('顶平')">
            <h3>"顶平"</h3>
            <div
              v-if="expandedSections.includes('顶平')"
              class="feature-detail"
            >
              <p>是由于岩层产状水平，山顶较少受到侵蚀而保持平缓状态</p>
            </div>
          </div>

          <div class="feature-card" @click="toggleSection('身陡')">
            <h3>"身陡"</h3>
            <div
              v-if="expandedSections.includes('身陡')"
              class="feature-detail"
            >
              <p>
                是由于岩层透水性良好，垂直节理发育，坡面多沿垂直节理崩落，形成峭壁形态
              </p>
            </div>
          </div>

          <div class="feature-card" @click="toggleSection('缓坡')">
            <h3>"缓坡"</h3>
            <div
              v-if="expandedSections.includes('缓坡')"
              class="feature-detail"
            >
              <p>
                而流水下渗，节理扩大，因应力释放、卸荷作用等使崖壁发生崩塌剥落，坡面后退的同时崩塌物质堆积在坡麓，形成"缓坡"
              </p>
            </div>
          </div>
        </div>

        <p>
          形成丹霞地貌的物质基础是红色的碎屑岩，包括角砾岩、砾岩、砂砾岩和细粒碎屑岩等。丹霞地貌整个形成过程可大致分为六个阶段。
        </p>

        <div class="stage-container">
          <div
            v-for="stage in [
              '第一为红色堆积阶段：该时期内陆盆地形成，氧化环境，碎屑堆积',
              '第二为盆地抬升阶段：盆地抬升, 断裂为主的块状构造发育 , 局部宽缓褶曲 , 地壳渐趋稳定',
              '第三为丹霞地貌幼年期：流水下切为主 ,峡谷发育，上部保持较大面积的沉积顶面或弱侵蚀平台，如贵州赤水丹霞',
              '第四为丹霞地貌壮年期：主河谷接近区域侵蚀基准面，近河谷地带形成红层峰林,远河谷地带发育红层峰丛，如广东丹霞山',
              '第五为丹霞地貌老年期：主河谷与主要支谷达侵蚀基面、区内河谷平原、红层丘陵和红层孤峰相间分布 , 局部可保持峰林状，如江西龙虎山',
              '第六为准平原阶段（消亡期）：区域呈波状起伏的准平原化 , 个别地段保留孤峰或孤石 , 至此完成一个侵蚀旋回，如江西北部地区',
            ]"
            :key="stage"
            class="stage-card"
          >
            <p>{{ stage }}</p>
          </div>
        </div>
      </div>

      <!-- 喀斯特地貌 -->
      <div v-if="activeTab === '02喀斯特地貌'" class="landform-section">
        <h2>喀斯特地貌</h2>
        <p>
          喀斯特地貌，即岩溶地貌。是具有溶蚀力的水对可溶性岩石进行溶蚀等作用所形成的地表和地下形态的总称。
        </p>

        <p>
          地表岩溶地貌主要由地表水作用而成，地下岩溶地貌主要为地下水所雕塑。按照形态可分为溶沟与石芽、漏斗与落水洞、峰丛和峰林、溶洞等。
        </p>

        <div class="feature-section">
          <div class="feature-card" @click="toggleSection('溶沟与石芽')">
            <h3>溶沟与石芽</h3>
            <div
              v-if="expandedSections.includes('溶沟与石芽')"
              class="feature-detail"
            >
              <p>
                地表水流沿石灰岩表面流动，溶蚀、侵蚀出许多凹槽，即为溶沟。溶沟宽十几厘米至几百厘米，深浅不等。而溶沟之间的突出部分被称为石芽，包括裸露型和埋藏型。
              </p>
              <p>
                在厚层、质纯的石灰岩上多可发育出高大而尖锐的石芽；在薄层、泥质和硅质灰岩或者白云岩上发育的石芽比较低矮圆滑。
              </p>
              <p>
                石林是一种高大的石芽，在我国云南发育较好。它是在厚层、质纯、倾角平缓和具有较疏垂直节理的石灰岩，以及湿热气候条件下形成的。
              </p>
            </div>
          </div>

          <div class="feature-card" @click="toggleSection('峰丛峰林')">
            <h3>孤峰、峰丛和峰林</h3>
            <div
              v-if="expandedSections.includes('峰丛峰林')"
              class="feature-detail"
            >
              <p>
                孤峰、峰丛和峰林是地表岩溶地貌的主要正地形。这些山峰峰体尖锐外形呈锥状、塔状(圆柱状)和单斜状等，内部发育有大小不等的溶洞和地下河。
              </p>
              <p>
                全球范围内典型的峰林峰丛地貌主要分布在中国南方，并绵延至东南亚。中国最著名的三大峰林地貌为广西桂林峰林、贵州万峰林、云南罗平峰林。
              </p>
            </div>
          </div>

          <div class="feature-card" @click="toggleSection('溶洞')">
            <h3>溶洞</h3>
            <div
              v-if="expandedSections.includes('溶洞')"
              class="feature-detail"
            >
              <p>
                溶洞是地下岩溶地貌最主要的地貌形态。是地下水沿着可溶性岩石的层面、节理或断层进行溶蚀和侵蚀形成的地下孔道。
              </p>
              <p>
                溶洞形成需要两个条件：具溶蚀能力的地下水和具备水循环的空间。地下水沿构造面流动，先以溶蚀为主，后机械侵蚀作用加强，伴随重力崩塌作用，最终形成溶洞。
              </p>
              <p>
                溶洞广泛分布于世界各岩溶地区。如世界上最长的洞穴—美国猛犸洞，以及伯利兹大蓝洞，均属于喀斯特岩溶洞穴。
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 雅丹地貌 -->
      <div v-if="activeTab === '03雅丹地貌'" class="landform-section">
        <h2>雅丹地貌</h2>
        <p>
          在干燥地区，河湖相土状沉积物所形成的地面，经风化作用、间歇性流水冲刷和风蚀作用，形成与盛行风向平行、相间排列的风蚀土墩和风蚀凹地地貌组合，即雅丹地貌。
        </p>

        <p>
          雅丹地貌形成的外营力条件包括风力和水力等方面。雅丹多分布于极端干旱区，因此风力作用是其主要外动力。
        </p>

        <div class="feature-section">
          <div class="feature-card" @click="toggleSection('雅丹形态')">
            <h3>雅丹形态</h3>
            <div
              v-if="expandedSections.includes('雅丹形态')"
              class="feature-detail"
            >
              <p>
                雅丹形态是雅丹地貌研究的重要部分。雅丹地貌形态多样，总体可划分为以下几种形态：长垄状、流线状和覆舟状。
              </p>
            </div>
          </div>
        </div>

        <h3>雅丹地貌发育阶段</h3>
        <div class="stage-container">
          <div
            v-for="stage in [
              '第一为表面风化破坏阶段。风化作用产生许多水平和垂直节理，使下伏疏松沙层暴露地表，为侵蚀创造了条件',
              '第二为雏形雅丹地貌形成阶段。经风化作用形成的碎屑物质在风力或流水作用下被搬运，使地表起伏不平，但相对高差不到1m',
              '第三阶段是雅丹形成阶段。因地表起伏和节理扩大，风化剥蚀作用加强。表层泥岩消失，沙层直接暴露在地表，侵蚀加快，低洼处加深扩大，凸起部分因受泥岩保护而侵蚀相对微弱，形成相对高差数米到数十米的土丘与沟谷相间的地貌组合',
              '第四阶段是雅丹地貌消失阶段。外力作用使凸起部分面积不断缩小，低洼面积扩大形成孤立小丘，下部沙层因风蚀等被掏空，发生块体运动，面积逐渐减小，高度不断下降，最后消失',
            ]"
            :key="stage"
            class="stage-card"
          >
            <p>{{ stage }}</p>
          </div>
        </div>

        <p>
          雅丹地貌不仅广泛发育于地球上除大洋洲和南极洲以外的主要沙漠边缘地区，而且存在于火星和金星上。
        </p>
        <p>
          中国是世界雅丹地貌分布最为集中的地区之一，面积约2万平方千米，主要分布于青海柴达木盆地西北部、疏勒河中下游和新疆罗布泊周围。
        </p>
        <p>
          如罗布泊的三垄沙雅丹，丘体一般在10米以上，长200~300米不等，多为浅棕色泥岩和沙岩互层，成行列式整齐排列，远观如海湾中停泊待航的巨大舰队，十分壮观。
        </p>
      </div>

      <!-- 黄土地貌 -->
      <div v-if="activeTab === '04黄土地貌'" class="landform-section">
        <h2>黄土地貌</h2>
        <p>
          黄土地貌是发育在第四纪黄土（或黄土状土）地层中各种地貌形态的总称。可分为黄土堆积地貌、黄土侵蚀地貌、黄土潜蚀地貌和黄土重力地貌几种类型。
        </p>

        <div class="feature-section">
          <div class="feature-card" @click="toggleSection('黄土堆积地貌')">
            <h3>黄土堆积地貌</h3>
            <div
              v-if="expandedSections.includes('黄土堆积地貌')"
              class="feature-detail"
            >
              <p>黄土堆积地貌可分为塬、墚、茆3种类型。</p>
              <p>
                黄土塬是指在第四纪前的山间盆地基础上，被厚层黄土覆盖，面积较大、顶面平坦、侵蚀较弱、周围被沟谷切割的台地。
              </p>
              <p>
                黄土墚是平行沟谷的长条状高地。垛主要是黄土覆盖在螺状古地貌上，又受近代流水等作用形成的。
              </p>
              <p>
                黄土峁是顶部浑圆、斜坡较陡的黄土小丘，大多数是由黄土壤进一步切割而成,少数为晚期黄土覆盖在古丘状高地而成，常成群分布。
              </p>
            </div>
          </div>

          <div class="feature-card" @click="toggleSection('黄土侵蚀地貌')">
            <h3>黄土侵蚀地貌</h3>
            <div
              v-if="expandedSections.includes('黄土侵蚀地貌')"
              class="feature-detail"
            >
              <p>
                黄土侵蚀地貌可分为黄土区大型河谷和黄土区沟谷地貌。黄土区大型河谷地貌是长期发展的结果，如黄河、渭河、洛河等，其形成发展与一般侵蚀河谷相似。
              </p>
              <p>
                黄土区千沟万壑，根据黄土沟谷形成的部位、沟谷的发育阶段和形态特征，可将黄土沟谷地貌分为纹沟、细沟、切沟、冲沟等。
              </p>
              <p>
                在黄土坡面上，降雨时常形成很薄的片状水流，受到石块植被阻碍水流可能分异，聚成许多条细小的股流，侵蚀土层，即形成细小的纹沟。
              </p>
              <p>
                坡面水流增大时，片流逐渐汇集成股流，侵蚀成大致平行的细沟。细沟进一步发展，下切加深，切过耕作土层，形成切沟。切沟进一步下切侵蚀形成较大冲沟。
              </p>
            </div>
          </div>

          <div class="feature-card" @click="toggleSection('黄土潜蚀地貌')">
            <h3>黄土潜蚀地貌</h3>
            <div
              v-if="expandedSections.includes('黄土潜蚀地貌')"
              class="feature-detail"
            >
              <p>
                地表水沿黄土中的裂隙下渗，对黄土进行溶蚀和侵蚀，即潜蚀。潜蚀后黄土中形成大的空隙空洞，引起黄土陷落而形成的地貌，为黄土潜蚀地貌。
              </p>
            </div>
          </div>

          <div class="feature-card" @click="toggleSection('黄土重力地貌')">
            <h3>黄土重力地貌</h3>
            <div
              v-if="expandedSections.includes('黄土重力地貌')"
              class="feature-detail"
            >
              <p>
                除此之外，黄土谷坡的物质在重力作用和流水作用影响下常发生移动，还会形成崩塌、滑坡、泻溜等黄土重力地貌。
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 河流地貌 -->
      <div v-if="activeTab === '05河流地貌'" class="landform-section">
        <h2>河流地貌</h2>
        <p>
          河流地貌是河流作用于地球表面,经侵蚀、搬运和堆积过程所形成的各种地面形态，如冲沟、深切的峡谷、冲积扇、冲积平原及河口三角洲等。
        </p>

        <div class="feature-section">
          <div class="feature-card" @click="toggleSection('河床')">
            <h3>河床</h3>
            <div
              v-if="expandedSections.includes('河床')"
              class="feature-detail"
            >
              <p>
                河床是河谷中枯水期水流所占据的谷底部分。河床横剖面在河流上游多呈"v"形，下游多呈低洼槽形，主要受流水侵蚀和地转偏向力的共同作用而形成。
              </p>
              <p>
                山地河流发育比较年轻，以下蚀作用为主，河床纵剖面坡降很大，多壶穴(深潭)、深槽、瀑布、浅滩，河床底部起伏不平，水流湍急，涡流发育。
              </p>
              <p>
                而平原河道类型主要包括：顺直河道(顺直微弯型)、弯曲河道和分汊河道3大种。其中分汊河道又可划分为相对稳定型和游荡型两亚类。
              </p>
            </div>
          </div>

          <div class="feature-card" @click="toggleSection('河漫滩')">
            <h3>河漫滩</h3>
            <div
              v-if="expandedSections.includes('河漫滩')"
              class="feature-detail"
            >
              <p>
                河漫滩是在河流洪水期被淹没的河床以外的谷底平坦部分。在大河的下游，河漫滩可宽于河床几倍至几十倍。
              </p>
            </div>
          </div>

          <div class="feature-card" @click="toggleSection('河流阶地')">
            <h3>河流阶地</h3>
            <div
              v-if="expandedSections.includes('河流阶地')"
              class="feature-detail"
            >
              <p>
                由于河流下切侵蚀,原先河谷底部(河漫滩或河床)超出一般洪水位,呈阶梯状分布在河谷谷坡上，这种地形称为河流阶地。
              </p>
              <p>
                阶地在河谷地貌中较普遍，每一级阶地由平坦的或微向河流倾斜的阶地面和陡峭的阶坡组成。前者为原有谷底的遗留部分，后者则由河流下切形成。
              </p>
            </div>
          </div>

          <div class="feature-card" @click="toggleSection('冲积扇')">
            <h3>冲积扇</h3>
            <div
              v-if="expandedSections.includes('冲积扇')"
              class="feature-detail"
            >
              <p>
                当山地河流携带大量碎屑物质，流出山口因坡度急剧变缓，流速骤减，所携物质大量堆积，形成一个从出山口向外展开的半锥形堆积体，即冲积扇。
              </p>
            </div>
          </div>

          <div class="feature-card" @click="toggleSection('冲积平原')">
            <h3>冲积平原</h3>
            <div
              v-if="expandedSections.includes('冲积平原')"
              class="feature-detail"
            >
              <p>
                冲积平原是在构造沉降区由河流带来大量冲积物堆积而成的平原。我国的东北、华北平原和长江中下游平原等，均为河流冲积作用形成的典型冲积平原。
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 冰川地貌 -->
      <div v-if="activeTab === '06冰川地貌'" class="landform-section">
        <h2>冰川地貌</h2>
        <p>冰川地貌主要包括冰蚀地貌、冰碛地貌和冰水堆积地貌三部分。</p>

        <div class="feature-section">
          <div class="feature-card" @click="toggleSection('冰蚀地貌')">
            <h3>冰蚀地貌</h3>
            <div
              v-if="expandedSections.includes('冰蚀地貌')"
              class="feature-detail"
            >
              <p>
                冰蚀地貌主要是冰斗、冰川在发展过程中塑造的地貌。其中冰斗是冰川在雪线附近塑造的椭圆形基岩洼地，是雪蚀与冰川剥蚀的结果。
              </p>
              <p>
                冰斗发育于雪线附近的地势低注处。典型冰斗由峻峭的后壁(三面)、深凹的斗底(岩盆)和冰坎组成。
              </p>
              <p>
                羊背石是由冰蚀作用形成的石质小丘，顶部浑圆，纵剖面前后不对称，迎冰坡一般较平缓，有擦痕、刻槽及新月形的磨光面。
              </p>
              <p>
                由山谷冰川剥蚀作用所形成的平直、宽阔的谷地，叫冰蚀槽谷，因其横截面是"U"形，故又称"U"型谷，它是山岳冰川分布最广的地形。
              </p>
            </div>
          </div>

          <div class="feature-card" @click="toggleSection('冰碛地貌')">
            <h3>冰碛地貌</h3>
            <div
              v-if="expandedSections.includes('冰碛地貌')"
              class="feature-detail"
            >
              <p>
                冰碛地貌主要包括冰碛丘陵、终碛堤、鼓丘等。冰川消融后沉落到冰川谷底的冰碛物受谷底地形的影响或受冰面冰内冰碛物分布的影响，堆积形成的丘陵即冰碛丘陵。
              </p>
              <p>
                鼓丘是由基岩核心和泥砾组成的丘陵。其平面呈椭圆形，长轴与冰流方向一致，纵剖面呈不对称上凸形，迎冰面坡缓，是基岩，背冰面坡陡，是冰磺物。
              </p>
            </div>
          </div>

          <div class="feature-card" @click="toggleSection('冰水堆积地貌')">
            <h3>冰水堆积地貌</h3>
            <div
              v-if="expandedSections.includes('冰水堆积地貌')"
              class="feature-detail"
            >
              <p>
                冰水堆积地貌既具有河流堆积物的特点（如有一点分选、磨圆度和层理构造）,同时又保存着条痕石等部分冰川作用痕迹。
              </p>
              <p>
                按其形态、位置及成因等，分为冰水扇、冰水湖、冰砾阜和冰砾阜阶地、锅穴和蛇形丘等地貌。
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 风积地貌 -->
      <div v-if="activeTab === '07风积地貌'" class="landform-section">
        <h2>风积地貌</h2>
        <p>
          前进中的风沙流在遇障碍物(植物、山体、凸起的地面或建筑物)时，会因受阻而产生涡漩或减速，使其动能降低而发生堆积，从而形成各种风积地貌。
        </p>

        <p>
          风积地貌的形态与风沙流的结构、运动方向和含沙量有关。可分为信风型风积地貌、季风-软风型风积地貌、对流行型风积地貌和干扰型风积地貌等。
        </p>

        <div class="feature-section">
          <div class="feature-card" @click="toggleSection('信风型')">
            <h3>信风型风积地貌</h3>
            <div
              v-if="expandedSections.includes('信风型')"
              class="feature-detail"
            >
              <p>
                单向风或几个近似方向风的作用下形成的各种风积地貌，称为信风型风积地貌。荒漠地区主要形成沙堆、新月形沙丘和纵向沙丘等。
              </p>
            </div>
          </div>

          <div class="feature-card" @click="toggleSection('季风型')">
            <h3>季风-软风型风积地貌</h3>
            <div
              v-if="expandedSections.includes('季风型')"
              class="feature-detail"
            >
              <p>
                两个方向相反的风交替作用时，其中一个占优势所形成的地貌为季风-软风型风积地貌，其延伸方向大都与主风向垂直，包括新月形沙丘链、梁窝状沙地等。
              </p>
              <p>
                梁窝状沙地是由隆起的沙脊梁与半月形的沙窝相间组成，是由横向沙丘链发展而成。如在我国古尔班通古特沙漠（也称准噶尔盆地沙漠）等地均有此貌。
              </p>
            </div>
          </div>

          <div class="feature-card" @click="toggleSection('对流型')">
            <h3>对流型风积地貌</h3>
            <div
              v-if="expandedSections.includes('对流型')"
              class="feature-detail"
            >
              <p>在沙漠龙卷风作用下形成的堆积地貌称为对流型风积地貌。</p>
            </div>
          </div>

          <div class="feature-card" @click="toggleSection('干扰型')">
            <h3>干扰型风积地貌</h3>
            <div
              v-if="expandedSections.includes('干扰型')"
              class="feature-detail"
            >
              <p>
                干扰型风积地貌是指当主气流运动遇到山地阻挡而折射，引起气流干扰形成的地貌，如金字塔形沙丘。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 轮播图 */
/* 基础图片样式 */
.geo-image {
  max-width: 100%;
  height: auto;
  display: block;
  transition: all 0.3s ease;
}

.single-image-container {
  margin: 1.5rem 0;
  text-align: center;
}

.single-image {
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border: 1px solid #e0e0e0;
}

.single-image:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.image-caption {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #666;
  font-style: italic;
}

/* 图片网格样式 */
.image-grid {
  display: grid;
  gap: 1rem;
  margin: 1.5rem 0;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid-cols-3 {
  grid-template-columns: repeat(3, 1fr);
}

.grid-cols-4 {
  grid-template-columns: repeat(4, 1fr);
}

.grid-image {
  border-radius: 6px;
  height: 180px;
  object-fit: cover;
  width: 100%;
}

.grid-item {
  position: relative;
  overflow: hidden;
  border-radius: 6px;
}

.grid-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 0.85rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

/* 轮播图样式 */
.carousel-container {
  position: relative;
  margin: 2rem 0;
  overflow: hidden;
  border-radius: 8px;
}

.carousel-slide {
  position: relative;
}

.carousel-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: white;
}

.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 5);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  z-index: 10;
}

.carousel-prev {
  left: 1rem;
}

.carousel-next {
  right: 1rem;
}

.carousel-indicators {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 10;
}

.carousel-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
}

.carousel-indicator.active {
  background: white;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .grid-cols-3,
  .grid-cols-4 {
    grid-template-columns: repeat(2, 1fr);
  }

  .carousel-image {
    height: 300px;
  }
}

@media (max-width: 480px) {
  .grid-cols-2,
  .grid-cols-3,
  .grid-cols-4 {
    grid-template-columns: 1fr;
  }

  .carousel-image {
    height: 250px;
  }
}

/* 暗色模式适配 */
@media (prefers-color-scheme: dark) {
  .single-image {
    border-color: #444;
  }

  .image-caption {
    color: #aaa;
  }

  .grid-caption {
    background: rgba(0, 0, 0, 0.8);
  }
}

/* 页面 */
.geomorphology-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 2.5rem;
  font-weight: 700;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.intro {
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #555;
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
  justify-content: center;
}

.tabs button {
  padding: 10px 20px;
  background-color: #e0e0e0;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  color: #555;
}

.tabs button:hover {
  background-color: #d0d0d0;
  transform: translateY(-2px);
}

.tabs button.active {
  background-color: #3498db;
  color: white;
  box-shadow: 0 4px 8px rgba(52, 152, 219, 0.3);
}

.landform-section {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
}

.landform-section h2 {
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 1.8rem;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
}

.landform-section p {
  line-height: 1.8;
  margin-bottom: 15px;
  font-size: 1.05rem;
}

.feature-section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.feature-card {
  background-color: #f5f7fa;
  border-radius: 8px;
  padding: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-left: 4px solid #3498db;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.feature-card h3 {
  color: #3498db;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.feature-detail {
  padding-top: 10px;
  border-top: 1px dashed #3498db;
  margin-top: 10px;
  animation: fadeIn 0.5s ease-out;
}

.feature-detail p {
  margin-bottom: 8px;
  font-size: 0.95rem;
  color: #555;
}

.stage-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 25px 0;
}

.stage-card {
  background-color: #f0f7ff;
  padding: 15px;
  border-radius: 6px;
  border-left: 4px solid #2980b9;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.stage-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(52, 152, 219, 0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.stage-card:hover {
  transform: translateX(5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.stage-card:hover::before {
  transform: translateX(0);
}

.stage-card p {
  margin: 0;
  position: relative;
  z-index: 1;
}

/* 动画效果 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .geomorphology-container {
    padding: 15px;
  }

  .title {
    font-size: 2rem;
  }

  .tabs {
    flex-direction: column;
    align-items: stretch;
  }

  .tabs button {
    width: 100%;
    margin-bottom: 8px;
  }

  .feature-section {
    grid-template-columns: 1fr;
  }

  .landform-section {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.8rem;
  }

  .intro {
    font-size: 1rem;
  }

  .landform-section h2 {
    font-size: 1.5rem;
  }

  .feature-card h3 {
    font-size: 1.1rem;
  }
}

/* 打印样式 */
@media print {
  .geomorphology-container {
    padding: 0;
    box-shadow: none;
    background-color: transparent;
  }

  .tabs {
    display: none;
  }

  .landform-section {
    page-break-inside: avoid;
    margin-bottom: 20px;
    box-shadow: none;
    padding: 0;
  }

  .feature-card {
    page-break-inside: avoid;
  }

  .feature-detail {
    display: block !important;
    border-top: 1px solid #ddd;
  }
}

/* 暗色模式支持 */
@media (prefers-color-scheme: dark) {
  .geomorphology-container {
    background-color: #2c3e50;
    color: #ecf0f1;
  }

  .landform-section {
    background-color: #34495e;
    color: #ecf0f1;
  }

  .feature-card,
  .stage-card {
    background-color: #3d566e;
    color: #ecf0f1;
  }

  .feature-card h3 {
    color: #3498db;
  }

  .tabs button {
    background-color: #3d566e;
    color: #ecf0f1;
  }

  .tabs button.active {
    background-color: #3498db;
    color: white;
  }

  .feature-detail p,
  .landform-section p {
    color: #bdc3c7;
  }

  .feature-detail {
    border-top-color: #3498db;
  }

  .stage-card {
    border-left-color: #2980b9;
  }

  .stage-card::before {
    background: linear-gradient(90deg, rgba(52, 152, 219, 0.3), transparent);
  }
}

/* 平滑滚动 */
html {
  scroll-behavior: smooth;
}

/* 辅助类 */
.highlight {
  background-color: #fffacd;
  padding: 2px 5px;
  border-radius: 3px;
}

/* 加载动画 */
.loading-spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #3498db;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* 工具提示样式 */
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted #3498db;
  cursor: help;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 200px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -100px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
