<template>
  <div class="grace products-set">
    <cart-items />
    <alert-confirmation />
    <alert-box />
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
                      <div @click="sortProductName" class="sort-wrapper">
                        <div>Name</div>
                        <img
                          src="/images/sort-icon.svg"
                          loading="lazy"
                          alt=""
                          class="filter-icon"
                        />
                      </div>
                      <div
                        @click="sortProductSellingPrice"
                        class="sort-wrapper"
                      >
                        <div>Amount</div>
                        <img
                          src="/images/sort-icon.svg"
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
                        name="name-16"
                        data-name="Name 16"
                        placeholder="Search Product"
                        id="name-16"
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
                      <div class="c20 ban"><div>Name</div></div>
                      <div class="c20 ban"><div>Category</div></div>
                      <div class="c20 ban"><div>Buyin</div></div>
                      <div class="c20 ban"><div>Selling</div></div>
                      <div class="tb-image ban"><div>Status</div></div>
                    </div>
                    <div
                      v-for="(product, int) in products"
                      :key="int"
                      class="table-head-row body"
                      :class="{ even: int % 2 == 0 }"
                    >
                      <div class="tb-sn ban">
                        <div class="inner-label">S/N:</div>
                        <div>{{ (currentPage - 1) * limit + int + 1 }}</div>
                        <div @click="toggleProduct(int)" class="check-box">
                          <div
                            class="check"
                            :class="{ active: product.checked }"
                          ></div>
                        </div>
                      </div>
                      <div class="tb-image ban">
                        <div class="inner-label">Image:</div>
                        <img
                          :src="product.productImageUrl"
                          loading="lazy"
                          sizes="110px"
                          :srcset="`
                        ${product.productImageUrl} 500w,
                        ${product.productImageUrl} 800w,
                        ${product.productImageUrl}      953w
                        `"
                          alt=""
                          class="item-img prod"
                        />
                      </div>
                      <div class="c20 ban part">
                        <div class="inner-label">Name:</div>
                        <div>
                          <nuxt-link
                            :to="`/product-details/${product._id}`"
                            class="user-link"
                            >{{ product.productName }}</nuxt-link
                          >
                        </div>
                      </div>
                      <div class="c20 ban part">
                        <div class="inner-label">Cateory:</div>
                        <div class="pro-cart">
                          <div
                            v-for="cat in product.productCategories"
                            :key="cat"
                          >
                            {{ cat }}<br />
                          </div>
                        </div>
                      </div>
                      <div class="c20 ban">
                        <div class="inner-label">Buying:</div>
                        <div>
                          <div>{{ product.productBuyingUnit }}</div>
                          <div>
                            N{{ formatNumber(product.productBuyingPrice) }}
                          </div>
                        </div>
                      </div>
                      <div class="c20 ban">
                        <div class="inner-label">Selling:</div>
                        <div class="pro-cart">
                          <div>{{ product.productSellingUnit }}</div>
                          <div class="new-price">
                            N{{ formatNumber(product.productSellingPrice) }}
                          </div>
                        </div>
                      </div>
                      <div class="tb-image ban act">
                        <div class="inner-label">Status:</div>
                        <div class="custom-btn edge used">
                          <div>Collected</div>
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
                        v-if="pages().length > 1"
                        role="list"
                        class="pagination-list"
                      >
                        <li
                          v-if="currentPage > 1"
                          class="page"
                          @click="paginate(currentPage - 1)"
                        >
                          <i class="material-symbols-outlined orange"
                            >arrow_back_ios</i
                          >
                        </li>

                        <li
                          @click="paginate(int + 1)"
                          v-for="(page, int) in pages().length"
                          :key="int"
                          class="page"
                          :class="{ active: currentPage == int + 1 }"
                        >
                          <div>{{ int + 1 }}</div>
                        </li>

                        <li
                          v-if="currentPage < pages().length"
                          @click="paginate(currentPage + 1)"
                          class="page"
                        >
                          <i class="material-symbols-outlined orange"
                            >arrow_forward_ios</i
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="table-head foot">
                    <div class="check-box all" @click="selectAll">
                      <div
                        class="check"
                        :class="{ active: isAllChecked }"
                      ></div>
                    </div>
                    <div class="actions-foot">
                      <i
                        @click="duplicateProduct"
                        class="material-symbols-outlined orange action-icons"
                        >content_copy</i
                      >

                      <i
                        @click="prepareProductEdit"
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
                      <label for="name-15" class="label">Product Name</label
                      ><input
                        type="text"
                        class="custom-input w-input"
                        placeholder="Enter Product Name"
                        v-model="productName"
                      />
                    </div>
                    <div class="each-input part">
                      <label for="name-15" class="label"
                        >Product Categories </label
                      ><label
                        v-for="cat in productCategories"
                        :key="cat"
                        for="name-20"
                        class="cats"
                        >{{ cat }}</label
                      >
                      <input
                        type="text"
                        class="custom-input w-input"
                        v-model="productCategory"
                        placeholder="Enter Product Category"
                        @focusout="addProductCategories"
                        @keypress.enter="addProductCategories"
                      />
                    </div>
                    <div class="each-input part">
                      <label for="name-15" class="label">Buying Unit</label
                      ><input
                        type="text"
                        class="custom-input w-input"
                        v-model="productBuyingUnit"
                        placeholder="Enter Product Buying Unit"
                      />
                    </div>
                    <div class="each-input part">
                      <label for="name-15" class="label">Selling Unit</label
                      ><input
                        type="text"
                        class="custom-input w-input"
                        v-model="productSellingUnit"
                        placeholder="Enter Product Selling Unit"
                      />
                    </div>
                    <div class="each-input part">
                      <label for="name-15" class="label"
                        >Units Per Purcase</label
                      ><input
                        type="number"
                        class="custom-input w-input"
                        v-model="productUnitPerPurchase"
                        placeholder="Enter Unit Per Purchase"
                      />
                    </div>
                    <div class="each-input part">
                      <label for="name-15" class="label">Color</label>
                      <div class="color-flex">
                        <input type="color" class="color-input w-input" /><input
                          type="text"
                          class="custom-input w-input"
                          maxlength="256"
                          name="name-14"
                          data-name="Name 14"
                          placeholder="Enter First Name"
                          id="name-14"
                        />
                      </div>
                    </div>
                    <div class="each-input part">
                      <label for="name-15" class="label">Bar Code</label
                      ><input
                        type="number"
                        class="custom-input w-input"
                        v-model="productBarcode"
                        placeholder="Enter Product Barcode"
                      />
                    </div>

                    <div class="each-input part">
                      <label for="name-15" class="label">Buying Price</label
                      ><input
                        type="number"
                        class="custom-input w-input"
                        v-model="productBuyingPrice"
                        placeholder="Enter Product Buying Price"
                      />
                    </div>

                    <div class="each-input half pad">
                      <label for="name-15" class="label">Select Country</label>
                      <div class="table-filter part">
                        <div
                          class="tb-filter-head"
                          @click="showCountryList = !showCountryList"
                        >
                          <div>{{ countryDefault }}</div>

                          <i
                            class="material-symbols-outlined green filter-icon left"
                            >keyboard_arrow_down</i
                          >
                        </div>
                        <ul
                          role="list"
                          class="tb-filter-list"
                          :class="{ active: showCountryList }"
                        >
                          <li
                            @click="selectCountry(country)"
                            v-for="country in countries"
                            :key="country._id"
                            class="tb-list"
                          >
                            <div>{{ country.name }}</div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="each-input half pad">
                      <label for="name-15" class="label">Select State</label>
                      <div class="table-filter part">
                        <div
                          class="tb-filter-head"
                          @click="showStateList = !showStateList"
                        >
                          <i
                            v-if="onStateRequest"
                            class="material-symbols-outlined green no spinner"
                            >motion_photos_on</i
                          >
                          <div v-if="onStateRequest" class="left">
                            Processing...
                          </div>
                          <div v-else>{{ stateDefault }}</div>

                          <i
                            class="material-symbols-outlined green filter-icon left"
                            >keyboard_arrow_down</i
                          >
                        </div>
                        <ul
                          role="list"
                          class="tb-filter-list"
                          :class="{ active: showStateList }"
                        >
                          <li
                            @click="selectState(state)"
                            v-for="state in states"
                            :key="state._id"
                            class="tb-list"
                          >
                            <div>{{ state.name }}</div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="each-input part">
                      <label for="name-15" class="label">Selling Price</label
                      ><input
                        type="number"
                        class="custom-input w-input"
                        v-model="productSellingPrice"
                        placeholder="Enter Product Selling Price"
                      />
                    </div>

                    <div class="each-input part">
                      <label for="name-15" class="label">Promo Price</label
                      ><input
                        type="number"
                        class="custom-input w-input"
                        v-model="productNewPrice"
                        placeholder="Enter Promo Price"
                      />
                    </div>

                    <div class="each-input part">
                      <label for="name-15" class="label">Promo Discount</label
                      ><input
                        type="number"
                        class="custom-input w-input"
                        v-model="productDiscount"
                        placeholder="Enter Promo % Discount"
                      />
                    </div>

                    <div class="each-input part">
                      <div class="date-range">
                        <div class="each-date">
                          <label for="field-6" class="label">From</label
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
                          <label for="field-6" class="label">To</label
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
                    </div>

                    <div class="each-input full">
                      <label for="field-6" class="label"
                        >Product Description</label
                      >
                      <client-only placeholder="loading..."
                        ><ckeditor-nuxt
                          class="custom-input txt high w-input"
                          v-model="productDescription"
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
                      <label
                        v-if="!onRequest"
                        for="image"
                        class="custom-btn edge"
                      >
                        <input
                          type="file"
                          class="hidden w-input"
                          id="image"
                          accept="image/*"
                          @change="setProductImage"
                        />
                        <i class="material-symbols-outlined white"
                          >file_upload</i
                        >

                        <div>Image</div>
                      </label>
                      <label
                        v-if="!onRequest"
                        for="images"
                        class="custom-btn edge"
                      >
                        <input
                          type="file"
                          class="hidden w-input"
                          id="images"
                          accept="image/*"
                          multiple
                          @change="setProductImages"
                        />
                        <i class="material-symbols-outlined white"
                          >file_upload</i
                        >

                        <div>Images</div>
                      </label>
                      <label
                        v-if="!onRequest"
                        for="video"
                        class="custom-btn edge"
                      >
                        <input
                          type="file"
                          class="hidden w-input"
                          id="video"
                          @change="setProductVideo"
                        />

                        <i class="material-symbols-outlined white"
                          >file_upload</i
                        >
                        <div>Video</div>
                      </label>
                      <label
                        v-if="!onRequest"
                        @click="processProduct"
                        class="custom-btn edge color"
                      >
                        <div>Save Product</div>
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
    </div>
    <mobile-bottom-nav />
  </div>
</template>

<script>
import CompanyAds from "../../components/CompanyAds.vue";
import HorizontalNav from "../../components/HorizontalNav";
import VerticalNav from "../../components/VerticalNav";
import FooterComponent from "../../components/FooterComponent";
import MobileBottomNav from "../../components/MobileBottomNav.vue";
import CartItems from "../../components/CartItems.vue";
import AlertConfirmation from "../../components/AlertConfirmation";

export default {
  data() {
    return {
      productName: "",
      productCategory: "",
      productCategories: [],
      productBuyingUnit: "",
      productSellingUnit: "",
      productBuyingPrice: "",
      productSellingPrice: "",
      productUnitPerPurchase: "",
      productBarcode: "",
      productColor: "",
      productColorCode: "",
      productNewPrice: "",
      productDiscount: "",
      productDescription: "",
      productImage: "",
      productImages: [],
      productVideo: "",
      productCountry: "",
      productState: "",
      productStatePrice: [],
      showStatePriceList: false,
      isStateSelected: false,
      isCountrySelected: false,

      countryDefault: "Select Country",
      stateDefault: "Select State",

      showCountryList: false,
      selectedCountry: "",

      showStateList: false,
      selectedState: "",
      onStateRequest: false,

      newLimit: 5,
      sort: "",
      limit: 10,
      currentPage: 1,
      pages() {
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
      editId: "",
      editState: false,

      showOverlay: false,
      overlayMsg: "",
      overlaySignal: "",

      sortName: "productName",
      sortPrice: "-productSellingPrice",
    };
  },

  methods: {
    toggleProduct(int) {
      this.$store.commit("settingsStore/TOGGLE_PRODUCT", int);
    },

    selectAll() {
      this.isAllChecked = !this.isAllChecked;
      this.$store.commit(
        "settingsStore/TOGGLE_ALL_PRODUCTS",
        this.isAllChecked
      );
    },

    showAlertBox(msg, status) {
      this.$store.commit("SHOW_ALERT_BOX", { msg, status });
    },

    sortProductName() {
      this.sortName =
        this.sortName == "-productName" ? "productName" : "-productName";
      this.getProducts();
    },

    sortProductSellingPrice() {
      this.sortPrice =
        this.sortPrice == "-productSellingPrice"
          ? "productSellingPrice"
          : "-productSellingPrice";

      this.getProducts();
    },

    paginate(page) {
      this.currentPage = page;
      this.getProducts();
    },

    enterStatePrice() {
      if (this.statePriceObj.price != "" && this.statePriceObj.state != "") {
        this.productStatePrice.push(
          JSON.parse(JSON.stringify(this.statePriceObj))
        );
        this.statePriceObj.state = "State Price";
        this.statePriceObj.price = 0;
      }
    },

    selectStatePrice(state) {
      this.statePriceObj = state;
    },

    setProductData(product) {
      this.productName = product.productName;
      this.productCategories = product.productCategories;
      this.productBuyingUnit = product.productBuyingUnit;
      this.productSellingUnit = product.productSellingUnit;
      this.productBuyingPrice = product.productBuyingPrice;
      this.productSellingPrice = product.productSellingPrice;
      this.productUnitPerPurchase = product.productUnitPerPurchase;
      this.productBarcode = product.productBarcode;
      this.productColor = product.productColor;
      this.productColorCode = product.productColorCode;
      this.productDescription = product.productDescription;
      this.countryDefault = product.productCountry;
      this.stateDefault = product.productState;
      this.lgaDefault = product.lgaDefault;
      this.productStatePrice = product.productStatePrice;
    },

    duplicateProduct(product) {
      this.showEditor = true;
      this.setProductData(product);
    },

    prepareProductEdit() {
      if (this.selectedProducts.length === 0) {
        this.showAlertBox(
          "Please select at least one row in the table to edit",
          true
        );
        return;
      }
      const product = JSON.parse(
        JSON.stringify(this.selectedProducts[this.selectedProducts.length - 1])
      );
      this.showEditor = true;
      this.editId = product._id;
      this.editState = true;
      this.setProductData(product);
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

    formatNumber(number) {
      if (!number) {
        return "0.00";
      }
      const options = { style: "decimal", maximumFractionDigits: 0 };
      return number.toLocaleString("en-US", options);
    },

    clearInputs() {
      this.editId = "";
      this.editState = false;
      this.overlaySignal = "";
      this.deleteId = "";
      this.productName = "";
      this.productCategories = [];
      this.productImage = "";
      this.productImages = [];
      this.productBuyingUnit = "";
      this.productSellingUnit = "";
      this.productBuyingPrice = "";
      this.productSellingPrice = "";
      this.productUnitPerPurchase = "";
      this.productBarcode = "";
      this.productColor = "";
      this.productColorCode = "";
      this.productDescription = "";
      this.countryDefault = "Select Country";
      this.stateDefault = "Select State";
      this.productStatePrice = [];
    },

    setProductImage(e) {
      let file = e.target.files[0];
      let blob = file.slice(0, file.size, "image/jpeg");
      this.productImage = new File([blob], `post.jpeg`, {
        type: "image/jpeg",
      });
    },

    setProductVideo(e) {
      let file = e.target.files[0];
      let blob = file.slice(0, file.size, "video/mp4");
      this.productVideo = new File([blob], `post.mp4`, {
        type: "video/mp4",
      });
    },

    setProductImages(e) {
      let files = Array.from(e.target.files);
      files.forEach((el) => {
        let blob = el.slice(0, el.size, "image/jpeg");
        this.productImages.push(
          new File([blob], `post.jpeg`, {
            type: "image/jpeg",
          })
        );
      });
    },

    editStatePrice(obj) {
      this.statePriceObj.state = obj.state;
      this.statePriceObj.price = obj.price;
    },

    addProductCategories() {
      if (this.productCategory == "") {
        return;
      }
      this.productCategories.push(this.productCategory);
      this.productCategory = "";
    },

    removeCategory(int) {
      this.productCategories.splice(int, 1);
    },

    processProduct() {
      const fields = [
        { name: "Product Name", data: this.productName },
        { name: "Product Buying Price", data: this.productBuyingPrice },
      ];

      fields.forEach((el) => {
        if (el.data == "" && el.data.trim() == "") {
          this.alertMsg = `Please fill in the ${el.name} field`;
          this.alertStatus = true;
          this.showAlertBox(this.alertMsg, this.alertStatus);
          this.isError = true;

          return;
        } else {
          this.isError = false;
        }
      });

      if (this.isError) {
        return;
      }
      this.onRequest = true;
      const singular = [1];
      const form = new FormData();
      form.append("productName", this.productName);
      form.append("productBuyingUnit", this.productBuyingUnit);
      form.append("productSellingUnit", this.productSellingUnit);
      form.append("productBuyingPrice", this.productBuyingPrice);
      form.append("productSellingPrice", this.productSellingPrice);
      form.append("productDescription", this.productDescription);
      form.append("productUnitPerPurchase", this.productUnitPerPurchase);
      form.append("productBarcode", this.productBarcode);
      form.append("productColorCode", this.productColorCode);
      form.append("productColor", this.productColor);
      form.append("productCountry", this.countryDefault);
      form.append("productState", this.stateDefault);
      singular.forEach((el) => {
        form.append("productImage", this.productImage);
      });

      this.productCategories.forEach((el) => {
        form.append("productCategories", el);
      });
      this.productImages.forEach((el) => {
        form.append("productImages", el);
      });

      if (this.editState) {
        this.updateProduct(form);
      } else {
        this.createProduct(form);
      }
    },

    async selectCountry(country) {
      this.showCountryList = !this.showCountryList;
      this.countryDefault = country.name;
      this.stateDefault = "Select State";
      this.isCountrySelected = true;
      this.onStateRequest = true;
      const query = `?limit=40&country=${country.name}`;
      const states = country.states;

      const result = await this.$store.dispatch("SET_STATE", {
        query,
        states,
      });

      if (result) {
        this.onStateRequest = false;
      }
    },

    async selectState(state) {
      this.showStateList = !this.showStateList;
      this.stateDefault = state.name;
      this.isStateSelected = true;
    },

    async getProducts() {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sortName},${this.sortPrice}`;
      const result = await this.$store.dispatch(
        "settingsStore/GET_PRODUCTS",
        query
      );
    },

    async updateProduct(form) {
      const id = this.editId;
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sortName},-time`;
      const result = await this.$store.dispatch(
        "settingsStore/UPDATE_PRODUCT",
        {
          form,
          query,
          id,
        }
      );
      if (result.status == 200) {
        this.onRequest = false;
        this.showAlertBox("The product is updated successfully", false);
        this.clearInputs();
      } else {
        this.onRequest = false;
        this.showResponseMsg(result.response.data.message, true);
      }
      this.onRequest = false;
    },

    async createProduct(productData) {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sortName},-time`;
      const form = {
        product: productData,
        query: query,
      };
      const result = await this.$store.dispatch(
        "settingsStore/CREATE_PRODUCT",
        form
      );
      if (result.status == 200) {
        this.showAlertBox("The product is created successfully", false);
        this.clearInputs();
        this.onRequest = false;
      } else {
        this.onRequest = false;
        this.showResponseMsg(result.response.data.message, true);
      }
    },

    // closeEditor() {
    //   this.clearInputs();
    //   this.showEditor = false;
    // },

    // toggleProduct(product) {
    //   product.checked = !product.checked;
    //   const index = this.selectedProducts.findIndex(
    //     (obj) => obj.productName === product.productName
    //   );

    //   if (index !== -1) {
    //     this.selectedProducts.splice(index, 1);
    //   } else {
    //     this.selectedProducts.push(product);
    //   }

    //   if (this.selectedProducts.length === 0) {
    //     this.isAllChecked = false;
    //   }
    // },

    // checkAll() {
    //   this.isAllChecked = !this.isAllChecked;
    //   if (this.isAllChecked) {
    //     for (let i = 0; i < this.products.length; i++) {
    //       this.products[i].checked = true;
    //     }
    //     this.selectedProducts = JSON.parse(JSON.stringify(this.products));
    //   } else {
    //     for (let i = 0; i < this.products.length; i++) {
    //       this.products[i].checked = false;
    //     }
    //     this.selectedProducts = [];
    //   }
    // },

    // getNewProductsLimit() {
    //   this.limit = this.newLimit;
    //   this.getProducts();
    // },

    // startBulkDelete() {
    //   if (this.isAllChecked) {
    //     this.overlaySignal = "bulk";
    //     this.deleteId = "";
    //     this.showOverlay = true;
    //     this.overlayMsg = `Are you sure you want to delete the selected products?`;
    //   }
    // },

    // startDeleteProduct(id) {
    //   this.deleteId = id;
    //   this.overlaySignal = "single";
    //   this.showOverlay = true;
    //   this.overlayMsg = `Are you sure you want to delete this product?`;
    // },

    // closeOverlay() {
    //   this.showOverlay = false;
    //   this.overlayMsg = "";
    //   if (this.deleteId != "" && this.overlaySignal == "single") {
    //     this.deleteProduct();
    //   } else {
    //     this.deleteProducts();
    //   }
    // },

    // recheckProducts(data) {
    //   this.isAllChecked = false;
    //   for (let i = 0; i < data.length; i++) {
    //     data[i].checked = false;
    //   }

    //   return data;
    // },

    // async fetchItems(e) {
    //   const data = {
    //     keyWord: e.target.value,
    //     limit: this.limit,
    //     page: this.currentPage,
    //   };
    //   this.$socket.emit("fetchItems", data);
    // },

    // async createProduct(form) {
    //   const query = `?limit=${this.limit}&page=${this.currentPage}&sort=-dateCreated`;
    //   try {
    //     const result = await this.$axios.post(`/products/${query}`, form);
    //     this.products = this.recheckProducts(result.data.data);
    //     this.resultLength = result.data.resultLength;
    //     this.clearInputs();
    //     this.showResponseMsg("Product created successfully", false);
    //   } catch (err) {
    //     this.showResponseMsg(err.response.data.message, true);
    //   }
    // },

    // async updateProduct(form) {
    //   const query = `?limit=${this.limit}&page=${this.currentPage}`;
    //   try {
    //     const result = await this.$axios.patch(
    //       `/products/${this.editId}/${query}`,
    //       form
    //     );
    //     this.products = this.recheckProducts(result.data.data);
    //     this.resultLength = result.data.resultLength;
    //     this.clearInputs();
    //     this.showResponseMsg("Product updated successfully", false);
    //   } catch (err) {
    //     this.showResponseMsg(err.response.data.message, true);
    //   }
    // },

    // async getProducts() {
    //   const query = `?limit=${this.limit}&page=${this.currentPage}`;
    //   try {
    //     const result = await this.$axios.get(`/products/${query}`);
    //     this.products = this.recheckProducts(result.data.data);
    //     this.resultLength = result.data.resultLength;
    //   } catch (err) {
    //     this.showResponseMsg(err.response.data.message, true);
    //   }
    // },

    // async deleteProduct() {
    //   this.overlayMsg = "";
    //   this.showOverlay = false;
    //   const query = `?limit=${this.limit}&page=${this.currentPage}`;
    //   try {
    //     const result = await this.$axios.delete(
    //       `/products/${this.deleteId}/${query}`
    //     );
    //     this.products = this.recheckProducts(result.data.data);
    //     this.resultLength = result.data.resultLength;
    //     this.clearInputs();
    //   } catch (err) {
    //     this.showResponseMsg(err.response.data.message, true);
    //   }
    // },

    // async deleteProducts() {
    //   this.overlayMsg = "";
    //   this.showOverlay = false;
    //   const form = {
    //     products: this.selectedProducts,
    //   };
    //   const query = `?limit=${this.limit}&page=${this.currentPage}`;
    //   try {
    //     const result = await this.$axios.patch(`/products/${query}`, form);
    //     this.products = this.recheckProducts(result.data.data);
    //     this.resultLength = result.data.resultLength;
    //     this.clearInputs();
    //   } catch (err) {
    //     this.showResponseMsg(err.response.data.message, true);
    //   }
    // },
  },

  computed: {
    editorConfig() {
      return this.$store.state.editor.editorConfig;
    },

    products() {
      return this.$store.state.settingsStore.products;
    },

    resultLength() {
      return this.$store.state.settingsStore.productLength;
    },

    selectedProducts() {
      return this.$store.state.settingsStore.selectedProducts;
    },

    isAllChecked() {
      return this.$store.state.settingsStore.isProductsChecked;
    },

    countries() {
      return this.$store.state.countries;
    },

    states() {
      return this.$store.state.stateArray;
    },

    lgas() {
      return this.$store.state.lgas;
    },

    units() {
      return this.$store.state.units;
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
    CartItems,
    AlertConfirmation,
  },
};
</script>

<style>
.search-flex.color {
  display: flex;
  background: transparent;
  padding-right: 0;
  padding-left: 0;
}

.color-text {
  width: 100%;
}
</style>
