<template>
  <div class="w-form">
    <div class="profile-flex">
      <div class="profile-pix">
        <div class="profile-picture">
          <img
            v-if="profilePictureUrl"
            :src="profilePictureUrl"
            loading="lazy"
            sizes="100px"
            :srcset="`
              ${profilePictureUrl} 500w,
              ${profilePictureUrl} 800w,
              ${profilePictureUrl}     953w
            `"
            alt=""
            class="profile-pics active"
          /><label v-else for="email-7">M</label>
        </div>
        <label for="profile" class="custom-btn edge color">
          <input
            @change="setPicture"
            type="file"
            class="hidden w-input"
            id="profile"
          />
          <i class="material-symbols-outlined white">file_upload</i>

          <div>Upload Image</div>
        </label>
      </div>
      <div class="profile-inputs">
        <div class="each-input">
          <label for="name-2" class="label">Username</label
          ><label for="name-3" class="custom-input no">{{
            authUser.username
          }}</label>
        </div>
        <div class="each-input">
          <label for="name-3" class="label">Email</label
          ><label for="name-3" class="custom-input no">{{
            authUser.email
          }}</label>
        </div>
        <div class="each-input">
          <label for="name-3" class="label">Phone Number</label
          ><input
            type="text"
            class="custom-input w-input"
            maxlength="256"
            v-model="phoneNumber"
            placeholder="Please set your phone number"
          />
        </div>
        <div class="each-input full pad">
          <label for="phone-4" class="label">State of Residence</label>
          <div class="table-filter part">
            <div @click="showStates = !showStates" class="tb-filter-head">
              <div>{{ stateDefault }}</div>
              <i class="material-symbols-outlined orange"
                >keyboard_arrow_down</i
              >
            </div>
            <ul
              v-show="stateArray"
              role="list"
              class="tb-filter-list"
              :class="{ active: showStates }"
            >
              <li
                @click="selectState(state)"
                v-for="(state, int) in stateArray"
                :key="int"
                class="tb-list"
              >
                <div>{{ state.name }}</div>
              </li>
            </ul>
          </div>
        </div>

        <div class="each-input full pad">
          <label for="phone-4" class="label">LGA of Residence</label>
          <div class="table-filter part">
            <div @click="showLGA = !showLGA" class="tb-filter-head">
              <div>{{ lgaDefault }}</div>
              <i class="material-symbols-outlined orange"
                >keyboard_arrow_down</i
              >
            </div>
            <ul
              v-show="lgaArray"
              role="list"
              class="tb-filter-list"
              :class="{ active: showLGA }"
            >
              <li
                @click="selectLGA(lga)"
                v-for="(lga, int) in lgaArray"
                :key="int"
                class="tb-list"
              >
                <div>{{ lga.name }}</div>
              </li>
            </ul>
          </div>
        </div>

        <div class="each-input full pad">
          <label for="phone-4" class="label">Unit of Residence</label>
          <div class="table-filter part">
            <div @click="showUnits = !showUnits" class="tb-filter-head">
              <div>{{ unitDefault }}</div>
              <i class="material-symbols-outlined orange"
                >keyboard_arrow_down</i
              >
            </div>
            <ul
              v-show="unitArray"
              role="list"
              class="tb-filter-list"
              :class="{ active: showUnits }"
            >
              <li
                @click="selectUnit(unit)"
                v-for="(unit, int) in unitArray"
                :key="int"
                class="tb-list"
              >
                <div>{{ unit }}</div>
              </li>
            </ul>
          </div>
        </div>

        <div class="each-input">
          <label for="field" class="label">Address</label
          ><textarea
            placeholder="Please fill in your residential address."
            maxlength="5000"
            v-model="address"
            class="custom-input txt w-input"
          ></textarea>
        </div>

        <span v-if="showResponse" for="field-2" class="response error">{{
          response
        }}</span>

        <div class="btn-holder">
          <div v-show="onRequest" class="custom-btn edge color">
            <i class="material-symbols-outlined white spinner"
              >motion_photos_on</i
            >
            <div>Processing</div>
          </div>
          <div v-show="!onRequest" @click="processUser" class="custom-btn edge">
            <div>Save Chanes</div>
          </div>
        </div>
      </div>
      <password-setting />
      <div class="profile-field"></div>
    </div>
  </div>
</template>

<script>
import PasswordSetting from "./PasswordSetting";
export default {
  components: { PasswordSetting },

  data() {
    return {
      phoneNumber: "",
      profilePicture: "",
      profilePictureUrl: "",
      address: "",
      oldPassword: "",
      password: "",
      cPassword: "",

      showStates: false,
      showUnits: false,
      showLGA: false,
      stateDefault: "Select State",
      unitDefault: "Select Unit",
      lgaDefault: "Select LGA",

      response: "",
      isError: false,
      showResponse: false,
      onRequest: false,
      onPasswordRequest: false,

      phoneError: false,
      stateError: false,
      passwordError: false,
      cPasswordError: false,
    };
  },

  methods: {
    selectState(state) {
      this.stateDefault = state.name;
      this.showStates = false;
      this.showUnits = false;
      this.unitDefault = "Select Unit";
      const query = `?limit=100&state=${state.name}`;
      this.$store.dispatch("SET_LGA", query);
    },

    selectLGA(lga) {
      this.lgaDefault = lga.name;
      this.showStates = false;
      this.showUnits = false;
      this.showLGA = false;
      this.unitDefault = "Select Unit";
      const query = ``;
      const form = {
        units: lga.units,
        query,
      };
      this.$store.dispatch("SET_UNIT", form);
    },

    selectUnit(unit) {
      this.unitDefault = unit;
      this.showStates = false;
      this.showUnits = false;
    },

    showAlert(msg, status) {
      this.$store.commit("SHOW_ALERT_BOX", { msg, status });
    },

    callResponse(msg, state) {
      this.response = msg;
      this.showResponse = true;
      this.onRequest = false;
      setTimeout(() => {
        this.showResponse = false;
      }, 6000);
    },

    checkResponse(result, msg, status) {
      this.onRequest = false;
      if (result.status == 200) {
        this.showAlert(msg, status);
      } else {
        this.callResponse(result.response.data.message, true);
      }
    },

    setPicture(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        this.profilePicture = file;
        this.profilePictureUrl = reader.result;
      });
      reader.readAsDataURL(file);

      // const form = new FormData();
      // form.append("profilePicture", file);

      // this.updateProfile(form);
    },

    setUserProfile(user) {
      this.username = user.username;
      this.email = user.email;
      this.phoneNumber = user.phoneNumber;
      this.address = user.address;
      this.stateDefault = user.state;
      this.profilePictureUrl = user.profilePictureUrl;
      this.lgaDefault = user.lga;
      this.unitDefault = user.unit;
    },

    processUser() {
      this.onRequest = true;
      const form = new FormData();
      form.append("phoneNumber", this.phoneNumber);
      form.append("state", this.stateDefault);
      form.append("lga", this.lgaDefault);
      form.append("unit", this.unitDefault);
      form.append("address", this.address);
      form.append("profilePicture", this.profilePicture);

      this.editUser(form);
    },

    async editUser(form) {
      const result = await this.$store.dispatch("userStore/UPDATE_ME", form);
      const msg = `Your data has been updated successfully.`;
      const status = false;
      this.checkResponse(result, msg, status);
      if (result.status == 200) {
        this.$store.commit("UPDATE_ME", result.data.user);
      }
    },
  },

  mounted() {
    this.setUserProfile(this.authUser);
  },

  computed: {
    authUser() {
      return this.$store.state.auth.user;
    },

    stateArray() {
      return this.$store.state.stateArray;
    },

    lgaArray() {
      return this.$store.state.lgas;
    },

    unitArray() {
      return this.$store.state.units;
    },
  },
};
</script>

<style></style>
