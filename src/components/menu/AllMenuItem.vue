<template>
  <div class="container">
    <div class="finalize-cart">
      <button @click="make_order">Finalize Cart</button>
    </div>
    <div class="card-grid">
      <div v-for="(item, index) in items" :key="'item-' + index" class="card">
        <div class="card-inner">
          <div class="card-header">
            <p class="item-number">Item #{{ item[0] }}</p>
            <p>Restaurant #{{ item[5] }}</p>
          </div>
          <div class="card-body">
            <p class="item-name">{{ item[1] }}</p>
            <p class="item-description">{{ item[2] }}</p>
            <p class="item-price">{{ item[3] }}</p>
            <img :src="item[4]" alt="" class="item-image">
          </div>
          <div class="card-footer">
            <button @click="saveDataToCookie(item, index)">Add to Cart</button>
          </div>
        </div>
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
          method: 'POST',
          data: {
            item_id: cookies.get('item_id'),
            token: cookies.get('token'),
            restaurant_id: cookies.get('restaurant_id'),
          },
        })
        .then((response) => {
          cookies.set('order_id', response.data[this.orderIndex][4]);
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    saveDataToCookie(item, index) {
      this.orderIndex = index;
      cookies.set('item_id', item[0], { expires: '1D' });
      cookies.set('restaurant_id', item[5], { expires: '1D' });
      // Do not set the order_id cookie here
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
  min-height: 100vh;
  padding: 20px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  justify-items: center;
}

.card {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 400px; /* Set a fixed height for the cards */
}

.card-inner {
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 10px;
}

.card-header {
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}

.item-number {
  font-weight: bold;
  margin-bottom: 5px;
}

.card-body {
  text-align: center;
}

.item-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.item-description {
  margin-bottom: 5px;
}

.item-price {
  margin-bottom: 10px;
}

.item-image {
  max-height: 120px;
  max-width: 120px;
  margin-bottom: 10px;
}

.card-footer {
  text-align: center;
  padding-top: 10px;
}

.finalize-cart {
  margin-top: 20px;
}

.finalize-cart button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
</style>
  
  
