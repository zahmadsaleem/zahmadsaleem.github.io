import {createApp,h} from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/styles/index.css";
import '@/assets/tailwind.css'

const app = createApp({
  render: () => h(App)
})

app.use(router);

app.mount("#app");
