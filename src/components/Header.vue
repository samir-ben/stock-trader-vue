<template>
  <div>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up "></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link tag="span" to="/" style="cursor:pointer" class="pr-3">Stock Trader</router-link>
      </v-toolbar-title>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat  to="/portfolio">Portfolio</v-btn>
        <v-btn flat  to="/stocks">Stocks</v-btn>
      </v-toolbar-items>
    <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat  to="/end">End Day</v-btn>
         <v-menu offset-y>
      <v-btn flat slot="activator">Save & Load <v-icon>arrow_drop_down</v-icon></v-btn>
      <v-list>
        <v-list-tile>
          <v-list-tile-title>One</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-title>Tow</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
      </v-toolbar-items>
  </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      sideNav: false,
    }
  },
  computed: {
  },
}
</script>


<style>

</style>