<template>
  <div class="container">
    <div class="favorite_head">{{$t('liked')}}</div>

    <div class="favorite_products">
      <LongProduct v-for="i in 15" :key="i"/>
    </div>
  </div>
</template>

<script>
import LongProduct from '~/components/LongProduct';
export default {
  components:{LongProduct},
  mounted(){
    console.log(document.querySelector(".header_buttons_like path").style.fill = 'red')
  }
}
</script>

<style>

</style>