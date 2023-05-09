<template>
  <div>
    <section>
      <p>Sign up</p>
      <input type="email" placeholder="email" ref="email_in" />
      <input type="password" placeholder="password" ref="password_in" />
      <input type="text" placeholder="first name" ref="first_name" />
      <input type="text" placeholder="last name" ref="last_name" />
      <input type="text" placeholder="username" ref="username" />
      <input type="text" placeholder="image url" ref="profile_pic" />
      <button @click="attempt_signup">Sign Up</button>
    </section>
  </div>
</template>

<script>
import axios from 'axios' 
import cookies from 'vue-cookies'
export default {
 methods: {
 attempt_signup: function( ) {
  axios.request({
    url: `https://foodie.bymoen.codes/api/client`,
    headers: {
      'x-api-key': `rnA2v1qeHqSIjeL98kXk`
    },
    method: `POST`,
    data: {
      email: this.$refs[`email_in`].value,
      password: this.$refs[`password_in`].value,
      first_name: this.$refs[`first_name`].value,
      last_name:  this.$refs[`last_name`].value,
      username: this.$refs[`username`].value,
      image_url:  this.$refs[`profile_pic`].value
    }
  }).then((response) => {
    cookies.set('token' , response[`data`][`token`])
    cookies.set(`client_id` , response[`data`][`client_id`])
    this.$router.push(`/ClientHome`)
  }).catch((error) => {
    error;
  })
 }
  }
};
</script>

<style scoped>
</style>