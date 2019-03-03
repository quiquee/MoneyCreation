export const rules = {
    askLoan: function(store) {
        // Accounting in the Banks Ledger
        store.commit("gl", {
            gl: "bank",
            credit: "Client Loan",
            debit: "Client Deposits",
            amount: 100
        });
        // Accounting in the My Ledger
        store.commit("gl", {
            gl: "me",
            credit: "Current Account",
            debit: "Debt with Bank",
            amount: 100
        });
    },
    payLoan: function(store) {
        // Accounting in the Banks Ledger
        store.commit("gl", {
            gl: "bank",
            debit: "Client Loan",
            credit: "Client Deposits",
            amount: 100
        });
        // Accounting in the My Ledger
        store.commit("gl", {
            gl: "me",
            debit: "Current Account",
            credit: "Debt with Bank",
            amount: 100
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

    mineBitcoin: function(store) {
        // Accounting in the Others Ledger
        store.commit("gl", {
            gl: "other",
            credit: "Bitcoins",
            debit: "Profit&Loss",
            amount: 100
        });
        // Accounting in the My Ledger
        store.commit("gl", {
            gl: "me",
            credit: "Bitcoins",
            debit: "Current Account",
            amount: 100
        });
    },

    buyBitcoin: function(store) {
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
            debit: "Cash",
            amount: 100
        });
    }
};
