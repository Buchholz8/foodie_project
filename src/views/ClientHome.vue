<template>
  <div>
    <button @click="logout_handler">LogOut</button>
    <client-profile-info></client-profile-info>
    <button @click="toggleview">To ShoppingCart</button>
    <button @click="change_info">Change your info?</button>
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
      axios
        .request({
          url: "http://127.0.0.1:5000/api/client-login",
          method: "DELETE",
          data: {
            token : cookies.get(`token`)
          }
        })
        .then((response) => {
          response;
          cookies.delete(`token`)
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
</style>

