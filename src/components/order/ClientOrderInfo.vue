<template>
  <div>
    <div v-for="(order , i ) in orders" :key="i">
        <h2> {{ orders[`name`]}} </h2>
        <p> {{ orders[`price`]}} </p>
    </div>
    <p> {{this.message_result}} </p>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data() {
    return {
      orders: undefined,
      message_result: undefined
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
          params: {
            is_confirmed: true,
            is_complete: true
          }
        })
        .then((response) => {
          this.order_val = response[`data`];
        })
        .catch((error) => {
          this.message_result = error
        });
    },
  },
};
</script>

<style scoped>
</style>