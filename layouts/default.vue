<template>
    <div >
        <div class="fullHeaderCon" :class="mode">
            <Header />
        </div>
        <div class="space"></div>
        <div class="nuxt" :class="mode">
            <Nuxt />
        </div>
        <MobileBottomNavbar />
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import MobileBottomNavbar from '../components/MobileBottomNavbar'
import { mapGetters } from 'vuex';
export default {
    components: {Header, Footer, MobileBottomNavbar},
    created() {
        // this.$store.dispatch('cart/setProductsToCart')
        // const userToken = this.$store.getters['user/userToken']
        // if (userToken) this.$axios.setHeader('Authorization', `Bearer ${userToken}`)
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
            }
        }
        if(mode){
            mode = mode[1]
        }else{
            document.cookie = 'mode=dark';
            mode = 'dark'
        }
        this.$store.dispatch('mode/setMode', mode)
    },
    computed:{
        ...mapGetters({
            mode: 'mode/mode',
        }),
    },
    methods:{
    }
}
</script>