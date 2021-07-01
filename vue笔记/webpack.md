



## **什么是webpack**

从本质上来讲，webpack是一个现代的javascript应用的静态模块化打包工具，

**核心：模块 ，打包**

webpack其中的一个核心就是让我们可以进行模块化开发，并且会帮助我们处理模块之间的依赖关系。

**与grunt /glup的区别**

grunt /gulp 的核心是Task

我们可以配置一系列的task,并且定义task要处理的事务，（例如ES6，ts转换，图片压缩，scss转换css）



之后让grount/gulp来依次执行这些task，而且让整个流程自动化

所以grount/gulp也被称为前端自动化任务管理工具

![image-20210616213115056](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210616213115056.png)

## **webpack 的安装**

webpack 依赖node

node 依赖包含各种包s

npm(包管理工具)

webpack 安装

安装webpack需要需要安装node.js node.js自带了软件管理工具npm 

查看自己的node版本

```
node -v
//全局安装 
npm install webpack@3.6.0 -g

//局部安装(是开发时依赖，项目打包后不需要继续使用的)
//首先 
cd 对应目录
npm install webpack@36.0 --save-dev
```





## **webpack的起步**

```
//打包指令
cd 对应的文件目录
webpack 需要打包的目标目录/需要打包的文件 打包储存位置/打包完后的文件名
```

![image-20210617200418447](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210617200418447.png)

表示打包成功

模块化 不管你是commonJS 还是ES6 都能实现一键打包



## **webpack的配置**

webpack 入口文件  出口文件 映射 配置

![image-20210618204119960](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210618204119960.png)

***配置webpack入口出口文件***

```
//第一步需要导入node包管理文件
npm init
//第二部需要对文件进行初始化
npm install
这里依赖node里面的path包模块
通过path里面的resolve 动态的获取导出文件的绝对路径
```





![image-20210618205151794](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210618205151794.png)

```
//运行项目
npm run serve
//通过在package.json配置文件配置
//打包项目
npm run build
```



## **webpack的使用**

**在项目中。我们不止会用到js文件 ，我们还需要用到css ,.vue等一系列文件 ，对于这一系列文件 我们又该如何**

打包css样式

这时候就可以使用另一个模块了

**loader**

文件结构图

![image-20210618213025438](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210618213025438.png)

**webpack打包机制：**

只会打包你入口文件所依赖的文件，所以我们需要在入口文件导入css文件

![image-20210618213226101](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210618213226101.png)

**执行文件**

![image-20210618213317373](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210618213317373.png)

但是报错了
css-loader 只负责将css文件加载
style-loader 负责将样式添加到dom树上面
导入多个loader时 ，加载顺序为从右到左

```
//安装css-loader模块 注意版本问题
	npm install --save-dev css-loader
//安装 style-loader模块
	npm install --save-dev style-loader
```

**css打包配置**

![image-20210618233923413](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210618233923413.png)

注意style 跟css  顺序 loader编译是从右到左

**less文件打包**

```
//打包less文件
//less 文件负责文件加载 less-loader 转换less文件
 npm install less less-loader --save-dev
 //webpack,config.js配置loader 
 //rules下配置
 {
        test: /\.less$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          },
        ],
      },
 
```

**图片打包**

```
//对于图片文件这种静态资源文件打包方法采用
npm install url-loader --save-dev
//同样需要在webpack.config.js文件对该loader进行配置

```

注意该loader在webpack5后开始弃用，

相关还有raw-loader file-loader

官方给出替代方案

```
asset/resource
asset/inline
asset/source
```

**ES6语法处理**

使用bable loader

将ES6的代码转换成ES5

```
//需要安装核心。babel/core 以及bebal/preset
//env 环境
npm install -D babel-loader @babel/core @babel/preset-env webpack
//同样需要在webpack.config.js中进行配置
```

**==>webpack-vue.md**





## **plugin的使用**

plugin是什么？

plugin是一个插件 通常是用于对莫格现有的框架进行扩展

webpack中的插件就是对webpack现有的功能进行拓展，比如打包优化，文件压缩。

loader 主要用于转换某些类型的模块。他是一个转换器 and 加载器

plugin 是插件，它是对webpack本身的扩展，是一个扩展器。

**使用过程**

1. 安装
	```
	npm install 
	```
2. 配置
	webpack.config.js 
3. 

**==>plugin.md**



## **搭建本地服务器**

