<template>
    <div>
        <rest-profile-info></rest-profile-info>
    </div>
</template>

<script>
import cookies from 'vue-cookies'
import RestProfileInfo from '@/components/RestProfileInfo.vue'
    export default {
  mounted() {
    if (cookies.get(`token`) === null) {
      this.$router.push(`/`);
    }
  },


        components: {
            RestProfileInfo,
        }
    }
</script>

<style scoped>

</style>