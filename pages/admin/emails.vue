<template>
  <div class="">
    <alert-box />

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
                  <div class="tb-image ban"><div>Greeting</div></div>
                  <div class="tb-image ban"><div>Template</div></div>
                  <div class="c20 ban"><div>Title</div></div>
                  <div class="c20 ban"><div>Content</div></div>
                </div>
                <div
                  v-for="(email, int) in emailArray"
                  :key="int"
                  class="table-head-row body"
                  :class="{ even: int % 2 == 0 }"
                >
                  <div class="tb-sn ban">
                    <div class="inner-label">S/N:</div>
                    <div>{{ int + 1 }}</div>
                    <div @click="toggleEmail(int)" class="check-box">
                      <div
                        class="check"
                        :class="{ active: email.checked }"
                      ></div>
                    </div>
                  </div>
                  <div class="tb-image ban">
                    <div class="inner-label">Image:</div>
                    <img
                      :src="email.bannerUrl"
                      loading="lazy"
                      sizes="110px"
                      :srcset="`
                          ${email.bannerUrl} 500w,
                          ${email.bannerUrl} 800w,
                          ${email.bannerUrl} 953w`"
                      alt=""
                      class="item-img"
                    />
                  </div>
                  <div class="tb-image ban full">
                    <div class="inner-label">Greeting:</div>
                    <div>{{ email.greeting }}</div>
                  </div>
                  <div class="tb-image ban full">
                    <div class="inner-label">Template:</div>
                    <div>{{ email.template }}</div>
                  </div>
                  <div class="c20 ban part full">
                    <div class="inner-label">Title:</div>
                    <div>{{ email.title }}</div>
                  </div>
                  <div class="c20 full">
                    <div class="inner-label">Content:</div>
                    <div
                      v-if="email.content"
                      class="pro-cart"
                      v-html="`${email.content.substring(130, 0)}...`"
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
              <div class="table-head foot">
                <div @click="checkAllEmails" class="check-box all">
                  <div class="check" :class="{ active: isAllChecked }"></div>
                </div>
                <div class="actions-foot">
                  <i
                    @click="duplicateEmail"
                    class="material-symbols-outlined orange action-icons"
                    >content_copy</i
                  >

                  <i
                    @click="editEmail"
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
                  <label for="name-15" class="label">Greeting</label
                  ><input
                    type="text"
                    class="custom-input w-input"
                    v-model="greeting"
                    placeholder="Enter Email Greeting"
                  />
                </div>
                <div class="each-input part">
                  <label for="name-15" class="label">Title</label
                  ><input
                    type="text"
                    class="custom-input w-input"
                    maxlength="256"
                    v-model="title"
                    placeholder="Enter Email Title"
                  />
                </div>
                <div class="each-input part">
                  <label for="name-15" class="label">Template</label
                  ><input
                    type="text"
                    class="custom-input w-input"
                    v-model="template"
                    placeholder="Enter Email Template"
                  />
                </div>
                <div class="each-input part">
                  <label for="name-15" class="label">Warning</label
                  ><input
                    type="text"
                    class="custom-input w-input"
                    v-model="warning"
                    placeholder="Enter Email Warning"
                  />
                </div>

                <div class="each-input part">
                  <div class="color-in-flex">
                    <div class="color-flex widt">
                      <label for="name-15" class="label colo">Title</label>

                      <input
                        v-model="headerBgColor"
                        type="color"
                        class="color-input w-input"
                      />
                    </div>
                    <div class="color-flex widt">
                      <label for="name-15" class="label colo">Title</label>

                      <input
                        v-model="bodyBgColor"
                        type="color"
                        class="color-input w-input"
                      />
                    </div>
                    <div class="color-flex widt">
                      <label for="name-15" class="label colo">Title</label>
                      <input
                        v-model="bodyTxtColor"
                        type="color"
                        class="color-input w-input"
                      />
                    </div>
                  </div>
                </div>
                <div class="each-input part">
                  <div class="color-in-flex">
                    <div class="color-flex widt">
                      <label for="name-15" class="label colo">Title</label>

                      <input type="color" class="color-input w-input" />
                      <input
                        type="text"
                        class="custom-input w-input color-in"
                        maxlength="256"
                        name="name-14"
                        data-name="Name 14"
                        placeholder="Enter First Name"
                        id="name-14"
                      />
                    </div>
                    <div class="color-flex widt">
                      <label for="name-15" class="label colo">Title</label>

                      <input type="color" class="color-input w-input" />
                      <input
                        type="text"
                        class="custom-input w-input color-in"
                        maxlength="256"
                        name="name-14"
                        data-name="Name 14"
                        placeholder="Enter First Name"
                        id="name-14"
                      />
                    </div>
                  </div>
                </div>

                <div class="each-input full">
                  <label for="field-6" class="label">Email Content</label>
                  <client-only placeholder="loading..."
                    ><ckeditor-nuxt
                      class="search-flex full w-input"
                      v-model="content"
                      :config="editorConfig"
                    />
                  </client-only>
                </div>

                <div class="btn-holder">
                  <div v-if="onRequest" class="custom-btn edge">
                    <i class="material-symbols-outlined white spinner"
                      >motion_photos_on</i
                    >
                    <div>Processing</div>
                  </div>

                  <label for="banner" v-if="!onRequest" class="custom-btn edge">
                    <input
                      @change="setEmailBanner"
                      type="file"
                      class="hidden"
                      id="banner"
                    />
                    <i class="material-symbols-outlined white">file_upload</i>
                    <div>Email Banner</div>
                  </label>

                  <label
                    @click="processEmail"
                    v-if="!onRequest"
                    class="custom-btn edge color"
                  >
                    <div>Submit</div>
                  </label>
                </div>
                <label
                  v-if="showResponse"
                  for="field-6"
                  class="response error"
                  >{{ response }}</label
                >
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
import CompanyAds from "../../components/CompanyAds.vue";
import FooterComponent from "../../components/FooterComponent";
import HorizontalNav from "../../components/HorizontalNav.vue";
import MobileBottomNav from "../../components/MobileBottomNav";
import VerticalNav from "../../components/VerticalNav";

export default {
  data() {
    return {
      editState: false,
      editId: "",
      content: "",
      template: "",
      title: "",
      greeting: "",
      warning: "",
      banner: "",
      headerBgColor: "",
      bodyBgColor: "",
      bodyTxtColor: "",
      footerBgColor: "",
      footerTxtColor: "",

      isAllChecked: false,

      sort: "title",
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

      response: "",
      isError: false,
      showResponse: false,
      onRequest: false,
      showEditor: false,

      alertStatus: false,
      alertMsg: "",
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
      this.editId = "";
      this.editState = false;
      this.title = "";
      this.greeting = "";
      this.banner = "";
      this.warning = "";
      this.template = "";
      this.content = "";
      this.deleteId = "";
    },

    setEmailBanner(e) {
      this.banner = e.target.files[0];
    },

    toggleEmail(int) {
      this.$store.commit("settingsStore/TOGGLE_EMAIL", int);
    },

    checkAllEmails() {
      this.isAllChecked = !this.isAllChecked;
      this.$store.commit("settingsStore/CHECK_ALL_EMAILS", this.isAllChecked);
    },

    sortResult() {
      this.sort = this.sort == "-time" ? "time" : "-time";
      this.getEmails();
    },

    paginate(page) {
      this.currentPage = page;
      this.getEmails();
    },

    closeEditor() {
      this.clearInputs();
      this.showEditor = false;
    },

    showAlertBox(msg, status) {
      this.$store.commit("settingsStore/SHOW_ALERT_BOX", { msg, status });
    },

    duplicateEmail() {
      if (this.selectedEmails.length == 0) {
        const msg = `Please select an email to duplicate`;
        const status = true;
        this.showAlertBox(msg, status);
        return;
      }
      const email = JSON.parse(
        JSON.stringify(this.selectedEmails[this.selectedEmails.length - 1])
      );
      this.editState = true;
      this.editId = email._id;
      this.greeting = email.greeting;
      this.content = email.content;
      this.title = email.title;
      this.template = email.template;
      this.warning = email.warning;
      this.banner = email.banner;
    },

    editEmail() {
      if (this.selectedEmails.length == 0) {
        const msg = `Please select an email to edit`;
        const status = true;
        this.showAlertBox(msg, status);
        return;
      }
      const email = JSON.parse(
        JSON.stringify(this.selectedEmails[this.selectedEmails.length - 1])
      );
      this.showEditor = true;
      this.editState = true;
      this.editId = email._id;
      this.content = email.content;
      this.template = email.template;
      this.title = email.title;
      this.banner = email.banner;
      this.greeting = email.greeting;
      this.warning = email.warning;
      this.bodyBgColor = email.bodyBgColor;
      this.bodyTxtColor = email.bodyTxtColor;
      this.footerBgColor = email.footerBgColor;
      this.footerTxtColor = email.footerTxtColor;
    },

    startDeleteEmail(id) {
      this.deleteId = id;
      this.showOverlay = true;
      this.overlayMsg = `Are you sure you want to delete this email?`;
    },

    processEmail() {
      this.onRequest = true;
      const fields = [
        { name: "greeting", data: this.greeting },
        { name: "title", data: this.title },
        { name: "template", data: this.template },
        { name: "content", data: this.content },
      ];

      fields.forEach((el) => {
        if (el.data == "" && el.data.trim() == "") {
          this.alertMsg = `Please fill in the ${el.name} field`;
          this.alertStatus = true;
          this.showAlertBox(this.alertMsg, this.alertStatus);
          this.isError = true;

          return;
        }
      });

      if (this.isError) {
        this.onRequest = false;
        this.isError = false;
        return;
      }
      const form = new FormData();
      form.append("banner", this.banner);
      form.append("title", this.title);
      form.append("content", this.content);
      form.append("template", this.template);
      form.append("greeting", this.greeting);
      form.append("warning", this.warning);
      form.append("headerBgColor", this.headerBgColor);
      form.append("bodyBgColor", this.bodyBgColor);
      form.append("bodyTxtColor", this.bodyTxtColor);
      form.append("footerBgColor", this.footerBgColor);
      form.append("footerTxtColor", this.footerTxtColor);

      if (this.editState) {
        this.updateEmail(form);
      } else {
        this.createEmail(form);
      }
    },

    closeOverlay() {
      this.showOverlay = false;
      this.overlayMsg = "";
      if (this.deleteId != "") {
        this.deleteEmail();
      }
    },

    async createEmail(form) {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=-dateCreated`;
      const data = {
        form: form,
        query: query,
      };
      const response = await this.$store.dispatch(
        "emailStore/CREATE_EMAIL",
        data
      );
      if (response.status == 200) {
        this.alertMsg = `The email is created successfully`;
        this.alertStatus = false;
        this.showAlertBox(this.alertMsg, this.alertStatus);
      } else {
        this.showResponseMsg(response.response.data.message, true);
      }
      this.onRequest = false;
    },

    async updateEmail(form) {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=-dateCreated`;
      const data = {
        form: form,
        query: query,
        id: this.editId,
      };

      const response = await this.$store.dispatch(
        "settingsStore/UPDATE_EMAIL",
        data
      );

      if (response.status == 200) {
        this.alertMsg = `The email was updated successfully`;
        this.alertStatus = false;
        this.showAlertBox(this.alertMsg, this.alertStatus);
      } else {
        this.showResponseMsg(response.response.data.message, true);
      }
      this.onRequest = false;
    },

    async getEmails() {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${title}`;
      this.$store.dispatch("settingsStore/GET_EMAILS", query);
    },

    // async deleteEmail() {
    //   const query = `?limit=${this.limit}&page=${this.currentPage}`;
    //   try {
    //     const result = await this.$axios.delete(
    //       `/emails/${this.deleteId}/${query}`
    //     );
    //     this.emails = result.data.data;
    //     this.resultLength = result.data.resultLength;
    //     this.clearInputs();
    //   } catch (err) {
    //     console.log(err.response.data);
    //   }
    // },
  },

  computed: {
    editorConfig() {
      return this.$store.state.editor.editorConfig;
    },

    emailArray() {
      return this.$store.state.settingsStore.emails;
    },

    resultLength() {
      return this.$store.state.settingsStore.emailLength;
    },

    selectedEmails() {
      return this.$store.state.settingsStore.selectedEmails;
    },
  },

  components: {
    "ckeditor-nuxt": () => {
      if (process.client) {
        return import("@blowstack/ckeditor-nuxt");
      }
    },
    CompanyAds,
    HorizontalNav,
    VerticalNav,
    FooterComponent,
    MobileBottomNav,
    AlertBox,
  },
};
</script>

<style>
.custom-btn2.bottom {
  margin-bottom: 10px;
}

.em-color {
  background: transparent;
  display: flex;
}
</style>
