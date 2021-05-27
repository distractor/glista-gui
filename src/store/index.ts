import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { createDirectStore } from "direct-vuex"
import userModule from "./modules/userModule"
import apiConfigurationModule from "./modules/apiConfigurationModule"

Vue.use(Vuex);

const {
  store,
  rootActionContext,
  moduleActionContext,
  rootGetterContext,
  moduleGetterContext
} = createDirectStore({
  modules: {
    user: userModule,
    apiConfiguration: apiConfigurationModule,
  },
  plugins: [createPersistedState()],
  strict: process.env.NODE_ENV !== "production"
})

// Export the direct-store instead of the classic Vuex store.
export default store

// The following exports will be used to enable types in the
// implementation of actions and getters.
export {
  rootActionContext,
  moduleActionContext,
  rootGetterContext,
  moduleGetterContext
}

// The following lines enable types in the injected store "$store".
export type AppStore = typeof store
declare module "vuex" {
  interface Store<S> {
    direct: AppStore;
  }
}
