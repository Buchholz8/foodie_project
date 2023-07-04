<template>
  <div class="container">
    <p class="signup-message">Sign up as a company</p>
    <input type="email" placeholder="Email" ref="res_email" class="input-field">
    <input type="text" placeholder="Name" ref="res_name" class="input-field">
    <input type="text" placeholder="Address" ref="res_address" class="input-field">
    <input type="text" placeholder="Phone Number" ref="res_phone" class="input-field">
    <input type="text" placeholder="Bio" ref="res_bio" class="input-field">
    <input type="text" placeholder="City" ref="res_city" class="input-field">
    <input type="url" placeholder="Profile" ref="res_profile" class="input-field">
    <input type="url" placeholder="Banner" ref="res_banner" class="input-field">
    <input type="password" placeholder="Password" ref="res_password" class="input-field">
    <button @click="company_signup" class="signup-button">Sign Up</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    company_signup: function () {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/restaurant",
          method: `POST`,
          data: {
            name: this.$refs[`res_name`].value,
            address: this.$refs[`res_address`].value,
            phone_number: this.$refs[`res_phone`].value,
            bio: this.$refs[`res_bio`].value,
            password: this.$refs[`res_password`].value,
            email: this.$refs[`res_email`].value,
            city: this.$refs[`res_city`].value,
            profile_url: this.$refs[`res_profile`].value,
            banner_url: this.$refs[`res_banner`].value,
          },
        })
        .then((response) => {
          cookies.set(`token`, response[`data`][`token`]);
          cookies.set(`restaurant_id`, response[`data`][`restaurant_id`]);
          this.$router.push(`/RestH`);
        })
        .catch((error) => {
          error;
        });
    },
  },
};
</script>

<style scoped>
.container {
  background-color: lightgray;
  padding: 20px;
  min-height: 100vh;
}

.signup-message {
  color: black;
}

.input-field {
  background-color: lightgray;
  color: black;
  padding: 10px;
  border: 1px solid black;
  margin-bottom: 10px;
  width: 100%;
}

.signup-button {
  background-color: lightgray;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.signup-button:hover {
  background-color: pink;
  color: white;
}
</style>