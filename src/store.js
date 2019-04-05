import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dbGl: {
      bank: {
        "Client Loan": 0,
        Bitcoins: 100,
        "Client Deposits": -200,
        Cash: 300,
        Capital: -100
      },
      me: {
        Tokens: 0,
        Bitcoins: 100,
        "Current Account": 100,
        "Debt with Bank": 0
      },
      other: {
        "Current Account": 100,
        Tokens: 100,
        Bitcoins: 100,
        Shares: 200
      },
      startup: { Bitcoins: 100, Capital: -100 }
    },
    dbJournal: { } ,
    moneyAccounts: ["Current Account", "Bitcoins", "Tokens", "Cash"],
    txid: 0,
  },
  mutations: {
    gl(state, payload) {
      if (isNaN(state.dbGl[payload.gl][payload.credit])) {
        state.dbGl[payload.gl][payload.credit] = 0;
      }
      if (isNaN(state.dbGl[payload.gl][payload.debit])) {
        state.dbGl[payload.gl][payload.debit] = 0;
      }
      state.dbGl[payload.gl][payload.credit] += payload.amount;
      state.dbGl[payload.gl][payload.debit] -= payload.amount;
      var txid = state.txid;
      state.dbJournal[txid] = {} ;
      state.dbJournal[txid]["gl"] = payload.gl;
      state.dbJournal[txid]["account"] = payload.debit;
      state.dbJournal[txid]["dc"] = "d";
      state.dbJournal[txid]["amount"] = payload.amount;
      state.dbJournal[txid]["date"] = Date.now() ;
      txid++ ;
      state.dbJournal[txid] = {} ;
      state.dbJournal[txid]["gl"] = payload.gl;
      state.dbJournal[txid]["account"] = payload.credit;
      state.dbJournal[txid]["dc"] = "c";
      state.dbJournal[txid]["amount"] = payload.amount;
      state.dbJournal[txid]["date"] = Date.now() ;
      txid++ ;
    },

  },
  getters: {
    ledgers: state => {
      return Object.keys(state.dbGl);
    },
    journals: state => {
        return Object.keys(state.dbJournal);
    }
  }
});
