<template>
  <div class="container signInPage">
    <div class="mobileResHeader">{{$t('changePass')}}</div>
    <div class="signIn code">
      <div class="signIn_main">
        <div class="bigTitle" v-html="$t('codeTitle')"></div>
        <div class="code_inputs">
          <input type="text" onKeyPress="if(this.value.length==1) return false;">
          <input type="text" onKeyPress="if(this.value.length==1) return false;">
          <input type="text" onKeyPress="if(this.value.length==1) return false;">
          <input type="text" onKeyPress="if(this.value.length==1) return false;">
          <input type="text" onKeyPress="if(this.value.length==1) return false;">
        </div>
        <div class="code_buttons">
          <button>{{$t('sendAgain')}}</button>
          <button class="signButton">
            {{$t('submit')}}
          </button>
        </div>
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
  },
}
</script>

<style>

</style>