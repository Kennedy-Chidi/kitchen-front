<template></template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    formatNumber(number) {
      if (!number) {
        return "0.00";
      }
      const options = { style: "decimal", maximumFractionDigits: 0 };
      return number.toLocaleString("en-US", options);
    },

    removeFromCart(product) {},

    addToCart(product) {},
  },

  computed: {
    cartProducts() {
      return this.$store.state.products;
    },
  },
};
</script>

<style></style>
