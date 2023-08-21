<template>
  <div class="grace">
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
                  <div class="table notify">
                    <div
                      v-for="notice in notices"
                      :key="notice._id"
                      class="each-notification"
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6c1ec16b2737439b284fc_logo.png"
                        loading="lazy"
                        alt=""
                        class="notification-logo"
                      />
                      <div>
                        <div class="note-title">{{ notice.title }}</div>
                        <div class="notification-time">
                          {{ formartTime(notice.time) }}
                          {{ formatDate(notice.time) }}
                        </div>
                        <div
                          class="notification-body"
                          v-html="notice.content"
                        ></div>
                      </div>
                    </div>

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
    HorizontalNav,
    CartItems,
    VerticalNav,
    MobileBottomNav,
    FooterComponent,
    CompanyAds,
    AlertBox,
    AlertConfirmation,
  },
  data() {
    return {
      newLimit: 5,
      sort: "-time",
      field: "",
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

      company: "",
      properties: "",
    };
  },
  methods: {
    sortResult() {
      this.sort = this.sort == "-time" ? "time" : "-time";
      this.getEmails();
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

    paginate(page) {
      this.currentPage = page;
      this.getNotifications();
    },

    async clearNotifications() {
      const form = new FormData();
      form.append("unreadMessages", 0);
      const result = await this.$store.dispatch("userStore/UPDATE_ME", form);
      this.$store.commit("UPDATE_ME", result.data.user);
    },

    getNotifications() {
      const query = `?limit=${this.limit}&page=${this.currentPage}&username=${this.user.username}&sort=${this.sort}`;
      this.$store.dispatch("userStore/GET_MESSAGES", query);
    },
  },

  mounted() {
    if (this.user.unreadMessages > 0) {
      this.clearNotifications();
    }
  },

  computed: {
    user() {
      return this.$store.state.auth.user;
    },

    notices() {
      return this.$store.state.userStore.notices;
    },
    resultLength() {
      return this.$store.state.userStore.noticeLength;
    },
  },
};
</script>

<style></style>
