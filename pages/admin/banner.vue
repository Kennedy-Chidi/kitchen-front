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

                    <div
                      v-for="(banner, int) in banners"
                      :key="int"
                      class="table-head-row body"
                    >
                      <div class="tb-sn ban">
                        <div class="inner-label">S/N:</div>
                        <div>{{ (currentPage - 1) * limit + int + 1 }}</div>
                        <div @click="toggleBanner(int)" class="check-box">
                          <div
                            class="check"
                            :class="{ active: banner.checked }"
                          ></div>
                        </div>
                      </div>
                      <div class="tb-image ban">
                        <div class="inner-label">Image:</div>
                        <img
                          :src="banner.bannerImageUrl"
                          loading="lazy"
                          sizes="110px"
                          :srcset="`
                            ${banner.bannerImageUrl} 500w,
                            ${banner.bannerImageUrl} 800w,
                            ${banner.bannerImageUrl}       953w
                          `"
                          alt=""
                          class="item-img"
                        />
                      </div>
                      <div class="c30 ban">
                        <div class="inner-label">Page:</div>
                        <div>{{ banner.bannerPage }}</div>
                      </div>
                      <div class="c20 ban">
                        <div class="inner-label">Intro:</div>
                        <div>{{ banner.bannerIntro }}</div>
                      </div>
                      <div class="c20 ban">
                        <div class="inner-label">Title:</div>
                        <div>{{ banner.bannerTitle }}</div>
                      </div>
                      <div class="c20 ban">
                        <div class="inner-label">Subtitle:</div>
                        <div>{{ banner.bannerSubtitle }}</div>
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
                    <div @click="checkAllBanner" class="check-box all">
                      <div
                        class="check"
                        :class="{ active: isAllChecked }"
                      ></div>
                    </div>
                    <div class="actions-foot">
                      <i
                        @click="duplicateBanner"
                        class="material-symbols-outlined orange action-icons"
                        >content_copy</i
                      >

                      <i
                        @click="prepareBannerEdit"
                        class="material-symbols-outlined orange action-icons"
                        >edit</i
                      >

                      <i class="material-symbols-outlined orange action-icons"
                        >delete</i
                      >
                    </div>
                  </div>

                  <div class="table-head ban">
                    <div class="each-input part">
                      <label for="name-15" class="label">Title</label
                      ><input
                        type="text"
                        class="custom-input w-input"
                        v-model="bannerTitle"
                        placeholder="Enter Banner Title"
                      />
                    </div>
                    <div class="each-input part">
                      <label for="name-15" class="label">Subtitle</label
                      ><input
                        type="text"
                        class="custom-input w-input"
                        v-model="bannerSubtitle"
                        placeholder="Enter Banner Subtitle"
                      />
                    </div>
                    <div class="each-input part">
                      <label for="name-15" class="label">Intro</label
                      ><input
                        type="text"
                        class="custom-input w-input"
                        v-model="bannerIntro"
                        placeholder="Enter Banner Intro"
                      />
                    </div>
                    <div class="each-input part">
                      <label for="name-15" class="label">Page</label
                      ><input
                        type="text"
                        class="custom-input w-input"
                        v-model="bannerPage"
                        placeholder="Enter Banner Page"
                      />
                    </div>
                    <div class="btn-holder">
                      <div v-if="onRequest" class="custom-btn edge color">
                        <i class="material-symbols-outlined white spinner"
                          >motion_photos_on</i
                        >
                        <div>Processing</div>
                      </div>
                      <label for="banner" v-else class="custom-btn edge">
                        <i class="material-symbols-outlined white"
                          >upload_file</i
                        >
                        <div>Select Banner</div>
                        <input
                          @change="setBanner"
                          type="file"
                          class="hidden"
                          id="banner"
                        />
                      </label>
                      <label
                        v-if="!onRequest"
                        @click="processBanner"
                        class="custom-btn edge"
                      >
                        <div>Submit</div>
                      </label>
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
      bannerCategory: "",

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

    toggleBanner(int) {
      this.$store.commit("settingsStore/TOGGLE_BANNER", int);
    },

    checkAllBanner() {
      this.$store.commit("settingsStore/CHECK_ALL_BANNERS");
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

    copyData(data) {
      this.bannerImage = data.bannerImage;
      this.bannerIntro = data.bannerIntro;
      this.bannerTitle = data.bannerTitle;
      this.bannerSubtitle = data.bannerSubtitle;
      this.bannerPage = data.bannerPage;
    },

    duplicateBanner() {
      const banner = this.selectedBanners[this.selectedBanners.length - 1];
      this.editingId = "";
      this.editingState = false;
      const data = JSON.parse(JSON.stringify(banner));
      this.copyData(data);
    },

    prepareBannerEdit() {
      const banner = this.selectedBanners[this.selectedBanners.length - 1];
      this.editingId = banner._id;
      this.editingState = true;
      const data = JSON.parse(JSON.stringify(banner));
      this.copyData(data);
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
      form.append("bannerCategory", this.bannerCategory);
      if (this.editingState) {
        this.updateBanner(form);
      } else {
        this.createBanner(form);
      }
    },

    showAlertBox(msg, status) {
      this.$store.commit("settingsStore/SHOW_ALERT_BOX", { msg, status });
    },

    async updateBanner(form) {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}${this.field}`;
      const id = this.editingId;
      const result = await this.$store.dispatch("settingsStore/UPDATE_BANNER", {
        id,
        query,
        form,
      });
      this.checkResponse(result);
    },

    async createBanner(form) {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}`;
      const result = await this.$store.dispatch("settingsStore/CREATE_BANNER", {
        query,
        form,
      });
      this.checkResponse(result);
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

    checkResponse(result) {
      this.onRequest = false;
      if (result.status == 200) {
        const msg = `The banner was set successfully`;
        const status = false;
        this.clearInputs();
        this.showAlertBox(msg, status);
      } else {
        this.showAlertBox(result.response, true);
      }
    },
  },

  computed: {
    resultLength() {
      return this.$store.state.settingsStore.bannerLength;
    },

    banners() {
      return this.$store.state.settingsStore.banners;
    },

    selectedBanners() {
      return this.$store.state.settingsStore.selectedBanners;
    },

    isAllChecked() {
      return this.$store.state.settingsStore.isBannerChecked;
    },

    user() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style></style>
