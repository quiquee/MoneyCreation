<template>
  <v-app>
    <div id="app">
      <h1>Money Creation Simulator (WIP)</h1>

      <v-btn v-on:click="runSimProxy(true)"> Run Simulation </v-btn>
      <v-btn v-on:click="runSimProxy(false)"> Run Step </v-btn>
      <v-btn v-on:click="showHistory(true)"> Download Results </v-btn>
      <v-btn v-on:click="showJournals(true)"> Download Journals </v-btn>
      <v-btn v-on:click="showChart()"> Chart </v-btn>
      <v-btn v-if="!this.paused" v-on:click="pause"> Pause </v-btn>
      <v-btn v-if="this.paused" v-on:click="pause"> Continue </v-btn>

      <div class="speed">
        Lag between updates:
        <v-slider v-model="speed" hint="Speed" max="1000" min="10"></v-slider>
      </div>

      <h3>
        Step {{ $store.state.epoch }} {{ this.currdate }} Tokens :
        {{ totalMoney }}
      </h3>
      Amounts are in Millions<p></p>
      <div class="cards">
        <div class="cards">
          <Ledger title="Treasury" gl="treasury" />
          
        </div>
        <div class="cards">
          <Ledger title="Community" gl="community" />
         </div>
        <div class="cards">
          <Ledger title="Investors" gl="investors" />
         </div>
        <div class="cards">
          <Ledger title="Plei Dao" gl="pleidao" />
          </div>
        <div class="cards">
          <Ledger title="Plei Team" gl="plei" />
        </div>
      </div>
      <line-chart :chart-data="chartdata"></line-chart>
    </div>
  </v-app>
</template>

<script>
import Ledger from "./ledger";
import { rules } from "./rules.js";
import { marketdata } from "./market.js";
import LineChart from "./gchart";
import { schedule } from "./schedule.js";

export default {
  name: "app",
  components: {
    Ledger,
    LineChart,
  },
  data() {
    return {
      speed: 500,
      speedinterval: 10,
      genesis: "2022-05-22T00:00:00.000Z",
      currdate: null,
      paused: false,
      chartdata: null,
      gradient: null,
    };
  },
  methods: {
    showHistory: function () {
      let historycontent = "epoch,gl,concept,account,ccy,amount\n";
      this.$store.state.dbHistory.forEach((histElement) => {
        historycontent +=  + "\n";
      });
      var a = document.createElement("a");
      let filename = "export.csv";
      let contentType = "application/csv;charset=utf-8;";
      a.download = filename;
      a.href = "data:" + contentType + "," + historycontent;
      a.target = "_blank";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    },
    showJournals: function () {
      let historycontent = "epoch,gl,concept,account,ccy, amount,balance\n";
      Object.keys(this.$store.state.dbJournal).forEach((key) => {
        let journal = this.$store.state.dbJournal[key]
        //console.log("Journal  =", journal)
        historycontent += [
          journal.epoch,
          journal.gl,
          journal.concept,
          journal.account,
          journal.ccy,
          journal.dc == 'd' ? journal.amount : - journal.amount,
          journal.balance ].join() + "\n";
      });
      var a = document.createElement("a");
      let filename = "export.csv";
      let contentType = "application/csv;charset=utf-8;";
      a.download = filename;
      a.href = "data:" + contentType + "," + historycontent;
      a.target = "_blank";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    },
    runSimProxy: function (step) {
      if (this.$store.state.epoch == 0) {
        this.$store.commit("initGl", this.$store.state);
        Object.keys(rules).forEach( rule => {
          console.log("Initializing rule: " + rule)
          rules[rule](this.$store, "Account Initialization", 0, 0 )
        })
      }
      this.currdate = new Date(this.genesis);
      this.currdate.setMonth(
        this.currdate.getMonth() + this.$store.state.epoch
      );
      var current = this.currdate.getTime();

      if (!this.paused) {
        [...schedule].forEach((element) => {
          var start = new Date(Date.parse(element["Start Date"])).getTime();
          var end = new Date(Date.parse(element["End Date"])).getTime();
          if (start == end) {
            end = start + 2628000000;
          }
          //console.log("Check " + element.Item)
          var price = element.Price;
          if (start <= current && current <= end) {
            if (price < 0) {              
              price = marketdata[this.$store.state.epoch].Price;

              // console.log(marketdata)
              // element.Price=marketdata[this.$store.state.epoch].Price
            }
            rules[element.Event](this.$store, element.Item, element.EventAmount, price);
            console.log(
              element.Item +
                " / " +
                element.Event +
                " Tokens: " +
                element.EventAmount +
                " Price: " +
                price
            );
          }
        });
        this.$store.commit("saveHist", this.$store.state);
        this.$store.commit("dawn");
        if (step && this.$store.state.epoch <= 70) {
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
  margin-left: 2em;
  color: #2c3e50;
  margin-top: 10px;
}

.speed {
  margin-left: 2em;
  margin-top: 1em;
  width: 20em;
}

button {
  border-style: line;
  margin-left: 0em;
  padding: 0.2em;
}

.cards {
  display: inline;
}
</style>
