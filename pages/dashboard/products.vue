<template>
  <div class="grace products">
    <alert-box />
    <cart-items />
    <alert-confirmation />
    <product-display />

    <div class="main-body">
      <vertical-nav />
      <div class="main-flex">
        <company-ads />
        <horizontal-nav />
        <div class="custom-container">
          <div class="body-flex">
            <div class="content-body">
              <div v-if="showCategories" class="product-flex">
                <h3 class="section-title pro">All {{ category }} Categories</h3>
                <each-product
                  v-for="(product, int) in productProperties.catProducts"
                  :product="product"
                  :key="int"
                />
              </div>

              <div class="product-flex">
                <h3 class="section-title pro">Our Products</h3>
                <each-product
                  v-for="(product, int) in productProperties.products"
                  :product="product"
                  :key="int"
                />

                <div class="filter-div prod">
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
                      <div class="each-sort pro"><div>Reset</div></div>
                      <div class="each-sort pro">
                        <div>Name</div>
                        <img
                          src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b751d192eeacec8dbc3538_sort.svg"
                          loading="lazy"
                          width="20"
                          alt=""
                          class="sort-icon"
                        />
                      </div>
                      <div class="each-sort pro">
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
              </div>

              <div class="pagination">
                <div class="page-result">
                  Results: {{ productProperties.resultLength }}, Page
                  {{ currentPage }} of {{ pages().length }}
                </div>
                <ul role="list" class="pagination-list">
                  <li class="page">
                    <img
                      src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b72debe03037906a74116a_thin-chevron-arrow-left-icon%201.svg"
                      loading="lazy"
                      alt=""
                      class="page-icon"
                    />
                  </li>
                  <li class="page"><div>1</div></li>
                  <li class="page active"><div>2</div></li>
                  <li class="page"><div>3</div></li>
                  <li class="page">
                    <img
                      src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b72deb58cf5ff7bacff87c_thin-chevron-arrow-left-icon%202.svg"
                      loading="lazy"
                      alt=""
                      class="page-icon"
                    />
                  </li>
                </ul>
              </div>

              <div v-if="promoLength > 0" class="home-promos">
                <promo-header />
              </div>
              <div class="promo-flex">
                <each-promo
                  v-for="promo in promos"
                  :key="promo._id"
                  :product="promo"
                />
              </div>
            </div>
          </div>
        </div>
        <footer-component />
      </div>
    </div>
    <mobile-bottom-nav />
  </div>
</template>

<script>
import HorizontalNav from "../../components/HorizontalNav";
import VerticalNav from "../../components/VerticalNav.vue";
import MobileBottomNav from "../../components/MobileBottomNav";
import FooterComponent from "../../components/FooterComponent";
import ProductDisplay from "../../components/ProductDisplay.vue";
import CartItems from "../../components/CartItems.vue";
import AlertBox from "../../components/AlertBox";
import AlertConfirmation from "../../components/AlertConfirmation.vue";
import CompanyAds from "../../components/CompanyAds.vue";
import EachProduct from "../../components/EachProduct";
import PromoHeader from "../../components/PromoHeader.vue";
import EachPromo from "../../components/EachPromo";
export default {
  data() {
    return {
      sort: "",
      limit: 30,
      currentPage: 1,
      pages() {
        let array = [];
        let x = Math.ceil(this.productProperties.resultLength / this.limit);
        for (let i = 0; i < x; i++) {
          array.push("i");
        }
        return array;
      },
    };
  },

  computed: {
    productProperties() {
      return {
        products: this.$store.state.productStore.productArray.filter((el) => {
          return !el.isCat;
        }),

        catProducts: this.$store.state.productStore.productArray.filter(
          (el) => {
            return el.isCat == true;
          }
        ),

        resultLength: this.$store.state.productStore.dataLength,
      };
    },

    showCategories() {
      return this.$store.state.productStore.showCatProduct;
    },

    promoLength() {
      return this.$store.state.userStore.productPromoLength;
    },

    promos() {
      return this.$store.state.userStore.productPromos;
    },

    category() {
      return this.$store.state.productStore.catProduct;
    },

    isAuth() {
      return this.$store.state.auth;
    },
  },

  async asyncData({ store, route }) {
    if (route.query.category) {
      await store.dispatch(
        "productStore/GET_CATEGORY_PRODUCTS",
        route.query.category
      );
      await store.commit("productStore/SET_CAT_PRODUCT", route.query.category);
    } else {
      await store.commit("productStore/HIDE_CAT_PRODUCT", route.query.category);
    }
  },

  components: {
    HorizontalNav,
    VerticalNav,
    MobileBottomNav,
    FooterComponent,
    ProductDisplay,
    CartItems,
    AlertBox,
    AlertConfirmation,
    CompanyAds,
    EachProduct,
    PromoHeader,
    EachPromo,
  },
};
</script>

<style></style>
