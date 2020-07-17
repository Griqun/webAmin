import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

const Login = () => import(/* webpackChunkName: 'login' */ '../views/Login.vue')
const Reg = () => import(/* webpackChunkName: 'reg' */ '../views/Reg.vue')
const Forget = () => import(/* webpackChunkName: 'forget' */ '../views/Forget.vue')
const Index = () => import(/* webpackChunkName: 'index' */ '../views/channels/index.vue')
const Template1 = () => import(/* webpackChunkName: 'template1' */ '../views/channels/Template1.vue')
const Ask = () => import(/* webpackChunkName: 'Ask' */ '../views/channels/Ask.vue')
const Share = () => import(/* webpackChunkName: 'Share' */ '../views/channels/Share.vue')
const User = () => import(/* webpackChunkName: 'User' */ '../views/channels/User.vue')
const Shop = () => import(/* webpackChunkName: 'Shop' */ '../views/shop/Shop.vue')
const shopcart = () => import(/* webpackChunkName: 'shopcart' */ '../views/shop/shopcart.vue')
const Daren = () => import(/* webpackChunkName: 'Daren' */ '../views/channels/Daren.vue')
const Quanzi = () => import(/* webpackChunkName: 'Quanzi' */ '../views/channels/Quanzi.vue')
const Guzhang = () => import(/* webpackChunkName: 'guzhang' */ '../views/pagezi/Guzhang.vue')
const Dianlutu = () => import(/* webpackChunkName: 'Dianlutu' */ '../views/pagezi/Dianlutu.vue')
const Houchuli = () => import(/* webpackChunkName: 'Houchuli' */ '../views/pagezi/Houchuli.vue')
const Chuanganqi = () => import(/* webpackChunkName: 'Chuanganqi' */ '../views/pagezi/Chuanganqi.vue')
const shopdetail = () => import(/* webpackChunkName: 'shopdetail' */ '../views/shop/shopdetail.vue')
const Phone = () => import(/* webpackChunkName: 'Phone' */ '../views/user/phone.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'index',
        component: Index
      },
      {
        path: '/shop',
        name: 'shop',
        component: Shop,
      },
      
      // {
      //   path: '/index/:cataglog',
      //   name: 'cataglog',
      //   component: Template1
      // },
      
      {
        path: '/ask',
        name: 'ask',
        component: Ask,
       
      },
      {
        path: '/share',
        name: 'share',
        component: Share
      },
      {
        path: '/quanzi',
        name: 'quanzi',
        component: Quanzi
      },
      
      {
        path: '/user',
        name: 'user',
        component: User
      },
      // {
      //   path: '/guzhang',
      //   name: 'guzhang',
      //   component: Guzhang
      // },
     
    ],
    
  },
  
  {
    path: '/guzhang',
    name: 'guzhang',
    component: Guzhang
  },
  {
    path: '/dianlutu',
    name: 'dianlutu',
    component: Dianlutu
  },
  {
    path: '/houchuli',
    name: 'houchuli',
    component: Houchuli
  },
  {
    path: '/chuanganqi',
    name: 'chuanganqi',
    component: Chuanganqi
  },
  //商品列表
  {
    path: '/shopdetail/:id',
    name: 'shopdetail',
    component: shopdetail,
  },
  //我的列表
  {
    path: '/phone',
    name: 'phone',
    component: Phone
  },
  //购物车
  {
    path: '/shopcart',
    name: 'shopcart',
    component: shopcart
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/reg',
    name: 'reg',
    component: Reg,
    beforeEnter: (to, from, next) => {
      if (from.name === 'login') {
        next()
      } else {
        next('/login')
      }
      next()
    }
  },
  {
    path: '/forget',
    name: 'forget',
    component: Forget
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'layui-this',
  routes
})

export default router
