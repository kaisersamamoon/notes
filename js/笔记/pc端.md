**PC端网页特效**



#### 元素偏移量offset系列



offset翻译过来就是偏移量 我们使用offset系列相关属性可以动态得到该元素的位置（偏移），大小

1.获得元素距离带有定位父元素的位置

2.获得元素自身的大小（宽度高度）

注意返回的数值都不带单位



**元素的位置**



**element.offsetparent**  返回作为该元素带有定位的父级元素，如果父级元素都没有定位则返回body。



**元素偏移**



**element.offsetTop**：返回元素相对带有定位元素上方的偏移

**element.offsetLeft**：返回元素相对带有定位父元素左边框的偏移



**元素的大小**



**element.offsetWidth**：返回自身包括 padding ，边框 内容区的宽度 返回值不带单位

**element.offsetHeight**：返回自身包括 padding ，边框 ，内容区的高度，返回数值不带单位



#### offset 与 style区别

| offset                                         | style                                       |
| ---------------------------------------------- | ------------------------------------------- |
| offset 可以得到任意样式表中的样式值            | style只能得到行内样式表中的样式值           |
| offset 系列获得的数值没有单位                  | style.width 获得是带有单位的字符串          |
| offsetWidth包含padding border width            | style.width 获得不包含padding 和border的值  |
| offsetWidth 等属性是只读属性 只能获取 不能赋值 | style.width 是可读写属性 可以获得也可以赋值 |
| 所有 我们想要获取元素大小位置，用offset更合适  | 所有 我们想要给元素更改值 则需要用style改变 |



#### **元素可视区client系列**

client翻译过来就是客户端，我们使用client系列的相关属性来获取元素可视区的相关信息 通过clint系列的相关属性可以动态的得到元素的边框大小，高度大小等。

element.clientTop ;返回元素上边框的大小

element.clientLift返回元素左边框的大小

element.clientWidth：返回自身包括padding 内容区的宽度 不含边框 返回数值不带单位

element.client.Heigth 返回自身包括padding 内容区的高度 不含边框 返回数组不带单位



#### 立即执行函数

不需要调用，立马能执行的函数

**( function  函数名( 形参) {函数本体} ) (实参)**；或者

**（function函数名（形参）{函数本体}（实参））；**

主要作用：创建一个独立的作用域，里面的所有变量都是局部变量，不会有命名冲突的情况





#### **元素滚动scroll系列**

![image-20210425193927613](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210425193927613.png)

