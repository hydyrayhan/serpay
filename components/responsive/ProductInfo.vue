<template>
  <div class="productInfoComponent">
    <div class="productPage_info">
      <div class="productInfoComponent_Header">
        <div class="title">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1556_4363)">
            <path d="M18.9275 3.3975C18.6931 3.1162 18.3996 2.88996 18.0679 2.73485C17.7363 2.57973 17.3745 2.49955 17.0083 2.5H3.535L3.5 2.2075C3.42837 1.59952 3.13615 1.03894 2.67874 0.632065C2.22133 0.225186 1.63052 0.000284828 1.01833 0L0.833333 0C0.61232 0 0.400358 0.0877974 0.244078 0.244078C0.0877974 0.400358 0 0.61232 0 0.833333C0 1.05435 0.0877974 1.26631 0.244078 1.42259C0.400358 1.57887 0.61232 1.66667 0.833333 1.66667H1.01833C1.22244 1.66669 1.41945 1.74163 1.57198 1.87726C1.72451 2.0129 1.82195 2.19979 1.84583 2.4025L2.9925 12.1525C3.11154 13.1665 3.59873 14.1015 4.36159 14.78C5.12445 15.4585 6.10988 15.8334 7.13083 15.8333H15.8333C16.0543 15.8333 16.2663 15.7455 16.4226 15.5893C16.5789 15.433 16.6667 15.221 16.6667 15C16.6667 14.779 16.5789 14.567 16.4226 14.4107C16.2663 14.2545 16.0543 14.1667 15.8333 14.1667H7.13083C6.61505 14.1652 6.11233 14.0043 5.69161 13.7059C5.27089 13.4075 4.95276 12.9863 4.78083 12.5H14.7142C15.6911 12.5001 16.6369 12.1569 17.3865 11.5304C18.1361 10.9039 18.6417 10.0339 18.815 9.0725L19.4692 5.44417C19.5345 5.08417 19.5198 4.71422 19.4262 4.36053C19.3326 4.00684 19.1623 3.67806 18.9275 3.3975ZM17.8333 5.14833L17.1783 8.77667C17.0743 9.35417 16.7704 9.87666 16.3199 10.2527C15.8694 10.6287 15.301 10.8342 14.7142 10.8333H4.51583L3.73167 4.16667H17.0083C17.1307 4.16594 17.2518 4.19218 17.3629 4.24355C17.4741 4.29491 17.5725 4.37012 17.6513 4.46384C17.73 4.55756 17.7872 4.66748 17.8186 4.78578C17.8501 4.90409 17.8551 5.02787 17.8333 5.14833Z" fill="#272727"/>
            <path d="M5.83366 20.0003C6.75413 20.0003 7.50033 19.2542 7.50033 18.3337C7.50033 17.4132 6.75413 16.667 5.83366 16.667C4.91318 16.667 4.16699 17.4132 4.16699 18.3337C4.16699 19.2542 4.91318 20.0003 5.83366 20.0003Z" fill="#272727"/>
            <path d="M14.1667 20.0003C15.0871 20.0003 15.8333 19.2542 15.8333 18.3337C15.8333 17.4132 15.0871 16.667 14.1667 16.667C13.2462 16.667 12.5 17.4132 12.5 18.3337C12.5 19.2542 13.2462 20.0003 14.1667 20.0003Z" fill="#272727"/>
            </g>
            <defs>
            <clipPath id="clip0_1556_4363">
            <rect width="20" height="20" fill="white"/>
            </clipPath>
            </defs>
          </svg>
          <span>{{$t('addCart')}}</span>
        </div>
        <div class="exit" @click="$emit('close-productInfo')">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5994 1.39941L1.39941 12.5994" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.39941 1.39941L12.5994 12.5994" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      
      <div class="product_info_resHeader">
        <div class="info_price">
          <div class="info_price_new" v-if="dynamicProduct.price"><span>{{dynamicProduct.price}}</span><span>manat</span></div>
          <div class="info_price_old" v-if="dynamicProduct.price_old">{{dynamicProduct.price_old}} manat <span></span></div>
          <div class="info_price_liked">
            <svg v-if="!liked" width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.2711 0.891479C16.1919 0.908265 15.1363 1.20951 14.2109 1.76478C13.2854 2.32006 12.5229 3.1097 12.0002 4.05398C11.4776 3.1097 10.7151 2.32006 9.78959 1.76478C8.86414 1.20951 7.80854 0.908265 6.72941 0.891479C5.00915 0.966221 3.38838 1.71876 2.2212 2.9847C1.05403 4.25064 0.435317 5.92707 0.500245 7.64773C0.500245 12.0053 5.08683 16.7644 8.93358 19.9911C9.79245 20.7128 10.8784 21.1085 12.0002 21.1085C13.1221 21.1085 14.208 20.7128 15.0669 19.9911C18.9137 16.7644 23.5002 12.0053 23.5002 7.64773C23.5652 5.92707 22.9465 4.25064 21.7793 2.9847C20.6121 1.71876 18.9913 0.966221 17.2711 0.891479ZM13.8354 18.5248C13.3218 18.9574 12.6718 19.1946 12.0002 19.1946C11.3287 19.1946 10.6787 18.9574 10.165 18.5248C5.24112 14.3934 2.41691 10.4298 2.41691 7.64773C2.3514 6.43516 2.76801 5.24589 3.57588 4.33927C4.38376 3.43266 5.51734 2.88227 6.72941 2.80815C7.94148 2.88227 9.07506 3.43266 9.88294 4.33927C10.6908 5.24589 11.1074 6.43516 11.0419 7.64773C11.0419 7.90189 11.1429 8.14565 11.3226 8.32537C11.5023 8.50509 11.7461 8.60606 12.0002 8.60606C12.2544 8.60606 12.4982 8.50509 12.6779 8.32537C12.8576 8.14565 12.9586 7.90189 12.9586 7.64773C12.8931 6.43516 13.3097 5.24589 14.1175 4.33927C14.9254 3.43266 16.059 2.88227 17.2711 2.80815C18.4831 2.88227 19.6167 3.43266 20.4246 4.33927C21.2325 5.24589 21.6491 6.43516 21.5836 7.64773C21.5836 10.4298 18.7594 14.3934 13.8354 18.521V18.5248Z" fill="#616161"/>
            </svg>
            <svg v-else width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.2706 0.891602C16.1915 0.908387 15.1359 1.20963 14.2104 1.7649C13.2849 2.32018 12.5224 3.10983 11.9998 4.0541C11.4771 3.10983 10.7146 2.32018 9.78911 1.7649C8.86365 1.20963 7.80805 0.908387 6.72892 0.891602C5.00866 0.966343 3.38789 1.71889 2.22071 2.98482C1.05354 4.25076 0.434829 5.92719 0.499757 7.64785C0.499757 12.0054 5.08634 16.7645 8.93309 19.9912C9.79196 20.7129 10.8779 21.1086 11.9998 21.1086C13.1216 21.1086 14.2075 20.7129 15.0664 19.9912C18.9132 16.7645 23.4998 12.0054 23.4998 7.64785C23.5647 5.92719 22.946 4.25076 21.7788 2.98482C20.6116 1.71889 18.9909 0.966343 17.2706 0.891602Z" fill="#FF141D"/>
            </svg>
            <span>{{product.likeCount}}</span>
          </div>
        </div>
        <div class="exit" @click="$emit('close-productInfo')">
          <svg width="14" height="14" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 1.5L1.5 15.5" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.5 1.5L15.5 15.5" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>

      <div class="info_name">{{product[language.name]}}</div> 

      <div class="info_definition">{{product[language.body]}}</div>
      <div class="info_kind" v-if="dynamicProduct.images.length">
        <div class="info_title">{{$t('kind')}}</div>
        <div class="info_kind_images">
          <img v-bind:src="$config.url+'/'+image.product_images[0].image" v-for="(image,i) in product.product_colors" :key="i" @click="colorChange(i)" alt="">
        </div>
      </div>

      <div class="info_size" v-if="dynamicProduct.sizes.length">
        <div class="info_title">{{$t('size')}}</div>
        <div class="info_size_sizes">
          <div class="size" :class="i == 0 ? 'active' : ''" v-for="(size , i) in dynamicProduct.sizes" :key="i" @click="sizeChange(i)">{{size.size}}</div>
        </div>
      </div>

      <div class="info_quantity">
        <div class="info_title">{{$t('quantity')}}</div>
        <div class="info_quantity_buttons">
          <button @click="quantityChange(1)">-</button>
          <div>{{dynamicProduct.quantity}}</div>
          <button @click="quantityChange(2)">+</button>
        </div>
      </div>
    </div>
    <div class="infoBackground" @click="$emit('close-productInfo')"></div>
    <div class="gallery" v-if="gallery">
      <div class="exitCon">
        <div class="exit" @click="gallery=false">
          <svg width="14" height="14" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 1.5L1.5 15.5" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.5 1.5L15.5 15.5" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div class="bigImage" v-if="dynamicProduct.images.length">
        <!-- <img src="~/assets/images/delete/product.png" alt=""> -->
        <img v-bind:src="$config.url+'/'+dynamicProduct.images[0]" alt="">
      </div>
      <!-- {{dynamicProduct}} -->
      <div class="smallImages" v-if="dynamicProduct.length">
        <div class="smallImages_image active" v-for="(image,i) in dynamicProduct.images" :key="i" @click="galleryImage(i)">
          <!-- <img src="~/assets/images/delete/product.png" alt=""> -->
          <img v-bind:src="$config.url+'/'+image" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  props:['product','dynamicProduct'],
  data:()=>({
    liked:false,
    gallery:false,
    globalSize:0,
    componentProduct:[],
  }),
  mounted(){
    this.liked = this.product.isLiked;
  },
  methods:{
    galleryImage(id){
      const big = document.querySelector('.bigImage img');
      const smalls = document.querySelectorAll('.smallImages_image');
      for(let i =0; i<smalls.length; i++){
        smalls[i].classList.remove('active');
      }
      smalls[id].classList.add('active');
      big.setAttribute('src',smalls[id].querySelector('img').getAttribute('src'));
    },
    colorChange(colorId){
      this.gallery = true
      this.$emit('color',colorId);
    },
    sizeChange(sizeId){
      this.$emit('size',sizeId);
      const sizes = document.querySelectorAll(".size");
      for(let i = 0; i<sizes.length; i++){
        sizes[i].classList.remove('active');
      }
      sizes[(sizes.length/2)+sizeId].classList.add('active')
    },
    quantityChange(number){
      this.$emit('quantity',number);
    }
  },
  computed:{
    ...mapGetters({
      language : 'dynamicLang/language'
    })
  }
}
</script>

<style>

</style>