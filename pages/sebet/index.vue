<template>
  <div class="container">
    <div class="cart_tablet_header">
      <div class="cart_title">{{$t('cart')}}</div>
      <div class="chooseAll" @click="radioButton('all')" v-if="products.length">
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10.5" r="9.25" stroke="#FF141D" stroke-width="1.5"/>
          <circle cx="10" cy="10.5" r="6.25" fill="#FF141D"/>
        </svg>
        <span>{{$t('chooseAll')}}</span>
      </div>
    </div>
    <div class="cart" >
      <div class="cart_left" v-if="products.length">
        <div class="product_container" v-for="(product,i) in products" :key="i">
          <div class="cart_left_radio" @click="radioButton(i)">
            <svg v-if="!radios[i]" width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="9.25" stroke="#AEAEAE" stroke-width="1.5"/>
            </svg>
            <svg v-else width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12.5" cy="12.5" r="11.75" stroke="#FF141D" stroke-width="1.5"/>
              <circle cx="12.5" cy="12.5" r="7.8125" fill="#FF141D"/>
            </svg>
          </div>
          <div class="cart_left_product">
            <!-- <div class="images"><ImageSlider /></div> -->
            <div class="images">
              <img v-bind:src="$config.url+'/'+product.image" v-if="product.image" alt="">
            </div>
            <div class="infoButton">
              <div class="info">
                <div class="info_price">
                  <div class="info_price_new" v-if="product.price>-1">{{product.price}}<span>manat</span></div>
                  <div class="info_price_old" v-if="product.price_old">{{product.price_old}}<span>manat</span><span></span></div>
                </div>
                <div class="info_name" v-if="product[language.name]">{{product[language.name]}}</div>
                <div class="info_definition" v-if="product[language.body]">{{product[language.body]}}</div>
              </div>

              <div class="buttons">
                <div class="buttons_quantity">
                  <div class="title">{{$t('quantity')}}</div>
                  <div class="button">
                    <svg width="6" height="2" viewBox="0 0 6 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.03906 0.3125V1.94531H0.765625V0.3125H5.03906Z" fill="#292929"/>
                    </svg>
                  </div>
                  <div class="count" v-if="product.quantity">{{product.quantity}}</div>
                  <div class="button">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.27344 3.71094V5.54688H0.476562V3.71094H8.27344ZM5.36719 0.578125V8.85938H3.39062V0.578125H5.36719Z" fill="#292929"/>
                    </svg>
                  </div>
                </div>

                <div class="buttons_delete" @click="deleteFromCart(product.product_id)">
                  <div class="icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 6H5H21" stroke="#747474" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#747474" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div class="title">{{$t('deleteFromCart')}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cart_right" v-if="products.length"> 
        <div class="cart_right_main">
          <div class="chooseAll" @click="radioButton('all')">
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10.5" r="9.25" stroke="#FF141D" stroke-width="1.5"/>
              <circle cx="10" cy="10.5" r="6.25" fill="#FF141D"/>
            </svg>
            <span>{{$t('chooseAll')}}</span>
          </div>
          <div class="totalPrice">
            <div class="title">{{$t('sum')}}:</div>
            <div class="price">{{totalPrice}}<span>manat</span></div>
          </div>
        </div>
        <nuxt-link to="order" class="cart_right_bottom">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1544_4244)">
            <path d="M17.0347 3.05775C16.8238 2.80458 16.5597 2.60096 16.2612 2.46136C15.9626 2.32176 15.637 2.2496 15.3075 2.25H3.1815L3.15 1.98675C3.08554 1.43956 2.82254 0.935049 2.41087 0.568858C1.9992 0.202668 1.46747 0.000256345 0.9165 0L0.75 0C0.551088 0 0.360322 0.0790177 0.21967 0.21967C0.0790176 0.360322 0 0.551088 0 0.75C0 0.948913 0.0790176 1.13968 0.21967 1.28033C0.360322 1.42098 0.551088 1.5 0.75 1.5H0.9165C1.1002 1.50002 1.2775 1.56747 1.41478 1.68954C1.55206 1.81161 1.63976 1.97981 1.66125 2.16225L2.69325 10.9373C2.80039 11.8498 3.23886 12.6913 3.92543 13.302C4.612 13.9127 5.49889 14.25 6.41775 14.25H14.25C14.4489 14.25 14.6397 14.171 14.7803 14.0303C14.921 13.8897 15 13.6989 15 13.5C15 13.3011 14.921 13.1103 14.7803 12.9697C14.6397 12.829 14.4489 12.75 14.25 12.75H6.41775C5.95354 12.7487 5.5011 12.6038 5.12245 12.3353C4.7438 12.0668 4.45748 11.6877 4.30275 11.25H13.2428C14.122 11.2501 14.9733 10.9412 15.6479 10.3773C16.3225 9.81348 16.7775 9.03052 16.9335 8.16525L17.5223 4.89975C17.581 4.57576 17.5678 4.2428 17.4836 3.92448C17.3993 3.60616 17.2461 3.31026 17.0347 3.05775ZM16.05 4.6335L15.4605 7.899C15.3668 8.41875 15.0934 8.889 14.6879 9.2274C14.2824 9.5658 13.7709 9.7508 13.2428 9.75H4.06425L3.3585 3.75H15.3075C15.4177 3.74934 15.5266 3.77297 15.6267 3.81919C15.7267 3.86542 15.8153 3.93311 15.8861 4.01746C15.957 4.1018 16.0085 4.20073 16.0368 4.3072C16.0651 4.41368 16.0696 4.52508 16.05 4.6335Z" fill="white"/>
            <path d="M5.25 18C6.07843 18 6.75 17.3284 6.75 16.5C6.75 15.6716 6.07843 15 5.25 15C4.42157 15 3.75 15.6716 3.75 16.5C3.75 17.3284 4.42157 18 5.25 18Z" fill="white"/>
            <path d="M12.75 18C13.5784 18 14.25 17.3284 14.25 16.5C14.25 15.6716 13.5784 15 12.75 15C11.9216 15 11.25 15.6716 11.25 16.5C11.25 17.3284 11.9216 18 12.75 18Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_1544_4244">
            <rect width="18" height="18" fill="white"/>
            </clipPath>
            </defs>
          </svg>

          {{$t('orderDone')}}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import ImageSlider from '~/components/ImageSlider';
import {mapGetters} from 'vuex';
export default {
  components:{ImageSlider},
  data(){
    return{
      radios:[],
      products:[],
      totalPrice:0,
    }
  },
  async mounted(){
    document.querySelectorAll(".header_buttons_cart path")[0].style.fill = '#FF141D'
    document.querySelectorAll(".header_buttons_cart path")[1].style.fill = '#FF141D'
    document.querySelectorAll(".header_buttons_cart path")[2].style.fill = '#FF141D'
    document.querySelector(".header_buttons_cart .text").style.color = '#FF141D'

    const height = window.innerHeight-299;
    const element = document.querySelector('.cart');
    element.style.minHeight = height+'px';

    if(this.user){
      try {
        const res = await this.$axios.get("/users/not-ordered");
        console.log(res);
        this.products = res.data.not_ordered_products;
        for(let i = 0; i<this.products.length; i++){
          this.radios.push(false);
          this.totalPrice += this.products[i].total_price;
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed:{
    ...mapGetters({
      language:'dynamicLang/language',
      user:"user/user",
    }),
  },
  methods:{
    radioButton(id){
      if(id == 'all'){
        for(let i = 0; i<this.radios.length; i++){
          this.radios[i] = true;
        }
        const arr = this.radios
        this.radios = []
        this.radios = arr
      }else{
        this.radios[id] = !this.radios[id];
        const arr = this.radios
        this.radios = []
        this.radios = arr;
      }
    },
    async deleteFromCart(id){
      try {
        const {status} = await this.$axios.delete(`/users/not-ordered/${id}`);
        if(status == 200){
          for(let i = 0; i<this.products.length; i++){
            if(this.products[i].product_id == id){
              this.products.splice(i, 1)
            }
          }
        }      
      } catch ({response}) {
        console.log(response.data.message);
      }
    }
  }
}
</script>

<style>

</style>