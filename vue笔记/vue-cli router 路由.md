## 什么是 vue-router
	路由是一个网络工程里面的术语：
	路由 就是通过互联网吧信息从源地址传输到目的地址的活动 

路由器 提供两种机制 ：路由和转送
	路由是决定数据包从来源到目的地的路径
	转送是输入端的数据转移到合适的输出端
路由器有一个重要的概念叫路由表
	路由表本质上就是一个映射表 ，决定了数据包的指向



![](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210623205517890.png)



## 后端路由 后端路由阶段
早期的网站开发整个HTML页面是由服务器来渲染
	服务器直接生产渲染好对应的HTML页面 ，返回给客服端进行展示
	
## 什么是前端渲染 什么是后端渲染

	但是一个网站，那么多页面服务器如何处理呢？
		一个页面有自己对应的网址，也就是URL
		URL会发送到服务器 ，服务器会通过正则对该URL进行匹配 并且最后交给一个controller进行处理
		controller进行各种处理 ，最终生成HTML或者数据，返回给前端
		这就完成了一个IO操作
	上面的这种操作就叫后端路由。
		当我们页面中需要请求不同路径内容的时候，交给服务器来进行处理，服务器渲染好整个页面，并且将页面返回给客户端。
		这种情况下 渲染好的页面，不需要单独加载任何的js 和 css 可以直接交给浏览器展示 ，这样有利于SEO的优化。

![](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210623212941462.png)


#### 后端路由的缺点
	整个页面的模块由后端人员来编写和维护
	前端人员要开发页面 需要通过PHP 、JAVA 等语言来进行编写页面代码
	html 代码 和数据 以及对应的逻辑混在一起  维护困难



## 前后端分离 
#### 前后端分离 后端只负责提供数据 不负责任何阶段的内容

![image-20210623221325244](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210623221325244.png)

​	

#### 前端渲染：浏览器中显示的网页中的大部分内容 。都是由前端写的JS代码，在浏览器中执行，最终渲染出来的网页。
	随着Ajax的出现，有了前后端分离的开发模式。
	后端只负责提供API 来返回数据 ，前端通过Ajax 获取数据 并且可以通过javascript 将数据渲染到页面中
	这样做最大的优点就是前后端责任的清晰 ，后端专注于数据尚，前端专注于交互和可视化上。
	并且当移动端（ios/android）出现后 后端不需要进行任何处理 ，依然使用之前的一套API即可
	目前很多网站依然采用这种开发模式 

## 单页面复用阶段 前端路由阶段

	其实SPA最主要的特点就是在前后端分离的基础上加了一成前端路由
	也就是前端来维护一套路由规则

![image-20210624183105983](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210624183105983.png)
	当更改页面URL 页面不会进行整体的刷新 会根据路由规则 分离出对应的html +css +js 的组件 

## 前端路由 hash  和HTML 5 的 history 
#### 在页面不刷新的情况下改变 页面的Url 
	  1.通过更改页面的hash
		location.hash = "about"
	  2.通过HTML 5的 history
		histroy.pushState({},"","home")

![image-20210624184920322](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210624184920322.png)

 **栈结构 只有一个入口和出口 ,在栈里面 先进去的后出来**
	history.pushState():进栈 有历史记录 前进
	history.back():出栈 有记录 后退
	history.replaceStace({},"","about") :无历史记录 替换
	history.go(-1/1) 根据历史记录前进或者后退
	history.forword({},"","") 等价于 history.go(1)



## 认识vue- router
	目前前端流行的三大框架 ，都有自己的路由实现：
	Angular 的 ngRouter
	React 的  ReactRouter
	Vue 的 vue-router

## 配置Vue-Router 
   	1. 安装 vue-router 插件  npm install vue-router -save
   	2. 在模块化工程 （因为他是一个插件 所以可以通过vue.user()来安装路由功能）
   	   1. 导入路由对象
   	   2. 创建路由实例
   	   3. 在vue实例来挂载创建的路由实例
   	3. 使用vue-router 的步骤
   	 1. 创建路由组件
   	 2. 配置路由映射：组件和路径映射关系
   	 3. 使用路由 通过**<router-link>**和**<router-view>**

** 创建路由对象**

```js
// 第一步导入路由插件
import VueRouter from "vue-router"
// 导入Vue
import Vue from "vue"
// 通过Vue.use(插件) 安装插件
Vue.use(VueRouter)
// 创建VueRouter 对象

const routers = [

]
const router = new VueRouter({
  // 配置路由组件之间的关系
  routers
})
//导出
export default router
```





#### 创建路由对象

"../template"


1. home组件 
```
<template>
	<h3>这个是首页</h3>
</template>
<script>
	export default {
		name:"Home"
	}
</script>
```
2 About组件

```
<template>
	<h3>这个是关于页</h3>
</template>
<script>
	export default{
		name:"About"
	}
</script>
```

#### 配置路由

"../router/main.js"

```
导入
import Home from "../template/Home"
import About from "../template/About"

const routes = {
//配置路由
	{
		path:"/Home",
		template:"Home"
	},
	{
		path:"/Home",
		template:"About"
	}
}
```

#### Vue 实例挂载 

"../ App.vue"

```
	<template>
		<div id = "App">
			//使用路由
			<router-link to = "home">首页</router-link>
			<router -link to ="about"> 关于</router-link>
			//占位
			<router-view><router-view>
		</div>
	</template>
```

1. <router-link></router-link>:该标签是一个vue-router中已经内置的组件 ，他会被渲染成一个<a>标签

2. <router-veiw></router-view>：该标签会根据单签的路径，动态的渲染出不同的组件，

3. 网页的其他内容，比如顶部的标题、导航 或者底部的一些版权信息 等会跟<router-view></router-view>处在同一个等级
4. 在路由切换时，切换的是<router-view>挂载的组件 ，其他内容不会发生改变



## 路由的默认路径

	在默认情况下 进入网站的首页 我们希望<rouder-view>渲染首页的内容
	我们可以通过配置映射就可以实现
```
const roudes = {
	{
		path:"/",
		redirect:'/Home'
	}
}
```
**通过在roudes 又配置一个映射**
**path 配置的是根目录:/**
**redirect :是重定位 ，也就是我们将根路径重定向到/Home 这样就默认进入网站的首页了**


## 默认路由 routes 为hash 模式
通过 
const routes =new VueRouter {
	routes,
	//更改为HTML 5 history模式
	mode:"history"
}

## router -link 详细讲解

1. to 属性： 用于指定跳转的路径
2. tag 属性 ：可以指定root -link属性 之后渲染成什么组件 li 或者 a 其他
3. replace 不保留历史记录 禁止来回跳转

![image-20210624224424370](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210624224424370.png)

当router -link 对应的路由匹配成功的时候 会自动给当前元素设置一个 router-link-active 的class
知道这个特点 我们可以做很多事 
比如 点击谁，谁的背景变红就很简单了
但是这个类有点长 我们向自己给他一个class类咋办：

```
<router-link to="/home" tag="div" class="nav" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="div" class="nav" replace active-class="active">关于</router-link>
```
这是方法一 在 router-link 里面修改 active -class 就可以了
方法二：
```
	const router = new VueRouter({
  routes,
  // 更改路由模式
  mode:'history',
  linkActiveClass:"active"
})
```
直接在路由这里统一设置 

 

##  自定义实现路由跳转



```

//每个组件都有$router这个属性
//切记不要跳过router 去实现跳转
methods:{
	homeclick(){
		//带历史记录跳转
		this.$router.push('/Home')
		//不带历史记录
		this.$router.replace('/Home')
	},
	aboutclick(){
		this.$router.push('/About')
		this.$router.replace('/about')
	}
}
```

## 组件
```
	vue.use() //安装组件，组件都需要通过vue.use 进行安装

```

## 动态路由
	1.希望 谁点击组件 URL后面就显示谁的Id 该怎么做
	采用v-bind 动态绑定
		1. 路由配置：
		```
			path:"/User/:lisi",
			template:"User"
		```
		2.路由挂载：
		```
			<router-link v-bind:to = "'/User'+UserId">我的</router-link>
		```
	2. 希望 显示出来后能 在组件里面展示这个Id ?
		```
	    	通过$route的方法 ;//这个方法能拿到当前活跃路由的数据
	    	computed:{
	    		UserId(){
	    				return this.$route.UserId
	    		}
	    	}
	    //方阿飞一 
	    	coputed(){
	    		userid(){
	    			return this.$route.params.userId
	    		}
	    	}
	    //方法二 
	    	coputed(){
	    		userid(){
	    			return this.$parent.userId
	    		}
	    	}
	    ```



## 路由的懒加载
	当我们在打包构建时， javascript 包会变得非常大 影响页面加载
	如果我们能把不同路由对应的组件分割成不同的代码块 ，然后路由被访问时才加载对应组件 ，这样就更加高效了。


​	
​	#### 懒加载的三种方式：
​	方式一：结合vue 异步组件贺webpack的代码分析
​		```
​		const Home = resolve =>{require.ensure(['../components/Home.vue'],()=>
​		{resolve(require('../components/Home.vue'))})}
​		```
​	方式二：AMD写法
​	```
​	const About = resolve=>require(['../components/About.vue'],resolve)
​	```
​	方式三： 在ES6中 我们有了更加简单的写法来组织Vue 异步组件 和 webpack 的代码分割。
​	```
​	const Home=>import('../components/Home.vue')
​	```

## router 传递参数的方式
	#### params 的类型：
		1. 配置路由格式：/router/:id
		2. 传递的方式：在path 后面跟上对应的名字
		3. 传递后形成的路径:/router/123 ./router/msgURL
	#### query 的类型：
		1. 配置路由格式：/router ,也就是普通配置
		2. 传递的方式 : 对象中使用query 的key 作为传递方式
		3. 传递后形成的 路径： /router?id=123 ,/router?id = msgURL
URL格式：协议://主机:端口/路径？查询#片段
		scheme://host:port/path?query#pragments

## 全局导航守卫 before Each and after Each

​	直接在router 使用 beforeEach 或者 afterEach 钩子 为全局守卫

	对路由的跳转过程进行监听：
	有时候我们需要在路由跳转的时候做一些事情 这时候我们就可以使用全局导航守卫
	```
	index.js
	//该属性接受一个函数 函数里面需要三个参数
	from:原路由
	to:目标路由
	next 必须实现 表示继续执行下一次操作
	
	#### 为什么使用导航守卫
		需求：在一个SPA 应用中 如何改变网页的标题呢？
			网页标题是通过<title>来显示的，但是SPA 只有一个固定的 HTML ，切换不同的页面时 标题并不会改变
			但是我们可以通过javascript ；来修改<title>的内容 window.document.title = "新的标题"
			那么在Vue项目中 在哪里修改？ 什么时候修改比较合适呢？


​	

解决方案 使用 导航守卫来实现：

​	1.定义每个路由的元数据（meta）

​	2. beforeEach 前置钩子


```
//路由跳转前改变属性
router.beforEach((to ,from ,next)=>{
	document.title = to.matched[0].meta.title
	next()
})
```

​		3. 后置钩子 afterEach



##  路由独享守卫 before Enter

​		直接在路由配置上定义beforeEnter守卫 参数与全局守卫一样 

不同的是

beforeEnter :表示进入之前 的回调函数

```
beforeEnter:((to ,from ,next)=>{----})
```



​	

##  组件内的守卫 before Router Enter 

组件内的守卫

	#### beforRouterEnter （to，from ,next） 渲染前

在渲染该组件的对应的路由被confirm 前调用

不能获取组件实例的this

因为当守卫执行前 组件实例还没被创建

	#### beforeRouterUpdate（to，from ,next）更改前

在当前路由改变，但当前组件被复用时调用

可以访问组件实例的this

	#### beforeRouterLeave（to，from ,next）



导航离开组件的对应路由时调用

可以访问组件实例 this

#### 其他请见官网

