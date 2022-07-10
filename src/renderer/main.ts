import {createApp} from "vue";
import App from "./App.vue";
import {router} from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElIcons from "@element-plus/icons-vue";

const app = createApp(App);

app.use(ElementPlus, {zIndex: 80000});

for (const [key, component] of Object.entries(ElIcons)) {
    app.component(key, component);
}

app.use(router);

app.mount("#app");
