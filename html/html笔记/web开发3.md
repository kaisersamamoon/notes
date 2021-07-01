 表单

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>表单</title>
</head>
<body>
    <form action="表单.html" method="post">
        名字:<input type="text" name="name" placeholder="请输入你的名字"><br><br>
        邮箱:<input type="text" name="emall" placeholder="请输入你的邮箱"><br><br>
        <button type="submit">提交</button>
    </form>

</body>
</html>
```

![image-20210404142926227](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210404142926227.png)

form :定义一个表单

action：当提交表单时，表单数据会提交到你选择的" 的脚本处理：

如未选择会从当前页面处理。

method：

 属性规定如何发送表单数据（表单数据发送到 action 属性所规定的页面）。

表单数据可以作为 URL 变量（method="get"）或者 HTTP post （method="post"）的方式来发送。 

post:

get：

input：输入

type：输入类型

placeholder：表单默认显示的文本，当用户输入时消失。

button:按钮，

| 属性                                                         | 值                                   | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------- | :----------------------------------------------------------- |
| [autofocus](https://www.w3school.com.cn/tags/att_button_autofocus.asp) | autofocus                            | 规定当页面加载时按钮应当自动地获得焦点。                     |
| [disabled](https://www.w3school.com.cn/tags/att_button_disabled.asp) | disabled                             | 规定应该禁用该按钮。                                         |
| [form](https://www.w3school.com.cn/tags/att_button_form.asp) | *form_name*                          | 规定按钮属于一个或多个表单。                                 |
| [formaction](https://www.w3school.com.cn/tags/att_button_formaction.asp) | *url*                                | 覆盖 form 元素的 action 属性。**注释：**该属性与 type="submit" 配合使用。 |
| [formenctype](https://www.w3school.com.cn/tags/att_button_formenctype.asp) | 见注释                               | 覆盖 form 元素的 enctype 属性。**注释：**该属性与 type="submit" 配合使用。 |
| [formmethod](https://www.w3school.com.cn/tags/att_button_formmethod.asp) | get post                             | 覆盖 form 元素的 method 属性。**注释：**该属性与 type="submit" 配合使用。 |
| [formnovalidate](https://www.w3school.com.cn/tags/att_button_formnovalidate.asp) | formnovalidate                       | 覆盖 form 元素的 novalidate 属性。**注释：**该属性与 type="submit" 配合使用。 |
| [formtarget](https://www.w3school.com.cn/tags/att_button_formtarget.asp) | _blank _self _parent _top  framename | 覆盖 form 元素的 target 属性。**注释：**该属性与 type="submit" 配合使用。 |
| [name](https://www.w3school.com.cn/tags/att_button_name.asp) | *button_name*                        | 规定按钮的名称。                                             |
| [type](https://www.w3school.com.cn/tags/att_button_type.asp) | button reset submit                  | 规定按钮的类型。                                             |
| [value](https://www.w3school.com.cn/tags/att_button_value.asp) | *text*                               | 规定按钮的初始值。可由脚本进行修改。                         |

**注释：**formenctype 属性可能的值：

- application/x-www-form-urlencoded
- multipart/form-data
- text/plain

## 全局属性

<button> 标签支持 [HTML 中的全局属性](https://www.w3school.com.cn/tags/html_ref_standardattributes.asp)。

## 事件属性

<button> 标签支持 [HTML 中的事件属性](https://www.w3school.com.cn/tags/html_ref_eventattributes.asp)。



**自动填充如何实现：**

通过匹配浏览器的input元素的name属性得知的