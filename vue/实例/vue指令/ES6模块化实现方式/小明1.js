var names = "小明"
var age =18
var flag = true
function sayNames(num1,num2 ){
  console.log(num1,num2)
}
export var text = "joly"
export{
  names,
  sayNames,
  flag,
  age
}
export function mul(num1,num2){
    return num1 * num2
}
//导出类
export class saySun {
    sun(){
    console.log("在奔跑")
    }
}
