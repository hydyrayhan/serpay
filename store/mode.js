export const state = () => ({
  mode: true
})

export const mutations = {
  SET_MODE(state, mode) {
    state.mode = mode
  },
}

export const actions = {
  async fetchMode({ commit }) {
    // commit('SET_MODE', )
  },
}

export const getters = {
  mode(state) {
    return state.mode
  },
}