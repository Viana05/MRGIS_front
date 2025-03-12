import {
    createRouter,
    createWebHistory
} from 'vue-router'
import LoginVue from'@/views/Login.vue'
import LayoutVue from '@/views/Layout.vue'

// Introduction

// BasicStep

// Geology

// Geomorphology

// PhysicalGeography

// Roadmap

// Task

// 导入组件
const routes=[
    {path:'/login',component:LoginVue},
    {path:'/',component:LayoutVue,children:[
        {path:''}
        // Introduction

        // BasicStep

        // Geology

        // Geomorphology

        // PhysicalGeography

        // Roadmap

        // Task
    ]}
]
// 创建路由器
const router=createRouter({
    history:createWebHistory(),
    routes:routes
})
// 导出路由
export default router