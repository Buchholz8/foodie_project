<template>
  <div>
    <input type="text" ref="desciption" placeholder="description">
    <input type="text" ref="image_url" placeholder="image">
    <input type="text" ref="name" placeholder="name">
    <input type="text" ref="price" placeholder="price">
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    handle_menu_create: function () {
      axios.request({
        url: "http://127.0.0.1:5000/api/client-order",
        method: "POST",
        data: {
          
        }

      });
    },
  },
};
</script>

<style scoped>
</style>