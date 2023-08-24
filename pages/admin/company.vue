<template>
  <div class="grace company">
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
                      <div class="tb-image ban"><div>Account</div></div>
                      <div class="c20 ban"><div>Country</div></div>
                      <div class="c20 ban"><div>State</div></div>
                      <div class="c20 ban"><div>LGA</div></div>
                      <div class="c20 ban"><div>Unit</div></div>
                      <div class="tb-image ban"><div>Phone</div></div>
                    </div>
                    <div
                      v-for="(company, int) in companyArray"
                      :key="company._id"
                      class="table-head-row body"
                    >
                      <div class="tb-sn ban">
                        <div class="inner-label">S/N:</div>
                        <div>{{ int + 1 }}</div>
                        <div @click="toggleCompanyCheck(int)" class="check-box">
                          <div
                            class="check"
                            :class="{ active: company.check }"
                          ></div>
                        </div>
                      </div>
                      <div class="tb-image ban">
                        <div class="inner-label">Account:</div>
                        <div>
                          <div>{{ company.bankName }}</div>
                          <div>{{ company.bankAccountNumber }}</div>
                        </div>
                      </div>
                      <div class="c20 ban part">
                        <div class="inner-label">Country:</div>
                        <div>{{ company.country }}</div>
                      </div>
                      <div class="c20 ban part">
                        <div class="inner-label">State:</div>
                        <div>{{ company.state }}</div>
                      </div>
                      <div class="c20 ban">
                        <div class="inner-label">LGA:</div>
                        <div>{{ company.lga }}</div>
                      </div>
                      <div class="c20 ban">
                        <div class="inner-label">Unit:</div>
                        <div class="pro-cart">
                          <div>{{ company.unit }}</div>
                        </div>
                      </div>
                      <div v-if="company.contact[2]" class="tb-image ban act">
                        <div class="inner-label">Phone:</div>
                        <div>{{ company.contact[2].text }}</div>
                      </div>
                    </div>

                    <div class="pagination table">
                      <div class="page-result">
                        <h3 class="page-result-txt">
                          Results: 20, Page 1 of 5
                        </h3>
                      </div>
                      <ul role="list" class="pagination-list">
                        <li class="page">
                          <img
                            src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b72debe03037906a74116a_thin-chevron-arrow-left-icon%201.svg"
                            loading="lazy"
                            alt=""
                            class="page-icon"
                          />
                        </li>
                        <li class="page"><div>1</div></li>
                        <li class="page active"><div>2</div></li>
                        <li class="page"><div>3</div></li>
                        <li class="page">
                          <img
                            src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b72deb58cf5ff7bacff87c_thin-chevron-arrow-left-icon%202.svg"
                            loading="lazy"
                            alt=""
                            class="page-icon"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="table-head foot">
                    <div @click="selectAll" class="check-box all">
                      <div
                        class="check"
                        :class="{ active: isAllChecked }"
                      ></div>
                    </div>
                    <div class="actions-foot">
                      <img
                        src="/images/copy-icon.svg"
                        loading="lazy"
                        alt=""
                        class="action-icons"
                        @click="duplicateCompany()"
                      /><img
                        @click="prepareEditCompany()"
                        src="/images/edit-icon.svg"
                        loading="lazy"
                        alt=""
                        class="action-icons"
                      /><img
                        src="/images/delete-icon.svg"
                        loading="lazy"
                        alt=""
                        class="action-icons h"
                      />
                    </div>
                  </div>

                  <div class="table-head ban">
                    <div class="each-input part">
                      <label for="name-18" class="label">Company Name</label
                      ><input
                        type="text"
                        class="custom-input w-input"
                        v-model="companyName"
                        placeholder="Enter Company Name"
                      />
                    </div>
                    <div class="each-input part">
                      <label for="name-18" class="label">Company Domain</label
                      ><input
                        type="text"
                        class="custom-input w-input"
                        v-model="companyDomain"
                        placeholder="Enter Company Domain"
                      />
                    </div>
                    <div class="each-input part">
                      <label for="name-18" class="label">System Email</label
                      ><input
                        type="text"
                        class="custom-input w-input"
                        v-model="systemEmail"
                        placeholder="Enter Company Email"
                      />
                    </div>
                    <div class="each-input half pad">
                      <div class="table-filter part">
                        <div
                          class="tb-filter-head"
                          @click="showCountryList = !showCountryList"
                        >
                          <div>{{ countryDefault }}</div>
                          <img
                            src="/images/caret-down-icon.svg"
                            loading="lazy"
                            alt=""
                            class="filter-icon left"
                          />
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
                      <div class="table-filter part">
                        <div
                          class="tb-filter-head"
                          @click="showStateList = !showStateList"
                        >
                          <div>{{ stateDefault }}</div>
                          <img
                            src="/images/caret-down-icon.svg"
                            loading="lazy"
                            alt=""
                            class="filter-icon left"
                          />
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
                    <div class="each-input half pad">
                      <div class="table-filter part">
                        <div
                          class="tb-filter-head"
                          @click="showLGAList = !showLGAList"
                        >
                          <div>{{ lgaDefault }}</div>
                          <img
                            src="/images/caret-down-icon.svg"
                            loading="lazy"
                            alt=""
                            class="filter-icon left"
                          />
                        </div>
                        <ul
                          role="list"
                          class="tb-filter-list"
                          :class="{ active: showLGAList }"
                        >
                          <li
                            @click="selectLGA(lga)"
                            v-for="lga in lgas"
                            :key="lga._id"
                            class="tb-list"
                          >
                            <div>{{ lga.name }}</div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="each-input half pad">
                      <div class="table-filter part">
                        <div
                          class="tb-filter-head"
                          @click="showUnitList = !showUnitList"
                        >
                          <div>{{ unitDefault }}</div>
                          <img
                            src="/images/caret-down-icon.svg"
                            loading="lazy"
                            alt=""
                            class="filter-icon left"
                          />
                        </div>
                        <ul
                          role="list"
                          class="tb-filter-list"
                          :class="{ active: showUnitList }"
                        >
                          <li
                            @click="selectUnit(unit)"
                            v-for="unit in units"
                            :key="unit"
                            class="tb-list"
                          >
                            <div>{{ unit }}</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="each-input part">
                      <label for="name-18" class="label">Bank Name</label
                      ><input
                        type="text"
                        class="custom-input w-input"
                        placeholder="Enter Bank Account Name"
                        v-model="bankName"
                      />
                    </div>
                    <div class="each-input part">
                      <label for="name-18" class="label">Account Name</label
                      ><input
                        type="text"
                        class="custom-input w-input"
                        v-model="bankAccountName"
                        placeholder="Enter Bank Account Name"
                      />
                    </div>
                    <div class="each-input part">
                      <label for="name-18" class="label">Account No.</label
                      ><input
                        type="number"
                        class="custom-input w-input"
                        v-model="bankAccountNumber"
                        placeholder="Enter First Name"
                      />
                    </div>
                    <div class="each-input part">
                      <label for="name-18" class="label">Receipt No.</label
                      ><input
                        type="number"
                        class="custom-input w-input"
                        v-model="invoiceNumber"
                        placeholder="Enter Invoice Number"
                      />
                    </div>

                    <div class="each-input part">
                      <div
                        v-for="(item, int) in media"
                        :key="int"
                        class="media-list b"
                      >
                        <img
                          :src="item.url"
                          loading="lazy"
                          alt=""
                          class="media-icon b"
                        />
                        <div>{{ item.text }}</div>
                        <img
                          src="/images/edit-icon.svg"
                          loading="lazy"
                          alt=""
                          class="media-icon"
                          @click="editList('media', item, int)"
                        /><img
                          src="/images/delete-icon.svg"
                          loading="lazy"
                          alt=""
                          class="media-icon h"
                          @click="removeList('media', int)"
                        />
                      </div>

                      <div class="color-flex">
                        <label for="media" class="color-input">
                          <input
                            type="file"
                            class="hidden w-input"
                            id="media"
                            @change="setIcon($event, 'media')"
                          /><img
                            src="/images/yellow-upload-icon.svg"
                            loading="lazy"
                            alt=""
                            class="icon"
                          />
                        </label>
                        <input
                          type="text"
                          class="custom-input w-input"
                          v-model="mediaInput"
                          placeholder="Enter Social Media"
                          @focusout="
                            processIconText(
                              mediaInput,
                              mediaFile,
                              mediaUrl,
                              mediaEditingIndex,
                              media
                            )
                          "
                          @keypress.enter="
                            processIconText(
                              mediaInput,
                              mediaFile,
                              mediaUrl,
                              mediaEditingIndex,
                              media
                            )
                          "
                        />
                      </div>
                    </div>

                    <div class="each-input part">
                      <div
                        v-for="(item, int) in contact"
                        :key="int"
                        class="media-list b"
                      >
                        <img
                          :src="item.url"
                          loading="lazy"
                          alt=""
                          class="media-icon b"
                        />
                        <div>{{ item.text }}</div>
                        <img
                          src="/images/edit-icon.svg"
                          loading="lazy"
                          alt=""
                          class="media-icon"
                          @click="editList('contact', item, int)"
                        />
                        <img
                          src="/images/delete-icon.svg"
                          loading="lazy"
                          alt=""
                          class="media-icon h"
                          @click="removeList('contact', int)"
                        />
                      </div>

                      <div class="color-flex">
                        <label for="contact" class="color-input">
                          <input
                            type="file"
                            class="hidden w-input"
                            id="contact"
                            @change="setIcon($event, 'contact')"
                          /><img
                            src="/images/yellow-upload-icon.svg"
                            loading="lazy"
                            alt=""
                            class="icon"
                          />
                        </label>
                        <input
                          type="text"
                          class="custom-input w-input"
                          v-model="contactInput"
                          placeholder="Enter Social Contact"
                          @focusout="
                            processIconText(
                              contactInput,
                              contactFile,
                              contactUrl,
                              contactEditingIndex,
                              contact
                            )
                          "
                          @keypress.enter="
                            processIconText(
                              contactInput,
                              contactFile,
                              contactUrl,
                              contactEditingIndex,
                              contact
                            )
                          "
                        />
                      </div>
                    </div>

                    <div class="each-input full">
                      <div
                        v-for="(announcement, int) in announcements"
                        :key="int"
                        class="media-list b"
                      >
                        <div>{{ announcement }}</div>
                        <img
                          src="/images/edit-icon.svg"
                          loading="lazy"
                          alt=""
                          class="media-icon"
                        /><img
                          src="/images/delete-icon.svg"
                          loading="lazy"
                          alt=""
                          class="media-icon h"
                        />
                      </div>
                      <textarea
                        placeholder="Example Text"
                        maxlength="5000"
                        v-model="announcement"
                        class="custom-input txt high w-input"
                      ></textarea>
                    </div>
                    <div class="btn-holder">
                      <div v-if="onRequest" class="custom-btn edge">
                        <img
                          src="/images/spinning-icon.svg"
                          loading="lazy"
                          alt=""
                          class="btn-icon spinner"
                        />
                        <div>Processing</div>
                      </div>

                      <div
                        v-if="!onRequest"
                        class="custom-btn edge color"
                        @click="resetCompany"
                      >
                        <div>Add Announcement</div>
                      </div>

                      <div
                        v-if="!onRequest"
                        class="custom-btn edge color"
                        @click="processData"
                      >
                        <div>Save Changes</div>
                      </div>
                    </div>

                    <label
                      v-if="showResponse"
                      for="field-6"
                      class="response"
                      :class="{ error: isError }"
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
import AlertConfirmation from "../../components/AlertConfirmation.vue";
import CompanyAds from "../../components/CompanyAds.vue";
import FooterComponent from "../../components/FooterComponent.vue";
import HorizontalNav from "../../components/HorizontalNav.vue";
import MobileBottomNav from "../../components/MobileBottomNav.vue";
import VerticalNav from "../../components/VerticalNav";

export default {
  components: {
    HorizontalNav,
    VerticalNav,
    MobileBottomNav,
    FooterComponent,
    CompanyAds,
    AlertConfirmation,
  },
  data() {
    return {
      countryDefault: "Select Country",
      stateDefault: "Select State",
      lgaDefault: "Select LGA",
      unitDefault: "Select Unit",
      media: [],
      coloredMedia: [],
      contact: [],
      coloredContact: [],
      companyName: "",
      companyDomain: "",
      announcements: [],
      announcement: "",
      bankName: "",
      bankAccountName: "",
      bankAccountNumber: "",
      invoiceNumber: "",
      systemEmail: "",

      mediaInput: "",
      mediaFile: "",
      mediaUrl: "",
      mediaEditingIndex: "",

      contactInput: "",
      contactFile: "",
      contactUrl: "",
      contactEditingIndex: "",

      isEditing: false,
      editingId: "",
      editingIndex: "",
      isAllChecked: false,

      response: "",
      isError: false,
      showResponse: false,
      onRequest: false,
      showEditor: false,

      showCountryList: false,
      selectedCountry: "",

      showStateList: false,
      selectedState: "",

      showLGAList: false,
      selectedLGA: "",

      showUnitList: false,
      selectedUnit: "",

      uuid: "",
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
      this.companyName = "";
      this.companyDomain = "";
      this.bankName = "";
      this.bankAccountName = "";
      this.bankAccountNumber = "";
      this.invoiceNumber = "";
      this.announcements = "";

      this.countryDefault = "Select Country";
      this.stateDefault = "Select State";
      this.lgaDefault = "Select LGA";
      this.unitDefault = "Select Unit";
      this.isAllChecked = false;
      this.selectedCompanies = [];

      this.media = "";
      this.contact = "";
      this.editingId = "";
      this.isEditing = false;
    },

    processIconText(input, file, url, int, array) {
      if (file === "") {
        this.showAlertBox("Please select an image", true);
        return;
      }
      const form = {
        icon: "",
        text: "",
        url: "",
      };
      form.icon = file;
      form.text = input;
      form.url = url;

      if (int === "") {
        array.push(form);
      } else {
        array[int] = form;
      }

      this.mediaInput = "";
      this.mediaFile = "";
      this.mediaEditingIndex = "";
      this.contactInput = "";
      this.contactFile = "";
      this.contactEditingIndex = "";
    },

    setIcon(e, type) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        if (type == "media") {
          this.mediaFile = file;
          this.mediaUrl = reader.result;
        } else if (type == "contact") {
          this.contactFile = file;
          this.contactUrl = reader.result;
        }
      });
      reader.readAsDataURL(file);
    },

    editList(type, item, index) {
      if (type == "media") {
        this.mediaEditingIndex = index;
        this.mediaInput = item.text;
        this.mediaUrl = item.url;
        this.mediaFile = item.icon;
      } else if (type == "contact") {
        this.contactEditingIndex = index;
        this.contactInput = item.text;
        this.contactUrl = item.url;
        this.contactFile = item.icon;
      }
    },

    removeList(type, index) {
      if (type == "media") {
        this.media.splice(index, 1);
      } else if (type == "coloredMedia") {
        this.coloredMedia.splice(index, 1);
      } else if (type == "contact") {
        this.coloredContact.splice(index, 1);
      } else if (type == "coloredContact") {
        this.coloredContact.splice(index, 1);
      } else if (type == "announcements") {
        this.announcements.splice(index, 1);
      }
    },

    addAnnouncement() {
      this.announcements.push(this.announcement);
      this.announcement = "";
    },

    setImgUrl() {
      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (e) {
        var previewImage = document.getElementById("previewImage");
        previewImage.src = e.target.result;
        previewImage.style.display = "block";
      };

      reader.readAsDataURL(file);
    },

    showAlertBox(msg, status) {
      this.$store.commit("SHOW_ALERT_BOX", { msg, status });
    },

    toggleCompanyCheck(int) {
      this.$store.commit("companyStore/TOGGLE_COMPANY", int);
    },

    selectAll() {
      this.isAllChecked = !this.isAllChecked;
      this.$store.commit("companyStore/CHECK_ALL_COMPANY", this.isAllChecked);
    },

    async selectCountry(country) {
      this.showCountryList = !this.showCountryList;
      this.countryDefault = country.name;
      this.stateDefault = "Select State";
      this.lgaDefault = "Select LGA";
      this.unitDefault = "Select Unit";
      const query = `?limit=40&country=${country.name}`;
      const states = country.states;

      await this.$store.dispatch("SET_STATE", {
        query,
        states,
      });
    },

    async selectState(state) {
      this.showStateList = !this.showStateList;
      this.stateDefault = state.name;
      this.lgaDefault = "Select LGA";
      this.unitDefault = "Select Unit";
      const query = `?limit=40&state=${state.name}`;
      const lgas = state.lga;

      await this.$store.dispatch("SET_LGA", {
        query,
        lgas,
      });
    },

    async selectLGA(lga) {
      this.showLGAList = !this.showLGAList;
      this.lgaDefault = lga.name;
      this.unitDefault = "Select Unit";
      const query = `?limit=40&lga=${lga.name}`;
      const units = lga.units;

      await this.$store.dispatch("SET_UNIT", {
        query,
        units,
      });
    },

    async selectUnit(unit) {
      this.showUnitList = !this.showUnitList;
      this.unitDefault = unit;
    },

    setCompanyData(newCompany) {
      this.companyName = newCompany.companyName;
      this.companyDomain = newCompany.companyDomain;
      this.countryDefault = newCompany.country;
      this.stateDefault = newCompany.state;
      this.lgaDefault = newCompany.lga;
      this.unitDefault = newCompany.unit;
      this.bankName = newCompany.bankName;
      this.bankAccountName = newCompany.bankAccountName;
      this.bankAccountNumber = newCompany.bankAccountNumber;
      this.invoiceNumber = newCompany.invoiceNumber;
      this.media = newCompany.media;
      this.contact = newCompany.contact;
      this.announcements = newCompany.announcements;
      this.systemEmail = newCompany.systemEmail;
    },

    prepareEditCompany() {
      if (this.selectedCompanies.length === 0) {
        this.showAlertBox(
          "Please select at least one row in the table to edit",
          true
        );
        return;
      }

      const company = this.selectedCompanies[this.selectedCompanies.length - 1];
      const newCompany = JSON.parse(JSON.stringify(company));
      this.isEditing = true;
      this.editingId = newCompany._id;
      this.setCompanyData(newCompany);
    },

    duplicateCompany() {
      if (this.selectedCompanies.length === 0) {
        this.showAlertBox(
          "Please select at least one row in the table to edit",
          true
        );
        return;
      }

      const company = this.selectedCompanies[this.selectedCompanies.length - 1];
      const newCompany = JSON.parse(JSON.stringify(company));

      this.setCompanyData(newCompany);
    },

    checkResponse(response) {
      if (response.status === 200) {
        this.showAlertBox("The company is saved successfully", false);
        this.clearInputs();
      } else {
        this.showResponseMsg(response.response.data.message, true);
      }
      this.onRequest = false;
    },

    async processData() {
      this.onRequest = true;

      // if (response.status == 200) {
      //   this.showAlertBox("The company was set successfully", false);
      // } else {
      //   this.showResponseMsg(response.response.data.message, true);
      // }

      const form = new FormData();
      form.append("companyName", this.companyName);
      form.append("companyDomain", this.companyDomain);
      form.append("bankName", this.bankName);
      form.append("bankAccountName", this.bankAccountName);
      form.append("bankAccountNumber", this.bankAccountNumber);
      form.append("invoiceNumber", this.invoiceNumber);

      form.append("country", this.countryDefault);
      form.append("state", this.stateDefault);
      form.append("lga", this.lgaDefault);
      form.append("unit", this.unitDefault);

      this.announcements.forEach((el) => {
        form.append("announcements", el);
      });
      this.media.forEach((el) => {
        form.append("mediaText", el.text);
        form.append("mediaIcon", el.icon);
      });
      this.contact.forEach((el) => {
        form.append("contactText", el.text);
        form.append("contactIcon", el.icon);
      });

      if (this.isEditing) {
        this.updateCompany(form);
      } else {
        this.createCompany(form);
      }
    },

    // populateData(data) {
    //   this.companyName = data.companyName;
    //   this.companyDomain = data.companyDomain;
    //   this.bankName = data.bankName;
    //   this.bankAccountName = data.bankAccountName;
    //   this.bankAccountNumber = data.bankAccountNumber;
    //   this.invoiceNumber = data.invoiceNumber;
    //   this.announcements = data.announcements;

    //   this.media = data.media;
    //   this.coloredMedia = data.coloredMedia;
    //   this.contact = data.contact;
    //   this.coloredContact = data.coloredContact;
    // },

    async resetCompany() {
      try {
        await this.$axios.post("/company/reset");
        this.showResponseMsg("All company data was reset successfully", false);
      } catch (err) {
        this.showResponseMsg(err.response.data.message, true);
      }
    },

    async updateCompany(form) {
      const id = this.editingId;
      const response = await this.$store.dispatch(
        "companyStore/UPDATE_COMPANY",
        { form, id }
      );
      this.checkResponse(response);
    },

    async createCompany(form) {
      const response = await this.$store.dispatch(
        "companyStore/CREATE_COMPANY",
        form
      );
      this.checkResponse(response);
    },
  },

  async asyncData({ store }) {
    await store.dispatch("companyStore/nuxtServerInit");
  },

  computed: {
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

    companyArray() {
      return this.$store.state.companyStore.companyArray;
    },
    selectedCompanies() {
      return this.$store.state.companyStore.selectedCompanies;
    },
  },

  mounted() {
    // this.getCompany();
  },
};
</script>

<style>
.full {
  width: 100%;
}
</style>
