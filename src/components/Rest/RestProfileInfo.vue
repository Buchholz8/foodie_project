<template>
  <div>
    <button v-if="fail_load" @click="get_rest_info">Restart</button>
    <template v-if="rest_object">
      <p>{{ rest_object.name }}</p>
      <p>{{ rest_object.address }}</p>
      <p>{{ rest_object.phone_number }}</p>
      <p>{{ rest_object.bio }}</p>
      <p>{{ rest_object.city }}</p>
      <img :src="rest_object.banner_url" alt="">
    </template>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  mounted() {
    this.get_rest_info();
    this.$root.$on(`rest_info`, this.get_rest_info);
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
          url: "http://127.0.0.1:5000/api/restaurant",
          method: "GET",
          data: {
            token: cookies.get(`token`),
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

<style scoped></style>