(()=>{
    // 定义一个接口
    //id是number类型, 必须有, 只读的
    // name是string类型, 必须有
    // age是number类型, 必须有
    // sex是string类型, 可以没有
    interface Imam{
        readonly id:number
        name:string
        age:number
        sex?:string
    }
    let sayIman:Imam = {
        id:100,
        name:'joyn',
        age:18,
        sex:'男'
    }
    console.log(sayIman)
})()