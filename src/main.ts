import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Inkline, components } from '@inkline/inkline';

import '@inkline/inkline/inkline.scss';
import "@/assets/inkline.scss"
import "@/assets/tailwind.css";

const app = createApp(App);

app.use(Inkline, { 
  components
});

app.use(router);

app.mount("#app");
