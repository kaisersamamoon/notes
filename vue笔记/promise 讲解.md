## promise 详细讲解

promise 是一种异步编程的方案 

```js
new Promise((resolve ,reject)=>{
  setTimeout(() => {
    resolve()
  }, 5000);
}).then(()=>{
  console.log("第一次调用")
  return new Promise((resolve ,reject)=>{
    setTimeout(() => {
      resolve()
    }, 5000);
  })
}).then(()=>{
  console.log("第二次调用")
})
```

一般用于异步操作

## promise 三种状态

1. pending :等待状态 比如正在进行网络请求 或者定时器 没有到时间

		2. fulfill 满足状态 当我们主动回调了 resolve 时 就处于该状态 并且会回调 .then()
  		3. reject 拒绝状态 当我们主动回调了 reject 时 就处于该状态 并且会回调  .catch()
       		1. promise 传入两个回调函数  一个在成功的时候回调 一个在失败的时候回调

```js
new Promise((resolve ,reject)=>{
  setTimeout(() => {
    // 成功的时候调用then
    resolve("请求成功")
    // 失败的时候调用catch
    reject("error message")
  }, 2000);
}).then((data)=>{
  console.log(data)
  console.log(data)
  console.log(data)
  console.log(data)
  console.log(data)
}).catch((err)=>{
  console.log(err)
})
```

2. then里面传入两个函数 一个成功 一个失败

   ```js
   new Promise((resolve,reject)=>{
     setTimeout(() => {
       // resolve("成功")
       reject("Error Data")
     }, 2000);
   }).then(data=>{
     console.log(data)
   },err=>{
     console.log(err)
   })
   ```

   ## promise 链式调用

   第一种方式

   ```js
   new Promise((resolve ,reject)=>{
     setTimeout(() => {
       resolve("111")
     }, 2000);
   }).then(data =>{
     console.log(data)
     return new Promise((resolve ,reject)=>{
       setTimeout(() => {
         resolve(data +"aaa")
       }, 2000);
     })
   }).then((data)=>{
     console.log(data)
     return new Promise((resolve ,reject) =>{
       setTimeout(() => {
         resolve(data +"bbb")
       }, 2000);
     })
   }).then(data=>{
     console.log(data)
   })
   ```

   第二种方式 Promise 简写

   ```js
   new Promise(resolve=>{
     setTimeout(() => {
       resolve("111")
     }, 2000);
   }).then(data =>{
     console.log(data)
     return Promise.resolve(data +"aaa")
   }).then(data=>{
     console.log(data)
     return Promise.resolve(data +"bbb")
   }).then(data=>{
     console.log(data)
   })
   
   ```

   第三种 简写

   ```js
   new Promise(resolve=>{
     setTimeout(() => {
       resolve("111")
     }, 2000);
   }).then(data =>{
     console.log(data)
     return data +"aaa"
   }).then(data=>{
     console.log(data)
     return data +"bbb"
   }).then(data=>{
     console.log(data)
   })
   ```

   

异常抛出

```js
// 异常抛出
new Promise((resolve ,reject)=>{
  setTimeout(() => {
    resolve("正确")
  }, 2000);
}).then((data)=>{
  console.log(data)
  
  // return Promise.reject("error message")
  // 手动抛出异常
  throw "errpr message"
}).catch((err)=>{
  console.log(err)
})
```

## 有时候我们 会遇到 当两个异步请求完成才能进行下一步操作  

## promise all方法的使用



#### 1.ajax 写法

```js
let isResult1 =false
let isResult2 =false
$ajax({
  url:'',
  success:function(){
    console.log("结果一")
    isResult1 = true
    handleResult()
  }
})
$ajax({
  url:'',
  success:function(){
    console.log("结果二")
    isResult2 = true
    handleResult()
  }
})
function handleResult(){
  if(isResult1 &&isResult2 ){

  }
}
```

 #### 2.promise 写法 使用promise.all方法

```
// promise ajax实现
Promise.all([
  new Promise((resolve ,reject)=>{
    $ajax({
      url:"",
      success:function(){
        resolve("请求一")
      }
    }).then(()=>{})
  }),
  new Promise((reslove , reject)=>{
    $ajax({
      url:'',
      success:function(){
        resolve("请求二")
      }
    })
  }).then(()=>{})
]).then(()=>{
  
})
```

#### promise .all

```js
Promise.all([
  new Promise ((resolve , reject)=>{
    setTimeout(() => {
      resolve("请求一")
    }, 2000);
  }),
  new Promise ((resolve ,reject) =>{
    setTimeout(() => {
      resolve("请求二")
    }, 2000);
  }),
]).then(results =>{
  console.log(results)
})
```



```js
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
```





 ## 自定义实现promise 

