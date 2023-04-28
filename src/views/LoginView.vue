<template>
    <div>
        <login-component></login-component>
        <client-signup></client-signup>
    </div>
</template>

<script>
import LoginComponent from '@/components/LoginComponent.vue'
import ClientSignup from '@/components/ClientSignup.vue'
    export default {
        components: {
            LoginComponent,
            ClientSignup
        }
    }
</script>

<style scoped>

</style>