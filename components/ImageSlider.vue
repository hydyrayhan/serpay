<template>
  <div class="imageSlider">
    <swiper
      class="swiper news__slider"
      :options="imageSliderOptions"
    >
      <swiper-slide>
        <nuxt-link to="/" class="news__slider__item"> 
            <div class="news__slider__item__image">
              <!-- <img v-bind:src="$config.url+'/'+i.image" alt=""> -->
              <img src="~/assets/images/delete/product.png" alt="">
            </div>
        </nuxt-link>
        </swiper-slide>
      <swiper-slide>
        <nuxt-link to="/" class="news__slider__item"> 
            <div class="news__slider__item__image">
              <!-- <img v-bind:src="$config.url+'/'+i.image" alt=""> -->
              <img src="~/assets/images/delete/product2.png" alt="">
            </div>
        </nuxt-link>
        </swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>

    </swiper>
  </div>
</template>

<script>
export default {
  data(){
    return{
       imageSliderOptions: {
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 3000,
        },
      },
    }
  }
}
</script>

<style>
</style>