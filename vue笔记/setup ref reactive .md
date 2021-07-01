setup 新的option 所有的组合api函数都在这里面使用，它只会初始化一次，函数如果返回对象，对象中的属性和方法，模板都可以直接使用

```
setup() {
  // 定义一个数据的响应式
  const count = ref(1)
  function update(){
    count.value = ++count.value 
  }
  // 返回值
  return{
    count,
    update
  }

}
```

**ref**

作用是定义一个数据的响应式

语法 const xxx = ref(initValue)

模板中操作数据，不需要.value

一般用于定义一个基本的响应式数据

****

**reactive**

作用是定义多个数据的响应式

它接受一个普通对象，然后返回该对象的响应式代理器对象

响应式转换是深层的，会印象对象内部所有的嵌套的属性

内部基于ES6的proxy实现，通过代理对象操作源对象内部数据都是响应式的

const xxx = reactive(obj)

```

setup() {
  const obj = {
    names:'jony',
    age:18,
    sex:'男',
    sayName:()=>{
      return `${obj.names},${obj.age},${obj.sex}`
    }
  }
  const updateMens = () => {
    mens.age = mens.age +1
  }
  const mens = reactive(obj)
  return{
    mens,
    updateMens
  }

}
```

****

在vue3中对代理对象或目标对象进行增删改查都会对目标对象进行更新，

```ts
let user:any={
  names:"凯瑟",
  age:18,
  sex:'男'
};
let proxyUser= new Proxy(user,{
  get(target,prop){
    console.log(prop)
    return Reflect.get(target,prop)
  },
  set(target,prop,val){
    return Reflect.set(target,prop,val)
  },
  deleteProperty(target,prop){
    return Reflect.deleteProperty(target,prop)
  }
})
// 查
console.log(user.names)
// 改
user.names = "玛瑞"
console.log("----------")
console.log(user.names,user.sex)
console.log(user)

console.log("---------")
console.log(user.names),
// 删
delete proxyUser.names
console.log(user)

// 增加
user.sayName=()=>{
  return `该类的names属性的值为${user.age}`
}
console.log(user)
console.log(user.sayName())
```

****

通过proxy进行代理 从而对目标对象进行监视/拦截

从而对目标对象进行增删改查，注意，同时必须通过Peflect（反射）动态的通过代理对象从而进行对被代理（目标对象）的相应属性进行特定的操作

代理构造函数/反射方法

****

```
 const proxyUser = new Proxy(user, {//user:目标对象 proxyuser；代理对象
 get (target, prop) {//拦截/监视函数 
    	return Reflect.get(target, prop)//反射属性
    },
 }）
 具体的代理构造函数，及反射方法，可通过下面的链接进行查询
```

****

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect