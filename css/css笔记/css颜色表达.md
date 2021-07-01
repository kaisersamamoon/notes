color：前景色：文本颜色

css表现颜色的方式：rgb，hex（采用或进制），hsl（色相（hue 0~360），饱和度（saturtion 0%~100%），亮度（lightness 0%~100%）），(rgba，hsla)a:阿尔法通道，两个值0，1：透明，完全不透明。

![image-20210411130542739](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210411130542739.png)



背景色：**background-color**

背景图：**background-image：url（）**

设置多张背景图;url（）

注意，背景图会覆盖背景色

**backgound-repeat:**调整图像的重复样式

![image-20210411134856304](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210411134856304.png)

**background-position:**调整图像位置

![image-20210411135614244](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210411135614244.png)

**background-size；**设置背景图片大小

![image-20210411140504793](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210411140504793.png)

**background-attachment:**调整图像附着方式；

![image-20210411141604466](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210411141604466.png)

**元素边框，内边距和外边距**

![image-20210411141740072](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210411141740072.png)

**background-origin**:制定了元素背景图像开始绘制的位置。

![image-20210411141945646](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210411141945646.png)

**background-clip:**指定图像的显示区域。

![image-20210411142155526](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210411142155526.png)

可设置在一条语句中background：



**border**：边框的设置

**border-style：**设置边框类型

![image-20210411142630994](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210411142630994.png)

**border-width:设置边框宽度**

**font-size:设置字体尺寸**

边框样式设置简写使用border：

**为每一条的边框设置样式，颜色，和宽度**

![image-20210411144942713](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210411144942713.png)

top;上

bottom：下

left：左

right：右



**5个实现圆角边框设置：**

border-top-left-radius:

border-top-right-radius:

border-bottom-left-radus:

border-bottom-right-radius:

border-radius:上面四个的简写，border-radius：*#px/*#px，设置四个角的圆角弧度。



**图像边框：**

border-image-source：指定图像来源

border-image-slice:属性指定图像的边界向内偏移。

border-image-width:指定图像的宽度

border-image-outset:属性规定边框图像超出边框盒的量。指定图像边框绘制的起始偏移位置，。

border-image-repeat:用来指定图像的填充方式

![image-20210411162729346](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210411162729346.png)

border-image:

**内边框设置**:可以指定具体的长度，百分比（是其父元素宽度的百分比）

**padding-top**

**padding-bottom**

**padding-left**

**padding-right**

**外边距设置：**可以指定具体的长度，百分比（是其父元素宽度的百分比）

**margin-tap:**

**margin-bottom**:

**margin-left**:

**margin-right**:

**注意：**将margin的值直接设置为auto就可以实现在其父元素内实现水平居中效果

**1.对象必须是块地元素**

**2.必须指定元素的宽度**



**margin塌陷**：两个相邻兄弟元素同时设置了外边距的时候，外边距会发生边界折叠。

两个兄弟元素外边距不一样的时候，那么浏览器将以边距最大的那个为准



**设置元素的尺寸：**

![image-20210411171218440](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210411171218440.png)

**box-sizing：盒子模型**

**设置元素的最小和最大像素**

**min-width**

**max-wodth**

**溢出问题如何解决：**

**overflow**：属性规定当内容溢出元素框时发生的事情。



![image-20210411172155428](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210411172155428.png)

**overflow-x：**设置水平方向溢出发生的事

**overflow-y：**设置垂直方向溢出发生的事



**当overflow为：scroll，auto，hidden的时候**

可以设置一个resize的属性

resize属性：主要用于决定是否允许用户来调整元素的属性的尺寸。

![image-20210411172754122](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210411172754122.png)



**轮廓outline**:属性跟边框基本一样

**outline-style：设置轮廓的样式**

**outline-color：设置轮廓颜色**

**outline-width：设置轮廓的宽度**

**outline：**

**与边框不同：**

**outline-offset：**用于设置轮廓距离这个元素边框的一个偏移量。

**轮廓与边框的区别**

##### 轮廓并不属于原始尺寸的一部分，他不会影响到原有的页面的布局。

#### 

**为元素添加阴影：**

**box-shadow:**

![image-20210411173959426](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210411173959426.png)



**css样式表优先顺序**

**![image-20210411174821697](C:\Users\PAN\AppData\Roaming\Typora\typora-user-images\image-20210411174821697.png)**

每一个html元素都有一个默认的display属性值，他决定了这个元素应该以怎么样的形态展现在我们面前。

display属性决定了一个元素的显示角色，同时也会相应的改变该元素在页面上的布局方式。

**display： 属性规定元素应该生成的框的类型。**

| 值                 | 说明 （索引中有详细介绍）                                    |
| ------------------ | ------------------------------------------------------------ |
| inline             | 默认。此元素会被显示为内联元素，元素前后没有换行符。         |
| block              | 此元素将显示为块级元素。                                     |
| content            | 盒子文本正常绘制，而围绕在盒子中的框并不会生成。             |
| flex               | 此元素将显示为弹性盒容器。                                   |
| grid               | 此元素将显示为栅格容器。                                     |
| inline-block       | 此元素将显示为行内块元素。                                   |
| inline-flex        | 此元素将显示为行内弹性盒容器。                               |
| inline-grid        | 此元素将显示为行内栅格容器。                                 |
| inline-table       | 此元素会作为内联表格来显示（类似 ），表格前后没有换行符。    |
| list-item          | 此元素会作为列表显示。                                       |
| run-in             | 此元素会根据上下文作为块级元素或内联元素显示。               |
| table              | 此元素会作为块级表格来显示（类似 table元素），表格前后带有换行符。 |
| table-caption      | 此元素会作为一个表格标题显示（类似 caption 元素）。          |
| table-column-group | 此元素会作为一个或多个列的分组来显示（类似 colgroup 元素）。 |
| table-header-group | 此元素会作为一个或多个行的分组来显示（类似 thead 元素）。    |
| table-footer-group | 此元素会作为一个或多个行的分组来显示（类似 tfoot 元素）。    |
| table-row-group    | 此元素会作为一个或多个行的分组来显示（类似 tbody 元素）。    |
| table-cell         | 此元素会作为一个表格单元格显示（类似 td 元素）               |
| table-column       | 此元素会作为一个单元格列显示（类似 col 元素）                |
| table-row          | 此元素会作为一个表格行显示（类似 tr 元素）。                 |
| none               | 此元素不会被显示。                                           |
| initial            | 设置该属性为默认元素。                                       |
| inherit            | 规定应该从父元素继承 display 属性的值。                      |

**display：inline-block：行内块元素**

具有行内元素的内敛，块级元素的狂放

**visibility:**属性规定元素是否可见。

| 值       | 说明                                                         |
| -------- | ------------------------------------------------------------ |
| visible  | 默认值。元素是可见的。                                       |
| hidden   | 元素是不可见的。任然会在布局中占据空间                       |
| collapse | 当在表格元素中使用时，此值可删除一行或一列，但是它不会影响表格的布局。被行或列占据的空间会留给其他内容使用。如果此值被用在其他的元素上，会呈现为 “hidden”。 |
| inherit  | 规定应该从父元素继承 visibility 属性的值。                   |



