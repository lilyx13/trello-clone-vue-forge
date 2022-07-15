import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/tailwind.css";
import { createPinia } from "pinia"
import { 
  provideFASTDesignSystem, 
  fastCard, 
  fastButton
} from '@microsoft/fast-components';

provideFASTDesignSystem()
    .register(
        fastCard(),
        fastButton()
    );

const pinia = createPinia()

const app = createApp(App);
app.use(pinia)
app.use(router);

app.mount("#app");
