<template>
  <div id="app">
    <h1>Money Creation Simulator</h1>
    <input v-on:click="askLoan" type=button value="Ask for a Loan">
    <input v-on:click="buyIco" type=button value="Buy Tokens">
    <input v-on:click="mineBitcoin" type=button value="Mine Bitcoin">
    <input v-on:click="buyBitcoin" type=button value="Buy Bitcoin">
    <h3>Money in the System is {{ totalMoney }} USD</h3>
    <div id="NewStyle">
      <Ledger title="bank"/>
      <Ledger title="me"/>
      <Ledger title="startup"/>
      <Ledger title="other"/>
    </div>
  </div>
</template>

<script>
import store from './store' ;
import Ledger from './ledger' ;
import { mapState } from 'vuex';
import { rules } from "./rules.js";

export default {

  name: "app",
  components: {
    Ledger
  },
  data() {
    return {
      ledgers: ['bank','me','startup','other'],
      moneyAccounts: ["Current Account","Bitcoins","Tokens","Cash"],
     }
  },
  methods: {
    askLoan: function() { rules.askLoan(this.$store) },
    buyIco: function() { rules.buyIco(this.$store) },
    mineBitcoin: function () { rules.mineBitcoin(this.$store) },
    buyBitcoin: function () { rules.buyBitcoin(this.$store) },
  },
  computed: {
    totalMoney(){
      var money = 0;
      var ledgers=this.$data.ledgers;
      var moneyAccounts=this.$data.moneyAccounts;
      for(var i = 0; i < (ledgers.length) ; i++ ) {
        for( var account in this.$store.state[ledgers[i]]) {
          var balance = this.$store.state[ledgers[i]][account];
          if (moneyAccounts.indexOf(account)>-1)  money+=balance ;
        }
      }
      return money;
    }
  },
}

</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
