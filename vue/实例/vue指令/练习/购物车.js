window.onload = function(){
  const App = new Vue({
    el:"#App",
    data:{
        books:[
          {names:"算法导论",data:"2006-9",price:86,count:2},
          {names:"计算机原理",data:"2004-7",price:77,count:7},
          {names:"从入门到入坟",data:"2003-5",price:66,count:3},
          {names:"js高级程序开发",data:"2002-3",price:67,count:4},
          {names:"javascriptBOM操作",data:"2001-9",price:33,count:5},
          {names:"你不知道的js",data:"2008-1",price:44,count:2},
          {names:"python",data:"2009-2",price:90,count:1},
          
      ],
     
    },
    methods: {
      add(i){
        this.books[i].count++
      },
      sub(i){
        if(this.books[i].count >0){
          this.books[i].count--
        }
      },
      del(i){
          this.books.splice(i,1)
      }
    },
    computed:{
      sum(){
        let sum = 0
        this.books.forEach((items ) => {
          return  sum += items.price *items.count
        });
        return sum
      }
    },
    filters:{
      numbers:function(value){
        // 转换成浮点数
       return "$"+value.toFixed(2)
      }
    }
  })
}