const parent = {
  template:`
  <div>
  <h3>{{message1}}</h3>
  <button @click = "btnClick1">按钮</button>
  </div>
  `,
  data() {
    return {
      message1:"this is parent"
    }
  },
  methods: {
    btnClick1(){
      console.log("我是parent")
    }
  },
 
}
// 组件抽取
const app = {
  template:`
  <div>
    <h3>{{message}}</h3>
    <button @click = "btnClick">按钮</button>
    <parent/>
  </div>
  `,
  data() {
    return {
      message:"this is Vue"
    }
  },
  methods: {
    btnClick(){
      console.log(message)
    }
  },
  components:{parent},

}
export {app}