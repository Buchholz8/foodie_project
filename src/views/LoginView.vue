<template>
    <div>
        <client-login-component></client-login-component>
        <client-signup></client-signup>
    </div>
</template>

<script>
import ClientLoginComponent from '@/components/ClientLoginComponent.vue'
import ClientSignup from '@/components/ClientSignup.vue'
    export default {
        components: {
            ClientLoginComponent,
            ClientSignup
        }
    }
</script>

<style scoped>

</style>