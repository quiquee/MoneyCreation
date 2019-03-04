<template>
  <div id="app">
    <h1>Money Creation Simulator</h1>

    <input
      title="BORROW MONEY FROM BANK"
      v-on:click="askLoan"
      type="button"
      value="Borrow Money"
    />

    <input
      title="PAY BACK LOAN"
      :disabled="
        this.$store.state.dbGl['me']['Debt with Bank'] == 0 ||
          this.$store.state.dbGl['me']['Current Account'] <= 0
      "
      v-on:click="payLoan"
      type="button"
      value="Pay Back"
    />

    <input
      title="BUY TOKENS WITH BITCOINS"
      :disabled="
        this.$store.state.dbGl['me']['Bitcoins'] <= 0 ||
          this.$store.state.dbGl['other']['Tokens'] <= 0
      "
      v-on:click="buyIco"
      type="button"
      value="Buy Tokens"
    />

    <input
      title="DRAW CASH FROM BANK"
      :disabled="
        this.$store.state.dbGl['me']['Current Account'] <= 0 ||
          this.$store.state.dbGl['bank']['Cash'] <= 0
      "
      v-on:click="drawCash"
      type="button"
      value="Draw Cash"
    />

    <input
      title="MINE BITCOINS"
      v-on:click="mineBitcoin"
      type="button"
      value="Mine Bitcoin"
    />

    <input
      title="BUY BITCOINS WITH CASH"
      :disabled="
        this.$store.state.dbGl['me']['Cash'] <= 0 ||
          this.$store.state.dbGl['other']['Bitcoins'] <= 0
      "
      v-on:click="buyBitcoin"
      type="button"
      value="Buy Bitcoin"
    />

    <h3>Money in the System is {{ totalMoney }} USD</h3>
    <div id="NewStyle">
      <div>
        <Ledger title="Me" gl="me" />
        <Chart title="Me" gl="me" width="300" height="200" />
      </div>
      <div>
        <Ledger title="Bank" gl="bank" />
        <Chart title="Bank" gl="bank" width="300" height="200" />
      </div>
      <div>
        <Ledger title="Startup" gl="startup" />
        <Chart title="Startup" gl="startup" width="300" height="200" />
      </div>
      <div>
        <Ledger title="Others" gl="other" />
        <Chart title="Other" gl="other" width="300" height="200" />
      </div>
    </div>
  </div>
</template>

<script>
import Ledger from "./ledger";
import { rules } from "./rules.js";
import Chart from "./chart";
export default {
  name: "app",
  components: {
    Ledger,
    Chart
  },
  data() {
    return {};
  },
  methods: {
    askLoan: function() {
      rules.askLoan(this.$store);
    },
    payLoan: function() {
      rules.payLoan(this.$store);
    },
    buyIco: function() {
      rules.buyIco(this.$store);
    },
    mineBitcoin: function() {
      rules.mineBitcoin(this.$store);
    },
    buyBitcoin: function() {
      rules.buyBitcoin(this.$store);
    },
    drawCash: function() {
      rules.drawCash(this.$store);
    }
  },
  computed: {
    totalMoney() {
      let money = 0;
      let ledgers = this.$store.getters.ledgers;

      for (let i = 0; i < ledgers.length; i++) {
        for (let account in this.$store.state.dbGl[ledgers[i]]) {
          var balance = this.$store.state.dbGl[ledgers[i]][account];
          if (this.$store.state.moneyAccounts.indexOf(account) > -1)
            money += balance;
        }
      }
      return money;
    }
  }
};
</script>

<style>
.NewStyle {
  text-align: left;
}
.btAction {
  display: inline-block;
  *display: inline;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
