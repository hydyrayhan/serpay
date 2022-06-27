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
          <!-- <div class="radios">
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
          </div> -->

          <div class="bill_list" @click="billType(0)">
            <svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.3651 1H3.23651C2.00132 1 1 2.06332 1 3.375V17.625C1 18.9367 2.00132 20 3.23651 20H23.3651C24.6002 20 25.6016 18.9367 25.6016 17.625V3.375C25.6016 2.06332 24.6002 1 23.3651 1Z" stroke="#FF141D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 8.125H25.6016" stroke="#FF141D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>{{$t('fromCart')}}</span>
          </div>
          <div class="bill_list" @click="billType(1)">
            <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 1V23" stroke="#FFC700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 5H4.5C3.57174 5 2.6815 5.36875 2.02513 6.02513C1.36875 6.6815 1 7.57174 1 8.5C1 9.42826 1.36875 10.3185 2.02513 10.9749C2.6815 11.6313 3.57174 12 4.5 12H9.5C10.4283 12 11.3185 12.3687 11.9749 13.0251C12.6313 13.6815 13 14.5717 13 15.5C13 16.4283 12.6313 17.3185 11.9749 17.9749C11.3185 18.6313 10.4283 19 9.5 19H1" stroke="#FFC700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>{{$t('cash')}}</span>
          </div>
          <div class="bill_list" @click="billType(2)">
            <svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.3651 1H3.23651C2.00132 1 1 2.06332 1 3.375V17.625C1 18.9367 2.00132 20 3.23651 20H23.3651C24.6002 20 25.6016 18.9367 25.6016 17.625V3.375C25.6016 2.06332 24.6002 1 23.3651 1Z" stroke="#14B9FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 8.125H25.6016" stroke="#14B9FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>{{$t('onlineBill')}}</span>
          </div>
        </div>
      </div>

      <div class="order_bottom">
        <span class="priceCon">
          <div class="title">{{$t('sum')}}:</div>
          <div class="price">12345<span>manat</span></div>
        </span>
        <nuxt-link to="/" class="order_bottom_button">{{$t('orderDone')}}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      selectOpen:false,
    }
  },
  mounted(){
    const height = window.innerHeight-402;
    const element = document.querySelector('.order');
    element.style.minHeight = height+'px';
  },
  watch:{
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
    },
    billType(id){
      const lists = document.querySelectorAll(".bill_list");
      for(let i = 0; i<3; i++){
        lists[i].classList.remove("active");
      }
      lists[id].classList.add('active')
    }
  }
}
</script>

<style>

</style>