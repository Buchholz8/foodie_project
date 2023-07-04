<template>
  <div class="container">
    <input v-model="name" type="text" placeholder="name" class="input-field">
    <input v-model="price" type="text" placeholder="price" class="input-field">
    <input v-model="description" type="text" placeholder="description" class="input-field">
    <input v-model="img_url" type="text" placeholder="image" class="input-field">
    <button @click="handle_menu_create">Create Item</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    handle_menu_create: function () {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/menu",
          method: "POST",
          data: {
            name: this.name,
            price: this.price,
            description: this.description,
            img_url: this.img_url,
            restaurant_id: cookies.get('restaurant_id'),
          }
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
.container {
  background-color: lightgray;
  padding: 20px;
}

.input-field {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 4px;
}
</style>