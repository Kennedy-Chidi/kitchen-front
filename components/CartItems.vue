<template>
  <div
    class="cart-items-body"
    v-if="cartProducts.length > 0"
    :class="{ active: showCart }"
  >
    <div class="cart-items-holder vertical">
      <div class="cart-list">
        <div
          v-for="(cart, int) in cartProducts"
          :key="cart._id"
          class="each-cart-list"
          :class="{ even: int % 2 == 0 }"
        >
          <img
            :src="cart.productImageUrl"
            loading="lazy"
            alt=""
            class="cart-img"
          />
          <div class="cart-details">
            <div class="product-name">{{ cart.productName }}</div>
            <div class="cart-flex">
              <div class="quant">{{ cart.quantity }}</div>
              <div class="quant-times">X</div>
              <div v-if="user.status == 'User'" class="product-price">
                N{{ formatNumber(cart.productSellingPrice) }}
              </div>
              <div v-else class="product-price">
                N{{ formatNumber(cart.productBuyingPrice) }}
              </div>
              <div class="quant-times">=</div>
              <div v-if="user.status == 'User'" class="product-price total">
                N{{ formatNumber(cart.quantity * cart.productSellingPrice) }}
              </div>
              <div v-else class="product-price total">
                N{{ formatNumber(cart.quantity * cart.productBuyingPrice) }}
              </div>
            </div>
            <div class="action-holder sm">
              <div @click="removeFromCart(cart)" class="action-btn sm">
                <div>-</div>
              </div>
              <div>{{ cart.quantity }}</div>
              <div @click="addToCart(cart)" class="action-btn sm">
                <div>+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="check-out-btns">
        <div class="cart-total">{{ cartProperties.totalQuantity }} ITEMS</div>
        <div class="cart-total total">
          Total = N{{ formatNumber(cartProperties.totalAmount) }}
        </div>
        <div v-if="user.status == 'User'" class="cart-total">
          Delivery = N400
        </div>
        <div v-if="user.status == 'User'" class="cart-total credit">
          Credit = N{{ formatNumber(user.creditBonus) }}
        </div>
      </div>
      <div v-if="user.status == 'User'" class="check-out-btns">
        <div class="cart-total total balance">
          Balance = N{{
            formatNumber(
              cartProperties.totalAmount * 1 - user.creditBonus * 1 + 400
            )
          }}
        </div>
      </div>
      <div class="check-out-btns">
        <div @click="makeConfirmation" class="custom-btn edge">
          <div>CHECK OUT</div>
        </div>
        <div @click="hideCart" class="custom-btn edge color">
          <div>CLOSE</div>
        </div>
        <div @click="clearCart" class="custom-btn edge"><div>CLEAR</div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hideCart() {
      if (this.user.status == "Staff") {
        this.$store.commit("settingsStore/HIDE_CART");
      } else {
        this.$store.commit("productStore/HIDE_CART");
      }
    },

    makeConfirmation() {
      const msg = `Are you sure you want to order the goods worth N${this.formatNumber(
        this.cartProperties.totalAmount
      )}`;
      const id = "";
      const data = {
        cartProducts: this.cartProducts,
        totalAmount: this.cartProperties.totalAmount,
        totalQuatity: this.cartProperties.totalQuatity,
        creditBonus: this.user.creditBonus,
        deliveryFee: 400,
        time: new Date().getTime(),
        user: this.user,
      };
      if (this.user.status == "User") {
        const type = "Buy";
        this.$store.commit("SHOW_CONFIRM_BOX", { msg, id, type, data });
      } else {
        const type = "Purchase";
        this.$store.commit("settingsStore/SHOW_CONFIRM_BOX", {
          msg,
          id,
          type,
          data,
        });
      }
      this.hideCart();
    },

    authConfirmation() {
      const msg = `Please Sign up or login if you have an account to complete the order`;
      const status = true;
      this.$store.commit("SHOW_ALERT_BOX", { msg, status });
    },

    removeFromCart(data) {
      if (this.user.status == "Staff") {
        this.$store.commit("settingsStore/REMOVE_FROM_CART", data);
      } else {
        this.$store.commit("productStore/REMOVE_FROM_CART", data);
      }
    },

    addToCart(data) {
      if (this.user.status == "Staff") {
        this.$store.commit("settingsStore/ADD_TO_CART", data);
      } else {
        this.$store.commit("productStore/ADD_TO_CART", data);
      }
    },

    clearCart() {
      if (this.user.status == "Staff") {
        this.$store.commit("settingsStore/CLEAR_CART");
        this.$store.commit("settingsStore/HIDE_CART");
      } else {
        this.$store.commit("productStore/CLEAR_CART");
        this.$store.commit("productStore/HIDE_CART");
      }
    },

    formatNumber(number) {
      if (!number) {
        return "0.00";
      }
      const options = { style: "decimal", maximumFractionDigits: 0 };
      return number.toLocaleString("en-US", options);
    },
  },

  computed: {
    cartProducts() {
      return this.user.status == "Staff"
        ? this.$store.state.settingsStore.cartProducts
        : this.$store.state.productStore.cartProducts;
    },

    showCart() {
      return this.user.status == "Staff"
        ? this.$store.state.settingsStore.isShowingCart
        : this.$store.state.productStore.isShowingCart;
    },

    cartProperties() {
      return this.user.status == "Staff"
        ? this.$store.state.settingsStore.purchaseProperties
        : this.$store.state.productStore.purchaseProperties;
    },

    isAuthenticated() {
      return this.$store.getters.isAuthenticated; // it check if user isAuthenticated
    },

    user() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style></style>
