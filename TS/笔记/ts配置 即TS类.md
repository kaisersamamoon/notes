**Typescript 配置**

typescript无法直接运行在浏览器上 需要将他转换成javascript文件

html文件中 引入的文件依然为js文件

首次需要配置typescript 通过 npm install typescript -g 全局安装文件

通过tsc -V 检查是否安装成功以及安装的版本 

注意：window 默认是不允许直接运行脚本的 所以这里需要通过管理员的身份打开 编辑器 



第一种：打开终端 通过tsc ***.ts 将ts文件转换成js文件

（这种方式需要每次手动编译）



第二种：通过 tsc --init 导入tsconfig.json配置文件

修改配置文件中的 输出目录 （outdir）以及配置是否启用严格模式（strict）;

最后通过 终端 运行任务 全部任务 选择监视 tsconfig.json文件即可

（这种方式 你每一次书写ts代码 他都会自动的给你编译成js代码）



**使用webpack 打包TS**









Ts接口：

接口是一种规范 一种约束

```ts
(()=>{
    // 定义一个接口
    //id是number类型, 必须有, 只读的
    // name是string类型, 必须有
    // age是number类型, 必须有
    // sex是string类型, 可以没有
    interface Imam{
        readonly id:number	//指定该属性为只读属性
        name:string
        age:number
        sex?:string		//指定该属性为可选属性
    }
    let sayIman:Imam = {
        id:100,
        name:'joyn',
        age:18,
        sex:'男'
    }
    console.log(sayIman)
})()
```

**函数类型**

为了使用接口表示函数类型 我们需要给接口定义一个调用签名 该签名是一个只有参数列表 和返回值类型的函数定义 参数列表中的每一个参数都需要名字（形参？）和类型 

```ts
(()=>{

    // 定义一个接口 判断吗一个字符串是否包含另一个字符串

    interface sayStr{
        // 函数参数为字符串，返回值为boolean
        ( str1:string ,str2:string ):boolean
    }
    
   let sayTrue: sayStr = function (str1:string ,str2:string):boolean {
    //    str1中是否包含str2的值 返回true false
    return str1.search(str2) >-1
   }
   console.log(sayTrue('panshangguo','gg'))
      
     
      
})()
```



**类**

在javascript中我们会通过使用函数和基于原型继承来创建或封装一些可以复用的组件 这里 我们通过类也可以实现

```ts
(()=>{
    class Greeter{
        //声明属性
        message:string
        // message的构造方法
        constructor(message:string){
            this.message = message
        }
        gree():string{
            return 'hello'+ this.message 
        }
    }
    //实例化
    const gres = new Greeter('潘尚国')
    // gres的message属性
    console.log(gres.message)
    // gres的gree方法
    console.log(gres.gree());
    
    
})()
```

****

这里我们创建了一个Greeter类，里面有一个属性message 以及一个构造方法（constructor），以及一个gree（）方法

​		注意constructor这里的this 指向调用者 

这里则指向gres :



****

**类的继承**



```ts
// 创建一个类
class Animal{
    run(distance:string){
        console.log(`Animal.run is${distance}`)
    }
}
// 创建一个类继承Animal这个类
class dog extends Animal{
    // 定义一个方法
    say(distance:string){
        console.log(`dog.dog is${distance} 汪汪汪~`)
    }
}
// 实例化dog这个类
 let dog1 = new dog();
// 调用dog里面的say方法
dog1.say('wangwangw')
// 同时dog是继承的Animal这个类，故也可以调用（也就是它的父类 基类）animal的方法
dog1.run('wangwangwnag')
```

​		首先我们这里啊还是先创建一个类Animal  作为基类 或叫超类

****

基类里面创建了一个函数作为Animal的方法，随后我们又创建了一个类 dog 也称子类 ，同时会继承Animal  的属性及方法 随后我们给dog这个子类创建一个函数作为它的方法 ，**注意 这时候dog这个子类也就有了两个属性方法 一个属于自己创建的 另一个继承于它的父类（基类/超类），**

****

随后我们实例化dog这个子类 并调用它的方法 



```ts
//创建一个类
class Anibal {
    names:string
    age:number
    sax:string
    //实例化前初始化函数
    constructor(names:string,age:number,sax:string){
        this.names = names
        this.age = age
        this.sax = sax
    }
    // 创建一个方法
    run(distance:string){
        return (`大家好我叫${this.names},我今年${this.age} 性别${this.sax} ,自己的属性${distance}`)
    }
    
 }
 // 创建一个类 继承Aninal
 class snake extends Anibal{
    constructor(names:string,age:number,sax:string){
        // 调用父类中的构造函数，使用super
        super(names , age , sax)
        this.names = names
        this.age = age
        this.sax = sax
    }
    
    dev(distance:string){
       // 调用父元素中的方法
        super.run('hah')
        return (`大家好我叫${this.names},我今年${this.age} 性别${this.sax} ,我自己的属性${distance}`)
        
        
    }
 }
//  实例化父类
 let Animal = new Anibal('jody',18,'男')
// 调用
 console.log(Animal.run('animal的run'))
//  实例化子类
 let snakes = new snake('manila',22,'女')

 console.log(snakes.run('snake的run'))
 console.log(snakes.dev('snake的dev'))

```

这里子元素通过super继承来自于父类的构造方法以及属性方法

****

总结;

类与类之间如果要有继承关系 需要使用extends关键字，

子类中可以调用父类中的构造函数 使用的是super关键字 （包括调用父类中的实例方法，也可以使用super）**同时子类可以选择继承父类中的方法 也可以重写**。

****

**类的多态**

****

```ts
(()=>{
	//创建一个父类
    class animal {
        names:string
        //实例化前初始化的构造函数
        constructor(names:string) {
            this.names = names
        }
        //定义一个方法
        say(distance:number = 5){
            return(`${this.names}跑了${distance}`)
        }
    }
    //创建一个子类
    class dog extends animal{
        //继承父类的构造方法
        constructor(names:string) {
            super(names)
           
        }
        //重写继承的方法
        say(distance:number = 10){
            return(`${this.names}跑了${distance}`)
        }
    }
    class pig extends animal{
        constructor(names:string) {
            super(names)
        }
        say(distance:number = 20){
            return(`${this.names}跑了${distance}`)
        }
    }
    //实例化
    let man:animal = new animal('人')
    console.log(man.say())
    let dg:dog = new dog('肖恩')
    console.log(dg.say())
    let pg:pig = new pig('佩奇')
    console.log(pg.say())

    console.log("-------------------")
    let dogt:animal = new dog('史蒂芬')
    console.log(dogt.say())
    let pigs:animal = new pig('纳吉尔')
    console.log(pigs.say())
})()
```

多态：父类型的引用指向子类型对象，不同类型的对象对应不同的方法，产生不同的行为



****

**类的修饰符**

```ts
(()=>{
    // 类的修饰符
    // 共有的：public 默认值 任何位置都可以访问它
    // 私有的   private    外部是无法访问它的 包括它的子类
    // 受保护   protected 外部的无法访问它 不包括它的子类
    class poison {
        // public names:string
        
        // private names:string
        // protected names:string
        names:string
        constructor(names:string) {
            this.names = names
        }
        say(){
            return `你好呀${this.names}`
        }
    }
    class pig extends poison{
        constructor(names:string) {
            super(names)
        }
        say(){
            return `你好呀${this.names}`
        }
    }
    let potion:poison = new poison('佐助')
    
    let pigmies:poison = new pig('齐木卡卡')
    console.log(potion.say())
    console.log(pigmies.say())
})()
```

**类的属性使用修饰符**

readonly 修饰符 也是一个关键字 对类中的属性进行修饰 修饰后 该属性成员，就不能在外部被随意修改了 

**但是在构造函数中 可以对只读的属性进行修改 （以及实例化的时候）**

如果**构造函数中没有任何参数** ，类中的属性成员此时已经使用readonly进行修饰了，那么**外部也是不能对这个属性进行更改的**

****

**类的构造函数参数使用修饰符**

构造函数中的参数 一旦使用了readonly进行修饰 那么该参数也可以叫参数属性

，同时该构造函数构造的这个类 里面也会有一个该参数的属性

**外部依然也是无法修改类中的属性成员的值的**

**在这里其他修饰符同理**

```
constructor(readonly names:string="loyot") {
            }
            //
```



****

**存取器**

```TS
class person {
    firstName:string
    lastName:string
    constructor(firstName:string ,lastName:string) {
        this.firstName = firstName
        this.lastName = lastName
    }
    // 读取器 --负责读取数据
    get fullName(){
        return this.firstName +'-'+ this.lastName
    }
    // 设置器 --负责设置（更改）数据
    set fullName(value){
        const names = value.split('-')
        this.firstName = names[0]
        this.firstName = names[1]

    }
}
let perster = new person('诸葛','孔明')

perster.firstName = '王丽'

console.log(perster.fullName)
```

**当我们访问类里面的属性的时候会执行 get 这个函数里面的内容**

**当我们修改类里面的属性的时候 会执行set 这个函数里面的内容**

**如只设置get不设置set 那么该类 只能读不能修改**

****

**类的静态属性**



```TS
class persion {
    //定义静态属性
    static name:string = '小甜甜'
    //定义静态方法

    static sayHi(){
    return '沙瓦蒂卡'
	}
}
persion.name
persion.sayHi()
```

类的静态属性 通过**static** 来进行修饰

静态属性 不需要进行实例化就能调用 

采取的方式是类.方法/属性 直接调用



****

**抽象类**

抽象类可以定义抽象属性 抽象方法  

**定义抽象类 即抽象属性/方法 使用abstract**

**注意抽象类里面定义的属性及方法不能有具体的实现过程**

即

```
//定义一个抽象类
abstract class abimal{
//抽象类定义一个抽象方法 
abstract say()

}


//创建一个类作为它的子类
class dog extends abimal{
	//实现继承的抽象类里面的方法
    say(){
    retrun '你好呀'
	}
}
//实例化dog类
dog:dog = new dog()
//调用dog类里面的say方法
dog.say()

```

