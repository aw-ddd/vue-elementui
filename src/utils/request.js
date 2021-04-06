import axios from 'axios'
import { Message } from 'element-ui'
import router from '@/router'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (config.url != '/user/login') {
      //不是登录请求就从sessionStorage中获取token值传递过去
      if (window.sessionStorage.getItem('token')) {
        config.headers.token = window.sessionStorage.getItem('token')
      } else {
        //没有token值则直接跳转到登录页面
        router.push({ path: '/login' })
      }
    }
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    //跳转到登录页面，并提示错误
    if (!response.data.success) {
      Message({
        message: response.data.errorMsg,
        type: 'error',
        duration: 5 * 1000
      })
      router.push({ path: '/login' })
    }
    return response
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.data.errorMsg,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
