import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

//引入UI组件库
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";

import "./assets/main.css";
import "@/styles/index.scss"; // global css

const app = createApp(App);

app.config.globalProperties = {
  msg1: "hello1",
  msg2: "hello2",
};

app.provide(/* 注入名 */ "appprovide", /* 值 */ "appprovidevalue!");

app.use(createPinia());
app.use(router);
app.use(ArcoVue);
app.mount("#app");
