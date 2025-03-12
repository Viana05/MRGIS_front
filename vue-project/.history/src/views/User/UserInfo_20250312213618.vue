<script setup>
import { ref } from "vue";
import useUserInfoStore from "@/stores/userInfo.js";
const userInfoStore = useUserInfoStore();

const userInfo = ref({ ...userInfoStore.info });
const rules = {
  identity: [{ required: true, message: "请选择用户身份", trigger: "blur" }],
  email: [
    { required: true, message: "请输入用户邮箱", trigger: "blur" },
    { type: "email", message: "邮箱格式不正确", trigger: "blur" },
  ],
};
</script>
<template>
  <el-card class="page-container">
    <template #header>
      <div class="header">
        <span>基本资料</span>
      </div>
    </template>
    <el-row>
      <el-col :span="12">
        <el-form
          :model="userInfo"
          :rules="rules"
          label-width="100px"
          size="large"
        >
          <el-form-item label="用户名称">
            <el-input v-model="userInfo.username" disabled></el-input>
          </el-form-item>
          <el-row style="font-family: Microsoft YaHei">
          <el-form-item prop="identity" label="用户身份">
            <el-radio-group v-model="userInfo.identity">
              <el-radio value="学生" size="large" id="identity">
                学生
              </el-radio>
              <el-radio value="老师" size="large" id="identity">
                老师
              </el-radio>
            </el-radio-group>
          </el-form-item>
        </el-row>
          <el-form-item label="用户邮箱" prop="email">
            <el-input v-model="userInfo.email"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="updateUserInfo">提交修改</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-card>
</template>
