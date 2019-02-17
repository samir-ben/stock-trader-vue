import Vue from 'vue'
import Vuex from 'vuex'

import stocks from './modules/stocks';
import porfolio from './modules/porfolio';


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    stocks,
    porfolio
  },
});
