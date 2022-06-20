<template>
  <div class="container">
    <div class="myAddresses">
      <div class="myAddresses_title">{{$t('myAddress')}}</div>
      <div v-if="addresses.length">bar</div>
      <div v-else>
        <div class="noAddress_cart">
          <span>{{$t('noAddress')}}</span>
        </div>
      </div>
      <button class="addAddress">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 8V16" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 12H16" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>{{$t('addNewAddress')}}</span>
      </button>
    </div>

    <div class="address_popupBack"></div>
    <div class="address_addPopup">
      <div class="popupTitle"></div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      addresses:[]
    }
  },
 mounted(){
    const height = window.innerHeight-298;
    const element = document.querySelector('.myAddresses');
    element.style.minHeight = height+'px';
    window.addEventListener('resize',function(){
      const height = window.innerHeight-298 ;
      const element = document.querySelector('.myAddresses');
      element.style.minHeight = height+'px';
    })
  },
}
</script>

<style>

</style>