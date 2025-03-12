import {
    createRouter,
    createWebHistory
} from 'vue-router'
import LoginVue from '@/views/Login.vue'
import LayoutVue from '@/views/Layout.vue'
// 导入组件
const routes = [{
        path: '/login',
        component: LoginVue
    },
    {
        path: '/',
        component: LayoutVue,
        children: [

        ]
    }
]
// 创建路由器
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
// 导出路由
export default router