// CP = contact and PasswordChange pages
<template>
  <div class="container CPContainer">
    <div class="CP">
      <div class="CPtitle">{{$t("contact")}}</div>
      
      <div class="CP_input">
        <label for="name">{{$t('nameAndSurname')}}</label>
        <input type="text" id="name">
      </div>
      <div class="CP_input">
        <label for="phone">{{$t('phoneNumber')}}</label>
        <input type="text" id="phone" placeholder="+993">
      </div>
      <div class="CP_input">
        <label for="email">{{$t('email')}}</label>
        <input type="text" id="email">
      </div>
      <div class="CP_input">
        <label for="message">{{$t('message')}}</label>
        <textarea name="" id="message" cols="30" rows="10" style="resize:none"></textarea>
      </div>

      <button class="send">{{$t('send')}}</button>
    </div>

  </div>
</template>

<script>
export default {
  mounted(){
    const height = window.innerHeight-330;
    const element = document.querySelector('.CPContainer');
    element.style.minHeight = height+'px';
    window.addEventListener('resize',function(){
      const height = window.innerHeight-330 ;
      const element = document.querySelector('.CPContainer');
      element.style.minHeight = height+'px';
    })
  },
}
</script>

<style>

</style>