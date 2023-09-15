<template>
  <div class="grace signup">
    <div class="main-body">
      <div class="main-flex">
        <landing-nav />
        <div class="custom-container">
          <div class="body-flex">
            <div class="content-body">
              <div class="nav-pag">
                <nuxt-link to="/" class="home-txt">Home - </nuxt-link
                ><nuxt-link to="/signup" class="page-txt">Signup</nuxt-link>
              </div>
              <div class="w-form">
                <div class="profile-flex signing">
                  <div class="profile-inputs partner">
                    <label for="name-21" class="partnership-title sitgg"
                      >Sign Up.
                      <span class="singnn">
                        For Better Experience, Please Provide Accurate
                        Info</span
                      ></label
                    >
                    <div class="each-input part">
                      <label v-show="!usernameError" for="name-20" class="label"
                        >Username</label
                      >
                      <label
                        v-show="usernameError"
                        for="name-20"
                        class="label username response error"
                        >Please fill in a valid username</label
                      >
                      <input
                        type="text"
                        class="custom-input w-input"
                        v-model="username"
                        @focusout="checkErrorInputs('username', username)"
                        placeholder="Enter Username"
                      />
                    </div>
                    <div class="each-input part">
                      <label v-show="!emailError" for="email-7" class="label"
                        >Email</label
                      >
                      <label
                        v-show="emailError"
                        for="email-7"
                        class="label email response error"
                        >Please fill in valid email</label
                      >
                      <input
                        type="email"
                        class="custom-input w-input"
                        @focusout="checkErrorInputs('email', email)"
                        v-model="email"
                        placeholder="Enter Email"
                      />
                    </div>
                    <div class="each-input part">
                      <label v-show="!phoneError" for="phone-3" class="label"
                        >Phone Number</label
                      >
                      <label
                        v-show="phoneError"
                        for="phone-3"
                        class="label phone response error"
                        >Phone Number</label
                      >
                      <input
                        type="tel"
                        class="custom-input w-input"
                        @focusout="checkErrorInputs('phone', phone)"
                        v-model="phone"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                    <div class="each-input part">
                      <label v-show="!passwordError" for="name-20" class="label"
                        >Password</label
                      >
                      <label
                        v-show="passwordError"
                        for="name-20"
                        class="label password response error"
                        >Password must be at least 4 characters long</label
                      >
                      <input
                        type="password"
                        class="custom-input w-input"
                        @focusout="checkErrorInputs('password', password)"
                        v-model="password"
                        placeholder="Enter Password"
                      />
                    </div>
                    <div class="each-input part">
                      <label
                        v-show="!cPasswordError"
                        for="phone-2"
                        class="label"
                        >Confirm Password</label
                      >
                      <label
                        v-show="cPasswordError"
                        for="phone-2"
                        class="label cPassword response error"
                        >Please fill in a password that match</label
                      >
                      <input
                        type="password"
                        class="custom-input w-input"
                        @focusout="checkErrorInputs('cPassword', cPassword)"
                        v-model="cPassword"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <!------------ SELECT STATE ------------>
                    <div class="each-input half pad">
                      <label
                        v-show="stateError"
                        for="phone-4"
                        class="state response error"
                        >Please select a state</label
                      >
                      <label v-show="!stateError" for="phone-4" class="label"
                        >State of Residence</label
                      >
                      <div class="table-filter part">
                        <div @click="toggleState" class="tb-filter-head">
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
                    <!------------X SELECT STATE X------------>

                    <!------------ SELECT LGA ------------>
                    <div class="each-input half pad">
                      <label
                        v-show="lgaError"
                        for="phone-4"
                        class="lga response error"
                        >Please select LGA</label
                      >
                      <label v-show="!lgaError" for="phone-4" class="label"
                        >LGA of Residence</label
                      >
                      <div class="table-filter part">
                        <div @click="toggleLga" class="tb-filter-head">
                          <i
                            v-if="onStateRequest"
                            class="material-symbols-outlined green no spinner"
                            >motion_photos_on</i
                          >
                          <div v-if="onStateRequest" class="left">
                            Processing...
                          </div>
                          <div v-else class="left">{{ lgaDefault }}</div>
                          <i class="material-symbols-outlined orange"
                            >keyboard_arrow_down</i
                          >
                        </div>
                        <ul
                          v-show="lgaArray"
                          role="list"
                          class="tb-filter-list"
                          :class="{ active: showLgas }"
                        >
                          <li
                            @click="selectLga(lga)"
                            v-for="(lga, int) in lgaArray"
                            :key="int"
                            class="tb-list"
                          >
                            <div>{{ lga.name }}</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <!------------X SELECT LGA X------------>

                    <!------------ SELECT UNITS ------------>
                    <div class="each-input half pad">
                      <label
                        v-show="unitError"
                        for="phone-4"
                        class="unit response error"
                        >Please select a unit</label
                      >
                      <label v-show="!unitError" for="phone-4" class="label"
                        >Unit of Residence</label
                      >
                      <div class="table-filter part">
                        <div
                          @click="showUnits = !showUnits"
                          class="tb-filter-head"
                        >
                          <div>{{ unitDefault }}</div>
                          <i class="material-symbols-outlined orange"
                            >keyboard_arrow_down</i
                          >
                        </div>
                        <ul
                          v-show="units"
                          role="list"
                          class="tb-filter-list"
                          :class="{ active: showUnits }"
                        >
                          <li
                            @click="selectUnit(unit)"
                            v-for="(unit, int) in units"
                            :key="int"
                            class="tb-list"
                          >
                            <div>{{ unit }}</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <!------------X SELECT UNITS X------------>

                    <div class="each-input full">
                      <div class="gender-flex">
                        <div class="each-gender">
                          <div
                            @click="isChecked = !isChecked"
                            class="check-box"
                          >
                            <div
                              class="check"
                              :class="{ active: isChecked }"
                            ></div>
                          </div>
                          <label for="name-20" class="label gend"
                            >By clicking the checkbox you have agreed to our
                            <nuxt-link to="/terms-conditions"
                              >terms and conditions</nuxt-link
                            >
                          </label>
                        </div>
                      </div>
                    </div>
                    <label for="field-6" class="response acount"
                      >Already have An Account ?
                      <nuxt-link to="/login" class="link"
                        >Login</nuxt-link
                      ></label
                    >
                    <div class="btn-holder">
                      <div v-if="onRequest" class="custom-btn edge color">
                        <i class="material-symbols-outlined white spinner"
                          >motion_photos_on</i
                        >
                        <div>Processing</div>
                      </div>
                      <div
                        @click="processUserData"
                        v-else
                        class="custom-btn edge color"
                      >
                        <div>Signup</div>
                      </div>
                    </div>
                    <label
                      v-if="showResponse"
                      for="field-6"
                      class="response error center"
                      >{{ response }}</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <home-footer />
      </div>
    </div>
  </div>
</template>

<script>
import AlertBox from "../components/AlertBox";
import CartItems from "./components/CartItems.vue";
import CompanyAds from "./components/CompanyAds.vue";
import FooterComponent from "../components/FooterComponent";
import HomeFooter from "../components/HomeFooter";
import HorizontalNav from "../components/HorizontalNav";
import MobileBottomNav from "../components/MobileBottomNav";
import VerticalNav from "../components/VerticalNav";

export default {
  components: {
    HorizontalNav,
    CartItems,
    VerticalNav,
    MobileBottomNav,
    FooterComponent,
    CompanyAds,
    AlertBox,
    HomeFooter,
  },

  data() {
    return {
      username: "",
      email: "",
      phone: "",
      password: "",
      cPassword: "",
      isChecked: false,

      showStates: false,
      showLgas: false,
      showUnits: false,
      stateDefault: "Select State",
      lgaDefault: "Select LGA",
      unitDefault: "Select Unit",
      isStateSelected: false,
      isLgaSelected: false,
      isUnitSelected: false,
      referral: "",
      units: [],

      response: "",
      isError: false,
      showResponse: false,
      onRequest: false,

      onStateRequest: false,
      onLgaRequest: false,

      usernameError: false,
      emailError: false,
      phoneError: false,
      stateError: false,
      lgaError: false,
      unitError: false,
      passwordError: false,
      cPasswordError: false,
    };
  },

  methods: {
    loadScript() {
      if (!process.server) {
        let el = document.getElementById("script");

        if (el != undefined) {
          document.body.removeChild(el);
        }

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "/script/script.js";
        script.async = true;
        script.id = "script";
        const app = document.querySelector("#footer");
        if (app) {
          app.appendChild(script);
        } else {
          console.error("Could not find app node to append script element");
        }
      }
    },

    checkErrorInputs(input, data) {
      if (input == "username") {
        if (
          data == "" ||
          !data ||
          data.length < 2 ||
          !/^[a-zA-Z0-9\s]+$/.test(data)
        ) {
          const parent = this.$el.querySelector(".username");
          parent.classList.add("error");
          this.isError = false;
          this.usernameError = true;
          return;
        } else {
          const parent = this.$el.querySelector(".username");
          parent.classList.remove("error");
          this.isError = true;
          this.usernameError = false;
        }
      } else if (input == "email") {
        if (data == "" || !data || !/^\S+@\S+\.\S+$/.test(data)) {
          const parent = this.$el.querySelector(".email");
          parent.classList.add("error");
          this.isError = false;
          this.emailError = true;

          return;
        } else {
          const parent = this.$el.querySelector(".email");
          parent.classList.remove("error");
          this.isError = true;
          this.emailError = false;
        }
      } else if (input == "phone") {
        if (data == "" || !data || data.length < 11) {
          const parent = this.$el.querySelector(".phone");
          parent.classList.add("error");
          this.phoneError = true;

          return false;
        } else {
          const parent = this.$el.querySelector(".phone");
          parent.classList.remove("error");
          this.isError = true;
          this.phoneError = false;
        }
      } else if (input == "password") {
        if (data == "" || !data || data.length < 3) {
          const parent = this.$el.querySelector(".password");
          parent.classList.add("error");
          this.passwordError = true;

          return false;
        } else {
          const parent = this.$el.querySelector(".password");
          parent.classList.remove("error");
          this.isError = true;
          this.passwordError = false;
        }
      } else if (input == "cPassword") {
        if (data == "" || data != this.password) {
          const parent = this.$el.querySelector(".cPassword");
          parent.classList.add("error");
          this.isError = false;
          this.cPasswordError = true;
          return;
        } else {
          const parent = this.$el.querySelector(".cPassword");
          parent.classList.remove("error");
          this.isError = true;
          this.cPasswordError = false;
        }
      } else if (input == "state") {
        if (data == "Select State") {
          const parent = this.$el.querySelector(".state");
          parent.classList.add("error");
          this.isError = false;
          this.stateError = true;
          return;
        } else {
          const parent = this.$el.querySelector(".state");
          parent.classList.remove("error");
          this.isError = true;
          this.stateError = false;
        }
      } else if (input == "lga") {
        if (data == "Select LGA") {
          const parent = this.$el.querySelector(".lga");
          parent.classList.add("error");
          this.isError = false;
          this.lgaError = true;
          return;
        } else {
          const parent = this.$el.querySelector(".lga");
          parent.classList.remove("error");
          this.isError = true;
          this.lgaError = false;
        }
      } else if (input == "unit") {
        if (data == "Select Unit") {
          const parent = this.$el.querySelector(".unit");
          parent.classList.add("error");
          this.isError = false;
          this.unitError = true;
          return;
        } else {
          const parent = this.$el.querySelector(".unit");
          parent.classList.remove("error");
          this.isError = true;
          this.unitError = false;
        }
      }
    },

    callResponse(msg, state) {
      this.response = msg;
      this.isError = state;
      this.showResponse = true;
      this.onRequest = false;
      setTimeout(() => {
        this.showResponse = false;
      }, 6000);
    },

    clearInputs() {
      this.fullName = "";
      this.username = "";
      this.phoneNumber = "";
      this.email = "";
      this.password = "";
      this.cPassword = "";
    },

    setArray() {
      this.checkArray = [
        { name: "username", data: this.username },
        { name: "email", data: this.email },
        { name: "phone", data: this.phone },
        { name: "password", data: this.password },
        { name: "cPassword", data: this.cPassword },
        { name: "state", data: this.stateDefault },
        { name: "lga", data: this.lgaDefault },
        { name: "unit", data: this.unitDefault },
      ];
    },

    toggleState() {
      this.showStates = !this.showStates;
      this.showLgas = false;
      this.showUnits = false;
    },

    async selectState(state) {
      this.stateDefault = state.name;
      this.lgaDefault = "Select LGA";
      this.unitDefault = "Select Unit";
      this.showStates = false;
      this.isStateSelected = true;
      this.onStateRequest = true;
      this.showLgas = false;
      this.isLgaSelected = false;
      this.isUnitSelected = false;
      this.checkErrorInputs("state", this.stateDefault);

      const states = await this.$store.dispatch(
        "SET_LGA",
        `?state=${state.name}&limit=100`
      );
      if (states) {
        this.onStateRequest = false;
      }
    },

    toggleLga() {
      this.showLgas = !this.showLgas;
      this.showUnits = false;
    },

    async selectLga(lga) {
      this.lgaDefault = lga.name;
      this.unitDefault = "Select Unit";
      this.showLgas = false;
      this.isLgaSelected = true;
      this.isUnitSelected = false;
      this.showUnits = false;
      this.checkErrorInputs("lga", this.lgaDefault);
      this.units = lga.units;
      // this.$store.dispatch("SET_UNIT", units);
    },

    selectUnit(unit) {
      this.unitDefault = unit;
      this.showUnits = false;
      this.isUnitSelected = true;
      this.checkErrorInputs("unit", this.unitDefault);
    },

    async processUserData() {
      this.onRequest = true;
      this.setArray();
      this.checkArray.forEach((el) => {
        this.checkErrorInputs(el.name, el.data);
      });
      if (!this.isError) {
        this.onRequest = false;
        return;
      }

      if (!this.isChecked) {
        this.onRequest = false;
        const msg =
          "Please read and check the terms and agreement box to continue";
        const status = true;
        this.$store.commit("SHOW_ALERT_BOX", { msg, status });

        return;
      }

      const form = {
        username: this.username,
        email: this.user != null ? "support@kitchengrace.io" : this.email,
        autoRegister: this.user != null ? true : false,
        regDate: new Date().getTime(),
        referredBy: this.user != null ? this.user.username : this.referral,
        phoneNumber: this.phone,
        state: this.stateDefault,
        lga: this.lgaDefault,
        unit: this.unitDefault,
        password: this.password,
        cPassword: this.cPassword,
        time: new Date().getTime(),
      };

      try {
        await this.$axios.post("/users/signup", form);
        const msg = "Thanks for signing up with us, please login to continue.";
        const status = false;
        this.$store.commit("SHOW_ALERT_BOX", { msg, status });
        // this.clearInputs();
        // setTimeout(() => {
        //   this.$router.push("/login");
        // }, 5000);
      } catch (err) {
        this.callResponse(err.response.data.message, true);
      }
      this.onRequest = false;
    },
  },

  computed: {
    stateArray() {
      return this.$store.state.stateArray;
    },

    lgaArray() {
      return this.$store.state.lgas;
    },

    user() {
      return this.$store.state.auth.user;
    },
  },

  mounted() {
    const storedData = localStorage.getItem("referral");

    if (storedData) {
      this.referral = storedData;
    }
  },
};
</script>

<style></style>
