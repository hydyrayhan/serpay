<template>
  <div class="container signInPage">
    <div class="mobileResHeader">{{$t('forgotPass')}}</div>
    <div class="signIn">
      <div class="signIn_main">
        <div class="bigTitle">{{$t('forgotPass')}}</div>
        <div class="title">{{$t('name')}}</div>
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
          {{$t('submit')}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 mounted(){
    const height = window.innerHeight-398;
    const element = document.querySelector('.signIn');
    element.style.minHeight = height+'px';
    // window.addEventListener('resize',function(){
    //   const height = window.innerHeight-398;
    //   const element = document.querySelector('.signIn');
    //   element.style.minHeight = height+'px';
    // })
  },
}
</script>

<style>

</style>