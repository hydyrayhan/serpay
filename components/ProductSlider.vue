<template>
  <div class="productSlider">
    <div class="productSlider_product" v-for="i in 5" :key="i">
      <Product />
    </div>
    
    <!-- <swiper
      class="swiper news__slider"
      :options="bannerSliderOptions"
    >
      <swiper-slide v-for="i in 10" :key="i">
      </swiper-slide>

    </swiper> -->
  </div>
</template>

<script>
import Product from '../components/Product'
export default {
  components:{Product},
  data(){
    return{
       bannerSliderOptions: {
        spaceBetween: 30,
        slidesPerView: 5,
      },
    }
  }
}
</script>

<style>

</style>