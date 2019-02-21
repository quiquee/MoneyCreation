import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bank: {"Client Loan":0 , "Client Deposits": 210, "Cash": 100 , "Capital": -100},
    me: {"Tokens": 0, "Bitcoins": 0, "Current Account": 10 , "Debt with Bank": 0},
    other: {"Current Account": 200, "Tokens": 100, "Bitcoins": 100, "Shares": 100},
    startup: {"Bitcoins": 100 , "Capital": -100},
  },
  mutations: {
    gl(state, payload) {
      if( isNaN(state[payload.gl][payload.credit])){
        state[payload.gl][payload.credit]=0;
      }
      if( isNaN(state[payload.gl][payload.debit])){
        state[payload.gl][payload.debit]=0;
      }
      state[payload.gl][payload.credit]+=payload.amount;
      state[payload.gl][payload.debit]-=payload.amount;
    }
  },
  actions: {},
  getters: {}
});
