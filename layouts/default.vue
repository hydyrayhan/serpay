<template>
    <div >
        <div class="fullHeaderCon" :class="mode">
            <Header />
        </div>
        <div class="space"></div>
        <div class="nuxt" :class="mode">
            <Nuxt @loading="loadFunc()"/>
        </div>
        <MobileBottomNavbar />
        <Footer />
        <Loading v-show="load"/>
    </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import MobileBottomNavbar from '../components/MobileBottomNavbar'
import { mapGetters } from 'vuex';
export default {
    components: {Header, Footer, MobileBottomNavbar, Loading},
    data(){
        return{
            load : false
        }
    },
    created() {
        // this.$store.dispatch('cart/setProductsToCart')
        const userToken = this.$store.getters['user/userToken']
        if (userToken) this.$axios.setHeader('Authorization', `Bearer ${userToken}`)
        this.$nuxt.$on('loading', () => this.loadFunc())
    },
    mounted() {
        // let cartPerfumes = localStorage.getItem('cart-products')
        // if (!cartPerfumes) cartPerfumes = []
        // else cartPerfumes = JSON.parse(cartPerfumes)
        // this.$store.dispatch('cart/setProductsToCart', cartPerfumes)

        const datas = document.cookie.split(' ')
        let mode;
        for(let i = 0; i<datas.length; i++){
            if(datas[i][0] == 'm'){
                mode = datas[i].split('=');
                break
            }
        }
        if(mode){
            mode = mode[1]
        }else{
            document.cookie = 'mode=light';
            mode = 'light'
        }
        this.$store.dispatch('mode/setMode', mode)
    },
    computed:{
        ...mapGetters({
            mode: 'mode/mode',
        }),
    },
    methods:{
        loadFunc(){
            this.load = !this.load
        }
    }
}
</script>