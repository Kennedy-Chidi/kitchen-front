<template>
  <div v-if="confirmProperties.showConfirmBox" class="alert-box">
    <div @click="hideAlertBox" class="close right">
      <div>X</div>
    </div>

    <img
      src="/images/alert-success-icon.svg"
      loading="lazy"
      alt=""
      class="alert-img"
    />
    <div>{{ confirmProperties.confirmBoxMsg }}</div>
  </div>
</template>

<script>
export default {
  methods: {
    hideConfirmBox() {
      this.$store.commit("HIDE_ALERT_BOX");
    },
  },
  computed: {
    confirmProperties() {
      return {
        showConfirmBox: this.$store.state.showConfirmBox,
        confirmBoxId: this.$store.state.confirmBoxId,
        confirmBoxMsg: this.$store.state.alertMsg,
      };
    },
  },
};
</script>

<style></style>
