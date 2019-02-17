<template>
  <v-container>
    <v-layout row wrap>
        <Stock v-for="stock in stocks" :key="stock.id"></Stock>
    </v-layout>
  </v-container>
</template>

<script>
import Stock from './Stock'
  export default {
    components: {
      Stock
    },
    data() {
      return {
        stocks: [
          {id: '1', content: "BMW", price: 200},
          {id: '2', content: "Google", price: 400},
          {id: '3', content: "IBM", price: 250},
          {id: '4', content: "Facebook", price: 300},
          {id: '5', content: "Twitter", price: 120}
        ]
      }
    },
  }
</script>

<style>

</style>
