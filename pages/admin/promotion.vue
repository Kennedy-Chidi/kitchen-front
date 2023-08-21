<template>
  <div class="grace gift-promotion">
    <cart-items />
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
                      <div class="c20 ban"><div>Promo Name</div></div>
                      <div class="c20 ban"><div>Target</div></div>
                      <div class="c20 ban"><div>Duration</div></div>
                      <div class="c20 ban"><div>Gift</div></div>
                      <div class="tb-image ban"><div>Status</div></div>
                    </div>
                    <div
                      v-for="(promo, int) in promotions"
                      :key="int"
                      class="table-head-row body"
                      :class="{ even: int % 2 == 0 }"
                    >
                      <div class="tb-sn ban">
                        <div class="inner-label">S/N:</div>
                        <div>{{ (currentPage - 1) * limit + int + 1 }}</div>
                        <div @click="togglePromo(int)" class="check-box">
                          <div
                            class="check"
                            :class="{ active: promo.checked }"
                          ></div>
                        </div>
                      </div>
                      <div class="tb-image ban">
                        <div class="inner-label">Image:</div>
                        <img
                          v-if="promo.promoBannerUrl"
                          :src="promo.promoBannerUrl"
                          loading="lazy"
                          sizes="110px"
                          :srcset="`
                            ${promo.promoBannerUrl} 500w,
                            ${promo.promoBannerUrl} 800w,
                            ${promo.promoBannerUrl}      953w
                          `"
                          alt=""
                          class="item-img"
                        />
                        <img
                          v-else
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
                      <div class="c20 ban part">
                        <div class="inner-label">Promo Name:</div>
                        <div>{{ promo.promoName }}</div>
                      </div>
                      <div class="c20 ban part">
                        <div class="inner-label">Promo Target:</div>
                        <div class="pro-cart">
                          <div>N{{ formatNumber(promo.promoTarget) }}</div>
                        </div>
                      </div>
                      <div class="c20 ban">
                        <div class="inner-label">Duration:</div>
                        <div>
                          <div class="date">
                            {{ formatDate(promo.promoStart) }}
                          </div>
                          <div>{{ formatDate(promo.promoEnd) }}</div>
                        </div>
                      </div>

                      <div class="c20 ban">
                        <div class="inner-label">Promo Gift:</div>
                        <div>
                          <div
                            v-for="(item, index) in promo.promoGifts"
                            :key="index"
                            class="new-price"
                          >
                            {{ item }}
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
                    <div @click="checkAll" class="check-box all">
                      <div
                        class="check"
                        :class="{ active: isAllChecked }"
                      ></div>
                    </div>

                    <div class="actions-foot">
                      <i
                        @click="
                          duplicatePromo(
                            selectedPromo[selectedPromo.length - 1]
                          )
                        "
                        class="material-symbols-outlined orange action-icons"
                        >content_copy</i
                      >

                      <i
                        @click="
                          editPromo(selectedPromo[selectedPromo.length - 1])
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
                      <label for="name-15" class="label">Promo Name</label
                      ><input
                        type="text"
                        class="custom-input w-input"
                        v-model="promoName"
                        placeholder="Enter Promo Name"
                      />
                    </div>
                    <div class="each-input part">
                      <label for="amount-2" class="label">Target</label
                      ><input
                        type="number"
                        class="custom-input w-input"
                        maxlength="256"
                        v-model="promoTarget"
                        placeholder="Enter Promo Target"
                      />
                    </div>
                    <div class="each-input part">
                      <div class="date-range">
                        <div class="each-date">
                          <label for="field-6" class="label">From</label
                          ><input
                            type="date"
                            class="date-input w-input"
                            v-model="promoStart"
                            placeholder="Example Text"
                          />
                        </div>
                        <div class="each-date">
                          <label for="field-6" class="label">To</label
                          ><input
                            type="date"
                            class="date-input w-input"
                            v-model="promoEnd"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="each-input part">
                      <div
                        v-for="(item, int) in promoGifts"
                        :key="int"
                        class="media-list b"
                      >
                        <div>{{ item }}</div>
                      </div>

                      <label for="name-15" class="label">Gift</label
                      ><input
                        type="text"
                        class="custom-input w-input"
                        maxlength="256"
                        @keydown.enter="addPromoGift"
                        v-model="promoGift"
                        placeholder="Enter Promo Gift"
                      />
                    </div>
                    <div class="each-input full">
                      <label for="field-6" class="label">Promo Details</label>
                      <client-only placeholder="loading..."
                        ><ckeditor-nuxt
                          class="custom-input txt high w-input"
                          v-model="promoDescription"
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
                          @change="setPromoBanner"
                        />
                        <i class="material-symbols-outlined white"
                          >file_upload</i
                        >
                        <div>Promo Banner</div>
                      </label>

                      <label
                        v-if="!onRequest"
                        @click="processPromo"
                        class="custom-btn edge color"
                      >
                        <div>Save Promo</div>
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
import AlertConfirmation from "../../components/AlertConfirmation";
import CartItems from "../../components/CartItems.vue";
import CompanyAds from "../../components/CompanyAds.vue";
import FooterComponent from "../../components/FooterComponent.vue";
import HorizontalNav from "../../components/HorizontalNav.vue";
import MobileBottomNav from "../../components/MobileBottomNav.vue";
import VerticalNav from "../../components/VerticalNav";
export default {
  data() {
    return {
      promoName: "",
      promoTarget: "",
      promoGift: "",
      promoGifts: [],
      promoBanner: "",
      promoBannerUrl: "",
      promoStart: "",
      promoEnd: "",
      promoDescription: "",
      promoType: "",

      sort: "-time",
      limit: 5,
      searchedLimit: 20,
      currentPage: 1,
      pages: function () {
        let array = [];
        let x = Math.ceil(this.resultLength / this.limit);
        for (let i = 0; i < x; i++) {
          array.push("i");
        }
        return array;
      },
      onRequest: false,
      editingState: false,
      editingId: "",
    };
  },

  methods: {
    showAlertBox(msg, status) {
      this.$store.commit("SHOW_ALERT_BOX", { msg, status });
    },

    formatNumber(number) {
      if (!number) {
        return "0.00";
      }
      const options = { style: "decimal", maximumFractionDigits: 0 };
      return number.toLocaleString("en-US", options);
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

    setHTMLDate(data) {
      if (!data) {
        const defaultDate = new Date();
        return defaultDate.toISOString().slice(0, 10);
      } else {
        const defaultDate = new Date(data);
        return defaultDate.toISOString().slice(0, 10);
      }
    },

    clearInputs() {
      this.promoName = "";
      this.promoTarget = "";
      this.promoDescription = "";
      this.promoType = "";
      this.promoStart = this.setHTMLDate(new Date());
      this.promoEnd = this.setHTMLDate(new Date());
      this.promoBanner = "";
      this.promoGifts = "";
      this.editState = false;
      this.editingId = "";
    },

    setPromoBanner(e) {
      this.promoBanner = e.target.files[0];
    },

    addPromoGift() {
      if (this.promoGift.trim() != "") {
        this.promoGifts.push(this.promoGift);
        this.promoGift = "";
      }
    },

    togglePromo(int) {
      this.$store.commit("settingsStore/TOGGLE_PROMO", int);
    },

    checkAll() {
      this.$store.commit("settingsStore/CHECK_ALL_PROMOTIONS");
    },

    copyPromo(promo) {
      this.promoName = promo.promoName;
      this.promoTarget = promo.promoTarget;
      this.promoStart = promo.promoStart;
      this.promoEnd = promo.promoEnd;
      this.promoGifts = promo.promoGifts;
      this.promoDescription = promo.promoDescription;
    },

    editPromo(data) {
      if (!data || data == undefined) {
        this.showAlertBox("Please select a promo to update", true);
        return;
      }
      this.editingId = data._id;
      this.editingState = true;
      const promo = JSON.parse(JSON.stringify(data));
      this.copyPromo(promo);
    },

    duplicatePromo(data) {
      if (!data || data == undefined) {
        this.showAlertBox("Please select a promo to duplicate", true);
        return;
      }

      const promo = JSON.parse(JSON.stringify(data));
      this.copyPromo(promo);
    },

    processPromo() {
      this.onRequest = true;
      console.log(this.promoBanner);
      const form = new FormData();
      form.append("promoName", this.promoName);
      form.append("promoTarget", this.promoTarget);
      form.append("promoDescription", this.promoDescription);
      form.append("promoType", this.promoType);
      form.append("promoStart", new Date(this.promoStart).getTime());
      form.append("promoEnd", new Date(this.promoEnd).getTime());
      form.append("promoBanner", this.promoBanner);

      if (Array.isArray(this.promoGifts)) {
        this.promoGifts.forEach((el) => {
          form.append("promoGifts", el);
        });
      }

      if (this.editingState) {
        this.updatePromo(form);
      } else {
        this.createPromo(form);
      }
    },

    async createPromo(form) {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=-time`;
      const result = await this.$store.dispatch("settingsStore/CREATE_PROMO", {
        query,
        form,
      });
      this.onRequest = false;
      if (result.status == 200) {
        this.clearInputs();
        this.showAlertBox("Promo created successfully", false);
      } else {
        this.showAlertBox(result.response.data.message, true);
      }
    },

    async updatePromo(form) {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=-time`;
      const result = await this.$store.dispatch("settingsStore/UPDATE_PROMO", {
        id: this.editingId,
        query,
        form,
      });
      this.onRequest = false;
      if (result.status == 200) {
        this.clearInputs();
        this.showAlertBox("Promo created successfully", false);
      } else {
        this.showAlertBox(result.response.data.message, true);
      }
    },

    // // getNewProductsLimit() {
    // //   this.limit = this.newLimit;
    // //   this.getProducts();
    // // },

    // // duplicateProduct(product) {
    // //   this.showEditor = true;
    // //   this.productImage = product.productImage;
    // //   this.productImages = product.productImages;
    // //   this.productName = product.productName;
    // //   this.productCategories = product.productCategories;
    // //   this.productBuyingUnit = product.productBuyingUnit;
    // //   this.productSellingUnit = product.productSellingUnit;
    // //   this.productBuyingPrice = product.productBuyingPrice;
    // //   this.productSellingPrice = product.productSellingPrice;
    // //   this.productUnitPerPurchase = product.productUnitPerPurchase;
    // //   this.productBarcode = product.productBarcode;
    // //   this.productColor = product.productColor;
    // //   this.productColorCode = product.productColorCode;
    // //   this.productDescription = product.productDescription;
    // // },

    // // prepareProductEdit(product) {
    // //   this.showEditor = true;
    // //   this.editId = product._id;
    // //   this.editState = true;
    // //   this.productName = product.productName;
    // //   this.productCategories = product.productCategories;
    // //   this.productBuyingUnit = product.productBuyingUnit;
    // //   this.productSellingUnit = product.productSellingUnit;
    // //   this.productBuyingPrice = product.productBuyingPrice;
    // //   this.productSellingPrice = product.productSellingPrice;
    // //   this.productUnitPerPurchase = product.productUnitPerPurchase;
    // //   this.productBarcode = product.productBarcode;
    // //   this.productColor = product.productColor;
    // //   this.productColorCode = product.productColorCode;
    // //   this.productDescription = product.productDescription;
    // // },

    // // startdeletePromo(id) {
    // //   this.deleteId = id;
    // //   this.overlaySignal = "single";
    // //   this.showOverlay = true;
    // //   this.overlayMsg = `Are you sure you want to delete this product?`;
    // // },

    // startBulkDelete() {
    //   if (this.selectedProducts) {
    //     this.overlaySignal = "bulk";
    //     this.deleteId = "";
    //     this.showOverlay = true;
    //     this.overlayMsg = `Are you sure you want to delete the selected promos?`;
    //   }
    // },

    // sortResult() {
    //   this.sort = this.sort == "-time" ? "time" : "-time";
    //   this.getEmails();
    // },

    // removeSelectedProduct() {
    //   this.selectedProduct = "";
    //   this.searchedProduct = "";
    //   this.clearInputs();
    //   this.showEditor = false;
    // },

    // paginate(page) {
    //   this.currentPage = page;
    //   this.getProducts();
    // },

    // closeEditor() {
    //   this.clearInputs();
    //   this.showEditor = false;
    // },

    // removeGift(int) {
    //   this.promoGifts.splice(int, 1);
    // },

    // setPromoType(e, type) {
    //   if (!this.selectedProduct) {
    //     e.target.value = "";
    //     this.showResponseMsg("Please select product to promote", true);
    //     return;
    //   }
    //   if (type === "promoTarget") {
    //     this.promoDiscount = "";
    //     this.promoPrice = "";
    //     this.promoType = "Target";
    //   } else if (type === "promoPrice") {
    //     this.promoDiscount = Number(
    //       (this.promoPrice / this.selectedProduct.productSellingPrice) * 100
    //     ).toFixed(2);
    //     this.promoTarget = "";
    //     this.promoType = "Price";
    //   } else if (type === "promoDiscount") {
    //     this.promoPrice = "";
    //     this.promoTarget = "";
    //     this.promoType = "Discount";
    //   }
    // },

    // closeOverlay() {
    //   this.showOverlay = false;
    //   this.overlayMsg = "";

    //   this.deletePromos();
    // },

    // selectProduct(product) {
    //   this.showEditor = true;
    //   this.searchedProduct = product.productName;
    //   this.selectedProduct = product;
    //   this.showProductList = false;

    //   this.promoName = product.promoName;
    //   this.promoPrice = product.promoPrice;
    //   this.promoDiscount = product.promoDiscount;
    //   this.promoGifts = Array.isArray(product.promoGifts)
    //     ? product.promoGifts
    //     : [];
    //   this.promoDescription = product.promoDescription;
    //   this.promoStart = this.setHTMLDate(product.promoStart);
    //   this.promoEnd = this.setHTMLDate(product.promoEnd);
    // },

    // recheckProducts(data) {
    //   this.isAllChecked = false;
    //   for (let i = 0; i < data.length; i++) {
    //     data[i].checked = false;
    //   }

    //   return data;
    // },

    // async fetchItems(e) {
    //   const value = e.target.value;
    //   if (value != "") {
    //     this.showProductList = true;

    //     const data = {
    //       keyWord: value,
    //       limit: this.searchedLimit,
    //       page: this.currentPage,
    //     };
    //     this.$socket.emit("fetchItems", data);
    //   } else {
    //     this.showProductList = false;
    //   }
    // },

    // async getPromos() {
    //   const query = `?limit=${this.limit}&page=${this.currentPage}&isPromo=true`;
    //   try {
    //     const result = await this.$axios.get(`/products/${query}`);
    //     this.promos = this.recheckProducts(result.data.data);
    //     this.resultLength = result.data.resultLength;
    //   } catch (err) {
    //     this.showResponseMsg(err.response.data.message, true);
    //   }
    // },

    // async deletePromo() {
    //   this.overlayMsg = "";
    //   this.showOverlay = false;
    //   const query = `?limit=${this.limit}&page=${this.currentPage}&isPromo=true`;
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

    // async deletePromos() {
    //   this.overlayMsg = "";
    //   this.showOverlay = false;
    //   const form = {
    //     products: this.selectedProducts,
    //   };

    //   const query = `?limit=${this.limit}&page=${this.currentPage}&isPromo=true`;
    //   try {
    //     const result = await this.$axios.patch(
    //       `/products/delete-promo/${query}`,
    //       form
    //     );
    //     this.promos = this.recheckProducts(result.data.data);
    //     this.resultLength = result.data.resultLength;
    //     this.clearInputs();
    //   } catch (err) {
    //     this.showResponseMsg(err.response.data.message, true);
    //   }
    // },
  },

  mounted() {
    this.promoStart = this.setHTMLDate(new Date());
    this.promoEnd = this.setHTMLDate(new Date());
  },

  computed: {
    editorConfig() {
      return this.$store.state.editor.editorConfig;
    },

    promotions() {
      return this.$store.state.settingsStore.promotions;
    },

    resultLength() {
      return this.$store.state.settingsStore.promotionLength;
    },

    selectedPromo() {
      return this.$store.state.settingsStore.selectedPromotions;
    },

    isAllChecked() {
      return this.$store.state.settingsStore.isPromotionChecked;
    },
  },

  components: {
    "ckeditor-nuxt": () => {
      if (process.client) {
        return import("@blowstack/ckeditor-nuxt");
      }
    },
    CompanyAds,
    VerticalNav,
    CartItems,
    AlertBox,
    AlertConfirmation,
    FooterComponent,
    MobileBottomNav,
    HorizontalNav,
  },
};
</script>

<style></style>
