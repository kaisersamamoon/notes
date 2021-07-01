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

 console.log(snakes.run('snakes的run'))
 console.log(snakes.dev('snakes的dev'))
