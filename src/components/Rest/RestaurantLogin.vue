<template>
  <div class="container">
    <p class="login-message">Please login as a company</p>
    <input type="email" placeholder="Email" ref="rest_email" class="input-field">
    <input type="password" placeholder="Password" ref="rest_password" class="input-field">
    <button @click="attempt_login" class="login-button">Login</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    attempt_login: function () {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/restaurant-login",
          method: "POST",
          data: {
            email: this.$refs[`rest_email`].value,
            password: this.$refs[`rest_password`].value,
          },
        })
        .then((response) => {
          cookies.set(`token`, response[`data`][0][`token`]);
          cookies.set('restaurant_id' , response['data'][1][0][0])
          this.$router.push(`/RestH`)
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

.login-message {
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

.login-button {
  background-color: lightgray;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.login-button:hover {
  background-color: pink;
  color: white;
}
</style>