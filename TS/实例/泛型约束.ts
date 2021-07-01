interface ILength{
    // 定义一个接口 用来约束将来的莫格类型中必须有length这个属性
    // 接口中有个属性length是number类型
    length:number
}
function forLength<T extends ILength>(text:T):number{
    // 受接口约束，
    return text.length
}
console.log(forLength<string>("what are you no sha lei"))