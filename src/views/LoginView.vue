<template>
  <div ref="main_body" class="container">
    <div class="nav-wrapper">
      <div class="nav-buttons">
        <a href="https://github.com/Buchholz8/foodie_project" target="_blank" class="pink-button">FrontEndGithub</a>
        <a href="https://github.com/Buchholz8/foodie_two_b" target="_blank" class="pink-button">BackEndGithub</a>
      </div>
    </div>
    <div class="button-wrapper">
      <button v-if="option === true" @click="handle_option" class="pink-button">Client</button>
      <button v-else @click="handle_option" class="pink-button">Company</button>
    </div>

    <section v-if="option === true">
      <div class="toggle-wrapper">
        <button @click="handle_toggle" class="pink-button">{{ toggle_state }}</button>
      </div>
      <div class="login-wrapper">
        <p class="login-title">Login</p>
        <client-login v-if="logging_in === true"></client-login>
        <client-signup v-else></client-signup>
      </div>
    </section>
    <section v-else>
      <div class="toggle-wrapper">
        <button @click="handle_toggle" class="pink-button">{{ toggle_state }}</button>
      </div>
      <div class="login-wrapper">
        <p class="login-title">Login</p>
        <restaurant-login v-if="logging_in === true"></restaurant-login>
        <restaurant-signup v-else></restaurant-signup>
      </div>
    </section>
  </div>
</template>

<script>
import ClientLogin from '@/components/Client/ClientLogin.vue'
import ClientSignup from '@/components/Client/ClientSignup.vue'
import RestaurantSignup from '@/components/Rest/RestaurantSignup.vue'
import RestaurantLogin from '@/components/Rest/RestaurantLogin.vue'
export default {
  methods: {
    handle_option() {
      this.option = !this.option
    },
    handle_toggle() {
      this.logging_in = !this.logging_in
    }
  },
  data() {
    return {
      logging_in: true,
      toggle_state: `sign up instead`,
      option: true
    }
  },
  components: {
    ClientLogin,
    ClientSignup,
    RestaurantSignup,
    RestaurantLogin
  }
}
</script>
<style scoped><style>
.container {
  background-color: lightgrey;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;
}

.nav-buttons {
  display: flex;
}

.nav-buttons button {
  background-color: pink;
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  border-radius: 5px;
}

.button-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pink-button {
  background-color: pink;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
}

.toggle-wrapper {
  display: flex;
  justify-content: center;
  padding: 10px;
}

.login-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.login-title {
  color: white;
}
</style>


