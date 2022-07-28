export const actions = {
  async nuxtServerInit({ dispatch }) {
    let globalUser;
    try {
      const user = this.$cookies.get('user')
      const userToken = this.$cookies.get('user-token')

      if (user) {
        dispatch('user/setUser', user)
        globalUser = 'users'
      }else{
        globalUser = 'public'
      }

      if (userToken) {
        await dispatch('user/setUserToken', userToken)
        await this.$axios.setHeader('Authorization', `Bearer ${userToken}`)
      }

      await dispatch('dynamicLang/fetchLanguage',{globalUser})
      await dispatch('banner/fetchBanner',{globalUser})
      await dispatch('discountProducts/fetchDiscounts',{limit:5,offset:0,globalUser})
      await dispatch('newProducts/fetchNews',{limit:5,offset:0,globalUser})
      await dispatch('recommendedProducts/fetchRecommended',{limit:30,offset:0,globalUser})
      await dispatch('categories/fetchCategories',{globalUser})
      

    } catch (err) {
      console.log(err)
    }
  },
}
