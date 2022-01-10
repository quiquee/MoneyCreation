/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    dbGl: {
      community: {
      },
      investors: {
      },
      pleidao: {
      },
      plei: {
      },
      treasury: {
      },
    },
    dbJournal: {},
    dbHistory: [],
    moneyAccounts: ["Tokens"],
    txid: 0,
    epoch: 0,

  },
  mutations: {
    dawn(state) {
      state.epoch = state.epoch + 1;
    },
    saveHist(state) {
      Object.keys(state.dbGl).forEach((glName) => {
        ["USDC", "PLEI"].forEach((ccy) => {
          ["Tokens", "Cash", "PL", "Equity"].forEach((account) => {
            let balance = state.dbGl[glName][ccy][account]
            state.dbHistory.push([state.epoch, glName, ccy, account, balance]);
          });
        });
      });

    },
    initGl(state) {
      const arrayCcy = ["USDC", "PLEI"];
      const arrayAcc= ["Tokens", "Cash", "PL", "Equity"] 
      
      arrayAcc.forEach( acc => { console.log("Tthis_ " + acc )})
      Object.keys(state.dbGl).forEach((glName) => {
        arrayCcy.forEach(ccy => {
          Vue.set(state.dbGl[glName], ccy, {})
          arrayAcc.forEach(account => {
            Vue.set(state.dbGl[glName][ccy], account, 0)
          });
        });
      })
    },
    gl(state, payload) {

      state.dbGl[payload.gl][payload.creditccy][payload.credit] +=
        payload.creditamt;
      state.dbGl[payload.gl][payload.debitccy][payload.debit] -=
        payload.debitamt;

      // Case of Multicurrency Transaction
      
      if (payload.debitccy != payload.creditccy) {
        if (payload.debitccy != "USDC") {

          state.dbGl[payload.gl][payload.debitccy]["FX Exchange"] -=
            payload.debitamt;
        }
        if (payload.creditccy != "USDC") {
          state.dbGl[payload.gl][payload.creditccy]["FX Exchange"] +=
            payload.creditamt;
        }
      }
      
      var txid = state.txid;
      state.dbJournal[txid] = {};
      state.dbJournal[txid]["gl"] = payload.gl;
      state.dbJournal[txid]["account"] = payload.debit;
      state.dbJournal[txid]["ccy"] = payload.debitccy;
      state.dbJournal[txid]["dc"] = "d";
      state.dbJournal[txid]["amount"] = payload.debitamt;
      state.dbJournal[txid]["balance"] =
        state.dbGl[payload.gl][payload.debitccy][payload.debit];
      state.dbJournal[txid]["date"] = Date.now();
      state.txid++;
      txid = state.txid;
      state.dbJournal[txid] = {};
      state.dbJournal[txid]["gl"] = payload.gl;
      state.dbJournal[txid]["account"] = payload.credit;
      state.dbJournal[txid]["ccy"] = payload.creditccy;
      state.dbJournal[txid]["dc"] = "c";
      state.dbJournal[txid]["amount"] = payload.creditamt;
      state.dbJournal[txid]["balance"] =
        state.dbGl[payload.gl][payload.creditccy][payload.credit];
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
    },
  },
});
