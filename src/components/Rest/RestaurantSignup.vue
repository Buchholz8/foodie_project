<template>
  <div>
    <p>sign up as a company</p>
    <input type="email" placeholder="email" ref="res_email" />
    <input type="text" placeholder="name" ref="res_name" />
    <input type="text" placeholder="address" ref="res_address" />
    <input type="text" placeholder="phone number" ref="res_phone" />
    <input type="text" placeholder="bio" ref="res_bio" />
    <input type="text" placeholder="city" ref="res_city" />
    <input type="url" placeholder="profile" ref="res_profile" />
    <input type="url" placeholder="banner" ref="res_banner" />
    <input type="password" placeholder="password" ref="res_password" />
    <button @click="company_signup">Sign Up</button>
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

<style scoped></style>