<template>
  <div class="navigation">
    <div class="custom-container">
      <div class="nav-flex">
        <notification-sound ref="audioPlayer" />
        <nuxt-link to="/dashboard" class="brand w-inline-block"
          ><img
            src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6c1ec16b2737439b284fc_logo.png"
            loading="lazy"
            alt=""
            class="logo"
        /></nuxt-link>
        <ul role="list" class="nav-list">
          <li class="nav-link-flex">
            <nuxt-link to="/" class="nav-link">Home</nuxt-link>
            <nuxt-link to="/dashboard" class="nav-link">Welcome</nuxt-link>
            <nuxt-link to="/dashboard/products" class="nav-link"
              >Products</nuxt-link
            >
            <nuxt-link to="/dashboard/about" class="nav-link">About</nuxt-link>
            <nuxt-link to="/dashboard/contact" class="nav-link"
              >Contact</nuxt-link
            >
            <nuxt-link to="/dashboard/faq" class="nav-link">FAQ</nuxt-link>
            <nuxt-link to="/dashboard/blog" class="nav-link">Blog</nuxt-link>
          </li>
        </ul>
        <div class="nav-logs">
          <div class="icon-wrap nav">
            <img
              src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b7651c0b23ab2f2f438073_search-line-icon%201.svg"
              loading="lazy"
              alt=""
              class="nav-icon cart"
            />
          </div>
          <div class="icon-wrap nav">
            <img
              src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b74e3c7592131c5ccdfbd8_filter-outline-icon%201.svg"
              loading="lazy"
              alt=""
              class="nav-icon cart"
            />
          </div>
          <!-- <nuxt-link
            to="/dashboard/notifications"
            class="icon-wrap nav w-inline-block"
            ><img
              src="/images/green-bell-icon.svg"
              loading="lazy"
              alt=""
              class="nav-icon cart"
            />
            <div v-if="notifications > 0" class="badge">
              <div v-if="notifications > 9">9+</div>
              <div v-else>{{ notifications }}</div>
            </div></nuxt-link
          > -->
          <div
            @click="showCartItems"
            v-show="cartProducts"
            class="icon-wrap nav"
          >
            <div class="badge">
              <div v-if="cartProducts.length < 10">
                {{ cartProperties.totalQuantity }}
              </div>
              <div v-else>9+</div>
            </div>
            <i class="material-symbols-outlined green sm">add_shopping_cart</i>
          </div>

          <nuxt-link
            v-show="!isAuthenticated"
            to="/signup"
            class="nav-link btn color log"
            >Signup</nuxt-link
          >
          <nuxt-link
            v-show="isAuthenticated && user.status == 'Staff'"
            to="/signup"
            class="nav-link btn color log"
            >Signup</nuxt-link
          >
          <nuxt-link
            v-show="!isAuthenticated"
            to="/login"
            class="nav-link btn log"
            >Login</nuxt-link
          >
          <span
            v-show="isAuthenticated"
            @click="logout"
            class="nav-link btn log"
            >Logout</span
          >
        </div>
        <div class="nav-result w-form">
          <div>
            <div class="top-search">
              <input
                type="text"
                class="search-input w-input"
                maxlength="256"
                name="search"
                data-name="search"
                placeholder="Search For Products"
                id="search"
              /><img
                src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b7651c0b23ab2f2f438073_search-line-icon%201.svg"
                loading="lazy"
                alt=""
                class="nav-icon cart"
              />
            </div>
            <ul role="list" class="search-result">
              <li class="pro-names">
                <nuxt-link to="/" class="pro-name">Star Maggi</nuxt-link>
                <div>N3,500</div>
              </li>
              <li class="pro-names">
                <nuxt-link to="/" class="pro-name">Star Maggi</nuxt-link>
                <div>N3,500</div>
              </li>
              <li class="pro-names">
                <nuxt-link to="/" class="pro-name">Star Maggi</nuxt-link>
                <div>N3,500</div>
              </li>
              <li class="pro-names">
                <nuxt-link to="/" class="pro-name">Star Maggi</nuxt-link>
                <div>N3,500</div>
              </li>
              <li class="pro-names">
                <nuxt-link to="/" class="pro-name">Star Maggi</nuxt-link>
                <div>N3,500</div>
              </li>
              <li class="pro-names">
                <nuxt-link to="/" class="pro-name">Star Maggi</nuxt-link>
                <div>N3,500</div>
              </li>
              <li class="pro-names">
                <nuxt-link to="/" class="pro-name">Star Maggi</nuxt-link>
                <div>N3,500</div>
              </li>
            </ul>
          </div>
        </div>
        <h3 class="slogan">...Nourishing Homes</h3>
        <div id="sound"></div>
      </div>
    </div>
  </div>
</template>

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
