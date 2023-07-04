<template>
    <div>
        <nav>
        <a href="https://github.com/Buchholz8/foodie_project">FrontEndGithub</a>
        <a href="https://github.com/Buchholz8/foodie_two_b">BackEndGithub</a>  
        </nav>
        
        <button v-if="option === true" @click="handle_option"> Client </button>
        <button v-else @click="handle_option"> Company </button>

        <section v-if="option === true">

            <button @click="handle_toggle"> {{ toggle_state }} </button>
            <client-login v-if="logging_in === true"></client-login>
            <client-signup v-else></client-signup>
        </section>
        <section v-else>

            <button @click="handle_toggle"> {{ toggle_state }} </button>
            <restaurant-login v-if="logging_in === true"></restaurant-login>
            <restaurant-signup v-else></restaurant-signup>
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

<style scoped>
  body {
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }

  nav {
    background-color: lightgrey;
    padding: 10px;
    margin-bottom: 20px;
  }

  nav a {
    display: inline-block;
    padding: 8px 16px;
    text-decoration: none;
    color: #333;
    font-weight: bold;
    border-radius: 4px;
    margin-right: 10px;
  }

  nav a:hover {
    background-color: #333;
    color: #fff;
  }

  button {
    padding: 8px 16px;
    background-color: lightgreen;
    color: white;
    border: none;
    border-radius: 4px;
    margin-bottom: 10px;
    cursor: pointer;
  }

  button:hover {
    background-color: #25a820;
  }

  section {
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
</style>
