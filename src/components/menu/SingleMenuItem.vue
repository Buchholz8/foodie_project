<template>
    <div>
      <input type="text" v-model="restaurantSearch" placeholder="Enter restaurant name" />
      <button @click="searchRestaurants">Search</button>
  
      <div v-for="restaurant in restaurants" :key="restaurant.id">
        <img :src="restaurant.image_url" alt="Restaurant Image" />
        <p>{{ restaurant.name }}</p>
        <p>{{ restaurant.address }}</p>
      </div>
    </div>
  </template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      restaurantSearch: '',
      restaurants: [],
    };
  },
  methods: {
    searchRestaurants() {
      axios
        .get('/api/restaurants', {
          params: {
            name_input: this.restaurantSearch,
          },
        })
        .then(response => {
          this.restaurants = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
img {
  max-height: 120px;
  max-width: 120px;
}
</style>
