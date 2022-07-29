<template>
  <div class="container brandPage">
     
  </div>
</template>

<script>
import Product from '~/components/Product'
export default {
  components:{Product},
  mounted(){
    const height = window.innerHeight-299;
    const element = document.querySelector('.brandPage');
    element.style.minHeight = height+'px';

    const brand_id = this.$route.params.id;

  }
}
</script>

<style>

</style>