<template>
  <div class="container">
    <div class="mobileResHeader">{{$t('carts')}}</div>
    <div class="myAddresses">
      <div class="myAddresses_title">{{$t('carts')}}</div>
      <div v-if="addresses.length">
        <div class="address_carts">
          <Cart v-for="(address , i) in addresses" :key="i" :data="{id:i,address}" @edit="editAddressFunc" @delete="deleteAddress"/>
        </div>
      </div>
      <div v-else>
        <div class="noAddress_cart">
          <span>{{$t('noCartAddCart')}}</span>
        </div>
      </div>
      <button class="addAddress" @click="addAddressShow = true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 8V16" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 12H16" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>{{$t('addNewCart')}}</span>     
      </button>
    </div>
    
    <AddCart v-show="addAddressShow" :data="addressData" @close-modal="addAddressShow = false"/>
    <DeleteAddress v-show="deleteAddressShow" :data="{page:'wantToDeleteCart'}" @close-modal="deleteAddressShow = false"/>
  </div>
</template>

<script>
import AddCart from '~/components/modals/AddCart.vue'
import DeleteAddress from '~/components/modals/DeleteAddress.vue'
import Cart from '~/components/modals/Cart.vue'
export default {
  components: { AddCart , DeleteAddress, Cart},
  data(){
    return{
      addresses:[{city:'Ashgabat',note:"Ashgabat Mir 7"},{city:"tejen",note:"Tejen Vsoky"},{city:"Mary",note:"Mykgyllorsy shaheri"}],
      // addresses:[], 
      addressData:false,
      addAddressShow:false,
      deleteAddressShow:false,
      globalId:false,
    }
  },
 mounted(){
    const height = window.innerHeight-298;
    const element = document.querySelector('.myAddresses');
    element.style.minHeight = height+'px';
  },
  watch:{
    addAddressShow(){
      if(!this.addAddressShow){
        this.addressData = false
      }
    }
  },
  methods:{
    editAddressFunc(address){
      this.addressData = address;
      this.addAddressShow = true;
    },
    deleteAddress(){
      this.deleteAddressShow = true;
    }
  }
}
</script>

<style>

</style>