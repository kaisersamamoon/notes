let obj = {
  aaa(){
    setTimeout(function(){
      // window
      console.log("aaa的"+ this)
      setTimeout(function(){
        // window
        console.log("ccc"+ this)
      },1000)
      setTimeout(()=>{
        // 寻找上一层 故也是window
        console.log("ddd"+ this);
      },1000)
    },1000),
    setTimeout(()=>{
      // 作为obj方法调用 指向obj
      console.log("bbb的"+ this)
      console.log(this== obj)
      setTimeout(function(){
        // 指向全局 window
        console.log("eee"+ this)
      },1000);
      setTimeout(()=>{
        // 指向外一层的this 故 obj
        console.log("fff"+ this)
        console.log(this == obj)
      },1000)
    },1000)
  },
  bbb(){
    console.log("这个是"+this)
    console.log(this ==obj)
  }
}
obj.aaa()
obj.bbb()