<template>
  <div class="grace banner">
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
              <div class="w-form">
                <div class="transaction-table">
                  <div class="table-head admin pro">
                    <div class="sort-range ban">
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
                  </div>
                  <div class="table">
                    <div class="table-head-row">
                      <div class="tb-sn"><div>S/N</div></div>
                      <div class="tb-image ban"><div>Image</div></div>
                      <div class="c30 ban"><div>Page</div></div>
                      <div class="c20 ban"><div>Intro</div></div>
                      <div class="c20 ban"><div>Title</div></div>
                      <div class="c20 ban"><div>Subtitle</div></div>
                    </div>

                    <div class="table-head-row body">
                      <div class="tb-sn ban">
                        <div class="inner-label">S/N:</div>
                        <div>1</div>
                        <div class="check-box"><div class="check"></div></div>
                      </div>
                      <div class="tb-image ban">
                        <div class="inner-label">Image:</div>
                        <img
                          src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b79b7b42421ae3cbdb6ff8_ceo.png"
                          loading="lazy"
                          sizes="110px"
                          srcset="
                            https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b79b7b42421ae3cbdb6ff8_ceo-p-500.png 500w,
                            https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b79b7b42421ae3cbdb6ff8_ceo-p-800.png 800w,
                            https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b79b7b42421ae3cbdb6ff8_ceo.png       953w
                          "
                          alt=""
                          class="item-img"
                        />
                      </div>
                      <div class="c30 ban">
                        <div class="inner-label">Page:</div>
                        <div>Gino Tomato</div>
                      </div>
                      <div class="c20 ban">
                        <div class="inner-label">Intro:</div>
                        <div>N45,000</div>
                      </div>
                      <div class="c20 ban">
                        <div class="inner-label">Title:</div>
                        <div>N45,000</div>
                      </div>
                      <div class="c20 ban">
                        <div class="inner-label">Subtitle:</div>
                        <div>N45,000</div>
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
                  <div class="table-head foot">
                    <div class="check-box all"><div class="check"></div></div>
                    <div class="actions-foot">
                      <img
                        src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b92e5ec6f83ddafd16c20a_copy.svg"
                        loading="lazy"
                        alt=""
                        class="action-icons"
                      /><img
                        src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b8e29972782f01aa826a75_edit.svg"
                        loading="lazy"
                        alt=""
                        class="action-icons"
                      /><img
                        src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b84d212e330d5af9503296_delete.svg"
                        loading="lazy"
                        alt=""
                        class="action-icons h"
                      />
                    </div>
                  </div>

                  <div class="table-head ban">
                    <div class="each-input part">
                      <label for="name-15" class="label">Title</label
                      ><input
                        type="text"
                        class="custom-input w-input"
                        maxlength="256"
                        name="name-14"
                        data-name="Name 14"
                        placeholder="Enter First Name"
                        id="name-14"
                      />
                    </div>
                    <div class="each-input part">
                      <label for="name-15" class="label">Title</label
                      ><input
                        type="text"
                        class="custom-input w-input"
                        maxlength="256"
                        name="name-14"
                        data-name="Name 14"
                        placeholder="Enter First Name"
                        id="name-14"
                      />
                    </div>
                    <div class="each-input part">
                      <label for="name-15" class="label">Title</label
                      ><input
                        type="text"
                        class="custom-input w-input"
                        maxlength="256"
                        name="name-14"
                        data-name="Name 14"
                        placeholder="Enter First Name"
                        id="name-14"
                      />
                    </div>
                    <div class="each-input part">
                      <label for="name-15" class="label">Title</label
                      ><input
                        type="text"
                        class="custom-input w-input"
                        maxlength="256"
                        name="name-14"
                        data-name="Name 14"
                        placeholder="Enter First Name"
                        id="name-14"
                      />
                    </div>
                    <div class="btn-holder">
                      <div class="custom-btn edge color">
                        <img
                          src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b799b47c0010e65ffca458_loader-icon%201.svg"
                          loading="lazy"
                          alt=""
                          class="btn-icon spinner"
                        />
                        <div>Processingg</div>
                      </div>
                      <div class="custom-btn edge color">
                        <div>Submit Application</div>
                      </div>
                    </div>
                    <label for="field-6" class="response error"
                      >Sorry, something went wrong</label
                    >
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
import AlertConfirmation from "../../components/AlertConfirmation.vue";
import CompanyAds from "../../components/CompanyAds.vue";
import FooterComponent from "../../components/FooterComponent";
import HorizontalNav from "../../components/HorizontalNav.vue";
import MobileBottomNav from "../../components/MobileBottomNav.vue";
import VerticalNav from "../../components/VerticalNav.vue";
export default {
  components: {
    AlertBox,
    AlertConfirmation,
    FooterComponent,
    CompanyAds,
    HorizontalNav,
    VerticalNav,
    MobileBottomNav,
  },
  data() {
    return {
      bannerPage: "",
      bannerIntro: "",
      bannerTitle: "",
      bannerSubtitle: "",
      bannerImage: "",
      banners: [],

      editingState: false,
      editingId: "",

      response: "",
      isError: false,
      showResponse: false,
      onRequest: false,
      showEditor: false,
      showProductList: false,
      deleteId: "",

      showOverlay: false,
      overlayMsg: "",

      field: "",
      sort: "-time",
      limit: 3,
      resultLength: "",
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

    setBanner(event) {
      this.bannerImage = event.target.files[0];
    },

    clearInputs() {
      this.editingId = "";
      this.editingState = false;
      this.bannerIntro = "";
      this.bannerTitle = "";
      this.bannerSubtitle = "";
      this.bannerImage = "";
    },

    showConfirmation(msg, id) {
      this.deleteId = id;
      this.confirmMessage = msg;
      this.confirmStatus = false;
    },

    returnConfirmation(data) {
      if (data == "yes") {
        this.deleteBanner(this.deleteId);
      }
      this.confirmStatus = true;
    },

    prepareBannerEdit(banner) {
      this.editingId = banner._id;
      this.editingState = true;
      this.bannerImage = banner.bannerImage;
      this.bannerIntro = banner.bannerIntro;
      this.bannerTitle = banner.bannerTitle;
      this.bannerSubtitle = banner.bannerSubtitle;
      this.bannerPage = banner.bannerPage;
    },

    getField(data) {
      if (data == "All Banner") {
        this.field = "";
      } else {
        this.field = `&bannerCategory=${data}`;
      }
      this.hideCategory = true;
      this.getBanner();
    },

    sortResult() {
      this.sort = this.sort == "-time" ? "time" : "-time";
      this.getBanner();
    },

    paginate(page) {
      this.currentPage = page;
      this.getBanner();
    },

    closeOverlay() {
      this.showOverlay = false;
      this.overlayMsg = "";
      this.deleteBanner();
    },

    startBannerDelete(id) {
      this.showOverlay = true;
      this.overlayMsg = "Are you sure you want to delete this banner?";
      this.deleteId = id;
    },

    processBanner() {
      this.onRequest = true;
      const form = new FormData();
      form.append("bannerPage", this.bannerPage);
      form.append("bannerIntro", this.bannerIntro);
      form.append("bannerTitle", this.bannerTitle);
      form.append("bannerSubtitle", this.bannerSubtitle);
      form.append("bannerImage", this.bannerImage);
      if (this.editingState) {
        this.updateBanner(form);
      } else {
        this.createBanner(form);
      }
    },

    async updateBanner(form) {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}${this.field}`;
      try {
        const result = await this.$axios.patch(
          `/banner/${this.editingId}/${query}`,
          form
        );
        this.clearInputs();
        this.banners = result.data.data;
        this.resultLength = result.data.resultLength;
      } catch (err) {
        this.showR;
      }
    },

    async createBanner(form) {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}${this.field}`;
      try {
        const result = await this.$axios.post(`/banner/${query}`, form);
        this.clearInputs();
        this.banners = result.data.data;
        this.resultLength = result.data.resultLength;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async getBanner() {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}${this.field}`;
    },

    async deleteBanner() {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}${this.field}`;
      try {
        const result = await this.$axios.delete(
          `/banner/${this.deleteId}/${query}`
        );
        this.banners = result.data.data;
        this.resultLength = result.data.resultLength;
        this.clearInputs();
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
  },
};
</script>

<style></style>
