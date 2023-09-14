<template>
  <div class="footer-nav">
    <div class="each-footer search w-form" :class="{ active: showSearch }">
      <div class="newsletter search">
        <div class="newsletter-wrap search">
          <input
            type="text"
            class="newsletter-input search w-input"
            v-model="searchedWord"
            placeholder="Search for Products"
            @keyup="fetchItems"
          />
        </div>
      </div>
    </div>
    <ul
      role="list"
      class="search-result foot"
      :class="{ active: showSearchList }"
    >
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

    <div class="custom-container hide">
      <div class="filter-div foot">
        <div class="close">X</div>
        <div class="each-filter">
          <div class="filter-title">Categories</div>
          <div class="category-filter-flex">
            <div class="each-category-text">All</div>
            <div class="each-category-text">Noodles</div>
            <div class="each-category-text">Fish</div>
            <div class="each-category-text">Rice</div>
            <div class="each-category-text active">Breakfast</div>
          </div>
        </div>
        <div class="each-filter">
          <div class="filter-title">Sort Product</div>
          <div class="category-filter-flex">
            <div class="each-sort"><div>Reset</div></div>
            <div class="each-sort">
              <div>Name</div>
              <img
                src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b751d192eeacec8dbc3538_sort.svg"
                loading="lazy"
                width="20"
                alt=""
                class="sort-icon"
              />
            </div>
            <div class="each-sort">
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
          <div class="category-filter-flex range">
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
      <div class="cart-items-holder">
        <div class="cart-list">
          <div class="each-cart-list">
            <img
              src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6ee862d3ff71b2a207998_rice-mama-gold.png"
              loading="lazy"
              alt=""
              class="cart-img"
            />
            <div class="cart-details">
              <div class="product-name">Mama Gold Rice</div>
              <div class="cart-flex">
                <div class="quant">1</div>
                <div class="quant-times">X</div>
                <div class="product-price">N54,000</div>
                <div class="quant-times">=</div>
                <div class="product-price total">N54,000</div>
              </div>
              <div class="action-holder sm">
                <div class="action-btn"><div>-</div></div>
                <div>0</div>
                <div class="action-btn"><div>+</div></div>
              </div>
            </div>
          </div>
          <div class="each-cart-list">
            <img
              src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6ee862d3ff71b2a207998_rice-mama-gold.png"
              loading="lazy"
              alt=""
              class="cart-img"
            />
            <div class="cart-details">
              <div class="product-name">Mama Gold Rice</div>
              <div class="cart-flex">
                <div class="quant">1</div>
                <div class="quant-times">X</div>
                <div class="product-price">N54,000</div>
                <div class="quant-times">=</div>
                <div class="product-price total">N54,000</div>
              </div>
              <div class="action-holder sm">
                <div class="action-btn"><div>-</div></div>
                <div>0</div>
                <div class="action-btn"><div>+</div></div>
              </div>
            </div>
          </div>
          <div class="each-cart-list">
            <img
              src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6ee862d3ff71b2a207998_rice-mama-gold.png"
              loading="lazy"
              alt=""
              class="cart-img"
            />
            <div class="cart-details">
              <div class="product-name">Mama Gold Rice</div>
              <div class="cart-flex">
                <div class="quant">1</div>
                <div class="quant-times">X</div>
                <div class="product-price">N54,000</div>
                <div class="quant-times">=</div>
                <div class="product-price total">N54,000</div>
              </div>
              <div class="action-holder sm">
                <div class="action-btn"><div>-</div></div>
                <div>0</div>
                <div class="action-btn"><div>+</div></div>
              </div>
            </div>
          </div>
          <div class="each-cart-list">
            <img
              src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6ee862d3ff71b2a207998_rice-mama-gold.png"
              loading="lazy"
              alt=""
              class="cart-img"
            />
            <div class="cart-details">
              <div class="product-name">Mama Gold Rice</div>
              <div class="cart-flex">
                <div class="quant">1</div>
                <div class="quant-times">X</div>
                <div class="product-price">N54,000</div>
                <div class="quant-times">=</div>
                <div class="product-price total">N54,000</div>
              </div>
              <div class="action-holder sm">
                <div class="action-btn"><div>-</div></div>
                <div>0</div>
                <div class="action-btn"><div>+</div></div>
              </div>
            </div>
          </div>
          <div class="each-cart-list">
            <img
              src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6ee862d3ff71b2a207998_rice-mama-gold.png"
              loading="lazy"
              alt=""
              class="cart-img"
            />
            <div class="cart-details">
              <div class="product-name">Mama Gold Rice</div>
              <div class="cart-flex">
                <div class="quant">1</div>
                <div class="quant-times">X</div>
                <div class="product-price">N54,000</div>
                <div class="quant-times">=</div>
                <div class="product-price total">N54,000</div>
              </div>
              <div class="action-holder sm">
                <div class="action-btn"><div>-</div></div>
                <div>0</div>
                <div class="action-btn"><div>+</div></div>
              </div>
            </div>
          </div>
        </div>
        <div class="check-out-btns">
          <div class="cart-total">12 Items</div>
          <div class="cart-total total">N56,000</div>
        </div>
        <div class="check-out-btns">
          <div class="custom-btn edge"><div>Check Out</div></div>
          <div class="custom-btn edge color"><div>Close</div></div>
          <div class="custom-btn edge"><div>Clear Cart</div></div>
        </div>
      </div>
      <div v-if="isAuthenticated" class="footer-nav-flex">
        <nuxt-link
          to="/dashboard/products"
          class="footer-icon-wrap w-inline-block"
        >
          <i class="material-symbols-outlined orange"
            >shopping_bag</i
          > </nuxt-link
        ><span @click="showCartItems" class="footer-icon-wrap w-inline-block"
          ><div class="badge color">
            <div v-if="cartProperties.totalQuantity < 10">
              {{ cartProperties.totalQuantity }}
            </div>
            <div v-else>9+</div>
          </div>
          <i class="material-symbols-outlined orange">shopping_cart</i></span
        >
        <nuxt-link
          v-show="isAuthenticated"
          to="/dashboard/notifications"
          class="footer-icon-wrap w-inline-block"
          ><i class="material-symbols-outlined orange">notifications</i>
          <div class="badge color" v-if="user.unreadMessages > 0">
            <div v-if="user.unreadMessages < 10">{{ user.unreadMessages }}</div>
            <div v-else>9+</div>
          </div>
        </nuxt-link>

        <nuxt-link
          v-show="!isAuthenticated"
          to="/signup"
          class="footer-icon-wrap w-inline-block"
          ><i class="material-symbols-outlined orange">person_add_alt</i>
        </nuxt-link>

        <span @click="goToProducts" class="footer-icon-wrap w-inline-block"
          ><i class="material-symbols-outlined orange">search</i></span
        >
        <span @click="toggleVerticalNav" class="footer-icon-wrap w-inline-block"
          ><i class="material-symbols-outlined orange">menu</i></span
        >
      </div>
      <div v-else class="footer-nav-flex">
        <nuxt-link to="/products" class="footer-icon-wrap w-inline-block">
          <i class="material-symbols-outlined orange">shopping_bag</i>
        </nuxt-link>
        <span @click="showCartItems" class="footer-icon-wrap w-inline-block"
          ><div class="badge color">
            <div v-if="cartProperties.totalQuantity < 10">
              {{ cartProperties.totalQuantity }}
            </div>
            <div v-else>9+</div>
          </div>
          <i class="material-symbols-outlined orange">shopping_cart</i></span
        >
        <span @click="checkSearch" class="footer-icon-wrap w-inline-block"
          ><i class="material-symbols-outlined orange">search</i></span
        >

        <nuxt-link
          v-show="!isAuthenticated"
          to="/signup"
          class="footer-icon-wrap w-inline-block"
          ><i class="material-symbols-outlined orange">person_add_alt</i>
        </nuxt-link>

        <span @click="toggleVerticalNav" class="footer-icon-wrap w-inline-block"
          ><i class="material-symbols-outlined orange">menu</i></span
        >
      </div>
    </div>

    <div
      v-show="currentRouteName == 'products'"
      class="icon-wrap nav foot orange"
    >
      <i class="material-symbols-outlined white sm">filter_alt</i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      limit: 30,
      currentPage: 1,
      route: "",
      showSearch: false,
      showSearchList: false,

      searchedWord: "",
    };
  },
  methods: {
    showCartItems() {
      this.$store.commit("productStore/SHOW_CART");
    },

    checkSearch() {
      if (route == "products") {
      } else {
        this.$route.push("/products");
      }
    },

    toggleVerticalNav() {
      this.$store.commit("TOGGLE_NAV");
    },

    hideVerticalNav() {
      this.$store.commit("HIDE_NAV");
    },

    goToProducts() {
      if (this.$route.name == "dashboard-products") {
        this.showSearch = !this.showSearch;
      } else {
        this.$router.push("/dashboard/products");
      }
    },

    fetchItems() {
      if (this.searchedWord.length > 0) {
        this.showSearchList = true;
      } else {
        this.showSearchList = false;
      }
    },
  },

  computed: {
    cartProperties() {
      return this.$store.state.productStore.purchaseProperties;
    },

    user() {
      return this.$store.state.auth.user;
    },

    productProperties() {
      return {
        products: this.$store.state.productStore.productArray,
        resultLength: this.$store.state.productStore.dataLength,
      };
    },

    currentRouteName() {
      return this.$route.name;
    },

    isAuthenticated() {
      return this.$store.getters.isAuthenticated; // it check if user isAuthenticated
    },
  },

  mounted() {
    this.route = this.$route.name;
    if (process.client && window.innerWidth < 991) {
      this.hideVerticalNav();
    }
  },
};
</script>

<style></style>
