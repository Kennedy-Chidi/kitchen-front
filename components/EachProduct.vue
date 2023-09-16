<template>
  <div class="each-product">
    <div class="product-img-div">
      <span v-if="product.isPromo" class="promo-badge">Promo</span
      ><img
        :src="product.productImageUrl"
        loading="lazy"
        sizes="(max-width: 479px) 41vw, 100px"
        :srcset="`
                      ${product.productImageUrl}  500w,
                      ${product.productImageUrl}  800w,
                      ${product.productImageUrl}     1080w
                    `"
        alt=""
        class="product-img"
      />
    </div>
    <div class="rating-view">
      <div class="rate-flex">
        <div>4.8</div>
        <i class="material-symbols-outlined orange sm">star_border</i>
      </div>
      <i class="material-symbols-outlined orange sm">view_in_ar</i>
    </div>
    <div class="name-flex">
      <nuxt-link
        v-show="user != null"
        :to="`/dashboard/product-details/${product._id}`"
        class="product-name pro"
        >{{ product.productName }}</nuxt-link
      >
      <nuxt-link
        v-show="user == null"
        :to="`/product-details/${product._id}`"
        class="product-name pro"
        >{{ product.productName }}</nuxt-link
      >
      <div class="price-flex" :class="{ center: !product.oldPrice }">
        <div class="product-price pro old" v-show="product.oldPrice">
          N{{ formatNumber(product.oldPrice) }}
        </div>
        <div class="product-price pro">N{{ product.productSellingPrice }}</div>
      </div>
    </div>
    <div v-show="user" class="action-holder">
      <div @click="removeFromCart(product)" class="action-btn">
        <div>-</div>
      </div>
      <div>{{ product.quantity }}</div>
      <div @click="addToCart(product)" class="action-btn">
        <div>+</div>
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
