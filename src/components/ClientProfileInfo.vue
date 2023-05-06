<template>
  <div>

  </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
export default {
  mounted( ) {
    this.get_client_info();
    this.$root.$on(`client_info` , new_user_info => this.user_object = new_user_info)
  },
data() {
  return {
 user_object: undefined
  }
},
methods: {
get_client_info: function( ) {
  axios.request({
    url: 'https://foodie.bymoen.codes/api/client',
    headers: {
      'x-api-key': `rnA2v1qeHqSIjeL98kXk`
    },
    params: {
      client_id : cookies.get(`client_id`)
    }
  }).then((response) => {
    this.user_object = response[`data`][0]
  }).catch((error) =>{
    error
  })
}
}
};
</script>

<style scoped>
</style>