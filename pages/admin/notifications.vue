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
                  <div class="tb-image ban"><div>Template</div></div>
                  <div class="c20 ban"><div>Title</div></div>
                  <div class="c20 email"><div>Content</div></div>
                </div>
                <div
                  class="table-head-row body"
                  v-for="(note, int) in notificationArray"
                  :key="note._id"
                  :class="{ even: int % 2 == 0 }"
                >
                  <div class="tb-sn ban">
                    <div class="inner-label">S/N:</div>
                    <div>{{ (currentPage - 1) * limit + int + 1 }}</div>
                    <div @click="toggleCheck(int)" class="check-box">
                      <div
                        class="check"
                        :class="{ active: note.checked }"
                      ></div>
                    </div>
                  </div>
                  <div class="tb-image ban">
                    <div class="inner-label">Template:</div>
                    <div>{{ note.name }}</div>
                  </div>
                  <div class="c20 ban part full">
                    <div class="inner-label">Title:</div>
                    <div>{{ note.title }}</div>
                  </div>
                  <div class="c20 email">
                    <div class="inner-label">Content:</div>
                    <div
                      v-if="note.content"
                      class="pro-cart"
                      v-html="`${note.content.substring(0, 150)}...`"
                    ></div>
                  </div>
                </div>
                <div v-if="pages().length > 1" class="pagination table">
                  <div class="page-result">
                    <h3 class="page-result-txt">
                      Results: {{ resultLength }}, Page {{ currentPage }} of
                      {{ pages().length }}
                    </h3>
                  </div>
                  <ul
                    v-if="pages().length > 1"
                    role="list"
                    class="pagination-list"
                  >
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
                <div @click="checkAll" class="check-box all">
                  <div class="check" :class="{ active: isChecked }"></div>
                </div>
                <div class="actions-foot">
                  <i
                    @click="
                      prepareNotificationCopy(selected[selected.length - 1])
                    "
                    class="material-symbols-outlined orange action-icons"
                    >content_copy</i
                  >

                  <i
                    @click="
                      prepareNotificationEdit(selected[selected.length - 1])
                    "
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
                  <label for="name-15" class="label">Name</label
                  ><input
                    type="text"
                    class="custom-input w-input"
                    v-model="name"
                    placeholder="Enter Name of Notification"
                  />
                </div>
                <div class="each-input part">
                  <label for="name-15" class="label">Title</label
                  ><input
                    type="text"
                    class="custom-input w-input"
                    v-model="title"
                    placeholder="Enter Title of Notification"
                  />
                </div>
                <div class="each-input full">
                  <label for="field-6" class="label"
                    >Essence of Application</label
                  >
                  <client-only placeholder="loading..."
                    ><ckeditor-nuxt
                      class="custom-input txt high w-input"
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

                  <div
                    @click="processNotification"
                    v-else
                    class="custom-btn edge color"
                  >
                    <div>Submit</div>
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
</template>

<script>
import AlertBox from "../../components/AlertBox.vue";
import AlertConfirmation from "../../components/AlertConfirmation.vue";
import CompanyAds from "../../components/CompanyAds.vue";
import FooterComponent from "../../components/FooterComponent";
import HorizontalNav from "../../components/HorizontalNav";
import MobileBottomNav from "../../components/MobileBottomNav";
import VerticalNav from "../../components/VerticalNav";

export default {
  data() {
    return {
      title: "",
      name: "",
      content: "",

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
      this.editState = false;
      this.name = "";
      this.title = "";
      this.content = "";
      this.deleteId = "";
    },

    showAlertBox(msg, status) {
      this.$store.commit("SHOW_ALERT_BOX", { msg, status });
    },

    startDelete(id) {
      this.showOverlay = true;
      this.overlayMsg = "Are you sure you want to delete this FAQ?";
      this.deleteId = id;
    },

    copyNotification(notification) {
      this.content = notification.content;
      this.title = notification.title;
      this.name = notification.name;
    },

    prepareNotificationEdit(data) {
      if (!data) {
        this.showAlertBox("Please select one Notification to edit", true);
        return;
      }
      const notification = JSON.parse(JSON.stringify(data));
      this.showEditor = true;
      this.editingId = notification._id;
      this.editingState = true;
      this.copyNotification(notification);
    },

    prepareNotificationCopy(data) {
      if (!data) {
        this.showAlertBox("Please select one Notification to copy", true);
        return;
      }
      const notification = JSON.parse(JSON.stringify(data));
      this.copyNotification(notification);
      this.editingId = "";
      this.editingState = false;
    },

    processNotification() {
      this.onRequest = true;
      const form = {
        name: this.name,
        title: this.title,
        content: this.content,
      };

      if (this.editingState) {
        this.updateNotification(form);
      } else {
        this.createNotification(form);
      }
    },

    sortResult() {
      this.sort = this.sort == "-time" ? "time" : "-time";
      this.getNotification();
    },

    paginate(page) {
      this.currentPage = page;
      this.getNotifications();
    },

    checkAll() {
      this.$store.commit("settingsStore/CHECK_ALL_NOTIFICATIONS");
    },

    toggleCheck(int) {
      this.$store.commit("settingsStore/TOGGLE_NOTIFICATION", int);
    },

    async getNotifications() {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}`;
      this.$store.dispatch("settingsStore/GET_NOTIFICATIONS", query);
    },

    async updateNotification(form) {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}`;
      const id = this.editingId;
      const result = await this.$store.dispatch(
        "settingsStore/UPDATE_NOTIFICATION",
        { query, form, id }
      );
      if (result.status == 200) {
        this.clearInputs();
        this.showResponseMsg(
          "The Notification was updated successfully",
          false
        );
      } else {
        this.showResponseMsg(result.response.data.message, true);
      }
    },

    async createNotification(form) {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}`;
      const result = await this.$store.dispatch(
        "settingsStore/CREATE_NOTIFICATION",
        { query, form }
      );
      this.onRequest = false;
      if (result.status == 200) {
        this.clearInputs();
        this.showAlertBox("The Notification was created successfully", false);
      } else {
        this.showAlertBox(result.response.data.message, true);
      }
    },

    async deleteNotification() {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}`;
      try {
        const result = await this.$axios.delete(
          `/notifications/${this.deleteId}/${query}`
        );
        this.notifications = result.data.data;
        this.resultLength = result.data.resultLength;
        this.deleteId = "";
      } catch (err) {
        this.showResponseMsg(err.response.data.message, true);
      }
    },
  },

  computed: {
    editorConfig() {
      return this.$store.state.editor.editorConfig;
    },

    notificationArray() {
      return this.$store.state.settingsStore.notifications;
    },

    selected() {
      return this.$store.state.settingsStore.selectedNotifications;
    },

    resultLength() {
      return this.$store.state.settingsStore.notificationLength;
    },

    isChecked() {
      return this.$store.state.settingsStore.isNotificationChecked;
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
    MobileBottomNav,
    FooterComponent,
    AlertBox,
    AlertConfirmation,
  },
};
</script>

<style></style>
