<template>
  <div class="page-header">
    <div v-if="user_object" class="user-info">
      <div class="user-left">
        <p class="user-handle">{{ user_object[0] }}</p>
        <p class="user-name">{{ user_object[4] }}</p>
      </div>
    </div>
    <img v-if="user_object" :src="user_object[1]" alt="" class="user-avatar">
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
          token: cookies.get('token')
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
.page-header {
  background-color: lightgray;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-left {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.user-handle {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.user-name {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
}

.user-avatar {
  height: 120px;
  width: 120px;
  border-radius: 50%;
}
</style>

