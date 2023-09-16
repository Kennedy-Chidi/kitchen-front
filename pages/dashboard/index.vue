<template>
  <div class="">
    <alert-box />
    <cart-items />
    <alert-confirmation />
    <div class="custom-container">
      <div class="cart-items-body">
        <div class="cart-items-holder vertical">
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
                  <div class="action-btn sm"><div>-</div></div>
                  <div>0</div>
                  <div class="action-btn sm"><div>+</div></div>
                </div>
              </div>
            </div>
            <div class="each-cart-list even">
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
                  <div class="action-btn sm"><div>-</div></div>
                  <div>0</div>
                  <div class="action-btn sm"><div>+</div></div>
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
                  <div>44</div>
                  <div class="action-btn"><div>+</div></div>
                </div>
              </div>
            </div>
            <div class="each-cart-list even">
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
            <div class="cart-total total">Total = N56,000</div>
            <div class="cart-total">Delivery = N400</div>
            <div class="cart-total credit">Credit = N400</div>
          </div>
          <div class="check-out-btns">
            <div class="cart-total total balance">Balance = N56,000</div>
          </div>
          <div class="check-out-btns">
            <div class="custom-btn edge"><div>CHECK OUT</div></div>
            <div class="custom-btn edge color no"><div>CLOSE</div></div>
            <div class="custom-btn edge"><div>CLEAR</div></div>
          </div>
        </div>
      </div>
      <div class="content-body">
        <!------------ HERO SECTION ------------->
        <div class="hero-display">
          <div
            data-delay="6000"
            data-animation="slide"
            class="main-slider w-slider"
            data-autoplay="true"
            data-easing="ease-out-cubic"
            data-hide-arrows="false"
            data-disable-swipe="false"
            data-autoplay-limit="0"
            data-nav-spacing="3"
            data-duration="1300"
            data-infinite="true"
          >
            <div class="hero-mask w-slider-mask">
              <div
                v-for="banner in banners"
                :key="banner._id"
                class="hero-slide w-slide"
              >
                <div class="hero-div">
                  <img
                    :src="banner.bannerImageUrl"
                    loading="lazy"
                    sizes="100vw"
                    :srcset="`
                          ${banner.bannerImageUrl} 500w,
                          ${banner.bannerImageUrl} 800w,
                          ${banner.bannerImageUrl}     812w  `"
                    alt=""
                    class="responsive-img"
                  />
                  <div class="hero-content">
                    <h1 class="light-heading">{{ banner.bannerTitle }}</h1>
                    <h1 class="hero-name">{{ banner.bannerSubtitle }}</h1>
                    <h1 class="hero-subtitle">
                      {{ banner.bannerIntro }}
                    </h1>
                    <div @click="goToProduct" class="custom-btn">
                      <div>Start Shopping</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="left-arrow w-slider-arrow-left">
              <div class="w-icon-slider-left"></div>
            </div>
            <div class="right-arrow w-slider-arrow-right">
              <div class="w-icon-slider-right"></div>
            </div>
            <div class="hide-dots w-slider-nav w-round w-num"></div>
          </div>
          <div class="hero-adds">
            <img
              v-for="banner in sideBanners"
              :key="banner._id"
              :src="banner.bannerImageUrl"
              loading="lazy"
              alt=""
              class="add-img"
            />
          </div>
        </div>
        <!----X------- HERO SECTION --------X---->

        <!----------- CATEGORY SECTION ------------>
        <div class="categories">
          <div class="category-flex">
            <h3 class="section-title">Categories</h3>
            <div
              v-for="(category, int) in categories"
              :key="int"
              class="each-category"
            >
              <div class="category-img">
                <img
                  :src="category.imageUrl"
                  loading="lazy"
                  alt=""
                  class="cat-img"
                />
              </div>
              <nuxt-link
                :to="`/dashboard/products/?category=${category.category}`"
                class="category-name"
                >{{ category.category }}</nuxt-link
              >
            </div>
          </div>
        </div>
        <!----X------- CATEGORY SECTION --------X---->

        <div class="product-flex">
          <h3 class="section-title pro">Our Products</h3>

          <each-product
            v-for="(product, int) in productItems"
            :product="product"
            :key="int"
          />
        </div>

        <nuxt-link to="/dashboard/products" class="response big"
          >View More</nuxt-link
        >
        <div v-if="promoLength > 0" class="home-promos">
          <promo-header />
        </div>
        <div class="promo-flex">
          <each-promo
            v-for="(promo, int) in promos"
            :key="int"
            :product="promo"
          />
        </div>
      </div>
      <img
        src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b73b75e09b37f7e2fc04a8_coupon_banner_bg.jpg"
        loading="lazy"
        sizes="100vw"
        srcset="
          https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b73b75e09b37f7e2fc04a8_coupon_banner_bg-p-500.jpg   500w,
          https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b73b75e09b37f7e2fc04a8_coupon_banner_bg-p-800.jpg   800w,
          https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b73b75e09b37f7e2fc04a8_coupon_banner_bg-p-1080.jpg 1080w,
          https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b73b75e09b37f7e2fc04a8_coupon_banner_bg.jpg        1310w
        "
        alt=""
        class="bottom-banner"
      />
    </div>
    <footer-component />
  </div>
</template>

<script>
import AlertBox from "../../components/AlertBox.vue";
import AlertConfirmation from "../../components/AlertConfirmation.vue";
import CartItems from "../../components/CartItems.vue";
import CompanyAds from "../../components/CompanyAds.vue";
import EachProduct from "../../components/EachProduct";
import EachPromo from "../../components/EachPromo";
import FooterComponent from "../../components/FooterComponent";
import HorizontalNav from "../../components/HorizontalNav";
import MobileBottomNav from "../../components/MobileBottomNav.vue";
import ProductDisplay from "../../components/ProductDisplay.vue";
import PromoHeader from "../../components/PromoHeader.vue";
import VerticalNav from "../../components/VerticalNav";
export default {
  computed: {
    productItems() {
      return this.$store.state.productStore.products;
    },

    isAuth() {
      return this.$store.state.auth;
    },

    banners() {
      const banners = JSON.parse(JSON.stringify(this.$store.state.banners));
      return banners.filter((el) => {
        return el.bannerPage == "Dashboard";
      });
    },

    sideBanners() {
      const banners = JSON.parse(JSON.stringify(this.$store.state.banners));
      return banners.filter((el) => {
        return el.bannerPage == "DashboardSide";
      });
    },

    categories() {
      return this.$store.state.userStore.categories;
    },

    promoLength() {
      return this.$store.state.userStore.productPromoLength;
    },

    promos() {
      return this.$store.state.userStore.productPromos;
    },
  },
  methods: {
    goToProduct() {
      this.$router.push("/dashboard/products");
    },
    loadScript() {
      if (!process.server) {
        let el = document.getElementById("script");

        if (el != undefined) {
          document.body.removeChild(el);
        }

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "/script/client.js";
        script.async = true;
        script.id = "script";
        const app = document.querySelector("#footer");
        if (app) {
          app.appendChild(script);
        } else {
          console.error("Could not find app node to append script element");
        }
      }
    },
  },
  mounted() {
    // this.loadScript();
  },
  components: {
    AlertBox,
    CartItems,
    AlertConfirmation,
    ProductDisplay,
    VerticalNav,
    FooterComponent,
    MobileBottomNav,
    HorizontalNav,
    CompanyAds,
    EachProduct,
    EachPromo,
    PromoHeader,
  },
};
</script>

<style></style>
