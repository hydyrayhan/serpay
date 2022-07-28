export const state = () => ({
  user: null,
  userToken: null,
})

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  },

  SET_USER_TOKEN(state, userToken) {
    state.userToken = userToken
  },

  LOGOUT(state) {
    state.user = null
    state.userToken = null
  },
}

export const actions = {
  setUser({ commit },user) {
    commit('SET_USER', user)
  },

  setUserToken({ commit }, userToken) {
    this.$axios.setHeader('Authorization', `Bearer ${userToken}`)
    commit('SET_USER_TOKEN', userToken)
  },

  logout({ commit, dispatch }) {
    this.$cookies.remove('user-token')
    this.$cookies.remove('user')

    commit('LOGOUT')
  },
}

export const getters = {
  user(state) {
    return state.user
  },

  userToken(state) {
    return state.userToken
  },
} 