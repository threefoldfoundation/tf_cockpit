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
        icon: 'fa-home'
      }
    }, {
      path: '/chat',
      name: 'Support',
      component: () => import(/* webpackChunkName: "chat-page" */ './views/chat'),
      meta: {
        icon: 'fa-comment'
      }
    }
  ]
})
