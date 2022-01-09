export const rules = {
  mint: function(store) {
    // Accounting in the plei dao
    store.commit("gl", {
      gl: "pleidao",
      credit: "Tokens",
      debit: "Capital",
      amount: 1,
    });
  },
  airdrop: function(store) {
    // Accounting in the Banks Ledger
    store.commit("gl", {
      gl: "pleidao",
      debit: "Tokens",
      credit: "Airdropped",
      amount: 1
    });
    // Accounting in the My Ledger
    store.commit("gl", {
      gl: "community",
      debit: "Airdropped",
      credit: "Tokens",
      amount: 1
    });
  },
  buyIco: function(store) {
    // Accounting in the Others Ledger
    store.commit("gl", {
      gl: "other",
      credit: "Bitcoins",
      debit: "Tokens",
      amount: 100
    });
    // Accounting in the My Ledger
    store.commit("gl", {
      gl: "me",
      credit: "Tokens",
      debit: "Bitcoins",
      amount: 100
    });
  },

  drawCash: function(store) {
    // Accounting in the Others Ledger
    store.commit("gl", {
      gl: "me",
      credit: "Cash",
      debit: "Current Account",
      amount: 100
    });
    // Accounting in the My Ledger
    store.commit("gl", {
      gl: "bank",
      credit: "Client Deposits",
      debit: "Cash",
      amount: 100
    });
  },

  depositCash: function(store) {
    // Accounting in the Others Ledger
    store.commit("gl", {
      gl: "me",
      debit: "Cash",
      credit: "Current Account",
      amount: 100
    });
    // Accounting in the My Ledger
    store.commit("gl", {
      gl: "bank",
      debit: "Client Deposits",
      credit: "Cash",
      amount: 100
    });
  },

  mineBitcoin: function(store) {
    // Accounting in the Others Ledger
    store.commit("gl", {
      gl: "other",
      credit: "Bitcoins",
      debit: "Profit&Loss",
      amount: 100
    });
  },

  buyBitcoin: function(store) {
    // Accounting in the Others Ledger
    store.commit("gl", {
      gl: "other",
      credit: "Cash",
      debit: "Bitcoins",
      amount: 100
    });
    // Accounting in the My Ledger
    store.commit("gl", {
      gl: "me",
      credit: "Bitcoins",
      debit: "Cash",
      amount: 100
    });
  },
  buyBitcoinB: function(store) {
    // Accounting in the Others Ledger
    store.commit("gl", {
      gl: "other",
      credit: "Current Account",
      debit: "Bitcoins",
      amount: 100
    });
    // Accounting in the My Ledger
    store.commit("gl", {
      gl: "me",
      credit: "Bitcoins",
      debit: "Current Account",
      amount: 100
    });

  }
};
