import axios from 'axios'
import { getToken } from '@/config/token'
import { message } from 'ant-design-vue'

const instance = axios.create({
  baseURL: '', // 设置基础 URL
  timeout: 10000, // 设置超时时间
  method: 'POST',
  headers: {
    'Content-Type': 'application/json' // 设置默认请求头
  }
})
// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    if (getToken()) {
      config.headers['token'] = getToken()
    }
    return config
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  response => {
    // 对响应数据做点什么'
    // console.log(response)
    return response.data
  },
  error => {
    let errmsg = ''
    if (error && error.response) {
      switch (error.response.status) {
        case 302:
          errmsg = '接口重定向了！'
          break
        case 400:
          errmsg = '参数不正确！'
          break
        case 401:
          errmsg = '您未登录，或者登录已经超时，请先登录！'
          break
        case 403:
          errmsg = '您没有权限操作！'
          break
        case 404:
          errmsg = `请求地址出错: ${error.response.config.url}`
          break // 在正确域名下
        case 408:
          errmsg = '请求超时！'
          break
        case 409:
          errmsg = '系统已存在相同数据！'
          break
        case 500:
          errmsg = '服务器内部错误！'
          break
        case 501:
          errmsg = '服务未实现！'
          break
        case 502:
          errmsg = '网关错误！'
          break
        case 503:
          errmsg = '服务不可用！'
          break
        case 504:
          errmsg = '服务暂时无法访问，请稍后再试！'
          break
        case 505:
          errmsg = 'HTTP版本不受支持！'
          break
        default:
          errmsg = '异常问题，请联系管理员！'
          break
      }
    }
    if (error.message.includes('timeout')) errmsg = '网络请求超时！'
    if (error.message.includes('Network')) errmsg = window.navigator.onLine ? '服务端异常！' : '您断网了！'

    message.error(errmsg)
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)
export default instance
