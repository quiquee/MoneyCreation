<template>
  <div id="app">
    Fx Rate:<input type=text v-model="chartfxrate" placeholder="Enter fx rate">
    Epoch: {{this.$store.state.epoch}}
    <GChart type="BarChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
export default {
  name: "App",
  components: {
    GChart
  },
  data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function      
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017"
        }
      },
      chartfxrate: 1
    };  
  },
  computed: {
      chartData() {
          var tmpData = [
              ["Account", "Treasury", "Community", "Investors"],
        
      ] ;
      /*tmpData.push(["1",10,30,40]);
      tmpData.push(["1",20,30,40]);
      tmpData.push(["1",10,20,40]);
      tmpData.push(["1",10,20,30]);
*/
      tmpData.push(["Tokens (USDC Equiv @ " + this.chartfxrate +")",
      this.$store.state.dbGl["treasury"]["PLEI"]["Tokens"] * this.chartfxrate,
      this.$store.state.dbGl["community"]["PLEI"]["Tokens"] * this.chartfxrate, 
      this.$store.state.dbGl["investors"]["PLEI"]["Tokens"] * this.chartfxrate ]);
      
      tmpData.push(["Cash",
      this.$store.state.dbGl["treasury"]["USDC"]["Cash"],
      this.$store.state.dbGl["community"]["USDC"]["Cash"], 
      this.$store.state.dbGl["investors"]["USDC"]["Cash"] ]);


      return tmpData;
      }
  }
};
</script>
