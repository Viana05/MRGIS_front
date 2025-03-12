<script setup>
import { Edit, Delete } from "@element-plus/icons-vue";

import { ref } from "vue";

//文章列表数据模型
const tasks = ref([
  {
    id: 5,
    taskName: "陕西旅游攻略",
    taskLocation: "爱去哪去哪...",
    updateTime: "2023-09-03 11:55:30",
  },
  {
    id: 6,
    taskName: "陕西旅游攻略",
    taskLocation: "爱去哪去哪...",
    updateTime: "2023-09-03 11:55:30",
  },
]);

//分页条数据模型
const pageNum = ref(1); //当前页
const total = ref(20); //总条数
const pageSize = ref(3); //每页条数

//当每页条数发生了变化，调用此函数
const onSizeChange = (size) => {
  pageSize.value = size;
  taskList();
};
//当前页码发生变化，调用此函数
const onCurrentChange = (num) => {
  pageNum.value = num;
  taskList();
};

// 获取任务列表数据
import {
  taskListService,
  taskAddService,
  taskUpdateService,
  taskDeleteService,
} from "@/api/task.js";
const taskList = async () => {
  let params = {
    pageNum: pageNum.value,
    pageSize: pageSize.value,
  };

  let result = await taskListService(params);

  // 渲染视图
  total.value = result.data.total;
  tasks.value = result.data.items;
};
taskList();

import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { Plus } from "@element-plus/icons-vue";
//控制抽屉是否显示
const visibleDrawer = ref(false);
//添加表单数据模型
const taskModel = ref({
  taskName: "",
  taskContent: "",
  taskLocation: "",
});

// 添加文章
import { ElMessage } from "element-plus";
const addTask = async () => {
  // 调用接口
  let result = await taskAddService(taskModel.value);
  ElMessage.success(result.msg ? result.msg : "添加成功");

  // 让抽屉消失
  visibleDrawer.value = false;

  // 刷新当前列表
  taskList();
};

//控制添加任务弹窗
const dialogVisible = ref(false);

//添加任务表单校验
const rules = {
  taskName: [{ required: true, message: "请输入任务名称", trigger: "blur" }],
  taskContent: [{ required: true, message: "请输入任务内容", trigger: "blur" }],
  taskLocation: [
    { required: true, message: "请输入任务位置", trigger: "blur" },
  ],
};

// 定义清空数据模型的数据
const clearTaskData = () => {
  ts = taskModel.value = {
    taskName: "",
    taskContent: "",
    taskLocation: "",
  };
};

// 展示编辑弹窗
const showDialog = (row) => {
  dialogVisible.value = true;
  // 数据拷贝
  taskModel.value.taskName = row.taskName;
  taskModel.value.taskContent = row.taskContent;
  taskModel.value.taskLocation = row.taskLocation;
  // 扩展id属性，传递给后台，完成任务的修改
  taskModel.value.id = row.id;
};

// 更新任务数据
const updateTask = async () => {
  // 调用接口
  let result = await taskUpdateService(taskModel.value);

  ElMessage.success(result.msg ? result.msg : "修改成功");

  // 调用获取所有任务的函数
  taskList();

  // 清除模型中数据
  clearTaskData();

  // 隐藏弹窗
  dialogVisible.value = false;
};

// 删除任务
import { ElMessageBox } from "element-plus";
const deleteTask = (row) => {
  ElMessageBox.confirm("你确认要删除该任务吗?", "温馨提示", {
    confirmButtonText: "确认",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(async () => {
      // 调用接口
      let result = await taskDeleteService(row.id);

      ElMessage({
        type: "success",
        message: "删除成功",
      });

      // 刷新列表
      taskList();
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "用户取消了删除",
      });
    });

  ElMessage.success(result.msg ? result.msg : "删除成功");
};
</script>

<template>
  <el-card class="page-container">
    <template #header>
      <div class="header">
        <span>任务管理</span>
        <div class="extra">
          <el-button type="primary" @click="visibleDrawer = true"
            >添加任务</el-button
          >
        </div>
      </div>
    </template>
    <!-- 任务列表 -->
    <el-table :data="tasks" style="width: 100%">
      <el-table-column
        label="任务名称"
        width="200"
        prop="taskName"
      ></el-table-column>
      <el-table-column label="任务位置" prop="taskLocation"></el-table-column>
      <el-table-column label="时间" prop="updateTime"> </el-table-column>
      <el-table-column label="操作" width="100">
        <template #default="{ row }">
          <el-button
            :icon="Edit"
            circle
            plain
            type="primary"
            @click="showDialog(row)"
          ></el-button>
          <el-button
            :icon="Delete"
            circle
            plain
            type="danger"
            @click="deleteTask(row)"
          ></el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="没有数据" />
      </template>
    </el-table>

    <!-- 分页条 -->
    <el-pagination
      v-model:current-page="pageNum"
      v-model:page-size="pageSize"
      :page-sizes="[3, 5, 10, 15]"
      layout="jumper, total, sizes, prev, pager, next"
      background
      :total="total"
      @size-change="onSizeChange"
      @current-change="onCurrentChange"
      style="margin-top: 20px; justify-content: flex-end"
    />

    <!-- 抽屉 -->
    <el-drawer
      v-model="visibleDrawer"
      title="添加任务"
      direction="rtl"
      size="50%"
    >
      <!-- 添加文章表单 -->
      <el-form :model="taskModel" label-width="100px">
        <el-form-item label="任务名称">
          <el-input
            v-model="taskModel.taskName"
            placeholder="请输入任务名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="任务内容">
          <div class="editor">
            <quill-editor
              theme="snow"
              v-model:content="taskModel.taskContent"
              contentType="html"
            >
            </quill-editor>
          </div>
        </el-form-item>
        <el-form-item label="任务位置">
          <el-input
            v-model="taskModel.taskLocation"
            placeholder="请输入任务位置"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="
              addTask();
              clearTaskData();
            "
            >添加</el-button
          >
        </el-form-item>
      </el-form>
    </el-drawer>

    <!-- 修改任务弹窗 -->
    <el-dialog v-model="dialogVisible" title="修改任务" width="50%">
      <el-form
        :model="taskModel"
        :rules="rules"
        label-width="100px"
        style="padding-right: 30px"
      >
        <el-form-item label="任务名称" prop="taskName">
          <el-input
            v-model="taskModel.taskName"
            minlength="1"
            maxlength="10"
          ></el-input>
        </el-form-item>
        <el-form-item label="任务内容" prop="taskContent">
          <div class="editor">
            <quill-editor
              theme="snow"
              v-model:content="taskModel.taskContent"
              contentType="html"
            >
            </quill-editor>
          </div>
        </el-form-item>
        <el-form-item label="任务位置" prop="taskLocation">
          <el-input
            v-model="taskModel.taskLocation"
            minlength="1"
            maxlength="15"
          ></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="updateTask"> 确认 </el-button>
        </span>
      </template>
    </el-dialog>
  </el-card>
</template>
<style lang="scss" scoped>
/* 抽屉样式 */
.avatar-uploader {
  :deep() {
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }

    .el-upload {
      border: 1px dashed var(--el-border-color);
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: var(--el-transition-duration-fast);
    }

    .el-upload:hover {
      border-color: var(--el-color-primary);
    }

    .el-icon.avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      text-align: center;
    }
  }
}
.editor {
  width: 100%;
  :deep(.ql-editor) {
    min-height: 200px;
  }
}
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
