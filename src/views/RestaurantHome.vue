<template>
    <div>
        <rest-profile-info></rest-profile-info>
        <menu-item-create></menu-item-create>
    </div>
</template>

<script>
import cookies from 'vue-cookies'
import RestProfileInfo from '@/components/Rest/RestProfileInfo.vue'
import MenuItemCreate from '@/components/menu/MenuItemCreate.vue'
    export default {
  mounted() {
    if (cookies.get(`token`) === null) {
      this.$router.push(`/`);
    }
  },


        components: {
            RestProfileInfo,
            MenuItemCreate
        }
    }
</script>

<style scoped>

</style>