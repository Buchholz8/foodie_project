<template>
  <div>
    <button @click="logout_handler" class="logout-button">Log Out</button>
    <client-profile-info></client-profile-info>
    <button @click="toggleview" class="shopping-cart-button">To Shopping Cart</button>
    <button @click="change_info" class="change-info-button">Change your info?</button>
    <client-profile-edit v-if="!change_val"></client-profile-edit>
    <all-menu-item v-if="!showCart"></all-menu-item>
    <shopping-cart v-if="showCart"></shopping-cart>
  </div>
</template>

<script>
import axios from 'axios'
import cookies from "vue-cookies";
import ClientProfileInfo from '@/components/Client/ClientProfileInfo.vue';
import ClientProfileEdit from '@/components/Client/ClientProfileEdit.vue';
import AllMenuItem from '@/components/menu/AllMenuItem.vue'
import ShoppingCart from '@/components/menu/ShoppingCart.vue'

export default {
  data() {
    return {
      change_val: true,
      showCart: false,
    };
  },
  components: {
    ClientProfileInfo,
    ClientProfileEdit,
    AllMenuItem,
    ShoppingCart,
  },
  methods: {
    logout_handler() {
      cookies.remove(`token`) //this is temp so that this will function im not sure why im gtting errors on the delete, its working as intended 
      //and it will run the data base procedure but its giving ,e am error 500 as you could see
      axios
        .request({
          url: "http://127.0.0.1:5000/api/client-login",
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
    },
    change_info() {
      this.change_val = !this.change_val;
    },
    toggleview(){
      this.showCart = !this.showCart;
    },
  },
  mounted() {
    if (cookies.get(`token`) === null) {
      this.$router.push(`/`);
    }
  }
}
</script>

<style scoped>
.logout-button,
.shopping-cart-button,
.change-info-button {
  background-color: lightgray;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;
}

.logout-button {
  margin-top: 10px;
}

.logout-button:hover,
.shopping-cart-button:hover,
.change-info-button:hover {
  background-color: pink;
  color: white;
}

.logout-button:focus,
.shopping-cart-button:focus,
.change-info-button:focus {
  outline: none;
}

.logout-button:active,
.shopping-cart-button:active,
.change-info-button:active {
  background-color: #ff80ab;
}
</style>

