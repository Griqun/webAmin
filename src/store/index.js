import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sid: '',
    isLogin: false,
    token: ''
  },
  mutations: {
    setSid (state, value) {
      state.sid = value
    }
  },
  actions: {
    
  },
  modules: {
	cart
  }
})
