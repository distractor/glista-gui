/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/prefer-as-const */
import { defineModule } from "direct-vuex";
import { Configuration } from "@/../api-axios/configuration"
import { moduleGetterContext } from "@/store"

const apiConfigurationModule = defineModule({
  namespaced: true as true,
  getters: {
    getToken: (...args): string => {
      const { rootGetters } = mod1GetterContext(args);
      return rootGetters.user.token as string;
    },
    getApiConfiguration: (...args) => {
      const { rootGetters } = mod1GetterContext(args);

      const completeToken = `Bearer ${rootGetters.user.token}` as string;
      const apiConfig = new Configuration({
        apiKey: completeToken,
        basePath: process.env.VUE_APP_BASE_API_URL,
      });

      return apiConfig;
    }
  }
});

export default apiConfigurationModule;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mod1GetterContext = (args: [any, any, any, any]) => moduleGetterContext(args, apiConfigurationModule)
