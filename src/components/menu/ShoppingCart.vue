<template>
  <div>
    <p> {{client_order[``]}} </p>
  </div>
</template>

<script>
//i got lost here not sure how to get the order to put it in the cart, im assuming that
//at some point it got pushed to the api when it was created, but im a little confused on were i get it from

import axios from "axios";
export default {
    data() {
        return {
            client_order: undefined
        }
    },
  methods: {
    handle_cart: function () {
      axios
        .request({
          url: "https://foodie.bymoen.codes/api/client-order",
          headers: {
            "x-api-key": `rnA2v1qeHqSIjeL98kXk`,
          },
        })
        .then((response) => {
          this.client_order = response.data[``]
        })
        .catch((error) => {
          error;
        });
    },
  },
};
</script>

<style scoped>
</style>