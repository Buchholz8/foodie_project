<template>
  <div>
    <section>
      <p>login</p>
      <input type="email" placeholder="email" id="login_email" />
      <input type="password" placeholder="password" id="login_password" />
      <button @click="login_process">Log In</button>
    </section>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
export default {
  signup_process: function () {
    axios
      .request({
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
        cookies.set(`client_id`, response[`data`][`client_id`]);
        this.$router.push("/ClientPFP");
      })
      .catch((error) => {
        error;
        this.message = `something went wrong`;
      });
  },
};
</script>

<style scoped>
</style>