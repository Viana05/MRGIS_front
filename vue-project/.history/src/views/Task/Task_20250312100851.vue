<script setup>
import {
    Edit,
    Delete
} from '@element-plus/icons-vue'

import { ref } from 'vue'

//文章列表数据模型
const tasks = ref([
    {
        "id": 5,
        "taskName": "陕西旅游攻略",
        "taskLocation": "爱去哪去哪...",
        "updateTime": "2023-09-03 11:55:30"
    },
    {
        "id": 6,
        "taskName": "陕西旅游攻略",
        "taskLocation": "爱去哪去哪...",
        "updateTime": "2023-09-03 11:55:30"
    }
])

//分页条数据模型
const pageNum = ref(1)//当前页
const total = ref(20)//总条数
const pageSize = ref(3)//每页条数

//当每页条数发生了变化，调用此函数
const onSizeChange = (size) => {
    pageSize.value = size
}
//当前页码发生变化，调用此函数
const onCurrentChange = (num) => {
    pageNum.value = num
}

// 获取任务列表数据
import {taskListService} from '@/api/task.js'
const taskList=async()=>{
    let params={
        pageNum:pageNum.value,
        pageSize:pageSize.value,
    }

    let result =await taskListService(params);

    // 渲染视图
    total.value=result.data.total;
    tasks.value=result.data.items;
}
taskList();
</script>
<template>
    <el-card class="page-container">
        <template #header>
            <div class="header">
                <span>任务管理</span>
                <div class="extra">
                    <el-button type="primary">添加任务</el-button>
                </div>
            </div>
        </template>
        <!-- 任务列表 -->
        <el-table :data="tasks" style="width: 100%">
            <el-table-column label="任务名称" width="200" prop="taskName"></el-table-column>
            <el-table-column label="任务位置" prop="taskLocation"></el-table-column>
            <el-table-column label="时间" prop="updateTime"> </el-table-column>
            <el-table-column label="操作" width="100">
                <template #default="{ row }">
                    <el-button :icon="Edit" circle plain type="primary"></el-button>
                    <el-button :icon="Delete" circle plain type="danger"></el-button>
                </template>
            </el-table-column>
            <template #empty>
                <el-empty description="没有数据" />
            </template>
        </el-table>
        <!-- 分页条 -->
        <el-pagination v-model:current-page="pageNum" v-model:page-size="pageSize" :page-sizes="[3, 5 ,10, 15]"
            layout="jumper, total, sizes, prev, pager, next" background :total="total" @size-change="onSizeChange"
            @current-change="onCurrentChange" style="margin-top: 20px; justify-content: flex-end" />
    </el-card>
</template>
<style lang="scss" scoped>
.page-container {
    min-height: 100%;
    box-sizing: border-box;

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>