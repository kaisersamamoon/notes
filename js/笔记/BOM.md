#### 浏览器对象模型

BOM浏览器对象模型，它提供了独立于内容而与浏览器窗口进行交互的对象，其核心对象时windows

BOM由一系列对象构成，并且每个对象都提供了很对方法与属性

BOM缺乏标准，javascript语法的标准化组织是ECMA，DOM的标准化组织是W3C，BOM最初是Netscape浏览器标准的一部分。

| DOM                             | BOM                                             |
| ------------------------------- | ----------------------------------------------- |
| 文档对象模型                    | 浏览器对象模型                                  |
| DOM就是把文档当作一个对象来看待 | 把浏览器当作一个对象来看待                      |
| DOM的顶级对象是document         | BOM的顶级对象是windows                          |
| DOM主要学习的是操作页面元素     | BOM学习的是浏览器交互的一些对象                 |
| DOM是W3C标准规范                | BOM的浏览器厂商在各自浏览器上定义的，兼容性较差 |



#### **BOM构成**

![image-20210425122336447](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210425122336447.png)

**windows对象是浏览器顶级对象，它具有双重角色**

1.它是js访问浏览器窗口的一个接口

2.它是一个全局对象，定义在全局作用域中的变量，函数都会变成windows对象的属性和方法



**1.窗口加载事件**

```
// window.onload = function()
window.addEventListener('load',function(){
    alert('hello!!!');
})
```

**window.onload是窗口页面加载事件，当文档内容完全加载完成会触发该事件（包括图像，脚本，css文件等），就调用的处理函数。**

**DOMcontentLoade**事件触发时，仅当DOM加载完成，不包括样式表，图片，flash等

如果页面图片很多的话，从用户访问到onload触发可能需要较长的时间，交互效果不能实现，必然影响到用户体验，此时使用它比较合适。



**2.调整窗口大小事件**

```
window.onresize = function(){};

window.addEventListener('resize',function(){})
```

**window.onresize是调整窗口大小加载事件，当触发时调用的处理函数**

用于完成一些响应式布局，window.innerWidth当前屏幕的宽度



**3.定时器**

window对象提供了两个非常好用的方法-定时器

1.sitTimeout()

2.setInterval()



**3.1 setTimeout()定时器**

```
window.setTimeout(function(){		//第一个参数表示延迟时间到了执行的函数，第二个参数表示延迟的时间
console.log('hh')
},2000)
```

**setTimeout()这个调用函数我们也称为回调函数 callback**

普通函数是按照代码顺序执行直接调用

而这个函数，需要等待时间，时间到了才会去调用这个函数，因此也叫回调函数。

**停止setTimeout（）定时器**

```
window.clearTimeout(timeoutID);//定时器名字
```



**3.2 setInterval()定时器**

```js

let temes = 1;	//计数
let text = window.setInterval(function(){		//声明一个定时器
    if(temes <=5){
        console.log(`这是第${temes}次`);	
        temes++;
    }else{
        window.clearInterval('text');		//清除定时器	
    }

},5000);	//执行间隔

```

setInterval方法重复调用一个函数，每隔这个时间段，就去调用一次这个回调函数

clearInterval（定时器name） 清楚定时器



#### this指向

this指向在函数定义的时候是确定不了的，只有当函数执行的时候才能确定this到底指向谁，一般情况下this的最终指向的是那个调用它的对象。

1.在全局作用域下 或普通作用域this指向全局对象window（注意定时器里面的this指向window）





#### js执行队列

js是单线程 同一时间只能执行一件事



#### 同步和异步

**同步**：同一个任务结束后，再执行后一个任务，程序的执行顺序与任务的排列顺序是一致的

**异步**：在做一件事时，因为这件事会花费很长的时间，在做这件事的同时。你还可以去处理其他事情。

![image-20210425141246724](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210425141246724.png)

**同步任务：**

同步任务都**放在主线程**上执行，形成一个**执行栈**。

**异步任务：**

js的异步时通过回调函数实现的

异步任务类型：

1.普通事件：click ,  resize等

2.资源加载: load , error 等

3.定时器：setlnterval , setTimeout 等

异步任务相关**回调函数**添加带**任务队列**中（任务队列也称为消息队列）





#### JS执行机制

![image-20210425141613269](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210425141613269.png)

**1.先执行执行栈中的同步任务**

**2.异步任务（回调函数）放入任务队列中**

**3.一旦执行栈里面的所有同步任务执行完毕，系统就会依次序读任务队列中的异步任务，于是被读取的异步任务结束等待状态，进入执行栈，开始执行**

![image-20210425142043697](C:\Users\PAN\Desktop\image-20210425142043697.png)









#### location对象

window对象给我们提供了一个location属性用于获取或设置窗体的URL，并且可以用于解析URL，因为这个属性返回的时一个对象，所以我们将这个属性也称为location对象。



![image-20210425142658279](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210425142658279.png)

URL：统一资源定位符，是互联网上标准资源的地址，互联网上的每一个文件都有唯一的URL，它包含的信息指出文件的位置以及浏览器应该怎么处理它



**location对象的属性**

location.href  :返回或者设置整个URL

location.host  :返回主机（域名）www.baidu.com

location.port   :返回端口号，如果未写返回空字符串

location.pathname  ：返回路径

location.seach ：返回参数

location.hash  ：返回片段  #后面内容 常见于链接 锚点



```
 let btn = document.querySelector('button');
 btn.addEventListener('click',function(){
     location.href = 'http://www.baidu.com';		//点击跳转
 })
```

location对象的方法

location.assign() :跟href一样，可以跳转页面（也称为重定页面）

location.replace() ：替换当前页面，因为不记录历史，所有不能后退页面

location.reload() 重新加载页面，相当于刷新按钮 ，或者f5如果参数为true强制刷新ctrl +f5



#### navigator对象

navigator对象包含有关浏览器的信息，他有很多属性，我们最常用的是user-Agent，该属性可以返回由客户机发送服务器的 user-agent 头部的值。



#### history对象

window对象给我们提供了一个history对象，与浏览器历史记录进行交互，该对象包含用户（浏览器窗口中）访问过的URL

back()：可以实现后退功能

forward()：前进功能

go(参数)：前进后退功能，参数是1前进一个页面 如果是-1，后退1个页面。 



