<template>
  <div id="footer" class="home-footer">
    <div class="custom-container foot">
      <div class="home-footer-flex">
        <div class="each-footer">
          <nuxt-link to="/" class="brand w-inline-block"
            ><img
              src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6c1ec16b2737439b284fc_logo.png"
              loading="lazy"
              alt=""
              class="logo"
          /></nuxt-link>
          <div class="company-det">
            <img
              src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b73e374c7f046a3ee2a3d3_map-pin-point-icon%201.svg"
              loading="lazy"
              alt=""
              class="icon h"
            />
            <div class="company-det-text">
              No. 7 Prof Nnamdi St Prefab, Owerri Imo State
            </div>
          </div>
          <div class="company-det">
            <img
              src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b73e3792eeacec8da6815d_email-icon%201.svg"
              loading="lazy"
              alt=""
              class="icon sm"
            />
            <div class="company-det-text">support@kitchengrace.io</div>
          </div>
          <div class="company-det">
            <img
              src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b73e37b44da70d864f43c8_phone-outline-icon%201.svg"
              loading="lazy"
              alt=""
              class="icon sm"
            />
            <div class="company-det-text bg">+2348068131738</div>
          </div>
          <div class="company-det">
            <img
              src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b73e3742421ae3cb6680e1_clock-line-icon%201.svg"
              loading="lazy"
              alt=""
              class="icon sm"
            />
            <div class="company-det-text">24/7 6:00AM - 6:00PM</div>
          </div>
        </div>
        <div class="each-footer">
          <h4 class="footer-title">Quick Links</h4>
          <nuxt-link to="/dashboard/products" class="footer-links"
            >Products</nuxt-link
          ><nuxt-link to="/dashboard/faq" class="footer-links">FAQ</nuxt-link
          ><nuxt-link to="/contact" class="footer-links">Contact Us</nuxt-link
          ><nuxt-link to="/dashboard/blog" class="footer-links"
            >Our Blog</nuxt-link
          ><nuxt-link to="/dashboard/partnership" class="footer-links"
            >Partnership</nuxt-link
          ><nuxt-link to="/terms-conditions" class="footer-links"
            >Terms &amp; Conditions</nuxt-link
          >
        </div>
        <div class="each-footer w-form">
          <div class="newsletter">
            <label for="name">NEWSLETTER</label>
            <div class="newsletter-wrap">
              <input
                type="email"
                v-model="email"
                class="newsletter-input w-input"
                placeholder="Enter your email"
              />
              <i
                v-if="onRequest"
                class="material-symbols-outlined spinner white"
                >expand_more</i
              >
              <i
                v-else
                @click="subscribe"
                class="material-symbols-outlined white newsletter-img"
                >send</i
              >
            </div>
            <div v-if="isError" class="sub">{{ errMessage }}</div>

            <div v-if="isSuccess" class="sub">{{ succMessage }}</div>
            <div v-if="!isError && !isSuccess" class="sub error">
              Write your email and subscribe
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      limit: 40,
      currentPage: 1,
      email: "",
      onRequest: false,
      isError: false,
      isSuccess: false,
      errMessage: "",
      succMessage: "",
    };
  },
  methods: {
    validateEmail() {
      if (
        this.email == "" ||
        !this.email ||
        !/^\S+@\S+\.\S+$/.test(this.email)
      ) {
        this.errMessage = "Please enter a valid email";
        this.isError = true;
        return;
      } else {
        this.errMessage = "";
        this.isError = false;
      }
    },

    async subscribe() {
      this.validateEmail();
      if (this.isError) {
        return;
      }
      this.onRequest = true;

      const result = await this.$store.dispatch("SUBSCRIBE", {
        email: this.email,
      });
      if (result.status == 200) {
        this.onRequest = false;
        this.succMessage = "Sent successfully";
        this.isSuccess = true;
        this.isError = false;
        this.email = "";
      } else {
        this.onRequest = false;
      }
    },
    hideAlertBox() {
      this.$store.commit("HIDE_ALERT_BOX");
    },

    setUserState() {
      this.$store.dispatch("productStore/SET_USER_STATE");
    },

    async getInitialProducts() {
      const query = `?limit=${this.limit}&page=${this.currentPage}&productState=${this.user.state}`;
      await this.$store.dispatch("productStore/nuxtServerInit", query);
    },

    getInitialEmails() {
      this.$store.dispatch("emailStore/nuxtServerInit");
    },

    getInitialUsers() {
      this.$store.dispatch("userStore/nuxtServerInit");
    },

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
  },

  computed: {
    cartProperties() {
      return this.$store.state.productStore.purchaseProperties;
    },

    stateArray() {
      return this.$store.state.stateArray;
    },

    emailArray() {
      return this.$store.state.emailStore.emailArray;
    },

    usersArray() {
      return this.$store.state.userStore.usersArray;
    },

    userInitials() {
      return this.$store.state.userStore.initials;
    },

    settingInitials() {
      return this.$store.state.settingsStore.initials;
    },

    productInitials() {
      return this.$store.state.productStore.initials;
    },

    user() {
      return this.$store.state.auth.user;
    },

    productProperties() {
      return {
        products: this.$store.state.productStore.productArray,
        resultLength: this.$store.state.productStore.dataLength,
      };
    },
  },

  mounted() {
    this.loadScript();
    if (!this.userInitials) {
      this.getInitialUsers();
    }

    if (!this.productInitials) {
      this.getInitialProducts();
    }

    if (!this.settingInitials) {
      this.$store.dispatch("settingsStore/nuxtServerInit");
      this.$store.dispatch("pagesStore/nuxtServerInit");
      this.$store.dispatch("nuxtServerInit");
    }

    localStorage.removeItem("referral");

    // this.$store.dispatch("SET_STATE", { query, states });

    this.hideAlertBox();
  },
};
</script>

<style></style>
