<template>
  <div class="transactions-holder1">
    <div class="search-form1 w-form">
      <div class="form-flex1">
        <div class="dasboard-select-holder">
          <div @click="showSelectCat = !showSelectCat" class="select-head">
            <div>{{ selectedCategory }}</div>
            <img
              src="/images/caret-down.svg"
              loading="lazy"
              alt=""
              class="select-icon"
            />
          </div>
          <ul
            role="list"
            class="select-list"
            :class="{ active: showSelectCat }"
            v-if="properties"
          >
            <li class="select-lists" @click="setCategory('')">
              <div>All Cateories</div>
            </li>
            <li
              v-for="categories in properties.categories"
              :key="categories"
              class="select-lists"
              @click="setCategory(categories)"
            >
              <div>{{ categories }}</div>
            </li>
          </ul>
        </div>
        <div class="search-flex">
          <input
            type="text"
            class="search-input w-input"
            @keyup="fetchItems"
            placeholder="Search Product"
          /><img
            src="/images/search.svg"
            loading="lazy"
            alt=""
            class="search-icon"
          />
        </div>
      </div>
    </div>

    <div class="dashboard-table-wrapper2">
      <div class="dashboard-table-head top">
        <div class="dashboard-table-cell _1"><div>S/N</div></div>
        <div class="dashboard-table-cell _2 img">
          <div>Image</div>
        </div>
        <div class="dashboard-table-cell _2"><div>Name</div></div>
        <div class="dashboard-table-cell _2"><div>Price</div></div>
        <div class="dashboard-table-cell _2"><div>Category</div></div>
        <div class="dashboard-table-cell _2"><div>Action</div></div>
      </div>
      <div class="table-line"></div>
      <div
        v-for="(product, int) in products"
        :key="int"
        class="dashboard-table-head body"
        :class="{ even: int % 2 == 0 }"
      >
        <div class="dashboard-table-cell _1">
          <div class="title">S/N</div>
          <div class="num">{{ (currentPage - 1) * limit + int + 1 }}</div>
        </div>
        <div class="dashboard-table-cell _2 img">
          <div class="title">{{ (currentPage - 1) * limit + int + 1 }}</div>
          <img
            :src="`${product.productImageUrl}`"
            loading="lazy"
            sizes="(max-width: 479px) 56vw, (max-width: 767px) 13vw, (max-width: 1279px) 80px, (max-width: 1439px) 6vw, 80px"
            :srcset="`${product.productImageUrl} 500w,
              ${product.productImageUrl}     593w`"
            alt=""
            class="fill-img"
          />
        </div>
        <div class="dashboard-table-cell _2 light">
          <div class="title">Name</div>
          <div>
            <a href="#" class="table-link">{{ product.productName }}</a>
          </div>
        </div>
        <div class="dashboard-table-cell _2 light">
          <div class="title">Price</div>
          <div>N{{ formatNumber(product.productSellingPrice) }}</div>
        </div>
        <div class="dashboard-table-cell _2 light">
          <div class="title">Category</div>
          <div v-if="product.productCategories">
            <div v-for="item in product.productCategories" :key="item">
              {{ item }}
            </div>
          </div>
        </div>

        <div class="dashboard-table-cell _2">
          <div class="title">Action</div>
          <div class="table-action-flex">
            <div class="table-action-btn" @click="removeFromCart(product)">
              <img
                src="/images/minus.svg"
                loading="lazy"
                alt=""
                class="table-action-icon"
              />
            </div>
            <div class="table-action-btn" @click="addToCart(product)">
              <img
                src="/images/plus.svg"
                loading="lazy"
                alt=""
                class="table-action-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="table-label1">
      <div class="table-results1">
        <div class="table-result1">
          <div>Result {{ resultLength }}</div>
        </div>
        <div class="table-result1">
          <div>Page {{ currentPage }} of {{ pages().length }}</div>
        </div>
      </div>
      <ul v-if="pages().length > 1" role="list" class="paginate2">
        <li
          v-if="currentPage != 1"
          class="each-paginate"
          @click="paginate(currentPage - 1)"
        >
          <img
            src="/images/left-page-arrow.svg"
            loading="lazy"
            alt=""
            class="paginate-icon"
          />
        </li>
        <li
          v-for="(page, index) in pages()"
          :key="index"
          class="each-paginate"
          @click="paginate(index + 1)"
          :class="{ active: currentPage == index + 1 }"
        >
          <h4 class="page-number">{{ index + 1 }}</h4>
        </li>
        <li
          class="each-paginate"
          v-if="currentPage < pages(currentPage + 1).length"
          @click="paginate(currentPage + 1)"
        >
          <img
            src="/images/right-page-arrow.svg"
            loading="lazy"
            alt=""
            class="paginate-icon"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AdminFooter from "../../components/AdminFooter.vue";
import DashboardHead from "../../components/Dashboard/DashboardHead.vue";
import DashboardNav from "../../components/Dashboard/DashboardNav.vue";
export default {
  data() {
    return {
      newLimit: 5,
      sort: "-time",
      field: "",
      limit: 5,
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

      company: "",
      properties: "",
      isAllChecked: false,

      showOverlay: false,
      overlayMsg: "",
      overlaySignal: "",

      showSelectCat: false,
      selectedCategory: "Select Category",
      products: [],
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

    sortResult() {
      this.sort = this.sort == "-time" ? "time" : "-time";
      this.getEmails();
    },

    setCategory(field) {
      if (field) {
        this.field = `&productCategories=${field}`;
        this.selectedCategory = field;
      } else {
        this.field = "";
        this.selectedCategory = "Select Category";
      }
      this.getProducts();
      this.showSelectCat = false;
    },

    paginate(page) {
      this.currentPage = page;
      this.getProducts();
    },

    getNewProductsLimit() {
      this.limit = this.newLimit;
      this.getProducts();
    },

    closeOverlay() {
      this.showOverlay = false;
      this.overlayMsg = "";
      if (this.deleteId != "" && this.overlaySignal == "single") {
        this.deleteProduct();
      } else {
        this.deleteProducts();
      }
    },

    removeFromCart(data) {
      this.$store.commit("REMOVE_FROM_CART", data);
    },

    addToCart(data) {
      this.$store.commit("ADD_TO_CART", data);
    },

    async fetchItems(e) {
      const data = {
        keyWord: e.target.value,
        limit: this.limit,
        page: this.currentPage,
      };
      this.$socket.emit("fetchItems", data);
    },

    async getProducts() {
      const query = `?limit=${this.limit}&page=${this.currentPage}${this.field}`;
      try {
        const result = await this.$axios.get(`/products/${query}`);
        this.products = result.data.data;
        this.resultLength = result.data.resultLength;
      } catch (err) {
        this.showResponseMsg(err.response.data.message, true);
      }
    },

    async getCompany() {
      try {
        const result = await this.$axios.get(`/company`);
        if (result.data.result) {
          this.company = result.data.data;
          this.properties = result.data.data.productProperties;
        }
      } catch (err) {
        this.showResponseMsg(err.response.data.message, true);
      }
    },
  },

  computed: {
    cartProducts() {
      return this.$store.state.products;
    },
  },

  mounted() {
    this.getProducts();
    this.getCompany();
    this.$socket.on("fetchedItems", (data, cb) => {
      this.products = data;
    });
  },
  components: { DashboardNav, DashboardHead, AdminFooter },
};
</script>

<style>
.select-list {
  min-width: 200px;
}
</style>
