<script setup>
import { ref } from "vue";

// 定义数据模型
const userPwdData = ref({
  old_pwd: "",
  new_pwd: "",
  re_pwd: "",
});
// 校验密码的函数
const checkRePassword = (rule, value, callback) => {
  if (value == "") {
    callback(new Error("请再次确认密码"));
  } else if (value != userPwdData.value.new_pwd) {
    callback(new Error("请确保再次输入的密码一样"));
  } else {
    callback();
  }
};
// 定义表单校验规则
const rules = {
  old_pwd: [
    { required: true, message: "请输入原密码", trigger: "blur" },
    { min: 5, max: 16, message: "长度为5-16位非空字符", trigger: "blur" },
  ],
  new_pwd: [
    { required: true, message: "请输入新密码", trigger: "blur" },
    { min: 5, max: 16, message: "长度为5-16位非空字符", trigger: "blur" },
  ],
  re_pwd: [{ required: true, validator: checkRePassword, trigger: "blur" }],
};
// 调用后台接口，完成密码重置
import { userPwdUpdateService } from "@/api/user";
import { ElMessage } from "element-plus";
const updateUserPwd = async () => {
  // 调用接口
  let result = await userPwdUpdateService(userPwdData.value);
  ElMessage.success(result.msg ? result.msg : "重置密码成功");
};
</script>
<template>
  <el-card class="page-container">
    <template #header>
      <div class="header">
        <span>重置密码</span>
      </div>
    </template>
    <el-row>
      <el-col :span="12">
        <el-form
          :model="userPwdData"
          :rules="rules"
          label-width="110px"
          size="large"
        >
          <el-form-item label="原密码" prop="old_pwd">
            <el-input type="old_pwd" v-model="userPwdData.old_pwd"></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="new_pwd">
            <el-input type="new_pwd" v-model="userPwdData.new_pwd"></el-input>
          </el-form-item>
          <el-form-item label="再输入新密码" prop="re_pwd">
            <el-input type="re_pwd" v-model="userPwdData.re_pwd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="button" type="primary" @click="updateUserPwd"
              >提交修改</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-card>
</template>