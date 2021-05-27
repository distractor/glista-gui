/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineModule, localActionContext } from "direct-vuex";
import ServiceHelper from "@/service/ServiceHelper";
import { AuthDTO } from 'api-axios/model';

const userModule = defineModule({
  namespaced: true as true,
  state: {
    userId: undefined,
    userName: undefined,
    userLevel: undefined,
    token: undefined,
    expiresOn: undefined
  } as AuthDTO,
  mutations: {
    LOGIN(state, auth: AuthDTO) {
      state.userId = auth.userId;
      state.userName = auth.userName;
      state.userLevel = auth.userLevel;
      state.token = auth.token;
      state.expiresOn = auth.expiresOn;
    },
    LOGOUT(state: AuthDTO) {
      state.userId = undefined;
      state.userName = undefined;
      state.userLevel = undefined;
      state.token = undefined;
      state.expiresOn = undefined;
    }
  },
  actions: {
    LOGIN(context, user: AuthDTO) {
      const { commit } = userActionContext(context);
      commit.LOGIN(user);
    },
    LOGOUT(context) {
      const { commit } = userActionContext(context);
      commit.LOGOUT();
    }
  },
  getters: {
    isAuthenticated: state => {
      const authenticated = ServiceHelper.CheckAuthentication(state.token, state.expiresOn);

      return authenticated;
    },
    userId: state => {
      return state.userId;
    },
    userName: state => {
      return state.userName;
    },
    userLevel: state => {
      return state.userLevel;
    },
    token: state => {
      return state.token;
    },
    expiresOn: state => {
      return state.expiresOn;
    }
  }
});

export default userModule;
const userActionContext = (context: any) => localActionContext(context, userModule)
