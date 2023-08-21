<template>
  <div class="grace orders">
    <alert-box />
    <alert-confirmation />
    <div class="main-body">
      <vertical-nav />
      <div class="main-flex">
        <company-ads />
        <horizontal-nav />
        <div class="custom-container">
          <div class="body-flex">
            <div class="content-body">
              <each-order
                v-for="order in orders"
                :key="order._id"
                :order="order"
              />
              <div class="transaction-table">
                <div class="pagination table">
                  <div class="page-result">
                    <h3 class="page-result-txt">
                      Results: {{ resultLength }}, Page {{ currentPage }} of
                      {{ pages().length }}
                    </h3>
                  </div>
                  <ul role="list" class="pagination-list">
                    <li
                      class="page"
                      v-if="currentPage > 1"
                      @click="paginate(currentPage - 1)"
                    >
                      <i class="material-symbols-outlined orange"
                        >arrow_back_ios</i
                      >
                    </li>
                    <li
                      v-for="(page, int) in pages().length"
                      :key="int"
                      class="page"
                      @click="paginate(int + 1)"
                      :class="{ active: int + 1 == currentPage }"
                    >
                      <div>{{ int + 1 }}</div>
                    </li>

                    <li
                      class="page"
                      v-if="currentPage != pages().length"
                      @click="paginate(currentPage + 1)"
                    >
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
        <footer-component />
      </div>
    </div>
    <mobile-bottom-nav />
  </div>
</template>

<script>
import EachOrder from "../../components/Admin/EachOrder";
import AlertBox from "../../components/AlertBox.vue";
import AlertConfirmation from "../../components/AlertConfirmation";
import CompanyAds from "../../components/CompanyAds.vue";
import FooterComponent from "../../components/FooterComponent";
import HorizontalNav from "../../components/HorizontalNav.vue";
import MobileBottomNav from "../../components/MobileBottomNav.vue";
import VerticalNav from "../../components/VerticalNav.vue";
export default {
  data() {
    return {
      sort: "-time",
      field: "",
      limit: 5,
      message: "",
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
  methods: {},
  computed: {
    user() {
      return this.$store.state.auth.user;
    },

    orders() {
      return this.$store.state.userStore.orders;
    },
    resultLength() {
      return this.$store.state.userStore.orderLength;
    },
  },
  components: {
    AlertBox,
    AlertConfirmation,
    FooterComponent,
    MobileBottomNav,
    CompanyAds,
    HorizontalNav,
    VerticalNav,
    EachOrder,
  },
};
</script>

<style></style>
