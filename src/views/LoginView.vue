<template>
    <div>
        <button v-if="option === true" @click="handle_option"> Client </button>
        <button v-else @click="handle_option"> Company </button>
        
        <section v-if="option === true">

        <button @click="handle_toggle"> {{ toggle_state }} </button>
        <client-login v-if="logging_in === true"></client-login>
        <client-signup v-else></client-signup>
        </section>
    <section v-else> 
        
        <button @click="handle_toggle"> {{ toggle_state }} </button>
        <restaurant-login v-if="logging_in === true"></restaurant-login>
        <restaurant-signup v-else></restaurant-signup>
    </section>
    </div>
</template>

<script>
import ClientLogin from '@/components/Client/ClientLogin.vue'
import ClientSignup from '@/components/Client/ClientSignup.vue'
import RestaurantSignup from '@/components/Rest/RestaurantSignup.vue'
import RestaurantLogin from '@/components/Rest/RestaurantLogin.vue'
    export default {
        methods: {
            handle_option() {
                 this.option = !this.option
            },
            handle_toggle() {
                this.logging_in = !this.logging_in
            }
        },
data() {
    return {
    logging_in: true,
    toggle_state: `sign up instead`,
    option: true
    }
},


        components: {
            ClientLogin,
            ClientSignup,
            RestaurantSignup,
            RestaurantLogin
        }
    }
</script>

<style scoped>

</style>