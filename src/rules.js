export const rules = {

  askLoan: function (store) {
    // Accounting in the Banks Ledger
    store.commit("gl", {
      gl:"bank",
      credit:"Client Loan",
      debit:"Client Deposits",
      amount:1000
    });
    // Accounting in the My Ledger
    store.commit("gl", {
      gl:"me",
      credit:"Current Account",
      debit:"Debt with Bank",
      amount:1000
    });
  } ,

  buyIco: function (store) {
    // Accounting in the Others Ledger
    store.commit("gl", {
      gl:"other",
      credit:"Bitcoins",
      debit:"Tokens",
      amount:1
    });
    // Accounting in the My Ledger
    store.commit("gl", {
      gl:"me",
      credit:"Tokens",
      debit:"Bitcoins",
      amount:1
    });
  } ,

  mineBitcoin: function (store) {
    // Accounting in the Others Ledger
    store.commit("gl", {
      gl:"other",
      credit:"Bitcoins",
      debit:"Profit&Loss",
      amount:1
    });
    // Accounting in the My Ledger
    store.commit("gl", {
      gl:"me",
      credit:"Bitcoins",
      debit:"Current Account",
      amount:1
    });
  } ,

  buyBitcoin: function (store) {
    // Accounting in the Others Ledger
    store.commit("gl", {
      gl:"other",
      credit:"Current Account",
      debit:"Bitcoins",
      amount:1
    });
    // Accounting in the My Ledger
    store.commit("gl", {
      gl:"me",
      credit:"Bitcoins",
      debit:"Current Account",
      amount:1
    });
  },
}
