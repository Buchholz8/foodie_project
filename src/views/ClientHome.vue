<template>
  <div>
<client-profile-info></client-profile-info>
<button @click="change_info"> Change your info? </button>
<client-profile-edit v-if="this.change_val === false"></client-profile-edit>
<all-menu-item></all-menu-item>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import ClientProfileInfo from '@/components/Client/ClientProfileInfo.vue';
import ClientProfileEdit from '@/components/Client/ClientProfileEdit.vue';
import AllMenuItem from '@/components/menu/AllMenuItem.vue'
export default {
  data() {
    return {
      change_val: false
    }
  },
methods: {
  change_info: function( ) {
    this.change_val = !this.change_val
  }
},



  components: {
    ClientProfileInfo,
    ClientProfileEdit,
    AllMenuItem
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