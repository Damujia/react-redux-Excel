import axios from 'axios'
import qs from 'qs'
// import { Message, Loading } from 'element-ui'
// import store from '@/store/index'
// 响应时间
// axios.defaults.timeout = 5 * 1000
// 配置请求头
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8'
// 配置接口地址
// 环境的切换
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://192.168.1.110:20529/lj20200529web/'
} else if (process.env.NODE_ENV === 'debug') {
} else if (process.env.NODE_ENV === 'production') {
  // axios.defaults.baseURL = 'http://192.168.1.111:8000/syr20200729web'
}

let loadingInstance
let loadingObj = []
// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use(
  config => {
    loadingInstance = '' /* Loading.service({
      lock: true,
      text: 'Loading...',
      target: '.loading-area', // 设置加载动画区域
      background: 'rgba(255, 255, 255, 0.767)'
    }) */
    loadingObj.push(loadingInstance)
    return config
  },
  err => {
    loadingObj.forEach(e => { e.close() })
    // Message.error('请求错误')
    return Promise.reject(err)
  }
)
// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
  res => {
    // loadingObj.forEach(e => { e.close() })
    // if (res.data.error === '激活码已失效') {
    //   store.commit('setactivbox', true)
    // } else {
    //   return res
    // }
    return res
  },
  err => {
    loadingObj.forEach(e => { e.close() })
    // Message.error('请求失败，请稍后再试')
    return Promise.reject(err)
  }
)
// 发送请求
export function post (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(
        res => {
          resolve(res)
        },
        err => {
          reject(err)
        }
      )
      .catch(() => {})
  })
}
export function get (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res)
      })
      .catch(() => {})
  })
}
export function Delete (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params,
      paramsSerializer: params => {
        return qs.stringify(params, { indices: false })
      }
    })
      .then(res => {
        resolve(res)
      })
      .catch(() => {

      })
  })
}
