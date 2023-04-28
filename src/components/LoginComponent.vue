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
    <p> {{message}} </p>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
    data() {
        return{
            message: undefined
        }
    },
  methods: {
    signup_process: function () {
      axios.request({
          url: "https://foodie.bymoen.codes/api/client",
          headers: {
            "x-api-key": "rnA2v1qeHqSIjeL98kXk",
          },
          method: "POST",
          data: {
            email: this.$ref[`email`].value,
            password: this.$ref[`password`].value,
            first_name: this.$ref[`first_name`].value,
            last_name: this.$ref[`last_name`].value,
            image_url: this.$ref[`profile_pic`].value,
            username: this.$ref[`username`].value,
          },
        })
        .then((response) => {
          cookies.set(`token`, response[`data`][`token`]);
          cookies.set(`client_id`  , response[`data`][`client_id`])
        })
        .catch((error) => {
            error;
          this.message = `something went wrong`
        });
    },
}
}
</script>

<style scoped>
</style>