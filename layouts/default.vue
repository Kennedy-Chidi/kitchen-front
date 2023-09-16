<template>
  <div class="grace landing">
    <cart-items />
    <div class="main-body">
      <vertical-nav v-if="user" />
      <div class="main-flex">
        <div class="display">
          <div class="custom-container-landing">
            <img
              src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6cb8e05358c6b93a96917_ezgif.com-optimize.gif"
              loading="lazy"
              alt=""
              class="display-img"
            />
          </div>
        </div>
        <horizontal-nav v-if="user" />
        <landing-nav v-else />
        <main>
          <nuxt />
        </main>
      </div>
    </div>
    <mobile-bottom-nav v-if="user" />
  </div>
</template>
<script>
import CartItems from "../components/CartItems.vue";
import EachProduct from "../components/EachProduct.vue";
import HomeFooter from "../components/HomeFooter";
import HorizontalNav from "../components/HorizontalNav.vue";
import MobileBottomNav from "../components/MobileBottomNav.vue";
import VerticalNav from "../components/VerticalNav.vue";
export default {
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
  components: {
    HomeFooter,
    EachProduct,
    MobileBottomNav,
    VerticalNav,
    HorizontalNav,
    CartItems,
  },
};
</script>

<style></style>
