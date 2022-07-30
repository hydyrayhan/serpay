<template>
  <div class="container">
    <div class="address_popupBack" @click="$emit('close-modal')"></div>
    <div class="address_addPopup deleteAddressPopup">
      <div  class="popupTitle">{{$t(data.page)}}</div>
      <div class="address_buttons">
        <button class="address_buttons_exit" @click="$emit('close-modal')">{{$t('exit')}}</button>
        <button class="address_buttons_save" @click="save">{{$t('yes')}} </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['data'],
  methods:{
    async save(){
      this.$nuxt.$emit("loading");
      try {
        const {status} = await this.$axios.delete(`/users/address/${this.data.deleteId}`)
        if(status == 200){
          this.$emit('delete-address','delete')
        }
      } catch ({response}) {
        console.log(response.data.error)
      }
    }
  }
}
</script>

<style>

</style>