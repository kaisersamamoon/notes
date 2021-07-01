function getImag<k,v>(value1:k,value2:v):[k,v]{
    return ([value1,value2])
}
let img = getImag<number,string>(124,'panshangguo')
console.log(img)
console.log(typeof img)