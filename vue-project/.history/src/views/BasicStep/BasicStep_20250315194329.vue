<script setup>
const tableData = [
  {
    date: "7月13日",
    route: "徐州大北望",
    content: "地层、构造、微地貌",
  },
  {
    date: "7月14日",
    route: "徐州班井",
    content: "岩浆岩、变质岩、地貌",
  },
  {
    date: "7月15日",
    route: "徐州窑湾-马陵山",
    content: "人文地理；河流地貌、地层、地貌、构造",
  },
  {
    date: "7月16日",
    route: "连云港规划展示中心-羊山港口-连岛",
    content: "城市规划局；洋流作用、海岸侵蚀地貌；海蚀地貌",
  },
  {
    date: "7月17日",
    route: "连云港花果山",
    content: "海岸沉积地貌、变质岩、海积地貌",
  },
];
</script>

<template>
  <!-- 实习目的 -->
  <el-card style="max-width: 100%">
    <template #header>
      <div class="card-header">
        <el-icon>
          <svg
            t="1742038676574"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="11496"
            width="256"
            height="256"
          >
            <path
              d="M192 160V96c0-19.2-12.8-32-32-32s-32 12.8-32 32v832c0 19.2 12.8 32 32 32s32-12.8 32-32V672c236.8-102.4 467.2 102.4 704 0V160c-236.8 102.4-467.2-108.8-704 0z"
              fill="#13227a"
              p-id="11497"
            ></path>
          </svg>
        </el-icon>
        <span><strong>实习目的</strong></span>
      </div>
    </template>
    <p :key="o" class="text item">
      自然地理与地质地貌实习是是地学基础教学的一个重要环节，是野外地质实践教学过程；是多学科的一次综合性教学活动，是将《地质与地貌学》、《地理学基础》等多门课程的理论与实践相结合的重要环节。
    </p>
    <p :key="o" class="text item">
      通过野外实践，使学生巩固、充实地
      质学科的基本理论、基本概念和基础知识，加深对地质作用等课程相关内容的理解，
      树立正确的地质时空观；学会对典型地质现象观察、描述的基本方法以及实习报告
      的编制方法；培养学生独立思考、综合分析的技能和团结互助、吃苦耐劳的精神；
      同时通过野外实习使学生领略祖国的大好山河，激发学生的爱国热情。
    </p>
  </el-card>
  <!-- 实习要求 -->
  <el-card style="max-width: 100%">
    <template #header>
      <div class="card-header">
        <el-icon>
          <svg
            t="1742038646659"
            class="icon"
            viewBox="0 0 1084 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="10420"
            width="256"
            height="256"
          >
            <path
              d="M839.198118 938.345412h-583.077647a125.891765 125.891765 0 0 1-126.373647-125.289412v-578.258824c0-69.089882 56.621176-125.289412 126.373647-125.289411h583.077647a125.891765 125.891765 0 0 1 126.373647 125.289411v578.258824c0 69.089882-56.741647 125.289412-126.373647 125.289412z m-583.077647-771.011765c-37.526588 0-68.065882 30.238118-68.065883 67.463529v578.258824c0 37.165176 30.539294 67.463529 68.065883 67.463529h583.077647c37.526588 0 68.065882-30.298353 68.065882-67.463529v-578.258824c0-37.225412-30.539294-67.463529-68.065882-67.463529h-583.077647z"
              fill="#13227a"
              p-id="10421"
            ></path>
            <path
              d="M334.305882 402.974118a29.153882 29.153882 0 0 1-20.660706-8.432942l-49.513411-49.152a28.732235 28.732235 0 0 1 0-40.899764 29.334588 29.334588 0 0 1 41.200941 0l28.912941 28.732235L412.852706 255.397647a29.334588 29.334588 0 0 1 41.200941 0 28.732235 28.732235 0 0 1 0 40.839529L354.906353 394.541176a29.214118 29.214118 0 0 1-20.600471 8.432942z m461.161412-47.706353H528.263529a29.033412 29.033412 0 0 1-29.153882-28.912941c0-15.962353 13.071059-28.912941 29.153882-28.912942h267.264c16.082824 0 29.153882 12.950588 29.153883 28.912942s-13.071059 28.912941-29.153883 28.912941zM334.305882 600.545882a29.153882 29.153882 0 0 1-20.660706-8.493176l-49.513411-49.152a28.732235 28.732235 0 0 1 0-40.899765 29.334588 29.334588 0 0 1 41.200941 0l28.912941 28.732235L412.852706 452.969412a29.334588 29.334588 0 0 1 41.200941 0 28.732235 28.732235 0 0 1 0 40.839529L354.906353 592.112941a29.214118 29.214118 0 0 1-20.600471 8.432941z m461.161412-47.766588H528.263529a29.033412 29.033412 0 0 1-29.153882-28.912941c0-15.962353 13.071059-28.912941 29.153882-28.912941h267.264c16.082824 0 29.153882 12.950588 29.153883 28.912941s-13.071059 28.912941-29.153883 28.912941zM334.305882 798.117647a29.153882 29.153882 0 0 1-20.660706-8.493176l-49.513411-49.152a28.732235 28.732235 0 0 1 0-40.899765 29.334588 29.334588 0 0 1 41.200941 0l28.912941 28.732235L412.912941 650.541176a29.334588 29.334588 0 0 1 41.200941 0 28.732235 28.732235 0 0 1 0 40.83953L354.906353 789.684706a29.214118 29.214118 0 0 1-20.600471 8.432941z m461.161412-47.766588H528.263529a29.033412 29.033412 0 0 1-29.153882-28.912941c0-15.962353 13.071059-28.912941 29.153882-28.912942h267.264c16.082824 0 29.153882 12.950588 29.153883 28.912942s-13.071059 28.912941-29.153883 28.912941z"
              fill="#13227a"
              p-id="10422"
            ></path>
          </svg>
        </el-icon>
        <span><strong>实习要求</strong></span>
      </div>
    </template>
    <p :key="o" class="text item">通过实习，学生应达到下列要求：</p>
    <p :key="o" class="text item">
      （1）学习、掌握最基本的野外地质实习方法，如罗盘的使用、信手剖面图的绘制、野外记录的内容、格式和要求等；
    </p>
    <p :key="o" class="text item">
      （2）初步掌握常见岩石类型的野外观察和描述方法；
    </p>
    <p :key="o" class="text item">
      （3）认识各种地质现象，如地层的接触关系、褶皱构造、断裂构造、各种外动力地质作用现象；
    </p>
    <p :key="o" class="text item">
      （4）学会对野外观察到的地质内容进行分析、归纳和总结，编写实习总结报告。
    </p>
  </el-card>
  <!-- 实习时间及主要实习内容 -->
  <el-card style="max-width: 100%">
    <template #header>
      <div class="card-header">
        <el-icon>
          <svg
            t="1742038616178"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="9334"
            width="256"
            height="256"
          >
            <path
              d="M898.688 284.992l-174.336-212.224a24.064 24.064 0 0 0-18.56-8.768H205.632A85.76 85.76 0 0 0 120.064 149.504v723.712a85.76 85.76 0 0 0 85.504 85.504h613.12c47.104 0 85.504-38.4 85.44-85.632V300.224c0-5.568-1.92-10.944-5.44-15.232zM679.424 119.936c7.168 0 13.952 3.2 18.56 8.768l131.648 160.384H679.424V119.936z m168.704 753.28a29.632 29.632 0 0 1-29.504 29.504H205.568a29.632 29.632 0 0 1-29.568-29.504V149.504c0-16.256 13.312-29.568 29.568-29.568h417.92v175.424c0 27.392 22.272 49.664 49.664 49.664h174.976v528.192zM287.36 482.88c0 15.488 12.48 27.968 27.968 27.968h391.68a27.968 27.968 0 0 0 0-55.936h-391.68a27.968 27.968 0 0 0-27.968 27.968z m419.712 141.888h-391.68a27.968 27.968 0 1 0 0 55.936h391.68a27.968 27.968 0 0 0 0-55.936z m-391.68-279.68h149.888a27.968 27.968 0 0 0 0-56H315.264a27.968 27.968 0 1 0 0 55.936z"
              p-id="9335"
              fill="#13227a"
            ></path>
          </svg>
        </el-icon>
        <span><strong>实习时间及主要实习内容</strong></span>
      </div>
    </template>
    <el-table :data="tableData" stripe style="width: 70%">
      <el-table-column prop="date" label="时间" width="180" />
      <el-table-column prop="route" label="实习路线" width="180" />
      <el-table-column prop="content" label="主要实习内容" />
    </el-table>
  </el-card>
  <!-- 必备物品 -->
  <el-card style="max-width: 100%" shadow="never">
    <template #header>
      <div class="card-header">
        <el-icon>
          <svg
            t="1742038578387"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8167"
            width="256"
            height="256"
          >
            <path
              d="M819.2 290.133333H682.666667V230.4c0-51.2-42.666667-93.866667-93.866667-93.866667H409.6c-51.2 0-93.866667 42.666667-93.866667 93.866667v59.733333H204.8c-81.066667 0-145.066667 64-145.066667 145.066667v307.2c0 81.066667 64 145.066667 145.066667 145.066667h614.4c81.066667 0 145.066667-64 145.066667-145.066667v-307.2c0-81.066667-64-145.066667-145.066667-145.066667z m-529.066667 512h-85.333333c-34.133333 0-59.733333-25.6-59.733333-59.733333v-307.2c0-34.133333 25.6-59.733333 59.733333-59.733333h85.333333v426.666666zM401.066667 230.4c0-4.266667 4.266667-8.533333 8.533333-8.533333h179.2c4.266667 0 8.533333 4.266667 8.533333 8.533333v59.733333H401.066667V230.4z m221.866666 571.733333H375.466667v-426.666666h247.466666v426.666666z m256-59.733333c0 34.133333-25.6 59.733333-59.733333 59.733333h-110.933333v-426.666666h110.933333c34.133333 0 59.733333 25.6 59.733333 59.733333v307.2z"
              fill="#13227a"
              p-id="8168"
            ></path>
          </svg>
        </el-icon>
        <span><strong>必备物品</strong></span>
      </div>
    </template>
    <el-row>
      <el-card style="max-width: 200px" shadow="never">
        <template #header>学生证</template>
        <img src="@/assets/BasicStep/学生证.jpg" style="width: 90%" />
      </el-card>
      <el-card style="max-width: 200px" shadow="never">
        <template #header>身份证</template>
        <img src="@/assets/BasicStep/身份证.jpg" style="width: 100%" />
      </el-card>
      <el-card style="max-width: 200px" shadow="never">
        <template #header>实习指导书</template>
        <img src="@/assets/BasicStep/实习指导书.jpg" style="width: 60%" />
      </el-card>
      <el-card style="max-width: 200px" shadow="never">
        <template #header>实习工具</template>
        <img src="@/assets/BasicStep/实习工具.jpg" style="width: 80%" />
      </el-card>
    </el-row>
    <el-row>
      <el-card style="max-width: 200px" shadow="never">
        <template #header>雨伞</template>
        <img src="@/assets/BasicStep/雨伞.jpg" style="width: 90%" />
      </el-card>
      <el-card style="max-width: 200px" shadow="never">
        <template #header>长袖衣服</template>
        <img src="@/assets/BasicStep/长袖衣服.jpg" style="width: 90%" />
      </el-card>
      <el-card style="max-width: 200px" shadow="never">
        <template #header>运动鞋</template>
        <img src="@/assets/BasicStep/运动鞋.jpg" style="width: 80%" />
      </el-card>
      <el-card style="max-width: 200px" shadow="never">
        <template #header>药品（扭伤、感冒、晕车）</template>
        <img src="@/assets/BasicStep/药品.jpg" style="width: 100%" />
      </el-card>
    </el-row>
  </el-card>
  <!-- 实习纪律要求 -->
  <el-card style="max-width: 100%">
    <template #header>
      <div class="card-header">
        <el-icon>
          <svg
            t="1742038703467"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="12618"
            width="256"
            height="256"
          >
            <path
              d="M647.9 482.75c-132.3 0-239.4 107.1-239.4 239.4 0 132.3 107.1 239.4 239.4 239.4 132.3 0 239.4-107.1 239.4-239.4 0-131.85-107.1-239.4-239.4-239.4z m165.6 335.7c-34.2 59.4-97.65 95.85-166.05 95.85-105.75 0-191.7-85.95-191.7-191.7s85.95-191.7 191.7-191.7c68.4 0 131.85 36.45 166.05 95.85 34.2 58.95 34.2 132.3 0 191.7zM264.5 507.05c-13.05 0-23.85 10.8-23.85 23.85s10.8 23.85 23.85 23.85h119.7c13.05 0 23.85-10.8 23.85-23.85s-10.8-23.85-23.85-23.85H264.5zM552.05 219.5H264.5c-8.55 0-16.65 4.5-20.7 12.15-4.5 7.2-4.5 16.65 0 23.85 4.5 7.2 12.15 12.15 20.7 12.15h287.55c13.05 0 23.85-10.8 23.85-23.85 0-13.5-10.8-24.3-23.85-24.3zM575.9 386.9c0-13.05-10.8-23.85-23.85-23.85H264.5c-13.05 0-23.85 10.8-23.85 23.85s10.8 23.85 23.85 23.85h287.55c13.05 0.45 23.85-10.35 23.85-23.85z"
              p-id="12619"
              fill="#13227a"
            ></path>
            <path
              d="M208.7 828.35c-13.05 0-23.85-10.8-23.85-23.85V134c0-13.05 10.8-23.85 23.85-23.85h431.1c13.05 0 23.85 10.8 23.85 23.85v311.4c16.2 0 32.4 1.35 47.7 4.05V109.7c0-12.6-4.95-24.75-13.95-33.75S676.25 62 663.65 62H184.85c-12.6 0-24.75 4.95-33.75 13.95s-13.95 21.15-13.95 33.75v718.65c0 12.6 4.95 24.75 13.95 33.75s21.15 13.95 33.75 13.95h229.95c-8.55-15.3-16.2-31.05-22.05-47.7H208.7zM759.95 776.6l-17.1-4.95c-4.05 25.65-13.05 37.35-27 34.65h-15.75c-8.55-0.45-13.05-5.4-13.95-13.95v-68.4h31.95v4.95h35.55v-83.25l9-14.85-38.7-19.8-6.75 14.85h-71.55l4.95 23.85h67.5v50.85h-31.95v-6.75h-36.9v110.25c0.45 21.15 11.25 31.95 31.95 32.85h50.85c22.5 1.8 35.55-9 39.6-32.85-11.7-1.35-15.75-10.35-11.7-27.45zM540.35 797.3l10.8 33.75c5.4-1.8 14.4-5.85 27.9-10.8 29.7-11.25 50.85-19.35 62.55-23.85l-1.8-22.05c-32.85 6.75-65.7 14.4-99.45 22.95z"
              p-id="12620"
              fill="#13227a"
            ></path>
            <path
              d="M621.8 649.25c-5.4 9.9-10.8 20.25-17.1 30.6-9.45 1.35-16.2 1.8-20.7 1.8 10.8-18 19.35-32.85 27-44.55 4.05-8.1 7.2-13.95 9.9-18l-35.55-13.05c-5.85 20.7-13.05 41.85-22.05 63.45-4.05 8.1-10.8 13.5-19.8 17.1l8.1 25.65c5.85-1.35 13.5-3.15 22.95-5.85 8.1-1.8 13.95-3.15 18-4.05-4.5 8.1-9.45 15.75-14.85 23.85-4.05 7.2-13.5 12.6-28.8 15.75l9 30.6c18.45-4.5 46.8-10.8 84.6-18l1.8-20.7c-6.75 0.45-15.75 1.35-27.9 1.8-5.85 0.45-10.8 0.9-13.95 0.9 22.95-30.6 40.5-54.45 51.75-72.45l-32.4-14.85z"
              p-id="12621"
              fill="#13227a"
            ></path>
          </svg>
        </el-icon>
        <span><strong>实习纪律要求</strong></span>
      </div>
    </template>
    <p :key="o" class="text item">（1）不准带其他人员；</p>
    <p :key="o" class="text item">
      （2）无特殊情况不得请假或缺席不准擅自前往实习点；
    </p>
    <p :key="o" class="text item">（3）不准单独活动；</p>
    <p :key="o" class="text item">（4）晚上不得外出活动；</p>
    <p :key="o" class="text item">（5）按时回到宾馆；</p>
    <p :key="o" class="text item">（6）不得下海。</p>
  </el-card>
  <!-- 实习过程 -->
  <el-card style="max-width: 100%">
    <template #header>
      <div class="card-header">
        <el-icon>
          <svg
            t="1742038866479"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="14774"
            width="256"
            height="256"
          >
            <path
              d="M75.09333333 435.65511111C75.09333333 236.88533333 236.88533333 75.09333333 435.65511111 75.09333333s360.56177778 161.792 360.56177778 360.56177778l72.81777778 0c0-58.48177777-11.49155555-115.25688889-34.01955556-168.73244444-21.84533333-51.6551111-53.02044445-97.96266667-92.84266666-137.78488889-39.82222222-39.82222222-86.12977778-70.99733332-137.7848889-92.84266667-53.47555555-22.528-110.25066667-34.01955555-168.73244444-34.01955556S320.39822222 13.76711111 266.92266667 36.29511111c-51.6551111 21.84533333-97.96266667 53.02044445-137.78488889 92.84266667s-70.99733332 86.12977778-92.84266667 137.78488889C13.76711111 320.39822222 2.27555555 377.17333333 2.27555555 435.65511111c0 58.48177777 11.49155555 115.25688889 34.01955556 168.73244444 21.84533333 51.6551111 53.02044445 97.96266667 92.84266667 137.7848889 39.82222222 39.82222222 86.12977778 70.99733332 137.78488889 92.84266666 53.47555555 22.64177778 110.25066667 34.13333333 168.73244444 34.13333334l0-72.81777778c-198.76977778-0.11377778-360.56177778-161.90577778-360.56177778-360.67555556z"
              fill="#13227a"
              p-id="14775"
            ></path>
            <path
              d="M247.69422222 388.55111111l-51.54133333 51.54133334L367.27466667 610.98666667l4.32355556-4.32355556 4.32355556 4.32355556 299.23555554-299.12177778-51.42755556-51.54133334-252.24533332 252.01777778z"
              fill="#13227a"
              p-id="14776"
            ></path>
            <path
              d="M1021.72444445 782.79111111l0-72.81777778-89.54311112 0c-4.89244445-25.25866667-14.90488889-48.69688889-28.78577778-69.17688888l63.26044445-63.26044445-51.54133333-51.54133333-63.26044445 63.26044444c-20.59377778-13.88088889-44.032-23.77955555-69.17688889-28.78577778L782.67733333 471.04l-72.81777778 0 0 89.54311111c-25.25866667 4.89244445-48.69688889 14.90488889-69.17688888 28.78577778l-63.26044445-63.26044444-51.54133333 51.54133333 63.26044444 63.26044444c-13.88088889 20.59377778-23.77955555 44.032-28.78577778 69.17688889L471.04 710.08711111l0 72.81777778 89.54311111 0c4.89244445 25.14488889 14.90488889 48.58311111 28.672 69.17688889l-63.37422222 63.37422222 51.54133333 51.54133333 63.37422223-63.37422222c20.59377778 13.88088889 44.032 23.77955555 69.29066666 28.78577778L710.08711111 1021.72444445l72.81777778 0 1e-8-89.54311112c25.14488889-4.89244445 48.58311111-14.90488889 69.17688888-28.672l63.37422222 63.37422222 51.54133333-51.54133333-63.37422222-63.37422222c13.88088889-20.59377778 23.77955555-44.032 28.78577778-69.29066666L1021.72444445 782.67733333z m-275.34222223 80.09955556c-64.28444446 0-116.50844446-52.33777778-116.50844444-116.50844445s52.33777778-116.50844446 116.50844444-116.50844444 116.50844446 52.33777778 116.50844445 116.50844444S810.66666667 862.89066667 746.38222222 862.89066667z"
              fill="#13227a"
              p-id="14777"
            ></path>
          </svg>
        </el-icon>
        <span><strong>实习过程</strong></span>
      </div>
    </template>
    <p :key="o" class="text item">
      分组讲解，认真听；做好记录；整理笔记；注意安全。
    </p>
  </el-card>
  <!-- 野外注意事项 -->
  <el-card style="max-width: 100%">
    <template #header>
      <div class="card-header">
        <el-icon>
          <svg
            t="1742038893682"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="15845"
            width="256"
            height="256"
          >
            <path
              d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m-56 186.7c0-20.6 16.7-37.3 37.4-37.3h37.3c20.6 0 37.3 16.7 37.3 37.3v298.7c0 20.6-16.7 37.3-37.3 37.3h-37.3c-20.6 0-37.4-16.7-37.4-37.3V250.7z m56 560c-41.2 0-74.7-33.4-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.4 74.7 74.7c0 19.8-7.9 38.8-21.9 52.8-14 14-33 21.9-52.8 21.9z"
              fill="#13227a"
              p-id="15846"
            ></path>
          </svg>
        </el-icon>
        <span><strong>野外注意事项</strong></span>
      </div>
    </template>
    <p :key="o" class="text item">
      （1）按规定时间准时出发，一切必须的生活及学习用品和其它材料、资料均在这之前准备完成，误时按退到处理；晚上，19时至21时30分为整理笔记、标本、总结、讨论及考查时间；
    </p>
    <p :key="o" class="text item">
      （2）学生应该认真听教学讲解，仔细做好野外教学记录，要善于思考、勤于动手；
    </p>
    <p :key="o" class="text item">
      （3）严禁攀登悬崖壁，不得在水体内游泳、划船，严禁冒险性的一切行动，凡有违反，造成的人身伤亡事故，后果自负。不得进行和参与不健康的娱乐活动，不进入酒吧、歌舞厅，一经发现可采取取消继续实习资格，送回校的处分措施；
    </p>
    <p :key="o" class="text item">
      （4）爱护风景区内公共财物，不准随意涂写、敲打、刻划、不随意采摘一草一木；
    </p>
    <p :key="o" class="text item">
      （5）不得随便离开队伍，无论何事必须向领队教师请假，经允许后方能离开，严格遵守约定时间；
    </p>
    <p :key="o" class="text item">
      （6）讲文明礼貌，尊重他人、兄弟院校同学、游客等，不得无事生非、婷戏、挑拔、污、发生架、打架事故，除见义勇为者，其它后果自负。应以文明行为处理事情，确立良好的大学生形象和声誉；
    </p>
    <p :key="o" class="text item">
      （7）携带的一切个人、学院的财物应妥善保管，不得损坏、丢失；
    </p>
    <p :key="o" class="text item">
      （8）同学之间和师生之间，团结友爱、互相帮助。
    </p>
  </el-card>
</template>

<style>
p {
  text-indent: 2em; /* em是相对单位，2em即现在一个字大小的两倍 */
}
</style>
