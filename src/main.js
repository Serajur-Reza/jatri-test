import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/lara-light-green/theme.css";
import { createPinia } from "pinia";

const pinia = createPinia();

const app = createApp(App);
app.use(PrimeVue).use(pinia);
app.mount("#app");
