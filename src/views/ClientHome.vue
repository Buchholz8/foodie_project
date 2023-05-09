<template>
  <div>
<client-profile-info></client-profile-info>
<client-profile-edit></client-profile-edit>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import ClientProfileInfo from '@/components/Client/ClientProfileInfo.vue';
import ClientProfileEdit from '@/components/Client/ClientProfileEdit.vue';
export default {
  components: {
    ClientProfileInfo,
    ClientProfileEdit,
  },
  mounted() {
    if (cookies.get(`token`) === null) {
      this.$router.push(`/`);
    }
  },
};
</script>

<style scoped>
</style>