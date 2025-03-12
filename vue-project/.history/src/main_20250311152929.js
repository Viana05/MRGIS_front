import './assets/main.scss'

import { createApp } from 'vue'

// 导入ElementPlus
import ElementPlus from 'element-plus'
// import Element from 'element-ui'
import 'element-plus/dist/index.css'
import router from '@/router'

import App from './App.vue'

const app = createApp(App); //创建应用实例
app.use(ElementPlus) //使用element-plus
app.use(router)
app.mount('#app') //控制html元素
