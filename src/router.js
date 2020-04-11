import Vue from 'vue'
import Router from 'vue-router'

import Resume from './views/Resume.vue'
import Cover from './views/Cover.vue'
import Gallery from './views/Gallery.vue'
import Projects from './views/Projects.vue'
import Contact from './views/Contact.vue'
import SingleProject from './views/SingleProject.vue'
import SingleImage from './views/SingleImage.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/projects',
            name: "Projects",
            component: Projects,
        },
        {
            path: '/project/:projectid',
            name: "proj",
            component: SingleProject,
            props: true
        },
        {
            path: '/gallery',
            name: "Gallery",
            component: Gallery,
        },
        {
            path: '/img/:url',
            name: "img",
            component: SingleImage,
            props: true
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
