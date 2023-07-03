<template>
  <div>
    <p>Want to update your restaurant information?</p>
    <input type="text" ref="name" placeholder="Restaurant Name">
    <input type="text" ref="address" placeholder="Address">
    <input type="text" ref="phone_number" placeholder="Phone Number">
    <input type="text" ref="bio" placeholder="Bio">
    <input type="text" ref="password" placeholder="Password">
    <input type="text" ref="email" placeholder="Email">
    <input type="text" ref="city" placeholder="City">
    <input type="text" ref="profile_url" placeholder="Profile URL">
    <input type="text" ref="banner_url" placeholder="Banner URL">
    <p>Please enter your password</p>
    <input type="password" placeholder="Password" ref="password" />
    <button @click="patchRestaurant">Save Updates</button>
    <p v-if="successMessage">{{ successMessage }}</p>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";

export default {
  data() {
    return {
      successMessage: "",
      errorMessage: "",
    };
  },
  methods: {
    patchRestaurant() {
      const patchedData = {
        name: this.$refs.name.value,
        address: this.$refs.address.value,
        phone_number: this.$refs.phone_number.value,
        bio: this.$refs.bio.value,
        password: this.$refs.password.value,
        email: this.$refs.email.value,
        city: this.$refs.city.value,
        profile_url: this.$refs.profile_url.value,
        banner_url: this.$refs.banner_url.value,
      };

      axios
        .patch("http://127.0.0.1:5000/api/restaurant", patchedData, {
          headers: {
            Authorization: `Bearer ${cookies.get("token")}`,
          },
        })
        .then((response) => {
          response;
          this.successMessage = "Successful";
          this.errorMessage = "";
        })
        .catch((error) => {
          this.errorMessage = error.response.data;
        });
    },
  },
}
</script>

<style scoped></style>