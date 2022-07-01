export const state = () => ({
  open: false,
})

export const mutations = {
  SET_CATEGORYOPEN(state, openVar) {
    state.open = openVar;
  },
}

export const actions = {
  async fetchCategoryOpen({ commit },open) {
    commit('SET_CATEGORYOPEN',open)
  },
}

export const getters = {
  categoryOpen(state) {
    return state.open;
  },
}