javascript是一门动态语言。可以运行在浏览器，node，（浏览器，node为js提供运行环境）

用于构建后端，移动端应用。

**JS（javascript）与ES（ECMAscript）的区别：**

ES（ECMAscript）是一个新的规范（js超集）符合这个规范的JS就是ES

**ECMA组织：**用来制定规范，它们负责ES规范

```js
console.log('hello world');
hello world

```



javascript如何添加到html文档当中

**script元素**：可以写在head，body部分，（建议将script写在body部分的尾部）

1.原因在于浏览器会按照从上到小的顺序解析文件

2.script元素会获取页面中的元素，

```html
    <script>
         //在控制台中输出一条日志信息
        console.log('hello world');
    </script>
```

这是一条语句，语句是一条代码，表示要执行的操作。

js中所有语句都需要用；结尾

**引用外部js文件**

<script src="index.js"></script>

**终端运调试js文件**

![image-20210415192933436](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210415192933436.png)



