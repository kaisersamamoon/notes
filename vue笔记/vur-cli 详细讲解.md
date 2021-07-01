#### runtime-only  与runtime- template 的区别

![image-20210622200802242](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210622200802242.png)

runtime -only 性能更高 代码量更少

![image-20210622193822851](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210622193822851.png) 

这里的H s是一个函数 createElement

直接省略前面的template => 解析 成 ast  这一步  直接编译成render函数

这里的App是一个组件 在传入的时候就以及编译成了一个render函数

可以在挂载前concole,log()查看一下

render函数 

```
render:function(creatElment){
	return creatElment(App)
	
}
//上面截图是简写
```



**runtime-template 执行过程 ：**

 template =>ast => render => vdom = >ui

**runtime-only 执行步骤：**

render =>vdom => ui



#### 那template =>ast这一步是由谁处理的呢？

![image-20210622195831244](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210622195831244.png)

答案就在这里 

vue-template-complier：

在前面配置vue的时候安装过两个文件

vue-loader :加载并编译template文件

vue-template-conplier  解析template文件

所以在组件传入的时候 他就已经帮我们吧组件转换成render函数了



#### npm run build 执行解析：

![image-20210622203833947](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210622203833947.png)



#### npm run dev执行解析:

![image-20210622204007738](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210622204007738.png)



#### vue cli2 与vue cli3的版本区别
1. vue cli 3 基于webpack 4
2. vue cli2 基于webpack 3
3. vue cli 3 的设计原则是"0配置" ，移除的基本文件下的 build 和config 等目录
4. vue cli 3 提供了 vue ui 命令 提供了 可视化配置 更加人性化
5. 移除了static 文件夹 新增了public 文件夹 并且 index。html 移动到pubblic

![image-20210622205138733](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210622205138733.png)



#### 目录结构解析

![image-20210623164908768](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210623164908768.png)


#### 修改配置文件
如果需要自己修改vue相关配置：
在项目下创建一个vue.config.js的文件
 ```
 nodule.exports ={
 	//在这里进行配置
 	
 }
 ```
 后面进行详细讲解
 
