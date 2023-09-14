<template>
  <div class="each-promo">
    <div class="promo-img">
      <img :src="product.productImageUrl" loading="lazy" alt="" />
    </div>
    <div class="promo-footer">
      <div class="promo-det">
        <nuxt-link
          :to="`/dashboard/product-details/${product._id}`"
          class="product-name pro sm"
          >{{ product.productName }}</nuxt-link
        >
        <div class="product-price pro old">
          N{{ formatNumber(product.productSellingPrice) }}
        </div>
        <span class="product-name pro"
          >Buying {{ product.quantity }} Quantiy</span
        >
        <div class="product-price pro">
          N{{ formatNumber(product.productNewPrice) }}
        </div>
      </div>
      <div>
        <div class="action-btn down" @click="addToCart(product)">
          <div>+</div>
        </div>
        <div class="action-btn" @click="removeFromCart(product)">
          <div>-</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },

  methods: {
    formatNumber(number) {
      if (!number) {
        return "0.00";
      }
      const options = { style: "decimal", maximumFractionDigits: 0 };
      return number.toLocaleString("en-US", options);
    },

    removeFromCart(data) {
      this.$store.commit("productStore/REMOVE_FROM_CART", data);
    },

    addToCart(data) {
      this.$store.commit("productStore/ADD_TO_CART", data);
    },
  },

  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style></style>
