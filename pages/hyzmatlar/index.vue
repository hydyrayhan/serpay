<template>
  <div class="container">
    <div class="hyzmatlar">
      <div class="hyzmatlar_title" :class="mode">
        <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.484 0.981178H13.8407C13.5584 0.981178 13.2877 1.09666 13.088 1.30223C12.8884 1.50779 12.7763 1.7866 12.7763 2.07731V5.66167L10.2219 1.10175C10.0355 0.766965 9.76658 0.488786 9.44233 0.295331C9.11808 0.101876 8.74999 0 8.37526 0C8.00054 0 7.63245 0.101876 7.3082 0.295331C6.98395 0.488786 6.71504 0.766965 6.52863 1.10175L0.142595 12.4906C0.0491792 12.6572 0 12.8462 0 13.0387C0 13.2311 0.0491792 13.4201 0.142595 13.5867C0.236367 13.754 0.371394 13.8928 0.534001 13.989C0.696609 14.0853 0.881023 14.1356 1.06857 14.1348H5.63459C5.42794 14.846 5.32394 15.5847 5.32593 16.3271C5.32593 18.362 6.11088 20.3137 7.5081 21.7526C8.90531 23.1916 10.8003 24 12.7763 24C14.7523 24 16.6473 23.1916 18.0445 21.7526C19.4417 20.3137 20.2267 18.362 20.2267 16.3271C20.2287 15.5847 20.1247 14.846 19.918 14.1348H24.484C24.7663 14.1348 25.0371 14.0193 25.2367 13.8137C25.4363 13.6082 25.5484 13.3294 25.5484 13.0387V2.07731C25.5484 1.7866 25.4363 1.50779 25.2367 1.30223C25.0371 1.09666 24.7663 0.981178 24.484 0.981178ZM2.90988 11.9425L8.36994 2.19789L12.0206 8.65412C10.9562 8.77611 9.92985 9.13301 9.01149 9.70049C8.09312 10.268 7.30435 11.0327 6.69893 11.9425H2.90988ZM12.7763 21.8077C11.7238 21.8077 10.6949 21.4863 9.81973 20.8841C8.94458 20.2818 8.26249 19.4259 7.8597 18.4244C7.45691 17.423 7.35153 16.321 7.55686 15.2578C7.7622 14.1947 8.26905 13.2181 9.0133 12.4516C9.75755 11.6852 10.7058 11.1632 11.7381 10.9517C12.7704 10.7402 13.8404 10.8488 14.8128 11.2636C15.7853 11.6784 16.6164 12.3809 17.2011 13.2822C17.7859 14.1835 18.098 15.2431 18.098 16.3271C18.098 17.7806 17.5373 19.1747 16.5393 20.2025C15.5413 21.2303 14.1877 21.8077 12.7763 21.8077ZM23.4197 11.9425H18.8856C17.9191 10.5213 16.5174 9.47531 14.905 8.972V3.17345H23.4197V11.9425Z" fill="#FF141D"/>
        </svg>
        <span>{{$t('services')}}</span>
      </div>

      <div class="hyzmatlar_carts">
        <nuxt-link to="/hyzmatlar/share" class="hyzmatlar_carts_cart">
          <div>
            <img src="~/assets/images/icons/paylas_full.png" alt="">
          </div>
          <img id="gift" src="~/assets/images/icons/paylas_gift.png" alt="">
          <img id="kupon" src="~/assets/images/icons/paylas_kubak.png" alt="">
          <span>{{$t('shareAndEarn')}}</span>
        </nuxt-link>
        <nuxt-link to="" class="hyzmatlar_carts_cart">
          <div></div>
          <img id="wifi" src="~/assets/images/icons/online_wifi.png" alt="">
          <img id="tick" src="~/assets/images/icons/online_tick.png" alt="">
          <img id="cart" src="~/assets/images/icons/online_cart.svg" alt="">
          <span>{{$t('onlinePay')}}</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  mounted(){
    const height = window.innerHeight-300;
    const element = document.querySelector('.hyzmatlar');
    element.style.minHeight = height+'px';
  },
  computed:{
    ...mapGetters({
      mode: 'mode/mode',
    }),
  },
}
</script>

<style>

</style>