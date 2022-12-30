import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "the-new-css-reset/css/reset.css";
import "./assets/main.scss";

const app = createApp(App);

app.use(router);
app.mount("#app");
