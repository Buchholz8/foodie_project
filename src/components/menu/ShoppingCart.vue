<template>
  <div>
    <button @click="handle_checkout">To Checkout</button>
    <div>
      <p>Order ID: {{ order_id }}</p>
      <p>Item ID: {{ item_id }}</p>
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
</style>







