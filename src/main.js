// import app
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/styles/main.scss";

// run app
createApp(App).use(router).mount("#app");
