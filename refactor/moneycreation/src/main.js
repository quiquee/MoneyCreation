import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Chart from "v-chart-plugin";

Vue.config.productionTip = false;
Vue.use(Chart);
new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
