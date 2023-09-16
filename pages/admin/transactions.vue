<template>
  <div class="">
    <div class="custom-container">
      <div class="body-flex">
        <div class="content-body">
          <div class="w-form">
            <div class="transaction-table">
              <div class="table-head admin">
                <div class="date-range">
                  <div class="each-date">
                    <label for="field-4" class="label">From</label
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
                    <label for="field-4" class="label">To</label
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
                <div class="table-filter">
                  <div class="tb-filter-head">
                    <div>All Transactions</div>
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
                <div class="tb-amounts">
                  <div class="tb-amount">
                    Spent: <span class="amount-value">N45,000</span>
                  </div>
                  <div class="tb-amount">
                    Sold: <span class="amount-value">N45,000</span>
                  </div>
                  <div class="tb-amount">
                    Profit: <span class="amount-value profit">N45,000</span>
                  </div>
                </div>
              </div>
              <div class="table">
                <div class="table-head-row">
                  <div class="tb-sn"><div>S/N</div></div>
                  <div class="c30"><div>Description</div></div>
                  <div class="c20"><div>State</div></div>
                  <div class="c20"><div>User</div></div>
                  <div class="c20"><div>Amount</div></div>
                  <div class="c20"><div>Date</div></div>
                </div>
                <div
                  v-for="(transaction, int) in transactions"
                  :key="int"
                  class="table-head-row body"
                  :class="{ even: int % 2 == 0 }"
                >
                  <div class="tb-sn">
                    <div class="inner-label">S/N:</div>
                    <div>{{ (currentPage - 1) * limit + int + 1 }}</div>
                  </div>
                  <div class="c30">
                    <div class="inner-label">Description:</div>
                    <div
                      v-for="(item, index) in transaction.description"
                      :key="index"
                    >
                      <div>
                        {{ item.quantity }}
                        <span
                          v-if="transaction.transactionType == 'Purchase'"
                          >{{ item.productBuyingUnit }}</span
                        >
                        <span v-if="transaction.transactionType == 'Order'">{{
                          item.productSellingUnit
                        }}</span>
                        of
                        {{ item.productName }}
                      </div>
                    </div>
                  </div>
                  <div v-if="transaction.username" class="c20">
                    <div class="inner-label">Username:</div>
                    <div>{{ transaction.username }}</div>
                  </div>
                  <div v-else class="c20">
                    <div class="inner-label">Staff:</div>
                    <div v-if="transaction.salesRep">
                      {{ transaction.salesRep.username }}
                    </div>
                  </div>
                  <div class="c20">
                    <div class="inner-label">Transction:</div>
                    <div>{{ transaction.transactionType }}</div>
                  </div>

                  <div class="c20">
                    <div class="inner-label">Amount:</div>
                    <div>N{{ formatNumber(transaction.totalAmount) }}</div>
                  </div>
                  <div class="c20">
                    <div class="inner-label">Time:</div>
                    <div>
                      {{ formartTime(transaction.time) }}, <br />{{
                        formatDate(transaction.time)
                      }}
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
                    <li
                      @click="paginate(currentPage - 1)"
                      v-if="currentPage > 1"
                      class="page"
                    >
                      <i class="material-symbols-outlined orange"
                        >arrow_back_ios</i
                      >
                    </li>
                    <li
                      v-for="(item, int) in pages().length"
                      :key="int"
                      @click="paginate(int + 1)"
                      class="page"
                      :class="{ active: int + 1 == currentPage }"
                    >
                      <div>{{ int + 1 }}</div>
                    </li>

                    <li
                      @click="paginate(currentPage + 1)"
                      v-if="currentPage < pages().length"
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
</template>

<script>
import CompanyAds from "../../components/CompanyAds.vue";
import FooterComponent from "../../components/FooterComponent.vue";
import HorizontalNav from "../../components/HorizontalNav.vue";
import MobileBottomNav from "../../components/MobileBottomNav.vue";
import VerticalNav from "../../components/VerticalNav.vue";
export default {
  components: {
    CompanyAds,
    HorizontalNav,
    VerticalNav,
    FooterComponent,
    MobileBottomNav,
  },
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

      timeFrom: "",
      timeTo: "",
    };
  },

  methods: {
    showResponseMsg(msg, status) {
      this.response = msg;
      this.isError = status;
      this.showResponse = true;
      this.onRequest = false;
      setTimeout(() => {
        this.response = "";
        this.showResponse = false;
      }, 6000);
    },

    formatNumber(number) {
      if (!number) {
        return "0.00";
      }
      const options = { style: "decimal", maximumFractionDigits: 0 };
      return number.toLocaleString("en-US", options);
    },

    formartTime(data) {
      if (!data) {
        return "0:0";
      }
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
      this.getTransactions();
    },

    paginate(page) {
      this.currentPage = page;
      this.getTransactions();
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

    closeOverlay() {
      this.showOverlay = false;
      this.overlayMsg = "";
      if (this.deleteId != "" && this.overlaySignal == "single") {
        this.deleteuser();
      } else {
        this.deletetransactions();
      }
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
      const query = `?limit=${this.limit}&page=${this.currentPage}${this.time}&state=${this.user.state}`;
      this.$store.dispatch("settingsStore/GET_TRANSACTIONS", query);
    },
  },

  computed: {
    time() {
      return `${this.timeFrom}${this.timeTo}`;
    },

    transactions() {
      return this.$store.state.settingsStore.transactions;
    },

    resultLength() {
      return this.$store.state.settingsStore.transactionLength;
    },
  },
};
</script>

<style></style>
