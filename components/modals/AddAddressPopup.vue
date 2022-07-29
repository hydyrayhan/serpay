<template>
  <div class="container">
    <div class="address_popupBack" @click="$emit('close-modal')"></div>
    <div class="address_addPopup">
      <div v-if="!data" class="popupTitle">{{$t('addAddress')}}</div>
      <div v-else class="popupTitle">{{$t('editAddress')}}</div>
      <div class="address_input">
        <div class="address_title">{{$t('city')}}, {{$t('velayat')}}</div>
        <input type="text" :placeholder="$t('cityExample')">
      </div>
      <div class="address_input">
        <div class="address_title">{{$t('extra_info_for_location')}}</div>
        <textarea name="" id=""  style="resize: none;"></textarea>
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
      }
    }
  },
  methods:{
    save(){
      // post('users/address',{address})
      // patch('users/address/user_address_id',{address})
      if(this.data){
        console.log("Add")
      }else{
        console.log("Edit")
      }
    }
  }
}
</script>

<style>

</style>