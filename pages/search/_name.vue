<template>
  <div class="searched">
    <div class="container">
      <div class="searched_products">
        <div class="searched_products_product" v-for="i in 19" :key="i">
          <Product />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '~/components/Product';
export default {
  components:{Product}
}
</script>

<style>

</style>