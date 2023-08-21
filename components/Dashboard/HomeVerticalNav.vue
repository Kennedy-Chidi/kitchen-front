<template>
  <div class="vertical-navigation" :class="{ active: expandNav }">
    <i
      @click="toggleNav"
      class="material-symbols-outlined orange toggle"
      :class="{ active: expandNav }"
      >menu</i
    >

    <h1 class="dash-greeting" :class="{ opac: !expandNav }">Welcome To</h1>
    <h1 class="dash-greeting name" :class="{ opac: !expandNav }">
      Kitchen Grace
    </h1>
    <nuxt-link
      to="/"
      class="flex-link w-inline-block"
      :class="{ active: route == 'index' }"
      ><div class="icon-wrap">
        <i class="material-symbols-outlined green">home</i>
      </div>
      <div>Home</div></nuxt-link
    >
    <nuxt-link
      to="/products"
      class="flex-link w-inline-block"
      :class="{ active: route == 'products' }"
      ><div class="icon-wrap">
        <i class="material-symbols-outlined green">shopping_bag</i>
      </div>
      <div>Products</div></nuxt-link
    >
    <nuxt-link
      to="/about"
      class="flex-link w-inline-block"
      :class="{ active: route == 'about' }"
      ><div class="icon-wrap">
        <i class="material-symbols-outlined green">store</i>
      </div>
      <div>About</div></nuxt-link
    >
    <nuxt-link
      to="/contact"
      class="flex-link w-inline-block"
      :class="{ active: route == 'contact' }"
      ><div class="icon-wrap">
        <i class="material-symbols-outlined green sm">contact_phone</i>
      </div>
      <div>Contact</div></nuxt-link
    >

    <nuxt-link
      to="/faq"
      class="flex-link w-inline-block"
      :class="{ active: route == 'faq' }"
      ><div class="icon-wrap">
        <i class="material-symbols-outlined green">help</i>
      </div>
      <div>FAQ</div></nuxt-link
    >

    <nuxt-link
      to="/blog"
      class="flex-link w-inline-block"
      :class="{ active: route == 'blog' }"
      ><div class="icon-wrap">
        <i class="material-symbols-outlined green">rss_feed</i>
      </div>
      <div>Blog</div></nuxt-link
    >

    <nuxt-link
      to="/terms-conditions"
      class="flex-link w-inline-block"
      :class="{ active: route == 'terms-conditions' }"
      ><div class="icon-wrap">
        <i class="material-symbols-outlined green">contract</i>
      </div>
      <div>Terms</div></nuxt-link
    >

    <nuxt-link
      to="/login"
      class="flex-link w-inline-block"
      :class="{ active: route == 'login' }"
      ><div class="icon-wrap">
        <i class="material-symbols-outlined green">login</i>
      </div>
      <div>Login</div></nuxt-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      route: "",
    };
  },
  methods: {
    toggleNav() {
      this.$store.commit("TOGGLE_NAV");
    },

    closeNav() {
      this.$store.commit("CLOSE_NAV");
    },
  },
  computed: {
    expandNav() {
      return this.$store.state.expandNav;
    },
  },
  mounted() {
    this.route = this.$route.name;
  },
};
</script>
