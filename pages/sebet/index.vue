<template>
  <div class="container">
    <div class="cart_tablet_header">
      <div class="cart_title">{{$t('cart')}}</div>
      <div class="chooseAll" @click="radioButton('all')">
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10.5" r="9.25" stroke="#FF141D" stroke-width="1.5"/>
          <circle cx="10" cy="10.5" r="6.25" fill="#FF141D"/>
        </svg>
        <span>{{$t('chooseAll')}}</span>
      </div>
    </div>
    <div class="cart">
      <div class="cart_left">
        <div class="product_container">
          <div class="cart_left_radio" @click="radioButton(0)">
            <svg v-if="!radios[0]" width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="9.25" stroke="#AEAEAE" stroke-width="1.5"/>
            </svg>
            <svg v-else width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12.5" cy="12.5" r="11.75" stroke="#FF141D" stroke-width="1.5"/>
              <circle cx="12.5" cy="12.5" r="7.8125" fill="#FF141D"/>
            </svg>
          </div>
          <div class="cart_left_product">
            <div class="cart_left_product_left">
              <div class="images"><ImageSlider /></div>

              <div class="info">
                <div class="info_price">
                  <div class="info_price_new">12893<span>manat</span></div>
                  <div class="info_price_old">12893<span>manat</span><span></span></div>
                </div>
                <div class="info_name">Lorem ipsum dolor sit amet consectetur.</div>
                <div class="info_definition">Lorem ipsum dolor sit amet.</div>
              </div>
            </div>

            <div class="buttons">
              <div class="buttons_quantity">
                <div class="title">{{$t('quantity')}}</div>
                <div class="button">
                  <svg width="6" height="2" viewBox="0 0 6 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.03906 0.3125V1.94531H0.765625V0.3125H5.03906Z" fill="#292929"/>
                  </svg>
                </div>
                <div class="count">1</div>
                <div class="button">
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.27344 3.71094V5.54688H0.476562V3.71094H8.27344ZM5.36719 0.578125V8.85938H3.39062V0.578125H5.36719Z" fill="#292929"/>
                  </svg>
                </div>
              </div>

              <div class="buttons_delete">
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
        <div class="product_container">
          <div class="cart_left_radio" @click="radioButton(1)">
            <svg v-if="!radios[1]" width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="9.25" stroke="#AEAEAE" stroke-width="1.5"/>
            </svg>
            <svg v-else width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12.5" cy="12.5" r="11.75" stroke="#FF141D" stroke-width="1.5"/>
              <circle cx="12.5" cy="12.5" r="7.8125" fill="#FF141D"/>
            </svg>
          </div>
          <div class="cart_left_product">
            <div class="cart_left_product_left">
              <div class="images"><ImageSlider /></div>

              <div class="info">
                <div class="info_price">
                  <div class="info_price_new">12893<span>manat</span></div>
                  <div class="info_price_old">12893<span>manat</span><span></span></div>
                </div>
                <div class="info_name">Lorem ipsum dolor sit amet consectetur.</div>
                <div class="info_definition">Lorem ipsum dolor sit amet.</div>
              </div>
            </div>

            <div class="buttons">
              <div class="buttons_quantity">
                <div class="title">{{$t('quantity')}}</div>
                <div class="button">
                  <svg width="6" height="2" viewBox="0 0 6 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.03906 0.3125V1.94531H0.765625V0.3125H5.03906Z" fill="#292929"/>
                  </svg>
                </div>
                <div class="count">1</div>
                <div class="button">
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.27344 3.71094V5.54688H0.476562V3.71094H8.27344ZM5.36719 0.578125V8.85938H3.39062V0.578125H5.36719Z" fill="#292929"/>
                  </svg>
                </div>
              </div>

              <div class="buttons_delete">
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
        <div class="product_container">
          <div class="cart_left_radio" @click="radioButton(2)">
            <svg v-if="!radios[2]" width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="9.25" stroke="#AEAEAE" stroke-width="1.5"/>
            </svg>
            <svg v-else width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12.5" cy="12.5" r="11.75" stroke="#FF141D" stroke-width="1.5"/>
              <circle cx="12.5" cy="12.5" r="7.8125" fill="#FF141D"/>
            </svg>
          </div>
          <div class="cart_left_product">
            <div class="cart_left_product_left">
              <div class="images"><ImageSlider /></div>

              <div class="info">
                <div class="info_price">
                  <div class="info_price_new">12893<span>manat</span></div>
                  <div class="info_price_old">12893<span>manat</span><span></span></div>
                </div>
                <div class="info_name">Lorem ipsum dolor sit amet consectetur.</div>
                <div class="info_definition">Lorem ipsum dolor sit amet.</div>
              </div>
            </div>

            <div class="buttons">
              <div class="buttons_quantity">
                <div class="title">{{$t('quantity')}}</div>
                <div class="button">
                  <svg width="6" height="2" viewBox="0 0 6 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.03906 0.3125V1.94531H0.765625V0.3125H5.03906Z" fill="#292929"/>
                  </svg> 
                </div>
                <div class="count">1</div>
                <div class="button">
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.27344 3.71094V5.54688H0.476562V3.71094H8.27344ZM5.36719 0.578125V8.85938H3.39062V0.578125H5.36719Z" fill="#292929"/>
                  </svg>
                </div>
              </div>

              <div class="buttons_delete">
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
      <div class="cart_right"> 
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
            <div class="price">12389<span>manat</span></div>
          </div>
        </div>
        <nuxt-link to="order" class="cart_right_bottom">{{$t('orderDone')}}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import ImageSlider from '~/components/ImageSlider';
export default {
  components:{ImageSlider},
  data(){
    return{
      radios:[false,false,true],
    }
  },
   mounted(){
    document.querySelectorAll(".header_buttons_cart path")[0].style.fill = '#FF141D'
    document.querySelectorAll(".header_buttons_cart path")[1].style.fill = '#FF141D'
    document.querySelectorAll(".header_buttons_cart path")[2].style.fill = '#FF141D'
    document.querySelector(".header_buttons_cart .text").style.color = '#FF141D'

    const height = window.innerHeight-352;
    const element = document.querySelector('.cart');
    element.style.minHeight = height+'px';
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
    }
  }
}
</script>

<style>

</style>