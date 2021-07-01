<template>
  <div id="app">
    <!-- url 跳转 这是组件-->
    <h3>路由组件跳转</h3>
    <router-link to="/Home" tag="span" >首页</router-link>
    <router-link to="/about" tag="span" exact>关于</router-link>
    <router-link :to="'/User/'+imgURL" tag="span" exact>用户</router-link>
    <!-- query 方法 传递数据 -->
    <router-link :to="{path:'/Profile',query:{
      id:'11423',mesage:'userssd'
    }}" tag="span" >档案</router-link>
    <!-- <button @click="homeclick">首页</button><button @click="aboutclick">关于</button> -->
    <!--占位 路径改变  显示的位置-->
		<button type="button" @click="userclick">用户</button>
		<button type="button" @click="profileclick">档案</button>
		<keep-alive>
			<router-view/>
		</keep-alive>
			
		
    
  </div>
</template>

<script>
export default {
  name:"App",
  data() {
    return {
      userId:"lisi",
      imgURL:"App显示成功啦",
			
    }
  },
	methods:{
		// 点击跳转
		userclick(){
			this.$router.push('/User/' + this.imgURL)
		},
		// 点击跳转
		profileclick(){
			this.$router.push({
				path:'/Profile',
				query:{id:'11423',mesage:'userssd',}
			})
		},
		
	}
  
}
</script>


<style>
body{
  background-color: lightslategray;
  text-align: center;
    height: 100%;
    width: 100%;
    margin: 0 0;
}
*{
  margin: 1em 0; 
  padding: 0;
}
#app > span{
  margin: 10px 10px;
}
.active{
  color: red;
}
</style>
