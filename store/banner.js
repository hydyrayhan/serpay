export const state = () => ({
  banner: '',
})

export const mutations = {
  SET_BANNERS(state, banner) {
    state.banner = banner
  },
}

export const actions = {
  async fetchBanner({ commit }) {
    // const banner = require(`../assets/data/banner.json`);
    const { data } = await this.$axios.get(`/public/banners`);
    const {banners} = data 
    commit('SET_BANNERS', banners)
  },
}

export const getters = {
  banner(state) {
    return state.banner
  },
}