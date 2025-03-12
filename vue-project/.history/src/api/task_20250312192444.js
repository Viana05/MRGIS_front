// 导入request.js请求工具
import request from '@/utils/request.js'
import { useTokenStore } from '@/stores/token'

// 任务列表
export const taskListService=(params)=>{
    return request.get('/task/list',{params:params})
}

// 添加任务
export const taskAddService=(taskData)=>{
    return request.post('/task/add',taskData)
}

// 更改任务
export const taskUpdateService=(taskData)=>{
    return request.put('task/update',taskData)
}