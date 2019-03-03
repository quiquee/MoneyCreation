import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      dbGl: {
          bank: {"Client Loan":0 , "Client Deposits": -210, "Cash": 310 , "Capital": -100},
          me: {"Tokens": 0, "Bitcoins": 0, "Current Account": 10 , "Debt with Bank": 0},
          other: {"Current Account": 200, "Tokens": 100, "Bitcoins": 100, "Shares": 100},
          startup: {"Bitcoins": 100 , "Capital": -100},
      },
      moneyAccounts: ["Current Account", "Bitcoins", "Tokens", "Cash"],
  },
  mutations: {
    gl(state, payload) {
      if( isNaN(state.dbGl[payload.gl][payload.credit])){
        state.dbGl[payload.gl][payload.credit]=0;
      }
      if( isNaN(state.dbGl[payload.gl][payload.debit])){
        state.dbGl[payload.gl][payload.debit]=0;
      }
      state.dbGl[payload.gl][payload.credit]+=payload.amount;
      state.dbGl[payload.gl][payload.debit]-=payload.amount;
    }
  },
  getters: {
      
      ledgers: (state) => {
          return Object.keys(state.dbGl);
      }

  }
});
