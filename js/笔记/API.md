​    **API**

 

**API** （**应用程序编程接口**）:API是一些**预先定义的函数**，目的是提供应用程序与开发人员基于某软件或硬件得以访问一组例程的能力，而又无需访问源码，或理解内部工作机制的细节。

简单理解：API是给程序员提供的一种**工具**，以便能更轻松的实现想要完成的功能。

 

**Web API**：是**浏览器**提供的一套操作浏览器功能和页面元素的**API（DOM和BOM**）。

 

WEB API一般都有输入和输出（函数的传参和返回值）,Web Api很多都是方法（函数）

 

API是为我们程序提供的一个接口，帮助我们实现功能，我们会使用就可以了，不必纠结内部实现。

 

​    **DOM**

**文档对象模型** 是W3C组织推荐的处理**可扩展标记语言（HTML , XML）的编程接口**



**DOM树**   ![image-20210422184831879](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210422184831879.png)

**文档**：一个**页面**就是一个文档，DOM中使用**document**表示。

**元素**：页面中所有**标签**都是元素，DOM中使用**element**表示。

**节点**：网页中所有内容都是节点（**标签，属性，文本，注释 等**），DOM中使用**node**表示。

DOM把上面内容都看做是**对象**。



#### **如何获取页面元素**

1.根据**ID**获取

2.根据**标签名**获取

3.通过**HTML5新增的方法**获取：根据类名

4.**特殊元素**获取



**根据ID获取**

```js
let p1 = document.getElementById('time');
console.dir(p1);
console.log(p1);
```

使用**getElementByld()**方法获取

返回的是一个对象



**根据标签名获取**

```js
let elements = document.getElementsByTagName('li');
console.dir(elements);
console.log(elements[0]);
```

使用**getElementsByTagName()**方法获取，可以返回带有指定标签名的**对象集合。**

返回的是一个集合，伪数组

```js
let ol = document.getElementsByTagName('ul');
let li = ol[0].getElementsByTagName('li');
console.dir(li);
console.log(li);
```

还可以获取某个元素（父元素）内部所有指定标签名的子元素

注意：父元素必须是单个对象（必须指明是哪一个元素对象），获取的时候不包括父元素自己。

```js
let ol = document.getElementById('ul');
let li = ol.getElementsByTagName('li');
console.dir(li);
console.log(li);
```

或给**li**父级对象指定一个id 通过id获取父元素下面的子元素。



**根据类名获取**

```js
let div = document.getElementsByClassName('div');
console.dir(div);
console.log(div);
```

使用**getElementsByclassName()**获取



**根据选择器获取**必须要加选择器的符号（.  # ）

```js
let boxname = document.querySelector('.box');//类选择器
```

根据指定选择器返回**第一个选择器元素对象**。

```js
let boxname = document.querySelectorAll('.box');
```

根据指定选择器返回**所有选择器元素对象**。



**获取特殊元素**（body html）

1.通过id，类名

**获取body标签：**

```
let body = document.body;
```

**获取html标签**

```js
let htmlEle = document.documentElement;
console.dir(htmlEle);
```



#### 事件基础

javascript使我们有能力**创建动态页面**，而事件是可以被javascript 侦测到的**行为**。

简单理解：**触发----响应机制**

**事件组成**：事件源，事件类型，事件处理程序（事件三要素）

事件源：事件被触发的对象。

事件类型：如何触发。鼠标点击（onclick）

事件处理程序：通过一个函数赋值的方式完成。

```js
let btn = document.getElementById('btn');   //获取事件源
btn.onclick = function(){       //事件类型
    alert('这是一个按钮');      //事件处理程序 弹出一个对话框
}
```

**执行事件的步骤**

1.获取事件源

2.注册事件，绑定事件

3.添加事件处理程序（采用函数赋值操作）

```js
let divs = document.querySelector('div');
divs.onclick = function(){
    alert('看下控制台');
    console.log('恭喜');

```

常见的鼠标事件：

![image-20210422210118884](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210422210118884.png)

#### 操作元素

javascript的DOM操作可以改变网页内容，结构和样式，我们可以利用DOM操作元素来改变元素里面的**内容**，**属性**，注意以下都是属性

**改变元素内容**

```js
element.innerText //从起始位置到终止位置的内容，但他去除HTML标签，同时空格和换行也会去掉
element.innerHTML	//起始位置到终止位置的全部内容，包括HTML标签，同时保留空格和换行
```

**实例**

```js
//当点击button按钮，改变div里面显示的时间,两个事件源，点击，改变时间
let btn = document.querySelector('button');
let divs = document.querySelector('div');
btn.onclick = function(){
    divs.innerText = getDate();     //这里调用getDate（）函数
}
function getDate(){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let dates = date.getDate();
    let arr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
    let day = date.getDay();
    return `今天是:${year}年 ${month}月 ${dates}日 ${arr[day]}`;
}
let p = document.querySelector('p');   
p.innerText = getDate();                 //不用添加事件，直接调用函数


```

 **innerText 和innerHTML的区别**

 **innerText：**不识别元素中间的HTML标签		//非标准，可读写 （可赋值，可获取值）去除空格，及换行

![image-20210422214744153](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210422214744153.png)

```js
p.innerText = '<strong>这里</strong>加粗显示';
```

**nnerHTML**：识别元素中的HTML标签	//标准  ，可读写（可赋值，可获取值） 保留空格，及换行

![image-20210422214809383](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210422214809383.png)

```js
p.innerHTML = '<strong>这里</strong>加粗显示';
```



#### 更改常见元素的属性

**src   href    title**

```js

let liudehua = document.getElementById('liu');
let zhangxueyou = document.getElementById('zhang');
let imgs = document.querySelector('img');
liudehua.onclick = function(){
    imgs.src = 'img/刘德华.jfif';   //点击liudehua按钮，更改图片的src地址
    imgs.title = '刘德华';   //同时更改图片的title属性的值
}
zhangxueyou.onclick = function(){
    imgs.src = 'img/张学友.jfif';   
    imgs.title = '张学友';
}

```





#### 表单元素的修改

**type value checked selected disabled**

表单的内容 修改 采用

```js
let img = document.getElementById('img');
let input = document.getElementById('input');
let div = document.querySelectorAll('div');
let num = 1;
img.onclick = function(){
    if(num == 1){
        input.type='text'
        num = 0;

    }else if(num == 0){
        input.type = 'password';
        num = 1;
    };
}

```

```css
.box{
    width: 400px;
    border-bottom: 1px solid#ccc;
    margin: 100px auto;         /*外边距*/
}
.box input{
    width: 300px;
    height: 30px;
    border: 0;
    outline: none;      /*去掉边框线条*/

}
li{
    toma
    position: relative;
    height: 30px;
}
li div{
    width: 100px;
    height: 100px;
    background-image: url(img/密码锁.jpg);
    background-position-x: -90px;
    background-position-y: 150px;
    position: absolute;
    top: 10px;
    right: 20px;
}

```



#### 样式属性操作

**通过JS修改元素的大小颜色，样式**

**element.style  	//行内样式操作**

```js
let div =document.querySelector('div');
dele =  'aqua';
div.onclick = function(){		//事件触发条件
    if(dele == 'aqua'){	
        div.style.backgroundColor = 'purple';		//更改div颜色
        dele =  'purple';
    }else if(dele == 'purple'){
        div.style.backgroundColor = 'blue'
        dele =  'blue';
    }else if(dele == 'blue'){
        div.style.backgroundColor = 'aqua'
        dele =  'aqua';
    }
}
```

**利用样式显示和隐藏样式**

```css
.box{
    width: 200px;
    height: 200px;
    margin: 200px;
    position: relative;

}
img{
    height: 200px;
    height: 200px;
}
.box i{
    width: 15px;
    height: 20px;
    border:1px solid black;
    position: absolute;
    top: 0px;
    left:-20px;
}
```



```js
let img = document.querySelector('img');
let i = document.querySelector('i');
i.onclick =function(){
    img.style.display = 'none';		//display：none 隐藏 display：block 显示
    i.style.display = 'none';
}
```

#### 表单新事件

**获得焦点**;   **onfocus**

**失去焦点**:    **onblur**

```js
let onfo = document.querySelector('input');
onfo.onfocus =function(){   //获得焦点
    if(onfo.value =='手机'){
        onfo.value = '' ;
        onfo.style.color ='black';
    }   
}
onfo.onblur =function(){ //失去焦点
    if(onfo.value ==''){
        onfo.value = '手机';
        onfo.style.color ='darkgrey';
    }
}
```





**element.className		//类名样式操作**

适用于样式较多，功能比较复杂的情况使用

**注意：className会直接覆盖原来的类名**

如果想要保留原来的类名，可以采用多类名选择器

![image-20210423233917244](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210423233917244.png)

```css
div{
    width: 50px;
    height: 50px;
    background-color: darkgreen;
}
.change{
    width: 100px;
    height: 100px;
    background-color: darkmagenta;
}
```

```js
let div = document.querySelector('div');
div.onclick = function(){
    this.className ='change';
    
}
```



#### 密码框格式提示错误信息





#### 排他思想

