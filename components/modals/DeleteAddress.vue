<template>
  <div class="container">
    <div class="address_popupBack" @click="$emit('close-modal')"></div>
    <div class="address_addPopup deleteAddressPopup">
      <div v-if="!data" class="popupTitle">{{$t('wantToDelete')}}</div>
      <div class="address_buttons">
        <button class="address_buttons_exit">{{$t('exit')}}</button>
        <button class="address_buttons_save" @click="save">{{$t('yes')}} </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['data'],
  methods:{
    save(){
      console.log("lets delete")
    }
  }
}
</script>

<style>

</style>