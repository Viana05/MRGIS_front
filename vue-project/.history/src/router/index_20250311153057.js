import {
    createRouter,
    createWebHistory
} from 'vue-router'
import LoginVue from'@/views/Login.vue'
// 导入组件
const routes=[
    {path:'/login',component:LoginVue},
    {path:'/',component:LayoutVue}
]
// 创建路由器
const router=createRouter({
    history:createWebHistory(),
    routes:routes
})
// 导出路由
export default router