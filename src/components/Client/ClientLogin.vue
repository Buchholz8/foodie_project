<template>
  <div>
    <p>login as a client</p>
    <input type="email" placeholder="email" ref="login_email" />
    <input type="password" placeholder="password" ref="login_password" />
    <button @click="client_login">Login</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    client_login: function () {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/client-login",
          method: "POST",
          data: {
            email: this.$refs[`login_email`].value,
            password: this.$refs[`login_password`].value,
          },
        })
        .then((response) => {
          cookies.set(`token`, response[`data`][0][`token`]);
          cookies.set('client_id' , response['data'][1][0][0])
          this.$router.push(`/ClientH`)
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