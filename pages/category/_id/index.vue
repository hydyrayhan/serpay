<template>
  <div class="container">
    <Breadcrumb :positions="positions"/>

    <h2 class="category_name">Kir ýuwujy enjamlar</h2>

    <div class="category">
      <div class="category_sidebar">
        <div class="category_sidebar_header">
          <div class="icon"><img src="~/assets/images/icons/sidebarFilter.svg" alt="sidebarFilter"></div>
          <div class="text">{{$t('filter')}}</div>
        </div>

        <div class="category_sidebar_price">
          <div class="category_sidebar_price_header">
            <div class="filter_header_text">{{$t('price')}}</div>
            <div class="valyut">TMT</div>
          </div>
          <div class="category_sidebar_price_inputs">
            <input type="text" :placeholder="$t('min')">
            <input type="text" :placeholder="$t('max')">
          </div>
        </div>

        <div class="category_sidebar_gender">
          <div class="filter_header_text">{{$t('gender')}}</div>
          <div class="category_sidebar_gender_checkbuttons">
            <div class="jyns">
              <span class="text">{{$t('man')}}</span> 
              <div class="checkbutton">
                <label for="man">
                  <div class="check">
                    <img src="~/assets/images/icons/checkbox-icon.svg" alt="checkbox-icon">
                  </div>
                  <input type="checkbox" name="man" id="man">
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="category_main">
        <div class="category_main_filter"></div>
        <div class="category_main_products"></div>
      </div>
    </div>
  </div>
</template> 

<script>
import Breadcrumb from '~/components/Breadcrumb';
export default {
  components:{Breadcrumb},
  data(){
    return{
      positions:{
        category:{
          name:{
            tm:"Category",
            ru:"Category"
          },
          id:"1",
          to:"/"
        },
        subcategory_name:'Sub category',
      }
    }
  }
}
</script>

<style>

</style>