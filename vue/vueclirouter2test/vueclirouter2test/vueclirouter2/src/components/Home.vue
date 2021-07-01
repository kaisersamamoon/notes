<template>
 <div>
    <h3>这是主页</h3>
    <router-link to="/Home/News" tag="span" >消息</router-link>
    <router-link to="/Home/Message" tag="span" >内容</router-link>
    <router-view></router-view>
 </div>
</template>
<script>
export default {
  name:"Home",
}
</script>
<style  scoped>

</style>