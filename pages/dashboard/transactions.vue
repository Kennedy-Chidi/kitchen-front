<template>
  <div class="grace transactions user">
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
              <div class="w-form">
                <div class="transaction-table">
                  <div v-if="transactionProp.length == 0" class="nothing-div">
                    <img
                      src="/images/not-found.svg"
                      loading="lazy"
                      alt=""
                      class="nothing-img"
                    />
                    <div class="not-found">Sorry No Transactions Found</div>
                  </div>
                  <div v-else class="table-head">
                    <div class="date-range">
                      <div class="each-date">
                        <label for="field-3" class="label">From</label
                        ><input
                          type="text"
                          class="date-input w-input"
                          maxlength="256"
                          name="field-3"
                          data-name="Field 3"
                          placeholder="Example Text"
                          id="field-3"
                          required=""
                        />
                      </div>
                      <div class="each-date">
                        <label for="field-3" class="label">To</label
                        ><input
                          type="text"
                          class="date-input w-input"
                          maxlength="256"
                          name="field-3"
                          data-name="Field 3"
                          placeholder="9:00AM 20/20/2023"
                          id="field-3"
                          required=""
                        />
                      </div>
                    </div>
                    <div class="sort-range">
                      <div class="sort-wrapper">
                        <div>Price</div>
                        <img
                          src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b751d192eeacec8dbc3538_sort.svg"
                          loading="lazy"
                          alt=""
                          class="filter-icon"
                        />
                      </div>
                      <div class="sort-wrapper">
                        <div>Date</div>
                        <img
                          src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b751d192eeacec8dbc3538_sort.svg"
                          loading="lazy"
                          alt=""
                          class="filter-icon"
                        />
                      </div>
                    </div>
                  </div>
                  <div v-if="transactionProp.length > 0" class="table">
                    <div class="table-head-row">
                      <div class="tb-sn"><div>S/N</div></div>
                      <div class="c30"><div>Description</div></div>
                      <div class="c20"><div>Amount</div></div>
                      <div class="c20"><div>Date</div></div>
                      <div class="c20"><div>Receipt</div></div>
                    </div>

                    <div
                      v-for="(item, int) in transactionProp.transactions"
                      :key="int"
                      class="table-head-row body"
                      :class="{ even: int % 2 == 0 }"
                    >
                      <div class="tb-sn">
                        <div class="inner-label">S/N:</div>
                        <div>{{ (currentPage - 1) * limit + int + 1 }}</div>
                      </div>
                      <div class="c30">
                        <div class="inner-label">Description</div>
                        <div>
                          <div
                            v-for="(des, index) in item.description"
                            :key="index"
                          >
                            {{ des.quantity }} {{ des.productName }}
                          </div>
                        </div>
                      </div>
                      <div class="c20">
                        <div class="inner-label">Amount:</div>
                        <div>N{{ formatNumber(item.totalAmount) }}</div>
                      </div>
                      <div class="c20">
                        <div class="inner-label">Time:</div>
                        <div>
                          {{ formartTime(item.time) }}, <br />{{
                            formatDate(item.time)
                          }}
                        </div>
                      </div>
                      <div class="c20">
                        <div class="inner-label">Payment:</div>
                        <div class="receipt">Receipt</div>
                      </div>
                    </div>

                    <div class="pagination table">
                      <div class="page-result">
                        <h3 class="page-result-txt">
                          Results: {{ transactionProp.length }}, Page
                          {{ currentPage }} of {{ pages().length }}
                        </h3>
                      </div>

                      <ul role="list" class="pagination-list">
                        <li
                          v-if="currentPage > 1"
                          @click="paginate(currentPage - 1)"
                          class="page"
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
                          v-if="currentPage != pages().length"
                          @click="paginate(currentPage + 1)"
                          class="page"
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
          </div>
        </div>
        <footer-component />
      </div>
    </div>
    <mobile-bottom-nav />
  </div>
</template>

<script>
import AlertBox from "../../components/AlertBox.vue";
import AlertConfirmation from "../../components/AlertConfirmation";
import CartItems from "../../components/CartItems";
import CompanyAds from "../../components/CompanyAds.vue";
import FooterComponent from "../../components/FooterComponent";
import HorizontalNav from "../../components/HorizontalNav.vue";
import MobileBottomNav from "../../components/MobileBottomNav";
import VerticalNav from "../../components/VerticalNav.vue";
export default {
  components: {
    CompanyAds,
    HorizontalNav,
    VerticalNav,
    AlertBox,
    AlertConfirmation,
    CartItems,
    FooterComponent,
    MobileBottomNav,
  },
  data() {
    return {
      newLimit: 5,
      sort: "-time",
      limit: 5,
      resultLength: "",
      currentPage: 1,
      pages: function () {
        let array = [];
        let x = Math.ceil(this.transactionProp.length / this.limit);
        for (let i = 0; i < x; i++) {
          array.push("i");
        }
        return array;
      },

      totalAmount: "",
      timeFrom: "",
      timeTo: "",
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

    formartTime(data) {
      const date = new Date(data);
      return date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
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

    sortResult() {
      this.sort = this.sort == "-time" ? "time" : "-time";
      this.getEmails();
    },

    paginate(page) {
      this.currentPage = page;
      this.getTransactions();
    },

    getNewProductsLimit() {
      this.limit = this.newLimit;
      this.getProducts();
    },

    refresh() {
      this.timeFrom = "";
      this.timeTo = "";
      this.getTransactions();
    },

    setFrom(e) {
      this.timeFrom = `&time[gte]=${new Date(e.target.value).getTime()}`;
      this.getTransactions();
    },

    setTo(e) {
      this.timeTo = `&time[lte]=${new Date(e.target.value).getTime()}`;
      this.getTransactions();
    },

    async fetchItems(e) {
      const data = {
        keyWord: e.target.value,
        limit: this.limit,
        page: this.currentPage,
      };
      this.$socket.emit("fetchItems", data);
    },

    async getTransactions() {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}&username=${this.user.username}${this.time}`;
      this.$store.dispatch("userStore/GET_TRANSACTIONS", query);
    },
  },

  computed: {
    user() {
      return this.$store.state.auth.user;
    },

    time() {
      return `${this.timeFrom}${this.timeTo}`;
    },

    transactionProp() {
      return {
        transactions: this.$store.state.userStore.transactions,
        length: this.$store.state.userStore.transactionLength,
      };
    },
  },
};
</script>

<style></style>
