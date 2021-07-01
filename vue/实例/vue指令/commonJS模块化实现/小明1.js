var modeleA = (()=>{
  var obj = {}
  var name = "小明"
  var age =18
  function saysum(num1 ,num2){
    console.log(num1 +num2)
  }
  var flag = true
  if(flag){
    saysum(10,20)
  }
  obj.name = name
  obj.age = age
  obj.saysum = saysum
  obj.flag = flag
  return obj
})()