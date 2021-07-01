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