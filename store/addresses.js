export const state = () => ({
  addresses: '',
})

export const mutations = {
  SET_ADDRESSES(state, address) {
    state.addresses = address
  },
}

export const actions = {
  async fetchAddresses({ commit }) {
    let address;
    try {
      let { data } = await this.$axios.get(`/users/address`);
      address = data.address;
    } catch ({response}) {
      console.log(response.data.message);
    }
    commit('SET_ADDRESSES', address)
  },
}

export const getters = {
  addresses(state) {
    return state.addresses
  },
}