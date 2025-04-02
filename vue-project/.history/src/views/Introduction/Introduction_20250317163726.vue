<script setup></script>

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
</template>
