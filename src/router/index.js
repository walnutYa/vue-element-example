import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('../views/login/login.vue')
  },
  {
    name: 'home',
    path: '/home',
    component: Home,
    redirect: '/page1',
    children: [
      {
        name: 'page1',
        path: '/page1',
        component: () => import('../views/pages/page1/page1.vue')
      },
      {
        name: 'page2',
        path: '/page2',
        component: () => import('../views/pages/page2/page2.vue')
      }
    ]
  }
]

const router = new VueRouter({
  // 去掉地址栏上面的#
  mode: 'history',
  routes
})

// 挂载路由导航守卫
router.beforeEach((to, form, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数, 表示放行
  //    next() 放行  next('/login') 强制跳转

  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

// 避免冗余导航到当前位置
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
