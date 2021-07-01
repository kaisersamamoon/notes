// import { sum , texte, magin} from "./math.js";
// commonJs
const {sum, texte ,magin,message} = require("./js/math.js")
import { names ,age ,height} from "./js/ES6.js"
// 通过对组件封装进一个文件 进行导入
// 这里两个组件由于是父子组件存在相互依赖,故导入父组件即可
// import { app } from "./vue/app.js"
// 另一种方式
// 引入Vue
import Vue from 'vue'
// 引入组件
import App from './vue/App.vue'
// 引入css文件
require("./css/normal.css")

if(magin){
  console.log(sum(20,10))
  console.log(texte)
  console.log(names)
  console.log(age)
  console.log(height);
  console.log(message);
};

new Vue({
  el:"#app", 
  template :`<App/>`,
  components:{
    App
  },
})
