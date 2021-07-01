 var modeleB = (()=>{  
  var obj = {}
  function sayHello(num1, num2){
    console.log(num1 , num2);
  }
 
  var flag =false
  if(!flag){
    sayHello( 20,30)
  }
  obj.sayHello = sayHello
  obj.flag = flag
  return obj
 })()