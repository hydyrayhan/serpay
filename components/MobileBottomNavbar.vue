<template>
  <div class="mobileBottomNavbar" :class="mode">
    <nuxt-link to="/" class="list">
      <img src="~/assets/images/icons/logo.svg" alt="">
    </nuxt-link>
    <div class="mobileBottomCategory list">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="14.5" width="18" height="3" rx="1.5" fill="#616161"/>
        <rect x="13" y="7.5" width="5" height="3" rx="1.5" fill="#616161"/>
        <rect y="0.5" width="4" height="3" rx="1.5" fill="#616161"/>
        <rect y="7.5" width="12" height="3" rx="1.5" fill="#616161"/>
        <rect x="5" y="0.5" width="13" height="3" rx="1.5" fill="#616161"/>
      </svg>
      <span>{{$t('category')}}</span>
    </div>
    <nuxt-link to="/sebet" class="list sebetIcon">

    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 6.625H19L18.0404 17.1811C17.9467 18.2112 17.083 19 16.0486 19H3.95143C2.91702 19 2.05329 18.2112 1.95964 17.1811L1 6.625Z" fill="none"/>
      <path d="M1 6.625V5.625C0.71904 5.625 0.45104 5.74319 0.261577 5.95066C0.0721151 6.15813 -0.0213301 6.43573 0.00410682 6.71554L1 6.625ZM19 6.625L19.9959 6.71554C20.0213 6.43573 19.9279 6.15813 19.7384 5.95066C19.549 5.74319 19.281 5.625 19 5.625V6.625ZM1 7.625H19V5.625H1V7.625ZM18.0041 6.53446L17.0445 17.0905L19.0363 17.2716L19.9959 6.71554L18.0041 6.53446ZM16.0486 18H3.95143V20H16.0486V18ZM2.95554 17.0905L1.99589 6.53446L0.00410682 6.71554L0.96375 17.2716L2.95554 17.0905ZM3.95143 18C3.43423 18 3.00236 17.6056 2.95554 17.0905L0.96375 17.2716C1.10423 18.8168 2.39982 20 3.95143 20V18ZM17.0445 17.0905C16.9976 17.6056 16.5658 18 16.0486 18V20C17.6002 20 18.8958 18.8168 19.0363 17.2716L17.0445 17.0905Z" fill="#616161"/>
      <path d="M5.5 8.875V5.5C5.5 3.01472 7.51472 1 10 1C12.4853 1 14.5 3.01472 14.5 5.5V8.875" stroke="#616161" stroke-width="2" stroke-linecap="round"/>
    </svg>



      <span>{{$t('cart')}}</span>
    </nuxt-link>
    <nuxt-link to="/hyzmatlar" class="list hyzmatlarIcon">
      <svg width="20" height="18" viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.9115 0.735883H10.6906C10.4725 0.735883 10.2634 0.822497 10.1092 0.976671C9.95507 1.13084 9.86846 1.33995 9.86846 1.55798V4.24625L7.89542 0.826314C7.75144 0.575224 7.54373 0.36659 7.29328 0.221498C7.04283 0.0764067 6.75852 0 6.46908 0C6.17963 0 5.89532 0.0764067 5.64487 0.221498C5.39442 0.36659 5.18671 0.575224 5.04273 0.826314L0.11014 9.36794C0.0379861 9.49292 0 9.63468 0 9.77899C0 9.9233 0.0379861 10.0651 0.11014 10.19C0.182571 10.3155 0.286866 10.4196 0.412464 10.4918C0.538063 10.564 0.680504 10.6017 0.825366 10.6011H4.35217C4.19255 11.1345 4.11223 11.6885 4.11376 12.2453C4.11376 13.7715 4.72006 15.2353 5.79927 16.3145C6.87849 17.3937 8.34222 18 9.86846 18C11.3947 18 12.8584 17.3937 13.9376 16.3145C15.0169 15.2353 15.6231 13.7715 15.6231 12.2453C15.6247 11.6885 15.5444 11.1345 15.3847 10.6011H18.9115C19.1296 10.6011 19.3387 10.5145 19.4929 10.3603C19.647 10.2061 19.7336 9.99703 19.7336 9.77899V1.55798C19.7336 1.33995 19.647 1.13084 19.4929 0.976671C19.3387 0.822497 19.1296 0.735883 18.9115 0.735883ZM2.2476 8.95689L6.46497 1.64842L9.28477 6.49059C8.46261 6.58208 7.66984 6.84976 6.9605 7.27537C6.25115 7.70098 5.6419 8.27451 5.17427 8.95689H2.2476ZM9.86846 16.3558C9.05548 16.3558 8.26075 16.1147 7.58479 15.6631C6.90882 15.2114 6.38197 14.5694 6.07085 13.8183C5.75974 13.0672 5.67834 12.2407 5.83694 11.4434C5.99555 10.646 6.38703 9.91359 6.9619 9.33873C7.53676 8.76386 8.26918 8.37238 9.06654 8.21377C9.8639 8.05517 10.6904 8.13657 11.4415 8.44768C12.1926 8.7588 12.8345 9.28565 13.2862 9.96162C13.7379 10.6376 13.979 11.4323 13.979 12.2453C13.979 13.3355 13.5459 14.381 12.775 15.1519C12.0041 15.9227 10.9586 16.3558 9.86846 16.3558ZM18.0894 8.95689H14.5873C13.8407 7.891 12.758 7.10648 11.5127 6.729V2.38008H18.0894V8.95689Z" fill="#616161"/>
      </svg>
      <span>{{$t('services')}}</span>
    </nuxt-link>
    <nuxt-link to="/profile" class="list profileIcon">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 16.25C1 14.0409 2.79086 12.25 5 12.25H15C17.2091 12.25 19 14.0409 19 16.25V17C19 18.1046 18.1046 19 17 19H3C1.89543 19 1 18.1046 1 17V16.25Z" stroke="#616161" stroke-width="2" stroke-linejoin="round"/>
        <circle cx="10" cy="4.375" r="3.375" stroke="#616161" stroke-width="2"/>
      </svg>

      <span>{{$t('profile')}}</span>
    </nuxt-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  mounted(){
    this.red();
  },
  watch: {
    $route () {
     this.red();
    }
  },
  methods:{
    red(){
      // const datas = document.cookie.split(' ')
      // let mode;
      // let buttonColor;
      // for(let i = 0; i<datas.length; i++){
      //     if(datas[i][0] == 'm'){
      //         mode = datas[i].split('=');
      //     }
      // }
      // if(mode[1] == 'dark'){
      //   buttonColor = "#AEAEAE"
      // }else{
      //   buttonColor = "#616161"
      // }
      // if('/hyzmatlar' == this.$route.path){
      //   document.querySelector('.hyzmatlarIcon path').style.fill = '#FF141D';
      //   document.querySelector('.hyzmatlarIcon span').style.fontWeight = 'bold';
      // }else{
      //   document.querySelector('.hyzmatlarIcon path').style.fill = buttonColor;
      //   document.querySelector('.hyzmatlarIcon span').style.fontWeight = 'normal';
      // }
    },
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