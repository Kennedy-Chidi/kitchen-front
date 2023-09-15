<template></template>

<script>
import NotificationSound from "./NotificationSound.vue";
export default {
  components: { NotificationSound },
  methods: {
    showCartItems() {
      if (this.user.status == "Staff") {
        this.$store.commit("settingsStore/SHOW_CART");
      } else {
        this.$store.commit("productStore/SHOW_CART");
      }
    },

    pauseFeedbackSound() {
      this.$refs.audioPlayer.pause();
    },

    userFeedback(data) {
      const status = data.status;
      const msg = data.msg;
      if (!status) {
        this.$store.commit("productStore/CLEAR_CART");
        if (this.$route.name != "/dashboard/notifications") {
          this.$store.commit("INCREASE_NOTIFICATION");
        }
        // this.$store.commit("userStore/SET_TRANSACTIONS", data.transactions);
        this.$store.commit("userStore/SET_NOTIFICATIONS", data.messages);
        this.$store.commit("productStore/RESET_CART");
      }
      this.$store.commit("HIDE_CONFIRM_BOX");
      this.$store.commit("SHOW_ALERT_BOX", { msg, status });
    },

    staffFeedback(data) {
      this.$store.commit("settingsStore/SET_ORDERS", data.result.orders);
    },

    setUserUnreadNotifications(user) {
      if (this.$route.name != "dashboard-notifications") {
        this.$store.commit("UPDATE_ME", user);
      } else {
        const form = { unreadMessages: 0 };
        const id = user._id;
        const query = `limit=10&page=1&status=User&sort=-dateCreated`;
        this.$store.dispatch("userStore/UPDATE_USER", { form, id, query });
      }
    },

    userCancelledOrderFeedback(data) {
      this.setUserUnreadNotifications(data.result.user);
      this.$store.commit("userStore/SET_NOTIFICATIONS", data.messages);
    },

    staffCancelledOrderFeedback(data) {
      const msg = data.msg;
      const status = true;
      this.$store.commit("settingsStore/SET_ORDERS", data.result.orders);
      this.$store.commit("settingsStore/SHOW_ALERT_BOX", { msg, status });
      this.$store.commit("settingsStore/HIDE_CONFIRM_BOX");
    },

    userApprovedOrderFeedback(data) {
      this.setUserUnreadNotifications(this.user);
      this.$store.commit("userStore/SET_NOTIFICATIONS", data.messages);
      this.$store.commit("userStore/SET_PROMOS", data.result.promos);
    },

    staffApprovedOrderFeedback(data) {
      const msg = data.msg;
      const status = false;
      this.$store.commit("settingsStore/HIDE_CONFIRM_BOX");
      this.$store.commit("settingsStore/SHOW_ALERT_BOX", { msg, status });
      this.$store.commit("settingsStore/SET_ORDERS", data.result.orders);
      this.$store.commit("settingsStore/SET_PRODUCTS", data.result.products);
      this.$store.commit(
        "settingsStore/SET_TRANSACTIONS",
        data.result.transactions
      );
    },

    async logout() {
      const query = `limit=30&page=1`;
      this.$store.dispatch("productStore/GET_PRODUCTS", query);
      await this.$auth.logout();
      this.$router.push("/");
      this.$store.commit("CLOSE_NAV", query);
    },
  },

  mounted() {
    const socket = this.$socket;

    socket.on("orderedGoods", (data) => {
      if (this.user.status == "User" && this.user.username == data.username) {
        this.userFeedback(data);
      } else if (
        this.user.status == "Staff" &&
        data.salesRep.username == this.user.username
      ) {
        this.staffFeedback(data);
      }
    });

    socket.on("cancelledOrder", (data) => {
      if (this.user.status == "User" && this.user.username == data.username) {
        this.userCancelledOrderFeedback(data);
      } else if (
        this.user.status == "Staff" &&
        data.salesRep.username == this.user.username
      ) {
        this.staffCancelledOrderFeedback(data);
      }
    });

    socket.on("purchasedGoods", (data) => {
      if (this.user.username == data.username) {
        this.$store.commit("settingsStore/HIDE_CONFIRM_BOX");
        this.$store.commit("settingsStore/TOGGLE_LOADING");
        this.$store.commit("settingsStore/SET_PRODUCTS", data.products);
        const msg = "The purchase was made successfully";
        const status = false;
        this.$store.commit("settingsStore/SHOW_ALERT_BOX", {
          msg,
          status,
        });
      }
    });

    socket.on("approvedOrder", (data) => {
      if (this.user.status == "User" && this.user.username == data.username) {
        this.userApprovedOrderFeedback(data);
      } else if (
        this.user.status == "Staff" &&
        data.salesRep.username == this.user.username
      ) {
        this.staffApprovedOrderFeedback(data);
      }
    });
  },

  computed: {
    cartProducts() {
      return this.user.status == "Staff"
        ? this.$store.state.settingsStore.cartProducts
        : this.$store.state.productStore.cartProducts;
    },

    notifications() {
      return this.$store.state.notificationNum;
    },

    user() {
      return this.$store.getters.getUserInfo;
    },

    cartProperties() {
      return this.user.status == "Staff"
        ? this.$store.state.settingsStore.purchaseProperties
        : this.$store.state.productStore.purchaseProperties;
    },

    isAuthenticated() {
      return this.$store.getters.isAuthenticated; // it check if user isAuthenticated
    },
  },
};
</script>

<style></style>
