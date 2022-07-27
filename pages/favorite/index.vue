<template>
  <div class="container favoritePage">
    <div class="mobileResHeader">{{$t('liked')}}</div>
    <div class="favorite_head">{{$t('liked')}}</div>

    <div class="favorite_products">
      <LongProduct v-for="i in 15" :key="i"/>
    </div>
  </div>
</template>

<script>
import LongProduct from '~/components/LongProduct';
export default {
  components:{LongProduct},
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