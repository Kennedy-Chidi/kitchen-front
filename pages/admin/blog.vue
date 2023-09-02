<template>
  <div class="grace blog">
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
                    <div class="newsletter-wrap pro">
                      <input
                        type="text"
                        class="newsletter-input search w-input"
                        maxlength="256"
                        name="name-17"
                        data-name="Name 17"
                        placeholder="Search Product"
                        id="name-17"
                      /><img
                        src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b75aa41127b73bc77763cb_search-line-icon%201.svg"
                        loading="lazy"
                        alt=""
                        class="newsletter-img"
                      />
                    </div>
                  </div>
                  <div class="table">
                    <div class="table-head-row">
                      <div class="tb-sn"><div>S/N</div></div>
                      <div class="tb-image ban"><div>Image</div></div>
                      <div class="c20 ban"><div>Category</div></div>
                      <div class="c20 ban"><div>Title</div></div>
                      <div class="c20 ban"><div>Author</div></div>
                      <div class="c20 ban"><div>Date</div></div>
                      <div class="tb-image ban"><div>Action</div></div>
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
                      <div class="tb-image ban">
                        <div class="inner-label">Image:</div>
                        <img
                          :src="item.bannerUrl"
                          loading="lazy"
                          sizes="110px"
                          :srcset="`
                            ${item.bannerUrl} 500w,
                            ${item.bannerUrl} 800w,
                            ${item.bannerUrl}       953w
                          `"
                          alt=""
                          class="item-img"
                        />
                      </div>
                      <div class="c20 ban part">
                        <div class="inner-label">Category:</div>
                        <div>{{ item.category }}</div>
                      </div>
                      <div class="c20 ban part">
                        <div class="inner-label">Title:</div>
                        <div>{{ item.title }}</div>
                      </div>
                      <div class="c20 ban">
                        <div class="inner-label">Author:</div>
                        <div>{{ item.author }}</div>
                      </div>
                      <div class="c20 ban">
                        <div class="inner-label">Date:</div>
                        <div>{{ formatDate(item.time) }}</div>
                      </div>
                      <div class="tb-image ban act">
                        <div class="inner-label">Status:</div>
                        <div
                          @click="updateBlogStatus(item)"
                          class="custom-btn edge"
                        >
                          <div v-if="item.status">Approved</div>
                          <div v-else>Unapproved</div>
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
                      <div
                        class="check"
                        :class="{ active: isAllChecked }"
                      ></div>
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
                      <label for="name-15" class="label">Title</label
                      ><input
                        type="text"
                        class="custom-input w-input"
                        v-model="title"
                        placeholder="Enter Blog Title"
                      />
                    </div>
                    <div class="each-input part">
                      <label for="name-15" class="label">Author</label
                      ><input
                        type="text"
                        class="custom-input w-input"
                        v-model="author"
                        placeholder="Enter Blog Author"
                      />
                    </div>
                    <div class="each-input part">
                      <label for="name-15" class="label">Type</label
                      ><input
                        type="text"
                        class="custom-input w-input"
                        v-model="blogType"
                        placeholder="Enter Blog Type"
                      />
                    </div>
                    <div class="each-input part">
                      <label for="name-15" class="label">Date</label
                      ><input
                        type="date"
                        class="custom-input w-input"
                        v-model="date"
                      />
                    </div>
                    <div class="each-input full">
                      <label for="field-6" class="label"
                        >Essence of Application</label
                      >
                      <client-only placeholder="loading..."
                        ><ckeditor-nuxt
                          class="search-flex full w-input"
                          v-model="content"
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
                      <label for="banner" v-else class="custom-btn edge">
                        <i class="material-symbols-outlined white"
                          >upload_file</i
                        >
                        <div>Select Banner</div>
                        <input
                          @change="setImage"
                          type="file"
                          class="hidden"
                          id="banner"
                        />
                      </label>
                      <label
                        v-if="!onRequest"
                        @click="processBlog"
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
import FooterComponent from "../../components/FooterComponent.vue";
import HorizontalNav from "../../components/HorizontalNav.vue";
import MobileBottomNav from "../../components/MobileBottomNav.vue";
import VerticalNav from "../../components/VerticalNav.vue";
export default {
  data() {
    return {
      blogType: "",
      category: "",
      title: "",
      subtitle: "",
      banner: "",
      content: "",
      blogs: [],
      date: "",
      author: "",

      showOverlay: false,
      overlayMsg: "",

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

    setBlogType(blogType) {
      this.blogType = blogType;
      this.showBlogTypeList = false;
    },

    setImage(event) {
      this.banner = event.target.files[0];
    },

    clearInputs() {
      this.editingId = "";
      this.editingState = false;
      this.blogType = "Select Type";
      (this.category = ""), (this.title = "");
      this.subtitle = "";
      this.banner = "";
      this.content = "";
      this.date = "";
      this.author = "";
    },

    showAlertBox(msg, status) {
      this.$store.commit("settingsStore/SHOW_ALERT_BOX", { msg, status });
    },

    toggleItem(int) {
      this.$store.commit("settingsStore/TOGGLE_BLOG", int);
    },

    checkAllItem() {
      this.$store.commit("settingsStore/CHECK_ALL_BLOGS");
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
      this.banner = item.banner;
      this.blogType = item.blogType;
      this.title = item.title;
      this.subtitle = item.subtitle;
      this.content = item.content;
      this.author = item.author;
      this.category = item.category;
      this.date = item.time;
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
      this.getBlog();
    },

    paginate(page) {
      this.currentPage = page;
      this.getBlog();
    },

    async updateBlogStatus(blog) {
      const item = JSON.parse(JSON.stringify(blog));
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}`;
      const status = !item.status;

      const form = {
        status: status,
      };
      const payload = {
        id: item._id,
        query,
        form,
      };
      const result = await this.$store.dispatch(
        "settingsStore/UPDATE_BLOG",
        payload
      );
    },

    processBlog() {
      this.onRequest = true;
      const form = new FormData();
      form.append("title", this.title);
      form.append("subtitle", this.subtitle);
      form.append("banner", this.banner);
      form.append("content", this.content);
      form.append("category", this.category);
      form.append("author", this.author);
      form.append("blogType", this.blogType);
      form.append(
        "time",
        this.date == "" || this.date == undefined
          ? new Date().getTime()
          : new Date(this.date).getTime()
      );
      if (this.editingState) {
        this.updateBlog(form);
      } else {
        this.createBlog(form);
      }
    },

    async updateBlog(form) {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}`;
      const payload = {
        id: this.editingId,
        query,
        form,
      };
      const result = await this.$store.dispatch(
        "settingsStore/UPDATE_BLOG",
        payload
      );
      const msg = "The Blog was updated successfully.";
      this.checkResponse(result, msg, false);
    },

    async createBlog(form) {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}`;
      const result = await this.$store.dispatch("settingsStore/CREATE_BLOG", {
        query,
        form,
      });
      const msg = "The Blog was created successfully.";
      this.checkResponse(result, msg, false);
    },

    async getBlog() {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}`;
      try {
        const result = await this.$axios.get(`/blogs/${query}`);
        this.blogs = result.data.data;
        this.resultLength = result.data.resultLength;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async deleteBlog() {
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
      return this.$store.state.settingsStore.blogs;
    },

    selectedItems() {
      return this.$store.state.settingsStore.selectedBlogs;
    },

    resultLength() {
      return this.$store.state.settingsStore.blogLength;
    },

    isAllChecked() {
      return this.$store.state.settingsStore.isBlogChecked;
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
