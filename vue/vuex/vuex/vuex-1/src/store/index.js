import  Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    counter:1000,
    message:"属性",
    students:[
      {id:110 ,name:'why' ,age:18},
      {id:111 ,name:'kobe' ,age:21},
      {id:112 ,name:'lucy' ,age:17},
      {id:113 ,name:'lilei' ,age:30},
    ] ,

  },
  // 方法
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
    classCount(state,payload){
      console.log(payload.count)
      state.counter +=payload.count
    }
  },
  actions:{
  
  },
  // 计算属性
  getters:{
    getGreaterAgesCount:state =>{
      return state.counter *state.counter
    },
    getStudentsAge(state){
      // 过滤函数
      // 返回 年龄大于age的对象
      return function(age){
        return state.students.filter(s => s.age > age)
      }
    },
    // 定义一个方法来获取过滤函数中大于20的个数
    getStudentsAgelen(state ,getters){
      return getters.getStudentsAge.length
    }
  },
  modules:{
  
  }

})
export default store