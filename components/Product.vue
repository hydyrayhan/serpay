<template>
  <div class="product">
    <nuxt-link :to="'/product/'+product.product_id">
      <ImageSlider :images="product.images"/>
      <div class="product_info">
        <div class="product_info_price">
          <div class="new" v-if="product.price">{{product.price}} <span>TMT</span></div>
          <div class="old" v-if="product.price_old">{{product.price_old}} <span>TMT</span><span class="hr"></span></div>
        </div>
        <div class="product_info_name" v-if="product[language.name]">{{product[language.name]}}</div>
      </div>
      <div class="isContainer">
        <div class="product_discount_top" v-if="product.discount">{{product.discount}}%</div>
        <div class="product_new_top" v-if="product.isNew">{{$t("new")}}</div>
      </div>
    </nuxt-link>
    <div class="like" @click="like(product.product_id)">
      <svg v-if="!liked" width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.7755 0C15.6963 0.0167851 14.6407 0.318026 13.7153 0.873301C12.7898 1.42858 12.0273 2.21822 11.5046 3.1625C10.982 2.21822 10.2194 1.42858 9.29399 0.873301C8.36853 0.318026 7.31294 0.0167851 6.2338 0C4.51354 0.0747411 2.89277 0.827285 1.7256 2.09322C0.558421 3.35916 -0.0602882 5.03559 0.00463939 6.75625C0.00463939 11.1138 4.59122 15.8729 8.43797 19.0996C9.29685 19.8213 10.3828 20.217 11.5046 20.217C12.6265 20.217 13.7124 19.8213 14.5713 19.0996C18.4181 15.8729 23.0046 11.1138 23.0046 6.75625C23.0696 5.03559 22.4509 3.35916 21.2837 2.09322C20.1165 0.827285 18.4957 0.0747411 16.7755 0ZM13.3398 17.6333C12.8262 18.0659 12.1762 18.3031 11.5046 18.3031C10.8331 18.3031 10.1831 18.0659 9.66943 17.6333C4.74551 13.502 1.92131 9.53829 1.92131 6.75625C1.85579 5.54369 2.27241 4.35441 3.08028 3.4478C3.88815 2.54118 5.02174 1.99079 6.2338 1.91667C7.44587 1.99079 8.57946 2.54118 9.38733 3.4478C10.1952 4.35441 10.6118 5.54369 10.5463 6.75625C10.5463 7.01042 10.6473 7.25417 10.827 7.43389C11.0067 7.61362 11.2505 7.71458 11.5046 7.71458C11.7588 7.71458 12.0026 7.61362 12.1823 7.43389C12.362 7.25417 12.463 7.01042 12.463 6.75625C12.3975 5.54369 12.8141 4.35441 13.6219 3.4478C14.4298 2.54118 15.5634 1.99079 16.7755 1.91667C17.9875 1.99079 19.1211 2.54118 19.929 3.4478C20.7369 4.35441 21.1535 5.54369 21.088 6.75625C21.088 9.53829 18.2638 13.502 13.3398 17.6295V17.6333Z" fill="#616161"/>
      </svg>
      <svg v-else width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.2706 0.891602C16.1915 0.908387 15.1359 1.20963 14.2104 1.7649C13.2849 2.32018 12.5224 3.10983 11.9998 4.0541C11.4771 3.10983 10.7146 2.32018 9.78911 1.7649C8.86365 1.20963 7.80805 0.908387 6.72892 0.891602C5.00866 0.966343 3.38789 1.71889 2.22071 2.98482C1.05354 4.25076 0.434829 5.92719 0.499757 7.64785C0.499757 12.0054 5.08634 16.7645 8.93309 19.9912C9.79196 20.7129 10.8779 21.1086 11.9998 21.1086C13.1216 21.1086 14.2075 20.7129 15.0664 19.9912C18.9132 16.7645 23.4998 12.0054 23.4998 7.64785C23.5647 5.92719 22.946 4.25076 21.7788 2.98482C20.6116 1.71889 18.9909 0.966343 17.2706 0.891602Z" fill="#FF141D"/>
      </svg>
    </div>
  </div>
</template>

<script>
import ImageSlider from '~/components/ImageSlider';
import {mapGetters} from 'vuex';
export default {
  components:{ImageSlider},
  props: {
    product: {
      type: Object,
    },
  },
  data(){
    return{
      liked:false,
    }
  },
  mounted(){
    this.liked = this.product.isLiked
  },
  methods:{
    async like(product_id){
      if(this.user){
        if(this.liked){
          try {
            const {status} = await this.$axios.delete(`/users/like/${product_id}`)
            status == 200 ? this.liked = false : '';
          } catch ({response}) {
            console.log(response.data.message);
          }
        }else{
          try {
            const {status} = await this.$axios.post("/users/like",{product_id})
            status == 200 ? this.liked = true : '';
          } catch ({response}) {
            console.log(response.data.message);
          }
        }
      }else{
        this.$toast.success(this.$t('firstlyRegister'))
      }
    }
  },
  computed:{
    ...mapGetters({
      language: 'dynamicLang/language',
      user:'user/user',
    }),
  },
}
</script>

<style>

</style>