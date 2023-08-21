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
                  <h3 class="page-result-txt">Results: 20, Page 1 of 5</h3>
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

              <div class="home-promos">
                <div class="top-promo-flex">
                  <div class="promo-header-flex">
                    <h1 class="promo-header">
                      Running Promos
                      <span class="promo-lighht">of this week</span>
                    </h1>
                    <div>Hurry up and make purchase while the promo is on!</div>
                  </div>
                  <div class="promo-count-flex">
                    <div class="promo-count-box"><div>00</div></div>
                    <div class="promo-dots">:</div>
                    <div class="promo-count-box"><div>00</div></div>
                    <div class="promo-dots">:</div>
                    <div class="promo-count-box"><div>00</div></div>
                    <div class="promo-dots">:</div>
                    <div class="promo-count-box"><div>00</div></div>
                  </div>
                </div>
              </div>
              <div class="promo-flex">
                <div class="each-promo">
                  <div class="promo-img">
                    <img
                      src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6ee85c5adf2f23b4de5c8_rice-royal-stallion.png"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div class="promo-footer">
                    <div class="promo-det">
                      <a href="#" class="product-name pro sm">Golden Morn</a>
                      <div class="product-price pro old">N4,000</div>
                      <a href="#" class="product-name pro">Ester Bonanza</a>
                      <div class="product-price pro">N4,000</div>
                    </div>
                    <div>
                      <div class="action-btn down"><div>+</div></div>
                      <div class="action-btn"><div>-</div></div>
                    </div>
                  </div>
                </div>
                <div class="each-promo">
                  <div class="promo-img">
                    <img
                      src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6ee85c5adf2f23b4de5c8_rice-royal-stallion.png"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div class="promo-footer">
                    <div class="promo-det">
                      <a href="#" class="product-name pro sm">Golden Morn</a>
                      <div class="product-price pro old">N4,000</div>
                      <a href="#" class="product-name pro">Ester Bonanza</a>
                      <div class="product-price pro">N4,000</div>
                    </div>
                    <div>
                      <div class="action-btn down"><div>+</div></div>
                      <div class="action-btn"><div>-</div></div>
                    </div>
                  </div>
                </div>
                <div class="each-promo">
                  <div class="promo-img">
                    <img
                      src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6ee85c5adf2f23b4de5c8_rice-royal-stallion.png"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div class="promo-footer">
                    <div class="promo-det">
                      <a href="#" class="product-name pro sm">Golden Morn</a>
                      <div class="product-price pro old">N4,000</div>
                      <a href="#" class="product-name pro">Ester Bonanza</a>
                      <div class="product-price pro">N4,000</div>
                    </div>
                    <div>
                      <div class="action-btn down"><div>+</div></div>
                      <div class="action-btn"><div>-</div></div>
                    </div>
                  </div>
                </div>
                <div class="each-promo">
                  <div class="promo-img">
                    <img
                      src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6ee85c5adf2f23b4de5c8_rice-royal-stallion.png"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div class="promo-footer">
                    <div class="promo-det">
                      <a href="#" class="product-name pro sm">Golden Morn</a>
                      <div class="product-price pro old">N4,000</div>
                      <a href="#" class="product-name pro">Ester Bonanza</a>
                      <div class="product-price pro">N4,000</div>
                    </div>
                    <div>
                      <div class="action-btn down"><div>+</div></div>
                      <div class="action-btn"><div>-</div></div>
                    </div>
                  </div>
                </div>
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
import HorizontalNav from "../components/HorizontalNav";
import VerticalNav from "../components/VerticalNav.vue";
import MobileBottomNav from "../components/MobileBottomNav";
import FooterComponent from "../components/FooterComponent";
import ProductDisplay from "../components/ProductDisplay.vue";
import CartItems from "../components/CartItems.vue";
import AlertBox from "../components/AlertBox";
import AlertConfirmation from "../components/AlertConfirmation.vue";
import CompanyAds from "../components/CompanyAds.vue";
import EachProduct from "../components/EachProduct.vue";
export default {
  data() {
    return {
      sort: "",
      limit: 30,
      currentPage: 1,
    };
  },

  computed: {
    productProperties() {
      return {
        products: this.$store.state.productStore.productArray,
        resultLength: this.$store.state.productStore.dataLength,
      };
    },

    isAuth() {
      return this.$store.state.auth;
    },

    pages() {
      let array = [];
      let x = Math.ceil(this.productProperties.resultLength / this.limit);
      for (let i = 0; i < x; i++) {
        array.push("i");
      }
      return array;
    },
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
  },
};
</script>

<style></style>
