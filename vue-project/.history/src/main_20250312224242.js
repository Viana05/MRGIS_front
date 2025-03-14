import './assets/main.scss'

import { createApp } from 'vue'

// 导入ElementPlus
import ElementPlus from 'element-plus'
// import Element from 'element-ui'
import 'element-plus/dist/index.css'
import router from '@/router'
import {createPinia} from 'pinia'
import {createPersistedState} from 'pinia-persistedstate-plugin'
import locale from'element-plus/dist/locale/zh-cn.js'
import 'virtual:svg-icons-register'

import App from './App.vue'

const app = createApp(App); //创建应用实例
app.use(ElementPlus,{locale}) //使用element-plus
app.use(router)
const pinia = createPinia();
const persist = createPersistedState();
app.use(pinia);
pinia.use(persist);
app.mount('#app') //控制html元素
