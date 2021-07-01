**input元素：**

type属性：

password:密码

text：文本

```html
<DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>input</title>
</head>
<body>
    <form action="" method="post">
        姓名：<input type="text" name="name"><br>
        邮箱：<input type="text" name="emall"><br>
        <input type="submit" value="提交">
        <input type="reset" value="重写">
        <input type="button"  onclick="msg()" value="点我">
    </form>
    <script>
        function msg(){
            alert("潘尚国")
        }
    </script>
</body>
</html>
```

![image-20210406143918251](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210406143918251.png)

单选框：radio

```html
<DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>input</title>
</head>
<body>
    <form action="" method="post">
        <label><input type="radio" name="sex" value="male">男</label>
        <label><input type="radio" name="sex" value="female">女</label>
    </form>
</body>
</html>
```

注意实现互斥需将name属性设置为同一个

![image-20210406144702443](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210406144702443.png)

复选框：chackbox

```html
<DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>input</title>
</head>
<body>
    <form action="input.html" method="get">
        <input type="checkbox" name="heros[]" value="male">小贾
        <input type="checkbox" name="heros[]" value="deadpool">死亡
        <input type="checkbox" name="heros[]" value="venom">毒品
        <input type="checkbox" name="heros[]" value="blackwidow">炉石
        <input type="checkbox" name="heros[]" value="bulk">钢铁
        <input type="checkbox" name="heros[]" value="female">精钢
        <br><br>
        <input type="submit" value="提交">
    </form>
</body>
</html>
```

![image-20210406150026424](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210406150026424.png)

时间日期元素

time：获取时间

 date ：获取日期

month ：获取年月

week ：获取星期

datetime-local;获取本地的日期和时间

```html
<DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>input</title>
</head>
<body>
    <form action="input.html" method="post">
        <label>时间:<input type="time" name="time"></label>
        <br><br>
        <label>日期:<input type="date" name="date"></label>
        <br><br>
        <label>年月:<input type="month" name="month"></label>
        <br><br>
        <label>星期:<input type="week" name="week"></label>
        <br><br>
        <label>本地日期和时间:<input type="datetime-local" name="datetime-local"></label>
        <br><br>
        <input type="submit" value="提交">
    </form>
</body>
</html>
```

![image-20210406151611704](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210406151611704.png)/

**搜索：**

search：搜索框

color：颜色选择框

image：图像按钮

hidden：将input元素隐藏起来

```html
<DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>input</title>
</head>
<body>
    <form action="input.html" method="post">
        <label>搜索：<input type="search" name="search"></label>
        <br><br>
        <label>颜色选择：<input type="color" name="color"></label>
        <br><br>
        <label>点我：<input type="image" src="img/favicon.png" alt="傻逼傻逼"></label>
        <br><br>
        <label>无用按钮<input type="hidden" name="hidden"></label>
        <br><br>
        <label>时间:<input type="time" name="time"></label>
        <br><br>
        <label>日期:<input type="date" name="date"></label>
        <br><br>
        <label>年月:<input type="month" name="month"></label>
        <br><br>
        <label>星期:<input type="week" name="week"></label>
        <br><br>
        <label>本地日期和时间:<input type="datetime-local" name="datetime-local"></label>
        <br><br>
        <input type="submit" value="提交">
    </form>
</body>
</html>
```

**将文件上传至服务器**

**file：上传文件。**

**需将上传的方式设为;post**

**还需要指定表单的entype属性**

**entype属性;规定在发送给服务器之前，应该采用那种方式对表单的数据进行编码，只有正确的编码才能完整的传递给服务器。**

**默认情况下entype=“application/x-www-form-urlencoded”:会对所有字符进行编码**

**entype=multipart/form-data:文件编码**

```html
<DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>input</title>
    </head>
    <body>
    <form action="" method="post" enctype="image/*">
        <label>请选择你要上传的文件:<input type="file" name="file"></label>
        <br><br>
        <label><input type="button" name="button" value="提交"></label>
        <br><br>
    </form>
    </body>
    </html>
```

**acceprt属性：给用户指定上传的文件类型**

**多个类型可以采用英文逗号隔开。描述文件的类型采用拓展名。**

**所有音频文件：accept="audio/*"**

**所有视频文件：accept="video/*"**

**所有图像文件：accenpt="image/*"**

**mime类型描述**

**指定上传的文件大小：**

```html
<input type="hidden" name="MAX_FILE_SIZE" value="1024">
<label>请选择你要上传的文件:<input type="file" name="file"></label>
```

**上传多个文件**

```html
<label>请选择你要上传的文件:<input type="file" name="file" multiple></label>
```



**type = number：限定数字输入**

**min，max，step：限定数字输入范围**

```html
<label>年龄：<input type="number" name="age" min="1" max="100" step="1"></label>
<br><br>
```



range：数字具象化显示（数值滚动条）

```html
<label>数值滚动条<input type="range" name="number" min="1" max="100" step="1"></label>
<br><br>
```



**邮箱，电话，网址：email，tel，url**

```html
<label>邮箱:<input type="email" name="email"></label>
<br><br>
<label>电话:<input type="tel" name="tel"></label>
<br><br>
<label>网站:<input type="url" name="url"></label>
<br><br>
```

![image-20210406173424264](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210406173424264.png)

**pattern属性：**允许自己指定匹配模式。需要正则表达式

![image-20210406173603707](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210406173603707.png)

**placeholder属性：提示框属性注意此情况用户不填可以绕过浏览器防御，**

**required属性：**输入框必填属性

**size属性**：提示输入框提示符文本框长度限制

**maxlength属性**：限制输入的字符长度

**list属性datalist属性：**共同实现数据列表

```html
<DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>input</title>
    </head>
    <body>
    <form action="" method="post" enctype="multipart/form-data">
        <input type="hidden" name="MAX_FILE_SIZE" value="1024">
        <label>请选择你要上传的文件:<input type="file" name="file"></label>
        <br><br>
        <label>年龄：<input type="number" name="age" min="1" max="100" step="1"></label>
        <br><br>
        <label>数值滚动条<input type="range" name="number" min="1" max="100" step="1"></label>
        <br><br>
        <label>邮箱:<input type="email" name="email" pattren="/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/" placeholder="@xxx.com" required size="20" maxlength="10" ></label>
        <br><br>
        <label>电话:<input type="tel" name="tel" pattern="/^(?:(?:\+|00)86)?1\d{10}$/" placeholder="15464564784" required size="20" maxlength="10"></label>
        <br><br>
        <label>网站:<input type="url" name="url" pattern="/^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?$/" placeholder="http://*****.com" required size="20" list="urllist"></label>
        <br><br>
        <label><input type="button" name="button" value="提交"></label>
        <br><br>
    </form>

    <datalist id="urllist">
        <option value="http://baidu.com">第一个选项:百度</option>
        <option value="http://360.com">第二个选项:360</option>
        <option value="http://sougou.com">第三个选项:搜狗</option>
    </datalist>
    </body>
    </html>
```

![](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210406181338856.png)

**output元素**：输出显示计算结果。

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>output</title>
</head>
<body>
<form oninput="x.value=parseint(a.value)+parseint(b.value)" action="output.html" method="get">
    0<input type="range" id="a" value="50" min="0" max="100">100 +
    <input type="number" id="b" value="50"> =
    <output name="x" for="a b">100</output>
</form>
</body>
</html>
```

**textarea元素：接收多行文本输入**

默认字体都是等宽字体

**rows cols属性设置它的显示的长度宽度（按照英文字符计算）**

```html
<textarea name="saysth" rows="5" cols="30">哪里不会点哪里sifhsiudfyhsiofsdfhsoief</textarea>
<button>提交</button>
```

![image-20210406191540907](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210406191540907.png)

**wrap属性：可被设置为soft hard，off**

**指定在表单提交时，如何处理文本区域的自动换行处理。**

soft:表示在页面渲染中对文本进行自动换行，但换行符（CR=carriage ruturn，LF=line feed）不提交。

hard：表示在页面渲染中对文本进行自动换行，换行符（CR，LF）也会一并提交，如果元素的该属性设置为hard，则必须同时指定cols属性。

off：表示在页面渲染中不对文本进行自动换行。