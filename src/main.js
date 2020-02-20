import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

router.push("/")

var vm = new Vue({
  router,
  store,
  data() {
    return {
      name: "",
    }
  },
  
  render: h => h(App),
}).$mount('#app')

global.vm = vm; //Define you app variable globally