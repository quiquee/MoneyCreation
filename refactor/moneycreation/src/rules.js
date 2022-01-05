
export const rules = {
  mint: function (store, amt) {
    // Accounting in the DAO
    store.commit("gl", {
      gl: "pleidao",
      credit: "Tokens",
      debit: "Capital",
      amount: amt
    });
  },
  PublicSale: function (store, amt) {
    // Accounting in the DAO
    store.commit("gl", {
      gl: "pleidao",
      debit: "Tokens",
      credit: "Token Sale Public",
      amount: amt
    });
    // Community
    store.commit("gl", {
      gl: "community",
      debit: "Token Purchase",
      credit: "Tokens",
      amount: amt
    });
  }, PrivateSale: function (store, amt) {
    // Accounting in the DAO
    store.commit("gl", {
      gl: "pleidao",
      debit: "Tokens",
      credit: "Token Sale Private",
      amount: amt
    });
    // Investors
    store.commit("gl", {
      gl: "investors",
      debit: "Token Purchase",
      credit: "Tokens",
      amount: amt
    });
  },
  Dividends: function (store, amt) {
    // Accounting in the team
    store.commit("gl", {
      gl: "plei",
      credit: "Tokens",
      debit: "Revenue Distribution",
      amount: amt
    });
    // Accounting in the DAO
    store.commit("gl", {
      gl: "pleidao",
      credit: "Equity",
      debit: "Tokens",
      amount: amt
    });
  },

  Buyback: function (store, amt) {
    // Accounting in the DAO
    store.commit("gl", {
      gl: "treasury",
      debit: "Token Purchase",
      credit: "Tokens",
      amount: amt
    });
    // COMMUNITY
    store.commit("gl", {
      gl: "community",
      credit: "Tokens Sold",
      debit: "Tokens",
      amount: amt
    });
  },

};
