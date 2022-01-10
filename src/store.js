import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dbGl: {
      community: {
        PLEI: {
          Tokens: 0,
        },
      },
      investors: {
        PLEI: {
          Tokens: 0,
        },
      },
      pleidao: {
        PLEI: {
          Tokens: 0,
        },
      },
      plei: {
        PLEI: {
          Tokens: 0,
        },
      },
      treasury: {
        PLEI: {
          Tokens: 0,
        },
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
      Object.keys(state.dbGl).forEach(glName => {        
        Object.keys(state.dbGl[glName]).forEach(ccy => {
          Object.keys(state.dbGl[glName][ccy]).forEach(account => {    
            //eval(account)
            console.log(glName + "," + ccy +"," + account )
            let balance = state.dbGl[glName][ccy][account]
            //eval(balance)
            console.log(glName + "," + ccy +"," + account +"," + ( isNaN(balance) ? 0 : balance ))
            state.dbHistory.push([state.epoch,glName,ccy,account, ( isNaN(balance) ? 0 : balance )] );
          });
        });
      });

    },
    gl(state, payload) {

      if (typeof state.dbGl[payload.gl][payload.creditccy] == "undefined") {
        state.dbGl[payload.gl][payload.creditccy] = {};
      }

      if (typeof state.dbGl[payload.gl][payload.debitccy] == "undefined") {
        state.dbGl[payload.gl][payload.debitccy] = {};
      }
      if (isNaN(state.dbGl[payload.gl][payload.debitccy][payload.debit])) {
        state.dbGl[payload.gl][payload.debitccy][payload.debit] = 0;
      }
      if (isNaN(state.dbGl[payload.gl][payload.creditccy][payload.credit])) {
        state.dbGl[payload.gl][payload.creditccy][payload.credit] = 0
      }
      state.dbGl[payload.gl][payload.creditccy][payload.credit] +=
        payload.creditamt;
      state.dbGl[payload.gl][payload.debitccy][payload.debit] -=
        payload.debitamt;
      // Case of Multicurrency Transaction
      if (payload.debitccy != payload.creditccy) {
        if (payload.debitccy != "USDC") {
          if (isNaN(state.dbGl[payload.gl][payload.debitccy]["FX Exchange"])) {
            state.dbGl[payload.gl][payload.debitccy]["FX Exchange"] = 0;
          }
          state.dbGl[payload.gl][payload.debitccy]["FX Exchange"] -=
            payload.debitamt;
        }
        if (payload.creditccy != "USDC") {
          if (isNaN(state.dbGl[payload.gl][payload.creditccy]["FX Exchange"])) {
            state.dbGl[payload.gl][payload.creditccy]["FX Exchange"] = 0;
          }
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
