import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/tailwind.css";

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

const app = createApp(App);

app.use(router);

app.mount("#app");
