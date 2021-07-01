<template>
  <div>
    <h3>用户界面</h3>
    <p>显示成功</p>
    <p>{{imgURL}}</p>
  </div>
</template>
<script>
export default {
  name:"User",
  computed:{
    imgURL(){
      // return this.$parent.imgURL
      // 注意这里的imgURL 必须跟你路由配置文件的名字一样
      return this.$route.params.imgURL
    }
  },

}
</script>