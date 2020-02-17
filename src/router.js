import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home.vue'
//import Api from './views/Api.vue'
import Api from './views/Api.vue'


Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/projects',
          component: projectView
      },
      {
          path: '/gallery',
          component: galleryView
      },
      {
          path: '/',
          component: coverView
      },
      {
          path: '/resume',
          component: resumeView
      },
      {
          path: '/contact',
          component: contactView
      },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/api',
    //   name: 'api',
    //   component: Api
    // }
  ]
})
