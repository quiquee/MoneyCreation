<template>
  <div>Choose Schedule Item: 
    <select v-model="selected">
      <option v-for="(item,index) in scheduleLst" :value="index">
        {{index}} {{ item }}
      </option>
    </select>
    <div>Schedule Item: {{ selected }}</div>    
    <div>Event: {{ chosen.Event }}</div>
    <div>Start Date: {{ chosen["Start Date"]}}</div>
    <div>End Date: {{ chosen["End Date"] }}</div>
    <div>Amount: {{ chosen.EventAmount }}</div>
    <div>Price: {{ chosen.Price }}</div>
  </div>
</template>

<script>
import { schedule } from "../schedule.js";
export default {
  data() {
    return {
      scheduleLst: [],
      selected: 0,
      myschedule: schedule
    };
  },

  beforeMount: function () {
    schedule.forEach((item) => {
      this.scheduleLst.push(item.Item);
    });
  },

  computed: {
    chosen: function () {
      return this.myschedule[this.selected]
    },
  },
};
</script>

<style>
</style>