<template>
  <div>
    <p>want to change your information?</p>
    <input type="text" ref="email" placeholder="email">
    <input type="text" ref="username" placeholder="username">
    <input type="text" ref="first_name" placeholder="first name">
    <input type="text" ref="last_name" placeholder="last name">
    <input type="text" ref="image_url" placeholder="img">
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
    },
    patch_request: function () {
      let patched_data = {
        email: this.$refs[`email`].value,
        username: this.$refs[`username`].value,
        first_name: this.$refs[`first_name`].value,
        last_name: this.$refs[`last_name`].value,
        image_url: this.$refs[`image_url`].value,
      };
      if (this.$refs[`password`].value !== ``) {
        patched_data[`password`] = this.$refs[`password`].value;
      }
      axios
        .request({
          url: "https://foodie.bymoen.codes/api/client",
          method: `PATCH`,
          headers: {
            "x-api-key": `rnA2v1qeHqSIjeL98kXk`,
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