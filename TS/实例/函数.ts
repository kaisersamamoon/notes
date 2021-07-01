// function sayName(num1:number ,num2:number):number{
//     return num1 + num2

// }
// let add = (x:number,y:number)=>{
//     return x +y
// }
// let text:(x:number,y:number) =>number=function(x:number,y:number):number{
//     return x +y
// }
// console.log(add(10,20))
// console.log(text(20,20))

console.log('------')

 function foilist (...arete:number[]){
    for(let i = 0 ;i<arete.length ; i++){
        console.log(arete[i])
    }
 }
foilist(1,2,3,4,5)
