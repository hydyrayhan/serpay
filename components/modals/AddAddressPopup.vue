<template>
  <div class="container">
    <div class="address_popupBack" @click="$emit('close-modal',true)"></div>
    <div class="address_addPopup">
      <div v-if="data == true" class="popupTitle">{{$t('addAddress')}}</div>
      <div v-else class="popupTitle">{{$t('editAddress')}}</div>
      <div class="address_input">
        <div class="address_title">{{$t('city')}}, {{$t('velayat')}}</div>
        <input type="text" :placeholder="$t('cityExample')" v-model="address.welayat">
      </div>
      <div class="address_input">
        <div class="address_title">{{$t('extra_info_for_location')}}</div>
        <textarea name="" id="" v-model="address.address"  style="resize: none;"></textarea>
      </div>

      <div class="address_buttons">
        <button class="address_buttons_exit">{{$t('exit')}}</button>
        <button class="address_buttons_save" @click="save">{{$t('addAddress')}} </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['data'],
  data(){
    return {
      address:{
        welayat:'',
        address:''
      },
      load:false,
    }
  },
  watch:{
    data(){
      if(this.data != true){
        this.address.welayat = this.data.welayat;
        this.address.address = this.data.address;
      }
    }
  },
  methods:{
    async save(){
      if(this.address.address && this.address.welayat){
        this.$nuxt.$emit("loading");
        if(this.data == true){
          try {
            const {status} = await this.$axios.post('/users/address',this.address);
            if(status == 201){
              this.address.welayat = ''
              this.address.address = ''
              this.$nuxt.$emit("loading");
              this.$emit('close-modal');
            }
          } catch ({response}) {
            console.log(response.data.message);
          }
        }else{
          try {
            const {status} = await this.$axios.patch(`/users/address/${this.data.address_id}`,this.address);
            if(status == 200){
              this.address.welayat = ''
              this.address.address = ''
              this.$nuxt.$emit("loading");
              this.$emit('close-modal');
            }
          } catch ({response}) {
            console.log(response.data.message);
          }
        }
      }else{
        this.$toast.error(this.$t('fillFreeSpace'));
      }
    }
  }
}
</script>

<style>

</style>