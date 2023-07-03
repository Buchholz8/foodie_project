<template>
  <div>
    <client-order-info></client-order-info>
  </div>
</template>

<script>
import cookies from 'vue-cookies'
import ClientOrderInfo from '@/components/order/ClientOrderInfo.vue'
export default {
  mounted() {
    if (cookies.get(`token`) === null) {
      this.$router.push(`/`);
    }
  },
  components: {
    ClientOrderInfo,
  }
}
</script>

<style scoped></style>