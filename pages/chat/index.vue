<template>
  <div class="container">
    <div class="chatPage">
      <div class="chat">
        <div class="chat_box admin">
          <div class="icon">
            <img src="~/assets/images/icons/defaultChatIcon.png" alt="">
          </div>
          <div class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eos, neque molestiae commodi velit distinctio aut alias minima nihil veritatis asperiores, dolorum beatae quae cum modi nostrum. Ex, architecto expedita!
          </div>
        </div>
        <div class="chat_box client">
          <div class="icon">
            <img src="~/assets/images/delete/logged.png" alt="">
          </div>
          <div class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eos, neque molestiae commodi velit distinctio aut alias minima nihil veritatis asperiores, dolorum beatae quae cum modi nostrum. Ex, architecto expedita!
          </div>
        </div>
        <div class="chat_box client">
          <div class="icon">
            <img src="~/assets/images/delete/logged.png" alt="">
          </div>
          <div class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eos, neque molestiae commodi velit distinctio aut alias minima nihil veritatis asperiores, dolorum beatae quae cum modi nostrum. Ex, architecto expedita!
          </div>
        </div>
        <div class="chat_box client">
          <div class="icon">
            <img src="~/assets/images/delete/logged.png" alt="">
          </div>
          <div class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eos, neque molestiae commodi velit distinctio aut alias minima nihil veritatis asperiores, dolorum beatae quae cum modi nostrum. Ex, architecto expedita!
          </div>
        </div>
        <div class="chat_box admin">
          <div class="icon">
            <img src="~/assets/images/delete/logged.png" alt="">
          </div>
          <div class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eos, neque molestiae commodi velit distinctio aut alias minima nihil veritatis asperiores, dolorum beatae quae cum modi nostrum. Ex, architecto expedita!
          </div>
        </div>
      </div>

      <div class="chatPage_input">
        <input type="text" :placeholder="$t('typeText')">
        <button>
          <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.9998 1.25161C22.0001 1.23816 22.0001 1.22521 21.9998 1.21176C21.9988 1.17901 21.9957 1.14674 21.9905 1.11447C21.9888 1.10445 21.9883 1.09467 21.9861 1.08465C21.9778 1.04432 21.9661 1.00472 21.9509 0.96634C21.9465 0.955095 21.9409 0.944584 21.936 0.933584C21.9231 0.904495 21.9084 0.876384 21.8915 0.849006C21.8847 0.837762 21.8778 0.826517 21.8703 0.815273C21.8453 0.779339 21.8184 0.744873 21.7869 0.713339C21.7551 0.681561 21.7202 0.654428 21.684 0.62925C21.6737 0.622161 21.6632 0.615561 21.6525 0.609206C21.6236 0.591361 21.594 0.575961 21.5635 0.562517C21.5539 0.558361 21.5449 0.553472 21.5351 0.549561C21.4958 0.534161 21.4552 0.521939 21.4136 0.513628C21.4061 0.512161 21.3982 0.511672 21.3907 0.510206C21.3559 0.504339 21.321 0.500917 21.2858 0.500183C21.2741 0.499939 21.2626 0.499939 21.2511 0.500183C21.2166 0.500917 21.1821 0.504339 21.1477 0.510206C21.1391 0.511672 21.1308 0.512161 21.1223 0.513872C21.0846 0.52145 21.0475 0.531717 21.0108 0.545406L0.475703 8.25104C0.200947 8.3542 0.014191 8.61111 0.000746481 8.90444C-0.0124535 9.19753 0.150347 9.47058 0.414592 9.59818L8.83694 13.6628L12.9013 22.0852C13.0243 22.3396 13.2817 22.5 13.5621 22.5C13.5733 22.5 13.5843 22.4997 13.5956 22.4993C13.8886 22.4858 14.1458 22.2991 14.249 22.0243L21.9548 1.48945C21.9685 1.45303 21.9785 1.41612 21.9861 1.37872C21.9881 1.3687 21.9888 1.35892 21.9903 1.3489C21.9957 1.31663 21.9988 1.28412 21.9998 1.25161ZM18.3544 3.10866L9.23637 12.2267L2.59577 9.02227L18.3544 3.10866ZM13.4777 19.9042L10.2733 13.2639L19.3916 4.14559L13.4777 19.9042Z" fill="white"/>
          </svg>
          <span>{{$t('send')}}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 mounted(){
    let height = window.innerHeight-378;
    const element = document.querySelector('.chatPage');
    const chat = document.querySelector('.chat');
    element.style.minHeight = height+'px';
    height -= 130;
    chat.style.height = height+'px';
    window.addEventListener('resize',function(){
      let height = window.innerHeight-378;
      const element = document.querySelector('.chatPage');
      const chat = document.querySelector('.chat');
      element.style.minHeight = height+'px';
      height -= 130;
      chat.style.height = height+'px';
    })
  },
}
</script>

<style>

</style>