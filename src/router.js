import Vue from 'vue'
import Router from 'vue-router'

import Resume from './views/Resume.vue'
import Cover from './views/Cover.vue'
import Gallery from './views/Gallery.vue'
import Projects from './views/Projects.vue'
import Contact from './views/Contact.vue'



Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/projects',
          name: "Projects",
          component: Projects
      },
      {
          path: '/gallery',
          name: "Gallery",
          component: Gallery
      },
      {
          path: '/',
          name: "Cover",
          component: Cover
      },
      {
          path: '/resume',
          name: "Resume",
          component: Resume
      },
      {
          path: '/contact',
          name: "Contact",
          component: Contact
      },
  ]
})
