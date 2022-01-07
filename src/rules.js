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
  PublicSale: function (store, amt, price) {
    // Accounting in the DAO amount is in tokens
    store.commit("gl", {
      gl: "pleidao",
      debitccy: "PLEI",
      debit: "Tokens",
      debitamt: amt,
      creditccy: "USDC",
      credit: "Token Sale Public",
      creditamt: amt * market(price),
      price: price
    });
    // Community
    store.commit("gl", {
      gl: "community",
      debitccy: "USDC",
      debit: "Token Purchase",
      debitamt: amt * market(price),
      creditccy: "PLEI",
      credit: "Tokens",
      creditamt: amt,
    });
  }, PrivateSale: function (store, amt, price) {
    // Accounting in the DAO amount is in tokens
    store.commit("gl", {
      gl: "pleidao",
      debitccy: "PLEI",
      debit: "Tokens",
      debitamt: amt,
      creditccy: "USDC",
      credit: "Cash",
      creditamt: amt * market(price),
    });
    // Investors
    store.commit("gl", {
      gl: "investors",
      debitccy: "USDC",
      debit: "Cash",
      debitamt: amt * market(price),
      creditccy: "PLEI",
      credit: "Tokens",
      creditamt: amt,
    });
  },
  Dividends: function (store, amt, price) {
    // Accounting in the team
    store.commit("gl", {
      gl: "plei",
      credit: "Tokens",
      creditccy: "PLEI",
      creditamt: amt,
      debit: "Revenue Distribution",
      debitccy: "PLEI",
      debitamt: amt,
      price: price
    });
    // Accounting in the DAO
    store.commit("gl", {
      gl: "pleidao",
      creditccy: "PLEI",
      creditamt: amt,
      credit: "Equity",
      debit: "Tokens",
      debitccy: "PLEI",
      debitamt: amt
    });
  },

  Buyback: function (store, amt, price) {
    // Accounting in the DAO
    store.commit("gl", {
      gl: "treasury",
      debit: "Cash",
      debitccy: "USDC",
      debitamt: amt * market(price),
      credit: "Tokens",
      creditccy: "PLEI",
      creditamt: amt,
    });
    // COMMUNITY
    store.commit("gl", {
      gl: "community",
      credit: "Cash",
      creditccy: "USDC",
      creditamt: amt *  market(price),
      debit: "Tokens",
      debitccy: "PLEI",
      debitamt: amt
    });
  },

};
function market(price) {
  if (price < 0) {
    return 0.08;
  }
  return price;
}
