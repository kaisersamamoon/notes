## **列表**

常见有两种：

**无序列表：使用ul元素（unordered list ）定义，列表中的每个项使用(li元素)包裹起来。**

例：

```html
<!DOCTYPE html >
<html>
<head>
    <title>列表实例演示</title>
    <meta charset="utf-8">

</head>
<body>
    <!--使用ul元素创建一个无序列表-->
    <ul>
        <li>coffee</li>
        <li>tea</li>
        <li>me</li>
    </ul>
</body>
</html>
```

![image-20210402144023133](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210402144023133.png)

无序列表左边默认是一个小黑点。

**有序列表：定义有序列表使用ol元素，列表中的每个项使用（li元素）包裹起来**

ol元素属性：

| 属性     | 值            | 描述                     |
| -------- | ------------- | ------------------------ |
| reversed | reversed      | 规定列表顺序为降序9~1    |
| start    | number        | 规定有序列表的起始值     |
| type     | 1，A，a，I ,i | 规定列表中使用的标记类型 |

I,i表示使用罗马字符显示

reversed只影响前面的序列，并不会影响内容

例：

```html 
<!DOCTYPE html >
<html>
<head>
    <title>列表实例演示</title>
    <meta charset="utf-8">

</head>
<body>
    <!--使用ul元素创建一个无序列表-->
    <ul>
        <li>coffee</li>
        <li>tea</li>
        <li>me</li>
    </ul>
    <!--使用ol元素来创建一个有序列表-->
    <ol reversed="reversed" start="10" type="1">
        <li>coffee</li>
        <li>tea</li>
        <li>me</li>
    </ol>
</body>
</html>
```

![image-20210402145754410](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210402145754410.png)

**两个常用的css属性**

list-style-type属性：允许你将列表的标志设置为方的，圆的，圈的，还有你看不到的。

| 值              | 描述               |
| --------------- | ------------------ |
| disc            | 实心圆             |
| circle          | 空心圆             |
| square          | 实心方块           |
| decimal         | 阿拉伯数字         |
| lower-roman     | 小写罗马数字       |
| upper-roman     | 大写罗马数字       |
| lower-alpha     | 小写英文字母       |
| upper-alpha     | 大写英文字母       |
| none            | 不使用项目符号     |
| armenian        | 传统的亚美尼亚数字 |
| cjk-ideographic | 浅白的表意数字     |
| georgian        | 传统的乔治数字     |
| lower-greek     | 基本的希腊小写字母 |
| hebrew          | 传统的西伯莱数字   |
| hiragana        | 日本片假名字符     |
| hiragana-iroha  | 日本片假名序号     |
| lower-latin     | 小写拉丁字母       |
| upper-latin     | 大写拉丁字母       |



```html
<!DOCTYPE html >
<html>
<head>
    <title>列表实例演示</title>
    <meta charset="utf-8">
    <!--通过list-style-type设置列表的标志-->
    <style>
    ul.a{list-style-type:square;}
    ul.b{list-style-type:disc;}
    ul.c{list-style-type:circle}
    ul.d{list-style-type:none}
    </style>
</head>
<body>
    <!--使用ul元素创建一个无序列表-->
    <ul class="a">
        <li>coffee</li>
        <li>tea</li>
        <li>me</li>
    </ul>

    <ul class="b">
        <li>coffee</li>
        <li>tea</li>
        <li>me</li>
    </ul>
    <ul class="c">
        <li>coffee</li>
        <li>tea</li>
        <li>me</li>
    </ul>
    <ul class="d">
        <li>coffee</li>
        <li>tea</li>
        <li>me</li>
    </ul>
</body>
</html>
```

![image-20210402151357868](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210402151357868.png)

同时list-style-type也可以设置有序列表的标志



**list-style-image设置列表自定义标志**

```html
<!DOCTYPE html >
<html>
<head>
    <title>列表实例演示</title>
    <meta charset="utf-8">
    <!--通过list-style-type设置列表的标志-->
    <style>
    ul.e{list-style-image:url("img/kfc.png")}
    </style>
</head>
<body>

    </ul>
    <ul class="e">
        <li>coffee</li>
        <li>tea</li>
        <li>me</li>
    </ul>
   
</body>
</html>
```



**列表嵌套**

```html
<!DOCTYPE html >
<html xmlns="http://www.w3.org/1999/html">
<head>
    <title>列表实例演示</title>
    <meta charset="utf-8">
    <!--通过list-style-type设置列表的标志-->

</head>
<body>
    
    <!--下面使用列表嵌套-->
    <ol class="1">
        <li>标题1</li>
        <li>标题2
            <ul class="f">
                <li>段落1</li>
                <li>段落2</li>
            </ul>
        </li>
        <li>标题3
        <ul class="g">
            <li>段落1</li>
            <li>段落2</li>
        </ul>
        </li>
    </ol>

</body>
</html>
```

![image-20210402162730684](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210402162730684.png)

**dl元素定义列表：该元素包含术语，定义，以及描述的列表，通常和dt元素，dd元素配合使用。****

**dt元素：用于定义列表中项目部分内容。**

**dd元素;用于定义描述部分的内容。**

```html
<!DOCTYPE html >
<html xmlns="http://www.w3.org/1999/html">
<head>
    <title>列表实例演示</title>
    <meta charset="utf-8">
    <!--通过list-style-type设置列表的标志-->
   
</head>
<body>

  
    <dl>
        <img src="img/kfc.png">
        <dt><a href="http://baidu.com">百度</a></dt>
        <dd>百度是拥有强大互联网基础的领先AI公司。是全球为数不多的提供AI芯片、软件架构和应用程序等全栈AI技术的公司之一，被国际机构评为全球四大AI公司之一。百度以“用科技让复杂的世界更简单”为使命，坚持技术创新，致力于“成为最懂用户，并能帮助人们成长的全球顶级高科技公司”。

            百度公司2000年1月1日创立于中关村，创始人李彦宏拥有“超链分析”技术专利，也使中国成为美国、俄罗斯、和韩国之外，全球仅有的4个拥有搜索引擎核心技术的国家之一。百度每天响应来自100余个国家和地区的数十亿次搜索请求，是网民获取中文信息和服务的最主要入口，服务10亿互联网用户。

            基于搜索引擎，百度演化出语音、图像、知识图谱、自然语言处理等人工智能技术；最近10年，百度在深度学习、对话式人工智能操作系统、自动驾驶、AI芯片等前沿领域投资，使得百度成为一个拥有强大互联网基础的领先AI公司。</dd>
        <img src="img/kfc.png">
       <dt><a href="http://douban.com">豆瓣</a></dt>
        <dd>你经常对着书店里的绵绵不绝的封面发呆吗？或者头晕脑涨地从音像店的琳琅满目中逃出？宽带下载和网上购物降临之后，即使在最小的城镇，你的选择也在每天成百上千地增加。这其中一定有你会喜爱的东西，但十有八九它们会在不知不觉中和你擦肩而过。媒体让老少咸宜的大片无处不在，对只适合一群人的东西却显得力不从心。而且，萝卜青菜，各有所爱，不管电视的娱乐编辑和报纸的书评作家多么公正和勤勉，他们的帮助都不可能对所有人同样有效。

            　　豆瓣的发起者发现，对多数人做选择最有效的帮助其实来自亲友和同事。随意的一两句推荐，不但传递了他们自己真实的感受，也包含了对你口味的判断和随之而行的筛选。他们不会向单身汉推荐育儿大全，也不会给老妈带回赤裸特工。遗憾的是，你我所有的亲友加起来，听过看过的仍然有限。而且，口味最类似的人却往往是陌路。

            　　如果能不一一结交，却知道成千上万人的口味，能从中间迅速找到最臭味相投的，口口相传的魔力一定能放大百倍，对其中每一个人都多少会有帮助。豆瓣随着这一个愿望产生。豆瓣不针对任何特定的人群，力图包纳百味。无论高矮胖瘦，白雪巴人，豆瓣帮助你通过你喜爱的东西找到志同道合者，然后通过他们找到更多的好东西。</dd>
        <img src="img/kfc.png">
        <dt><a href="http://tencent.com">腾讯</a></dt>
        <dd>腾讯(腾讯控股有限公司)是一家互联网企业，由马化腾、张志东、许晨晔、陈一丹、曾李青于1998年11月共同创立，是中国最大的互联网综合服务提供商之一，也是中国服务用户最多的互联网企业之一。</dd>
    </dl>
</body>
</html>
```



## **表格制作**

```html
<!DOCTYPE html>
<html>
<head>
    <title>表格制作</title>
    <meta charset="utf-8">
</head>
<body>
    <table>
        <tr>
            <th>姓名</th>
            <th>年龄</th>
        </tr>
        <tr>
            <td>张三</td>
            <td>18</td>
        </tr>
        <tr>
            <td>李四</td>
            <td>25</td>
        </tr>
    </table>
</body>
</html>
```

![image-20210402172345849](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210402172345849.png)

**table元素：用于定义一个表格**

**tr元素（table row）：用于定义表格里面的行。**

**th元素（table header cell）:定义表头单元格。**

**td元素(table data cell):用于定义数据单元格。**（普通数据单元格内容可以是文本，图像，列表，表格）

默认情况下浏览器会对**（th元素）**表头单元格里面的内容进行加粗居中的处理。

```html
<!DOCTYPE html>
<html>
<head>
    <title>表格制作</title>
    <meta charset="utf-8">
    <style>
        table,th,td{border: 1px solid black;}
    </style>
</head>
<body>
    <table>
        <tr>
            <th>姓名</th>
            <th>年龄</th>
            <th>经典语录</th>
        </tr>
        <tr>
            <td>张三</td>
            <td>18</td>
            <td>悲观者往往正确，乐观者往往成功</td>
        </tr>
        <tr>
            <td>李四</td>
            <td>25</td>
            <td>种一棵树，最好的时间是10年前，其次是现在</td>
        </tr>
    </table>
</body>
</html>
```

![image-20210402173516835](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210402173516835.png)

border: ：设置边框样式

solid black;将边框绘制为一条黑色实线。

同时表格会根据文本长度不同自动调整属性。



**为啥边框呈现出多条线段：**

```
<!DOCTYPE html>
<html>
<head>
    <title>表格制作</title>
    <meta charset="utf-8">
    <style>
        table{border: 1px solid black;}
    </style>
    <style>
        th{border: 1px solid red;}
    </style>
    <style>
        td{border: 1px solid blue;}
    </style>
</head>
<body>
    <table>
        <tr>
            <th>姓名</th>
            <th>年龄</th>
            <th>经典语录</th>
        </tr>
        <tr>
            <td>张三</td>
            <td>18</td>
            <td>悲观者往往正确，乐观者往往成功</td>
        </tr>
        <tr>
            <td>李四</td>
            <td>25</td>
            <td>种一棵树，最好的时间是10年前，其次是现在</td>
        </tr>
    </table>
</body>
</html>
```

![image-20210402174050228](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210402174050228.png)

原因在于设置了三个属性的边框

解决方法：

```html
<!DOCTYPE html>
<html>
<head>
    <title>表格制作</title>
    <meta charset="utf-8">
    <style>
        table{border: 1px solid black;
        border-collapse:collapse

        }

    </style>
    <style>
        th{border: 1px solid red;
        }
    </style>
    <style>
        td{border: 1px solid blue;}
    </style>
</head>
<body>
    <table>
        <tr>
            <th>姓名</th>
            <th>年龄</th>
            <th>经典语录</th>
        </tr>
        <tr>
            <td>张三</td>
            <td>18</td>
            <td>悲观者往往正确，乐观者往往成功</td>
        </tr>
        <tr>
            <td>李四</td>
            <td>25</td>
            <td>种一棵树，最好的时间是10年前，其次是现在</td>
        </tr>
    </table>
</body>
</html>
```

 在设置颜色边框的时候;添加border-collapse:collapse属性。

![image-20210402174418763](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210402174418763.png)

**表格添加标题caption元素；**默认在表格上面添加一个标题。

注意;caption元素必须紧挨着table元素

```html
<table>
    <caption>表格目录</caption>
    <tr>
        <th>姓名</th>
        <th>年龄</th>
        <th>经典语录</th>
    </tr>
    <tr>
        <td>张三</td>
        <td>18</td>
        <td>悲观者往往正确，乐观者往往成功</td>
    </tr>
    <tr>
        <td>李四</td>
        <td>25</td>
        <td>种一棵树，最好的时间是10年前，其次是现在</td>
    </tr>
</table>
```

![image-20210402174943916](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210402174943916.png)

**css的caption元素（padding属性）：调整单元格的内边距。**

```html
<!DOCTYPE html>
<html>
<head>
    <title>表格制作</title>
    <meta charset="utf-8">
    <style>
        table{border: 1px solid black;
        border-collapse:collapse
        }
        th{border: 1px solid red; padding:10px}
        td{border: 1px solid blue;padding:10px}
        caption{padding:20px;}
    </style>
</head>
<body>
    <table>
        <caption>表格目录</caption>
        <tr>
            <th>姓名</th>
            <th>年龄</th>
            <th>经典语录</th>
            <th>照片</th>
        </tr>
        <tr>
            <td>张三</td>
            <td>18</td>
            <td>悲观者往往正确，乐观者往往成功</td>
            <td><img src="img/钢铁侠.png"  width="150"></td>
        </tr>
        <tr>
            <td>李四</td>
            <td>25</td>
            <td>种一棵树，最好的时间是10年前，其次是现在</td>
            <td><img src="img/蜘蛛侠.jpg" width="300"></td>
        </tr>
    </table>
</body>
</html>
```

![image-20210402181025999](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210402181025999.png)

表格css属性：

**border可以设置表格的边框。**

**border-collapse：使边框叠加。**

**xxxx：padding：设置表格内部间距。**

**background；设置表格背景颜色。**





**thead元素，tbody元素，tfoot元素：对表格进行更进一步更细致的划分。**

**（表头，主体，表尾）**



**th元素，td元素内部属性：**

**colspa属性：用于设置单元格横跨的列数。**

```html
<!DOCTYPE html>
<html>
<head>
    <title>表格制作</title>
    <meta charset="utf-8">
    <style>
        table{border: 1px solid black;
        border-collapse:collapse
        }
        th{border: 1px solid black; padding:10px}
        td{border: 1px solid black;padding:10px}
        caption{padding:15px;}
        thead th{
            background:gray;
            color:white;}
        tbody th{
            background:lightgray;
            color:white;
        }
    </style>
</head>
<body>
    <table>
        <caption>复仇者联盟主要成员技能表</caption>>
        <!--添加 thead 和 tbody元素，更细致地规划表格-->
        <thead>
            <tr>
                <th>外号</th>
                <th>原名</th>
                <th>特长</th>
                <th>照片</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>死侍</th>
                <td>韦德威尔逊</td>
                <td>***</td>
                <td><img src="img/死侍.jpg"></td>
            </tr>
            <tr>
                <th>美国队长</th>
                <td>史蒂芬.罗杰斯</td>
                <td>***</td>
                <td><img src="img/美国队长.jpg"></td>
            </tr>
            <tr>
                <th>黑寡妇</th>
                <td> 娜塔莎罗曼诺夫</td>
                <td>***</td>
                <td><img src="img/黑寡妇.jpg"></td>
            </tr>
            <tr>
                <th>绿巨人</th>
                <td>布鲁斯.班纳</td>
                <td>***</td>
                <td><img src="img/绿巨人.jpg"></td>
            </tr>
    </table>

</body>
    <tfoot>
        <tr>
            <td colspan="4">上述资料皆为个人主观臆断，非官方资料，仅供娱乐。</td>
        </tr>
    </tfoot>
</html>
```

![image-20210403170620386](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210403170620386.png)

![image-20210403170638366](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210403170638366.png)

**rowspan属性**：用于设置单元格纵跨的行数。

![image-20210403170416407](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210403170416407.png)![image-20210403170442411](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210403170442411.png)

正确做法先把5/8单元格删去

![image-20210403170528922](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210403170528922.png)

批量设置表格中一列或者多行的样式，使用colgroup和col定义表格单独列的任意属性
col能覆盖colgroup定义的属性

**colgroup元素**

colgroup 中的 span="1" 是控制style给表格中的前几列(如果后面无col则有效)








