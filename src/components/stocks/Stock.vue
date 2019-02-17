<template>
   <v-layout align-center class="mb-5">
      <v-flex sm6 md4>
        <v-card  width="300" height="130">
          <v-card-title class="card-title">
            <h3>Titre <small> (Price: PRICE )</small></h3>
          </v-card-title>
          <v-card-text>
            <v-layout row class="pb-5"> 
                <v-text-field placeholder="Quantity" solo type="number"></v-text-field>
                <v-btn color="info" class="ml-2">Buy</v-btn>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
  </v-layout>
</template>

<script>
  export default {
 
  }
</script>

<style scope>
.card-title{
  height: 30px;
  background-color: rgb(168, 216, 242);
  padding-bottom: 30px;
}
</style>
