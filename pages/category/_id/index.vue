<template>
  <div class="container">
    <Breadcrumb :positions="positions"/>

    <h2 class="category_name">Kir ýuwujy enjamlar</h2>

    <div class="category">
      <div class="category_sidebar">
        <div class="category_sidebar_header">
          <span>
            <div class="icon"><img src="~/assets/images/icons/sidebarFilter.svg" alt="sidebarFilter"></div>
            <div class="text">{{$t('filter')}}</div>
          </span>
          <div class="exit" @click="closeFilter">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 1.5L1.5 15.5" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1.5 1.5L15.5 15.5" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>

        <div class="category_sidebar_price">
          <div class="category_sidebar_price_header">
            <div class="filter_header_text">{{$t('price')}}</div>
            <!-- <div class="valyut">TMT</div> -->
          </div>
          <div class="category_sidebar_price_inputs">
            <input type="text" :placeholder="$t('min')" v-model="filterData.min">
            <input type="text" :placeholder="$t('max')" v-model="filterData.max">
          </div>
        </div>

        <div class="category_sidebar_gender">
          <div class="filter_header_text">{{$t('gender')}}</div>
          <div class="category_sidebar_gender_checkbuttons">
            <div class="jyns">
              <div class="checkbutton">
                <span class="text">{{$t('man')}}</span> 
                <label for="man">
                  <input type="checkbox" name="man" id="man" v-model="filterData.man">
                  <div class="check">
                    <img src="~/assets/images/icons/checkbox-icon.svg" alt="checkbox-icon">
                  </div>
                </label>
              </div>
              <div class="checkbutton">
                <span class="text">{{$t('woman')}}</span> 
                <label for="woman">
                  <input type="checkbox" name="woman" id="woman" v-model="filterData.woman">
                  <div class="check">
                    <img src="~/assets/images/icons/checkbox-icon.svg" alt="checkbox-icon">
                  </div>
                </label>
              </div>
              <div class="checkbutton">
                <span class="text">{{$t('child')}}</span> 
                <label for="child">
                  <input type="checkbox" name="child" id="child" v-model="filterData.child">
                  <div class="check">
                    <img src="~/assets/images/icons/checkbox-icon.svg" alt="checkbox-icon">
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="category_sidebar_discounts">
          <div class="checkbutton">
            <span class="text">{{$t('discount')}}</span> 
            <label for="discount">
              <input type="checkbox" name="discount" id="discount" v-model="filterData.discount">
              <div class="check">
                <img src="~/assets/images/icons/checkbox-icon.svg" alt="checkbox-icon">
              </div>
            </label>
          </div>
          <div class="checkbutton">
            <span class="text">{{$t('new')}}</span> 
            <label for="new">
              <input type="checkbox" name="new" id="new" v-model="filterData.new">
              <div class="check">
                <img src="~/assets/images/icons/checkbox-icon.svg" alt="checkbox-icon">
              </div>
            </label>
          </div>
        </div>

        <div class="category_sidebar_buttons">
          <button class="clear">{{$t('clear')}}</button>
          <button class="filter" @click="sort()">
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.3327 1H0.666016L7.33268 8.88333V14.3333L10.666 16V8.88333L17.3327 1Z" stroke="#616161" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            {{$t('startFilter')}}
          </button>
        </div>
      </div>
      <div class="category_main">
        <div class="category_main_filter">
          <div class="category_main_name">Kir ýuwujy enjamlar</div>
          <div class="category_main_filter_left">
            <div class="left_title">
              <img src="~/assets/images/icons/headerFilter.svg" alt="headerFilter">
              <span>{{$t('sort')}}:</span>
            </div>
            <div class="left_btn box boxBorder" @click="sort(1)">
              <span>{{$t('yzygider')}}</span>
            </div>
            <div class="left_btn box boxBorder" @click="sort(2)">
              <span>{{$t('richTOpoor')}}</span>
              <div class="icons">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="22" height="22" rx="3" fill="white" fill-opacity="0.1"/>
                  <path d="M17.3536 7.35355C17.5488 7.15829 17.5488 6.84171 17.3536 6.64645L14.1716 3.46447C13.9763 3.2692 13.6597 3.2692 13.4645 3.46447C13.2692 3.65973 13.2692 3.97631 13.4645 4.17157L16.2929 7L13.4645 9.82843C13.2692 10.0237 13.2692 10.3403 13.4645 10.5355C13.6597 10.7308 13.9763 10.7308 14.1716 10.5355L17.3536 7.35355ZM5 7.5H17V6.5H5V7.5Z" fill="#AEAEAE"/>
                  <path d="M4.64645 14.6464C4.45118 14.8417 4.45118 15.1583 4.64645 15.3536L7.82843 18.5355C8.02369 18.7308 8.34027 18.7308 8.53553 18.5355C8.7308 18.3403 8.7308 18.0237 8.53553 17.8284L5.70711 15L8.53553 12.1716C8.7308 11.9763 8.7308 11.6597 8.53553 11.4645C8.34027 11.2692 8.02369 11.2692 7.82843 11.4645L4.64645 14.6464ZM17 14.5L5 14.5L5 15.5L17 15.5L17 14.5Z" fill="#AEAEAE"/>
                </svg>
              </div>
              <span>{{$t('poorTOrich')}}</span>
            </div>
            <!-- <div class="left_btn box boxBorder" @click="sort(3)">
              <span>{{$t('news')}}</span>
            </div> -->
            <div class="left_btn box boxBorder" @click="sort(3)">
              <span>{{$t('topSold')}}</span>
            </div>
          </div>
          <div class="category_main_filter_right">
            <div class="icon active" @click="changeView(0)">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 2.25H2.25V7.5H7.5V2.25Z" stroke="#AEAEAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.75 2.25H10.5V7.5H15.75V2.25Z" stroke="#AEAEAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.75 10.5H10.5V15.75H15.75V10.5Z" stroke="#AEAEAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.5 10.5H2.25V15.75H7.5V10.5Z" stroke="#AEAEAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="icon" @click="changeView(1)">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 6H21" stroke="#AEAEAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 12H21" stroke="#AEAEAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 18H21" stroke="#AEAEAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 6H3.01" stroke="#AEAEAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 12H3.01" stroke="#AEAEAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 18H3.01" stroke="#AEAEAE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        <div class="category_main_tablet_filter">
          <div class="buttons">
            <button @click="openFilter()" class="filter">
              <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 1H1L7.8 8.43126V13.5687L11.2 15.1398V8.43126L18 1Z" stroke="#272727" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>{{$t('filter')}}</span>
            </button>
            <button class="sort" @click="openSort">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 15.75V10.5" stroke="#272727" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 7.5V2.25" stroke="#272727" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 15.75V9" stroke="#272727" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 6V2.25" stroke="#272727" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 15.75V12" stroke="#272727" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 9V2.25" stroke="#272727" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M0.75 10.5H5.25" stroke="#272727" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.75 6H11.25" stroke="#272727" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.75 12H17.25" stroke="#272727" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>{{$t('sort')}}</span>

            </button>
            
            <div class="sortPopup">
              <div class="sortPopup_header">
                <div class="icon">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 15.75V10.5" stroke="#272727" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3 7.5V2.25" stroke="#272727" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 15.75V9" stroke="#272727" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 6V2.25" stroke="#272727" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15 15.75V12" stroke="#272727" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15 9V2.25" stroke="#272727" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M0.75 10.5H5.25" stroke="#272727" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.75 6H11.25" stroke="#272727" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.75 12H17.25" stroke="#272727" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>{{$t('sort')}}</span>
                </div>
                <div class="exit" @click="closeSort">
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 1.5L1.5 15.5" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.5 1.5L15.5 15.5" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>

              <div class="sortPopup_sorts">
                <div class="sortPopup_sorts_sort" @click="sort(1)">
                  <span>{{$t('yzygider')}}</span>
                  <div class="checkButton">
                    <img src="~/assets/images/icons/grayCicle.svg" alt="">
                  </div>
                </div>
                <div class="sortPopup_sorts_sort" @click="sort(2)">
                  <span>{{$t('poorTOrich')}}</span>
                  <div class="checkButton">
                    <img src="~/assets/images/icons/grayCicle.svg" alt="">
                  </div>
                </div>
                <div class="sortPopup_sorts_sort" @click="sort(2,2)">
                  <span>{{$t('richTOpoor')}}</span>
                  <div class="checkButton">
                    <img src="~/assets/images/icons/grayCicle.svg" alt="">
                  </div>
                </div>
                <!-- <div class="sortPopup_sorts_sort" >
                  <span>{{$t('news')}}</span>
                  <div class="checkButton">
                    <img src="~/assets/images/icons/grayCicle.svg" alt="">
                  </div>
                </div> -->
                <div class="sortPopup_sorts_sort" @click="sort(3)">
                  <span>{{$t('topSold')}}</span>
                  <div class="checkButton">
                    <img src="~/assets/images/icons/grayCicle.svg" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="filterBg" @click="closeFilter(),closeSort()" class="sortFilterBg"></div>
        <div class="category_main_products" v-if="products">
          <span class="cube" v-if="productView">
            <Product v-for="(product , i) in products" :key="i" :product="product"/>
          </span>
          <span class="longCube" v-else>
            <LongProduct v-for="(product,i) in products" :key="i" :product="product"/>
          </span>
          <button class="loadMore" @click="loadMore()">{{$t('loadMore')}}</button>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
import Breadcrumb from '~/components/Breadcrumb';
import Product from '~/components/Product';
import LongProduct from '~/components/LongProduct';
import {mapGetters} from 'vuex';
export default {
  components:{Breadcrumb, Product, LongProduct},
  data(){
    return{
      limit:5,
      limitAdd:5,
      offset:0,
      count:0,
      user:'public',
      positions:{
        category:{
          name:{
            tm:"",
            ru:""
          },
          id:"1",
          to:"/"
        },
        subcategory_name:{
          tm:"",
          ru:""
        },
      },
      poorRichSort:0,
      productView:true,
      filterBg:false,
      products:[],
      filterData:{
        min:'',
        max:'',
        man:false,
        woman:false,
        child:false,
        discount:false,
        new:false
      }
    }
  },
  computed:{
    ...mapGetters({
      userGlobal:'user/user'
    })
  },
  async mounted(){
    await this.takeData();
  },
  watch:{
    async $route(){
      await this.takeData()
    }
  },
  methods:{
    async takeData(){
      if(this.userGlobal){
        this.user = 'users';
      }
      try {
        const categoryName = this.$route.params.id;
        if(categoryName == 'newProducts'){
          const {data} = await this.$axios.get(`/${this.user}/products/new?limit=${this.limit}&offset=${this.offset}`);
          this.products = data.new_products;
          this.count = data.count;
          this.positions.category = null
          this.positions.subcategory_name = null
        }else if(categoryName == 'discountProducts'){
          const {data} = await this.$axios.get(`/${this.user}/products/discount?limit=${this.limit}&offset=${this.offset}`);
          console.log(data)
          this.products = data.discount_products
          this.positions.category = null
          this.positions.subcategory_name = null
        }else if(categoryName == 'saleProducts'){
          // const {data} = await this.$axios.get(`/${this.user}/products/action?limit=${this.limit}&offset=${this.offset}`);
          // console.log(data);
          // this.products = data.action_products
          this.positions.category = null
          this.positions.subcategory_name = null
        }else{
          const {data} = await this.$axios.get(`/${this.user}/sub-categories/products/${categoryName}?limit=${this.limit}&offset=${this.offset}`);
          this.count = data.count
          this.products = data.products
          this.positions.category.name.tm = data.subcategory.category.name_tm;
          this.positions.category.name.ru = data.subcategory.category.name_ru;
          this.positions.subcategory_name.tm = data.subcategory.name_tm;
          this.positions.subcategory_name.ru = data.subcategory.name_ru;
        }
      } catch (err) {
        console.log(err)
      }
    },
    loadMore(){
      this.limit += this.limitAdd;
      if(this.limit > this.count){
        document.querySelector(".loadMore").style.display = 'none'
      }
      this.fullSort();
    },
    changeView(number){
      document.querySelectorAll('.category_main_filter_right .icon')[0].classList.remove('active')
      document.querySelectorAll('.category_main_filter_right .icon')[1].classList.remove('active')
      document.querySelectorAll('.category_main_filter_right .icon')[number].classList.add('active')
      if(number == 1){
        this.productView = false;
      }else{
        this.productView = true;
      }
    },
    openFilter(){
      document.querySelector('.category_sidebar').style.display = 'block';
      this.filterBg = true;
    },
    closeFilter(){
      document.querySelector(".category_sidebar").style.display = 'none';
      this.filterBg = false;
    },
    openSort(){
      document.querySelector(".sortPopup").style.display = 'block';
      this.filterBg = true;
    },
    closeSort(){
      document.querySelector(".sortPopup").style.display = 'none';
      this.filterBg = false;
    },
    async sort(id,id2){

      for(let i =0; i<3; i++){
        document.querySelectorAll('.box')[i].classList.remove('active');
      }
      if(id){
        document.querySelectorAll('.box')[id-1].classList.add('active');
  
        for(let i =0; i<4; i++){
          let tablet = document.querySelectorAll('.sortPopup_sorts_sort')[i];
          const img = require('~/assets/images/icons/grayCicle.svg')
          tablet.querySelector('.checkButton img').setAttribute('src',img)
        }
        const img = require('~/assets/images/icons/redCicle.svg')
        if(id == 1 || (id == 2 && !id2)){
          document.querySelectorAll('.sortPopup_sorts_sort')[id-1].querySelector('.checkButton img').setAttribute('src',img);
        }else if(id2){
          document.querySelectorAll('.sortPopup_sorts_sort')[2].querySelector('.checkButton img').setAttribute('src',img);
        }else if(id==3){
          document.querySelectorAll('.sortPopup_sorts_sort')[id].querySelector('.checkButton img').setAttribute('src',img);
        }
  
        
        if(id == 2){
          this.poorRichSort += 1;
        }else{
          this.poorRichSort = 0;
        }
        await this.fullSort(id);
      }else{
        await this.fullSort();
      }
    },
    async fullSort(sort){
      let data;
      let sortNumber;
      if(sort == 1){
        sortNumber = ''
      }else if(sort == 2){
        let localSort = 0;
        if(this.poorRichSort%2 == 1){
          localSort = 0;
        }else{
          localSort = 1;
        } 
        sortNumber = localSort
      }else if(sort == 3){
        sortNumber = 3
      }

      
      const sex = []
      this.filterData.man ? sex.push("M") : '';
      this.filterData.woman ? sex.push("F") : '';
      this.filterData.child ? sex.push("U") : '';
      try {
        if(this.$route.params.id == 'newProducts'){
          const {data} = await this.$axios.get(`/${this.user}/products/new?sort=${sortNumber}&max_price=${this.filterData.max}&min_price=${this.filterData.min}&is_new=${this.filterData.new}&discount=${this.filterData.discount}&sex=${sex}&limit=${this.limit}&offset=${this.offset}`);
          this.products = data.new_products;
        }else if(this.$route.params.id == 'discountProducts'){
          const {data} = await this.$axios.get(`/${this.user}/products/discount?sort=${sortNumber}&max_price=${this.filterData.max}&min_price=${this.filterData.min}&is_new=${this.filterData.new}&discount=${this.filterData.discount}&sex=${sex}&limit=${this.limit}&offset=${this.offset}`);
          this.products = data.discount_products;
        }else if(this.$route.params.id == 'saleProducts'){
          const {data} = await this.$axios.get(`/${this.user}/products/action?sort=${sortNumber}&max_price=${this.filterData.max}&min_price=${this.filterData.min}&is_new=${this.filterData.new}&discount=${this.filterData.discount}&sex=${sex}&limit=${this.limit}&offset=${this.offset}`);
          this.products = data.discount_products;
        }
        else{
          data = await this.$axios.get(`/${this.user}/sub-categories/products/${this.$route.params.id}?sort=${sortNumber}&max_price=${this.filterData.max}&min_price=${this.filterData.min}&is_new=${this.filterData.new}&discount=${this.filterData.discount}&sex=${sex}&limit=${this.limit}&offset=${this.offset}`);
          this.products = data.data.products;
        }
      } catch (error) {
        console.log(error); 
      }


    }
  }
}
</script>

<style>

</style>