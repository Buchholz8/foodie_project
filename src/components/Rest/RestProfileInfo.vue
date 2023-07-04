<template>
  <div class="container">
    <button @click="toggleForm" class="toggle-button">Toggle Form</button>
    <div v-if="showForm">
      <p class="update-message">Want to update your restaurant information?</p>
      <input type="text" ref="name" placeholder="Restaurant Name" class="input-field">
      <input type="text" ref="address" placeholder="Address" class="input-field">
      <input type="text" ref="phone_number" placeholder="Phone Number" class="input-field">
      <input type="text" ref="bio" placeholder="Bio" class="input-field">
      <input type="text" ref="password" placeholder="Password" class="input-field">
      <input type="text" ref="email" placeholder="Email" class="input-field">
      <input type="text" ref="city" placeholder="City" class="input-field">
      <input type="text" ref="profile_url" placeholder="Profile URL" class="input-field">
      <input type="text" ref="banner_url" placeholder="Banner URL" class="input-field">
      <p>Please enter your password</p>
      <input type="password" placeholder="Password" ref="password" class="input-field" />
      <button @click="patchRestaurant" class="save-button">Save Updates</button>
      <p v-if="successMessage" class="message success">{{ successMessage }}</p>
      <p v-if="errorMessage" class="message error">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";

export default {
  mounted() {
    this.get_restaurant_info()
  },
  data() {
    return {
      user_object: undefined,
      showForm: true,
      successMessage: "",
      errorMessage: "",
    };
  },
  methods: {
    get_restaurant_info() {
      axios.request({
        url: 'http://127.0.0.1:5000/api/restaurant',
        method: 'GET',
        params: {
          restaurant_id: cookies.get('restaurant_id')
        }
      }).then((response) => {
        this.user_object = response.data[0]
      }).catch((error) => {
        console.error(error)
      })},
    toggleForm() {
      this.showForm = !this.showForm;
    },
    patchRestaurant() {
      axios
        .request({
          url:"http://127.0.0.1:5000/api/restaurant",
          method: "PATCH",
          data: {
            name: this.$refs.name.value,
        address: this.$refs.address.value,
        phone_number: this.$refs.phone_number.value,
        bio: this.$refs.bio.value,
        password: this.$refs.password.value,
        email: this.$refs.email.value,
        city: this.$refs.city.value,
        profile_url: this.$refs.profile_url.value,
        banner_url: this.$refs.banner_url.value,
          }
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

<style scoped>
.container {
  background-color: lightgray;
  padding: 20px;
}

.update-message {
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

.message {
  margin-top: 10px;
  font-size: 14px;
}

.success {
  color: green;
}

.error {
  color: red;
}
</style>