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
      }
    },
    computed: {
      stocks() {
        return this.$store.getters.stocks
      }
    },
  }
</script>

<style>

</style>
