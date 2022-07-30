<template>
  <div class="address_cart" >
    <div class="address_cart_info">
      <div class="address_cart_info_place">{{data.address.welayat}}</div>
      <div class="address_cart_info_note">{{data.address.address}}</div>
    </div>
    <div class="address_cart_buttons" v-click-outside="closeFunc">
      <div class="desktop">
        <button class="address_cart_buttons_edit" @click="$emit('edit',data.address)">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>{{$t('edit')}}</span>
        </button>
        <button class="address_cart_buttons_delete"  @click="$emit('delete')">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6H5H21" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>{{$t('delete')}}</span>
        </button>
      </div>
      <div class="treeDots" @click="openFunc(data.id)">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12Z" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12Z" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['data'],
  data(){
    return {
      addAddressShow:false,
      deleteAddressShow:false,
      addressData:false,
    }
  },
  methods:{
    openFunc(id){
      const carts = document.querySelectorAll(".desktop");
      const cart = carts[id];
      for(let i = 0; i<carts.length; i++){
        carts[i].style.display = 'none';
      }
      cart.style.display= 'flex';
      cart.style.alignItems = 'flex-start';
      cart.style.flexDirection = 'column';
      this.globalId = id;
    },
    closeFunc(){
      if(this.globalId>-1){
        const carts = document.querySelectorAll(".desktop");
        carts[this.globalId].style.display = 'none';
        this.globalId = -1;
      }
    },
  }
}
</script>

<style>

</style>