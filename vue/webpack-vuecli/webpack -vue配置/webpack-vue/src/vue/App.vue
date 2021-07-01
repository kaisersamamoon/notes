<template>
    <div>
      <h3>这是一个组件</h3>
        <h3>{{message}}</h3>
        <button @click="btnclick">按钮</button>
        <div>
          <footer>这是头部</footer>
          <header>这是中间</header>
        </div>
        <div>
          <Child></Child>
        </div>
    </div>
</template> 
<script>
import Child from './Child.vue'
export default {
  
  name:"App",
  data() {
    return {
      message:"this is App.vue"
    }
  },
  methods: {
    btnclick(){
      console.log(this.message)
    }
  },
  components:{Child},
}
</script>