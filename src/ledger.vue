<template>
  <div class="ledger">
    <h1>{{ title }}</h1>
    <div v-for="(ccy, accasd) in this.$store.state.dbGl[gl]" :key="accasd">
      <div>{{ accasd }}</div>
      <div v-for="(amount, account) in ccy" :key="account">
        <div class="asset" v-if="amount > 0 && account != 'FX Exchange'">
          {{ account }} : {{ amountFmt(amount) }} <br />
        </div>
        <div
          class="liability"
          v-else-if="amount < 0 && account != 'FX Exchange'"
        >
          {{ account }} : {{ amountFmt(amount) }} <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  vertical-align: top;
  text-align: left;
  font-size: 14px;
  width: 200px;
  min-height: 13em;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 7px;
  border: 1px solid;
  border-color: #888;
  box-shadow: 2px 3px #888;
}

.asset {
  color: blue;
}

.liability {
  color: red;
}
</style>
