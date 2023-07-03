<template>
    <div>
      <button @click="logout_handler">Log Out</button>
        <rest-profile-info></rest-profile-info>
        <menu-item-create></menu-item-create>
    </div>
</template>

<script>
import cookies from 'vue-cookies'
import RestProfileInfo from '@/components/Rest/RestProfileInfo.vue'
import MenuItemCreate from '@/components/menu/MenuItemCreate.vue'
import axios from 'axios'
    export default {
      methods: {
        logout_handler() {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/restaurant-login",
          method: "DELETE",
          data: {
            token_input : cookies.get(`token`)
          }
        })
        .then((response) => {
          response;
          cookies.remove(`token`)
          this.$router.push(`/`)
        })
        .catch((error) => {
          error;
        });
        }
      },
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