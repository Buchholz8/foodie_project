<template>
    <div>

    </div>
</template>

<script>
import cookies from 'vue-cookies'
    export default {
          mounted() {
    if (cookies.get(`token`) === null) {
      this.$router.push(`/`);
    }
  },
    }
</script>

<style scoped>

</style>