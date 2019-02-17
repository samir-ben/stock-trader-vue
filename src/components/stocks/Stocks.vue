<template>
  <v-container>
    <v-layout row wrap>
        <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"></Stock>
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
          {id: '1', name: "BMW", price: 200},
          {id: '2', name: "Google", price: 400},
          {id: '3', name: "IBM", price: 250},
          {id: '4', name: "Facebook", price: 300},
          {id: '5', name: "Twitter", price: 120}
        ]
      }
    },
  }
</script>

<style>

</style>
