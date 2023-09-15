<template>
  <div class="grace products-set">
    <cart-items />
    <alert-box />
    <div class="main-body">
      <vertical-nav />

      <div class="main-flex">
        <company-ads />
        <horizontal-nav />
        <div class="custom-container">
          <div class="body-flex">
            <div class="content-body">
              <div class="w-form">
                <div class="transaction-table">
                  <div class="table-head admin pro">
                    <div class="sort-range ban">
                      <div @click="sortProductName" class="sort-wrapper">
                        <div>Name</div>
                        <img
                          src="/images/sort-icon.svg"
                          loading="lazy"
                          alt=""
                          class="filter-icon"
                        />
                      </div>
                      <div
                        @click="sortProductSellingPrice"
                        class="sort-wrapper"
                      >
                        <div>Amount</div>
                        <img
                          src="/images/sort-icon.svg"
                          loading="lazy"
                          alt=""
                          class="filter-icon"
                        />
                      </div>
                    </div>
                    <div class="newsletter-wrap pro">
                      <input
                        type="text"
                        class="newsletter-input search w-input"
                        maxlength="256"
                        name="name-16"
                        data-name="Name 16"
                        placeholder="Search Product"
                        id="name-16"
                      /><img
                        src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b75aa41127b73bc77763cb_search-line-icon%201.svg"
                        loading="lazy"
                        alt=""
                        class="newsletter-img"
                      />
                    </div>
                  </div>
                  <div class="table">
                    <div class="table-head-row">
                      <div class="tb-sn"><div>S/N</div></div>
                      <div class="tb-image ban"><div>Image</div></div>
                      <div class="c20 ban"><div>Name</div></div>
                      <div class="c20 ban"><div>Category</div></div>
                      <div class="c20 ban"><div>Buyin</div></div>
                      <div class="c20 ban"><div>Selling</div></div>
                      <div class="tb-image ban"><div>Status</div></div>
                    </div>
                    <div
                      v-for="(product, int) in productProperties.products"
                      :key="int"
                      class="table-head-row body"
                      :class="{ even: int % 2 == 0 }"
                    >
                      <div class="tb-sn ban">
                        <div class="inner-label">S/N:</div>
                        <div>{{ (currentPage - 1) * limit + int + 1 }}</div>
                        <div @click="toggleProduct(int)" class="check-box">
                          <div
                            class="check"
                            :class="{ active: product.checked }"
                          ></div>
                        </div>
                      </div>
                      <div class="tb-image ban">
                        <div class="inner-label">Image:</div>
                        <img
                          :src="product.productImageUrl"
                          loading="lazy"
                          sizes="110px"
                          :srcset="`
                        ${product.productImageUrl} 500w,
                        ${product.productImageUrl} 800w,
                        ${product.productImageUrl}      953w
                        `"
                          alt=""
                          class="item-img prod"
                        />
                      </div>
                      <div class="c20 ban part">
                        <div class="inner-label">Name:</div>
                        <div>
                          <nuxt-link
                            :to="`/product-details/${product._id}`"
                            class="user-link"
                            >{{ product.productName }}</nuxt-link
                          >
                        </div>
                      </div>
                      <div class="c20 ban part">
                        <div class="inner-label">Cateory:</div>
                        <div class="pro-cart">
                          <div
                            v-for="cat in product.productCategories"
                            :key="cat"
                          >
                            {{ cat }}<br />
                          </div>
                        </div>
                      </div>
                      <div class="c20 ban">
                        <div class="inner-label">Buying:</div>
                        <div>
                          <div>{{ product.productBuyingUnit }}</div>
                          <div>
                            N{{ formatNumber(product.productBuyingPrice) }}
                          </div>
                        </div>
                      </div>
                      <div class="c20 ban">
                        <div class="inner-label">Selling:</div>
                        <div class="pro-cart">
                          <div>{{ product.productSellingUnit }}</div>
                          <div class="new-price">
                            N{{ formatNumber(product.productSellingPrice) }}
                          </div>
                        </div>
                      </div>
                      <div class="tb-image ban act">
                        <div class="inner-label">Status:</div>
                        <div class="custom-btn edge used">
                          <div>Collected</div>
                        </div>
                      </div>
                    </div>

                    <div class="pagination table">
                      <div class="page-result">
                        <h3 class="page-result-txt">
                          Results: {{ productProperties.resultLength }}, Page
                          {{ productProperties.currentPage }} of
                          {{ pages.length }}
                        </h3>
                      </div>

                      <ul role="list" class="pagination-list">
                        <li class="page" @click="paginate(currentPage - 1)">
                          <img
                            src="/images/caret-left-icon.svg"
                            loading="lazy"
                            alt=""
                            class="page-icon"
                          />
                        </li>

                        <li
                          @click="paginate(int + 1)"
                          v-for="(page, int) in pages"
                          :key="int"
                          class="page"
                          :class="{ active: currentPage == int + 1 }"
                        >
                          <div>{{ int + 1 }}</div>
                        </li>

                        <li @click="paginate(currentPage + 1)" class="page">
                          <img
                            src="/images/caret-right-icon.svg"
                            loading="lazy"
                            alt=""
                            class="page-icon"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="table-head foot">
                    <div class="check-box all" @click="selectAll">
                      <div
                        class="check"
                        :class="{ active: isAllChecked }"
                      ></div>
                    </div>
                    <div class="actions-foot">
                      <i
                        @click="duplicateProduct"
                        class="material-symbols-outlined orange action-icons"
                        >content_copy</i
                      >

                      <i
                        @click="prepareProductEdit"
                        class="material-symbols-outlined orange action-icons"
                        >edit</i
                      >

                      <i class="material-symbols-outlined orange action-icons"
                        >delete</i
                      >
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
import CompanyAds from "../../components/CompanyAds.vue";
import HorizontalNav from "../../components/HorizontalNav";
import VerticalNav from "../../components/VerticalNav.vue";
import FooterComponent from "../../components/FooterComponent";
import MobileBottomNav from "../../components/MobileBottomNav.vue";
import CartItems from "../../components/CartItems.vue";

export default {
  data() {
    return {};
  },

  methods: {
    selectAll() {},
    sortProductName() {},
    sortProductSellingPrice() {},
    duplicateProduct() {},
    prepareProductEdit() {},
  },

  computed: {
    editorConfig() {
      return this.$store.state.editor.editorConfig;
    },

    isAllChecked() {},

    productProperties() {
      return {
        products: this.$store.state.productStore.productSettings,
        resultLength: this.$store.state.productStore.dataLength,
      };
    },

    selectedProducts() {
      return this.$store.state.productStore.selectedProductSettings;
    },

    countries() {
      return this.$store.state.countries;
    },
    states() {
      return this.$store.state.stateArray;
    },

    lgas() {
      return this.$store.state.lgas;
    },

    units() {
      return this.$store.state.units;
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
    "ckeditor-nuxt": () => {
      if (process.client) {
        return import("@blowstack/ckeditor-nuxt");
      }
    },
    CompanyAds,
    HorizontalNav,
    VerticalNav,
    FooterComponent,
    MobileBottomNav,
    CartItems,
  },
};
</script>

<style>
.search-flex.color {
  display: flex;
  background: transparent;
  padding-right: 0;
  padding-left: 0;
}

.color-text {
  width: 100%;
}
</style>
