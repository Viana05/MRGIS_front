<script setup>
import { User, Lock } from "@element-plus/icons-vue";
import { ref } from "vue";
import { ElMessage } from "element-plus";
//控制注册与登录表单的显示， 默认显示注册
const isRegister = ref(false);

// 定义数据模型
const registerData = ref({
  username: "",
  identity: "学生",
  password: "",
  rePassword: "",
});

// 校验密码的函数
const checkRePassword = (rule, value, callback) => {
  if (value == "") {
    callback(new Error("请再次确认密码"));
  } else if (value != registerData.value.password) {
    callback(new Error("请确保再次输入的密码一样"));
  } else {
    callback();
  }
};

// 定义表单校验规则
const rule = {
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 5, max: 16, message: "长度为5-16位非空字符", trigger: "blur" },
  ],
  identity: [{ required: true, message: "请选择用户身份", trigger: "blur" }],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 5, max: 16, message: "长度为5-16位非空字符", trigger: "blur" },
  ],
  rePassword: [{ required: true, validator: checkRePassword, trigger: "blur" }],
};
// 调用后台接口，完成注册
import { userRegisterService, userLoginService } from "@/api/user.js";
const register = async () => {
  // registerData是一个响应式对象，如果获取值需要.value
    let result = await userRegisterService(registerData.value);
  //   if (result.code == 0) {
  //     alert(result.msg ? result.msg : "注册成功");
  //   } else {
  //     alert("注册失败");
  //   }
  //   alert(result.msg ? result.msg : "注册成功");
  ElMessage.success(result.msg ? result.msg : "注册成功");
};

// 绑定数据，复用注册表单的数据模型
// 表单数据校验
// 登录函数，调用接口，完成登录
import { useTokenStore } from "@/stores/token.js";
import { useRouter } from "vue-router";
const router = useRouter();
const tokenStore = useTokenStore();
const login = async () => {
  let result = await userLoginService(registerData.value);
  //   if (result.code == 0) {
  //     alert(result.msg ? result.msg : "登录成功");
  //   } else {
  //     alert("登录失败");
  //   }
  //   alert(result.msg ? result.msg : "登录成功");

  // 把得到的token存到pinia中
  tokenStore.setToken(result.data);

  ElMessage.success(result.msg ? result.msg : "登录成功");

  

  // 跳转到首页，借助路由
  router.push("/");
};

// 定义清空数据模型的数据
const clearRegisterData = () => {
  registerData.value = {
    username: "",
    identity: "学生",
    password: "",
    rePassword: "",
  };
};
</script>

<template>
  <el-row class="login-page">
    <el-col :span="12" class="bg"></el-col>
    <el-col :span="6" :offset="3" class="form">
      <!-- 注册表单 -->
      <el-form
        ref="form"
        size="large"
        autocomplete="off"
        v-if="isRegister"
        :model="registerData"
        :rules="rule"
      >
        <el-form-item>
          <h1>注册</h1>
        </el-form-item>
        <el-form-item prop="username">
          <el-input
            :prefix-icon="User"
            placeholder="请输入用户名"
            v-model="registerData.username"
          ></el-input>
        </el-form-item>
        <el-row style="font-family: Microsoft YaHei">
          <el-form-item prop="identity">
            用户身份：
            <el-radio-group v-model="registerData.identity">
              <el-radio value="学生" size="large" id="identity">
                学生
              </el-radio>
              <el-radio value="老师" size="large" id="identity">
                老师
              </el-radio>
            </el-radio-group>
          </el-form-item>
        </el-row>
        <el-form-item prop="password">
          <el-input
            :prefix-icon="Lock"
            type="password"
            placeholder="请输入密码"
            v-model="registerData.password"
          ></el-input>
        </el-form-item>
        <el-form-item prop="rePassword">
          <el-input
            :prefix-icon="Lock"
            type="password"
            placeholder="请输入再次密码"
            v-model="registerData.rePassword"
          ></el-input>
        </el-form-item>
        <!-- 注册按钮 -->
        <el-form-item>
          <el-button
            class="button"
            type="primary"
            auto-insert-space
            @click="register"
          >
            注册
          </el-button>
        </el-form-item>
        <el-form-item class="flex">
          <el-link
            type="info"
            :underline="false"
            @click="
              isRegister = false;
              clearRegisterData();
            "
          >
            ← 返回
          </el-link>
        </el-form-item>
      </el-form>
      <!-- 登录表单 -->
      <el-form
        ref="form"
        size="large"
        autocomplete="off"
        v-else
        :model="registerData"
        :rules="rule"
      >
        <el-form-item>
          <h1>登录</h1>
        </el-form-item>
        <el-form-item prop="username">
          <el-input
            :prefix-icon="User"
            placeholder="请输入用户名"
            v-model="registerData.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            name="password"
            :prefix-icon="Lock"
            type="password"
            placeholder="请输入密码"
            v-model="registerData.password"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item class="flex">
          <div class="flex">
            <el-checkbox>记住我</el-checkbox>
            <el-link type="primary" :underline="false">忘记密码？</el-link>
          </div>
        </el-form-item> -->
        <!-- 登录按钮 -->
        <el-form-item>
          <el-button
            class="button"
            type="primary"
            auto-insert-space
            @click="login"
            >登录</el-button
          >
        </el-form-item>
        <el-form-item class="flex">
          <el-link
            type="info"
            :underline="false"
            @click="
              isRegister = true;
              clearRegisterData();
            "
          >
            注册 →
          </el-link>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
/* 样式 */
.login-page {
  height: 100vh;
  background-color: #fff;

  .bg {
    background: url("@/assets/logo2.png") no-repeat 60% center / 450px auto,
      url("@/assets/login_bg.jpg") no-repeat center / cover;
    border-radius: 0 20px 20px 0;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;

    .title {
      margin: 0 auto;
    }

    .button {
      width: 100%;
    }

    .flex {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
