<template>
  <div class="container signInPage">
    <div class="mobileResHeader">{{$t('profile')}} {{$t('edit')}}</div>
    <div class="signIn">
       <div class="signIn_main">
        <label class="loginImage">
          <img v-bind:src="$config.url+'/'+user.image" v-if="user.image" alt="">
          <img v-else src="~/assets/images/icons/defaultImageChoose.svg" alt="">
          <input type="file" @change="takeImage($event)">
          <span>{{$t('changeProfilePicture')}}</span>
        </label>

        <div class="title">{{$t('nameAndSurname')}}</div>
        <span class="input">
          <input type="text" v-model="userInfo.username">
        </span>
        <div class="title">{{$t('login')}}</div>
        <span class="input">
          <input type="text" v-model="userInfo.nickname">
        </span>
        
        <div class="title">{{$t('phoneNumber')}}</div>
        <span class="input signUpLastInput">
          <label class="input_input">
            <span style="width:100%">+993 {{user.user_phone}}</span>
            <input type="text" readonly style="width:0">
            <!-- <input type="number" pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==8) return false;" /> -->
          </label>
        </span>

        <button class="signButton" @click="changeData">
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
import {mapGetters} from 'vuex';
export default {
  data(){
    return{
      userInfo:{
        username:"",
        nickname:"",
      },
      image:[],
    }
  },
  mounted(){
    const height = window.innerHeight-298;
    const element = document.querySelector('.signIn');
    element.style.minHeight = height+'px';

    this.userInfo.username = this.user.username
    this.userInfo.nickname = this.user.nickname
  },
  computed:{
    ...mapGetters({
      user:'user/user'
    })
  },
  methods:{
    async changeData(){
      this.$nuxt.$emit("loading");
      try {
        const res = await this.$axios.patch('users/update-me',this.userInfo);
        this.$store.dispatch('user/setUserToken', res.data.token)
        if(res.status == 200){
          if(this.image.length > 0){
            const ress = await this.$axios.post('users/upload-image',this.image[0]);
            console.log(ress);
            this.$store.dispatch('user/setUserToken', res.data.token)
            this.$store.dispatch('user/setUser', res.data.data.user)
            this.$cookies.set('user', res.data.data.user)
            this.$cookies.set('user-token', res.data.token)
            document.location.reload()
          }else{
            this.$store.dispatch('user/setUserToken', res.data.token)
            this.$store.dispatch('user/setUser', res.data.data.user)
            this.$cookies.set('user', res.data.data.user)
            this.$cookies.set('user-token', res.data.token)
            document.location.reload()
          }
          this.$nuxt.$emit("loading");
        }
      } catch (error) {
        console.log(error);
      }
    },
    takeImage(event){
      const profileImages = document.querySelector(".loginImage img");
      if(event.target.files.length>0){
        profileImages.src = URL.createObjectURL(event.target.files[0]);
        const data = new FormData();
        data.append('img',event.target.files[0]);
        this.image.push(data);
      }
    },
  }
}
</script>

<style>

</style>