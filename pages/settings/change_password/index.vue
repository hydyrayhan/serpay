// CP = contact and PasswordChange pages
<template>
  <div class="container CPContainer">
    <div class="CP">
      <div class="CPtitle">{{$t("changePass")}}</div>
      
      <div class="CP_input">
        <label for="name">{{$t('givePassword')}}</label>
        <input class="padding" type="password" id="name">
        <svg @click="openPass(0)" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="CP_input">
        <label for="name1">{{$t('giveNewPass')}}</label>
        <input class="padding" type="password" id="name1">
        <svg @click="openPass(1)" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="CP_input">
        <label for="name2">{{$t('giveConfirmPass')}}</label>
        <input class="padding" type="password" id="name2">
        <svg @click="openPass(2)" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      <button class="send">{{$t('save')}}</button>
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
  methods:{
    openPass(id){
      const el = document.querySelectorAll('.CP input')[id]
      const label = document.querySelectorAll('.CP label')[id]
      if(el.getAttribute('type') == 'password'){
        el.setAttribute('type','text');
      }else{
        el.setAttribute('type','password');
      }
      label.click();
    }
  }
}
</script>

<style>

</style>