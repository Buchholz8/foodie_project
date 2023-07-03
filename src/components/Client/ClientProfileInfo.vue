<template>
  <div>
    <p>hello world</p>
    <p v-if="user_object">{{ user_object[4] }}</p>
    <p v-if="user_object">{{ user_object[0] }}</p>
    <img v-if="user_object" :src="user_object[1]" alt="">
  </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

export default {
  mounted() {
    this.get_client_info();
    this.$root.$on('client_info', new_user_info => this.user_object = new_user_info)
  },
  data() {
    return {
      user_object: undefined
    }
  },
  methods: {
    get_client_info() {
      axios.request({
        url: 'http://127.0.0.1:5000/api/client',
        method: 'GET',
        params: {
          client_id: cookies.get('client_id')
        }
      }).then((response) => {
        this.user_object = response.data[0]
      }).catch((error) => {
        console.error(error)
      })
    }
  }
};
</script>

<style scoped>
img {
  max-height: 120px;
  max-width: 120px;
}
</style>
