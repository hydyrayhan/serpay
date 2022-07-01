<template>
  <div class="container">
    <div class="address_popupBack" @click="$emit('close-modal')"></div>
    <div class="address_addPopup">
      <div v-if="!data" class="popupTitle">{{$t('addNewCart')}}</div>
      <div v-else class="popupTitle">{{$t('editAddress')}}</div>
      <div class="address_input">
        <div class="address_title">{{$t('cartCode')}}</div>
        <input type="text" placeholder="6666 7777 8888 9999">
      </div>
      <div class="address_input">
        <div class="address_title">{{$t('cartDate')}}</div>
        <input type="text" :placeholder="$t('monthAndYear')">
      </div>
      <div class="address_input">
        <div class="address_title">{{$t('surnameAndName')}}</div>
        <input type="text">
      </div>

      <div class="address_buttons">
        <button class="address_buttons_save" @click="save">{{$t('addKart')}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['data'],
  methods:{
    save(){
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