// CP = contact and PasswordChange pages
<template>
  <div class="container CPContainer">
    <div class="mobileResHeader">{{$t("changePass")}}</div>
    <div class="CP">
      <div class="CPtitle">{{$t("changePass")}}</div>
      
      <div class="CP_input">
        <label for="name">{{$t('givePassword')}}</label>
        <input class="padding" type="password" id="name" v-model="password">
        <svg @click="openPass(0)" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="CP_input">
        <label for="name1">{{$t('giveNewPass')}}</label>
        <input class="padding" type="password" id="name1" v-model="password2">
        <svg @click="openPass(1)" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="CP_input">
        <label for="name2">{{$t('giveConfirmPass')}}</label>
        <input class="padding" type="password" id="name2" v-model="password3">
        <svg @click="openPass(2)" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      <button class="send" @click="changePass">{{$t('save')}}</button>
    </div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  data(){
    return{
      password:'',
      password2:'',
      password3:'',
    }
  },
  mounted(){
    const height = window.innerHeight-299;
    const element = document.querySelector('.CPContainer');
    element.style.minHeight = height+'px';
    // patch('users/update-my-password',{currentPassword,newPassword,newPasswordConfirm})
  },
  computed:{
    ...mapGetters({
      user:'user/user',
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
    },
    async changePass(){
      console.log(this.user)
      if(this.user){
        if(this.password && this.password2 && this.password3){
          if(this.password2 === this.password3){
            if(this.password2.length > 5){
              
            }else{
              this.$toast.success(this.$t('passwordLetterMore6'))
            }
          }else{
            this.password3 = ''
            document.querySelector('#name2').style.border = '1px solid red';
          }
        }else{
          this.$toast.success(this.$t('fillFreeSpace'))
        }
      }else{
        this.$toast.success(this.$t('firstlyRegister'))
      }
    }
  }
}
</script>

<style>

</style>