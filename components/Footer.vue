<template>
  <div class="footer">
    <div class="container">
      <div class="topContainer">
        <nuxt-link to="/" class="logo"><img src="~/assets/images/footerLogo.svg" alt="footerLogo"></nuxt-link>
        <div class="pages">
          <div class="left">
            <nuxt-link to="/">{{$t('home')}}</nuxt-link>
            <nuxt-link to="/favorite">{{$t('liked')}}</nuxt-link>
            <nuxt-link to="/sebet">{{$t('ordersPage')}}</nuxt-link>
          </div>
          <div class="right">
            <nuxt-link to="/">{{$t('footPrint')}}</nuxt-link>
            <nuxt-link to="/">{{$t('chatToAdmin')}}</nuxt-link>
            <nuxt-link to="/">{{$t('settings')}}</nuxt-link>
          </div>
        </div>
        <div class="stores">
          <a href="https://apple.com" target="_blank">
            <img src="~/assets/images/icons/footerAppStore.svg" alt="footerAppStore">
          </a>
          <a href="https://play.google.com" target="_blank">
            <img src="~/assets/images/icons/footerGooglePlay.svg" alt="footerGooglePlay">
          </a>
        </div>
      </div>
      <div class="footer_text">© 2022-2022 7pay.com. Ähli hukuklary goraglydyr.</div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>