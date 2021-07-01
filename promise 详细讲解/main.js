// new Promise((resolve ,reject)=>{
//   setTimeout(() => {
//     resolve()
//   }, 5000);
// }).then(()=>{
//   console.log("第一次请求")
//   return new Promise((resolve ,reject)=>{
//     setTimeout(() => {
//       resolve()
//     }, 5000);
//   }).then(()=>{
//     console.log("第二次请求");
//     return new Promise((resolve,reject)=>{
//       setTimeout(() => {
//         resolve()
//       }, 5000);
//     }).then(()=>{
//       console.log("第三次请求")
//       return new Promise((resolve ,reject)=>{
//         setTimeout(() => {
//           resolve()
//         }, 5000);
//       }).then(()=>{
//         console.log("第四次请求")
//       })
//     })
//   })
// })
// ************
// new Promise((resolve ,reject)=>{
//   setTimeout(() => {
//     resolve()
//   }, 5000);
// }).then(()=>{
//   console.log("第一次调用")
//   return new Promise((resolve ,reject)=>{
//     setTimeout(() => {
//       resolve()
//     }, 5000);
//   })
// }).then(()=>{
//   console.log("第二次调用")
// })
// *******************
// new Promise((resolve ,reject)=>{
//   setTimeout(() => {
//     // 成功的时候调用then
//     resolve("请求成功")
//     // 失败的时候调用catch
//     reject("error message")
//   }, 2000);
// }).then((data)=>{
//   console.log(data)
//   console.log(data)
//   console.log(data)
//   console.log(data)
//   console.log(data)
// }).catch((err)=>{
//   console.log(err)
// })
// new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     // resolve("成功")
//     reject("Error Data")
//   }, 2000);
// }).then(data=>{
//   console.log(data)
// },err=>{
//   console.log(err)
// })
// **************************
// new Promise((resolve ,reject)=>{
//   setTimeout(() => {
//     resolve("111")
//   }, 2000);
// }).then(data =>{
//   console.log(data)
//   return new Promise((resolve ,reject)=>{
//     setTimeout(() => {
//       resolve(data +"aaa")
//     }, 2000);
//   })
// }).then((data)=>{
//   console.log(data)
//   return new Promise((resolve ,reject) =>{
//     setTimeout(() => {
//       resolve(data +"bbb")
//     }, 2000);
//   })
// }).then(data=>{
//   console.log(data)
// })
// // **********************
// // new promise 简写
// new Promise(resolve=>{
//   setTimeout(() => {
//     resolve("111")
//   }, 2000);
// }).then(data =>{
//   console.log(data)
//   return Promise.resolve(data +"aaa")
// }).then(data=>{
//   console.log(data)
//   return Promise.resolve(data +"bbb")
// }).then(data=>{
//   console.log(data)
// })
// // **********************
// // new promise 简写
// new Promise(resolve=>{
//   setTimeout(() => {
//     resolve("111")
//   }, 2000);
// }).then(data =>{
//   console.log(data)
//   return data +"aaa"
// }).then(data=>{
//   console.log(data)
//   return data +"bbb"
// }).then(data=>{
//   console.log(data)
// })
// ***************
// 异常抛出
// new Promise((resolve ,reject)=>{
//   setTimeout(() => {
//     resolve("正确")
//   }, 2000);
// }).then((data)=>{
//   console.log(data)
  
//   // return Promise.reject("error message")
//   // 手动抛出异常
//   throw "errpr message"
// }).catch((err)=>{
//   console.log(err)
// })
// let isResult1 =false
// let isResult2 =false
// $ajax({
//   url:'',
//   success:function(){
//     console.log("结果一")
//     isResult1 = true
//     handleResult()
//   }
// })
// $ajax({
//   url:'',
//   success:function(){
//     console.log("结果二")
//     isResult2 = true
//     handleResult()
//   }
// })
// function handleResult(){
//   if(isResult1 &&isResult2 ){

//   }
// }
// // promise ajax实现
// Promise.all([
//   new Promise((resolve ,reject)=>{
//     $ajax({
//       url:"",
//       success:function(){
//         resolve("请求一")
//       }
//     }).then(()=>{})
//   }),
//   new Promise((reslove , reject)=>{
//     $ajax({
//       url:'',
//       success:function(){
//         resolve("请求二")
//       }
//     })
//   }).then(()=>{})
// ]).then(()=>{
  
// })
Promise.all([
  new Promise ((resolve , reject)=>{
    setTimeout(() => {
      resolve("请求一")
      reject("错误一")
    }, 5000);
  }).catch(err=>{
    console.log(err)
  }),
  new Promise ((resolve ,reject) =>{
    setTimeout(() => {
      resolve("请求二")
      reject("错误二")
    }, 2000);
  }).catch((err)=>{
    console.log(err)
  }),
]).then(results =>{
  console.log(results)
})