import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import VueGtag from "vue-gtag";

import "the-new-css-reset/css/reset.css";
import "./assets/main.scss";

const app = createApp(App);

app.use(router);

if (!import.meta.env.DEV) {
  app.use(VueGtag, {
    config: {
      id: import.meta.env.VITE_GOOGLE_ANALYTICS_ID,
    },
  });
}

app.mount("#app");
