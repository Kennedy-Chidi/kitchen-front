<template>
  <div
    class="navigation-cover"
    :class="{ active: expandNav }"
    @click.self="hideNav"
  >
    <div class="filter-div">
      <img
        src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b74eee39c13b91fc2b7d12_menu-yellow.svg"
        loading="lazy"
        height="18"
        alt=""
        class="close-filter"
      />
      <div class="each-filter">
        <div class="filter-title">Categories</div>
        <div class="category-filter-flex">
          <div class="cat-filter-flex">
            <div class="cat-dot-flex">
              <div class="cat-dot active"></div>
            </div>
            <div class="each-category-text">All</div>
          </div>
          <div class="cat-filter-flex">
            <div class="cat-dot-flex"><div class="cat-dot"></div></div>
            <div class="each-category-text">Fish</div>
          </div>
          <div class="cat-filter-flex">
            <div class="cat-dot-flex"><div class="cat-dot"></div></div>
            <div class="each-category-text">Meat</div>
          </div>
          <div class="each-category-text active">Breakfast</div>
        </div>
      </div>
      <div class="each-filter">
        <div class="filter-title">Sort Product</div>
        <div class="category-filter-flex">
          <div class="each-sort"><div>Reset</div></div>
          <div class="each-sort filter">
            <div>Name</div>
            <img
              src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b751d192eeacec8dbc3538_sort.svg"
              loading="lazy"
              width="20"
              alt=""
              class="sort-icon"
            />
          </div>
          <div class="each-sort filter">
            <div>Price</div>
            <img
              src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b751d192eeacec8dbc3538_sort.svg"
              loading="lazy"
              width="20"
              alt=""
              class="sort-icon"
            />
          </div>
        </div>
      </div>
      <div class="each-filter">
        <div class="filter-title">Price Range</div>
        <div class="category-filter-flex">
          <div class="each-sort">
            <div>Reset</div>
            <img
              src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b751d192eeacec8dbc3538_sort.svg"
              loading="lazy"
              width="20"
              alt=""
              class="sort-icon"
            />
          </div>
          <div class="range-holder">
            <div class="each-range">
              <div class="range-price">N20,000</div>
              <div>Min</div>
            </div>
            <div class="each-range">
              <div class="range-price">N20,000</div>
              <div>Max</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <home-vertical-nav v-if="!showVerticalNav" />
    <dashboard-nav v-if="showVerticalNav" />
    <admin-nav v-if="showVerticalNav" />
  </div>
</template>

<script>
import AdminNav from "./Admin/AdminNav";
import DashboardNav from "./Dashboard/DashboardNav";
import HomeVerticalNav from "./Dashboard/HomeVerticalNav";
export default {
  components: { DashboardNav, AdminNav, HomeVerticalNav },
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push("/");
    },

    hideNav() {
      this.$store.commit("HIDE_NAV");
    },
  },
  computed: {
    showVerticalNav() {
      return this.$store.state.showVerticalNav;
    },

    cartProperties() {
      return this.$store.state.productStore.purchaseProperties;
    },

    isAuthenticated() {
      return this.$store.getters.isAuthenticated; // it check if user isAuthenticated
    },

    expandNav() {
      return this.$store.state.expandNav;
    },

    user() {
      return this.$store.getters.getUserInfo;
    },
  },
  mounted() {
    if (this.$auth.loggedIn) {
      this.$store.commit("SHOW_NAV");
    }
  },
};
</script>

<style></style>
