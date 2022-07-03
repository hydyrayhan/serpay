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
        <nuxt-link to="/" class="order_bottom_button">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1544_4259)">
            <path d="M17.0347 3.05775C16.8238 2.80458 16.5597 2.60096 16.2612 2.46136C15.9626 2.32176 15.637 2.2496 15.3075 2.25H3.1815L3.15 1.98675C3.08554 1.43956 2.82254 0.935049 2.41087 0.568858C1.9992 0.202668 1.46747 0.000256345 0.9165 0L0.75 0C0.551088 0 0.360322 0.0790177 0.21967 0.21967C0.0790176 0.360322 0 0.551088 0 0.75C0 0.948913 0.0790176 1.13968 0.21967 1.28033C0.360322 1.42098 0.551088 1.5 0.75 1.5H0.9165C1.1002 1.50002 1.2775 1.56747 1.41478 1.68954C1.55206 1.81161 1.63976 1.97981 1.66125 2.16225L2.69325 10.9373C2.80039 11.8498 3.23886 12.6913 3.92543 13.302C4.612 13.9127 5.49889 14.25 6.41775 14.25H14.25C14.4489 14.25 14.6397 14.171 14.7803 14.0303C14.921 13.8897 15 13.6989 15 13.5C15 13.3011 14.921 13.1103 14.7803 12.9697C14.6397 12.829 14.4489 12.75 14.25 12.75H6.41775C5.95354 12.7487 5.5011 12.6038 5.12245 12.3353C4.7438 12.0668 4.45748 11.6877 4.30275 11.25H13.2428C14.122 11.2501 14.9733 10.9412 15.6479 10.3773C16.3225 9.81348 16.7775 9.03052 16.9335 8.16525L17.5223 4.89975C17.581 4.57576 17.5678 4.2428 17.4836 3.92448C17.3993 3.60616 17.2461 3.31026 17.0347 3.05775ZM16.05 4.6335L15.4605 7.899C15.3668 8.41875 15.0934 8.889 14.6879 9.2274C14.2824 9.5658 13.7709 9.7508 13.2428 9.75H4.06425L3.3585 3.75H15.3075C15.4177 3.74934 15.5266 3.77297 15.6267 3.81919C15.7267 3.86542 15.8153 3.93311 15.8861 4.01746C15.957 4.1018 16.0085 4.20073 16.0368 4.3072C16.0651 4.41368 16.0696 4.52508 16.05 4.6335Z" fill="white"/>
            <path d="M5.25 18C6.07843 18 6.75 17.3284 6.75 16.5C6.75 15.6716 6.07843 15 5.25 15C4.42157 15 3.75 15.6716 3.75 16.5C3.75 17.3284 4.42157 18 5.25 18Z" fill="white"/>
            <path d="M12.75 18C13.5784 18 14.25 17.3284 14.25 16.5C14.25 15.6716 13.5784 15 12.75 15C11.9216 15 11.25 15.6716 11.25 16.5C11.25 17.3284 11.9216 18 12.75 18Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_1544_4259">
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