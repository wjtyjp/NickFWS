import axios from 'axios'
// import { Message } from 'element-ui'
// import store from '../store'
// import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 10000, // 请求超时时间
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
  withCredentials: true
})

/**
 *
 * @param {method} 请求的方式
 * @param {url} 接口i地址
 * @param {params} 请求传参
 *
 */
function fatch(method, url, params = {}) {
  switch (method === 'post') {
    case 'get':
      return service({ url: url, method: method, data: params })
    case 'post':
      return service({ url: url, method: method, data: params })
    default:
      return service({ url: url, method: method, data: params })
  }
  /**
   * 后续有需要可以继续添加 put delete ...更多的请求方式
   */
}

// 添加请求拦截器
service.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  return config
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(response => {
  // 对响应数据做点什么
  // Message.success('请求成功')
  return response
}, function(error) {
  // 对响应错误做点什么
  // Message.error('请求失败')
  return Promise.reject(error)
})

// request拦截器
// service.interceptors.request.use(
//   config => {
//     // if (store.getters.token) {
//     //   config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
//     // }
//     return config
//   },
//   error => {
//     // Do something with request error
//     console.log(error) // for debug
//     // Promise.reject(error)
//   }
// )

// // response 拦截器
// service.interceptors.response.use(
//   response => {
//     /**
//      * code为非20000是抛错 可结合自己业务进行修改
//      */
//     const res = response.data
//     if (res.code !== 0) {
//       Message({
//         message: res.message,
//         type: 'error',
//         duration: 5 * 1000
//       })
//     }

//     //   // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
//     //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
//     //     MessageBox.confirm(
//     //       '你已被登出，可以取消继续留在该页面，或者重新登录',
//     //       '确定登出',
//     //       {
//     //         confirmButtonText: '重新登录',
//     //         cancelButtonText: '取消',
//     //         type: 'warning'
//     //       }
//     //     ).then(() => {
//     //       store.dispatch('FedLogOut').then(() => {
//     //         location.reload() // 为了重新实例化vue-router对象 避免bug
//     //       })
//     //     })
//     // }
//     return Promise.reject('error')
//     // } else {
//     //   return response.data
//     // }
//   },
//   error => {
//     console.log('err' + error) // for debug
//     Message({
//       message: error.message,
//       type: 'error',
//       duration: 5 * 1000
//     })
//     return Promise.reject(error)
//   }
// )
// 文件下载
const serviceDownLoad = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 50 * 1000, // 请求超时时间, 10秒
  headers: { 'Content-Type': 'application/json;application/octet-stream;' },
  withCredentials: true,
  responseType: 'blob'
})
// 添加请求拦截器
serviceDownLoad.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  return config
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
serviceDownLoad.interceptors.response.use(response => {
  // 对响应数据做点什么
  // Message.success('请求成功')
  return response
}, function(error) {
  // 对响应错误做点什么
  // Message.error('请求失败')
  return Promise.reject(error)
})
export default service
export { fatch, serviceDownLoad }
