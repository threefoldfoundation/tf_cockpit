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
        icon: 'fas fa-home',
        position: 'top'
      }
    }, {
      path: '/token',
      name: 'Token',
      component: () => import(/* webpackChunkName: "token-page" */ './views/token'),
      meta: {
        icon: 'fas fa-coins',
        position: 'top'
      }
    }, {
      path: '/capacity',
      name: 'Capacity',
      component: () => import(/* webpackChunkName: "capacity-page" */ './views/capacity'),
      meta: {
        icon: 'fas fa-server',
        position: 'top'
      }
    }, {
      path: '/chat',
      name: 'Support',
      component: () => import(/* webpackChunkName: "chat-page" */ './views/chat'),
      meta: {
        icon: 'fas fa-comment',
        position: 'top'
      }
    }, {
      path: '/farmsettings',
      name: 'FarmSettings',
      component: () => import(/* webpackChunkName: "chat-page" */ './views/farmsettings'),
      meta: {
        icon: 'fas fa-cog',
        position: 'bottom'
      }
    },
    {
      path: '/farmmanagement',
      name: 'FarmManagement',
      component: () => import(/* webpackChunkName: "chat-page" */ './views/farmmanagement'),
      meta: {
        icon: 'fas fa-user-circle',
        position: 'bottom'
      }
    }
  ]
})
