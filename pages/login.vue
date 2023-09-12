<template>
  <div class="grace signup">
    <div class="main-body">
      <div class="main-flex">
        <company-ads />
        <landing-nav />
        <div class="custom-container">
          <div class="body-flex">
            <div class="content-body">
              <div class="w-form">
                <div class="nav-pag">
                  <nuxt-link to="/" class="home-txt">Home - </nuxt-link
                  ><nuxt-link to="/login" class="page-txt">Login</nuxt-link>
                </div>
                <div class="profile-flex signing">
                  <div class="profile-inputs partner">
                    <label for="name-21" class="partnership-title sitgg"
                      >Login.
                      <span class="singnn">
                        Kindly login if you have an account with us</span
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
                        @keypress.enter="processUserData"
                        placeholder="Enter Password"
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
                    <label for="field-6" class="response acount"
                      >Forgotten Password?
                      <nuxt-link to="/recover-password" class="link"
                        >Click here</nuxt-link
                      ></label
                    >
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
        <home-footer />
      </div>
    </div>
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
      username: "",
      password: "",

      response: "",
      isError: false,
      showResponse: false,
      onRequest: false,

      usernameError: false,
      passwordError: false,
    };
  },
  methods: {
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
      this.username = "";
      this.password = "";
    },

    setArray() {
      this.checkArray = [
        { name: "username", data: this.username },
        { name: "password", data: this.password },
      ];
    },

    processUserData() {
      this.onRequest = true;
      this.setArray();
      this.checkArray.forEach((el) => {
        this.checkErrorInputs(el.name, el.data);
      });
      if (!this.isError) {
        return;
      }

      const cartItems = (items) => {
        const array = [];
        items.forEach((el) => {
          array.push(el.productName);
        });

        return array;
      };

      const form = {
        username: this.username,
        password: this.password,
        cartItems: cartItems(this.cartItems),
      };

      this.handleLogin(form);
    },

    async handleLogin(form) {
      try {
        const result = await this.$auth.loginWith("local", { data: form });
        const user = result.data.user;
        if (this.cartItems.length > 0) {
          const products = result.data.products;
          const statePrice = user.state;
          this.$store.commit("productStore/UPDATE_CART", {
            products,
            statePrice,
          });
        }
        this.$store.commit("productStore/SET_USER_STATE");
        if (user.status == "User") {
          this.$store.dispatch("userStore/GET_USER_PROPERTIES");
        } else {
          this.$store.dispatch("userStore/GET_USER_PROPERTIES");
        }
        this.$store.commit("SHOW_NAV");
        if (user.status == "Staff") {
          this.$router.push("/admin/customers");
        } else {
          if (user.phoneNumber == "" || user.phoneNumber == undefined) {
            this.$router.push("/dashboard/profile");
          } else {
            this.$router.push("/dashboard/products");
          }
        }
      } catch (err) {
        this.callResponse(err.response.data.message, true);
      }
      this.onRequest = false;
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

    cartItems() {
      return this.$store.state.productStore.cartProducts;
    },
  },
};
</script>

<style></style>
