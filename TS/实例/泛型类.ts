(()=>{
    // 定义一个泛型类
    class add<T>{
        names!:T 
        sum!: (x: T, y: T) => T
       
    }
    // 实例化泛型类 并为他指定为number类型
    let add1:add<number> = new add<number>()
    add1.names = 10
    add1.sum = function(x,y){
        return x +y
    }
    console.log(add1.sum(5,10))
    console.log("________________")
    // 实例化类并为他指定为string类型
    let add2:add<string> = new add<string>()
    add2.names = "jony"
    add2.sum = function(x,y){
        return x+y
    }
    console.log(add2.sum("jont","sum"))
})()