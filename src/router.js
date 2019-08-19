import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        icon: 'far fa-home'
      }
    }, {
      path: '/token',
      name: 'Token',
      component: () => import(/* webpackChunkName: "token-page" */ './views/token'),
      meta: {
        icon: 'far fa-coins',
        color: 'green'
      }
    }, {
      path: '/capacity',
      name: 'Capacity',
      component: () => import(/* webpackChunkName: "capacity-page" */ './views/capacity'),
      meta: {
        icon: 'far fa-server',
        color: 'red'
      }
    }, {
      path: '/chat',
      name: 'Support',
      component: () => import(/* webpackChunkName: "chat-page" */ './views/chat'),
      meta: {
        icon: 'far fa-comment'
      }
    }
  ]
})
