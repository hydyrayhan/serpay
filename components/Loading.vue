<template>
  <div class="loading-page">
    <div class="loader-back"></div>
    <div class="loader"></div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    }
  }
</script>

<style scoped>

</style>