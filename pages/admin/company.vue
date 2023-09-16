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
                  <div class="c20 ban"><div>System Email</div></div>
                  <div class="c20 ban"><div>Referral</div></div>
                  <div class="tb-image ban"><div>Phone Number</div></div>
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
                        :class="{ active: company.checked }"
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
                    <div class="inner-label">Email:</div>
                    <div>{{ company.systemEmail }}</div>
                  </div>
                  <div class="c20 ban">
                    <div class="inner-label">Referral:</div>
                    <div class="pro-cart">
                      <div>{{ company.referralPercentage }}</div>
                    </div>
                  </div>
                  <div v-if="company.contact[2]" class="tb-image ban act">
                    <div class="inner-label">Phone:</div>
                    <div>{{ company.contact[2].text }}</div>
                  </div>
                </div>

                <div class="pagination table">
                  <div class="page-result">
                    <h3 class="page-result-txt">Results: 20, Page 1 of 5</h3>
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
                  <div class="check" :class="{ active: isAllChecked }"></div>
                </div>
                <div class="actions-foot">
                  <i
                    @click="duplicateCompany()"
                    class="material-symbols-outlined orange action-icons"
                    >content_copy</i
                  >
                  <i
                    @click="prepareEditCompany()"
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
                  <label for="name-18" class="label">System Email</label>
                  <input
                    type="text"
                    class="custom-input w-input"
                    v-model="systemEmail"
                    placeholder="Enter Company Email"
                  />
                </div>
                <div class="each-input half pad">
                  <label for="name-18" class="label">Select Country</label>
                  <div class="table-filter part">
                    <div
                      class="tb-filter-head"
                      @click="showCountryList = !showCountryList"
                    >
                      <div>{{ countryDefault }}</div>
                      <i class="material-symbols-outlined orange right"
                        >expand_more</i
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
                  <label for="name-18" class="label">Select State</label>
                  <div class="table-filter part">
                    <div
                      class="tb-filter-head"
                      @click="showStateList = !showStateList"
                    >
                      <div>{{ stateDefault }}</div>
                      <i class="material-symbols-outlined orange right"
                        >expand_more</i
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
                  <label for="name-18" class="label">Referral Percentage</label
                  ><input
                    type="number"
                    class="custom-input w-input"
                    v-model="referralPercentage"
                    placeholder="Enter Referral Percentage"
                  />
                </div>

                <div class="each-input part">
                  <label for="name-18" class="label">Social Media Links</label>

                  <div class="flex-span">
                    <span
                      v-for="(item, int) in media"
                      :key="int"
                      class="media-list b"
                    >
                      <div>{{ item }}</div>
                    </span>
                  </div>
                  <div class="color-flex">
                    <input
                      type="text"
                      class="custom-input w-input"
                      v-model="mediaInput"
                      placeholder="Enter Social Media Links"
                      @keypress.enter="addMedia"
                    />
                  </div>
                </div>

                <div class="each-input part">
                  <label for="name-18" class="label">Contact Info</label>
                  <div class="flex-span">
                    <span
                      v-for="(item, int) in contact"
                      :key="int"
                      class="media-list b"
                      @click="selectContact(int)"
                    >
                      <div>{{ item }}</div>
                    </span>
                  </div>

                  <div class="color-flex">
                    <input
                      type="text"
                      class="custom-input w-input"
                      v-model="contactInput"
                      placeholder="Enter Social Contact"
                      @keypress.enter="addContact"
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
                    <i class="material-symbols-outlined spinner white"
                      >expand_more</i
                    >
                    <div>Processing</div>
                  </div>

                  <div
                    v-if="!onRequest"
                    class="custom-btn edge color"
                    @click="addAnnouncement"
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

      media: [],
      contact: [],
      companyName: "",
      companyDomain: "",
      announcements: [],
      announcement: "",
      bankName: "",
      bankAccountName: "",
      bankAccountNumber: "",
      invoiceNumber: 0,
      systemEmail: "",
      referralPercentage: 0,

      mediaInput: "",
      editingMedia: false,
      editContactIndex: "",

      contactInput: "",
      editingContact: false,
      editContactIndex: "",

      isEditing: false,
      editingId: "",
      editingIndex: "",

      response: "",
      isError: false,
      showResponse: false,
      onRequest: false,
      showEditor: false,

      showCountryList: false,
      selectedCountry: "",

      showStateList: false,
      selectedState: "",
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
      this.referralPercentage = 0;
      this.systemEmail = "";
      this.countryDefault = "Select Country";
      this.stateDefault = "Select State";

      this.media = [];
      this.contact = [];
      this.editingId = "";
      this.isEditing = false;
    },

    addContact() {
      if (this.editingContact) {
        this.contact[this.editContactIndex] = this.contactInput;
        this.editContactIndex = "";
        this.editingContact = false;
        this.contactInput = "";
      } else {
        this.contact.push(this.contactInput);
        this.contactInput = "";
      }
    },

    addMedia() {
      this.media.push(this.mediaInput);
      this.mediaInput = "";
    },

    addAnnouncement() {
      this.announcements.push(this.announcement);
      this.announcement = "";
    },

    showAlertBox(msg, status) {
      this.$store.commit("SHOW_ALERT_BOX", { msg, status });
    },

    toggleCompanyCheck(int) {
      this.$store.commit("settingsStore/TOGGLE_COMPANY", int);
    },

    selectAll() {
      this.$store.commit("settingsStore/CHECK_ALL_COMPANY", this.isAllChecked);
    },

    selectContact(int) {
      this.editingContact = true;
      this.editContactIndex = int;
      const item = JSON.parse(JSON.stringify(this.contact[int]));
      this.contactInput = item;
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
    },

    setCompanyData(newCompany) {
      this.companyName = newCompany.companyName;
      this.companyDomain = newCompany.companyDomain;
      this.countryDefault = newCompany.country;
      this.stateDefault = newCompany.state;
      this.bankName = newCompany.bankName;
      this.bankAccountName = newCompany.bankAccountName;
      this.bankAccountNumber = newCompany.bankAccountNumber;
      this.invoiceNumber = newCompany.invoiceNumber;
      this.media = newCompany.media;
      this.contact = newCompany.contact;
      this.announcements = newCompany.announcements;
      this.systemEmail = newCompany.systemEmail;
      this.referralPercentage = newCompany.referralPercentage;
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
      // if (response.status == 200) {
      //   this.showAlertBox("The company was set successfully", false);
      // } else {
      //   this.showResponseMsg(response.response.data.message, true);
      // }

      const form = {
        companyName: this.companyName,
        companyDomain: this.companyDomain,
        bankName: this.bankName,
        bankAccountName: this.bankAccountName,
        bankAccountNumber: this.bankAccountNumber,
        invoiceNumber: this.invoiceNumber,
        country: this.countryDefault,
        state: this.stateDefault,
        systemEmail: this.systemEmail,
        referralPercentage: this.referralPercentage,
        announcements: this.announcements,
        media: this.media,
        contact: this.contact,
      };

      this.onRequest = true;
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
        "settingsStore/UPDATE_COMPANY",
        { form, id }
      );
      this.checkResponse(response);
    },

    async createCompany(form) {
      const response = await this.$store.dispatch(
        "settingsStore/CREATE_COMPANY",
        form
      );
      this.checkResponse(response);
    },
  },

  computed: {
    countries() {
      return this.$store.state.countries;
    },

    states() {
      return this.$store.state.stateArray;
    },

    companyArray() {
      return this.$store.state.settingsStore.companyArray;
    },

    resultLength() {
      return this.$store.state.settingsStore.companyLength;
    },

    selectedCompanies() {
      return this.$store.state.settingsStore.selectedCompanies;
    },

    isAllChecked() {
      return this.$store.state.settingsStore.isCompanyChecked;
    },
  },
};
</script>

<style>
.full {
  width: 100%;
}
</style>
