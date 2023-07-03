<template>
  <div>
    <div v-for="order in clientOrders" :key="order.id">
      <p>Order ID: {{ order[0] }}</p>
      <p>Item ID: {{ order[0] }}</p>
    </div>
  </div>
</template>

<script>
import cookies from 'vue-cookies';

export default {
  data() {
    return {
      clientOrders: [],
    };
  },
  mounted() {
    this.getClientOrders();
  },
  methods: {
    getClientOrders() {
      this.clientOrders = cookies.get('Client_Order');
    },
  },
};
</script>

<style scoped>
</style>






