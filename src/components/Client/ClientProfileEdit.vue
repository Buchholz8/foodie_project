<template>
  <div class="container">
    <p class="change-info-message">Want to change your information?</p>
    <input type="text" ref="email" placeholder="Email" class="input-field">
    <input type="text" ref="username" placeholder="Username" class="input-field">
    <input type="text" ref="first_name" placeholder="First Name" class="input-field">
    <input type="text" ref="last_name" placeholder="Last Name" class="input-field">
    <input type="text" ref="image_url" placeholder="Image URL" class="input-field">
    <input type="text" ref="bio" placeholder="Bio" class="input-field">
    <input type="password" placeholder="Password" ref="password" class="input-field">
    <button @click="patched_data" class="save-button">Save Updates</button>
    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
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

<style scoped>
.container {
  background-color: lightgray;
  padding: 20px;
  min-height: 100vh;
}

.change-info-message {
  color: black;
}

.input-field {
  background-color: lightgray;
  color: black;
  padding: 10px;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 10px;
  width: 100%;
}

.save-button {
  background-color: lightgray;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.save-button:hover {
  background-color: pink;
  color: white;
}

.success-message,
.error-message {
  color: black;
  margin-top: 10px;
}
</style>