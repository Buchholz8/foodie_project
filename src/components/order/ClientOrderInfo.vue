<template>
  <div>
    <p> {{this.message_result}} </p>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data() {
    return {
      order_val: undefined,
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
          this.order_val = response[`data`][0];
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