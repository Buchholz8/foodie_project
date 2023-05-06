<template>
    <div>
        <client-profile-info></client-profile-info>
        <client-profile-edit></client-profile-edit>
    </div>
</template>

<script>
import cookies from 'vue-cookies'
import ClientProfileInfo from '@/components/ClientProfileInfo.vue'
import ClientProfileEdit from '@/components/ClientProfileEdit.vue'
    export default {

        mounted() {

if(cookies.get(`token`) === null){
    this.$router.push(`/`)
}
        },

            components: {
                ClientProfileInfo,
                ClientProfileEdit
            }
    }
</script>

<style scoped>

</style>