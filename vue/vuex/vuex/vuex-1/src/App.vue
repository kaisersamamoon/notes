<template>
  <div>
    <h3>{{message}}</h3>
    <!-- 公共状态属性 -->
    <h3>{{$store.state.counter}}</h3>
    <button @click="addition">+</button>
    <button @click="subtration">-</button>
    <button @click="incrementCount(5)">+5</button>
     <button @click="incrementCount(10)">+10</button>
     <!-- 特殊提交风格 -->
     <button @click="classCount(100)">对象形式提交</button>
    <!-- 公共计算属性-->
    <h3>{{$store.getters.getGreaterAgesCount}}</h3>
    <!-- 公共计算属性 -->
    <h3>{{$store.getters.getStudentsAge(20)}}</h3>
    <h3>{{$store.getters.getStudentsAgelen}}</h3>
   

    <hello></hello>
  </div>

</template>
<script>
import Hello from "./components/Hello.vue"
export default {
  name:"App",
  data() {
    return {
      message:"我是App组件",
    }
  },
  methods: {
    // 修改store里面的属性 
    // 必须通过commit来提交修改申请
    addition(){
      // 通过commit提交事件类型
      this.$store.commit('increment')
    },
    subtration(){
      this.$store.commit('decrement')
    },
    // 每次增加count数
    incrementCount(count){
      this.$store.commit('incrementCount',count)
    },
    //  mutations 特色的提交风格
    classCount(count){
      this.$store.commit({
        type:'classCount',
        count
      })
    }
  },
  components:{
    Hello
  }
}
</script>
<style lang="less">

</style>
