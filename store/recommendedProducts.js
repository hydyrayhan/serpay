export const state = () => ({
  products: [],
})

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },
}

export const actions = {
  async fetchRecommended({ commit },extra) {
    let file;
    try{
      const { data } = await this.$axios.get(`/${extra.globalUser}/products?limit=${extra.limit}&offset=${extra.offset}`);
      file = data;
    }catch(err){
      console.log(err);
    }

    
    commit('SET_PRODUCTS', file)
  },
}

export const getters = {
  products(state) {
    return state.products
  },
}