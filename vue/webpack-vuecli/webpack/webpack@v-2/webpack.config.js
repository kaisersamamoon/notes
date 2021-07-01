// 导入path模块
const path = require("path")
const { dirname } = require("path/posix")
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
    publicPath:"dist/"
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
    ],
    
  },

}