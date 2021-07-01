

***组件插槽slot***

slot组件插槽在于组件的可复用性，可拓展更高

定义插槽使用slot标签

如果需要给定插槽一个默认值 直接在标签内部写入即可

```html
<template id="parent">
    <div>
      <h3>我是一个插件</h3>
      <slot></slot>
    </div>
  </template
```

 ***具名插槽***

即给定插槽一个name属性

使用时可以根据插槽name属性从而对单个插槽进行修改

采用solt = "插槽名"



```

<body>
  <div id="slot">
    <parent>
      <span>我变了</span>
      <h3 slot="s1">左边</h3>
      <h3 slot="s2">中间</h3>
      <h3 slot="s3">右边</h3>
    </parent>
  </div>

  <template id="slots">
    <div>
      <h3>这是一个组件</h3>
      <div>
        <slot name = "s1"><span>left</span></slot>
        <slot name = "s2"><span>center</span></slot>
        <slot name = "s3"><span>right</span></slot>
        <slot>这是一个没有名字的插槽</slot>
      </div>
   </div>
   
  </template>
  <script>
    const parent ={
      template:"#slots"
    }
    new Vue({
      el:"#slot",
      components:{
        parent
      }
    })
  </script>
</body>
</html>

```

