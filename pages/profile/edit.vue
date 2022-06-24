<template>
  <div class="container signInPage">
    <div class="signIn">
       <div class="signIn_main">
        <div class="loginImage">
          <img src="~/assets/images/delete/logged.png" alt="">
        </div>

        <div class="title">{{$t('nameAndSurname')}}</div>
        <span class="input">
          <input type="text">
        </span>
        <div class="title">{{$t('login')}}</div>
        <span class="input">
          <input type="text">
        </span>
        
        <div class="title">{{$t('phoneNumber')}}</div>
        <span class="input signUpLastInput">
          <label class="input_input">
            <span>+993</span>
            <input type="number" pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==8) return false;" />
          </label>
        </span>

        <button class="signButton">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

          </svg>
          <span>{{$t('save')}}</span>
        </button>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    const height = window.innerHeight-438;
    const element = document.querySelector('.signIn');
    element.style.minHeight = height+'px';
  },
}
</script>

<style>

</style>