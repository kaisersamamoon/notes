#### 自定义属性的操作

**1.获取属性值**

element.属性

element.getAttribute('属性')

**区别**;element.属性;获取的是内置属性值（元素本身自带的属性）：

element.getAttribute(‘属性'):主要获取自定义的属性（标准），我们程序员自定义的属性

**2.设置属性值**

![image-20210424134606305](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210424134606305.png)

1.element.属性 = ‘值’   ；    //设置内置属性值

2. element.setAttribute('属性‘，’值')；//主要针对自定义属性



#### 3.移除某个属性

element.removeAttribute('属性')；



#### 4.自定义属性

**H5规定自定义属性采用data开头**

```
<div date-index = '1'></div>
```

或者使用js设置

```
element.setAttribute('date-index',2);
```

#### **兼容性获取**



**element.getAttribute('date-index')**



#### **H5新增获取自定义属性**



**element.dateset.index**

**element.dateset['index']**

一个集合，获取所有以date开头的自定义属性

如果自定义属性里面有多个-链接采用驼峰命名法获取





#### 节点操作DOM

获取元素通常使用两者方式：

**1.利用DOM提供的方法获取元素**

![image-20210424141355685](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210424141355685.png)



**2.利用节点层级关系获取**

利用父子兄关系获取元素

逻辑性强，但是兼容性稍差

**一般 节点至少拥有node Type( 节点类型) ,node Name(节点名称) node Value( 节点值) 这三个基本属性**

元素节点 node Type：1

属性节点 node Type：2

文本节点node Type：3(文本节点包括文字 空格 换行等)

**在实际开发中 节点操作主要是操作的是元素节点。**



#### 节点层级

![image-20210424142315336](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210424142315336.png)

**1.父亲节点**：



node.parentNode

```js
let erweima = document.querySelector('.erweima');
let mare = erweima.parentNode;	//它的父元素
```

**2.子节点**：



1.**parentNode.childNodes**

注意childNode得到的所有子节点包含空格和换行

```js
let erweima = document.querySelector('.erweima');
let mare = erweima.childNodes;	//它的子元素集js
```

如果只想要获得里面的元素节点，则需要专门的处理，所有我们一般不提倡使用childNodes

![image-20210424143630030](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210424143630030.png)

2**.parentNode.children(非标准)**

children是一个只读属性，返回所有的子元素节点，它只返回子元素节点，其余节点不返回



**2.1节点层次**：



1. **parentNode.firstClid**

返回第一个子节点，找不到返回null，也是包含所有节点



2. **parentNode.lastClid**

返回最后一个子节点，



3. **parentNode.firstElemtClid**

   返回第一个子元素节，有兼容性问题（ie9以上）

   

4. **parentNode.lastElemtCild**

   返回最后一个子元素节点，有兼容性问题（ie9以上）

   

5. 实际开发中的写法

   **parentNode.children[0];**

   采用伪数组下标方式

   

**3.兄弟节点**



1.**node .nextSibling**

​	nextSibling返回当前元素的下一个兄弟节点，找不到则返回null，同样，也是包含所有节点。

2.**node.previouSibling**

​	previouSIbling 返回当前元素上一个兄弟节点，找不到则返回null，同样，也是包含所有节点。

3.**node.nextElementSibling**

​	nextElementSibling返回当前节点的下一个兄弟元素节点，有兼容性问题（ie9以上）

4.**node.previouElementSibling**

​	previouElementSibling返回当前节点的上一个兄弟元素节点，有兼容性问题（ie9以上）

**5.如何解决兼容性问题**

封装一个兼容性的函数

![image-20210424150346916](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210424150346916.png)



#### 创建节点



**1.创建节点**



​	**docment.createElement('TagName')**

​	docment.createElement('TageName')方法创建由指定方法创建由TagName指定的html元素，因为这些元素原来不存在，是根据我们的需求动态生成的，所有我们也称为动态创建元素节点。



**2.添加节点**



**1.node.appendChild(Child)**

node.appendChild()方法将一个节点添加到指定父节点的子节点列表末尾，类似于css里面的after伪元素(**后面追加元素**)

![image-20210424151234272](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210424151234272.png)

​	**2.node.insertBefroe(child,指定元素)**

​	将一个节点指定添加到另一个节点的前面，类似于css里面的before伪元素。



**3.删除节点**



**1.node.removeChild（child）**

node.removeChild（）方法从DOM父元素中删除一个节点，返回删除的节点。

**阻止链接跳转需要添加javascript(0);或者javascript：；**



**4.复制节点**（克隆节点）



**1.node.cloneNode()**

node.cloneNode()方法返回调用该方法的节点的一个副本，也称为克隆节点/拷贝节点。

注意如果括号参数为空或者为false，则是浅拷贝，及只克隆复制节点本身，不克隆里面的内容。，反之为深拷贝。

#### 三种动态创建元素的区别

**document.write()**:直接将内容写入页面的内容流，但是文档流执行完毕则它会导致页面全部重绘。

**element.innerHTML**	是将内容写入某个DOM节点，不会导致页面全部重绘

**element.innerHTML**：创建多个元素效率更高（不要拼接字符串，采用数组形式拼接）结构稍微复杂。

**createElement()**创建多个元素效率稍微低一点点，但是结构更清晰。



#### DOM重点核心

从DOM获取过来的元素是对象

对DOM的操作，我们主要争对于元素的操作，主要有创建，增，删，改，查，属性操作，事件操作。

**1.创建**

1.docment.write

2.innerHTML

3.createElement

**2.增**

1.appendChlid

2.insertBefore

**3.删**

1.remoneChild

**4.改**

主要修改DOM的元素属性，DOM元素的内容，属性，表单的值

1.修改元素属性：src , href ,title 

2.修改普通元素内容：innerHTML ,innerText

3.修改表单元素：value , type , disabled

4.修改元素样式： style , className

**5.查**

主要获取查询DOM的元素

1.DOM提供的API方法：getElmentByld , getElementByTagName 古老方法不推荐使用

2.H5提供的新方法：querySelector , querySelectorAll 提倡

3.利用节点操作获取元素：父（parentNode），子（children），兄（previousElementSibling  ,nextElementSibling）提倡

**6.属性操作**

主要针对自定义属性。

1.setAttribute  :设置DOM的属性值

2.getAttribute   :得到DOM的属性值

3.removeAttribute  :移除属性

**7.事件操作**

给元素注册事件，采取 事件源 事件类型  事件处理程序

![image-20210424170650574](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210424170650574.png)