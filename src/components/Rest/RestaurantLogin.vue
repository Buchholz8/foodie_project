<template>
  <div>
    <p>please login as company</p>
    <input type="email" placeholder="email" ref="rest_email" />
    <input type="password" placeholder="password" ref="rest_password" />
    <button @click="attempt_login">Login</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    attempt_login: function () {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/restaurant-login",
          method: "POST",
          data: {
            email: this.$refs[`rest_email`].value,
            password: this.$refs[`rest_password`].value,
          },
        })
        .then((response) => {
          cookies.set(`token`, response[`data`][0][`token`]);
          cookies.set('restaurant_id' , response['data'][1][0][0])
          this.$router.push(`/RestH`)
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