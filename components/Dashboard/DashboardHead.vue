<template>
  <div class="top-header2">
    <div
      class="success-alert"
      :class="{ active: showAlert, error: alertError }"
      @click="showAlert = false"
    >
      <div class="alert-circle">
        <img
          v-if="alertError"
          src="https://uploads-ssl.webflow.com/64795bc5f99dfa06fdf065a8/647cad13e9b140d6c4b812cd_check.svg"
          loading="lazy"
          alt=""
          class="image"
        />
        <img
          v-else
          src="/images/check-green.svg"
          loading="lazy"
          alt=""
          class="image"
        />
      </div>
      <h1 class="success-title message">
        {{ alertMsg }}
      </h1>
    </div>
    <div class="overlay" :class="{ active: showOverlay }">
      <div class="overly-content">
        <h1 class="overlay-text">
          {{ overlayMsg }}
        </h1>
        <div class="overlay-btn-older1">
          <span class="overlay-btn w-button" @click="closeOverlay">Yes</span
          ><span class="overlay-btn w-button" @click="showOverlay = false"
            >No</span
          >
        </div>
      </div>
    </div>
    <h1 class="logo">LOGO</h1>
    <div class="top-greetings2"></div>
    <div class="top-right">
      <div class="icon-holders2">
        <div @click="showCart = !showCart" class="icon-wrapper2">
          <div class="icon-badge">
            <div>{{ properties.totalQuantity }}</div>
          </div>
          <img
            src="/images/cart-icon.svg"
            loading="lazy"
            alt=""
            class="top-icons2"
          />
        </div>

        <div v-if="cartProducts.length > 0 && showCart" class="sm-cart-list2">
          <div class="scroll-list">
            <div
              v-for="(item, int) in cartProducts"
              :key="int"
              class="sm-top-list"
            >
              <div class="list-name-holder2">
                <h4 class="sm-list-name">{{ item.productName }}</h4>
                <div class="top-action2">
                  <div
                    class="icon-holders2 smaller"
                    @click="removeFromCart(item)"
                  >
                    <img
                      src="/images/minus.svg"
                      loading="lazy"
                      alt=""
                      class="action-icon2"
                    />
                  </div>
                  <div class="icon-holders2 smaller" @click="addToCart(item)">
                    <img
                      src="/images/plus.svg"
                      loading="lazy"
                      alt=""
                      class="action-icon2"
                    />
                  </div>
                </div>
              </div>
              <div class="value-holder2">
                <div class="top-quantity2">
                  {{ item.quantity }} X N{{
                    formatNumber(item.productSellingPrice)
                  }}
                </div>
                <div class="top-price2">
                  N{{ formatNumber(item.quantity * item.productSellingPrice) }}
                </div>
              </div>
            </div>
          </div>
          <div class="custom-btn2 total">
            <div>N{{ formatNumber(properties.totalAmount) }}</div>
          </div>
          <div class="button-holder-sm">
            <div class="custom-btn2 check" @click="checkOut">
              <div>CHECK OUT</div>
            </div>
            <div class="custom-btn2 check" @click="clearCart">
              <div>CLEAR CART</div>
            </div>
          </div>
        </div>
      </div>
      <nuxt-link to="/dashboard/notifications" class="icon-holders2"
        ><img
          src="/images/notification-icon.svg"
          loading="lazy"
          alt=""
          class="top-icons2"
        />
        <div class="icon-badge notice">
          <div v-if="notifications > 9">9+</div>
          <div v-else>{{ notifications }}</div>
        </div></nuxt-link
      >
      <div class="icon-holders2" @click="logout">
        <img
          src="/images/logout-icon.svg"
          loading="lazy"
          alt=""
          class="top-icons2"
        />
      </div>
      <img
        src="/images/close-nav.svg"
        loading="lazy"
        alt=""
        class="menu-icon2"
        @click="toggleDashboardNav"
      />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [{ rel: "stylesheet", type: "text/css", href: "/css/admin.css" }],
    };
  },

  data() {
    return {
      company: "",
      showCart: false,

      showOverlay: false,
      overlayMsg: "",

      showAlert: false,
      alertMsg: "",
      alertError: false,
    };
  },
  methods: {
    toggleDashboardNav() {
      this.$store.commit("TOGGLE_NAV");
    },

    formatNumber(number) {
      if (!number) {
        return "0.00";
      }
      const options = { style: "decimal", maximumFractionDigits: 0 };
      return number.toLocaleString("en-US", options);
    },

    removeFromCart(data) {
      this.$store.commit("REMOVE_FROM_CART", data);
    },

    showAlertSuccess(msg, status) {
      this.alertMsg = msg;
      this.showAlert = true;
      this.alertError = status;
      setTimeout(() => {
        this.showAlert = false;
        this.alertMsg = "";
      }, 15000);
    },

    clearCart() {
      this.$store.commit("CLEAR_CART");
    },

    increaseNotifications() {
      this.$store.commit("INCREASE_NOTIFICATION");
    },

    addToCart(data) {
      this.$store.commit("ADD_TO_CART", data);
    },

    checkOut() {
      this.showOverlay = true;
      this.overlayMsg = "Are you sure you to proceed ordering the items?";
    },

    closeOverlay() {
      this.overlayMsg = "";
      this.showOverlay = false;

      const description = [];
      this.cartProducts.forEach((el) => {
        const salesUnit = {
          quantity: "",
          name: "",
          price: "",
        };
        (salesUnit.quantity = el.quantity),
          (salesUnit.name = el.productName),
          (salesUnit.price = el.productSellingPrice);

        description.push(salesUnit);
      });

      const form = {
        totalAmount: this.properties.totalAmount,
        description: description,
        time: new Date().getTime(),
        customer: `${this.user.username}`,
        categories: this.properties.categories,
        totalPurchases: this.properties.totalQuantity,
        transactionType: "Order",
      };

      this.processOrder(form);
    },

    async processOrder(form) {
      try {
        const result = await this.$axios.post(`/transactions`, form);
        this.clearCart();
        this.showAlertSuccess(
          "Your order was successful, you will be contacted soon for delivery",
          false
        );
        this.increaseNotifications();
      } catch (err) {
        this.showCart = false;
        this.showAlertSuccess(err.response.data.message, true);
      }
    },

    async logout() {
      await this.$auth.logout();
      this.$router.push("/");
    },
  },

  mounted() {},
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
    cartProducts() {
      return this.$store.state.products;
    },
    properties() {
      return this.$store.state.purchaseProperties;
    },
    notifications() {
      return this.$store.state.notifications;
    },
  },

  head() {
    return {
      link: [{ rel: "stylesheet", type: "text/css", href: "/css/admin.css" }],
    };
  },
};
</script>

<style>
.scroll-list {
  max-height: 300px;
  overflow: auto;
  padding-right: 5px;
}

.success-alert.error {
  background: #fbcfdf;
}

.button-holder-sm {
  display: flex;
  justify-content: space-between;
}

.custom-btn2.total {
  padding: 5px;
  margin-bottom: 10px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.custom-btn2.check {
  padding: 5px 10px;
}

.search-flex {
  background-color: #e9edff;
  border: 0 solid #000;
  border-radius: 3px;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;
  padding-right: 5px;
  display: flex;
  position: relative;
}

.search-flex.expense {
  width: 50%;
  min-height: 15vh;
  padding-top: 10px;
}

.search-flex.banner {
  width: 48%;
  min-height: 20vh;
  padding-top: 10px;
}

.icons-holders2 {
  cursor: pointer;
}

@media screen and (max-width: 767px) {
  .view-receipt {
    padding-left: 5px;
    padding-right: 5px;
    font-size: 12px;
  }
}

.view-receipt {
  width: 150px;
  color: #505050;
  cursor: pointer;
  background-color: #f5f6ff;
  border-radius: 3px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  line-height: 15px;
  text-decoration: none;
  display: flex;
}
</style>
