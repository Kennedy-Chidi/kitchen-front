<template>
  <div class="">
    <div class="custom-container">
      <div class="body-flex">
        <div class="content-body">
          <div class="w-form">
            <div class="nav-pag">
              <nuxt-link to="/" class="home-txt">Home - </nuxt-link
              ><nuxt-link to="/login" class="page-txt"
                >Recover Password</nuxt-link
              >
            </div>
            <div class="profile-flex signing">
              <div class="profile-inputs partner">
                <label for="name-21" class="partnership-title sitgg"
                  >Password Recovery
                  <span class="singnn">
                    You will recieve an email if you are registered</span
                  ></label
                >
                <div class="each-input part">
                  <label v-show="!emailError" for="name-20" class="label"
                    >Email</label
                  >
                  <label
                    v-show="emailError"
                    for="name-20"
                    class="label email response error"
                    >Please fill in a valid email</label
                  >
                  <input
                    type="text"
                    class="custom-input w-input"
                    v-model="email"
                    @focusout="checkErrorInputs('email', email)"
                    placeholder="Enter Email"
                  />
                </div>

                <label for="field-6" class="response acount"
                  >Don't have An Account ?
                  <nuxt-link to="/signup" class="link"
                    >Sign up</nuxt-link
                  ></label
                >
                <div class="btn-holder">
                  <div v-show="onRequest" class="custom-btn edge color">
                    <i class="material-symbols-outlined white spinner"
                      >motion_photos_on</i
                    >
                    <div>Processing</div>
                  </div>
                  <div
                    @click="processUserData"
                    v-if="!onRequest"
                    class="custom-btn edge color"
                  >
                    <div>Loging</div>
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
    <footer-component v-if="user != null" />
    <home-footer v-else />
  </div>
</template>

<script>
import AlertBox from "../components/AlertBox";
import AlertConfirmation from "../components/AlertConfirmation.vue";
import CartItems from "../components/CartItems.vue";
import CompanyAds from "../components/CompanyAds.vue";
import FooterComponent from "../components/FooterComponent";
import HomeFooter from "../components/HomeFooter";
import HorizontalNav from "../components/HorizontalNav";
import MobileBottomNav from "../components/MobileBottomNav.vue";
import VerticalNav from "../components/VerticalNav";
export default {
  components: {
    HorizontalNav,
    CartItems,
    AlertBox,
    VerticalNav,
    MobileBottomNav,
    FooterComponent,
    CompanyAds,
    AlertConfirmation,
    HomeFooter,
  },
  data() {
    return {
      email: "",

      response: "",
      isError: false,
      showResponse: false,
      onRequest: false,

      emailError: false,
    };
  },
  methods: {
    checkErrorInputs(input, data) {
      if (input == "email") {
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
      this.email = "";
    },

    setArray() {
      this.checkArray = [{ name: "email", data: this.email }];
    },

    checkResponse(result) {
      this.onRequest = false;
      if (result.status == 200) {
        this.email = "";
        this.callResponse(
          "Please confirm your email to complete the password recovery process",
          false
        );
      }
    },

    async processUserData() {
      this.onRequest = true;
      this.setArray();
      this.checkArray.forEach((el) => {
        this.checkErrorInputs(el.name, el.data);
      });
      if (!this.isError) {
        return;
      }

      const form = {
        email: this.email,
      };

      const result = await this.$store.dispatch("RECOVER_PASSWORD", form);
      this.checkResponse(result);
    },
  },

  mounted() {
    if (this.isAuthenticated) {
      this.$router.push("/dashboard");
    }
  },

  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated; // it check if user isAuthenticated
    },
  },
};
</script>

<style></style>
