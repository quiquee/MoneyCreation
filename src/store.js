import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dbGl: {
      community: {
        Tokens: 0,
        Stake: 0,
      },
      investors: {
        Tokens: 0,
        Stake: 0,
      },
      pleidao: {
        Tokens: 0,
        Stake: 0,
      },
      plei: {
        Tokens: 0,
        Capital: 0,
      },
      treasury: {
        Tokens: 0,
        Capital: 0,
      },
    },
    dbJournal: {},
    moneyAccounts: ["Tokens"],
    txid: 0,
    epoch: 0,
  },
  mutations: {
    dawn(state) {
      state.epoch = state.epoch + 1;
    },
    gl(state, payload,price) {
      if (isNaN(state.dbGl[payload.gl][payload.credit])) {
        state.dbGl[payload.gl][payload.credit] = 0;
      }
      if (isNaN(state.dbGl[payload.gl][payload.debit])) {
        state.dbGl[payload.gl][payload.debit] = 0;
      }
      state.dbGl[payload.gl][payload.credit] += payload.amount;
      state.dbGl[payload.gl][payload.debit] -= payload.amount;
      
      // Case of Multicurrency Transaction
      if (payload.debitccy != payload.creditccy) {
        state.dbGl[payload.gl]['FX Exchange'] += payload.amount;
        state.dbGl[payload.gl][payload.debit] -= payload.amount;
      }
      var txid = state.txid;
      state.dbJournal[txid] = {};
      state.dbJournal[txid]["gl"] = payload.gl;
      state.dbJournal[txid]["account"] = payload.debit;
      state.dbJournal[txid]["dc"] = "d";
      state.dbJournal[txid]["amount"] = payload.amount;
      state.dbJournal[txid]["date"] = Date.now();
      state.txid++;
      state.dbJournal[txid] = {};
      state.dbJournal[txid]["gl"] = payload.gl;
      state.dbJournal[txid]["account"] = payload.credit;
      state.dbJournal[txid]["dc"] = "c";
      state.dbJournal[txid]["amount"] = payload.amount;
      state.dbJournal[txid]["date"] = Date.now();
      state.txid++;
    },

  },
  getters: {
    ledgers: (state) => {
      return Object.keys(state.dbGl);
    },
    journals: (state) => {
      return Object.keys(state.dbJournal);
    },
    epoch: (state) => {
      return Object.keys(state.epoch);
    }
  },
});
