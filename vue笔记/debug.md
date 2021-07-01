## webpack 报错

webpack.json 配置文件当中

自定义打包指令报错

**错误代码：**

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
```

**报错信息**

提示未指定模式



![image-20210619001047229](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210619001047229.png)

```webpack

```

**解决方案：**

//修改为生产模式

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build":"webpack --mode production"
  },
```



## **webpack -vue**

## vue打包控制台报错



![image-20210619182250074](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210619182250074.png)

**报错信息：**

![image-20210619182312264](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210619182312264.png)

![image-20210619182928622](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210619182928622.png)

vue在构建的时候：在构建发布版本的时候，构建了两个版本

1.runtime-only :代码中 ，不可以有任何的template

2.runtime-compiler : 代码中可以有template 因为有compile 可以用域编译template.

**错误原因**

打包过程没有任何错误，只是打包了一个vue.js的文件

但是运行程序，没有出现想要的效果，而且浏览器报错

这个错误说我们使用的runtime-only版本的vue



**解决方案：**

修改webpack的配置

![image-20210619184736681](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210619184736681.png)


```
//通过在webpack配置文件指定发布版本
resolve:{
	alias:{
	//全称 es module
	"vue$":"vue/dist/vue.esm.js"
	}
}
默认版本为 vue.runtime.js
```





配置vue-loader出现的问题

![image-20210620165745995](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210620165745995.png)

--

![image-20210620165834707](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210620165834707.png)

注意正则表达式



**vue-loader**

![image-20210620172617479](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210620172617479.png)

报错信息显示缺少一个plugin这个插件

解决方案 降低版本 

或者安装这个插件

## vue 创建项目报错

![image-20210622185650944](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210622185650944.png)

解决方案

```
npm cache clean --force
```



并进入 ![image-20210622185814626](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210622185814626.png)

修改文件的 

```
useTaobaoRegistry”: true设置为false。
```





## 使用 守卫导航前置 后置钩子报错

![image-20210626153854493](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210626153854493.png) 



#### 错误原因

在于 es-lint 语法检测

#### 解决方案

修改配置文件

在配置文件加入

```
"rules": {
			"generator-star-spacing": "off",
				"no-tabs":"off",
				"no-unused-vars":"off",
				"no-console":"off",
				"no-irregular-whitespace":"off",
				"no-debugger": "off"
		}
```

或者在配置的时候不选择 es -lint



## 自定义路由跳转 多次点击 报错问题

![image-20210627014508983](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210627014508983.png)

#### 原因：

这是Vue-Router4.0之后版本常见的问题，我们重复点击同一个路由会造成router延时，路由冗余， 跳转过程中报错

#### 解决方案：

在点击事件结束后抛出一个catch事件即可

```
	//为了使双击不报错，所以在路由切换时抛出一个err
    this.$router.replace(this.path).catch(err=>err)
```

