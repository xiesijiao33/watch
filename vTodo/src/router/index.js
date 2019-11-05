import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
// import vinput from '@/components/vinput'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    }
  ]
})
