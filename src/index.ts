import router from "./router";
import Vue from "vue";
import ElementUI from "element-ui";
import store from "./store";
import App from "./App.vue";
import SvgIcon from "vue-svgicon";
import { VueRouter } from "vue-router/types/router";
import * as utils from "./utils";
import { providers } from "./providers";
import { registerModules } from "./modules";

export interface Options {
  router?: VueRouter;
}

const bootstrap = (options: Options) => {
  Vue.use(ElementUI);
  Vue.use(SvgIcon, {
    tagName: "svg-icon",
    defaultWidth: "1em",
    defaultHeight: "1em"
  });

  Vue.config.productionTip = false;

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
};

export { router, bootstrap, utils, providers, registerModules };
