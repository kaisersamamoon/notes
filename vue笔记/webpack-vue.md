
## **weboack中配置Vue**

**vue -webpack**

首先还是需要安装导入vue模块

```
//注意这里不需要加上dev 
npm install vue --save
同时需要在主函数导入vue模块
import Vue from "Vue"
现在就可以使用Vue了

```

在以前构建vue程序需要在html js 之间频繁跳转

在真实的开发中 很少在html文件书写代码

通常采用

template 在vue实例中书写html代码

在打包过程中vue会自动将template中的文档结构替换到挂载点

```
new Vue({
  el:"#app", 
  template:`
  <div>
    <h3>{{message}}</h3>
    <button @click = "btnClick">按钮</button>
  </div>
  `,
  data:{
    message:"this is Vue"
  },
  methods: {
    btnClick(){
      console.log(message)
    }
  },
})
```

**vue 文件分离**

```
****main.js
//引入组件 
import {parent} form "./vue/parent.js"
new Vue({
el:"#App",

components:{parent}
template:"</parent>"
})
```



```
const parent = {
	template :`
	 <div>
    <h3>{{message}}</h3>
    <button @click = "btnClick">按钮</button>
    <parent/>
  </div>
	`,
	data(){
		return{
			message:"this is parent"
		}
	},
	methods:{
		btnClick(){
			console.log{"this is parent"}
		}
	}
}
//导出组件
export {parent}
```
这样 vue 实例与组件就分离成两个文件了 

**vue文件封装处理**
1.将组件单独封装成一个文件

需要安装 vue-loader  and  vue-template-compiler

1.vue-loader 加载并编译 template文件
2.vue-template-compiler   解析template文件

```
npm install vue-loader vue-template-compiler --save-dev

```
2.配置

```
{
tist:/\.vue$/,
use:['vue-loader']
}
```

模板抽离

创建一个vue组件

```
<template>
	<div>
		<h3>这是一个组件</h3>
	</div>
</template>
<script>
export default{
name:"App",
data(){
	return{
		message:"this is vue"
	}
}
}
</script>
<style>

</style>
```



3.

主函数导入

```
//导入vue
import Vue from "vue"
//导入组件
import App from "./vue/App.vue"

new Vue({
	el:"#App",
	template:`<App/>`,
	components:{App}
})
```

