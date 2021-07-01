##  vuex

vuex 是一个专门为 vue.js 应用程序开发的状态管理模式

它采用集中式储存管理 应用的所有组件的状态 并以相应的规则来保证状态以一种可预测的方式发生变化。

#### vuex 是状态管理模式 集中式储存管理

​	1.各组件共享的变量全部储存在一个对象里面 

 2. 把这个对象放在顶层vue实例中 ，让其他组件都可以使用

 3. 多个组件就可以共享这个对象中的所有的变量属性了

    

## 单页面状态管理

![image-20210627195224527](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210627195224527.png)

state :状态 data

view :视图  

Actions: 操作  事件





vuex安装与 router 一样 同样需要 对组件进行注册以及挂载

```
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

```

```
import  Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    counter:1000
  },
  mutations:{
  
  },
  actions:{
  
  },
  getters:{
  
  },
  modules:{
  
  }

})
export default store
```

## vuex 核心概念



#### state 类似于 data 状态 属性  （保存状态的地方）

#### Getters 类似于 computed 计算属性

#### Mutation  类似于methods  方法

#### Action 主要进行一些异步操作

#### Module 模块



#### state 单一状态树（	单一数据源）

用于放状态相关的信息的





#### mutation 的提交风格：

1. 普通的提交方式：

   ```
   methods:{
   	subtion(){
   	//不携带参数
   		this.$store.commit('increment')
   	},
   	addtion(){
   	//count 负载(payload) 传输过程中 格外携带的一些参数
   	this.$store.commit('increment',count)
   	}
   }
   ```

   

2. 对象形式：

   ```
   methods:{
   	addtion(){
   		this.store.commit({
   		//count 负载(payload) 传输过程中 格外携带的一些参数
   		type:'increment',
   		count
   		})
   	}
   }
   
   mutations:{
       // 事件类型
       increment(state){
         // 回调函数
         state.counter++
       },
       decrement(state){
         state.counter--
       },
       // count 负载(payload) 传输过程中 格外携带的一些参数
       incrementCount(state,count){
         state.counter +=count
       },
        当以对象的形式带负载 这里的payload就是一个对象 里面包含 事件类型 以及 携带的参数、负载
       classCount(state,payload){
         console.log(payload.count)
         state.counter +=payload.count
       }
     },
     actions:{
     
     },
   ```

   ## Mutation 响应规则

   vuex 中的 state 是响应式的 当 state 中 的数据发生改变时 Vue 组件会自动更新

   
