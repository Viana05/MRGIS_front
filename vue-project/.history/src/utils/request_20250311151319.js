//定制请求的实例

//导入axios  npm install axios
import axios from 'axios';

import {
    ElMessage
} from 'element-plus'
//定义一个变量,记录公共的前缀  ,  baseURL
// const baseURL = 'http://localhost:8080';
const baseURL = '/api';
const instance = axios.create({
    baseURL
})


//添加响应拦截器
instance.interceptors.response.use(
    result => {
        // 判断业务状态码
        if (result.data.code == 0) {
            return result.data;
        }
        // alert(result.data.msg ? result.data.msg : '服务异常');
        ElMessage.error(result.data.msg ? result.data.msg : '服务异常')
        // 异步操作的转态转为失败
        return Promise.reject(result.data);
    },
    err => {
        alert('服务异常');
        return Promise.reject(err); //异步的状态转化成失败的状态
    }
)

export default instance;