<template>
  <div
    data-animation="default"
    data-collapse="medium"
    data-duration="400"
    data-easing="ease"
    data-easing2="ease"
    role="banner"
    class="cnav-bar w-nav"
  >
    <div class="custom-container">
      <div class="cnavbar-flex">
        <nuxt-link
          :to="{
            path: '/',
            query: { username: $route.query.username },
          }"
          class="cbrand-holder w-nav-brand"
          ><img
            src="https://uploads-ssl.webflow.com/649199e0f008fbb11c91f2da/64924b7234d50b30b5b6cb98_Logo.png"
            loading="lazy"
            sizes="(max-width: 479px) 100vw, (max-width: 767px) 150px, (max-width: 991px) 20vw, (max-width: 1279px) 13vw, (max-width: 1439px) 11vw, 148.5749969482422px"
            srcset="
              https://uploads-ssl.webflow.com/649199e0f008fbb11c91f2da/64924b7234d50b30b5b6cb98_Logo-p-500.png   500w,
              https://uploads-ssl.webflow.com/649199e0f008fbb11c91f2da/64924b7234d50b30b5b6cb98_Logo-p-800.png   800w,
              https://uploads-ssl.webflow.com/649199e0f008fbb11c91f2da/64924b7234d50b30b5b6cb98_Logo-p-1080.png 1080w,
              https://uploads-ssl.webflow.com/649199e0f008fbb11c91f2da/64924b7234d50b30b5b6cb98_Logo.png        1756w
            "
            alt=""
            class="cbrand"
        /></nuxt-link>
        <nav role="navigation" class="cnav-menu w-nav-menu">
          <nuxt-link
            :to="{
              path: '/',
              query: { username: $route.query.username },
            }"
            class="cnav-link w-nav-link"
            :class="{ active: route == 'index' }"
            >Home </nuxt-link
          ><nuxt-link
            :to="{
              path: '/products',
              query: { username: $route.query.username },
            }"
            class="cnav-link w-nav-link"
            :class="{ active: route == 'products' }"
            >Shop</nuxt-link
          >
          <div data-hover="false" data-delay="0" class="cnav-drop w-dropdown">
            <div class="cnav-link w-dropdown-toggle">
              <div class="w-icon-dropdown-toggle"></div>
              <div>Pages</div>
            </div>
            <nav class="cdrop-nav w-dropdown-list">
              <nuxt-link
                :to="{
                  path: '/about',
                  query: { username: $route.query.username },
                }"
                class="cdrop-link w-dropdown-link"
                :class="{ active: route == 'about' }"
                >About</nuxt-link
              ><nuxt-link
                :to="{
                  path: '/faq',
                  query: { username: $route.query.username },
                }"
                class="cdrop-link w-dropdown-link"
                :class="{ active: route == 'faq' }"
                >FAQ</nuxt-link
              ><nuxt-link
                :to="{
                  path: '/contact',
                  query: { username: $route.query.username },
                }"
                class="cdrop-link w-dropdown-link"
                :class="{ active: route == 'contact' }"
                >Contact</nuxt-link
              ><nuxt-link
                :to="{
                  path: '/blog',
                  query: { username: $route.query.username },
                }"
                class="cdrop-link w-dropdown-link"
                :class="{ active: route == 'blog' }"
                >Blog</nuxt-link
              >
            </nav>
          </div>
          <nuxt-link
            v-if="isAuthenticated"
            :to="{
              path: '/dashboard',
              query: { username: $route.query.username },
            }"
            class="cnav-link w-nav-link"
            :class="{ active: route == 'signup' }"
            >Dashboard</nuxt-link
          >
          <nuxt-link
            v-else
            :to="{
              path: '/signup',
              query: { username: $route.query.username },
            }"
            class="cnav-link w-nav-link"
            :class="{ active: route == 'signup' }"
            >Sign up</nuxt-link
          >

          <span
            v-if="isAuthenticated"
            class="cnav-link login w-nav-link"
            @click="logout"
            >Logout</span
          >
          <nuxt-link
            v-else
            class="cnav-link login w-nav-link"
            :to="{
              path: '/login',
              query: { username: $route.query.username },
            }"
            >Login</nuxt-link
          >
        </nav>
        <div class="cnav-icons-flex">
          <div class="search-holder">
            <img
              src="https://uploads-ssl.webflow.com/649199e0f008fbb11c91f2da/64925020e40138d6dcf3ed1c_search-icon%202.svg"
              loading="lazy"
              alt=""
              class="ctop-search-icon"
            /><nuxt-link to="/" class="ctop-indicator w-inline-block"
              ><div class="ctop-indicate"><div>22</div></div>
              <img
                src="https://uploads-ssl.webflow.com/649199e0f008fbb11c91f2da/64926528c63f0d96602d1d80_heart-thin-icon%202.svg"
                loading="lazy"
                alt=""
                class="ctop-search-icon"
            /></nuxt-link>
            <div class="ctop-indicator">
              <div class="ccart-holder">
                <ul role="list" class="ctop-list-cart">
                  <li class="ctop-cart-item">
                    <div class="ccart-close">
                      <img
                        src="https://uploads-ssl.webflow.com/649199e0f008fbb11c91f2da/649258d0cd3d7341456e74f9_close-line-icon%201.svg"
                        loading="lazy"
                        alt=""
                        class="ccart-icon"
                      />
                    </div>
                    <img
                      src="https://uploads-ssl.webflow.com/649199e0f008fbb11c91f2da/6492ab91cd3d734145cd33a6_10_large.webp"
                      loading="lazy"
                      alt=""
                      class="ctop-product-img"
                    />
                    <div class="ctop-product-div">
                      <nuxt-link to="/" class="ccart-item-nam"
                        >Women Top Wear</nuxt-link
                      >
                      <div class="ccart-detail">
                        <div>1</div>
                        <div class="ctimes">X</div>
                        <div class="ccart-price">N56,000</div>
                      </div>
                    </div>
                  </li>
                  <li class="ctop-cart-item">
                    <img
                      src="https://uploads-ssl.webflow.com/649199e0f008fbb11c91f2da/6492ab91cd3d734145cd33a6_10_large.webp"
                      loading="lazy"
                      alt=""
                      class="ctop-product-img"
                    />
                    <div class="ctop-product-div">
                      <nuxt-link to="/" class="ccart-item-nam"
                        >Women Top Wear</nuxt-link
                      >
                      <div class="ccart-detail">
                        <div>1</div>
                        <div class="ctimes">X</div>
                        <div class="ccart-price">N56,000</div>
                      </div>
                    </div>
                    <div class="ccart-close">
                      <img
                        src="https://uploads-ssl.webflow.com/649199e0f008fbb11c91f2da/649258d0cd3d7341456e74f9_close-line-icon%201.svg"
                        loading="lazy"
                        alt=""
                        class="ccart-icon"
                      />
                    </div>
                  </li>
                  <li class="ctop-cart-item">
                    <img
                      src="https://uploads-ssl.webflow.com/649199e0f008fbb11c91f2da/6492ab91cd3d734145cd33a6_10_large.webp"
                      loading="lazy"
                      alt=""
                      class="ctop-product-img"
                    />
                    <div class="ctop-product-div">
                      <nuxt-link to="/" class="ccart-item-nam"
                        >Women Top Wear</nuxt-link
                      >
                      <div class="ccart-detail">
                        <div>1</div>
                        <div class="ctimes">X</div>
                        <div class="ccart-price">N56,000</div>
                      </div>
                    </div>
                    <div class="ccart-close">
                      <img
                        src="https://uploads-ssl.webflow.com/649199e0f008fbb11c91f2da/649258d0cd3d7341456e74f9_close-line-icon%201.svg"
                        loading="lazy"
                        alt=""
                        class="ccart-icon"
                      />
                    </div>
                  </li>
                </ul>
                <div class="ccart-subtotal">Subtotal: N230,000</div>
                <div class="ccustom-btn"><div>CHECK OUT</div></div>
                <nuxt-link to="/" class="cview-cart">View Cart</nuxt-link>
              </div>
              <div class="ctop-indicate"><div>22</div></div>
              <img
                src="https://uploads-ssl.webflow.com/649199e0f008fbb11c91f2da/649265287c8c4a9efeadf88c_bag-icon%201.svg"
                loading="lazy"
                alt=""
                class="ctop-search-icon"
              />
            </div>
          </div>
          <div class="cmenu w-nav-button">
            <div class="cmenu-icon w-icon-nav-menu"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="ctop-form-block w-form">
      <form
        id="email-form"
        name="email-form"
        data-name="Email Form"
        method="get"
        class="ctop-form"
        data-wf-page-id="649199e0f008fbb11c91f2dd"
        data-wf-element-id="ba9e8dfe-fbe4-ebb0-7bde-46f18eca70a2"
      >
        <div class="custom-container">
          <div class="ctop-form-flex">
            <img
              src="https://uploads-ssl.webflow.com/649199e0f008fbb11c91f2da/64925020e40138d6dcf3ed1c_search-icon%202.svg"
              loading="lazy"
              alt=""
              class="ctop-search-icon"
            /><input
              type="text"
              class="ctop-search w-input"
              maxlength="256"
              name="search-2"
              data-name="Search 2"
              placeholder="Search Item"
              id="search-2"
            /><img
              src="https://uploads-ssl.webflow.com/649199e0f008fbb11c91f2da/649258d0cd3d7341456e74f9_close-line-icon%201.svg"
              loading="lazy"
              alt=""
              class="ctop-search-icon"
            />
            <ul role="list" class="ctop-search-list">
              <li>
                <nuxt-link to="/" class="ctop-searched-items"
                  >Searched Item 1</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/" class="ctop-searched-items"
                  >Searched Item 1</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/" class="ctop-searched-items"
                  >Searched Item 1</nuxt-link
                >
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      route: "",
    };
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push("/");
    },
  },
  mounted() {
    this.route = this.$route.name;
  },

  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated; // it check if user isAuthenticated
    },
  },
};
</script>

<style>
.w-nav-link.w--current {
  color: #ffffff;
}

.w-nav-link.login {
  cursor: pointer;
}

.w-nav-link.w--current.login {
  color: #000;
}
</style>
