<template>
  <div class="container">
    <div class="mobileResHeader">{{$t('myAddress')}}</div>
    <div class="myAddresses">
      <div class="myAddresses_title">{{$t('myAddress')}}</div>
      <div v-if="addresses.length">
        <div class="address_carts">
          <Address v-for="(address , i) in addresses" :key="i" :data="{id:i,address}" @edit="editAddressFunc" @delete="deleteAddress(address.address_id)"/>
        </div>
      </div>
      <div v-else>
        <div class="noAddress_cart">
          <span>{{$t('noAddress')}}</span>
        </div>
      </div>
      <button class="addAddress" v-if="user" @click="addAddressShow = true , addressData = true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 8V16" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 12H16" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>{{$t('addNewAddress')}}</span>     
      </button>
    </div>
    
    <AddAddress v-show="addAddressShow" :data="addressData" @close-modal="addAddress"/>
    <DeleteAddress v-show="deleteAddressShow" :data="{page:'wantToDelete',deleteId}" @close-modal="deleteAddressShow = false" @delete-address="deleteAddress"/>
  </div>
</template>

<script>
import AddAddress from '~/components/modals/AddAddressPopup.vue'
import DeleteAddress from '~/components/modals/DeleteAddress.vue'
import Address from '~/components/modals/Address.vue'
export default {
  components: { AddAddress , DeleteAddress, Address},
  data(){
    return{
      addressData:false,
      addAddressShow:false,
      deleteAddressShow:false,
      globalId:false,
      deleteId:'',
    }
  },
  async asyncData({ $axios, route , store}) {
    const user = store.state.user.user;
    let addresses = store.state.addresses.addresses

    if(user){
      if(!addresses){
        await store.dispatch('addresses/fetchAddresses')
        addresses = store.state.addresses.addresses;
      }else{
        
      }
    }else{
      addresses = []
    }
    return {user,addresses}
  },
  mounted(){
    const height = window.innerHeight-298;
    const element = document.querySelector('.myAddresses');
    element.style.minHeight = height+'px';
  },
  methods:{
    editAddressFunc(address){
      this.addressData = address;
      this.addAddressShow = true;
    },
    async deleteAddress(id){
      if(id === 'delete'){
        await this.$store.dispatch('addresses/fetchAddresses');
        this.addresses = this.$store.state.addresses.addresses;
        this.deleteAddressShow = false;
        this.$nuxt.$emit("loading");
      }else{
        this.deleteId = id;
        this.deleteAddressShow = true;
      }
    },
    async addAddress(type){
      if(type){
        this.addAddressShow = false
      }else{
        this.addAddressShow = false;
        await this.$store.dispatch('addresses/fetchAddresses');
        this.addresses = this.$store.state.addresses.addresses
      }
    }
  }
}
</script>

<style>

</style>