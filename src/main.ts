import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { makeServer } from "./server";
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import Vuelidate from 'vuelidate';
import VuelidateErrorExtractor, { templates } from "vuelidate-error-extractor";

Vue.config.productionTip = false;

if (process.env.NODE_ENV === 'development' && process.env.VUE_APP_USE_MOCK_API === 'true') {
  makeServer()
}

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(Vuelidate)
Vue.use(VuelidateErrorExtractor, {
  template: templates.singleErrorExtractor.bootstrap4,
  messages: {
    required: "The {attribute} field is required",
    minValue: "Field {attribute} must be larger than {min}",
    maxValue: "Field {attribute} must be smaller than {max}",
    minLength: "Field {attribute} must be longer than {min}",
    maxLength: "Field {attribute} must be shorter than {max}",
    numeric: "Field {attribute} must be a number",
    mustBeSelectedValue: "Value for field {attribute} must be selected",
    differentAsGiven: "{attribute} must be the same as another one",
  },
  attributes: {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    'address.postal': 'Postal Code',
    'phones.model': 'Phone Model'
  }
});

new Vue({
  router,
  store: store.original,
  render: h => h(App)
}).$mount('#app');
