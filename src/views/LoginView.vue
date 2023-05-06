<template>
    <div>
        <client-login-component></client-login-component>
        <client-signup></client-signup>
        <restaurant-login></restaurant-login>
        <restaurant-signup></restaurant-signup>
    </div>
</template>

<script>
import ClientLoginComponent from '@/components/ClientLoginComponent.vue'
import ClientSignup from '@/components/ClientSignup.vue'
import RestaurantSignup from '@/components/RestaurantSignup.vue'
import RestaurantLogin from '@/components/RestaurantLogin.vue'
    export default {
        components: {
            ClientLoginComponent,
            ClientSignup,
            RestaurantSignup,
            RestaurantLogin
        }
    }
</script>

<style scoped>

</style>