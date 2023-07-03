<template>
  <div>
    <input type="text" ref="Order_id" placeholder="order #">
    <button @click="client_order_handler">Search Order</button>
    <div v-for="(order, i) in orders" :key="i">
      <h1>Order Number : {{ order[`order_id`] }} </h1>
      <div v-for="(item, t) in order" :key="t">
        <h2>{{ orders[`name`] }}</h2>
        <p>{{ orders[`price`] }}</p>
      </div>
    </div>
    <p>{{ this.message_result }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    sort_orders: function (unsorted_orders) {
      let sorted_orders = [];
      let order_ids = [];
      for (let i = 0; i < unsorted_orders.length; i++) {
        let index = order_ids.findIndex(unsorted_orders[i][`order_id`]);
        if (index !== -1) {
          sorted_orders[index.push([unsorted_orders[i]])];
        } else {
          sorted_orders.push([unsorted_orders[i]]);
          order_ids.push(unsorted_orders[i][`order_id`]);
        }
      }
      this.orders = sorted_orders;
    },
  },
  data() {
    return {
      orders: undefined,
    };
  },
  client_order_handler: function () {
    axios
      .request({
        url: "http://127.0.0.1:5000/api/client-order",
        method: `GET`,
        data: {
          order_id : this.$refs[`order_id`],
        }
      })
      .then((response) => {
        this.order_val = response[`data`];
      })
      .catch((error) => {
        this.message_result = error;
      });
  },
};
</script>

<style scoped></style>