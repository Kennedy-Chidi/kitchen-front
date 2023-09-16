<template></template>

<script>
export default {
  computed: {
    userInfo() {
      return this.$store.state.auth.user; // it check if user isAuthenticated
    },
  },
};
</script>

<style>
.dashboard2.profile {
  overflow: clip;
}
</style>
