<template>
  <div class="alert-body" :class="{ active: alertProperties.showAlertBox }">
    <div class="alert-box" :class="{ error: alertProperties.alertBoxStatus }">
      <div
        @click="hideAlertBox"
        class="close right"
        :class="{ error: alertProperties.alertBoxStatus }"
      >
        <div>X</div>
      </div>

      <i
        v-if="alertProperties.alertBoxStatus"
        class="material-symbols-outlined orange alert-img bg"
        >gpp_bad</i
      >
      <i
        v-if="!alertProperties.alertBoxStatus"
        class="material-symbols-outlined green alert-img bg"
        >beenhere</i
      >
      <div>{{ alertProperties.alertBoxMsg }}</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hideAlertBox() {
      if (this.user.status == "User") {
        this.$store.commit("HIDE_ALERT_BOX");
      } else {
        this.$store.commit("settingsStore/HIDE_ALERT_BOX");
      }

      if (this.passwordChanged) {
        this.$store.commit("SET_PASSWORD_CHANGED");
        this.logout();
      }
    },

    async logout() {
      await this.$auth.logout();
      this.$router.push("/login");
    },
  },
  computed: {
    alertProperties() {
      return {
        showAlertBox:
          this.user.status == "Staff"
            ? this.$store.state.settingsStore.showAlertBox
            : this.$store.state.showAlertBox,
        alertBoxStatus:
          this.user.status == "Staff"
            ? this.$store.state.settingsStore.alertStatus
            : this.$store.state.alertStatus,
        alertBoxMsg:
          this.user.status == "Staff"
            ? this.$store.state.settingsStore.alertMsg
            : this.$store.state.alertMsg,
      };
    },

    passwordChanged() {
      return this.$store.state.isPasswordChanged;
    },

    user() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style></style>
