## plugin扩展

#### 版权标注插件

1. webpack自带的插件

  

  ```
  	const webpack = require("webpack")
  	
  ```

![image-20210620183716216](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210620183716216.png)

2. 配置详情：
	```
	plugins:[
		new webpack.BannerPlugin("最终版权归...所有")
	
	]
	```
	
3. 运行结果

   ![image-20210620185120203](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210620185120203.png)

#### html模板生成

​	生成html文件

1. 安装插件

   ```
   npm install html-webpack-plugin --save-dev
   
   ```

2. 配置插件

   ```
   //引入插件
   const htmlwebpackplugin = require("html-webpack-plugin")
   
   //配置插件
   //指定生成模板模板   
   plugin:[
   	new htmlwebpackplugin({
   		template:"index.html"
   		//指定插入位置
   		inject:"body"
   	})
   ]
   ```

   3. 生成文件

      ![image-20210620192334964](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210620192334964.png)

   #### js压缩的plugin
	对js文件进行压缩处理
   1. 安装插件

      ```
      	npm install uglifyjs-plugin --save-dev
      ```

   2. 配置插件
   
      ```
      const uglifyjsplugin = require("uglifyjs-plugin")
      ```
   
      ```
      plugin:[
      	new uglifyjsplugin()
      ]
      ```
   
   3. 高版本以及舍弃这个功能
   
      <img src="C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210620211002613.png" alt="image-20210620211002613" style="zoom:200%;" />
   
      指定模式
   
      ![image-20210620211038701](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210620211038701.png)
   
      生产模式 或者开发模式
   
      development  or  production
