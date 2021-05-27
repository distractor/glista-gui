import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { makeServer } from "./server";

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'development' && process.env.VUE_APP_USE_MOCK_API === 'true') {
  makeServer()
}

new Vue({
  router,
  store: store.original,
  render: h => h(App)
}).$mount('#app')
