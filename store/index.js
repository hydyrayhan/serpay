export const actions = {
  async nuxtServerInit({ dispatch }) {
    // await dispatch('nav/setNav')

    try {
      // const user = this.$cookies.get('user')
      // const userToken = this.$cookies.get('user-token')

      // if (user) {
      //   dispatch('user/setUser', user)
      // }

      // if (userToken) {
      //   await dispatch('user/setUserToken', userToken)
      //   await this.$axios.setHeader('Authorization', `Bearer ${userToken}`)
      // }

      // await dispatch('discountProducts/fetchDiscounts')
      // await dispatch('newProducts/fetchNews') 
      // await dispatch('categoriesVip/fetchCategories') 
      // await dispatch('categories/fetchCategories') 
      await dispatch('dynamicLang/fetchLanguage')
      await dispatch('banner/fetchBanner')
      await dispatch('discountProducts/fetchDiscounts',{limit:5,offset:0})
      await dispatch('newProducts/fetchNews',{limit:5,offset:0})
      await dispatch('recommendedProducts/fetchRecommended',{limit:30,offset:0})
      await dispatch('categories/fetchCategories')
      // await dispatch('product/fetchProduct') 
      // await dispatch('banner/fetchBanner') 
      // await dispatch('markets/fetchMarkets')
      

    } catch (err) {
      console.log(err)
    }
  },
}
