<template>
  <div class="orders">
    <div class="container">
      <div class="orders_header">
        <div class="pageName" v-if="footPrint">{{$t('footPrint')}}</div>
        <div class="pageName" v-else>{{$t('historyOrder')}}</div>
        <div class="privateButton" v-if="privateButton">Private</div>
        <div class="orders_header_buttons" v-else>
           <button class="cancel">{{$t('cancel')}}</button>
           <span class="resMobileBottom">
            <button class="delete">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4.5H3.33333H14" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.33301 4.49967V3.16634C5.33301 2.81272 5.47348 2.47358 5.72353 2.22353C5.97358 1.97348 6.31272 1.83301 6.66634 1.83301H9.33301C9.68663 1.83301 10.0258 1.97348 10.2758 2.22353C10.5259 2.47358 10.6663 2.81272 10.6663 3.16634V4.49967M12.6663 4.49967V13.833C12.6663 14.1866 12.5259 14.5258 12.2758 14.7758C12.0258 15.0259 11.6866 15.1663 11.333 15.1663H4.66634C4.31272 15.1663 3.97358 15.0259 3.72353 14.7758C3.47348 14.5258 3.33301 14.1866 3.33301 13.833V4.49967H12.6663Z" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              {{$t('delete')}}
            </button>
            <div class="selectAll">
              <span class="activeCon">
                <svg class="active" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="16" height="16" rx="8" stroke="#FF141D" stroke-width="2"/>
                    <rect x="4" y="4" width="10" height="10" rx="5" fill="#FF141D"/>
                  </svg>
              </span>
              <span class="text">{{$t('chooseAll')}}</span>
            </div>
           </span>
        </div>
      </div>
    </div>
    <hr>
    <div class="container">
      <div class="orders_products">
        <div class="products_time">
          <span v-if="!privateButton" class="space"></span>
          <span>13/05/2022</span>
        </div>
        
        <div class="products_product">
          <div class="checkBox" v-if="!privateButton">
            <svg class="active" v-if="checkBox" width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="16" height="16" rx="8" stroke="#FF141D" stroke-width="2"/>
              <rect x="4" y="4" width="10" height="10" rx="5" fill="#FF141D"/>
            </svg>

            <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="9.25" stroke="#AEAEAE" stroke-width="1.5"/>
            </svg>
          </div>

          <div class="products_product_main">
            <SimpleLongProduct />
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import SimpleLongProduct from '~/components/SimpleLongProduct';
export default {
  components:{SimpleLongProduct},
  data(){
    return{
      privateButton:true,
      checkBox:true,
      likeOrQuantity:false,
      footPrint:false,
    }
  },
  mounted(){
    const height = window.innerHeight-323;
    const element = document.querySelector('.orders');
    element.style.minHeight = height+'px';

    const name = this.$route.params.name;
    if(name === 'footPrint'){
      this.footPrint = true;
    }
  },
}
</script>

<style>

</style>