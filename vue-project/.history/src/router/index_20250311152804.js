import {
    createRouter,
    createWebHistory
} from 'vue-router'
import LoginVue from'@/views/Login.vue'
// 导入组件
const routes=[
    {path:'/login',component:LoginVue}
    {path:'/',component:LayoutVue}
]