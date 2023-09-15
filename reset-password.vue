<template>
  <div class="grace signup">
    <div class="main-body">
      <div class="main-flex">
        <landing-nav />
        <div
          class="custom-container"
          :class="{ 'custom-container': user, 'custom-container': !user }"
        >
          <div class="body-flex">
            <div class="content-body">
              <div class="nav-pag">
                <nuxt-link to="/" class="home-txt">Home - </nuxt-link
                ><nuxt-link to="/signup" class="page-txt"
                  >Reset Password</nuxt-link
                >
              </div>
              <div class="w-form">
                <div class="profile-flex signing">
                  <div class="profile-inputs partner">
                    <label for="name-21" class="partnership-title sitgg"
                      >Password Reset.
                      <span class="singnn">
                        Use a better password you can remember.</span
                      ></label
                    >

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
                        <div>Submit</div>
                      </div>
                    </div>
                    <label
                      v-if="showResponse"
                      for="field-6"
                      class="response center"
                      :class="{ error: isError }"
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
    AlertBox,
  },

  data() {
    return {
      password: "",
      cPassword: "",
      token: "",

      response: "",
      isError: false,
      showResponse: false,
      onRequest: false,

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
      if (input == "password") {
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
      this.password = "";
      this.cPassword = "";
    },

    setArray() {
      this.checkArray = [
        { name: "password", data: this.password },
        { name: "cPassword", data: this.cPassword },
      ];
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

      const form = {
        password: this.password,
        cPassword: this.cPassword,
      };

      try {
        await this.$axios.post(`/users/reset-password/${this.token}`, form);
        const msg =
          "Your password has been reset successfully, login to continue";

        this.callResponse(msg, false);
        this.clearInputs();
        setTimeout(() => {
          this.$router.push("/login");
        }, 7000);
      } catch (err) {
        this.callResponse(err.response.data.message, true);
      }
      this.onRequest = false;
    },
  },

  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },

  mounted() {
    this.token = this.$route.query.token;
    if (this.token == null) {
      this.$router.push("/login");
    }
  },
};
</script>

<style></style>
