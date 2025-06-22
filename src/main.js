import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { useRouterLinkStore } from "./stores/routerLinkStore";
import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseBadge from "./components/ui/BaseBadge.vue";

const app = createApp(App);
const pinia = createPinia();


app.use(router);
app.use(pinia);

app.config.globalProperties.$routerLinkStore = useRouterLinkStore();

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("BaseBadge", BaseBadge);

app.mount("#app");