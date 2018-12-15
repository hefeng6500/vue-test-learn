// import Vue from 'vue'
import axios from 'axios'
import {
    Message
} from 'element-ui';

let requset = axios.create({
    // baseURL: 'https://easy-mock.com/mock/5bc8391a4645473183fb626d/base', //easy-mock地址
    baseURL: '', //easy-mock地址
    timeout: 5000
});

// 添加请求拦截器
requset.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    });

    
// 添加响应拦截器
requset.interceptors.response.use(
    (response) => {
        let res = response.data
        if (response.status === 200) {
            return res;
        } else {
            Message({
                message: res.message,
                type: 'error',
                duration: 5 * 1000
            })
        }
    },
    (error) => {
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error);
    });

export default requset