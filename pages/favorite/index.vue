<template>
  <div class="container favoritePage">
    <div class="mobileResHeader">{{$t('liked')}}</div>
    <div class="favorite_head">{{$t('liked')}}</div>

    <div class="favorite_products">
      <LongProduct v-for="(product,i) in products" :key="i" :product="product"/>
    </div>
  </div>
</template>

<script>
import LongProduct from '~/components/LongProduct';
export default {
  components:{LongProduct},
  async asyncData({ $axios, route , store}) {
    const user = store.state.user.user;
    if(user){
      try {
        const productId = route.params.id;
        let { data } = await $axios.get(`/users/like`);
        const products = data.liked_product;
        console.log(products)
        // console.log(product)
        return { products }
      } catch (err) {
        console.log(err)
      }
    }
  },
  mounted(){
    const height = window.innerHeight-299;
    const element = document.querySelector('.favoritePage');
    element.style.minHeight = height+'px';
    document.querySelector(".header_buttons_like path").style.fill = '#FF141D'
    document.querySelector(".header_buttons_like .text").style.color = '#FF141D'
  }
}
</script>

<style>

</style>