<template>
  <div>
    <input type="text" ref="order_id" placeholder="order #" v-model="order_id">
    <button @click="client_order_handler">Search Order</button>
    <button @click="return_to_menu">Return to Menu</button>
    <div v-for="(item, index) in orders" :key="index">
      <h1>Order Number: {{ order_id }}</h1>
      <p v-if="item[2] === '1'">Order Complete</p>
      <p v-else>Not Completed</p>
      <p v-if="item[3] === '1'">Order Received</p>
      <p v-else>Order Not Received</p>
      <h2>{{ item[6] }}</h2>
      <p>{{ item[7] }}$</p>
      <img :src="item[8]" alt="">
      <h4>{{ item[9] }}</h4>
      <p>Address: {{ item[10] }}</p>
      <p>Phone: {{ item[11] }}</p>
      <button @click="remove_cart">Remove from Cart</button>
    </div>

    <p>{{ message_result }}</p>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  data() {
    return {
      order_id: cookies.get("order_id"),
      orders: undefined,
      message_result: "",
    };
  },
  methods: {
    return_to_menu() {
      this.$router.push("/ClientH");
    },
    remove_cart() {
      cookies.remove("item_id");
      cookies.remove("order_id");
      cookies.remove("client_order");
    },
    client_order_handler() {
      axios
        .get("http://127.0.0.1:5000/api/client-order", {
          params: {
            order_id: this.order_id,
          },
        })
        .then((response) => {
          console.log(response);
          this.orders = response.data;
        })
        .catch((error) => {
          this.message_result = error;
        });
    },
  },
};
</script>


<style scoped>
body{
  background-color: rgb(112, 108, 108);
}
img {
  max-height: 70px;
  max-width: 70px;
}
</style>
