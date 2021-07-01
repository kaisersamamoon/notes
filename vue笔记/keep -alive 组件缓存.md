## keep -alive 

#### router-view 

router -view 也是一个组件  如果直接被包在 keep -alive 里面 所有路径匹配到的视图组件都会被缓存：

keep -alive 是 Vue 内置的一个组件 可以使被包含的组件保留状态 ，或避免重新渲染。

keep-alive 有两个属性 include exclude 支持正则表达式

include :包含  表示那些组件将被缓存

exclude : 排除  那些组件将不会被缓存
