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
        icon: 'fas fa-home'
      }
    }, {
      path: '/token',
      name: 'Token',
      component: () => import(/* webpackChunkName: "token-page" */ './views/token'),
      meta: {
        icon: 'fas fa-coins',
        color: 'green'
      }
    }, {
      path: '/capacity',
      name: 'Capacity',
      component: () => import(/* webpackChunkName: "capacity-page" */ './views/capacity'),
      meta: {
        icon: 'fas fa-server',
        color: 'red'
      }
    }, {
      path: '/chat',
      name: 'Support',
      component: () => import(/* webpackChunkName: "chat-page" */ './views/chat'),
      meta: {
        icon: 'fas fa-comment'
      }
    }, {
      path: '/farmsettings',
      name: 'Support',
      component: () => import(/* webpackChunkName: "chat-page" */ './views/chat'),
      meta: {
        icon: 'fas fa-cog'
      }
    }, {
      path: '/farmmanagemt',
      name: 'Support',
      component: () => import(/* webpackChunkName: "chat-page" */ './views/chat'),
      meta: {
        icon: 'fas fa-user-circle'
      }
    }
  ]
})
