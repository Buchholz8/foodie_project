<template>
    <div>
        <client-p-comp></client-p-comp>
    </div>
</template>

<script>
import cookies from 'vue-cookies'
import ClientPComp from '@/components/ClientPComp.vue'
    export default {

        mounted() {

if(cookies.get(`token`) === null){
    this.$router.push(`/LoginView`)
}
        },

        methods: {
            components: {
                ClientPComp
            }
        }
    }
</script>

<style scoped>

</style>