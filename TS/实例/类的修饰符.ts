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