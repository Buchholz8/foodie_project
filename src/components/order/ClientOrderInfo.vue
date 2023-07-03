<template>
  <div>
    <input type="text" ref="order_id" placeholder="order #" v-model="order_id">
    <button @click="client_order_handler">Search Order</button>

    <div v-for="(item, index) in orders" :key="index">
      <h1>Order Number: {{ item[4] }}</h1>
      <p v-if="item[2] === '1'">Order Complete</p>
      <p v-if="item[3] === '1'">Order received</p>
      <h2>{{ item[6] }}</h2>
      <p>{{ item[7] }}$</p>
      <img :src="item[8]" alt="">
      <h4>{{ item[9] }}</h4>
      <p>Address: {{ item[10] }}</p>
      <p>Phone: {{ item[11] }}</p>
    </div>

    <p>{{ message_result }}</p>
  </div>
</template>



<script>
import axios from "axios";
export default {
  methods: {
    client_order_handler: function () {
      axios
        .get("http://127.0.0.1:5000/api/client-order", {
          params: {
            order_id: this.order_id
          },
        })
        .then((response) => {
          console.log(response)
          this.orders = response.data;
        })
        .catch((error) => {
          this.message_result = error;
        });
    },
  },
  data() {
    return {
      orders: undefined,
      message_result: "",
    };
  },
};
</script>

<style scoped>
img {
    max-height: 70px;
    max-width: 70px;
}
</style>
