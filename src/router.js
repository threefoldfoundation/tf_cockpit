import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import { publicPath } from '../vue.config'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: publicPath,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        icon: 'fas fa-home',
        position: 'top',
        displayName: 'Home'
      }
    }, {
      path: '/token',
      name: 'token',
      component: () => import(/* webpackChunkName: "token-page" */ './views/token'),
      meta: {
        icon: 'fas fa-coins',
        position: 'top',
        displayName: 'Token'
      }
    }, {
      path: '/capacity',
      name: 'Capacity',
      component: () => import(/* webpackChunkName: "capacity-page" */ './views/capacity'),
      meta: {
        icon: 'fas fa-server',
        position: 'top',
        displayName: 'Capacity'
      }
    }, {
      path: '/appstore',
      name: 'dapps',
      component: () => import(/* webpackChunkName: "capacity-page" */ './views/appstore'),
      meta: {
        icon: 'fas fa-th',
        position: 'top',
        displayName: 'ADApps'
      }
      // }, {
      //   path: '/chat',
      //   name: 'Support',
      //   component: () => import(/* webpackChunkName: "chat-page" */ './views/chat'),
      //   meta: {
      //     icon: 'fas fa-comment',
      //     position: 'top'
      //   }
    },
    {
      path: '/farmmanagement',
      name: 'FarmManagement',
      component: () => import(/* webpackChunkName: "chat-page" */ './views/farmmanagement'),
      meta: {
        icon: 'fas fa-tractor',
        position: 'bottom',
        displayName: 'Farm management'
      }
    }
  ]
})
