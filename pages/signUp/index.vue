<template>
  <div class="container signInPage">
    <div class="mobileResHeader">{{$t('signUp')}}</div>
    <div class="signIn">
      <div class="signIn_header">
        <nuxt-link to="signIn" class="signIn_header_signIn" style="border-right:none">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15" stroke="#A6A6A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 17L15 12L10 7" stroke="#A6A6A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15 12H3" stroke="#A6A6A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>{{$t('signIn')}}</span>
        </nuxt-link>
        <nuxt-link to="/signUp" class="signUp active">
          <span>{{$t('signUp')}}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#A6A6A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="#A6A6A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20 8V14" stroke="#A6A6A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M23 11H17" stroke="#A6A6A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </nuxt-link>
      </div>

      <div class="signIn_main">
        <div class="image">
          <div class="image_icon">
            <img src="~/assets/images/icons/defaultImageChoose.svg" alt="">
          </div>
          <label for="imageChoose">
            <span>{{$t('choosePicture')}}</span>
            <input type="file" name="myImage" accept="image/png, image/gif, image/jpeg" id="imageChoose" @change="takeImage($event)"/>
          </label>
        </div>
        <div class="title">{{$t('giveId')}}</div>
        <span class="input"><input type="text" v-model="newUser.nickname"></span>

        <div class="title">{{$t('phoneNumber')}}</div>
        <span class="input">
          <label class="input_input">
            <span>+993</span>
            <input type="number" pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==8) return false;" v-model="phoneNumber" />
          </label>
        </span>
        <div class="title">{{$t('givePassword')}}</div>
        <span class="input">
          <input type="password" v-model="newUser.password">
          <svg @click="password(2)" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#666883" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#666883" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>

        <div class="title">{{$t('giveConfirmPass')}}</div>
        <span class="input signUpLastInputt">
          <input type="password" v-model="newUser.passwordConfirm">
          <svg @click="password(3)" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#666883" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#666883" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <div class="error signUpLastInput" style="color:red;display:none">{{$t('passwordLetterMore6')}}</div>

        <button class="signButton" @click="sendData">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20 8V14" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M23 11H17" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>{{$t('signUp')}}</span>
        </button>
      </div>
    </div>
    <div class="confirmBack" v-if="confirmPopup" @click="confirmPopup = false; userCode = ''"></div>
    <div class="confirmPopup" v-if="confirmPopup">
      <div class="confirmPopup_title">{{$t('giveCode')}}</div>
      <input type="text" class="confirmPopup_input" v-model="userCode">
      <button class="confirmPopup_button" @click="codeCheck">{{$t('signUp')}}</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      newUser:{
        nickname:"",
        user_checked_phone:"",
        password:"",
        passwordConfirm:"",
      },
      confirmPopup:false,
      code:'',
      userCode:'',
      image:[],
      phoneNumber:'',
    }
  },
  methods:{
    password(id){
      const el = document.querySelectorAll('.input input')[id];
      const type = el.getAttribute('type')
      if(type == 'password'){
        el.setAttribute('type','text');
      }else{
        el.setAttribute('type','password');
      }
    },
    async sendData(){
      if(this.newUser.password != this.newUser.passwordConfirm){
        document.querySelector(".signUpLastInputt").style.border = '1px solid red'; 
        this.newUser.passwordConfirm = ''
      }else if(!this.newUser.nickname || !this.phoneNumber || !this.newUser.password){
        this.$toast.success(this.$t("fillFreeSpace"));
      }else if(this.newUser.password.length<6){
        document.querySelector(".error").style.display = 'block';
      }else{
        this.$nuxt.$emit("loading");
        try {
          const res = await this.$axios.post("/users/signup",{user_phone:this.newUser.user_checked_phone})
          console.log(res.data.id);
          if(res.status == 200){
            this.confirmPopup = true;
            this.$nuxt.$emit("loading");
            this.code = res.data.id;
          }
        } catch ({response}) {
          console.log(response.data.message);
          this.$toast.success(this.$t("numberAlreadyHas"));
          this.$nuxt.$emit("loading");
        }
      }
    },
    async codeCheck(){
      if(this.userCode === this.code){
        this.$nuxt.$emit("loading");
        try {
          this.newUser.user_checked_phone = '+993'+this.phoneNumber;
          const data = await this.$axios.post("/users/signup",this.newUser)
          if(data.status==201){
            if(this.image.length>0){
              this.$store.dispatch('user/setUserToken', data.data.token)
              const dataa = await this.$axios.post("/users/upload-image",this.image[0]);
              if(dataa.status == 201){
                this.$store.dispatch('user/setUser', dataa.data)
                this.$cookies.set('user', dataa.data)
                this.$cookies.set('user-token', data.data.token)
                this.$nuxt.$emit("loading");
                this.$store.dispatch('discountProducts/fetchDiscounts',{globalUser:'users',limit:5,offset:0})
                this.$store.dispatch('newProducts/fetchNews',{globalUser:'users',limit:5,offset:0})
                this.$store.dispatch('recommendedProducts/fetchRecommended',{globalUser:'users',limit:30,offset:0})
                this.$router.push('/')
              }
            }else{
              this.$nuxt.$emit("loading");
              this.$store.dispatch('user/setUserToken', data.data.token)
              this.$store.dispatch('user/setUser', data.data.data.user)
              this.$store.dispatch('discountProducts/fetchDiscounts',{globalUser:'users',limit:5,offset:0})
              this.$store.dispatch('newProducts/fetchNews',{globalUser:'users',limit:5,offset:0})
              this.$store.dispatch('recommendedProducts/fetchRecommended',{globalUser:'users',limit:30,offset:0})
              this.$cookies.set('user', data.data.data.user)
              this.$cookies.set('user-token', data.data.token)
              this.$router.push('/');
            }
          }
        } catch ({response}) {
          console.log(response.data.message)
          this.$toast.success(this.$t("nameAlreadyHas"));
          this.$nuxt.$emit("loading");
        }
        this.confirmPopup = false;
        this.userCode = '';
      }
    },
    takeImage(event){
      const profileImages = document.querySelector(".image_icon img");
      if(event.target.files.length>0){
        profileImages.src = URL.createObjectURL(event.target.files[0]);
        const data = new FormData();
        data.append('img',event.target.files[0]);
        this.image.push(data);
      }
    },
  },
  mounted(){
    const height = window.innerHeight-398;
    const element = document.querySelector('.signIn');
    element.style.minHeight = height+'px';
  },
}
</script>

<style>

</style>