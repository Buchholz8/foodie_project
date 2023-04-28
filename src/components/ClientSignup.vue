<template>
    <div>
    <section>
        <p>login</p>
    <input type="email" placeholder="email" id="login_email">
    <input type="password" placeholder="password" id="login_password">
    <button @click="login_process">Log In</button>
    </section>
    </div>
</template>

<script>
import cookies from 'vue-cookies'
import axios from 'axios'
    export default {
        login_process: function( ) {
         axios.request({
          url: "https://foodie.bymoen.codes/api/client-login",
          headers: {
            "x-api-key": "rnA2v1qeHqSIjeL98kXk",
          },
          method: "POST",
          data: {
            email: this.$ref[`login_email`].value,
            password: this.$ref[`login_password`].value,
          },
        })
        .then((response) => {
          cookies.set(`token`, response[`data`][`token`]);
          cookies.set(`client_id`  , response[`data`][`client_id`])
          this.$router.push(`/views/ClientPFP.vue`)
        })
        .catch((error) => {
          error;
        });
    }
  }
</script>

<style scoped>

</style>