<template>
<div id="app">
    <h1>Money Creation Simulator</h1>
    <input v-on:click="askLoan" type=button value="Ask for a Loan">


      <input
        :disabled="this.$store.state.dbGl['me']['Bitcoins']=0"
        v-on:click="buyIco" type=button value="Buy Tokens">

    <input v-on:click="drawCash" type=button value="Draw Cash">
    <input v-on:click="mineBitcoin" type=button value="Mine Bitcoin">
    <input v-on:click="buyBitcoin" type=button value="Buy Bitcoin">
    <h3>Money in the System is {{ totalMoney }} USD</h3>
    <div id="NewStyle">
        <div>
            <Ledger title="Bank" gl="bank"/>
            <Chart title="Bank" gl="bank" width=300 height=200 />
        </div>
        <div>
        <Ledger title="Me" gl="me"/>
        <Chart title="Me" gl="me" width=300 height=200 />
        </div>
<div>
        <Ledger title="Startup" gl="startup"/>
        <Chart title="Startup" gl="startup" width=300 height=200 />
        </div>
    <div>
            <Ledger title="Others" gl="other"/>
        <Chart title="Other" gl="other" width=300 height=200 />
        </div>

    </div>
    <div id="NewStyle">

    </div>
</div>
</template>

<script>
import store from './store';
import Ledger from './ledger';
import {mapState} from 'vuex';
import {rules} from "./rules.js";
import Chart from "./chart";
export default {

    name: "app",
    components: {
        Ledger,
        Chart
    },
    data() { return {} },
    methods: {
        askLoan: function() {
            rules.askLoan(this.$store)
        },
        buyIco: function() {
            rules.buyIco(this.$store)
        },
        mineBitcoin: function() {
            rules.mineBitcoin(this.$store)
        },
        buyBitcoin: function() {
            rules.buyBitcoin(this.$store)
        },
        drawCash: function() {
            rules.drawCash(this.$store)},
    },
    computed: {
        totalMoney() {
            let money = 0;
            let ledgers = this.$store.getters.ledgers;
            let moneyAccounts = this.$data.moneyAccounts;
            for (let i = 0; i < (ledgers.length); i++) {
                for (let account in this.$store.state.dbGl[ledgers[i]]) {
                    var balance = this.$store.state.dbGl[ledgers[i]][account];
                    if (this.$store.state.moneyAccounts.indexOf(account) > -1) money += balance;
                }
            }
            return money;
        },
    },
}
</script>

<style>
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
