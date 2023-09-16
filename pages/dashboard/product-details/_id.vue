<template>
  <div class="">
    <alert-box />
    <alert-confirmation />
    <cart-items />
    <horizontal-nav />
    <div class="custom-container">
      <div class="body-flex">
        <div class="content-body">
          <div class="prod-detail-flex">
            <div v-if="selectedProduct" class="product-display-holder">
              <div class="main-product-img">
                <img
                  :src="selectedProduct.productImageUrl"
                  loading="lazy"
                  alt=""
                  class="fill-img"
                />
                <div
                  style="padding-top: 56.17021276595745%"
                  class="video-product hide w-video w-embed"
                >
                  <iframe
                    class="embedly-embed"
                    src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FXALBGkjkUPQ%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXALBGkjkUPQ&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FXALBGkjkUPQ%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube"
                    scrolling="no"
                    allowfullscreen
                    title="Imagine for 1 Minute"
                  ></iframe>
                </div>
                <div class="pro-video">
                  <img
                    src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b7332cf7c46bde9545099e_search-video-icon%201.svg"
                    loading="lazy"
                    alt=""
                    class="icon"
                  />
                </div>
              </div>
              <div
                v-if="selectedProduct.productImagesUrl"
                class="product-display-flex"
              >
                <div
                  v-for="image in selectedProduct.productImagesUrl"
                  :key="image"
                  class="product-display"
                >
                  <div class="product-cover"></div>
                  <img :src="image" loading="lazy" alt="" />
                </div>
              </div>
            </div>
            <div v-if="selectedProduct" class="product-wrap">
              <div class="rating-flex">
                <div class="pro-label">Rating:</div>
                <div><div>4.6</div></div>
                <img
                  src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6eb38d0d66d1e4a9c50e8_star.svg"
                  loading="lazy"
                  alt=""
                  class="rating-star"
                /><img
                  src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6eb38d0d66d1e4a9c50e8_star.svg"
                  loading="lazy"
                  alt=""
                  class="rating-star"
                /><img
                  src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6eb38d0d66d1e4a9c50e8_star.svg"
                  loading="lazy"
                  alt=""
                  class="rating-star"
                /><img
                  src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6eb38d0d66d1e4a9c50e8_star.svg"
                  loading="lazy"
                  alt=""
                  class="rating-star"
                /><img
                  src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6eb38d0d66d1e4a9c50e8_star.svg"
                  loading="lazy"
                  alt=""
                  class="rating-star"
                />
              </div>
              <div class="rating-flex">
                <div class="pro-label">Customers:</div>
                <div><div>46 Persons</div></div>
              </div>
              <div class="rating-flex">
                <div class="pro-label">Price:</div>
                <div><div class="product-price no">N45,000</div></div>
              </div>
              <div class="rating-flex">
                <div class="pro-label">ADD</div>
                <div>
                  <div class="action-holder fl">
                    <div @click="removeFromCart" class="action-btn">
                      <div>-</div>
                    </div>
                    <div>{{ selectedProduct.cartNumber }}</div>
                    <div @click="addToCart" class="action-btn">
                      <div>+</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="comment"
                v-html="selectedProduct.productDescription"
              ></div>
            </div>
          </div>
          <product-comment />
        </div>
      </div>
    </div>
    <footer-component />
  </div>
</template>

<script>
import AlertBox from "../../../components/AlertBox.vue";
import AlertConfirmation from "../../../components/AlertConfirmation.vue";
import CartItems from "../../../components/CartItems.vue";
import CompanyAds from "../../../components/CompanyAds.vue";
import FooterComponent from "../../../components/FooterComponent";
import HorizontalNav from "../../../components/HorizontalNav.vue";
import MobileBottomNav from "../../../components/MobileBottomNav.vue";
import ProductComment from "../../../components/ProductComment.vue";
import VerticalNav from "../../../components/VerticalNav.vue";
export default {
  methods: {
    removeFromCart(data) {
      this.$store.commit("productStore/REMOVE_FROM_CART", data);
    },

    addToCart(data) {
      this.$store.commit("productStore/ADD_TO_CART", data);
    },
  },
  components: {
    CompanyAds,
    HorizontalNav,
    VerticalNav,
    MobileBottomNav,
    FooterComponent,
    CartItems,
    AlertBox,
    AlertConfirmation,
    ProductComment,
  },

  computed: {
    selectedProduct() {
      return this.$store.state.productStore.selectedObject;
    },
  },

  async asyncData({ params, store }) {
    const id = params.id;
    await store.dispatch("productStore/GET_OBJECT", id);
  },
};
</script>

<style></style>
