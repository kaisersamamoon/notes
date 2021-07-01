第一步

安装node.js

安装vue-cli
1、使用npm（前提是电脑上已经安装node环境才能使用npm哦）全局安装webpack，在命令行中输入:

```
npm install webpack -g
```

等待一会就能安装上了，安装完成之后可以输入

```
webpack-v
```

 进行查看是否安装上，一般都能上。

2、全局安装vue-cli，命令行中输入:

1.或者你可以注册cnpm 来代替npm

使用命令：

```
npm install cnpm -g --registry=https://registry.npm.taobao.org
```

　如果你发现你安装成功了，使用cnpm却发现找不到命令，那么就是你的环境变量有问题，在环境变量里面的path添加你node的安装路径就行，比如";C:\Program Files\nodejs\node_modules"

2.

```
npm install --g vue-cli
```



3、安装依赖：npm install

安装完成之后cd到自己刚才新建的项目
进入之后输入命令：

```
npm install 
```

这个命令会自动下载项目中所有用到的依赖（ps:这以后做项目时也不上传自己的node_modules文件夹）
安装完成之后项目中会多一个node_modules文件夹，文件中夹中就是项目运行时所用的全部依赖。



到这里就安装完成了，可以运行一下项目，运行方式是在项目文件夹中打开命令行工具，输入：

```
cd 
```



```
npm run dev
```

 打开浏览器输入默认端口地址，就可以看到vue-cli默认的一个页面 



# [VUE-CLI脚手架的搭建过程](https://www.cnblogs.com/yshang/p/11238513.html)

1、安装**node js**

　　下载地址：**http://nodejs.cn/download/**
2、安装完成后运行**Node.js command prompt**（**node -v**查看安装版本）

　　![img](https://images2015.cnblogs.com/blog/220339/201706/220339-20170621234026429-885976360.jpg)
3、安装npm（由于现在版本的nodejs已经集成npm所以无需安装，可以用**npm -v** 查看版本）

　　![img](https://images2015.cnblogs.com/blog/220339/201706/220339-20170621234402585-682142364.jpg)
4、注册cnpm来代替npm
　　使用命令：**npm install cnpm -g --registry=https://registry.npm.taobao.org**

　　如果你发现你安装成功了，使用cnpm却发现找不到命令，那么就是你的环境变量有问题，在环境变量里面的path添加你node的安装路径就行，比如";C:\Program Files\nodejs\node_modules"

5、安装vue脚手架vue-cli
　　命令：**cnpm install -g vue-cli**

　　安装成功后可以用 **vue -V** 查看vue版本
6、cd到对应的目录下初始化vue项目
　　命令：**vue init webpack my-project**
　　　　　　Project name 项目名 
　　　　　　Project description 项目名描述 
　　　　　　Author 作者邮箱 
　　　　　　Use ESLint to lint your code? 是否需要ESlist语法检查 
　　　　　　Setup unit tests with Karma + Mocha? 是否需要单元测试 
　　　　　　Setup e2e tests with Nightwatch? Yes是否需要e2e测试 
7、**package.json**为项目依赖资源，如果要运行这个项目需要使用**cnpm install** 安装依赖项（直接在项目文件夹路径下执行）
8、使用命令**cnpm run dev**启动项目，浏览器会打开 http://localhost:8080/#/ 看到以下效果

   ![img](https://images2015.cnblogs.com/blog/220339/201706/220339-20170621233715491-793113074.jpg)

　　开发时属于热部署状态，代码保存后浏览器会自动刷新，错误提示也非常友好。

 

9、编译打包 **cnpm run build**

　　会编译打包到项目dist文件夹下，然后我们就可以部署到服务器上（注意：如果你直接打开index.html，可能页面会是一片空白，这是由于你引用的js路径有问题）

   ![img](https://images2015.cnblogs.com/blog/220339/201706/220339-20170622000252460-992686199.jpg)

10、安装axios插件　

```
　　cnpm install axios//生产环境
　　npm install --save axios vue-axios//测试环境
　　两者都下载
　　在 main.js 中写入以下内容：
　　import Vue from 'vue'
　　import axios from 'axios'
　　import VueAxios from 'vue-axios' 
　　Vue.use(VueAxios, axios)　　在页面中的用法：
　　Vue.axios.get(api).then((response) => {
  　　console.log(response.data)
　　})
　　this.axios.get(api).then((response) => {
  　　console.log(response.data)
　　}) 
　　this.$http.get(api).then((response) => {
  　　console.log(response.data)
　　})
　　或者在 main.js 中写入以下内容：
```

　　　　import axios from 'axios'
　　　　Vue.prototype.$axios = axios

　　使用页面

```
　　this.$axios.get(api).then((response) => {
  　　console.log(response.data)
　　})11、安装jquery依赖
　　npm install jquery --save
　　在 main.js 中写入以下内容：
　　　　import $ from 'jquery' 
12、脚手架目录介绍
```

​     ![img](https://img2018.cnblogs.com/blog/910770/201907/910770-20190724154820440-472142873.png)