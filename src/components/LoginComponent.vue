<template>
  <div>
    <section>
      <h2>Please login or Sign up</h2>
      <p>Sign up</p>
      <input type="email" placeholder="email" ref="email" />
      <input type="password" placeholder="password" ref="password" />
      <input type="text" placeholder="first name" ref="first_name" />
      <input type="text" placeholder="last name" ref="last_name" />
      <input type="text" placeholder="username" ref="username" />
      <input type="text" placeholder="image url" ref="profile_pic" />
      <button @click="signup_process">Sign Up</button>
      <p>{{ message }}</p>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  data() {
    return {
      message: undefined,
    };
  },
  methods: {
    login_process: function () {
      axios
        .request({
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
          cookies.set(`client_id`, response[`data`][`client_id`]);
          this.$router.push(`/views/ClientPFP.vue`);
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