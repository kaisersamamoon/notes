<template>
  <div>
    <h3>这是一个子组件</h3>
    <h5>{{message}}</h5>
  </div>
</template>
<script>
  export default{
    name:"Child",
    data() {
      return {
        message:"我是子组件"
      }
    },
  }
</script>
<style scoped>
  h3{
    background-color: blueviolet;
  }
</style>