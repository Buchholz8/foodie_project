<template>
  <div>
    <p>please login as company</p>
    <input type="email" placeholder="email" ref="rest_email" />
    <input type="password" placeholder="password" ref="rest_password" />
    <button @click="attempt_login">login</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    attempt_login() {
      axios
        .request({
          url: "https://foodie.bymoen.codes/api/restaurant-login",
          headers: {
            "x-api-key": `rnA2v1qeHqSIjeL98kXk`,
          },
          method: `POST`,
          data: {
            email: this.$refs[`rest_email`],
            password: this.$refs[`rest_password`],
          },
        })
        .then((response) => {
          cookies.set(`token`, response[`data`][`token`]);
          cookies.get(`restaurant_id`, response[`data`][`restaurant_id`]);
          this.$router.push('/RestaurantHome')
        })
        .catch((error) => {
          error;
        });
    },
  },
};
</script>

<style scoped>
</style>