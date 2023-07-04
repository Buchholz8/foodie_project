<template>
  <div>
    <button @click="handle_checkout" class="checkout-button">To Checkout</button>
    <div class="order-details">
      <p class="order-id">Order ID: {{ order_id }}</p>
      <p class="item-id">Item ID: {{ item_id }}</p>
    </div>
  </div>
</template>

<script>
import cookies from 'vue-cookies';

export default {
  data() {
    return {
      order_id: undefined,
      item_id: undefined
    };
  },
  mounted() {
    this.getClientOrders();
  },
  methods: {
    getClientOrders() {
      this.order_id = cookies.get('order_id');
      this.item_id = cookies.get('item_id'); 
    },
    handle_checkout() {
      this.$router.push(`/ClientO`);
    }
  }
};
</script>

<style scoped>
.checkout-button {
  background-color: pink;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.order-details {
  background-color: lightgray;
  padding: 10px;
  margin-top: 20px;
}

.order-id,
.item-id {
  color: white;
  font-size: 18px;
  margin-bottom: 5px;
}
</style>







