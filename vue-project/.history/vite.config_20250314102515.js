import {
  fileURLToPath,
  URL
} from 'node:url'

import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
// 引入cesium
import cesium from 'vite-plugin-cesium'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    cesium(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src',
        import.meta.url))
    },
  },
  server: {
    proxy: {
      '/api': { // 获取路径中包含api的请求
        target: "http://localhost:9090", // 后台服务器所在的源
        changeOrigin: true, // 修改源
        rewrite: (path) => path.replace(/^\/api/, '') // api替换为空字符串
      }
    }
  }
})
