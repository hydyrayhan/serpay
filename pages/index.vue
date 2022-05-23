<template>
  <div>
    <div class="container">
      <div class="main_banner">
        <swiper
            class="swiper news__slider"
            :options="bannerSliderOptions"
          >
            <swiper-slide>
              <nuxt-link to="/" class="news__slider__item"> 
                  <div class="news__slider__item__image">
                    <!-- <img v-bind:src="$config.url+'/'+i.image" alt=""> -->
                    <img src="~/assets/images/delete/banner2.png" alt="">
                  </div>
              </nuxt-link>
              </swiper-slide>
            <swiper-slide>
              <nuxt-link to="/" class="news__slider__item"> 
                  <div class="news__slider__item__image">
                    <!-- <img v-bind:src="$config.url+'/'+i.image" alt=""> -->
                    <img src="~/assets/images/delete/banner2.png" alt="">
                  </div>
              </nuxt-link>
              </swiper-slide>
              <div slot="pagination" class="swiper-pagination"></div>

              <div slot="button-prev"  class="swiper-button-prev swiper-button"></div>
              <div slot="button-next"  class="swiper-button-next swiper-button"></div>
          </swiper>
      </div>

      <div class="main_discounts">
        <nuxt-link to="/" class="new">
          <div class="new_image"><img src="~/assets/images/delete/product.png" alt="newProduct"></div>
          <div class="new_text">{{$t('newProducts')}}</div>
          <div class="new_newIcon icon">{{$t('new')}}</div>
        </nuxt-link>
        <nuxt-link to="/" class="discount">
          <div class="discount_image"><img src="~/assets/images/delete/product2.png" alt="discountProduct"></div>
          <div class="discount_text">{{$t('discountProducts')}}</div>
          <div class="discount_discountIcon icon">
            <svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.8267 40.5092L6.82218 37.005L31.3516 1.97332L36.3645 5.5248L11.8267 40.5092ZM34.6417 37.2174C33.0818 37.4925 31.5891 37.3658 30.1637 36.8373C28.7512 36.2902 27.5464 35.4466 26.5493 34.3065C25.5494 33.1505 24.9105 31.7847 24.6326 30.209C24.3604 28.6648 24.5042 27.1773 25.0643 25.7463C25.6243 24.3153 26.4823 23.0998 27.6382 22.0999C28.7941 21.1 30.1284 20.4667 31.6411 20.2C33.201 19.9249 34.6951 20.0595 36.1233 20.6038C37.5487 21.1323 38.7535 21.9759 39.7377 23.1346C40.7348 24.2748 41.3723 25.6327 41.6501 27.2084C41.928 28.7841 41.7948 30.286 41.2505 31.7142C40.7192 33.1239 39.8756 34.3287 38.7197 35.3286C37.561 36.3128 36.2016 36.9424 34.6417 37.2174ZM33.6832 31.7813C34.2347 31.6841 34.7139 31.4533 35.1208 31.0891C35.5435 30.7222 35.8564 30.2852 36.0594 29.7782C36.2597 29.2555 36.3112 28.7184 36.214 28.1669C36.1167 27.6154 35.886 27.1362 35.5218 26.7293C35.1549 26.3066 34.71 25.9951 34.1873 25.7948C33.6803 25.5918 33.1511 25.5389 32.5996 25.6361C32.0481 25.7333 31.561 25.9655 31.1383 26.3324C30.7314 26.6966 30.4278 27.1401 30.2275 27.6628C30.0244 28.1698 29.9715 28.699 30.0688 29.2505C30.166 29.802 30.3981 30.2891 30.7651 30.7118C31.1293 31.1187 31.5649 31.4237 32.0719 31.6268C32.5946 31.827 33.1317 31.8785 33.6832 31.7813ZM11.5373 22.2826C9.97735 22.5576 8.48467 22.4309 7.05924 21.9024C5.63103 21.3582 4.41836 20.5159 3.42122 19.3758C2.43707 18.2171 1.80607 16.8499 1.52823 15.2742C1.25595 13.73 1.39982 12.2424 1.95984 10.8114C2.51986 9.38044 3.37783 8.16499 4.53376 7.16507C5.68969 6.16516 7.02398 5.53184 8.53665 5.26511C10.0966 4.99005 11.5828 5.12604 12.9952 5.67308C14.4207 6.20159 15.6333 7.04381 16.6332 8.19974C17.6304 9.33991 18.2679 10.6978 18.5457 12.2735C18.8235 13.8492 18.6903 15.3512 18.1461 16.7794C17.599 18.1918 16.7475 19.398 15.5916 20.3979C14.4487 21.3793 13.0972 22.0075 11.5373 22.2826ZM10.5788 16.8465C11.1302 16.7492 11.6095 16.5185 12.0164 16.1543C12.4391 15.7873 12.752 15.3503 12.955 14.8434C13.1553 14.3207 13.2068 13.7836 13.1096 13.2321C13.0123 12.6806 12.7816 12.2014 12.4174 11.7944C12.0504 11.3717 11.6056 11.0602 11.0829 10.86C10.5759 10.6569 10.0467 10.604 9.49519 10.7013C8.94369 10.7985 8.4566 11.0306 8.0339 11.3976C7.62696 11.7618 7.32336 12.2052 7.12308 12.728C6.92003 13.2349 6.86713 13.7641 6.96437 14.3156C7.06161 14.8671 7.29372 15.3542 7.6607 15.7769C8.02489 16.1839 8.46047 16.4889 8.96744 16.6919C9.49015 16.8922 10.0273 16.9437 10.5788 16.8465Z" fill="#FBFBFB"/>
            </svg>
          </div>
        </nuxt-link>
        <nuxt-link to="/" class="sale">
          <div class="sale_image"><img src="~/assets/images/delete/banner2.png" alt="saleProduct"></div>
          <div class="sale_text">{{$t('discountOnProducts')}}</div>
          <div class="sale_saleIcon icon">
            <svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.8267 40.5092L6.82218 37.005L31.3516 1.97332L36.3645 5.5248L11.8267 40.5092ZM34.6417 37.2174C33.0818 37.4925 31.5891 37.3658 30.1637 36.8373C28.7512 36.2902 27.5464 35.4466 26.5493 34.3065C25.5494 33.1505 24.9105 31.7847 24.6326 30.209C24.3604 28.6648 24.5042 27.1773 25.0643 25.7463C25.6243 24.3153 26.4823 23.0998 27.6382 22.0999C28.7941 21.1 30.1284 20.4667 31.6411 20.2C33.201 19.9249 34.6951 20.0595 36.1233 20.6038C37.5487 21.1323 38.7535 21.9759 39.7377 23.1346C40.7348 24.2748 41.3723 25.6327 41.6501 27.2084C41.928 28.7841 41.7948 30.286 41.2505 31.7142C40.7192 33.1239 39.8756 34.3287 38.7197 35.3286C37.561 36.3128 36.2016 36.9424 34.6417 37.2174ZM33.6832 31.7813C34.2347 31.6841 34.7139 31.4533 35.1208 31.0891C35.5435 30.7222 35.8564 30.2852 36.0594 29.7782C36.2597 29.2555 36.3112 28.7184 36.214 28.1669C36.1167 27.6154 35.886 27.1362 35.5218 26.7293C35.1549 26.3066 34.71 25.9951 34.1873 25.7948C33.6803 25.5918 33.1511 25.5389 32.5996 25.6361C32.0481 25.7333 31.561 25.9655 31.1383 26.3324C30.7314 26.6966 30.4278 27.1401 30.2275 27.6628C30.0244 28.1698 29.9715 28.699 30.0688 29.2505C30.166 29.802 30.3981 30.2891 30.7651 30.7118C31.1293 31.1187 31.5649 31.4237 32.0719 31.6268C32.5946 31.827 33.1317 31.8785 33.6832 31.7813ZM11.5373 22.2826C9.97735 22.5576 8.48467 22.4309 7.05924 21.9024C5.63103 21.3582 4.41836 20.5159 3.42122 19.3758C2.43707 18.2171 1.80607 16.8499 1.52823 15.2742C1.25595 13.73 1.39982 12.2424 1.95984 10.8114C2.51986 9.38044 3.37783 8.16499 4.53376 7.16507C5.68969 6.16516 7.02398 5.53184 8.53665 5.26511C10.0966 4.99005 11.5828 5.12604 12.9952 5.67308C14.4207 6.20159 15.6333 7.04381 16.6332 8.19974C17.6304 9.33991 18.2679 10.6978 18.5457 12.2735C18.8235 13.8492 18.6903 15.3512 18.1461 16.7794C17.599 18.1918 16.7475 19.398 15.5916 20.3979C14.4487 21.3793 13.0972 22.0075 11.5373 22.2826ZM10.5788 16.8465C11.1302 16.7492 11.6095 16.5185 12.0164 16.1543C12.4391 15.7873 12.752 15.3503 12.955 14.8434C13.1553 14.3207 13.2068 13.7836 13.1096 13.2321C13.0123 12.6806 12.7816 12.2014 12.4174 11.7944C12.0504 11.3717 11.6056 11.0602 11.0829 10.86C10.5759 10.6569 10.0467 10.604 9.49519 10.7013C8.94369 10.7985 8.4566 11.0306 8.0339 11.3976C7.62696 11.7618 7.32336 12.2052 7.12308 12.728C6.92003 13.2349 6.86713 13.7641 6.96437 14.3156C7.06161 14.8671 7.29372 15.3542 7.6607 15.7769C8.02489 16.1839 8.46047 16.4889 8.96744 16.6919C9.49015 16.8922 10.0273 16.9437 10.5788 16.8465Z" fill="#FFC700"/>
            </svg>
            </div>
        </nuxt-link>
      </div>
    </div>
    <div class="appReklama">
      <div class="container">
        <div class="left">
          <div class="logo"><img src="~/assets/images/icons/logo.svg" alt="logo"></div>
          <h1 class="text">{{$t('appReklama')}}</h1>
        </div>
        <div class="right">
          <div class="iconDynamic" id="icon1"><img  src="~/assets/images/icons/bag-dynamic-color.svg" alt=""></div>
          <a href="/" class="icon"><img src="~/assets/images/icons/appstore.svg" alt=""></a>
          <a href="/" class="icon"><img src="~/assets/images/icons/playmarket.svg" alt=""></a>
          <div class="iconDynamic" id="icon2"><img  src="~/assets/images/icons/headphone-dynamic-color.svg" alt=""></div>
        </div>
      </div>
    </div>
    <div class="container">
      <!-- category -->
      <div class="category_header">
        <div class="category_header_left">
          <div class="icon"><img src="~/assets/images/icons/redBag.svg" alt="redBag"></div>
          <div class="name">{{$t('discount')}}</div>
        </div>
        <nuxt-link to="/" class="seeAll">{{$t('seeAll')}}</nuxt-link>
      </div>
      <div class="main_category">
        <div class="main_product">
          <Product v-for="i in 5" :key="i"/>
        </div>
      </div>

      <!-- category -->
      <div class="category_header">
        <div class="category_header_left">
          <div class="icon"><img src="~/assets/images/icons/yellowBag.svg" alt="redBag"></div>
          <div class="name">{{$t('newProducts')}}</div>
        </div>
        <nuxt-link to="/" class="seeAll">{{$t('seeAll')}}</nuxt-link>
      </div>
      <div class="main_category">
        <div class="main_product">
          <Product v-for="i in 5" :key="i"/>
        </div>
      </div>

        <!-- category -->
      <div class="category_header">
        <div class="category_header_left">
          <!-- <div class="icon"><img src="~/assets/images/icons/yellowBag.svg" alt="redBag"></div> -->
          <div class="name">{{$t('recommends')}}</div>
        </div>
        <!-- <nuxt-link to="/" class="seeAll">Ählisini görkez</nuxt-link> -->
      </div>
      <div class="main_category main_like">
        <div class="main_product">
          <Product v-for="i in 20" :key="i" class="like"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '~/components/Product';
export default {
  components:{Product},
  data(){
    return {
      bannerSliderOptions: {
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 3000,
        },
      },
    }
  }
}
</script>
