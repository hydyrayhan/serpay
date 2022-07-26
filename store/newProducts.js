export const state = () => ({
  products: [],
})

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },
}

export const actions = {
  async fetchNews({ commit },extra) {
    let file;
    try{
      const { data } = await this.$axios.get(`/public/products/new?limit=${extra.limit}&offset=${extra.offset}`)
      file = data.new_products;
      // console.log(file)
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