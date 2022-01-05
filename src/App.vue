<template>
  <div id="app">
    <h1>Money Creation Simulator</h1>
    
    <button v-on:click="runSimProxy(true)">Run Simulation</button>
    <button v-on:click="runSimProxy(false)">Run Step</button>
    <button v-on:click="showJournal()">ShowJournal</button>
    <button v-if="!this.paused" v-on:click="pause">Pause</button>
    <button v-if="this.paused" v-on:click="pause">Continue</button>
    <button v-on:click="decelerate">-</button>Speed ({{ this.speed }})<button
      v-on:click="accelerate"
    >
      +
    </button>
    <h3>Step {{ $store.state.epoch }} {{ this.currdate }} 
    Tokens : {{ totalMoney }} </h3>
    Amounts are in Millions
    <div id="NewStyle">
      <div>
        <Ledger title="Treasury" gl="treasury" />
        <Chart title="Plei" gl="plei" width="300" height="200" />
      </div>
      <div>
        <Ledger title="Community" gl="community" />
        <Chart title="Community" gl="community" width="300" height="200" />
      </div>
      <div>
        <Ledger title="Investors" gl="investors" />
        <Chart title="Community" gl="community" width="300" height="200" />
      </div>
      <div>
        <Ledger title="Plei Dao" gl="pleidao" />
        <Chart title="Plei Dao" gl="pleidao" width="300" height="200" />
      </div>
      <div>
        <Ledger title="Plei Team" gl="plei" />
        <Chart title="Plei Dao" gl="pleidao" width="300" height="200" />
      </div>
    </div>
    
  </div>
</template>

<script>
import Ledger from "./ledger";
import { rules } from "./rules.js";
import Chart from "./chart";
import { schedule } from "./schedule.js";
export default {
  name: "app",
  components: {
    Ledger,
    Chart,
  },
  data() {
    return {
      speed: 1000,
      speedinterval: 10,
      genesis: "2022-05-01T00:00:00.000Z",
      currdate: null,
      paused: false,
    };
  },
  methods: {
    showJournal: function () {
      console.log(this.$store.state.dbJournal);
    },

    runSimProxy: function (step) {
      this.currdate = new Date(this.genesis);
      this.currdate.setMonth(
        this.currdate.getMonth() + this.$store.state.epoch
      );
      var current = this.currdate.getTime();
      if (!this.paused) {
        [...schedule].forEach((element) => {
          var start = new Date(Date.parse(element["Start Date"])).getTime();
          var end = new Date(Date.parse(element["End Date"])).getTime();
          if (start == end ) { end = start + 2628000000}
          console.log("Check " + element.Item)
          if ( start <= current && current <= end ) {
            rules[element.Event](this.$store, element.EventAmount);
            console.log(
              element.Item +
                " / " +
                element.Event +
                " Tokens: " +
                element.EventAmount
            );
          }
        });

        this.$store.commit("dawn");
        if (step) {          
          setTimeout(() => {
            this.runSimProxy(step);
          }, this.speed);
        }
      }
    },

    pause: function () {
      if (this.paused) {
        this.paused = false;
        this.runSim();
      } else {
        this.paused = true;
      }
    },
    decelerate: function () {
      this.speed = this.speed + this.speedinterval;
    },
    accelerate: function () {
      if (this.speed > this.speedinterval) {
        this.speed = this.speed - this.speedinterval;
      }
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
      return Math.round(money);
    },
  },
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

button {
  border-style: line;
  margin-left: 0em;
  padding: 0.2em;
}
</style>
