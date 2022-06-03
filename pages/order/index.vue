<template>
  <div class="container">
    <div class="order">
      <div class="order_title">{{$t('whereToOrder')}}</div>
      <div class="order_main">
        <div class="order_main_part">
          <div class="title">{{$t('address')}}:</div>
          <div class="selectContainer">
            <button class="select_name" @click="select">
              <span>select one</span>
              <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 1L8 8L1 1" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>

            <div class="select_options" v-if="selectOpen">
              <div class="option" @click="option('option1')">option1</div>
              <div class="option" @click="option('option2')">option2</div>
              <div class="option" @click="option('option3')">option3</div>
              <div class="option" @click="option('option4')">option4</div>
            </div>
          </div>
        </div>
        <div class="order_main_part">
          <div class="title">{{$t('name')}}</div>
          <input class="input" type="text">
        </div>
        <div class="order_main_part">
          <div class="title">{{$t('phoneNumber')}}</div>
          <label class="input">
            <span>+993 </span>
            <input type="number" pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==8) return false;" />
          </label>
        </div>
        <div class="order_main_part part_bill">
          <div class="title">{{$t('kindBill')}}</div>
          <div class="radios">
            <span class="radio">
              <input type="radio" id="cash" name="bill" value="cash" v-model="bill">
              <label for="cash">
                <svg class="active" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="16" height="16" rx="8" stroke="#FF141D" stroke-width="2"/>
                  <rect x="4" y="4" width="10" height="10" rx="5" fill="#FF141D"/>
                </svg>
                <svg class="passive" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="16" height="16" rx="8" stroke="#E5E5E5" stroke-width="2"/>
                </svg>
                <span>{{$t('cash')}}</span>
              </label>
            </span>
            <span class="radio">
              <input type="radio" id="cart" value="cart" v-model="bill" name="bill">
              <label for="cart">
                <svg class="active" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="16" height="16" rx="8" stroke="#FF141D" stroke-width="2"/>
                  <rect x="4" y="4" width="10" height="10" rx="5" fill="#FF141D"/>
                </svg>
                <svg class="passive" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="16" height="16" rx="8" stroke="#E5E5E5" stroke-width="2"/>
                </svg>
                <span>
                  {{$t('fromCart')}}
                </span>
              </label>

            </span>
          </div>
        </div>
      </div>

      <div class="order_bottom">
        <div class="title">{{$t('sum')}}</div>
        <div class="price">12345<span>manat</span></div>
        <nuxt-link to="/" class="order_bottom_button">{{$t('orderDone')}}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      bill:'',
      selectOpen:false,
    }
  },
  watch:{
    bill(){
      const radios = document.querySelectorAll(".radio");
      if(this.bill == 'cart'){
        radios[0].childNodes[2].childNodes[0].style.display="none"
        radios[0].childNodes[2].childNodes[2].style.display="block"
        radios[1].childNodes[2].childNodes[0].style.display="block"
        radios[1].childNodes[2].childNodes[2].style.display = 'none'
      }else if(this.bill = 'cash'){
        radios[0].childNodes[2].childNodes[0].style.display="block"
        radios[0].childNodes[2].childNodes[2].style.display="none"
        radios[1].childNodes[2].childNodes[0].style.display="none"
        radios[1].childNodes[2].childNodes[2].style.display = 'block'
      }
    }
  },
  methods:{
    select(){
      this.selectOpen = !this.selectOpen
      const el = document.querySelector('.select_name svg')
      this.selectOpen ? el.style.transform='rotate(180deg)':el.style.transform='rotate(0deg)'
    },
    option(value){
      const name = document.querySelector('.select_name span');
      name.textContent = value;
      this.select();
    }
  }
}
</script>

<style>

</style>