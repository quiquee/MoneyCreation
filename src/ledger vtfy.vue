<template>
  <div class="ledger">
    <v-card class="mx-auto" max-width="344" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-h5 mb-4">
            {{ title }}
          </div>
          <div
            v-for="(ccy, accasd) in this.$store.state.dbGl[gl]"
            :key="accasd"
          >
            <v-list-item-title class="text-h8 mb-1">
              {{ accasd }}
            </v-list-item-title>
            
            Assets
            <div v-for="(amount, account) in ccy" :key="account">
              <v-list-item-subtitle
                class="asset"
                v-if="accountType(account) == 'asset' && account != 'FX Exchange'"
              >
                {{ account }} : {{ amountFmt(amount) }} <br />
              </v-list-item-subtitle>
            </div>

            Liabilities
            <div v-for="(amount, account) in ccy" :key="account">
              <v-list-item-subtitle
                class="liability"
                v-if="accountType(account) == 'liability' && account != 'FX Exchange'"
              >
                {{ account }} : {{ amountFmt(amount) }} <br />
              </v-list-item-subtitle>
            </div>
            
            <div v-for="(amount, account) in ccy" :key="account">
              <v-list-item-subtitle
                class="liability"
                v-if=" accountType(account) == 'offBs' && account != 'FX Exchange'"
              >
                {{ account }} : {{ amountFmt(amount) }} <br />
              </v-list-item-subtitle>
            </div>
          </div>
          <v-list-item-subtitle></v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-btn outlined rounded text> Show Chart </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import {coa} from "./rules.js"
export default {
  props: ["title", "gl"],
  name: "Ledger",
  methods: {
    amountFmt(amount) {
      if (amount) {
        return Math.round((amount * 100) / 1e6) / 100;
        //return Math.round(amount);
      }      
    },
    accountType(account){
      if (coa[account]) {
        return coa[account].type
      }
      return "offBs"
    }
  },
};
</script>

<style>
h1 {
  margin: 0px;
  font-size: 16px;
  margin-bottom: 6px;
  border-bottom: 1px solid;
}

.ledger {
  display: inline-block;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 7px;
    
}

.asset {
  color: blue;
}

.liability {
  color: red;
}
</style>
