export const state = () => ({
  mode: true
})

export const mutations = {
  SET_MODE(state, mode) {
    state.mode = mode
  },
}

export const actions = {
  async setMode({ commit },mode) {
    commit('SET_MODE', mode)
  },
  changeMode({ commit },mode){
    console.log(mode);
    if(mode ==='dark'){
      mode='light'
      document.cookie = 'mode=light'
    }else if(mode === 'light'){
      mode='dark'
      document.cookie = 'mode=dark'
    }
    commit('SET_MODE',mode);
  }
}

export const getters = {
  mode(state) {
    return state.mode
  },
}