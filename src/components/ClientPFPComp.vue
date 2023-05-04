<template>
  <div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
user_information: function( ) {
axios.request({
    url: 'https://foodie.bymoen.codes/api/client'
}).then((response) => {
    response;
}).catch((error) => {
    error;
})
    },
    data( ) {

    },
mounted() {

}
};
</script>

<style scoped>
</style>