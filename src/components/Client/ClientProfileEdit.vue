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
  mounted() {
    this.$root.$on(`client_info`, this.new_info);
  },
  methods: {
    patch_request: function () {
      let patched_data = {
        username: this.$refs["username"].value,
        email: this.$refs["email"].value,
        img_url: this.$refs["image_url"].value,
        bio: this.$refs["bio"].value,
        first_name: this.$refs["first_name"].value,
        last_name: this.$refs["last_name"].value,
        password: this.$refs["password"].value,
        username_input: this.$refs["username_input"].value
      };

      if (this.$refs["password"].value !== "") {
        patched_data["password"] = this.$refs["password"].value;
      }

      axios
        .patch("http://127.0.0.1:5000/api/client", patched_data, {
          headers: {
            Authorization: "Bearer " + cookies.get("token")
          }
        })
        .then(() => {
          this.$root.$emit("client_info", patched_data);
          this.successMessage = "Successful";
          this.errorMessage = "";
        })
        .catch(error => {
          error;
          this.successMessage = "";
          this.errorMessage = error.response.data;
        });
    }
  }
}
</script>

<style scoped></style>