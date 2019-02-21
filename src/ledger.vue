<template>
  <div class="ledger">
    <h1>{{title}}</h1>
    <div v-for="amount,account in this.$store.state[title]">
      <div class="asset" v-if="amount > 0">
        {{ account }} : {{ amount }} USD<br>
      </div>
      <div class="liability" v-else>
        {{ account }} : {{ amount }} USD<br>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: ['title'],
  name: 'Ledger',
  computed: mapState([
    'OtherThing'
  ])
}
</script>

<style >
h1 {
  margin: 0px;
  margin-bottom: 6px;
  border-bottom: 1px solid;
}
.ledger {
  display: inline-block;
  *display: inline;
  vertical-align: top;
  text-align: left;
  font-size: 14px;
  width: 200px;
  margin-left: 10px;
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
