<template>
  <div class="graph">
    <v-chart
      v-if="assetData.data.length > 0"
      v-bind:chartData="{
        ...chartData,
        ...{ selector: 'asset' + this.title },
        ...{ title: 'Assets' },
        ...assetData
      }"
    ></v-chart>

    <v-chart
      v-if="liabilityData.data.length > 0"
      v-bind:chartData="{
        ...chartData,
        ...{ selector: 'liab' + this.title },
        ...{ title: 'Liabilities' },
        ...{
          overrides: {
            palette: { fill: ['#922', '#ddd'] }
          }
        },
        ...liabilityData
      }"
    ></v-chart>
  </div>
</template>
<script>
export default {
  //glData: store.$state,
  name: "example",
  props: ["title", "gl", "width", "height"],
  data: function() {
    return {
      chartData: {
        chartType: "vBarChart",
        title: this.title,
        width: this.width,
        height: this.height,
        dim: "acc",
        metric: "balance"
      }
    };
  },
  computed: {
    graphData() {
      let gData = [];
      for (let account in this.$store.state.dbGl[this.gl]) {
        gData.push({
          acc: account,
          balance: this.$store.state.dbGl[this.gl][account]
        });
      }
      return { data: gData };
      //return this.$store.getters.moneyData;
    },
    assetData() {
      let gData = [];
      for (let account in this.$store.state.dbGl[this.gl]) {
        let balance = this.$store.state.dbGl[this.gl][account];
        if (balance > 0) gData.push({ acc: account, balance: balance });
      }
      return { data: gData };
      //return this.$store.getters.moneyData;
    },
    liabilityData() {
      let gData = [];
      for (let account in this.$store.state.dbGl[this.gl]) {
        let balance = this.$store.state.dbGl[this.gl][account];
        if (balance < 0) gData.push({ acc: account, balance: -balance });
      }
      return { data: gData };
      //return this.$store.getters.moneyData;
    }
  }
};
</script>

<style>
.graph {
  display: inline-block;
  *display: inline;
  margin-left: 20px;
  vertical-align: bottom;
}
</style>
