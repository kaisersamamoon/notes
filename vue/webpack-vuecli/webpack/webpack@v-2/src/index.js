// import { sum , texte, magin} from "./math.js";
// commonJs
const {sum, texte ,magin,message} = require("./js/math.js")
import { names ,age ,height} from "./js/ES6.js"

if(magin){
  console.log(sum(20,10))
  console.log(texte)
  console.log(names)
  console.log(age)
  console.log(height);
  console.log(message);
}
document.writeln("<h2>这是一段文字</h2>")
// 引入css文件
require("./css/normal.css")
// 引入less文件
require("./css/complex.less")