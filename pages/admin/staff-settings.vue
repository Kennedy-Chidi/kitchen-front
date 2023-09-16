<template>
  <div class="">
    <alert-confirmation />
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
                  <div class="c20 ban"><div>Position</div></div>
                  <div class="c20 ban"><div>Salary</div></div>
                  <div class="c20 ban"><div>Ranking</div></div>
                </div>
                <div
                  v-for="(staff, int) in staffSettings"
                  :key="int"
                  class="table-head-row body"
                  :class="{ even: int % 2 == 0 }"
                >
                  <div class="tb-sn ban">
                    <div class="inner-label">S/N:</div>
                    <div>{{ int + 1 }}</div>
                    <div @click="toggleStaff(int)" class="check-box">
                      <div
                        class="check"
                        :class="{ active: staff.checked }"
                      ></div>
                    </div>
                  </div>
                  <div class="c20 ban part">
                    <div class="inner-label">Position:</div>
                    <div>{{ staff.position }}</div>
                  </div>
                  <div class="c20 ban">
                    <div class="inner-label">Salary:</div>
                    <div>N{{ formatNumber(staff.salary) }}</div>
                  </div>
                  <div class="c20 ban">
                    <div class="inner-label">Ranking:</div>
                    <div>{{ staff.ranking }}</div>
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
                    <li
                      v-if="currentPage != 1"
                      class="page"
                      @click="paginate(currentPage - 1)"
                    >
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

                    <li
                      v-if="currentPage != pages().length"
                      class="page"
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
                <div @click="checkAllStaffs" class="check-box all">
                  <div
                    class="check"
                    :class="{ active: isAllStaffsChecked }"
                  ></div>
                </div>
                <div class="actions-foot">
                  <i
                    @click="duplicateStaff"
                    class="material-symbols-outlined orange action-icons"
                    >content_copy</i
                  >
                  <i
                    @click="prepareStaffdit"
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
                  <label for="name-15" class="label">Position</label
                  ><input
                    type="text"
                    class="custom-input w-input"
                    maxlength="256"
                    v-model="position"
                    placeholder="Enter Staff Position"
                  />
                </div>
                <div class="each-input part">
                  <label for="name-15" class="label">Salary</label
                  ><input
                    type="text"
                    class="custom-input w-input"
                    maxlength="256"
                    v-model="salary"
                    placeholder="Enter Staff Salary"
                  />
                </div>
                <div class="each-input part">
                  <label for="name-18" class="label">Ranking</label
                  ><input
                    type="number"
                    class="custom-input w-input"
                    maxlength="256"
                    placeholder="Enter Staff Ranking"
                    v-model="ranking"
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
                    @click="processData"
                    class="custom-btn edge color"
                  >
                    <div>Submit</div>
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
</template>

<script>
import AlertBox from "../../components/AlertBox.vue";
import AlertConfirmation from "../../components/AlertConfirmation.vue";
import CompanyAds from "../../components/CompanyAds";
import FooterComponent from "../../components/FooterComponent";
import HorizontalNav from "../../components/HorizontalNav.vue";
import MobileBottomNav from "../../components/MobileBottomNav";
import VerticalNav from "../../components/VerticalNav.vue";
export default {
  components: {
    HorizontalNav,
    CompanyAds,
    VerticalNav,
    FooterComponent,
    MobileBottomNav,
    AlertBox,
    AlertConfirmation,
  },
  data() {
    return {
      position: "",
      salary: "",
      ranking: "",

      isEditing: false,
      editingId: "",
      deleteId: "",

      currentPage: 1,
      limit: 5,
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
      showEditor: false,
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
      this.ranking = "";
      this.salary = "";
      this.position = "";
    },

    formatNumber(number) {
      if (!number) {
        return "0.00";
      }
      const options = { style: "decimal", maximumFractionDigits: 0 };
      return number.toLocaleString("en-US", options);
    },

    duplicateStaff() {
      if (this.selectedStaffs.length == 0) {
        this.showAlertBox("Please select a staff to duplicate", true);
        return;
      }
      const staff = JSON.parse(
        JSON.stringify(this.selectedStaffs[this.selectedStaffs.length - 1])
      );
      this.setStaffData(staff);
    },

    showAlertBox(msg, status) {
      this.$store.commit("SHOW_ALERT_BOX", { msg, status });
    },

    toggleStaff(int) {
      this.$store.commit("userStore/TOGGLE_STAFF_SETTINGS", int);
    },

    checkAllStaffs() {
      this.$store.commit("userStore/CHECK_ALL_STAFF_SETTINGS");
    },

    paginate(int) {
      this.currentPage = int;
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=ranking`;
      this.$store.dispatch("userStore/GET_STAFF_SETTINGS", query);
    },

    checkResponse(result) {
      if (result.status === 200) {
        this.showAlertBox("The Staff data was saved successfully", false);
        this.onRequest = false;
      } else {
        this.showResponseMsg(result.response.data.message, true);
      }
    },

    setStaffData(staff) {
      this.ranking = staff.ranking;
      this.salary = staff.salary;
      this.position = staff.position;
    },

    prepareStaffdit() {
      if (this.selectedStaffs.length == 0) {
        this.showAlertBox("Please select a staff to update", true);
        return;
      }
      this.isEditing = true;
      const staff = JSON.parse(
        JSON.stringify(this.selectedStaffs[this.selectedStaffs.length - 1])
      );
      this.editingId = staff._id;
      this.setStaffData(staff);
    },

    processData() {
      this.onRequest = true;
      const form = {
        position: this.position,
        salary: this.salary,
        ranking: this.ranking,
      };

      if (this.isEditing) {
        this.updateStaff(form);
      } else {
        this.createStaff(form);
      }
    },

    startDeleteStaff(id) {
      this.deleteId = id;
      this.showOverlay = true;
      this.overlayMsg = "Are you sure you want to delete this staff data?";
    },

    async updateStaff(form) {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=ranking`;
      const data = {
        form: form,
        query: query,
        id: this.editingId,
      };

      const result = await this.$store.dispatch(
        "userStore/UPDATE_STAFF_SETTINGS",
        data
      );
      this.checkResponse(result);
    },

    async createStaff(form) {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=ranking`;
      const data = {
        form: form,
        query: query,
      };

      const result = await this.$store.dispatch(
        "userStore/CREATE_STAFF_SETTINGS",
        data
      );
      this.checkResponse(result);
    },
  },

  mounted() {},
  computed: {
    staffSettings() {
      return this.$store.state.userStore.staffSettingsArray;
    },

    selectedStaffs() {
      return this.$store.state.userStore.selectedStaffSettings;
    },

    length() {
      return this.$store.state.userStore.staffSettingsLength;
    },

    isAllStaffsChecked() {
      return this.$store.state.userStore.isStaffSettingsChecked;
    },
  },
};
</script>

<style></style>
