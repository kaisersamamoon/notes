(()=>{
  // 泛型接口
    interface AbaseCRUD <T> {
        data: T[]
        add: (t: T) => T
        getById: (id: number)=>User|undefined
      }
      // 定义一个父类
      class User {
        id?: number; 
        names: string; //姓名
        age: number; //年龄
      
        constructor (names:string, age:number ) {
          this.names = names
          this.age = age
          
        }
      }
      // 子类 
      class UserCRUD implements AbaseCRUD<User> {
        data: User[] = [{names: "tom", age: 12, id: 1621504279429.7776}]
        // 添加对象
        add(user: User): User {
          user.id = Date.now() + Math.random()
          this.data.push(user)
          return user
        }
      // 根据id返回对象
        getById(id:number):User|undefined {
            
          return this.data.find(user=>user.id ==id)
         
        }
      }

      const userCRUD = new UserCRUD()
      userCRUD.add(new User('tom', 12))
      userCRUD.add(new User('tom2', 13))
      console.log(userCRUD.data)
      console.log(userCRUD.getById(1621504279429.7776))
      console.log(typeof userCRUD.getById(1621504279429.7776))
})()
  

