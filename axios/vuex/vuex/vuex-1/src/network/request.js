import axios from 'axios'
// 方式一
// export function request(config,success,failure){
//   const instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })
//   instance(config)
//   .then(res=>{
//     // 成功执行这个回调
//     success(res)
//   })
//   .catch(err=>{
//     // 失败执行这个回调
//     failure(err)
//   })
// }
// 方式二
// export function request(config){
//   const instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })
//   instance(config.baseconfig)
//   .then(res=>{
//     // 成功执行对象里面这个方法
//     config.success(res)
//   })
//   .catch(err=>{
//     // 失败执行这个对象里面这个方法
//     config.failure(err)
//   })
// }
// 方法三
// export function request(config){
//   // 异步操作 直接返回成功 或者失败的
//   return new Promise((resolve,reject)=>{
//     const instance = axios.create({
//       baseURL:'http://123.207.32.32:8000',
//       timeout:5000
//     })
//     instance(config)
//     .then(res=>{
//       // 成功执行对象里面这个方法
//       resolve(res)
//     })
//     .catch(err=>{
//       // 失败执行这个对象里面这个方法
//       reject(err)
//     })
  

//   })
// }
// 第四种
// export function request(config){
//   // 异步操作 直接返回成功 或者失败的
  
//     const instance = axios.create({
//       baseURL:'http://123.207.32.32:8000',
//       timeout:5000
//     })
//     // 返回值本身就是一个promise
//     return instance(config)
// }
export function request(config){
  // 异步操作 直接返回成功 或者失败的
  
    const instance = axios.create({
      baseURL:'http://123.207.32.32:8000',
      timeout:5000
    })
    // 请求拦截器 ，成功 或失败
    instance.interceptors.request.use(config=>{
      // 拦截后必须返回
      // 
      console.log(config)
      return config
    },err=>{
      console.log(err)
    })
    // 
    // 响应拦截
    instance.interceptors.response.use(config =>{
      console.log(config)
      return config.data.data
    },err=>{
      console.log(err)
    })
    return instance(config)
}