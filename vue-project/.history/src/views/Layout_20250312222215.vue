<script setup>
import {
  Management,
  Promotion,
  UserFilled,
  User,
  Crop,
  EditPen,
  SwitchButton,
  CaretBottom,
  Guide,
  MapLocation,
} from "@element-plus/icons-vue";
import avatar from "@/assets/default.png";
import router from "@/router";

import { userInfoService } from "@/api/user.js";
import useUserInfoStore from "@/stores/userInfo.js";
import { ref } from "vue";
const userInfoStore = useUserInfoStore();
// 调用函数，获取用户详细信息
const getUserInfo = async () => {
  // 调用接口
  let result = await userInfoService();
  // 数据存储到pinia中
  userInfoStore.setInfo(result.data);
};

getUserInfo();

import { ElMessage, ElMessageBox } from "element-plus";
const handleCommand = (command) => {
  // 判断指令
  if (command === "logout") {
    // 退出登录
    ElMessageBox.confirm("您确定要退出吗?", "温馨提示", {
      confirmButtonText: "确认",
      cancelButtonText: "取消",
      type: "warning",
    })
      .then(async () => {
        // 退出登录
        // 跳转到登录页面
        router.push("/login");
        ElMessage({
          type: "success",
          message: "退出登录成功",
        });
      })
      .catch(() => {
        ElMessage({
          type: "info",
          message: "用户取消了退出登录",
        });
      });
  } else {
    // 路由
    router.push("/user/" + command);
  }
};
</script>

<template>
  <!-- element-plus的容器 -->
  <el-container class="layout-container">
    <!-- 左侧菜单 -->
    <el-aside width="250px">
      <div class="el-aside__logo"></div>
      <!-- element-plus菜单标签 -->
      <el-menu
        active-text-color="#ff9671"
        background-color="#232323"
        text-color="#fff"
        router
      >
        <!-- 简介introduction -->
        <el-menu-item index="/introduction">
          <el-icon>
            <Management />
          </el-icon>
          <span>简介</span>
        </el-menu-item>
        <!-- 野外实习基本程序basicstep -->
        <el-menu-item index="/basicstep">
          <el-icon>
            <!--  -->
            <Promotion />
          </el-icon>
          <span>野外实习基本程序</span>
        </el-menu-item>
        <!-- 地质实习菜单栏geology -->
        <el-sub-menu index="/geology">
          <template #title>
            <el-icon>
              <!--  -->
              <UserFilled />
            </el-icon>
            <span>地质实习内容及方法</span>
          </template>
          <el-menu-item index="/geology/intro">
            <el-icon>
              <Management />
            </el-icon>
            <span>地质实习概述</span>
          </el-menu-item>
          <el-menu-item index="/geology/rockidenti">
            <el-icon>
              <!--  -->
              <Crop />
            </el-icon>
            <span>野外岩石鉴定</span>
          </el-menu-item>
          <el-menu-item index="/geology/featurerecog">
            <el-icon>
              <!--  -->
              <EditPen />
            </el-icon>
            <span>地层特征识别</span>
          </el-menu-item>
          <el-menu-item index="/geology/structurefield">
            <el-icon>
              <!--  -->
              <EditPen />
            </el-icon>
            <span>地质构造野外观察</span>
          </el-menu-item>
          <el-menu-item index="/geology/survey">
            <el-icon>
              <!--  -->
              <EditPen />
            </el-icon>
            <span>地质调查基本方法</span>
          </el-menu-item>
        </el-sub-menu>
        <!-- 地貌实习菜单栏geomorphology -->
        <el-sub-menu index="/geomorphology">
          <template #title>
            <el-icon>
              <!--  -->
              <UserFilled />
            </el-icon>
            <span>地貌实习内容及方法</span>
          </template>
          <el-menu-item index="/geomorphology/intro">
            <el-icon>
              <Management />
            </el-icon>
            <span>地貌实习概述</span>
          </el-menu-item>
          <el-menu-item index="/geomorphology/externalforce">
            <el-icon>
              <!--  -->
              <Crop />
            </el-icon>
            <span>外营力主导地貌</span>
          </el-menu-item>
          <el-menu-item index="/geomorphology/internalforce">
            <el-icon>
              <!--  -->
              <EditPen />
            </el-icon>
            <span>内营力主导地貌</span>
          </el-menu-item>
          <el-menu-item index="/geomorphology/obser">
            <el-icon>
              <!--  -->
              <EditPen />
            </el-icon>
            <span>地貌观测和记录内容</span>
          </el-menu-item>
        </el-sub-menu>
        <!-- 自然地理实习菜单栏physicalgeo -->
        <el-sub-menu index="/physicalgeo">
          <template #title>
            <el-icon>
              <!--  -->
              <UserFilled />
            </el-icon>
            <span>自然地理实习内容及方法</span>
          </template>
          <el-menu-item index="/physicalgeo/intro">
            <el-icon>
              <Management />
            </el-icon>
            <span>自然地理实习概述</span>
          </el-menu-item>
          <el-menu-item index="/physicalgeo/soilgeography">
            <el-icon>
              <!--  -->
              <Crop />
            </el-icon>
            <span>土壤地理实习</span>
          </el-menu-item>
          <el-menu-item index="/physicalgeo/plantgeography">
            <el-icon>
              <!--  -->
              <EditPen />
            </el-icon>
            <span>植物地理实习</span>
          </el-menu-item>
        </el-sub-menu>
        <!-- 实习路线roadmap -->
        <el-sub-menu index="/roadmap">
          <template #title>
            <el-icon>
              <Guide />
            </el-icon>
            <span>实习路线</span>
          </template>
          <el-menu-item index="/roadmap/intro">
            <el-icon>
              <Management />
            </el-icon>
            <span>实习路线概述</span>
          </el-menu-item>
          <el-menu-item index="/roadmap/one">
            <el-icon>
              <MapLocation />
            </el-icon>
            <span>路线一 徐州大北望</span>
          </el-menu-item>
          <el-menu-item index="/roadmap/two">
            <el-icon>
              <MapLocation />
            </el-icon>
            <span>路线二 徐州班井</span>
          </el-menu-item>
          <el-menu-item index="/roadmap/three">
            <el-icon>
              <MapLocation />
            </el-icon>
            <span>路线三 徐州窑湾及马陵山</span>
          </el-menu-item>
          <el-menu-item index="/roadmap/four">
            <el-icon>
              <MapLocation />
            </el-icon>
            <span>路线四 连云港连岛、羊山岛及规划展示中心</span>
          </el-menu-item>
        </el-sub-menu>
        <!-- 实习任务 -->
        <el-menu-item index="/task">
          <el-icon>
            <!--  -->
            <Management />
          </el-icon>
          <span>实习任务</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <!-- 右侧主区域 -->
    <el-container>
      <!-- 头部区域 -->
      <el-header>
        <div>{{userInfoStore.info.identity}}：<strong>{{userInfoStore.info.username}}</strong></div>
        <!-- 下拉菜单 -->
        <el-dropdown placement="bottom-end" @command="handleCommand">
          <span class="el-dropdown__box">
            <el-avatar :src="avatar" />
            <el-icon>
              <CaretBottom />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="info" :icon="User"
                >基本资料</el-dropdown-item
              >
              <el-dropdown-item command="resetPassword" :icon="EditPen"
                >重置密码</el-dropdown-item
              >
              <el-dropdown-item command="logout" :icon="SwitchButton"
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-header>
      <!-- 中间区域 -->
      <el-main>
        <!-- <div style="width: 1290px; height: 570px; border: 1px solid red">
          内容展示区
        </div> -->
        <router-view></router-view>
      </el-main>
      <!-- 底部区域 -->
      <el-footer>自然地理与地质地貌实习系统 ©2025 Created by MRGISer</el-footer>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.layout-container {
  height: 100vh;

  .el-aside {
    background-color: #232323;

    &__logo {
      height: 120px;
      background: url("@/assets/logo2.png") no-repeat center / 220px auto;
    }

    .el-menu {
      border-right: none;
    //   unique-opened: true;
    }
  }

  .el-header {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .el-dropdown__box {
      display: flex;
      align-items: center;

      .el-icon {
        color: #999;
        margin-left: 10px;
      }

      &:active,
      &:focus {
        outline: none;
      }
    }
  }

  .el-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #666;
  }
}
</style>
