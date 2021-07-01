let magin = true
function sum(num1 ,num2){
  return num1 *num2
}
let texte = {
  names:"kaiser"

}
let message = "这是一段测试"
// export {magin,sum,texte}
// commonJS
module.exports = {
  sum,
  texte,
  magin,
  message
}