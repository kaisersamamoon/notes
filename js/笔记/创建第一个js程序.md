console.log();

允许你在控制窗口输出一条消息

```js
conset place = 'world'
conset greeting = 'hello'
console.log (`${greeting},${place}`)	//格式化字符串
cobsole.log ('%s','%s',greeting,place)		//模板字符串

```

单行注释//

多行注释/**/

**声明变量的方法**

var：函数作用域的声明变量，全局作用域，可变变量

let：与var类似，区别在于它是块作用域，并不是函数作用域，表示只在一块区域有效，可变变量

const：块作用域变量，常量



**字符串拼接**

```js
let bool1 = true;
let number = 5;
console.log(`这里表示${number}+${number}等于${number*2}`)
console.log(`这里我将${bool1}取反为${!bool1}`)
```

#### 数值类型

**typeof：**返回一个变量或值的数值类型。

**instanceof**：用于确定某些内容，是否从特定数据类型的构造函数中创造。

```js
const people = ['body','position','float'];
const one = new Number(3);
const b = new Boolean(false);
const person = {
    firstName:'panshngguo',
    lastName:'xiaojiayu'
};
function sayHello(person) {
    console.log(`hello ${person}`)
}

console.log("-- typeof --");
console.log(typeof people);
console.log(typeof one);
console.log(typeof b);
console.log(typeof person);
console.log(typeof sayHello);

console.log('--instanceof--');

console.log( people instanceof Array);
console.log (one instanceof Number);
console.log(b instanceof Boolean);
console.log(person instanceof Object);
console.log(sayHello instanceof Function);


```

![image-20210416165559093](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210416165559093.png)



运算符号

```js
let num1 = 5;
console.log(num1 % 2);
console.log(--num1);
console.log(++num1);
```

如果需要更多的基础运算算法moth对象

moth对象里面设置了很多函数，为了更高级的数学运算。

```js
let num = 100;
console.log(Math.PI);      //返回pi的值 
console.log(Math.sqrt(num));        //返回num的平方根
```

#### **值的相互转换**

字符串与数字的转换：

**字符串转换成数字**

```js
let num ='150.461';
console.log(parseInt('1+1'));
console.log(parseInt(`${1+1}`));

```

**parseInt**转换成整数

**parseFloat**:转换成浮点型小数

**数字转换成字符串**

**toString：**将数字转换成字符串

```js
let num = 150;
let floa = 12.34;
console.log(num.toString());        //数字转换成字符串
console.log(floa.toString());
console.log((100).toString());
```



#### 如何抛出异常

**Try**:监视潜在可能抛出异常的代码

**Catch**：异常发生时执行的操作

**Finally**会有选择的控制代码流，即使没有抛出异常

**例1**

如果有异常，抛出异常

```js
try{
    criticalcode();         //表示criticalcode函数有争议，可能会引发异常
}
catch(ex){
    console.log("Got an error");    //如果发生异常，捕捉异常，并在控制台打印出异常（给出提示）
    logError(ex);           //调用logError函数输出异常
}
```

**例2** 

自己抛出异常

```js
try{
    //自己抛出异常
    throw 'An excepition that is thrownm every time';
}
catch(ex){
    //被捕捉，控制台打印出异常
    console.log("Got an error");
    logError(ex);       //利用logEroor函数输出异常
}
```

**例3**

```js
try{
    criticalcode();	 //表示criticalcode函数有争议，可能会引发异常
}
catch(ex){
    console.log("Got an error"); //如果发生异常，捕捉异常，并在控制台打印出字符串（给出提示）
    logError(ex); //调用logError函数输出异常
}
finally{
    console.log("code that always will run");	//不管是否有异常，都会打印这段字符串
}
```



**例4**

```js
function criticalcode(){
    throw "throwing an exception";
}
function logError(theException){
    console.log(theException);
}

try{
    criticalcode();
}
catch(ex){
    console.log("Got an error")
    logError(ex);
}



try{
    throw "An exception that is thrown every time";
}
catch(ex){
    console.log("Got an error");
    logError(ex);
}



try{
    criticalcode();
}
catch(ex){
    console.log("Got an error")
    logError(ex);
}
finally{
    console.log("code that always will run");
}
```





#### js时间（Dates）

使用JS处理日期和时间

时间是一个结构，是一个对象（object）

**Date对象**

包含日期和时间

****

```js
const now = new Date();
const randomDate = new Date (2015,3,12,6,25,58);    
console.log(randomDate);
```

输出为：**2015-04-11T22:25:58.000Z**

注意需要在这时间+8才是国区时间

同时;js时间的月份从0月开始。

```js
const now = new Date();
now.setFullYear(2014);
now.setMonth(3);
now.setDate(4);
now.setHours(4);
now.setMinutes(24);
now.setSeconds(46);
console.log(now);

```

输出为：**2014-04-03T20:24:46.240Z**一样需要+8小时

```js
const now = new Date();
console.log(now.getMonth());      //获取月
console.log(now.getTime());     //获取时间，但是需要转换
console.log(now.getDay());      //获取星期，周日算0
```

```js
const now = new Date();

const win95Lauch = new Date(1995,7,24);
const demoDate = new Date();
demoDate.setMonth(0)

console.log(now);
console.log(win95Lauch);
console.log(`Day of week:${demoDate.getDay()}`);   
console.log(`Date:${demoDate.getDate()}`);
```



#### 比较操作符

js有两个比较运算符：

**==：**这里会发生自动转换 （"42"=42）

**===** 不会发生自动转换（”42“！==42）

**！=：**不在乎数据类型

**！==：**在意数据类型

#### if语句

```js
const  status = 200;
if (status===200){
    console.log('ok!');
}else if(status===400){
    console.log('Error');
}else{
    console.log('Unknown status');
}
```

```js
const status = 200;
if (status===200) console.log('ok!');
else if(status===400) console.log('Error!');
else console.log("unknown status")；
```

#### 三元操作符（三元函数）

```js
const message = (status===200) ? 'ok':'Error'；
```

**if status====200 返回ok**

**else 返回Error**

**不管满足那边，最终的值都会赋给（存入）message**





#### switch case语句

```js
const x = 1;//1为Ture
if (x){
    console.log('x contains avalue')
}

```

![image-20210416214954631](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210416214954631.png)

如果为false，什么都不会输出

#### 与或非

**与:&  ,&&:两边都为True**

(x&y)

(x&&y)

**或：|  ||：任意一边为True**

(x|y)

(x||y)：

**双运算符：短路运算符：作用在于会自动跳过后边，如果第一个为True，or语句也是一样**



##### **swatch（case）语句**：（条件语句）

```js
const status = 200;
switch (status){
    case 200:		//注意第一条不能为大于小于；
        console.log('ok');
        break;		//break语句必须有，或者会一直执行下去，直到执行完所有逻辑
    case 400:		//这里为或 400|500；
    case 500:
        console.log('Error');
        break;
    default:		//
        console.log('unknown value');
        break;
}
```

**例**

```js
const name = '';
if (name){
    console.log('we hane a name');
}else{
    console.log('no name provided')
}
```

```js
const name = '';
if (!name){		//取反
    console.log('we hane a name');
}else{
    console.log('no name provided')
}
```

**例2**

```js
const status = 'error';
if(status==="ERROR"){
    console.log("something went wrong");
}
else{
    console.log('looks great!!!')
}
```

```js
const status = 'error';
if(status.toUpperCase==="ERROR"){		//将status的值变为大写
    console.log("something went wrong");
}
else{
    console.log('looks great!!!')
}
```

```js
const indes = 500;
switch(indes){
    case 200:
        console.log("等于200");
        break;
    case 400:
    case 500:
        console.log("等于400或者500");
        break;
    default:
        console.log("等于其他数");
        break;
}
```



#### 数组

数组是聚集值的列表，可以储存很多不同数据类型的值

数组中的值都有对应的index（索引）

**创建数组的方式：**

两种方式

```js
let arraylength = 5;        //指定数组的长度
let arr1 = [];      //使用中括号创建
let arr2 =Array(arraylength);   //使用数组对象，需要指定数组的长度
console.log(arr1.length);
console.log(arr2.length);
```



#### **向创建好的数组中添加对象**

根据索引访问数组中的对象

```js
let arr1 = ['A',true,2];	//创建数组
console.log(arr1[0]);
console.log(arr1[2]);	//索引
console.log(arr1[3]="panshangguo");		根据索引添加对象
console.log(arr1);		
```

**数组长度 总是大于索引值**

```js
let arr1 = ['A','true',5];
console.log(arr1.length);
console.log(arr1[arr1.length-1]);
```

![image-20210416225737294](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210416225737294.png)



#### 操作数组的方法

**push：向数组末尾添加一个元素** 返回数组的长度

**pop：删除数组末尾的最后一个元素**返回你删除的值

**shift：删除数组第零位元素**，返回你删除的值

**unshift：向数组第零位添加元素**回数组的长度

**concat**：**将两个数组连接，并组成新数组**

```js
let num = ['one','two','three','four'];
num.push('five');
num.push('six');
console.log(num);
num.pop();
console.log(num);
num.unshift('haha');
console.log(num);
num.shift();
console.log(num);
```

![image-20210417133239414](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210417133239414.png)

```js
let num1 = [1,2,3];
let num2 = ['one','two','three'];
let num3= num1.concat(num2);
let num4 = num2.concat([1.4,5]);
console.log(num1);
console.log(num3);
console.log(num2);
console.log(num4);
```

![image-20210417134908042](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210417134908042.png)



#### 循环

**while**

while循环  条件判断

```js
const names =['pan','shang','guo','ni','hao'];
let index = 0;
while (index < names.length){		//条件判断循环
    const name = names[index];
    console.log(name);
    index ++ ;
}
```

**for**

for条件判断

```js
const names =['pan','shang','guo','ni','hao'];
for (let index = 0; index < names.length ; index++){  	//条件判断循环
    const name = names[index];
    console.log(name);
}
```

**for.....of**

遍历

```js
const names =['pan','shang','guo','ni','hao'];
for (let name of names){    //使用一个变量依次去遍历整个数组
    console.log(name)
}
```

**例**

```js
const names = ['pan','shang','guo','ni','hao'];
let index = 0;
console.log('---------while--------')

while (index < names.length ){
    console.log(names[index]);
    index++;
}

console.log('------for---------')

for (let dell = 0; dell < names.length ; dell++){
    console.log(names[dell]);
}

console.log('--------for of -------')

for(let coll of names){
    console.log(coll);
}
```





#### 函数

**什么是函数**

函数是基本的代码块，用来执行一系列语句。可以在程序中反复使用

```js
function iscountingDown(var1,var2){//{}限制函数中可执行的部分
    if (var1 > var2)		
        return true;
    return false;		//return输出结果
}
```

**iscountingDown(var1,var2)**：函数名，以及形参

```js
function printThanks(){
    console.log('Thanks for shopping');
    console.log('Discounts expire Dec 1 !');
}


function comoutePrice(cost , discount){
    let reducition = cost * discount;
    console.log('You saved $'+ reducition);
    return cost-reducition;
}
```

**return**:退出并返回值



#### 箭头函数

也叫匿名函数，不能命名

```js
const add = (a,b) => a+b;	//创建一个有两个参数的abb变量采用a+b的方法计算
console.log(add(5,10));
const subtract = (a,b) =>{ //创建一个有两个参数的abb变量通过return返回a-b方法计算的值
    return a-b;
};
console.log(subtract(15,8));
```

注意：如果传入多个参数就需要使用括号，如果传入单个参数，可以不使用括号。

如果箭头函数的返回语句有多行，那么就需要使用{}花括号来将多行内容括起来，并不能忽视return（显示返回）



#### this

**上下文**

**在箭头函数中this上下文会改动，上下文是传统JS中调用函数时的位置定义**

**在箭头函数中，上下文是继承自其父级，如果在回调函数内部调用（例如点击事件，或异步操作），就会出现在函数定义的地方。将参数传递给回调**

**在箭头函数中不太依赖this，因为总是要从某处继承（在函数定义的层级结构中），这是在你自己作用域中无法控制的，因为无法改变箭头函数中上下文的定义**

**如果将函数作为引用传递给另一个函数，可以作为回调传给其他，异步就会发生，作用域由其父级来定义，就可以传递，不管是否远离元素的定义，但这个作用域从其初始定义处开始捕捉，**

**如果我们要处理返回值，可以隐式或显示（单行的箭头函数总会隐式返回，即使这个运算符什么都没有返回，返回undefined，那么隐式语句返回值就是undefined），如果想用箭头函数生成多行要用大括号，就会标志函数块的开始和结尾（大括号中的一切就是我们的语句块这和传统JS类似）**









#### JSON

**用于网络传输，或者文件系统传输**

**JSON是一种轻量级数据交换格式，不同语言都可以使用，用户可读。**

**JSON是一种独立于语言的格式，任何支持两种数据结构的现代化编程语言，都可以使用**

1.键值对（单一系列化对象）

2.有序列表值

**如何将JS对象和JSON互相转换**

```js
JSON.stringify		//将js（键对值，有序列表值）对象转换成JSON字符串
JSON.parse		//将JSON字符串转换为js（键对值，有序列表值）对象
```

```js
console.log('--------jsdn.stringity--------');
const book ={
    title:'1994',
    author:'George orweil',
    isAvilable:false
};
const dell = JSON.stringify(book);      //转换成JSDN格式
console.log(dell);
console.log('------JSON.parse-----');		//注意单引号
const whell = '{"title":"1994","author":"George orweil","isAvilable":false}';
const whellbook = JSON.parse(whell);
console.log(whellbook);

```

**如果需要转换成函数可以采用结构体**

**可以选择序列化的属性和数据**，然后转回定义的函数中。要用自定义构造函数





#### JS对象

**在代码中代替真实对象方式**

**属性：是对象关联的一个变量**

**方法（行为）：是对象关联的函数**

对象是无序键值对的集合



#### js对象语法和创建

**创建定义对象**

```js
const book ={
    titile:"1994",			//属性
    author:'George orwell',
    isAvailable:false,

    checkIn:function(){				//方法
        this.isAvailable = true;
    },
    checkOut:function(){
        this.checkOut = false;
    },
}
```

#### 使用构造函数或new关键字

```js
const book = new Object();
book.title = '1994';
book.author = 'George Orwell';
book.isAvailable = false;
book.checkIn = function(){
    this.checkIn = true;
};
book.checkOut = function(){
    this.checkOut =false;
};
console.log(typeof book);	//查看对象的属性（object）
console.log(book.author);	//查看author属性的值（第一种方法）
console.log(book.title= '2021');	//修改title属性的值
console.log(book['title']);		//查看title属性的值（第二种方法）
console.log(typeof book);	
```



对象中属性的名字不可变，值可以改变

**访问对象或修改对象中的属性值**

```js
console.log(book.author);	//查看author属性的值（第一种方法）
console.log(book['title']);		//查看title属性的值（第二种方法）
```

**对象里面的方法是特殊的属性：其类型为函数**

方法是与对象关联的函数定义

**方法的查看访问与属性一致**

```js
const book = new Object();
book.title = '1994';
book.author = 'George Orwell';
book.isAvailable = false;
book.checkIn = function(){
    this.checkIn = true;
};
book.checkOut = function(){
    this.checkOut =false;
};
console.log(book.checkIn);      //访问函数
console.log(book['checkOut']);		
console.log(book.checkIn());		//调用函数本身
console.log(book['checkOut']());
```





#### this关键字：

**用于设置函数运行时上下文的**

在局部作用域就是它的父级（创造它父级的对象）

在全局作用域this就是windows或者global（全局对象）

**仔细下面两个例子**

```js
const bookobj = {
    checkIn:function(){
        return this;
    }
}
console.log("\n\n this is :",bookobj.checkIn());
console.log(bookobj.checkIn()===bookobj);


function anotherCheckIn(){
    return this;
}
console.log("\n\n this is :",anotherCheckIn);
console.log(anotherCheckIn() === globalThis);
```

![image-20210417181543150](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210417181543150.png)



#### 异步编程和promise

```js
function callback(){
    console.log('Timeout comleted');
}
setTimeout(callback,3000);	//设置一个定时ms（延时），当定时完成回调
```

promise：是一种共有开发模式，

promise是一种承诺，向我保证当代码执行完，就会让我知道，可以访问产生的任何结果，或者给我机会运行格外代码。

#### promise语法

```js
function promiseTimeout(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms);
    });
}

promiseTimeout(2000)
    .then(() => {
        console.log('Done!');
    }).catch(() => {
        console.log('Error!');
})
```

**promize**对象工作方式：传入一个回调，传入一个函数，既有**reslve**,也有**reject**。函数种就可以时任何我们想要的逻辑。责任是调用**resolve**，不论何时运行成功，确保调用**resolve**，当运行失败调用**reject**，或如果运行失败



#### async/await

可以帮助我们让异步代码看着像同步的



#### 包

包是一系列可复用代码，也可以包含其他东西，图片，字体，或其他资源，

#### 