<template>
   <v-layout align-center class="mb-5">
      <v-flex sm6 md4>
        <v-card  width="300" height="130">
          <v-card-title class="card-title">
            <h3>{{stock.name}} <small> (Price: {{stock.price}} )</small></h3>
          </v-card-title>
          <v-card-text>
            <v-layout row class="pb-5"> 
                <v-text-field placeholder="Quantity" solo type="number" v-model="quantity"></v-text-field>
                <v-btn color="info" class="ml-2" @click="buyStock()" :disabled="quantity <= 0">Sell</v-btn>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
  </v-layout>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    methods: {
      ...mapActions({
        placeSellOrder: 'sellStock'
      }),
      buyStock() {
        const order = {
          id: this.stock.id,
          price: this.stock.price,
          quantity: this.quantity
        };
        // eslint-disable-next-line
        this.placeSellOrder(order)
        this.quantity = 0;
      }
    },
  }
</script>

<style scope>
.card-title{
  height: 30px;
  background-color: rgb(168, 216, 242);
  padding-bottom: 30px;
}
</style>
