<template>
  <div class="grace purchase">
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
                    <div class="table-filter foot">
                      <div class="tb-filter-head">
                        <div>Select Product</div>
                        <img
                          src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b81c16b31d7eadba21fa56_down.svg"
                          loading="lazy"
                          alt=""
                          class="filter-icon left"
                        />
                      </div>
                      <ul role="list" class="tb-filter-list">
                        <li class="tb-list"><div>Orders</div></li>
                        <li class="tb-list"><div>Sales</div></li>
                        <li class="tb-list"><div>Purchases</div></li>
                        <li class="tb-list"><div>Expenses</div></li>
                      </ul>
                    </div>
                    <div class="sort-range pro">
                      <div class="sort-wrapper">
                        <div>Name</div>
                        <img
                          src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b751d192eeacec8dbc3538_sort.svg"
                          loading="lazy"
                          alt=""
                          class="filter-icon"
                        />
                      </div>
                      <div class="sort-wrapper">
                        <div>Amount</div>
                        <img
                          src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b751d192eeacec8dbc3538_sort.svg"
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
                        name="name-5"
                        data-name="Name 5"
                        placeholder="Search Product"
                        id="name-5"
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
                      <div class="tb-image"><div>Image</div></div>
                      <div class="c30 name"><div>Product</div></div>
                      <div class="c20 pro"><div>Price</div></div>
                      <div class="c20 pro"><div>Remaining</div></div>
                      <div class="c20 times"><div>Action</div></div>
                    </div>
                    <div
                      v-for="(product, int) in products"
                      :key="int"
                      class="table-head-row body"
                      :class="{ even: int % 2 == 0 }"
                    >
                      <div class="tb-sn pro">
                        <div class="inner-label">S/N:</div>
                        <div>{{ (currentPage - 1) * limit + int + 1 }}</div>
                      </div>
                      <div class="tb-image pro">
                        <div class="inner-label">Image:</div>
                        <img
                          :src="product.productImageUrl"
                          loading="lazy"
                          sizes="(max-width: 479px) 44vw, (max-width: 767px) 19vw, (max-width: 991px) 14vw, (max-width: 1279px) 10vw, 110px"
                          :srcset="`
                            ${product.productImageUrl} 500w,
                            ${product.productImageUrl} 800w,
                            ${product.productImageUrl}     953w
                          `"
                          alt=""
                          class="item-img"
                        />
                      </div>
                      <div class="c30 name pro">
                        <div class="inner-label">Product:</div>
                        <div>{{ product.productName }}</div>
                      </div>
                      <div class="c20 pro">
                        <div class="inner-label">Price:</div>
                        <div>
                          N{{ formatNumber(product.productSellingPrice) }}
                        </div>
                      </div>
                      <div v-if="product.remaining" class="c20 pro">
                        <div class="inner-label">Remaining:</div>
                        <div>
                          {{ product.remaining[0] }}
                          {{ product.productBuyingUnit }}
                        </div>
                        <div>
                          {{ product.remaining[1] }}
                          {{ product.productSellingUnit }}
                        </div>
                      </div>
                      <div class="c20 times">
                        <div class="inner-label">Position:</div>
                        <div class="action-holder tb">
                          <div class="action-btn"><div>-</div></div>
                          <div>0</div>
                          <div class="action-btn"><div>+</div></div>
                        </div>
                      </div>
                    </div>

                    <div class="pagination table">
                      <div class="page-result">
                        <h3 class="page-result-txt">
                          Results: {{ resultLength }}, Page {{ currentPage }} of
                          {{ pages().length }}
                        </h3>
                      </div>

                      <ul
                        v-if="pages().length > 0"
                        role="list"
                        class="pagination-list"
                      >
                        <li v-if="currentPage > 1" class="page">
                          <i class="material-symbols-outlined orange"
                            >arrow_back_ios</i
                          >
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
                  </div>
                  <div class="table-head admin pro">
                    <div class="tb-filter-head"><div>Anonimous</div></div>
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
import FooterComponent from "../../components/FooterComponent.vue";
import HorizontalNav from "../../components/HorizontalNav";
import MobileBottomNav from "../../components/MobileBottomNav.vue";
import VerticalNav from "../../components/VerticalNav.vue";
export default {
  data() {
    return {
      sort: "-time",
      limit: 10,
      currentPage: 1,
      pages: function () {
        let array = [];
        let x = Math.ceil(this.resultLength / this.limit);
        for (let i = 0; i < x; i++) {
          array.push("i");
        }
        return array;
      },
    };
  },
  methods: {
    formatNumber(number) {
      if (!number) {
        return "0.00";
      }
      const options = { style: "decimal", maximumFractionDigits: 0 };
      return number.toLocaleString("en-US", options);
    },
  },
  computed: {
    products() {
      return this.$store.state.settingsStore.products;
    },

    resultLength() {
      return this.$store.state.settingsStore.productLength;
    },
  },
  components: {
    FooterComponent,
    CompanyAds,
    HorizontalNav,
    VerticalNav,
    MobileBottomNav,
  },
};
</script>

<style></style>
