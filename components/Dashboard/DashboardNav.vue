<template>
  <div
    v-if="user.status == 'User'"
    class="vertical-navigation"
    :class="{ active: expandNav }"
  >
    <i
      @click="toggleNav"
      class="material-symbols-outlined orange toggle"
      :class="{ active: expandNav }"
      >menu</i
    >

    <h1 class="dash-greeting" :class="{ opac: !expandNav }">Welcome Back</h1>
    <h1 v-if="user" class="dash-greeting name" :class="{ opac: !expandNav }">
      {{ user.username }}
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
      to="/dashboard/profile"
      class="flex-link w-inline-block"
      :class="{ active: route == 'dashboard-profile' }"
      ><div class="icon-wrap">
        <i class="material-symbols-outlined green">person</i>
      </div>
      <div>Profile</div></nuxt-link
    >
    <nuxt-link
      to="/dashboard/transactions"
      class="flex-link w-inline-block"
      :class="{ active: route == 'dashboard-transactions' }"
      ><div class="icon-wrap">
        <i class="material-symbols-outlined green">payments</i>
      </div>
      <div>Transactions</div></nuxt-link
    >
    <nuxt-link
      to="/dashboard/notifications"
      class="flex-link w-inline-block"
      :class="{ active: route == 'dashboard-notifications' }"
      ><div class="icon-wrap">
        <div v-if="user.unreadMessages > 0" class="badge active">
          <div v-if="user.unreadMessages < 10">{{ user.unreadMessages }}</div>
          <div v-else>9+</div>
        </div>
        <i class="material-symbols-outlined green">notifications</i>
      </div>
      <div>Notification</div></nuxt-link
    >

    <nuxt-link
      to="/dashboard/promotions"
      class="flex-link w-inline-block"
      :class="{ active: route == 'dashboard-promotions' }"
      ><div class="icon-wrap">
        <i class="material-symbols-outlined green">brand_awareness</i>
      </div>
      <div>Promotions</div></nuxt-link
    >
    <nuxt-link
      to="/dashboard/partnership"
      class="flex-link w-inline-block"
      :class="{ active: route == 'dashboard-partnership' }"
      ><div class="icon-wrap">
        <i class="material-symbols-outlined green">partner_exchange</i>
      </div>
      <div>Partnership</div></nuxt-link
    >
    <nuxt-link
      to="/dashboard/referrals"
      class="flex-link w-inline-block"
      :class="{ active: route == 'dashboard-referrals' }"
      ><div class="icon-wrap">
        <i class="material-symbols-outlined green">share</i>
      </div>
      <div>Referrals</div></nuxt-link
    >

    <span @click="logout" class="flex-link w-inline-block"
      ><div class="icon-wrap">
        <i class="material-symbols-outlined green">logout</i>
      </div>
      <div>Logout</div></span
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

    async logout() {
      await this.$auth.logout();
      this.$router.push("/home");
      this.closeNav();
    },
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },

    expandNav() {
      return this.$store.state.expandNav;
    },
  },
  mounted() {
    this.route = this.$route.name;
  },
};
</script>
