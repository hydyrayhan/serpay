<template>
  <div class="container">
    <div class="myAddresses">
      <div class="myAddresses_title">{{$t('myAddress')}}</div>
      <div v-if="addresses.length">
        <div class="address_carts">
          <div class="address_cart" v-for="(address , i) in addresses" :key="i">
            <div class="address_cart_info">
              <div class="address_cart_info_place">Ashgabat</div>
              <div class="address_cart_info_note">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem omnis labore non dignissimos culpa id at provident. Maxime, corrupti accusamus. Nihil, accusantium modi quam deleniti ut cupiditate neque officiis consectetur!</div>
            </div>
            <div class="address_cart_buttons">
              <button class="address_cart_buttons_edit" @click="editAddressFunc(address)">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <button class="address_cart_buttons_delete" @click="deleteAddressShow = true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 6H5H21" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="noAddress_cart">
          <span>{{$t('noAddress')}}</span>
        </div>
      </div>
      <button class="addAddress" @click="addAddressShow = true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 8V16" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 12H16" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>{{$t('addNewAddress')}}</span>     
      </button>
    </div>
    
    <AddAddress v-show="addAddressShow" :data="addressData" @close-modal="addAddressShow = false"/>
    <DeleteAddress v-show="deleteAddressShow" @close-modal="deleteAddressShow = false"/>
  </div>
</template>

<script>
import AddAddress from '~/components/modals/AddAddressPopup.vue'
import DeleteAddress from '~/components/modals/DeleteAddress.vue'
export default {
  components: { AddAddress , DeleteAddress},
  data(){
    return{
      addresses:[{city:'Ashgabat',note:"Ashgabat Mir 7"},{city:"tejen",note:"Tejen Vsoky"},{city:"Mary",note:"Mykgyllorsy shaheri"}],
      addressData:false,
      addAddressShow:false,
      deleteAddressShow:false,
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
    }
  }
}
</script>

<style>

</style>