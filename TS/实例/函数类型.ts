(()=>{
    // 为了使用接口表示函数类型，
    // 我们需要给接口定义一个调用签名。
    // 它就像是一个只有参数列表和返回值类型的函数定义。
    // 参数列表里的每个参数都需要名字和类型。
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