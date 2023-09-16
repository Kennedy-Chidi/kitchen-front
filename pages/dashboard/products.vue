<template>
  <div class="grace products">
    <alert-box />
    <alert-confirmation />
    <product-display />

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
          </div>

          <div class="pagination">
            <div class="page-result">
              Results: {{ productProperties.resultLength }}, Page
              {{ currentPage }} of {{ pages().length }}
            </div>
            <ul v-if="pages().length > 1" role="list" class="pagination-list">
              <li v-if="currentPage > 1" class="page">
                <i class="material-symbols-outlined orange">arrow_back_ios</i>
              </li>
              <li
                v-for="(item, int) in pages().length"
                :key="int"
                class="page"
                :class="{ active: int + 1 == currentPage }"
              >
                <div>{{ int + 1 }}</div>
              </li>

              <li v-if="currentPage < pages().length" class="page">
                <i class="material-symbols-outlined orange"
                  >arrow_forward_ios</i
                >
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
