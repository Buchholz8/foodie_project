<template>
  <div>
    <p>want to change your information?</p>
    <input type="text" ref="email" placeholder="email">
    <input type="text" ref="username" placeholder="username">
    <input type="text" ref="first_name" placeholder="first name">
    <input type="text" ref="last_name" placeholder="last name">
    <input type="text" ref="image_url" placeholder="img">
    <input type="text" ref="bio" placeholder="bio">
    <input type="text" ref="password" placeholder="password">
    <input type="text" ref="username" placeholder="username">
    <p>please enter your password</p>
    <input type="password" placeholder="password" ref="password" />
    <button @click="patched_data">Save Updates</button>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
export default {
  mounted() {
    this.$root.$on(`client_info`, this.new_info);
  },
  methods: {
    new_info: function (user_info) {
      this.$refs[`email`].value = user_info[`email`];
      this.$refs[`username`].value = user_info[`username`];
      this.$refs[`first_name`].value = user_info[`first_name`];
      this.$refs[`last_name`].value = user_info[`last_name`];
      this.$refs[`image_url`].value = user_info[`image_url`];
      this.$refs[`bio`].value = user_info[`bio`];
      this.$refs[`password`].value = user_info[`password`];
      this.$refs[`username`].value = user_info[`username`];
    },
    patch_request: function () {
      let patched_data = {
        username: this.$refs[`username`].value,
        email: this.$refs[`email`].value,
        image_url: this.$refs[`image_url`].value,
        bio: this.$refs[`bio`].value,
        first_name: this.$refs[`first_name`].value,
        last_name: this.$refs[`last_name`].value,
        password: this.$refs[`password`].value,
        username_input: this.$refs[`username`].value
      };
      if (this.$refs[`password`].value !== ``) {
        patched_data[`password`] = this.$refs[`password`].value;
      }
      axios
        .request({
          url: "http://127.0.0.1:5000/api/client",
          method: `PATCH`,
          data: {
            token: cookies.get(`token`),
          },
        })
        .then(() => {
          this.$root.$emit(`client_info`, patched_data);
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