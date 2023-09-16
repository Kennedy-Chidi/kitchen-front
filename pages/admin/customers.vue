<template>
  <div class="">
    <alert-box />
    <alert-confirmation />
    <cart-items />
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
                  <div class="c30 name"><div>Username</div></div>
                  <div class="c20 phone"><div>Phone Number</div></div>
                  <div class="c20 times"><div>Purchases</div></div>
                  <div class="c20 amount"><div>Amount</div></div>
                </div>
                <div
                  v-for="(user, int) in usersArray"
                  :key="int"
                  class="table-head-row body"
                  :class="{ even: int % 2 == 0 }"
                >
                  <div class="tb-sn user">
                    <div class="inner-label">S/N:</div>
                    <div>{{ int + 1 }}</div>
                    <div @click="toggleUser(int)" class="check-box">
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
                  <div class="c30 name">
                    <div class="inner-label">Username:</div>
                    <div>
                      <a href="#" class="user-link">{{ user.username }}</a>
                    </div>
                  </div>
                  <div class="c20 phone">
                    <div class="inner-label">Phone:</div>
                    <div>{{ user.phoneNumber1 }}</div>
                  </div>
                  <div class="c20 times">
                    <div class="inner-label">Purchases:</div>
                    <div>57 Times</div>
                  </div>
                  <div class="c20 amount">
                    <div class="inner-label">Amount</div>
                    <div>N790,000</div>
                  </div>
                </div>

                <div class="pagination table">
                  <div class="page-result">
                    <h3 class="page-result-txt">
                      Results: {{ length }}, Page {{ currentPage }} of
                      {{ pages().length }}
                    </h3>
                  </div>

                  <ul role="list" class="pagination-list">
                    <li class="page">
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

                    <li class="page">
                      <i class="material-symbols-outlined orange"
                        >arrow_forward_ios</i
                      >
                    </li>
                  </ul>
                </div>
              </div>

              <div class="table-head foot">
                <div @click="checkAll" class="check-box all">
                  <div class="check" :class="{ active: isAllChecked }"></div>
                </div>
                <div class="table-filter foot">
                  <div class="tb-filter-head">
                    <div>Select Email</div>
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
                <div @click="makeStaff" class="table-filter">
                  <div class="tb-filter-head"><div>Make Staff</div></div>
                </div>
                <div class="actions-foot">
                  <img
                    src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b84c6a55d515bb243eebf8_envelope-line-icon%202.svg"
                    loading="lazy"
                    alt=""
                    class="action-icons"
                  /><img
                    src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b84c6a5ba79f864dd5bd3a_sms-icon%201.svg"
                    loading="lazy"
                    alt=""
                    class="action-icons"
                  /><img
                    src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b84d212e330d5af9503296_delete.svg"
                    loading="lazy"
                    alt=""
                    class="action-icons h"
                  />
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
import AlertConfirmation from "../../components/AlertConfirmation";
import CartItems from "../../components/CartItems.vue";
import CompanyAds from "../../components/CompanyAds.vue";
import FooterComponent from "../../components/FooterComponent";
import HorizontalNav from "../../components/HorizontalNav";
import MobileBottomNav from "../../components/MobileBottomNav";
import VerticalNav from "../../components/VerticalNav";

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

      emails: [],
      showEmails: false,
      selectedEmail: "",
      selectedEmailName: "Select Email",

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
      this.getUsers();
    },

    toggleUser(int) {
      this.$store.commit("settingsStore/TOGGLE_USER", int);
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

    checkAll() {
      this.$store.commit("settingsStore/CHECK_ALL_USERS");
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
        this.showAlertBox("The user was updated successfully", false);
      } else {
        this.showResponseMsg(response.response.data.message, true);
      }
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

    async makeStaff() {
      if (this.selectedUsersArray.length == 0) {
        this.showAlertBox("Select at least one user to update", true);
        return;
      }
      const user = JSON.parse(
        JSON.stringify(
          this.selectedUsersArray[this.selectedUsersArray.length - 1]
        )
      );
      const id = user._id;
      const query = `?limit=${this.limit}&page=${this.currentPage}&status=User`;
      const form = {
        status: "Staff",
        username: user.username,
        profilePicture: user.profilePicture,
        profilePictureUrl: "",
        email: user.email,
        phoneNumber: user.phoneNumber,
        country: "General",
        state: "General",
        lga: "General",
        unit: "General",
        id: id,
      };
      const formData = {
        form,
        query,
      };
      const result = await this.$store.dispatch(
        `userStore/MAKE_STAFF`,
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

  mounted() {
    // this.getUsers();
    // this.getSMS();
    // this.getEmails();
    // this.$socket.on("fetchedItems", (data, cb) => {
    //   this.users = data;
    // });
  },
  computed: {
    usersArray() {
      return this.$store.state.settingsStore.usersArray;
    },

    selectedUsersArray() {
      return this.$store.state.settingsStore.selectedUsers;
    },

    length() {
      return this.$store.state.settingsStore.userLength;
    },

    isAllChecked() {
      return this.$store.state.settingsStore.isUsersChecked;
    },
  },
};
</script>

<style></style>
