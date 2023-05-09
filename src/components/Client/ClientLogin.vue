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
          url: "https://foodie.bymoen.codes/api/client-login",
          headers: {
            "x-api-key": `rnA2v1qeHqSIjeL98kXk`,
          },
          method: "POST",
          data: {
            email: this.$refs[`login_email`].value,
            password: this.$refs[`login_password`].value,
          },
        })
        .then((response) => {
          cookies.set(`token`, response[`data`][`token`]);
          cookies.set(`client_id`, response[`data`][`client_id`]);
          this.$router.push(`/ClientHome`)
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