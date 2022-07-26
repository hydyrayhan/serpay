<template>
  <div class="container">
    <div class="hyzmatlar">
      <div class="hyzmatlar_title" :class="mode">
        <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.484 0.981178H13.8407C13.5584 0.981178 13.2877 1.09666 13.088 1.30223C12.8884 1.50779 12.7763 1.7866 12.7763 2.07731V5.66167L10.2219 1.10175C10.0355 0.766965 9.76658 0.488786 9.44233 0.295331C9.11808 0.101876 8.74999 0 8.37526 0C8.00054 0 7.63245 0.101876 7.3082 0.295331C6.98395 0.488786 6.71504 0.766965 6.52863 1.10175L0.142595 12.4906C0.0491792 12.6572 0 12.8462 0 13.0387C0 13.2311 0.0491792 13.4201 0.142595 13.5867C0.236367 13.754 0.371394 13.8928 0.534001 13.989C0.696609 14.0853 0.881023 14.1356 1.06857 14.1348H5.63459C5.42794 14.846 5.32394 15.5847 5.32593 16.3271C5.32593 18.362 6.11088 20.3137 7.5081 21.7526C8.90531 23.1916 10.8003 24 12.7763 24C14.7523 24 16.6473 23.1916 18.0445 21.7526C19.4417 20.3137 20.2267 18.362 20.2267 16.3271C20.2287 15.5847 20.1247 14.846 19.918 14.1348H24.484C24.7663 14.1348 25.0371 14.0193 25.2367 13.8137C25.4363 13.6082 25.5484 13.3294 25.5484 13.0387V2.07731C25.5484 1.7866 25.4363 1.50779 25.2367 1.30223C25.0371 1.09666 24.7663 0.981178 24.484 0.981178ZM2.90988 11.9425L8.36994 2.19789L12.0206 8.65412C10.9562 8.77611 9.92985 9.13301 9.01149 9.70049C8.09312 10.268 7.30435 11.0327 6.69893 11.9425H2.90988ZM12.7763 21.8077C11.7238 21.8077 10.6949 21.4863 9.81973 20.8841C8.94458 20.2818 8.26249 19.4259 7.8597 18.4244C7.45691 17.423 7.35153 16.321 7.55686 15.2578C7.7622 14.1947 8.26905 13.2181 9.0133 12.4516C9.75755 11.6852 10.7058 11.1632 11.7381 10.9517C12.7704 10.7402 13.8404 10.8488 14.8128 11.2636C15.7853 11.6784 16.6164 12.3809 17.2011 13.2822C17.7859 14.1835 18.098 15.2431 18.098 16.3271C18.098 17.7806 17.5373 19.1747 16.5393 20.2025C15.5413 21.2303 14.1877 21.8077 12.7763 21.8077ZM23.4197 11.9425H18.8856C17.9191 10.5213 16.5174 9.47531 14.905 8.972V3.17345H23.4197V11.9425Z" fill="#FF141D"/>
        </svg>
        <span>{{$t('shareAndEarn')}}</span>
      </div>

      <div class="hyzmatlar_products_con">
        <div class="hyzmatlar_products">
          <div class="hyzmatlar_products_header">
            <div class="header_time">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0C10.0277 0 7.61099 0.733112 5.55538 2.10663C3.49976 3.48015 1.89761 5.43238 0.951511 7.71646C0.00541607 10.0005 -0.242126 12.5139 0.24019 14.9386C0.722505 17.3634 1.91301 19.5907 3.66117 21.3388C5.40933 23.087 7.63661 24.2775 10.0614 24.7598C12.4861 25.2421 14.9995 24.9946 17.2835 24.0485C19.5676 23.1024 21.5199 21.5002 22.8934 19.4446C24.2669 17.389 25 14.9723 25 12.5C24.9964 9.18589 23.6783 6.00855 21.3349 3.66512C18.9914 1.3217 15.8141 0.00358446 12.5 0V0ZM12.5 22.9167C10.4398 22.9167 8.42583 22.3057 6.71281 21.1611C4.9998 20.0165 3.66467 18.3897 2.87626 16.4863C2.08785 14.5829 1.88156 12.4884 2.28349 10.4678C2.68542 8.44717 3.67751 6.5911 5.13431 5.1343C6.5911 3.67751 8.44718 2.68542 10.4678 2.28349C12.4884 1.88156 14.5829 2.08784 16.4863 2.87625C18.3897 3.66467 20.0165 4.9998 21.1611 6.71281C22.3057 8.42582 22.9167 10.4398 22.9167 12.5C22.9136 15.2617 21.8152 17.9095 19.8623 19.8623C17.9095 21.8152 15.2617 22.9136 12.5 22.9167Z" fill="#FAFAFA"/>
                <path d="M12.9927 6.25C12.7089 6.25 12.4368 6.37405 12.2362 6.59486C12.0356 6.81568 11.9229 7.11516 11.9229 7.42744V12.5199L8.31662 15.0066C8.07545 15.1724 7.90401 15.4369 7.84001 15.7418C7.77601 16.0468 7.8247 16.3672 7.97536 16.6327C8.12601 16.8981 8.3663 17.0868 8.64337 17.1572C8.92043 17.2277 9.21156 17.1741 9.45273 17.0083L13.5607 14.1824C13.7159 14.0754 13.8436 13.9263 13.9314 13.7494C14.0193 13.5725 14.0644 13.3737 14.0624 13.1722V7.42744C14.0624 7.11516 13.9497 6.81568 13.7491 6.59486C13.5485 6.37405 13.2764 6.25 12.9927 6.25Z" fill="#FAFAFA"/>
              </svg>    
              <span class="timer">
                <span class="span"></span>
                <span id="dot">:</span>
                <span class="span"></span>
                <span id="dot">:</span>
                <span class="span"></span>
              </span>
            </div>
          </div>
          <div class="hyzmatlar_products_product_con">
            <nuxt-link to="/hyzmatlar/share/id_fjdslfdsk"  class="hyzmatlar_products_product">
              <div class="product_images"><ImageSlider /></div>
              <div class="product_info">
                <div class="product_info_name">Woman Loafer Zara</div>
                <div class="product_info_range">
                  <div class="range">
                    <div class="range_color" v-bind:style="{width:[`${width}%`]}"></div>
                    <div class="range_percentage"><span>70%</span></div>
                  </div>
                  <div class="count">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.3337 14V12.6667C11.3337 11.9594 11.0527 11.2811 10.5526 10.781C10.0525 10.281 9.37424 10 8.66699 10H3.33366C2.62641 10 1.94814 10.281 1.44804 10.781C0.947944 11.2811 0.666992 11.9594 0.666992 12.6667V14" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M5.99967 7.33333C7.47243 7.33333 8.66634 6.13943 8.66634 4.66667C8.66634 3.19391 7.47243 2 5.99967 2C4.52691 2 3.33301 3.19391 3.33301 4.66667C3.33301 6.13943 4.52691 7.33333 5.99967 7.33333Z" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M15.333 13.9993V12.6659C15.3326 12.0751 15.1359 11.5011 14.7739 11.0341C14.4119 10.5672 13.9051 10.2336 13.333 10.0859" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M10.667 2.08594C11.2406 2.2328 11.749 2.5664 12.1121 3.03414C12.4752 3.50188 12.6722 4.07716 12.6722 4.66927C12.6722 5.26138 12.4752 5.83666 12.1121 6.3044C11.749 6.77214 11.2406 7.10574 10.667 7.2526" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>123</span>
                  </div>
                </div>
              </div>
            </nuxt-link>
            <ShareButton />
          </div>
        </div>
        <div class="hyzmatlar_products">
          <div class="hyzmatlar_products_header">
            <div class="header_time">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0C10.0277 0 7.61099 0.733112 5.55538 2.10663C3.49976 3.48015 1.89761 5.43238 0.951511 7.71646C0.00541607 10.0005 -0.242126 12.5139 0.24019 14.9386C0.722505 17.3634 1.91301 19.5907 3.66117 21.3388C5.40933 23.087 7.63661 24.2775 10.0614 24.7598C12.4861 25.2421 14.9995 24.9946 17.2835 24.0485C19.5676 23.1024 21.5199 21.5002 22.8934 19.4446C24.2669 17.389 25 14.9723 25 12.5C24.9964 9.18589 23.6783 6.00855 21.3349 3.66512C18.9914 1.3217 15.8141 0.00358446 12.5 0V0ZM12.5 22.9167C10.4398 22.9167 8.42583 22.3057 6.71281 21.1611C4.9998 20.0165 3.66467 18.3897 2.87626 16.4863C2.08785 14.5829 1.88156 12.4884 2.28349 10.4678C2.68542 8.44717 3.67751 6.5911 5.13431 5.1343C6.5911 3.67751 8.44718 2.68542 10.4678 2.28349C12.4884 1.88156 14.5829 2.08784 16.4863 2.87625C18.3897 3.66467 20.0165 4.9998 21.1611 6.71281C22.3057 8.42582 22.9167 10.4398 22.9167 12.5C22.9136 15.2617 21.8152 17.9095 19.8623 19.8623C17.9095 21.8152 15.2617 22.9136 12.5 22.9167Z" fill="#FAFAFA"/>
                <path d="M12.9927 6.25C12.7089 6.25 12.4368 6.37405 12.2362 6.59486C12.0356 6.81568 11.9229 7.11516 11.9229 7.42744V12.5199L8.31662 15.0066C8.07545 15.1724 7.90401 15.4369 7.84001 15.7418C7.77601 16.0468 7.8247 16.3672 7.97536 16.6327C8.12601 16.8981 8.3663 17.0868 8.64337 17.1572C8.92043 17.2277 9.21156 17.1741 9.45273 17.0083L13.5607 14.1824C13.7159 14.0754 13.8436 13.9263 13.9314 13.7494C14.0193 13.5725 14.0644 13.3737 14.0624 13.1722V7.42744C14.0624 7.11516 13.9497 6.81568 13.7491 6.59486C13.5485 6.37405 13.2764 6.25 12.9927 6.25Z" fill="#FAFAFA"/>
              </svg>    
              <span class="timer">
                <span class="span"></span>
                <span id="dot">:</span>
                <span class="span"></span>
                <span id="dot">:</span>
                <span class="span"></span>
              </span>
            </div>
          </div>
          <div class="hyzmatlar_products_product_con">
            <nuxt-link to="/hyzmatlar/share/id_fjdslfdsk"  class="hyzmatlar_products_product">
              <div class="product_images"><ImageSlider /></div>
              <div class="product_info">
                <div class="product_info_name">Woman Loafer Zara</div>
                <div class="product_info_range">
                  <div class="range">
                    <div class="range_color" v-bind:style="{width:[`${width}%`]}"></div>
                    <div class="range_percentage"><span>70%</span></div>
                  </div>
                  <div class="count">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.3337 14V12.6667C11.3337 11.9594 11.0527 11.2811 10.5526 10.781C10.0525 10.281 9.37424 10 8.66699 10H3.33366C2.62641 10 1.94814 10.281 1.44804 10.781C0.947944 11.2811 0.666992 11.9594 0.666992 12.6667V14" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M5.99967 7.33333C7.47243 7.33333 8.66634 6.13943 8.66634 4.66667C8.66634 3.19391 7.47243 2 5.99967 2C4.52691 2 3.33301 3.19391 3.33301 4.66667C3.33301 6.13943 4.52691 7.33333 5.99967 7.33333Z" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M15.333 13.9993V12.6659C15.3326 12.0751 15.1359 11.5011 14.7739 11.0341C14.4119 10.5672 13.9051 10.2336 13.333 10.0859" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M10.667 2.08594C11.2406 2.2328 11.749 2.5664 12.1121 3.03414C12.4752 3.50188 12.6722 4.07716 12.6722 4.66927C12.6722 5.26138 12.4752 5.83666 12.1121 6.3044C11.749 6.77214 11.2406 7.10574 10.667 7.2526" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>123</span>
                  </div>
                </div>
              </div>
            </nuxt-link>
            <ShareButton />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageSlider from '~/components/ImageSlider';
import ShareButton from '~/components/ShareButton';
import { mapGetters } from 'vuex';
export default {
  components : {ImageSlider , ShareButton},
  data(){
    return{
      width:70,
    }
  },
  mounted(){
    const height = window.innerHeight-298;
    const element = document.querySelector('.hyzmatlar');
    element.style.minHeight = height+'px';
    

    const times = [new Date("2022-06-23 17:56:00"),new Date('2022-07-22 23:29:00')]
    const elements = document.querySelectorAll(".timer");
    for(let i = 0 ; i< 2; i++){
      this.countDownTimer(times[i],elements[i]);
    }
  },
  methods:{
    countDownTimer(time,element){
      let stop = setInterval(function(){
        const timeNow = new Date();
        var dif = ( time.getTime() - timeNow.getTime() ) / 1000;
        dif = Math.round(dif);
        let hours = Math.floor((dif / 60)/60);
        let minutes = Math.floor((dif - (hours*60*60))/60);
        let secunds = dif-(hours*60*60)-(minutes*60)

        if(hours<0){
          const elements = element.getElementsByTagName('span')
          elements[0].textContent = "00"
          elements[2].textContent = "00"
          elements[4].textContent = "00"
          clearInterval(stop);
        }else{
          const elements = element.getElementsByTagName('span')
          elements[0].textContent = hours
          elements[2].textContent = minutes
          elements[4].textContent = secunds
        }
      },1000)
    }
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