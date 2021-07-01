(()=>{
    class animal {
        names:string
        constructor(names:string) {
            this.names = names
        }
        say(distance:number = 5){
            return(`${this.names}跑了${distance}`)
        }
    }
    class dog extends animal{
        
        constructor(names:string) {
            super(names)
           
        }
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