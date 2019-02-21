<template>
  <div id="app">
    <h1>Money Creation Simulator</h1>
    <input v-on:click="askLoan" type=button value="Ask for a Loan">
    <input v-on:click="buyIco" type=button value="Buy Tokens">
    <input v-on:click="mineBitcoin" type=button value="Mine Bitcoin">
    <input v-on:click="buyBitcoin" type=button value="Buy Bitcoin">
    <h3>Money in the System is {{ totalMoney }}</h3>
    <div class=bank>
      <h1>Bank</h1>
      <div v-for="(amount,account) in this.$store.state.bank">
        {{ account }} : {{ amount }}<br>
      </div>
    </div>
    <div class=startup>
      <h1>Startup</h1>
      <div v-for="amount,account in this.$store.state.startup">
        {{ account }} : {{ amount }}<br>
      </div>
    </div>
    <div class=me>
      <h1>Me</h1>
      <div v-for="amount,account in this.$store.state.me">
        {{ account }} : {{ amount }}<br>
      </div>
    </div>
    <div class=others>
      <h1>Others</h1>
      <div v-for="amount,account in this.$store.state.other">
        {{ account }} : {{ amount }}<br>
      </div>
    </div>
  </div>
</template>

<script>
//import store from "./store";

import store from './store' ;
// import { mapGetters, mapState } from 'vuex' ;

export default {

  name: "app",
  components: {
    // HelloWorld
  },
  data() {
    return {
      //myBankLoan: this.$store.state.myBankLoan,
      bitcoinIsMoney: true,
      tokenIsMoney: true
     }
  },
  methods: {
    askLoan: function () {
      // Accounting in the Banks Ledger
      this.$store.commit("gl", {
        gl:"bank",
        credit:"Client Loan",
        debit:"Client Deposits",
        amount:1
      });
      // Accounting in the My Ledger
      this.$store.commit("gl", {
        gl:"me",
        credit:"Current Account",
        debit:"Debt with Bank",
        amount:1
      });
    } ,
    buyIco: function () {
      // Accounting in the Others Ledger
      this.$store.commit("gl", {
        gl:"other",
        credit:"Bitcoins",
        debit:"Tokens",
        amount:1
      });
      // Accounting in the My Ledger
      this.$store.commit("gl", {
        gl:"me",
        credit:"Tokens",
        debit:"Bitcoins",
        amount:1
      });
    } ,
    mineBitcoin: function () {
      // Accounting in the Others Ledger
      this.$store.commit("gl", {
        gl:"other",
        credit:"Bitcoins",
        debit:"Profit&Loss",
        amount:1
      });
      // Accounting in the My Ledger
      this.$store.commit("gl", {
        gl:"me",
        credit:"Bitcoins",
        debit:"Current Account",
        amount:1
      });} ,
    buyBitcoin: function () {
      // Accounting in the Others Ledger
      this.$store.commit("gl", {
        gl:"other",
        credit:"Current Account",
        debit:"Bitcoins",
        amount:1
      });
      // Accounting in the My Ledger
      this.$store.commit("gl", {
        gl:"me",
        credit:"Bitcoins",
        debit:"Current Account",
        amount:1
      });

    } ,
  },
  computed: {
    totalMoney(){
      return this.$store.state.myCurrentAcc +
             this.$store.state.theirCurrentAcc +
             (this.$data.bitcoinIsMoney? store.state.theirBitcoins + store.state.myBitcoins : 0 ) +
             (this.$data.tokenIsMoney? store.state.theirTokens + store.state.myTokens : 0 ) ;
    },
    myCurrentAcc() { return store.getters.myCurrentAcc },
    myBankLoan() { return store.getters.myBankLoan },

  }
};
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
.me, .bank, .startup, .others {
  display: inline-block;
  *display: inline;
  vertical-align: top;
  text-align: left;
  font-size: 14px;
  width: 200px;
}
</style>
