import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'

Vue.config.productionTip = false
// 全局配置
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// const insttarce1 =axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000
// })
// insttarce1({
//   url:'/home/multidata',
// }).then(res =>{
//   console.log(res)
// })
import {request} from './network/request'
// 方法一
// // 这个函数需要三个参数 第一个是url 第二个成功回调函数 。第三个失败回调函数
// request({
//   url:'/home/multidata'
// },
//   res=>{
//     console.log(res)
//   },err=>{
//     console.log(err)
//   }
// )
// 方法二
// request({
//   baseconfig:{
//     url:'/home/multidata',
//   },
//   success(res){
//     console.log(res)
//   },
//   failure(err){
//     console.log(err)
//   }
// })
// 第三种方法
request({
  url:'/home/multidata',
}).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})