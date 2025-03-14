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
  List,
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
              <svg
                t="1741915038241"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3506"
                width="256"
                height="256"
              >
                <path
                  d="M54.4 499.2c3.2-3.2 262.4-204.8 496-73.6 272 153.6 454.4-6.4 460.8-12.8 12.8-12.8 12.8-32 3.2-44.8-12.8-12.8-32-12.8-44.8-3.2-6.4 6.4-156.8 134.4-387.2 6.4C310.4 214.4 25.6 438.4 12.8 448c-12.8 9.6-16 32-6.4 44.8 6.4 6.4 16 12.8 25.6 12.8 9.6 0 16-3.2 22.4-6.4z"
                  fill="#ffffff"
                  p-id="3507"
                ></path>
                <path
                  d="M9.6 684.8c6.4 6.4 16 12.8 25.6 12.8 6.4 0 12.8-3.2 19.2-6.4 3.2-3.2 262.4-204.8 496-73.6 272 153.6 454.4-6.4 460.8-12.8 12.8-12.8 12.8-32 3.2-44.8-12.8-12.8-32-12.8-44.8-3.2-6.4 6.4-156.8 134.4-387.2 6.4C310.4 406.4 25.6 630.4 12.8 640c-12.8 12.8-16 32-3.2 44.8zM1024 864h-9.6l9.6 9.6zM896 864h-102.4l9.6 9.6h-140.8l12.8-9.6h-102.4l9.6 9.6h-140.8l9.6-9.6h-102.4l12.8 9.6H220.8l9.6-9.6H128l12.8 9.6H0l9.6-9.6H0v160h1024v-150.4h-140.8z"
                  fill="#ffffff"
                  p-id="3508"
                ></path>
                <path
                  d="M140.8 873.6L128 864l-57.6-60.8L9.6 864l-9.6 9.6zM803.2 873.6l-9.6-9.6-60.8-60.8-57.6 60.8-12.8 9.6zM361.6 873.6l-12.8-9.6-57.6-60.8L230.4 864l-9.6 9.6zM1024 873.6l-9.6-9.6-60.8-60.8L896 864l-12.8 9.6H1024zM582.4 873.6l-9.6-9.6-60.8-60.8-60.8 60.8-9.6 9.6zM1014.4 160h9.6v-9.6zM1024 150.4V0H0v160h9.6L0 150.4h140.8l-9.6 9.6h102.4l-12.8-9.6h140.8L352 160h102.4l-12.8-9.6h140.8l-9.6 9.6h102.4l-12.8-9.6h140.8l-9.6 9.6H896l-9.6-9.6z"
                  fill="#ffffff"
                  p-id="3509"
                ></path>
                <path
                  d="M0 150.4l9.6 9.6 60.8 60.8L131.2 160l9.6-9.6zM662.4 150.4l12.8 9.6 57.6 60.8L793.6 160l9.6-9.6zM220.8 150.4l12.8 9.6 57.6 60.8L352 160l9.6-9.6zM1024 150.4h-137.6l9.6 9.6 57.6 60.8L1014.4 160l9.6-9.6zM441.6 150.4l12.8 9.6L512 220.8 572.8 160l9.6-9.6z"
                  fill="#ffffff"
                  p-id="3510"
                ></path>
              </svg>
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
              <svg
                t="1741915224656"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="9281"
                width="256"
                height="256"
              >
                <path
                  d="M464.4 140.9c-23.6 0-42.7 19.1-42.7 42.7s19.1 42.7 42.7 42.7c130.2 0 236.2 105.9 236.2 236.1 0 23.6 19.1 42.7 42.7 42.7S786 486 786 462.4c0-177.3-144.3-321.5-321.6-321.5z"
                  p-id="9282"
                  fill="#ffffff"
                ></path>
                <path
                  d="M1009.6 951L819.7 761.2c-0.5-0.5-1.1-0.6-1.6-1.1 67.8-80.5 108.8-184.2 108.8-297.6C926.9 207.1 719.8 0 464.4 0S1.9 207.1 1.9 462.5 209 925 464.4 925c111.5 0 213.8-39.5 293.7-105.2 0.5 0.6 0.7 1.3 1.2 1.9l189.8 189.8c8.3 8.3 19.3 12.5 30.2 12.5s21.9-4.2 30.2-12.5c16.8-16.7 16.8-43.8 0.1-60.5zM464.4 839.5c-207.9 0-377-169.1-377-377s169.1-377 377-377 377 169.1 377 377-169.1 377-377 377z"
                  p-id="9283"
                  fill="#ffffff"
                ></path>
              </svg>
            </el-icon>
            <span>野外岩石鉴定</span>
          </el-menu-item>
          <el-menu-item index="/geology/featurerecog">
            <el-icon>
              <svg
                t="1741915292495"
                class="icon"
                viewBox="0 0 1174 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="11272"
                width="256"
                height="256"
              >
                <path
                  d="M487.01852 669.28545c122.548839 47.171195 229.566482 88.3417 382.407571 6.41785 5.13428-2.759675 10.68572-5.808154 16.044624-8.824543l289.284573-265.185548v-186.117639l-293.006925 268.201936a648.844599 648.844599 0 0 1-198.151108 33.886246 663.990724 663.990724 0 0 1-257.901288-61.162107c-117.125756-46.240607-228.186644-90.07452-425.535521-8.599918v209.318166c206.462223-95.978941 354.586193-39.084704 486.858074 12.065557z m414.528909-159.708188l240.990254-220.613582v98.674439l-240.990254 220.613581z"
                  p-id="11273"
                  fill="#ffffff"
                ></path>
                <path
                  d="M438.595845 394.697753c112.857886 44.218984 229.085143 89.593181 430.830246 26.601987 5.198458-1.604462 10.65363-3.208925 16.044624-5.13428L1174.65902 154.028391V0H294.675566L0 267.175081v113.788474c202.515246-78.682837 322.368588-31.864623 438.563755 13.605841zM1142.377237 139.652408l-240.990254 218.206888V270.351916l72.13663-65.365798L1142.377237 52.048761zM307.062016 32.089248H1116.705838l-163.655166 148.476952L879.245401 247.087211 71.687381 245.41857z m573.916205 755.380903a449.827082 449.827082 0 0 1-181.817681 39.662311 696.914293 696.914293 0 0 1-252.959543-60.520322C308.826925 713.953684 189.647457 668.643665 0 776.559807v189.326564a687.993482 687.993482 0 0 1 369.283069 20.986369c135.159914 36.453386 263.131835 70.596346 516.059289-25.382596l289.316662-261.62364v-178.095328z m261.399016-101.819184l-241.118611 218.206888v-91.550626l241.118611-218.206887z"
                  p-id="11274"
                  fill="#ffffff"
                ></path>
              </svg>
            </el-icon>
            <span>地层特征识别</span>
          </el-menu-item>
          <el-menu-item index="/geology/structurefield">
            <el-icon>
              <svg
                t="1741915397788"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="15652"
                width="256"
                height="256"
              >
                <path
                  d="M986.112 735.744c-67.072-122.368-33.28-165.888-100.864-287.744-49.152-88.064-43.008-154.624-92.672-242.176h-259.072c-5.12-0.512-6.144 5.12-7.68 8.704-14.848 39.936-29.696 80.384-44.544 120.32-5.12 15.36-27.648 31.232-23.04 48.128-7.68-5.632-32.256-14.848-38.4-22.016 20.48-45.056 39.936-90.624 60.416-136.192 2.56-6.144 7.168-12.288 6.656-18.944-74.24 0.512-168.448 0-242.176 0-0.512 0.512-1.536 2.048-2.048 2.56C160.256 366.592 174.08 450.56 91.648 608.768 61.952 662.528 15.36 792.064 15.36 844.8l20.992 2.56c20.48 2.048 4.096 0.512 24.576 1.024h286.208c3.072-1.536 5.632-4.096 8.192-6.144 46.08-37.376 92.672-74.24 138.752-111.104 15.872-15.872 23.552-33.792 40.448-48.64 11.264-11.264 37.376-21.504 51.712-27.136 0.512 5.12-0.512 10.24-1.024 15.36 2.56 12.8 7.68 25.088 8.192 38.4 0.512 8.704 1.536 16.896 0.512 25.6-1.024 9.216-9.216 18.944-5.632 27.648 6.656 15.872 13.824 33.28 16.896 50.176-3.072 13.312-14.336 22.528-18.432 35.328 80.384 1.024 160.768 0 241.152 0.512 88.064 0 89.6 0.512 177.664 0 1.024-4.608 2.56-47.104 1.024-50.688l-20.48-61.952zM482.304 353.28l-5.12 13.824c10.24 6.656 4.096-3.584 14.336 3.584 16.896 9.216 41.984 29.696 59.392 39.424 15.872 11.776 30.72 24.576 46.592 36.864 0 0.512 58.88 8.704 58.368 9.728-11.264 7.68-82.944 13.824-94.72 20.992-4.608 2.56-7.168 8.192-12.288 9.216 1.024-9.728 5.12-18.944 7.168-28.672-5.12-8.192-13.824-13.312-20.48-19.968-12.8-11.264-28.672-16.896-42.496-25.6-8.192-5.12-5.632-1.024-10.24-10.24-2.048-8.704 5.12-39.424 6.656-48.128l-7.168-1.024z m31.232 200.704c2.048 8.704 23.552 24.576 26.112 32.768-3.584 0-18.432-4.096-19.968-6.656-2.56-4.608-12.288-9.216-16.896-12.288-11.776-7.168-23.04-14.848-34.816-21.504-2.048-1.024-4.096-2.56-5.12-4.608-7.168-11.264-29.184-28.672-36.352-39.424 14.336-7.168 46.08-28.16 62.976-28.672 10.24-0.512 19.968-3.072 30.208-4.096 9.216-1.024 15.36-9.728 23.04-14.336 0 10.752-3.072 28.672 1.024 39.424-6.144 10.24-25.088 10.752-34.816 13.824 2.56 15.36 10.24 30.72 11.776 46.08l-7.168-0.512z m213.504 111.104c-5.632 6.656-7.168 15.872-10.24 24.064-3.584 9.216-38.912 18.944-42.496 27.648-4.608 11.776-6.656 25.6-14.336 35.84-8.192 12.8-29.696 25.6-37.888 38.4-1.024-1.536-2.048-3.584-2.048-5.632-1.024-11.776 1.024-22.528-3.072-33.792-3.072-12.288 4.608-23.552 2.048-35.84-2.56-14.336 4.096-28.672 1.536-42.496-1.536-7.168 7.68-14.336 8.192-21.504-18.432-13.824-55.808-28.672-74.24-43.008-6.656-5.12-13.824-9.728-16.896-17.92-2.048-10.752 7.168-5.12 6.144-16.384 0-10.24-5.12-19.968-4.608-30.208 0.512-9.216 8.192-11.264 9.216-19.968 2.56-1.024 4.608 1.024 6.656 2.048 30.208 18.432 45.568 19.456 71.68 44.544 23.552 18.432 100.352 49.664 123.904 68.096-5.12 9.728-17.408 18.432-23.552 26.112z"
                  fill="#ffffff"
                  p-id="15653"
                ></path>
              </svg>
            </el-icon>
            <span>地质构造野外观察</span>
          </el-menu-item>
          <el-menu-item index="/geology/survey">
            <el-icon>
              <svg
                t="1741915462979"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="17056"
                width="256"
                height="256"
              >
                <path
                  d="M527.872 0C278.016 0 74.24 201.728 74.24 449.024c0.512 164.352 90.624 315.392 235.008 393.728l6.144 3.072 11.264 5.12 3.584 2.048c15.872 8.704 31.744 16.384 47.104 23.552 36.352 17.408 70.656 33.792 86.528 55.808l64 91.136 64-91.136c15.36-22.016 50.176-38.4 86.528-55.808 15.36-7.168 30.72-14.848 47.104-23.552l3.584-2.048 11.264-5.632 6.144-3.072c144.384-78.336 234.496-229.376 235.008-393.216C982.016 201.728 778.24 0 527.872 0z"
                  fill="#ffffff"
                  p-id="17057"
                ></path>
                <path
                  d="M152.576 449.024c0 205.312 167.936 371.712 375.296 371.712s375.296-166.4 375.296-371.712-167.936-371.712-375.296-371.712-375.296 166.4-375.296 371.712z"
                  fill="#ffffff"
                  p-id="17058"
                ></path>
                <path
                  d="M567.808 440.832c-1.024-2.048-2.56-4.608-4.608-6.144l-20.48-19.968c-2.048-2.048-4.608-4.096-7.168-5.12-8.704-4.096-19.456-2.048-26.112 4.608-7.168 6.656-19.968 19.968-43.52 42.496-44.544 44.032-108.544 98.816-145.92 130.56-8.192 6.656-8.704 18.944-1.024 26.112l43.52 43.52c7.168 7.168 19.456 6.656 26.112-1.024 32.768-37.888 88.064-101.888 132.096-145.408 22.528-22.016 35.328-35.328 42.496-41.984s9.728-17.92 4.608-27.648z m203.776-31.232l-37.888-37.888c-1.024-1.024-2.56-2.048-4.608-2.048s-3.072 0.512-4.608 2.048c-2.56 2.56-6.656 4.096-10.752 3.584-5.12-0.512-10.24-2.048-13.824-5.632-7.68-7.68 1.024-22.528-5.632-32.256-6.656-9.216-17.92-22.016-25.6-29.696s-38.4-37.376-90.624-58.368c-18.432-7.68-36.352-10.24-52.224-10.24-29.184 0-52.224 9.216-60.416 16.896-6.144 5.632-12.288 15.36-3.584 15.36h2.56c5.12-1.024 14.848-2.048 26.112-2.048 17.408 0 37.888 2.048 49.152 11.264 17.92 14.336 32.768 33.792 34.304 58.88 1.024 18.432-3.584 31.232-20.48 50.176-3.072 3.584-3.072 8.704 0.512 11.776l20.992 20.992c3.584 3.584 8.704 3.584 12.288 0 15.36-14.848 24.576-22.016 34.816-25.088 4.608-1.024 9.216-2.048 14.336-2.048 10.752 0 20.992 2.56 26.112 5.12 1.024 0.512 2.048 1.536 3.584 2.56 7.168 7.168 6.656 19.456-0.512 26.624l-2.048 2.048c-2.56 2.56-2.56 6.144 0 8.704l37.888 37.888c1.024 1.024 2.56 2.048 4.608 2.048s3.072-0.512 4.608-2.048l61.44-60.928c2.048-1.536 2.048-5.632-0.512-7.68z"
                  fill="#ffffff"
                  p-id="17059"
                ></path>
              </svg>
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
            <span>路线四 连云港</span>
          </el-menu-item>
        </el-sub-menu>
        <!-- 实习任务 -->
        <el-menu-item index="/task">
          <el-icon>
            <List />
          </el-icon>
          <span>实习任务</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <!-- 右侧主区域 -->
    <el-container>
      <!-- 头部区域 -->
      <el-header>
        <div>
          {{ userInfoStore.info.identity }}：<strong>{{
            userInfoStore.info.username
          }}</strong>
        </div>
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
