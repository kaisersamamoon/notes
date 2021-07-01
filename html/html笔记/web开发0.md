# html，css，javascript 注释的区别



# **html注释**



```
# <!--...-->
```

注释的重要性;通常写注释是为了告诉以后的自己或者和你共同开发的小伙伴：你的代码是做什么的，以及你修改了哪些内容，在复杂的逻辑结构前稍微做一下注释，看代码的人才不会想丈二和尚摸不着头脑。

例：

```html
<!DOCTYPE html>
<html>
<head>
<title>第一次程序</title>
</head>
<body>
<h1>标题1</h1>
<h2>标题2</h2>
<!--在下一个案例中，把下面这个p标签删除-->
<p>段落标签</p>
</body>
</html>
```

```html
<!DOCTYPE html>
<html>
<head>
<title>第一次程序</title>
</head>
<body>
<h1>标题1</h1>
<h2>标题2</h2>
<!--<p>段落标签</p>-->
<!--此刻不显示p标签-->
</body>
</html>
```

# **css注释**

```
#/*...*/
```

```css
h1{color:black;
}
</*设置h2,h3,p标签的颜色
h2{color:black;
}
h3{color:black;
}
p{color:black;
}*/>
```

注意：

尽管可以使用style在html中使用css，但是注释还是一样的

# javascript注释

```javascript
#/单行注释/
#/*
多行注释
*/
```

和c语言一样

```javascript
//write引入字符串
    document.write("i love fisic.com!");
/*

多行注释
 */
```

# 块级元素和行内元素

```html
<!DOCTYPE html>
<html>
<head>
    <title> 定义文档内嵌脚本 </title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initital/-scale=1.0">
    <meta name="keywords" content="web开发，html5，css3">
    <meta name="description" content="《web开发》案例演示">
    <meta name="author" content="pan">
    <!--<script type="text/javascript" src="patch.js" defer></script>
-->
</head>
<body>
<!---请在下面添加案例-->
<a href="http://baidu.com">百度</a>
<a href="http://taobao.com">淘宝</a>
<p>踽踽独行</p>
<p>形单影只</p>
</body>
</html>
```

![image-20210331203748493](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210331203748493.png)



#### html块级元素：总是在新的行上开始，尽可能地占据本行全部可用宽度

###### 块级元素

```html
<address> <article> <aside> <blockquote> <canvas><dd> <div> <dl>
<fieldset> <figure> <footer> <form> <h1>~<h6><header> <hr> <li>
<main> <nav> <noscript> <ol> <output> <p> <pre><section> <table>
<tfoot> <ul> <video>  
```

#### html行内元素：不会另起一行，他也只占用必要的宽度

###### 行内元素：

```html
<a> <abbr> <acronym> <b> <bdo> <big> <br> <button><cite> <code>
<dfn> <em> <i> <img> <input> <kbd> <label> <map><object> <q> <samp>
<script> <select> <small> <span> <strong> <sub><sup> <textarea>
<time> <tt> <var>  
```

块级元素讲究排场，行内元素厉行节约。

#### **span元素是一个与p元素对应的行内元素**

**作用：用于组合文档里面的行内元素**

```html
<!DOCTYPE html>
<html>
<head>
    <title> 定义文档内嵌脚本 </title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initital/-scale=1.0">
    <meta name="keywords" content="web开发，html5，css3">
    <meta name="description" content="《web开发》案例演示">
    <meta name="author" content="pan">
</head>
<body>
<p>黑夜给了我黑色的<span>眼睛</span>,</p>
<p>我却用它寻找<span>光明</span>,</p>
</body>
</html>
```

```html
<!DOCTYPE html>
<html>
<head>
    <title> 定义文档内嵌脚本 </title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initital/-scale=1.0">
    <meta name="keywords" content="web开发，html5，css3">
    <meta name="description" content="《web开发》案例演示">
    <meta name="author" content="pan">
    <!--修改<span>文字为红色-->
    <style>
        span{
           color:red;
        }
    </style>
</head>
<body>
<p>黑夜给了我黑色的<span>眼睛</span>,</p>
<p>我却用它寻找<span>光明</span>,</p>
</body>
</html>
```

![image-20210331210245002](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210331210245002.png)

如果想要俩个行内元素也能够各自独占一行，应该怎么做？

#### br元素

在文档里面插入一个简单的换行符

```html
<!DOCTYPE html>
<html>
<head>
    <title> 定义文档内嵌脚本 </title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initital/-scale=1.0">
    <meta name="keywords" content="web开发，html5，css3">
    <meta name="description" content="《web开发》案例演示">
    <meta name="author" content="pan">
    <style>
        span{
           color:red;
        }
    </style>
</head>
<body>
<p>黑夜给了我黑色的<br><span>眼睛</span></p>
<p>我却用它寻找<span>光<br>明</span></p>
</body>
</html>
```

![image-20210331210624164](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210331210624164.png)

###### 行内元素VS块级元素

一般情况下，行内元素只能包含数据和其他行内元素。

块级元素可以包含行内元素和其他块级元素。

这种结构上的包含继承区别可以使**块级元素**创建**比行内元素**更**大型**的结构。

**html要求浏览器将连续的空白字符合并为一个空格。**好处是可以将html 内容布局与文档自身的布局区分开



#### **pre元素**

用于定义预格式化文本（保留文本在源代码中的格式，使得页面中现实的和源代码的效果完全一致）



##### html字符实体（character entities）

具体请查看官方文档

https://man.ilovefishc.com/pageHTML5/ISO.html

```html
<!DOCTYPE html>
<html>
<head>
    <title> 定义文档内嵌脚本 </title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initital/-scale=1.0">
    <meta name="keywords" content="web开发，html5，css3">
    <meta name="description" content="《web开发》案例演示">
    <meta name="author" content="pan">
    <!--<script type="text/javascript" src="patch.js" defer></script>
-->
</head>
<body>
<!---请在下面添加案例-->
<pre>
  &#60;DOCTYPE html&#62;
</pre>
<a href="http://baidu.com">百度</a>
<a href="http://taobao.com">淘宝</a>
<p>踽踽独行</p>
<p>形单影只</p>
</body>
</html>
```

![image-20210331213402075](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210331213402075.png)

##### 语义化：使用恰当的语义的html元素，让网页具有良好的结构与含义，从而让人和机器都能快速理解网页内容。



#### code元素：

```html
<!DOCTYPE html>
<html>
<head>
    <title> 定义文档内嵌脚本 </title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initital/-scale=1.0">
    <meta name="keywords" content="web开发，html5，css3">
    <meta name="description" content="《web开发》案例演示">
    <meta name="author" content="pan">
    <!--<script type="text/javascript" src="patch.js" defer></script>
-->
</head>
<body>
<!---请在下面添加案例-->
<pre>
  &#60;DOCTYPE html&#62;
</pre>
<a href="http://baidu.com">百度</a>
<a href="http://taobao.com">淘宝</a>
<p>踽踽独行</p>
<p>形单影只</p>
<p>html中注释的语法是：<code> &#60;!--z这里填写注释的内容--&#62; </code></p>
</body>
</html>
```

![image-20210331214322382](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210331214322382.png)

关于显示样式会用到css

如果很多需要注释，可以采用<pre>内嵌<code>实现

例：

```html
<!DOCTYPE html>
<html>
<head>
    <title> 定义文档内嵌脚本 </title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initital/-scale=1.0">
    <meta name="keywords" content="web开发，html5，css3">
    <meta name="description" content="《web开发》案例演示">
    <meta name="author" content="pan">
    <!--<script type="text/javascript" src="patch.js" defer></script>
-->
</head>
<body>
<!---请在下面添加案例-->
<pre>
    <code>
  &#60;DOCTYPE html&#62;
     &#60;!--z这里填写注释的内容--&#62;
    </code>
</pre>
<a href="http://baidu.com">百度</a>
<a href="http://taobao.com">淘宝</a>
<p>踽踽独行</p>
<p>形单影只</p>

</body>
</html>
```

![image-20210331214751749](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210331214751749.png)

#### var kbd samp 元素

var：定义程序的变量

kbd：定义用户的输入

samp：定义程序的输出

```html
<!DOCTYPE html>
<html>
<head>
    <title> 定义文档内嵌脚本 </title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initital/-scale=1.0">
    <meta name="keywords" content="web开发，html5，css3">
    <meta name="description" content="《web开发》案例演示">
    <meta name="author" content="pan">
    <!--<script type="text/javascript" src="patch.js" defer></script>
-->
</head>
<body>
<!---请在下面添加案例-->
<pre>
    <code>
  &#60;DOCTYPE html&#62;
     &#60;!--z这里填写注释的内容--&#62;
    </code>
</pre>
<a href="http://baidu.com">百度</a>
<a href="http://taobao.com">淘宝</a>
<p>踽踽独行</p>
<p>形单影只</p>
<p>上面的代码定义了一个变量<var>user_input</var>,用于接收用户的输入</p>
<p>如果用户输入的是<kbd>香蕉</kbd>,那么程序将打印<smap>你最喜欢吃的水果是:香蕉</smap></p>
</body>
</html>
```

![image-20210331215838548](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210331215838548.png)

<var>:表示一个程序的变量的时候</var>

<kbd>：表示用户输入的内容</kbd>

<smap>：表示程序，用户的输出</smap>

