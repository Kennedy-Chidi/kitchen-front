<template>
  <div>
    <div class="grace promotions">
      <alert-box />
      <alert-confirmation />
      <cart-items />
      <div class="main-body">
        <vertical-nav />
        <div class="main-flex">
          <company-ads />
          <horizontal-nav />
          <div class="custom-container">
            <div class="body-flex">
              <div class="content-body">
                <div class="nav-pag">
                  <nuxt-link to="/" class="home-txt">Home - </nuxt-link
                  ><nuxt-link to="/dashboard/promotions" class="page-txt"
                    >Promotions</nuxt-link
                  >
                </div>
                <div class="w-form">
                  <div class="transaction-table">
                    <div class="table-head admin pro">
                      <div class="order-price link">
                        Copy and Send your Referral Link
                      </div>
                      <div class="newsletter-wrap pro">
                        <input
                          type="text"
                          class="newsletter-input link w-input"
                          maxlength="256"
                          name="link-2"
                          data-name="Link 2"
                          placeholder="kitchengrace.io?username=Kenny"
                          id="link-2"
                        />
                        <i
                          class="material-symbols-outlined orange newsletter-img"
                          >content_copy</i
                        >
                      </div>
                    </div>
                    <div class="table">
                      <div class="table-head-row">
                        <div class="tb-sn"><div>S/N</div></div>
                        <div class="c30 spend"><div>Promo Name</div></div>
                        <div class="c20 promo"><div>Spent</div></div>
                        <div class="c20 promo"><div>Target</div></div>
                        <div class="c20 promo"><div>Gift</div></div>
                        <div class="c20 time promo"><div>Duration</div></div>
                        <div class="c20 promo stat"><div>Status</div></div>
                      </div>
                      <div
                        v-for="(promo, int) in promotions"
                        :key="int"
                        class="table-head-row body"
                      >
                        <div class="tb-sn spend">
                          <div class="inner-label">S/N:</div>
                          <div>{{ (currentPage - 1) * limit + int + 1 }}</div>
                        </div>
                        <div class="c30 spend">
                          <div class="inner-label">Name:</div>
                          <div>{{ promo.promoName }}</div>
                        </div>
                        <div class="c20 promo">
                          <div class="inner-label">Spent:</div>
                          <div>N{{ formatNumber(promo.promoAmount) }}</div>
                        </div>
                        <div class="c20 promo">
                          <div class="inner-label">Target:</div>
                          <div>N{{ formatNumber(promo.promoTarget) }}</div>
                        </div>
                        <div class="c20 promo">
                          <div class="inner-label">Gift:</div>
                          <div>
                            <div
                              v-for="(item, index) in promo.promoGifts"
                              :key="index"
                            >
                              {{ item }}
                            </div>
                          </div>
                        </div>
                        <div class="c20 time promo">
                          <div class="inner-label">Time:</div>
                          <div>{{ formatDate(promo.promoStart) }} to</div>
                          <div class="end">
                            {{ formatDate(promo.promoEnd) }}
                          </div>
                        </div>
                        <div class="c20 promo stat">
                          <div class="inner-label">Status:</div>
                          <div class="custom-btn edge bonus">
                            <div>
                              {{
                                (
                                  (promo.promoAmount * 100) /
                                  promo.promoTarget
                                ).toFixed(2)
                              }}%
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="pagination table">
                        <div class="page-result">
                          <h3 class="page-result-txt">
                            Results: {{ resultLength }}, Page
                            {{ currentPage }} of
                            {{ pages().length }}
                          </h3>
                        </div>

                        <ul
                          v-if="pages().length > 1"
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
  </div>
</template>

<script>
import AlertBox from "../../components/AlertBox.vue";
import AlertConfirmation from "../../components/AlertConfirmation.vue";
import CartItems from "../../components/CartItems.vue";
import CompanyAds from "../../components/CompanyAds.vue";
import FooterComponent from "../../components/FooterComponent.vue";
import HorizontalNav from "../../components/HorizontalNav";
import MobileBottomNav from "../../components/MobileBottomNav.vue";
import VerticalNav from "../../components/VerticalNav.vue";
export default {
  data() {
    return {
      sort: "-promoTarget",
      limit: 5,
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

    formatDate(data) {
      function getOrdinalSuffix(day) {
        const suffixes = ["th", "st", "nd", "rd"];
        const mod = day % 100;
        return (
          day + (suffixes[(mod - 20) % 10] || suffixes[mod] || suffixes[0])
        );
      }

      if (!data) {
        return "";
      }
      const date = new Date(data);
      const day = date.getDate();
      const month = date.toLocaleString("default", { month: "short" });
      const year = date.getFullYear();

      return `${getOrdinalSuffix(day)} ${month}. ${year}`;
    },
  },
  computed: {
    promotions() {
      return this.$store.state.userStore.promos;
    },

    resultLength() {
      return this.$store.state.userStore.promoLength;
    },

    user() {
      return this.$store.state.auth.user;
    },
  },

  components: {
    AlertBox,
    AlertConfirmation,
    CompanyAds,
    HorizontalNav,
    VerticalNav,
    CartItems,
    FooterComponent,
    MobileBottomNav,
  },
};
</script>

<style></style>
