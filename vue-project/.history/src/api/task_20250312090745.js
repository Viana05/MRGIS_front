// 导入request.js请求工具
import request from '@/utils/request.js'

// 任务列表
export const taskListService=(params)=>{
    return request.get('/task/list',{params:params})
}