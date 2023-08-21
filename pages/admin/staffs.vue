<template>
  <div class="grace users">
    <alert-box />
    <alert-confirmation />
    <cart-items />
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
                  <div class="table-head admin">
                    <div class="date-range">
                      <div class="each-date">
                        <label for="field-4" class="label">From</label
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
                        <label for="field-4" class="label">To</label
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
                    <div class="table-filter">
                      <ul role="list" class="tb-filter-list">
                        <li class="tb-list"><div>Orders</div></li>
                        <li class="tb-list"><div>Sales</div></li>
                        <li class="tb-list"><div>Purchases</div></li>
                        <li class="tb-list"><div>Expenses</div></li>
                      </ul>
                    </div>
                    <div class="sort-range">
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
                        name="name-15"
                        data-name="Name 15"
                        placeholder="Search Product"
                        id="name-15"
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
                      <div class="tb-image"><div>Image</div></div>
                      <div class="c20 phone"><div>Username</div></div>
                      <div class="c20 phone"><div>Country</div></div>
                      <div class="c20 times"><div>State</div></div>
                      <div class="c20 amount"><div>LGA</div></div>
                      <div class="c20 amount"><div>Unit</div></div>
                      <div class="c20 amount"><div>Call Line</div></div>
                    </div>
                    <div
                      v-for="(user, int) in staffArray"
                      :key="int"
                      class="table-head-row body"
                      :class="{ even: int % 2 == 0 }"
                    >
                      <div class="tb-sn user">
                        <div class="inner-label">S/N:</div>
                        <div>{{ int + 1 }}</div>
                        <div @click="toggleStaff(int)" class="check-box">
                          <div
                            class="check"
                            :class="{ active: user.checked }"
                          ></div>
                        </div>
                      </div>
                      <div class="tb-image">
                        <div class="inner-label">Image:</div>
                        <div class="tb-img">
                          <img
                            v-if="user.profilePictureUrl"
                            :src="user.profilePictureUrl"
                            loading="lazy"
                            sizes="(max-width: 1279px) 70px, (max-width: 1439px) 5vw, 70px"
                            :srcset="`
                            ${user.profilePictureUrl} 500w,
                            ${user.profilePictureUrl} 800w,
                            ${user.profilePictureUrl}       953w`"
                            alt=""
                            class="responsive-img"
                          />
                          <i v-else class="material-symbols-outlined orange bg"
                            >person</i
                          >
                        </div>
                      </div>
                      <div class="c20 phone">
                        <div class="inner-label">Username:</div>
                        <div>
                          <a href="#" class="user-link">{{ user.username }}</a>
                        </div>
                      </div>
                      <div class="c20 phone">
                        <div class="inner-label">Country:</div>
                        <div>{{ user.country }}</div>
                      </div>
                      <div class="c20 times">
                        <div class="inner-label">State:</div>
                        <div>{{ user.state }}</div>
                      </div>
                      <div class="c20 amount">
                        <div class="inner-label">LGA:</div>
                        <div>{{ user.lga }}</div>
                      </div>
                      <div class="c20 amount">
                        <div class="inner-label">Unit:</div>
                        <div>{{ user.unit }}</div>
                      </div>
                      <div class="c20 amount">
                        <div class="inner-label">Unit:</div>
                        <div>{{ user.callLine }}</div>
                      </div>
                    </div>

                    <div class="pagination table">
                      <div class="page-result">
                        <h3 class="page-result-txt">
                          Results: {{ length }}, Page {{ currentPage }} of
                          {{ pages().length }}
                        </h3>
                      </div>
                      <ul
                        v-if="pages().length > 1"
                        role="list"
                        class="pagination-list"
                      >
                        <li class="page" @click="paginate(currentPage - 1)">
                          <i class="material-symbols-outlined orange"
                            >arrow_back_ios</i
                          >
                        </li>
                        <li
                          v-for="(item, int) in pages().length"
                          :key="int"
                          class="page"
                          @click="paginate(int + 1)"
                          :class="{ active: int + 1 == currentPage }"
                        >
                          <div>{{ int + 1 }}</div>
                        </li>

                        <li class="page" @click="paginate(currentPage + 1)">
                          <i class="material-symbols-outlined orange"
                            >arrow_forward_ios</i
                          >
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="table-head foot">
                    <div class="table-filter foot">
                      <div
                        @click="showStates = !showStates"
                        class="tb-filter-head"
                      >
                        <div>{{ defaultState }}</div>
                        <img
                          src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b81c16b31d7eadba21fa56_down.svg"
                          loading="lazy"
                          alt=""
                          class="filter-icon left"
                        />
                      </div>
                      <ul
                        role="list"
                        class="tb-filter-list"
                        :class="{ active: showStates }"
                      >
                        <li @click="setState('General')" class="tb-list">
                          <div>General</div>
                        </li>
                        <li
                          @click="setState(state.name)"
                          v-for="(state, int) in states"
                          :key="int"
                          class="tb-list"
                        >
                          <div>{{ state.name }}</div>
                        </li>
                      </ul>
                    </div>

                    <div class="table-filter foot">
                      <div
                        @click="showLGA = !showLGA"
                        class="tb-filter-head left"
                      >
                        <i
                          v-if="onStateRequest"
                          class="material-symbols-outlined orange no spinner"
                          >motion_photos_on</i
                        >
                        <div v-if="onStateRequest">Processing...</div>
                        <div v-else>{{ defaultLga }}</div>
                        <i class="material-symbols-outlined orange"
                          >keyboard_arrow_down</i
                        >
                      </div>
                      <ul
                        role="list"
                        class="tb-filter-list"
                        :class="{ active: showLGA && !onStateRequest }"
                      >
                        <li @click="setLGA('General', '')" class="tb-list">
                          <div>General</div>
                        </li>
                        <li
                          @click="setLGA(lga.name, lga.units)"
                          v-for="(lga, int) in lgas"
                          :key="int"
                          class="tb-list"
                        >
                          <div>{{ lga.name }}</div>
                        </li>
                      </ul>
                    </div>

                    <div class="table-filter foot">
                      <div
                        @click="showUnits = !showUnits"
                        class="tb-filter-head"
                      >
                        <div>{{ defaultUnit }}</div>
                        <img
                          src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b81c16b31d7eadba21fa56_down.svg"
                          loading="lazy"
                          alt=""
                          class="filter-icon left"
                        />
                      </div>
                      <ul
                        role="list"
                        class="tb-filter-list"
                        :class="{ active: showUnits }"
                      >
                        <li
                          @click="setUnit(unit)"
                          v-for="(unit, int) in units"
                          :key="int"
                          class="tb-list"
                        >
                          <div>{{ unit }}</div>
                        </li>
                      </ul>
                    </div>

                    <div class="table-filter foot">
                      <div
                        @click="showPositions = !showPositions"
                        class="tb-filter-head"
                      >
                        <div>{{ defaultPosition }}</div>
                        <img
                          src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b81c16b31d7eadba21fa56_down.svg"
                          loading="lazy"
                          alt=""
                          class="filter-icon left"
                        />
                      </div>
                      <ul
                        role="list"
                        class="tb-filter-list"
                        :class="{ active: showPositions }"
                      >
                        <li
                          @click="setPosition(position)"
                          v-for="(position, int) in positions"
                          :key="int"
                          class="tb-list"
                        >
                          <div>{{ position.position }}</div>
                        </li>
                      </ul>
                    </div>

                    <div @click="makeUser" class="table-filter">
                      <div class="tb-filter-head"><div>Make User</div></div>
                    </div>
                  </div>

                  <div class="table-head foot">
                    <div @click="checkAll" class="check-box all">
                      <div
                        class="check"
                        :class="{ active: isAllChecked }"
                      ></div>
                    </div>

                    <div class="table-filter">
                      <div class="tb-filter-head">
                        <div>Select SMS</div>
                        <img
                          src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b81c16b31d7eadba21fa56_down.svg"
                          loading="lazy"
                          alt=""
                          class="filter-icon left"
                        />
                      </div>
                      <ul role="list" class="tb-filter-list">
                        <li class="tb-list"><div>Orders</div></li>
                        <li class="tb-list"><div>Sales</div></li>
                        <li class="tb-list"><div>Purchases</div></li>
                        <li class="tb-list"><div>Expenses</div></li>
                      </ul>
                    </div>
                    <div @click="makeUser" class="table-filter">
                      <div class="tb-filter-head"><div>Make User</div></div>
                    </div>
                    <div class="actions-foot">
                      <i
                        @click="prepareStaffEdit"
                        class="material-symbols-outlined orange action-icons"
                        >edit</i
                      >
                      <i class="material-symbols-outlined orange action-icons"
                        >delete</i
                      >
                    </div>
                  </div>

                  <div v-if="showEditor" class="table-head ban">
                    <div class="each-input center">
                      <label for="name-15" class="label">Phone Number</label
                      ><input
                        type="tel"
                        class="custom-input w-input"
                        maxlength="256"
                        v-model="callLine"
                        placeholder="Enter Staff Phone Number"
                      />
                    </div>

                    <div class="btn-holder">
                      <div v-if="onRequest" class="custom-btn edge">
                        <i class="material-symbols-outlined white spinner"
                          >motion_photos_on</i
                        >
                        <div>Processing</div>
                      </div>
                      <div
                        v-if="!onRequest"
                        @click="updateStaff"
                        class="custom-btn edge color"
                      >
                        <div>Update Staff</div>
                      </div>
                      <div
                        v-if="!onRequest"
                        @click="showEditor = !showEditor"
                        class="custom-btn edge color"
                      >
                        <div>Close</div>
                      </div>
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
import AlertBox from "../../components/AlertBox";
import AlertConfirmation from "../../components/AlertConfirmation.vue";
import CartItems from "../../components/CartItems.vue";
import CompanyAds from "../../components/CompanyAds";
import FooterComponent from "../../components/FooterComponent";
import HorizontalNav from "../../components/HorizontalNav.vue";
import MobileBottomNav from "../../components/MobileBottomNav";
import VerticalNav from "../../components/VerticalNav.vue";

export default {
  components: {
    CompanyAds,
    HorizontalNav,
    CartItems,
    VerticalNav,
    MobileBottomNav,
    FooterComponent,
    AlertBox,
    AlertConfirmation,
  },

  data() {
    return {
      newLimit: 5,
      sort: "-time",
      limit: 5,
      resultLength: "",
      currentPage: 1,
      pages: function () {
        let array = [];
        let x = Math.ceil(this.length / this.limit);
        for (let i = 0; i < x; i++) {
          array.push("i");
        }
        return array;
      },

      response: "",
      isError: false,
      showResponse: false,
      onRequest: false,
      onStateRequest: false,
      onLgaRequest: false,

      callLine: "",
      salary: "",
      ranking: "",
      defaultPosition: "Select Position",
      defaultState: "Select State",
      defaultLga: "Select LGA",
      defaultUnit: "Select Unit",
      showPositions: false,
      showStates: false,
      showLGA: false,
      showUnits: false,

      emails: [],
      showEditor: false,
      showEmails: false,
      selectedEmail: "",
      selectedEmailName: "Select Email",
      editingId: "",

      sms: [],
      selectedSMS: "",
      selectedSMSName: "Select SMS",
      showSMS: false,
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
      this.getUsers();
    },

    paginate(page) {
      this.currentPage = page;
    },

    toggleStaff(int) {
      this.$store.commit("settingsStore/TOGGLE_STAFF", int);
    },

    toggleEmailList() {
      this.showEmails = !this.showEmails;
      this.showSMS = false;
    },

    toggleSMSList() {
      this.showSMS = !this.showSMS;
      this.showEmails = false;
    },

    selectEmail(email) {
      this.selectedEmailName = email.title;
      this.selectedEmail = email;
      this.showEmails = false;
      this.showSMS = false;
    },

    selectSMS(sms) {
      this.showSMS = false;
      this.showEmails = false;
      this.selectedSMS = sms;
      this.selectedSMSName = sms.title;
    },

    setPosition(position) {
      this.showSMS = false;
      this.showEmails = false;
      this.showPositions = false;
      this.defaultPosition = position.position;
      this.ranking = position.ranking;
      this.salary = position.salary;
    },

    async setState(state) {
      this.defaultState = state;
      this.defaultLga = "Select LGA";
      this.showStates = false;
      if (state != "General") {
        this.onStateRequest = true;
        const query = `?limit=100&state=${state}`;
        const result = await this.$store.dispatch("SET_LGA", query);
        if (result) {
          this.onStateRequest = false;
        }
      }
    },

    setLGA(lga, array) {
      this.defaultLga = lga;
      this.defaultUnit = "Select Unit";
      this.showStates = false;
      this.showUnit = false;
      this.showLGA = false;
      if (lga != "General") {
        this.$store.commit("SET_UNIT", array);
      }
    },

    setUnit(unit) {
      this.defaultUnit = unit;
      this.showStates = false;
      this.showUnits = false;
      this.showLGA = false;
    },

    checkAll() {
      this.$store.commit("settingsStore/CHECK_ALL_STAFFS");
    },

    getNewUsersLimit() {
      this.limit = this.newLimit;
      this.getUsers();
    },

    showAlertBox(msg, status) {
      this.$store.commit("SHOW_ALERT_BOX", { msg, status });
    },

    startBulkDelete() {
      if (this.isAllChecked) {
        this.overlaySignal = "bulk";
        this.deleteId = "";
        this.showOverlay = true;
        this.overlayMsg = `Are you sure you want to delete the selected users?`;
      }
    },

    returnAction(response) {
      if (response.status == 200) {
        this.editingId = "";
        this.defaultLga = "Select LGA";
        this.defaultPosition = "Select Position";
        this.defaultState = "Select State";
        this.defaultUnit = "Select Unit";
        this.showAlertBox("The staff was updated successfully", false);
      } else {
        this.showResponseMsg(response.response.data.message, true);
      }
    },

    prepareStaffEdit() {
      if (this.selectedStaffArray.length == 0) {
        this.showAlertBox(`Select at least one staff to update`, true);
        return;
      }
      this.showEditor = true;
      const staff = JSON.parse(
        JSON.stringify(
          this.selectedStaffArray[this.selectedStaffArray.length - 1]
        )
      );
      this.editingId = staff._id;
      this.defaultState = staff.state;
      this.defaultLga = staff.lga;
      this.defaultUnit = staff.unit;
      this.defaultPosition = staff.position;
      this.callLine = staff.callLine;
    },

    async updateStaff() {
      const query = `?limit=${this.limit}&page=${this.currentPage}`;
      const form = {
        country: "Nigeria",
        state: this.defaultState,
        lga: this.defaultLga,
        position: this.defaultPosition,
        unit: this.defaultUnit,
        callLine: this.callLine,
      };
      const formData = {
        form,
        id: this.editingId,
        query,
      };
      const result = await this.$store.dispatch(
        `settingsStore/UPDATE_STAFF`,
        formData
      );
      this.returnAction(result);
    },

    async sendEmail() {
      if (!this.checkSelectedUsers()) {
        return;
      }

      if (!this.selectedEmail) {
        this.showResponseMsg("Please select an Email to Continue", true);
        return;
      }
      const query = `?limit=${this.limit}&page=${this.currentPage}&status=User`;
      const form = {
        users: this.selectedUsers,
        email: this.selectedEmail,
        time: new Date().getTime(),
      };

      try {
        const result = await this.$axios.post(
          `/emails/send-email/${query}`,
          form
        );
        this.emails = result.data.data;
        this.showResponseMsg("The emails were sent successfully", false);
      } catch (err) {
        this.showResponseMsg(err.response.data, true);
      }
    },

    async sendSMS() {
      if (!this.checkSelectedUsers()) {
        return;
      }

      if (!this.selectedSMS) {
        this.showResponseMsg("Please select an SMS to Continue", true);
        return;
      }
      const form = {
        template: this.selectedSMS.template,
        users: this.selectedUsers,
      };
      try {
        const result = await this.$axios.post(`/sms/send-sms/`, form);
        this.showResponseMsg("Emails were sent successfully", false);
      } catch (err) {
        this.showResponseMsg(err.response.data.message, true);
      }
    },

    async makeUser() {
      if (this.selectedStaffArray.length == 0) {
        this.showAlertBox("Select at least one user to update", true);
        return;
      }
      const user = JSON.parse(
        JSON.stringify(
          this.selectedStaffArray[this.selectedStaffArray.length - 1]
        )
      );
      const id = user._id;
      const query = `?limit=${this.limit}&page=${this.currentPage}&status=User`;
      const form = { status: "User" };
      const formData = {
        form,
        id,
        query,
      };
      const result = await this.$store.dispatch(
        `settingsStore/MAKE_USER`,
        formData
      );
      this.returnAction(result);
    },

    async fetchItems(e) {
      const data = {
        keyWord: e.target.value,
        limit: this.limit,
        page: this.currentPage,
      };
      this.$socket.emit("fetchItems", data);
    },

    async deleteUsers() {
      if (!this.checkSelectedUsers()) {
        return;
      }

      this.overlayMsg = "";
      this.showOverlay = false;
      const form = {
        users: this.selectedUsers,
      };
      const query = `?limit=${this.limit}&page=${this.currentPage}&status=User`;
      try {
        const result = await this.$axios.patch(`/users/${query}`, form);
        this.users = this.recheckusers(result.data.data);
        this.resultLength = result.data.resultLength;
        this.clearInputs();
      } catch (err) {
        this.showResponseMsg(err.response.data.message, true);
      }
    },
  },

  computed: {
    staffArray() {
      return this.$store.state.settingsStore.staffArray;
    },

    selectedStaffArray() {
      return this.$store.state.settingsStore.selectedStaffs;
    },

    staffSettings() {
      return this.$store.state.settingsStore.staffSettingsArray;
    },

    positions() {
      return this.$store.state.settingsStore.staffPositions;
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

    length() {
      return this.$store.state.settingsStore.userLength;
    },

    isAllChecked() {
      return this.$store.state.settingsStore.isStaffsChecked;
    },
  },
};
</script>

<style></style>
