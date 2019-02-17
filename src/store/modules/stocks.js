import stocks from '../../data/stocks';

const state = {
    stocks: []
};

const getters = {
    stocks: state => state.stocks,
};

const mutations = {
    'SET_STOCKS': (state, stocks) => {
        state.stocks = stocks
    },
    // RND_STOCK: (state) => {

    // }
};

const actions = {
    initStocks: ({ commit }) => {
        commit('SET_STOCKS', stocks)
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};