export const state = () => ({
  products: [],
})

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },
}

export const actions = {
  async fetchCategories({ commit },extra) {
    let file;
    try{
      const { data } = await this.$axios.get(`/public/categories`)
      file = data;
    }catch(err){
      console.log(err);
    }

    
    commit('SET_PRODUCTS', file)
  },
}

export const getters = {
  categories(state) {
    return state.products
  },
}