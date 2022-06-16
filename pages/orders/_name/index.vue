<template>
  <div class="orders">
    <div class="container">
      <div class="orders_header">
        <div class="pageName" v-if="footPrint">{{$t('footPrint')}}</div>
        <div class="pageName" v-else>{{$t('historyOrder')}}</div>
        <div class="privateButton" v-if="privateButton">Private</div>
        <div class="orders_header_buttons" v-else>
           <button class="cancel">{{$t('cancel')}}</button>
           <button class="delete">{{$t('delete')}}</button>
           <div class="selectAll">
             <span class="activeCon">
               <svg class="active" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="16" height="16" rx="8" stroke="#FF141D" stroke-width="2"/>
                  <rect x="4" y="4" width="10" height="10" rx="5" fill="#FF141D"/>
                </svg>
             </span>
             <span class="text">{{$t('chooseAll')}}</span>
           </div>
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
    window.addEventListener('resize',function(){
      const height = window.innerHeight-323;
      const element = document.querySelector('.orders');
      element.style.minHeight = height+'px';
    })

    const name = this.$route.params.name;
    if(name === 'footPrint'){
      this.footPrint = true;
    }
  },
}
</script>

<style>

</style>