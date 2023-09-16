<template>
  <div class="">
    <alert-box />
    <alert-confirmation />

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
                  <div class="c20 ban"><div>Category</div></div>
                  <div class="c20 ban"><div>Name</div></div>
                  <div class="c20 ban"><div>Web Link</div></div>
                  <div class="tb-image ban"><div>Action</div></div>
                </div>
                <div
                  v-for="(item, int) in partners"
                  :key="int"
                  class="table-head-row body"
                  :class="{ even: int % 2 == 0 }"
                >
                  <div class="tb-sn ban">
                    <div class="inner-label">S/N:</div>
                    <div>{{ (currentPage - 1) * limit + int + 1 }}</div>
                    <div class="check-box" @click="toggleItem(int)">
                      <div
                        class="check"
                        :class="{ active: item.checked }"
                      ></div>
                    </div>
                  </div>
                  <div class="c20 ban part">
                    <div class="inner-label">Logo:</div>
                    <img
                      :src="item.imageUrl"
                      loading="lazy"
                      sizes="(max-width: 479px) 41vw, 110px"
                      :srcset="`
                            ${item.imageUrl} 500w,
                            ${item.imageUrl} 800w,
                            ${item.imageUrl}     953w`"
                      alt=""
                      class="item-img"
                    />
                  </div>
                  <div class="c20 ban">
                    <div class="inner-label">Name:</div>
                    <div>{{ item.name }}</div>
                  </div>
                  <div class="c20 ban">
                    <div class="inner-label">Site URL:</div>
                    <div>{{ item.url }}</div>
                  </div>
                  <div class="tb-image ban act">
                    <div class="inner-label">Status:</div>
                    <div @click="toggleStatus(item)" class="custom-btn edge">
                      <div v-if="item.status">Approved</div>
                      <div v-else>Draft</div>
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

              <div class="table-head foot">
                <div @click="checkAllItem" class="check-box all">
                  <div class="check" :class="{ active: isAllChecked }"></div>
                </div>
                <div class="actions-foot">
                  <i
                    @click="duplicateItem"
                    class="material-symbols-outlined orange action-icons"
                    >content_copy</i
                  >

                  <i
                    @click="prepareItemEdit"
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
                  <label for="name-15" class="label">Partner Name</label
                  ><input
                    type="text"
                    class="custom-input w-input"
                    v-model="name"
                    placeholder="Enter Partner Name"
                  />
                </div>
                <div class="each-input part">
                  <label for="name-15" class="label">Partner URL</label
                  ><input
                    type="text"
                    class="custom-input w-input"
                    v-model="url"
                    placeholder="Enter Partner URL"
                  />
                </div>

                <div class="btn-holder">
                  <div v-if="onRequest" class="custom-btn edge color">
                    <img
                      src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b799b47c0010e65ffca458_loader-icon%201.svg"
                      loading="lazy"
                      alt=""
                      class="btn-icon spinner"
                    />
                    <div>Processing</div>
                  </div>
                  <label
                    for="image"
                    v-if="!onRequest"
                    class="custom-btn edge color"
                  >
                    <i class="material-symbols-outlined white">upload_file</i>
                    <input
                      type="file"
                      class="hidden"
                      id="image"
                      @change="setPartnerLogo"
                    />
                    <div>Upload Logo</div>
                  </label>
                  <label @click="processPartner" class="custom-btn edge color">
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
</template>

<script>
import AlertBox from "../../components/AlertBox.vue";
import AlertConfirmation from "../../components/AlertConfirmation.vue";
import CompanyAds from "../../components/CompanyAds.vue";
import FooterComponent from "../../components/FooterComponent.vue";
import HorizontalNav from "../../components/HorizontalNav.vue";
import MobileBottomNav from "../../components/MobileBottomNav.vue";
import VerticalNav from "../../components/VerticalNav.vue";
export default {
  data() {
    return {
      image: "",
      name: "",
      url: "",

      editingState: false,
      editingId: "",

      response: "",
      isError: false,
      showResponse: false,
      onRequest: false,
      showEditor: false,
      deleteId: "",

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

    clearInputs() {
      this.image = "";
      this.name = "";
      this.url = "";
      this.editingId = "";
      this.editingState = false;
    },

    setPartnerLogo(e) {
      this.image = e.target.files[0];
    },

    preparePartnerEdit(partner) {
      this.editingId = partner._id;
      this.editingState = true;
      this.name = partner.name;
      this.url = partner.url;
    },

    toggleItem(int) {
      this.$store.commit("pagesStore/TOGGLE_PARTNER", int);
    },

    async toggleStatus(item) {
      const data = JSON.parse(JSON.stringify(item));
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}`;
      const id = data._id;
      const form = new FormData();
      form.append("status", !data.status);

      const result = await this.$store.dispatch("pagesStore/UPDATE_PARTNER", {
        id,
        query,
        form,
      });
    },

    copyItem(item) {
      this.url = item.url;
      this.name = item.name;
    },

    checkAllItem() {
      this.$store.commit("pagesStore/CHECK_ALL_PARTNERS");
    },

    duplicateItem() {
      const data = JSON.parse(
        JSON.stringify(this.selectedItems[this.selectedItems.length - 1])
      );
      this.editingId = "";
      this.editingState = false;
      this.copyItem(data);
    },

    prepareItemEdit() {
      const data = JSON.parse(
        JSON.stringify(this.selectedItems[this.selectedItems.length - 1])
      );
      this.editingState = true;
      this.editingId = data._id;
      this.copyItem(data);
    },

    sortResult() {
      this.sort = this.sort == "-time" ? "time" : "-time";
      this.getPartners();
    },

    paginate(page) {
      this.currentPage = page;
      this.getPartners();
    },

    checkResponse(result) {
      this.onRequest = false;
      if (result.status == 200) {
        this.clearInputs();
      }
    },

    processPartner() {
      this.onRequest = true;
      const form = new FormData();
      form.append("name", this.name);
      form.append("image", this.image);
      form.append("url", this.url);

      if (this.editingState) {
        this.updatePartner(form);
      } else {
        this.createPartner(form);
      }
    },

    prepareDelete(id) {
      this.deleteId = id;
      this.showOverlay = true;
      this.overlayMsg = "Are you sure you want to delete this partner?";
    },

    async updatePartner(form) {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}`;
      const id = this.editingId;
      const result = await this.$store.dispatch("pagesStore/UPDATE_PARTNER", {
        id,
        query,
        form,
      });

      this.checkResponse(result);
    },

    async createPartner(form) {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}`;
      const result = await this.$store.dispatch("pagesStore/CREATE_PARTNER", {
        query,
        form,
      });
      this.checkResponse(result);
    },

    async getPartners() {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}`;
      this.$store.dispatch("pagesStore/GET_PARTNERS", query);
    },

    async deletePartner() {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}`;
      const id = this.deleteId;
      this.$store.dispatch("pagesStore/DELETE_PARTNER", { id, query });
    },
  },

  computed: {
    partners() {
      return this.$store.state.pagesStore.partners;
    },

    resultLength() {
      return this.$store.state.pagesStore.partnerLength;
    },

    isAllChecked() {
      return this.$store.state.pagesStore.isPartnerChecked;
    },

    selectedItems() {
      return this.$store.state.pagesStore.selectedPartners;
    },
  },
  components: {
    AlertBox,
    AlertConfirmation,
    VerticalNav,
    CompanyAds,
    FooterComponent,
    MobileBottomNav,
    HorizontalNav,
  },
};
</script>

<style></style>
