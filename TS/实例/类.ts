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