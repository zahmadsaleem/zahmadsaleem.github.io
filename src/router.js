import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/projects",
      name: "Projects",
      component: () => import("@/views/Projects.vue")
    },
    {
      path: "/project/:projectid",
      name: "proj",
      component: () => import("@/views/SingleProject.vue"),
      props: true
    },
    {
      path: "/gallery",
      name: "Gallery",
      component: () => import("@/views/Gallery.vue")
    },
    {
      path: "/img/:url",
      name: "img",
      component: () => import("@/views/SingleImage.vue"),
      props: true
    },
    {
      path: "/",
      name: "Cover",
      component: () => import("@/views/Cover.vue")
    },
    {
      path: "/about",
      name: "About",
      component: () => import("@/views/About.vue")
    }
  ]
});
