<template>
    <div>
      <button @click="make_order">Shopping Cart</button>
      <div v-for="(item, index) in items" :key="'item-' + index">
        <div>
          <p>item #{{ item[0] }}</p>
          <p>restaurant #{{ item[5] }}</p>
          <p>{{ item[1] }}</p>
          <p>{{ item[2] }}</p>
          <p>{{ item[3] }}</p>
          <img :src="item[4]" alt="">
          <button @click="saveDataToCookie(item, index)">Add to Cart</button>
        </div>
      </div>
      <single-menu-item></single-menu-item>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import SingleMenuItem from '@/components/menu/SingleMenuItem.vue';
  import cookies from 'vue-cookies';
  
  export default {
    components: {
      SingleMenuItem,
    },
    data() {
      return {
        items: [],
      };
    },
    mounted() {
      this.get_menu();
    },
    methods: {
      get_menu() {
        axios
          .request({
            url: 'http://127.0.0.1:5000/api/menu',
            method: 'GET',
          })
          .then((response) => {
            this.items = response.data;
          })
          .catch((error) => {
            console.error(error);
          });
      },
      make_order() {
          axios
            .request({
              url: 'http://127.0.0.1:5000/api/client-order',
            method: "POST",
            data: {
              item_id : cookies.get('item_id'),
              token: cookies.get('token'),
              restaurant_id : cookies.get('restaurant_id')
            }
          })
            .then((response) => {
              cookies.set('order_id' , response.data[0][4])
            })
            .catch((error) => {
              error;
            });
      },
      saveDataToCookie(item) {
        cookies.set('item_id', item[0], { expires: '1D' });
        cookies.set('restaurant_id', item[5], { expires: '1D' });
        cookies.set('order_id' , item[6], { expires: '1D' })
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
  
  
