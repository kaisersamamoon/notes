***编译作用域***

<img src="E:\OneDrive\图片\屏幕快照\编译作用域.png" alt="编译作用域" style="zoom:100%;" />

只能访问自己作用域中的变量，

***作用域插槽***

父组件对子组件展示数据的方式不太满意，从而想通过自身展示采用的方式。

即父组件替换插槽内的标签 ，但是内容由子组件来提供。



通过给定插槽slot data属性 将数据保存在slot标签内，

```html

  <div id="com">
    <!-- 如果插槽内没有内容则按照默认方式展示 -->
    <parent>
    </parent>
    <parent>
      <!--  -->
      <!-- 通过获取slot插槽 -->
      <template slot-scope="slot">  
        <span v-for = "itmes in slot.data">{{itmes}}-</span>
      </template>
    </parent>

  </div>

  <template id="parent">
    <div>
      <h3>this is components</h3>
      <!-- 通过自定义属性将carlist的属性 绑定给data -->
      
      <slot :data = "carList">
        <ul>
          <li v-for = "items in carList">{{items}}</li>
        </ul>
      </slot>
    </div>
  </template>

  <script>
    const parent = {
      template:"#parent",
      data() {
        return {
          carList:["兰博基尼","法拉利","保时捷","阿尔法.罗密欧",]
        }
      },
    }
    new Vue({
      el:"#com",
      data() {
        return {         
        }
      },
      components:{
        parent
      }
    })
  </script>

```

子组件通过 给定slot插槽绑定 自定义属性 将子组件的数据保存在

自身

使用时，通过 slot-scope ="slot"

获取 slot标签元素，通过slot.自定义属性名 获取到对应的插件数据 
