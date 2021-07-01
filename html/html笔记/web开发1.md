## HTML元素

#### q元素

#### 用于定义比较短的引用

```html
<!DOCTYPE html>
<html>
<head>
<title>第一次程序</title>
</head>
<body>
<h1>标题1</h1>
<h2>标题2</h2>
<p>段落标签</p>
<p>李白：<q>云想衣裳花想容，春风扶槛露华浓</q></p>
</body>
</html>
```

![image-20210401183540480](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210401183540480.png)

#### blockquote元素：引用一大段文本

###### 格式

```html
<body>
<blockquote cite="http://baidu.com">
    <!--这里是一大段引用-->
    <!--这里是一大段引用-->
    <!--这里是一大段引用-->
</blockquote>
</body>
```

###### cite属性:

指定文本的来源

#### blockquote与q元素的区别:

###### q元素：通常用于简短的行内引用。

###### blookquote元素：使用缩进的形式区分的。

例：

```html
<body>
<p>下面红色采用q元素</p>
<p>李白：<q>云想衣裳花想容，春风扶槛露华浓</q></p>
<p>下面采用蓝色blookquote元素</p>
<blockquote cite="http://baidu.com">
    疫情期间发生的事，让我对人类情感更加绝望。杭州。我在楼下水果店买西瓜，需要切块。
    大半个西瓜，店长阿姨就拿了六个盒子准备切了装。我劝道：阿姨，别用盒子，用袋子就好
    了。阿姨：为啥不用盒子？我：盒子成本挺高的吧，我一个人吃，用塑料袋就好了。阿姨切
    西瓜的手就突然停住了。我从背后观望许久，才发现：切西瓜的店老板，一位中年女性，哭
    了。这个画面，难以言表。阿姨边哭边说：诶呀，房东今天刚来过，要500多一天的租金，
    我一天都卖不出500块，盒子真的很贵，你是第一个说要我省着用盒子的客人，真是个好人
    啊。我对阿姨说: 疫情大家都过得不容易呀，阿姨加油，今年的目标是活下去。我并不觉得
    我是一个好人。我的内心真实写照：店长阿姨，我已经站在了你的角度，帮你节约成本，那
    么，你能不能别哭了，西瓜还没切完，眼泪滴到西瓜上我还怎么吃？能不能快点切完，别浪
    费我时间了。我会优先考虑他人，为他人着想，不给大家添麻烦。所以，大家，能不能不要
    来麻烦我。阿姨在西瓜的袋子里放了几个李子，说什么也要我尝一尝今天刚到的李子。还说
    认得我，每次切完水果，都微笑说麻烦了，谢谢。我又强颜微笑寒暄了一阵子，让阿姨注意身
    体，店铺的生意也会好起来的。临走前，偷偷把李子放了回去，我看到一个李子平均下来估计
    要两块钱一个了。这家店，我再也没去过，我宁愿多走500米，去另一家水果店。单纯觉得
    麻烦。想了想，留给我的水果店不多了，无论哪家店，去了几次店长都会闲着没事儿，超越
    寒暄的标准，开始户口调查，最夸张的还有要介绍女儿的。真的太麻烦了。1公里外有一家沙
    <!--这里是一大段引用-->
    <!--这里是一大段引用-->
    <!--这里是一大段引用-->
</blockquote>
</body>
```



![image-20210401185124652](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210401185124652.png)

##### 注意两者区别

html5提倡语义与呈现分离



#### cite元素：

#### 主要定义作品的标题。

```html
<p><cite>元答案</cite></p>
```

#### abbr元素：

#### 用于定义简称及缩写配合全局属性title可以指定该缩进代表的完整含义。

```html
<!DOCTYPE html>
<html>
<head>
<title>第一次程序</title>

</head>
<body>
<p><abbr title="凯瑟">kaiserse</abbr>是大帅哥</p>

</body>
</html>
```

![image-20210401191350675](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210401191350675.png)

#### address元素：定义文档，文章的作者拥有者的联系信息（地址，邮箱，手机号）

```html
<!DOCTYPE html>
<html>
<head>
<title>第一次程序</title>

</head>
<body>
<p><abbr title="凯瑟">kaiserse</abbr>是大帅哥</p>
<address>
    <strong>联系我们</strong>
    邮箱:<a href="http://baidu.com">http@qq.com</a><br>
    微信：kaisersamamoon<br>
    手机：55834211<br>

</address>
</body>
</html>
```

![image-20210401192943812](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210401192943812.png)

#### **ruby元素，rt元素，rp元素**

ruby元素 需要与rt元素 以及rp元素 搭配使用，

##### rt元素;用来标记这个注音符号。

##### rp元素：用来标记当浏览器不支持ruby元素时所显示的内容。

例：

```html
<!DOCTYPE html>
<html>
<head>
<title>第一次程序</title>

</head>
<body>
    <ruby>&nbsp;魑<rp> (</rp><rt>chī</rt><rp>) </rp>&nbsp;</ruby>
    <ruby>&nbsp;魅<rp> (</rp><rt>meì</rt><rp>) </rp>&nbsp;</ruby>
    <ruby>&nbsp;魍<rp> (</rp><rt>wāng</rt><rp>) </rp>&nbsp;</ruby>
    <ruby>&nbsp;魉<rp> (</rp><rt>liāng</rt><rp>) </rp>&nbsp;</ruby>
</body>
</html>
```

![image-20210401195623605](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210401195623605.png)

###### &nbsp空格

#### **bdo元素：**

##### 允许你修改文本的默认方向（默认从左往右）

##### dir属性可以指定两种值，默认为ltr（left to right）从左往右

##### 另一种为rtl（right to left）从右往左

例：

```html
<!DOCTYPE html>
<html>
<head>
<title>第一次程序</title>

</head>
<body>

    <bdo dir="ltr">
        <ruby>&nbsp;魑<rp> (</rp><rt>chī</rt><rp>) </rp>&nbsp;</ruby>
        <ruby>&nbsp;魅<rp> (</rp><rt>meì</rt><rp>) </rp>&nbsp;</ruby>
        <ruby>&nbsp;魍<rp> (</rp><rt>wāng</rt><rp>) </rp>&nbsp;</ruby>
        <ruby>&nbsp;魉<rp> (</rp><rt>liāng</rt><rp>) </rp>&nbsp;</ruby>
    </bdo>
    
    <br>
    
    <bdo dir="rtl">
        <ruby>&nbsp;魑<rp> (</rp><rt>chī</rt><rp>) </rp>&nbsp;</ruby>
        <ruby>&nbsp;魅<rp> (</rp><rt>meì</rt><rp>) </rp>&nbsp;</ruby>
        <ruby>&nbsp;魍<rp> (</rp><rt>wāng</rt><rp>) </rp>&nbsp;</ruby>
        <ruby>&nbsp;魉<rp> (</rp><rt>liāng</rt><rp>) </rp>&nbsp;</ruby>
    </bdo>
</address>
</body>
</html>
```

![image-20210401200521415](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210401200521415.png)

## 格式化

**strong元素和b元素**

**strong元素:用于强调某些文本内容的重要性（通常以加粗的形式呈现）**

**b元素：可用于加粗文本中的内容。**

注意：b元素只是单纯地加粗文本内容，strong元素有强调重要的作用。

```html
<!DOCTYPE html>
<html>
<head>
    <title>strong</title>
    <meta charset="utf-8">
   
</head>
<body>
    <!--使用strong元素表示内容-->
    <p>疫情期间发生的事<strong>元答案</strong></p>
    <p>疫情期间发生的事<b>元答案</b></p>
</body>
</html>
```

![](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210401204627754.png)

em元素和i元素

em元素：表示强调的语义（通常以斜体的形式呈现）

i元素：可用于将文本变成斜体

```html
<!DOCTYPE html>
<html>
<head>
    <title>strong</title>
    <meta charset="utf-8">
   
</head>
<body>
    <!--使用em元素表示内容-->

    <p>疫情期间发生的事<em>元答案</em></p>
    <p>疫情期间发生的事<i>元答案</i></p>
</body>
</html>
```

![image-20210401204822734](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210401204822734.png)



**同时可选择使用css代替b和i元素**

例：

```html
<!DOCTYPE html>
<html>
<head>
    <title>strong</title>
    <meta charset="utf-8">
    <style type="text/css">
        .bold{
            font-weight:bolder;
        }
        .italic{
            font-style:italic ;
        }
    </style>
</head>
<body>
    
    <!--使用css使文本变粗-->
    <p class="bold">疫情期间发生的事元答案</p>
    <!--使用em元素倾斜-->
    <p>疫情期间发生的事<em>元答案</em></p>
    <!--使用i元素倾斜-->
    <p><i>元答案</i></p>
    <!--使用css使文本倾斜-->
    <p class="italic">疫情期间发生的事元答案</p>
</body>
</html>
```

![image-20210401210439164](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210401210439164.png)



**del元素和ins元素**

**del元素(delete)：删除线**

**ins元素(insert)：下划线**

例：

```html
<!DOCTYPE html>
<html>
<head>
    <title>strong</title>
    <meta charset="utf-8"> 
</head>
<body>
    <p>从今天起<del>重庆力帆足球俱乐部</del>更名为<ins>重庆两江竞技足球俱乐部</ins></p>
</body>
</html>
```

![image-20210401211540453](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210401211540453.png)

***s元素：默认呈删除线（与del元素语义不同）***

**s元素定义那些表示不再正确、错误的内容。**

```html
<!DOCTYPE html>
<html>
<head>
    <title>strong</title>
    <meta charset="utf-8">
    
</head>
<body>
    <p><s>重庆力帆足球俱乐部</s></p>
</body>
</html>
```



![image-20210401212116810](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210401212116810.png)

**u元素：默认呈下划线**

**u元素定义的是拼写错误的单词，或者汉语中的专有名词。**

```html
<!DOCTYPE html>
<html>
<head>
    <title>strong</title>
    <meta charset="utf-8">

</head>
<body>

    <p><u>panshangguo</u></p>
</body>
</html>
```

![image-20210401212700406](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210401212700406.png)



**mark元素：标记本文的作用(默认为黄色)**

```html
<!DOCTYPE html>
<html>
<head>
    <title>strong</title>
    <meta charset="utf-8">

</head>
<body>

  <p><mark>下次一定</mark></p>
</body>
</html>

```

![image-20210401213041634](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210401213041634.png)



**sup元素：上标文本**

**sub元素：下标文本**

**（定义数学公式或者说化学公式）**

```html
<!DOCTYPE html>
<html>
<head>
    <title>strong</title>
    <meta charset="utf-8">
</head>
<body>
    <p>x<sup>2</sup>*log<sub>2</sub><sup>5</sup></p>
</body>
</html>
```

![image-20210401213850406](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210401213850406.png)



**small元素：使指定的文字变小**

```html
<!DOCTYPE html>
<html>
<head>
    <title>strong</title>
    <meta charset="utf-8">
</head>
<body>
    <p>下面这一行文字<small>变小了</small></p>
</body>
</html>
```

![image-20210401214239390](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210401214239390.png)

