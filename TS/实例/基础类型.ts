(()=>{
    let i:number = 1;
    function text(){
        i = 0b10;
        return i
    }
    console.log(text())
    let names:string = 'jody';
    let age:string = '28';
    function sayName(names:string,age:string){
        console.log(names,age);
    };
    sayName(names,age);
    let list1:number[] = [1,2,3,4];
    let list3:number[] =[];
    let list2:Array<string> = ['joni','amazing','jock'];
    for(let i = 0 ;i<list1.length ;i++){
        if(list1[i] >2){
            list3.push(list1[i]);
        };
    };
    
    console.log(list3)
    for(let y = 0 ;y < list2.length ;y++){
        console.log(list2[y]);
    };
    
    let t :[string,number];
    t = ['jody',Math.PI]
    console.log(t[0].substring(1))
    console.log(Number(t[1]))
    
    enum Color{
        Red,
        Green,
        Blue,
        pink,
    }
    let myColor:Color = Color.Green
    console.log(myColor,Color.Red,Color.Blue)
    console.log(Color[2])
    
})();