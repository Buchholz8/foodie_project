<template>
  <div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
mounted( ) {
  axios.request({
    url: 'https://foodie.bymoen.codes/api/validate',
    headers: {
      'x-api-key': `rnA2v1qeHqSIjeL98kXk`
    }
  }).then((response) => {
    response
  }).catch((error) => {
    error
  })
}
};
</script>

<style scoped>
</style>