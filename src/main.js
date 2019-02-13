import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Readmore from "vue-readmore-readless";
Vue.use(Readmore);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
