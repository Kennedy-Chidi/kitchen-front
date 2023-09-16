<template>
  <div class="g">
    <alert-box />
    <alert-confirmation />
    <div class="custom-container">
      <div class="body-flex">
        <div class="content-body">
          <div class="w-form">
            <div class="transaction-table">
              <div class="table">
                <div class="table-head-row">
                  <div class="tb-sn"><div>S/N</div></div>
                  <div class="c20 ban"><div>Category</div></div>
                  <div class="c20 ban"><div>Question</div></div>
                  <div class="c20 ban"><div>Answer</div></div>
                </div>
                <div
                  v-for="(item, int) in items"
                  :key="int"
                  class="table-head-row body"
                >
                  <div class="tb-sn ban">
                    <div class="inner-label">S/N:</div>
                    <div>{{ (currentPage - 1) * limit + int + 1 }}</div>
                    <div @click="toggleItem(int)" class="check-box">
                      <div
                        class="check"
                        :class="{ active: item.checked }"
                      ></div>
                    </div>
                  </div>

                  <div class="c20 ban part">
                    <div class="inner-label">Category:</div>
                    <div>{{ item.category }}</div>
                  </div>
                  <div class="c20 ban part">
                    <div class="inner-label">Question:</div>
                    <div>{{ item.question }}</div>
                  </div>
                  <div class="c20 ban">
                    <div class="inner-label">Answer:</div>
                    <div v-html="`${item.answer.substring(0, 100)}...`"></div>
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
                  <label for="name-15" class="label">Category</label
                  ><input
                    type="text"
                    class="custom-input w-input"
                    v-model="category"
                    placeholder="Enter Blog Category"
                  />
                </div>
                <div class="each-input part">
                  <label for="name-15" class="label">Question</label
                  ><input
                    type="text"
                    class="custom-input w-input"
                    v-model="question"
                    placeholder="Enter Blog Title"
                  />
                </div>

                <div class="each-input full">
                  <label for="field-6" class="label"
                    >Essence of Application</label
                  >
                  <client-only placeholder="loading..."
                    ><ckeditor-nuxt
                      class="search-flex full w-input"
                      v-model="answer"
                      :config="editorConfig"
                    />
                  </client-only>
                </div>
                <div class="btn-holder">
                  <div v-if="onRequest" class="custom-btn edge color">
                    <i class="material-symbols-outlined white spinner"
                      >motion_photos_on</i
                    >
                    <div>Processing</div>
                  </div>

                  <label
                    v-if="!onRequest"
                    @click="processFAQ"
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
</template>

<script>
import AlertBox from "../../components/AlertBox";
import AlertConfirmation from "../../components/AlertConfirmation.vue";
import CompanyAds from "../../components/CompanyAds.vue";
import FooterComponent from "../../components/FooterComponent.vue";
import HorizontalNav from "../../components/HorizontalNav.vue";
import MobileBottomNav from "../../components/MobileBottomNav.vue";
import VerticalNav from "../../components/VerticalNav.vue";
export default {
  data() {
    return {
      category: "",
      question: "",
      answer: "",

      editingId: "",
      editingState: false,
      response: "",
      isError: false,
      showResponse: false,
      onRequest: false,
      showEditor: false,
      deleteId: "",

      sort: "-time",
      field: "",
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
    formatDate(data) {
      if (data == null || data == undefined) {
        return "N/A";
      }
      const date = new Date(data).getTime(); // Note that month is zero-indexed in JavaScript
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        suffix: (day) => {
          if (day === 1 || day === 21 || day === 31) {
            return "st";
          } else if (day === 2 || day === 22) {
            return "nd";
          } else if (day === 3 || day === 23) {
            return "rd";
          } else {
            return "th";
          }
        },
      };

      return new Intl.DateTimeFormat("en-US", options).format(date);
    },

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
      this.editingId = "";
      this.editingState = false;
      (this.category = ""), (this.question = "");
      this.answer = "";
    },

    showAlertBox(msg, status) {
      this.$store.commit("settingsStore/SHOW_ALERT_BOX", { msg, status });
    },

    toggleItem(int) {
      this.$store.commit("settingsStore/TOGGLE_FAQ", int);
    },

    checkAllItem() {
      this.$store.commit("settingsStore/CHECK_ALL_FAQ");
    },

    checkResponse(result, msg, status) {
      this.onRequest = false;
      if (result.status == 200) {
        this.clearInputs();
        this.showAlertBox(msg, status);
      } else {
        this.showAlertBox(result.response.data.message, true);
      }
    },

    copyItem(item) {
      this.question = item.question;
      this.category = item.category;
      this.answer = item.answer;
    },

    prepareItemEdit() {
      if (this.selectedItems.length == 0) {
        this.showAlertBox("Please select a blog to edit", true);
        return;
      }
      const item = JSON.parse(
        JSON.stringify(this.selectedItems[this.selectedItems.length - 1])
      );
      this.editingId = item._id;
      this.editingState = true;
      this.copyItem(item);
    },

    duplicateItem() {
      if (this.selectedItems.length == 0) {
        this.showAlertBox("Please select a blog to duplicate", true);
        return;
      }
      const item = JSON.parse(
        JSON.stringify(this.selectedItems[this.selectedItems.length - 1])
      );
      this.editingId = "";
      this.editingState = false;
      this.copyItem(item);
    },

    sortResult() {
      this.sort = this.sort == "-time" ? "time" : "-time";
      this.getFAQ();
    },

    paginate(page) {
      this.currentPage = page;
      this.getFAQ();
    },

    processFAQ() {
      this.onRequest = true;
      const form = {
        category: this.category,
        question: this.question,
        answer: this.answer,
        time: new Date().getTime(),
      };

      if (this.editingState) {
        this.updateFAQ(form);
      } else {
        this.createFAQ(form);
      }
    },

    async updateFAQ(form) {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}`;
      const payload = {
        id: this.editingId,
        query,
        form,
      };
      const result = await this.$store.dispatch(
        "settingsStore/UPDATE_FAQ",
        payload
      );
      const msg = "The Blog was updated successfully.";
      this.checkResponse(result, msg, false);
    },

    async createFAQ(form) {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}`;
      const result = await this.$store.dispatch("settingsStore/CREATE_FAQ", {
        query,
        form,
      });
      const msg = "The Blog was created successfully.";
      this.checkResponse(result, msg, false);
    },

    async getFAQ() {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}`;
      try {
        const result = await this.$axios.get(`/blogs/${query}`);
        this.blogs = result.data.data;
        this.resultLength = result.data.resultLength;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async deleteFAQ() {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}`;
      try {
        const result = await this.$axios.delete(
          `/blogs/${this.deleteId}/${query}`
        );
        this.blogs = result.data.data;
        this.resultLength = result.data.resultLength;
      } catch (err) {
        this.showResponseMsg(err.response.data.message, true);
      }
    },
  },

  computed: {
    editorConfig() {
      return this.$store.state.editor.editorConfig;
    },

    items() {
      return this.$store.state.settingsStore.faq;
    },

    selectedItems() {
      return this.$store.state.settingsStore.selectedFAQ;
    },

    resultLength() {
      return this.$store.state.settingsStore.faqLength;
    },

    isAllChecked() {
      return this.$store.state.settingsStore.isFAQChecked;
    },
  },

  components: {
    "ckeditor-nuxt": () => {
      if (process.client) {
        return import("@blowstack/ckeditor-nuxt");
      }
    },
    AlertBox,
    AlertConfirmation,
    FooterComponent,
    CompanyAds,
    HorizontalNav,
    VerticalNav,
    MobileBottomNav,
  },
};
</script>

<style></style>
