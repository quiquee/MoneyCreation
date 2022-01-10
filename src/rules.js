export const coa = {
  Tokens: {
    type: "asset",    
  },
  Cash: {
    type: "asset",    
  },
  Stake: {
    type: "asset",    
  },
  PL: {
    type: "liability",
  },
  ClientStake: {
    type: "liability",    
  },
  Equity: {
    type: "liability",  
  },
}

export const rules = {

  PublicSale: function (store, amt, price) {
    // Accounting in the DAO amount is in tokens
    store.commit("gl", {
      gl: "pleidao",
      debitccy: "PLEI",
      debit: "Tokens",
      debitamt: amt,
      creditccy: "USDC",
      credit: "PL",
      creditamt: amt * market(price),
      price: price,
    });
    // Community
    store.commit("gl", {
      gl: "community",
      debitccy: "USDC",
      debit: "PL",
      debitamt: amt * market(price),
      creditccy: "PLEI",
      credit: "Tokens",
      creditamt: amt,
    });
  },
  PrivateSale: function (store, amt, price) {
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
      debit: "PL",
      debitccy: "USDC",
      debitamt: amt * market(price),      
    });
    // Accounting in the DAO
    store.commit("gl", {
      gl: "pleidao",
      creditccy: "PLEI",
      creditamt: amt,
      credit: "Equity",
      debit: "Tokens",
      debitccy: "PLEI",
      debitamt: amt,
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
      creditamt: amt * market(price),
      debit: "Tokens",
      debitccy: "PLEI",
      debitamt: amt,
    });
  },
  PrivateStaking: function (store, amt, price) {
    amt = derive(store,amt)
    // Accounting for Investors
    store.commit("gl", {
      gl: "investors",
      debit: "Tokens",
      debitccy: "PLEI",
      debitamt: amt ,
      credit: "Stake",
      creditccy: "PLEI",
      creditamt: amt,
    });
    // Accounting in Treasury
    store.commit("gl", {
      gl: "treasury",
      credit: "Stake",
      creditccy: "PLEI",
      creditamt: amt ,
      debit: "ClientStake",
      debitccy: "PLEI",
      debitamt: amt,
    });
  },
  Revenue: function (store, amt, price) {
    amt = derive(store,amt)
    // Accounting in Treasury
    store.commit("gl", {
      gl: "treasury",
      credit: "Cash",
      creditccy: "USDC",
      creditamt: amt ,
      debit: "PL",
      debitccy: "USDC",
      debitamt: amt,
    });
  },


};
function derive(store,amt){
  if (isNaN(amt)){
    let newamt = eval("store.state.dbGl." + amt) ;    
    console.log("Evaled to store.state.dbGl."+  amt + " = " + newamt );
    
    return newamt
  }
  return amt
}

function market(price) {
  if (isNaN(price)) {
    console.log("Price is not a number");
    return -999;
  }
  if (price < 0) {
    return 0.08;
  }
  return price;
}
