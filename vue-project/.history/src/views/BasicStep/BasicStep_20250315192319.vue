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
            t="1742036594870"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4878"
            width="256"
            height="256"
          >
            <path
              d="M192 160V96c0-19.2-12.8-32-32-32s-32 12.8-32 32v832c0 19.2 12.8 32 32 32s32-12.8 32-32V672c236.8-102.4 467.2 102.4 704 0V160c-236.8 102.4-467.2-108.8-704 0z"
              fill="#1296db"
              p-id="4879"
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
            t="1742036693052"
            class="icon"
            viewBox="0 0 1084 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5960"
            width="256"
            height="256"
          >
            <path
              d="M839.198118 938.345412h-583.077647a125.891765 125.891765 0 0 1-126.373647-125.289412v-578.258824c0-69.089882 56.621176-125.289412 126.373647-125.289411h583.077647a125.891765 125.891765 0 0 1 126.373647 125.289411v578.258824c0 69.089882-56.741647 125.289412-126.373647 125.289412z m-583.077647-771.011765c-37.526588 0-68.065882 30.238118-68.065883 67.463529v578.258824c0 37.165176 30.539294 67.463529 68.065883 67.463529h583.077647c37.526588 0 68.065882-30.298353 68.065882-67.463529v-578.258824c0-37.225412-30.539294-67.463529-68.065882-67.463529h-583.077647z"
              fill="#1296db"
              p-id="5961"
            ></path>
            <path
              d="M334.305882 402.974118a29.153882 29.153882 0 0 1-20.660706-8.432942l-49.513411-49.152a28.732235 28.732235 0 0 1 0-40.899764 29.334588 29.334588 0 0 1 41.200941 0l28.912941 28.732235L412.852706 255.397647a29.334588 29.334588 0 0 1 41.200941 0 28.732235 28.732235 0 0 1 0 40.839529L354.906353 394.541176a29.214118 29.214118 0 0 1-20.600471 8.432942z m461.161412-47.706353H528.263529a29.033412 29.033412 0 0 1-29.153882-28.912941c0-15.962353 13.071059-28.912941 29.153882-28.912942h267.264c16.082824 0 29.153882 12.950588 29.153883 28.912942s-13.071059 28.912941-29.153883 28.912941zM334.305882 600.545882a29.153882 29.153882 0 0 1-20.660706-8.493176l-49.513411-49.152a28.732235 28.732235 0 0 1 0-40.899765 29.334588 29.334588 0 0 1 41.200941 0l28.912941 28.732235L412.852706 452.969412a29.334588 29.334588 0 0 1 41.200941 0 28.732235 28.732235 0 0 1 0 40.839529L354.906353 592.112941a29.214118 29.214118 0 0 1-20.600471 8.432941z m461.161412-47.766588H528.263529a29.033412 29.033412 0 0 1-29.153882-28.912941c0-15.962353 13.071059-28.912941 29.153882-28.912941h267.264c16.082824 0 29.153882 12.950588 29.153883 28.912941s-13.071059 28.912941-29.153883 28.912941zM334.305882 798.117647a29.153882 29.153882 0 0 1-20.660706-8.493176l-49.513411-49.152a28.732235 28.732235 0 0 1 0-40.899765 29.334588 29.334588 0 0 1 41.200941 0l28.912941 28.732235L412.912941 650.541176a29.334588 29.334588 0 0 1 41.200941 0 28.732235 28.732235 0 0 1 0 40.83953L354.906353 789.684706a29.214118 29.214118 0 0 1-20.600471 8.432941z m461.161412-47.766588H528.263529a29.033412 29.033412 0 0 1-29.153882-28.912941c0-15.962353 13.071059-28.912941 29.153882-28.912942h267.264c16.082824 0 29.153882 12.950588 29.153883 28.912942s-13.071059 28.912941-29.153883 28.912941z"
              fill="#1296db"
              p-id="5962"
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
            t="1742037129093"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="7058"
            width="256"
            height="256"
          >
            <path
              d="M512 311.854545H279.272727v65.163637h232.727273V311.854545z m-232.727273 260.654546h465.454546v-65.163636H279.272727v65.163636z m0 195.490909h465.454546v-65.163636H279.272727v65.163636zM921.6 260.654545L698.181818 55.854545c-4.654545-4.654545-13.963636-9.309091-18.618182-9.30909H125.672727c-18.618182 0-32.581818 13.963636-32.581818 32.581818v865.745454c0 18.618182 13.963636 32.581818 32.581818 32.581818h777.309091c18.618182 0 32.581818-13.963636 32.581818-32.581818V283.927273c-4.654545-4.654545-9.309091-13.963636-13.963636-23.272728z m-228.072727-125.672727l167.563636 158.254546h-167.563636V134.981818z m172.218182 777.309091H158.254545V111.709091h470.109091V325.818182c0 18.618182 13.963636 32.581818 32.581819 32.581818h209.454545v553.890909z"
              fill="#1296db"
              p-id="7059"
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
        <el-icon> </el-icon>
        <span><strong>必备物品</strong></span>
      </div>
    </template>
    <el-row>
      <el-card style="max-width: 200px" shadow="never">
        <template #header>学生证</template>
        <img
          src="@/assets/login_bg.jpg"
          style="width: 100%"
        />
      </el-card>
      <el-card style="max-width: 200px" shadow="never">
        <template #header>身份证</template>
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          style="width: 100%"
        />
      </el-card>
      <el-card style="max-width: 200px" shadow="never">
        <template #header>实习指导书</template>
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          style="width: 100%"
        />
      </el-card>
      <el-card style="max-width: 200px" shadow="never">
        <template #header>实习工具</template>
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          style="width: 100%"
        />
      </el-card>
    </el-row>
    <el-row>
      <el-card style="max-width: 200px" shadow="never">
        <template #header>雨伞</template>
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          style="width: 100%"
        />
      </el-card>
      <el-card style="max-width: 200px" shadow="never">
        <template #header>长袖衣服</template>
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          style="width: 100%"
        />
      </el-card>
      <el-card style="max-width: 200px" shadow="never">
        <template #header>运动鞋</template>
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          style="width: 100%"
        />
      </el-card>
      <el-card style="max-width: 200px" shadow="never">
        <template #header>药品（扭伤、感冒、晕车）</template>
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          style="width: 100%"
        />
      </el-card>
    </el-row>
  </el-card>
  <!-- 实习纪律要求 -->
  <el-card style="max-width: 100%">
    <template #header>
      <div class="card-header">
        <el-icon> </el-icon>
        <span><strong>实习纪律要求</strong></span>
      </div>
    </template>
    <p :key="o" class="text item"></p>
    <p :key="o" class="text item"></p>
  </el-card>
  <!-- 实习过程 -->
  <el-card style="max-width: 100%">
    <template #header>
      <div class="card-header">
        <el-icon> </el-icon>
        <span><strong>实习过程</strong></span>
      </div>
    </template>
    <p :key="o" class="text item"></p>
    <p :key="o" class="text item"></p>
  </el-card>
  <!-- 野外注意事项 -->
  <el-card style="max-width: 100%">
    <template #header>
      <div class="card-header">
        <el-icon> </el-icon>
        <span><strong>野外注意事项</strong></span>
      </div>
    </template>
    <p :key="o" class="text item"></p>
    <p :key="o" class="text item"></p>
  </el-card>
</template>

<style>
p {
  text-indent: 2em; /* em是相对单位，2em即现在一个字大小的两倍 */
}
</style>
