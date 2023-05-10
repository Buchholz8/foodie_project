<template>
  <div>
    <div v-for="(order, i) in orders" :key="i">
      <h1>Order Number : {{order[`order_id`]}} </h1>
      <div v-for="(item , t) in order" :key="t">
        <h2>{{ orders[`name`] }}</h2>
        <p>{{ orders[`price`] }}</p>
      </div>
    </div>
    <p>{{ this.message_result }}</p>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
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
  methods: {
    client_order_handler: function () {
      axios
        .request({
          url: "https://foodie.bymoen.codes/api/client-order",
          headers: {
            "x-api-key": `rnA2v1qeHqSIjeL98kXk`,
            token: cookies.get("token"),
          },
        })
        .then((response) => {
          this.order_val = response[`data`];
        })
        .catch((error) => {
          this.message_result = error;
        });
    },
  },
};
</script>

<style scoped>
</style>