<template>
    <div>
        <div class="fullHeaderCon">
            <Header />
        </div>
        <div class="space"></div>
        <Nuxt />
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
// import { mapGetters, mapActions } from 'vuex';
export default {
    components: {Header, Footer},
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
    },
    computed:{
        // ...mapGetters({
        //     // search: 'search/search',
        // }),
    },
}
</script>