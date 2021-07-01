// 导入path模块
const path = require("path")
const { dirname } = require("path/posix")
const webpack= require("webpack")
// html 文件生成插件
const htmlwebpackplugin = require("html-webpack-plugin")

module.exports = {
  // 入口
  entry:"./src/index.js",
  // 出口
  output:{
    // 路径node里面的
    path:path.resolve(__dirname,"dist"),
    // 文件名
    filename:"bundle.js",
    // 注意新版本的webpack可以不配置这个
    // publicPath:"dist/"
  },
  // css-loader and style-loader 模块配置
  module:{
    rules: [
      // 配置style and css-loader
      {
        test: /\.css$/i,
        use: ["style-loader" ,  "css-loader"]
      },
      // 配置less-loader
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
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 6000,
            // 自定义打包路径及名字
            // []表示变量
            name:"img/[name].[hash:8].[ext]"
            },
            
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // {
      //   test:'/\.vue$/',
      //   use:["vue-loader"]
      // },
      { test: /\.vue$/, use: 'vue-loader' }
    ],
   
    
  },
  resolve:{
    // 
    // 别名
    // 指定发布版本
    // 省略后缀名相关配置

    alias:{
      "vue$":"vue/dist/vue.esm.js"
    }
  },
  plugins:[
    new webpack.BannerPlugin("最终版权归aaa所有"),
    // html文件生成
    new htmlwebpackplugin({
      template:"index.html",
      // 指定插入位置
      inject:"body"
    }),

  ],
}