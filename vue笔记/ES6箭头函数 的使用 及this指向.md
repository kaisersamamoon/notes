#### 箭头函数
1. 函数关键字
	```
		function abb(){}
	```
2. 函数字面量：
	```
		const aaa = function(){}
		const abc = {
			bbb:function(){}
			ccc(){}//ES6
		}
	```
3. Function ()构造函数
	```
		let ddd = new Function()
	```
4. ES6 箭头函数
	```
	const def = (参数)=>{执行语句}
	eg:
	`	//多个参数
		const sum = (num1 , num2)=>{return num1 +num2}
		//单个参数 括号可以省掉
		const power = num1 =>{return num1**}
		
	```
#### 箭头函数详细讲解
 1. 函数返回值

 	```
 		//多个返回值
 		const say = (names1 ,names2)=>{
 			console.log(num1)
 			console.log(num2)
 		}
 		//一个返回值 大括号也可以省掉
 		const sum = (num1 , num2)=> num1 * num2
 	```
 #### 箭头函数的this 

 	箭头函数中的this 引用的是最近作用域中的this
 	eg:
 	```
 		const aaa = function(){console.log(this)}; //windows
 		const bbb = ()=>{console.log(this)};	//windows
 	
 		const obj = {
 			setTimeout(function(){console.log(this)},1000); //windows
 			console.log(this) 	//aaa
 			setTimeout(()=>{console.log(this)},1000); //obj
 		}
 	```
 	实例讲解
 	```
 	let obj = {
```
aaa(){
    setTimeout(function(){
      // window
      console.log("aaa的"+ this)
      setTimeout(function(){
        // window
        console.log("ccc"+ this)
      },1000)
      setTimeout(()=>{
        // 寻找上一层 故也是window
        console.log("ddd"+ this);
      },1000)
    },1000),
    setTimeout(()=>{
      // 作为obj方法调用 指向obj
      console.log("bbb的"+ this)
      console.log(this== obj)
      setTimeout(function(){
        // 指向全局 window
        console.log("eee"+ this)
      },1000);
      setTimeout(()=>{
        // 指向外一层的this 故 obj
        console.log("fff"+ this)
        console.log(this == obj)
      },1000)
    },1000)
  },
  bbb(){
    console.log("这个是"+this)
    console.log(this ==obj)
  }
}
obj.aaa()
obj.bbb()
```

  执行结果：

![image-20210623195350709](C:\Users\kaiser\AppData\Roaming\Typora\typora-user-images\image-20210623195350709.png)

