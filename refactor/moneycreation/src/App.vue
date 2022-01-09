<template>
  <div id="app">
    <h1>Money Creation Simulator</h1>
    <H2>Epoch {{$store.state.epoch}}</h2>
    <input
      title="Mint 1 token"
      v-on:click="mint"
      type="button"
      value="Mint"
    />

    <input
      title="Airdrop"
      v-on:click="airdrop"
      type="button"
      value="Airdrop"
    />

    <input
      title="Time+"
      v-on:click="$store.commit('dawn')"
      type="button"
      value="Time+"
    />
    <h3>Money in the System is {{ totalMoney }} USD</h3>
    <div id="NewStyle">
     
      <div>
        <Ledger title="Plei" gl="plei" />
        <Chart title="Plei" gl="plei" width="300" height="200" />
      </div>
      <div>
        <Ledger title="Community" gl="community" />
        <Chart title="Community" gl="community" width="300" height="200" />
      </div>
      <div>
        <Ledger title="Plei Dao" gl="pleidao" />
        <Chart title="Plei Dao" gl="pleidao" width="300" height="200" />
      </div>
    </div>
  </div>
</template>

<script>
import Ledger from "./ledger";
import { rules } from "./rules.js";
import Chart from "./chart";
export default {
  store,
  name: "app",
  components: {
    Ledger,
    Chart
  },
  data() {
    return {};
  },
  methods: {
    mint: function() {

      console.log("Mint");
      rules.mint(this.$store);
    },
    airdrop: function() {
      console.log("Airdrop");
      rules.airdrop(this.$store);
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
    buyBitcoinB: function() {
      rules.buyBitcoinB(this.$store);
    },
    drawCash: function() {
      rules.drawCash(this.$store);
    },
    depositCash: function() {
      rules.depositCash(this.$store);
    },
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
