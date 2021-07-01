import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home'
// import About from "../components/About"
// import User from '../components/User'
// 懒加载
const Home =()=> import('../components/Home')
const About = ()=>import('../components/About')
const User = ()=>import('../components/User')
const HomeNews = ()=>import('../components/HomeNews')
const HomeMessage = ()=>import('../components/HomeMessage')
const Profile = ()=>import('../components/Profile')
// 安装插件
Vue.use(VueRouter)
// 配置路由
const routes = [
  {
    path:"/",
    redirect:'/Home',
	},
  {
    path:"/Home",
    component:Home,
    redirect:'/Home/News',
		// 元数据（描述数据的数据）
		meta:{
			title:'首页'
		},
		
    children:[
      {
        path:"News",
        component:HomeNews
      },
      {
        path:"Message",
        component:HomeMessage
      }
    ]
  },
  {
    path:"/About",
    component:About,
		
		meta:{
			title:"关于"
		}
  },
  {
    path:"/User/:imgURL",
    component:User,
		meta:{
			title:"用户"
		}
  },
  {
    path:'/Profile',
    component:Profile,
		meta:{
			title:"档案"
		}
  }
]
// 创建路由组件
// 默认为hash模式
const router = new VueRouter({
  routes,
  // 更改路由模式
  mode:'history',
  linkActiveClass:'active'
})
// 全局导航守卫
router.beforeEach((to ,from ,next)=>{
	// 从一个路由跳转另一个路由
	// 从form 跳转到 to
	document.title = to.matched[0].meta.title
	// console.log(to)
	// console.log(from)
	// console.log("++++++++");
	next()
});
// 后置钩子
router.afterEach((to ,from)=>{
	console.log("-------------")
})
export default router
