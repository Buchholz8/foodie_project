<template>
  <div>
    <button v-if="fail_load === true" @click="get_rest_info"> Restart </button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  mounted() {
    this.get_resta_info();
    this.$root.$on(``);
  },
  data() {
    return {
      rest_object: undefined,
      fail_load: undefined
    };
  },
  methods: {
    get_rest_info: function () {
      axios
        .request({
          url: "https://foodie.bymoen.codes/api/restaurant",
          headers: {
            "x-api-key": `rnA2v1qeHqSIjeL98kXk`,
          },
          params: {
            restaurant_id: cookies.get(`restaurant_id`),
          },
        })
        .then((response) => {
          this.rest_object = response[`data`][0];
        })
        .catch(() => {
          this.fail_load = true
        });
    },
  },
};
</script>

<style scoped>
</style>