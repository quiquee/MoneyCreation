import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bank: {"Client Loan":100 , "Client Deposits": -100},
    me: {"Tokens": 0, "Bitcoins": 0, "Current Account": 10 , "Debt with Bank": 0},
    other: {"Current Account": 200, "Tokens": 100, "Bitcoins": 100},
    startup: {"Bitcoins": 100 , "Capital": -100},
  },
  mutations: {
    gl(state, payload) {
      
      state[payload.gl][payload.credit]+=payload.amount;
      state[payload.gl][payload.debit]-=payload.amount;
    }
  },
  actions: {},
  getters: {
    myBankLoan (state){
      return state.myBankLoan;
    },
    myCurrentAcc (state){
      return state.myCurrentAcc;
    }
  }
});
