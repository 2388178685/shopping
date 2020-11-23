import Vue from 'vue'
import Router from 'vue-router'
// 引入一级路由
// import Index from '../components/first/index'
// import Details from '../components/first/details'
// import Login from '../components/first/login'
// import Register from '../components/first/register'
// import List from '../components/first/list'

// 引入二级路由
// import Car from '../components/second/car'
// import Classify from '../components/second/classify'
// import Home from '../components/second/home'
// import Order from '../components/second/order'
// import Mine from '../components/second/mine'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: () => import('../components/first/index'),
      children: [
        {
          path: '/home',
          component: () => import('../components/second/home')
        },
        {
          path: '/car',
          component: () => import('../components/second/car')
        },
        {
          path: '/classify',
          component: () => import('../components/second/classify')
        },
        {
          path: '/order',
          component: () => import('../components/second/order')
        },
        {
          path: '/mine',
          component: () => import('../components/second/mine')
        },
        {
          path: '',
          redirect: '/home'
        }
      ]
    },
    {
      path: '/details',
      component: () => import('../components/first/details')
    },
    {
      path: '/login',
      component: () => import('../components/first/login')
    },

    {
      path: '/register',
      component: () => import('../components/first/register')
    },
    {
      path: '/list',
      component: () => import('../components/first/list')
    },
    {
      path: '*',
      redirect: '/index'
    },

  ]
})
