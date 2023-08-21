<template>
  <div class="alert-body" :class="{ active: confirmProperties.showConfirmBox }">
    <i v-if="loading" class="material-symbols-outlined white spinner center"
      >motion_photos_on</i
    >
    <div v-else class="alert-box">
      <i class="material-symbols-outlined green alert-img bg">beenhere</i>
      <div>{{ confirmProperties.confirmBoxMsg }}</div>
      <div class="confirm-btns">
        <span class="nav-link btn log" @click="proceedConfirmation"
          >Confirm</span
        >
        <span class="nav-link btn color log" @click="hideConfirmBox"
          >Cancel</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hideConfirmBox() {
      if (this.user.status == "Staff") {
        this.$store.commit("settingsStore/HIDE_CONFIRM_BOX");
      } else {
        this.$store.commit("HIDE_CONFIRM_BOX");
      }
    },

    proceedConfirmation() {
      if (this.user.status == "Staff") {
        const properties = this.confirmProperties;
        this.$store.dispatch("settingsStore/PROCEED_CONFIRMATION", properties);
        this.$store.commit("settingsStore/TOGGLE_LOADING");
      } else {
        const properties = this.confirmProperties;
        if (
          properties.confirmType == "Buy" &&
          (this.user.address == "" || this.user.address == undefined)
        ) {
          const status = true;
          const msg = "Please setup your residential address in your profile";
          this.$store.commit(`SHOW_ALERT_BOX`, { msg, status });
          this.$store.commit("HIDE_CONFIRM_BOX");
          return;
        }
        this.$store.dispatch("PROCEED_CONFIRMATION", properties);
        this.$store.commit("TOGGLE_LOADING");
      }
    },
  },

  computed: {
    confirmProperties() {
      return {
        showConfirmBox:
          this.user.status == "Staff"
            ? this.$store.state.settingsStore.showConfirmBox
            : this.$store.state.showConfirmBox,
        confirmBoxMsg:
          this.user.status == "Staff"
            ? this.$store.state.settingsStore.confirmMsg
            : this.$store.state.confirmMsg,
        confirmId:
          this.user.status == "Staff"
            ? this.$store.state.settingsStore.confirmId
            : this.$store.state.confirmId,
        confirmType:
          this.user.status == "Staff"
            ? this.$store.state.settingsStore.confirmType
            : this.$store.state.confirmType,
        confirmData:
          this.user.status == "Staff"
            ? this.$store.state.settingsStore.confirmData
            : this.$store.state.confirmData,
      };
    },

    loading() {
      return this.user.status == "Staff"
        ? this.$store.state.settingsStore.isLoading
        : this.$store.state.isLoading;
    },

    user() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style></style>
