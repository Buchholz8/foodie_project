<template>
  <div class="container">
    <button @click="logout_handler" class="logout-button">Log Out</button>
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
        logout_handler() { //same issue as the other delete getting error 500 even though the code is being executed in the data base
          cookies.remove(`token`)
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
.container {
  background-color: lightgray;
  padding: 20px;
  min-height: 30vh;
}

.logout-button {
  background-color: lightgray;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.logout-button:hover {
  background-color: pink;
  color: white;
}
</style>