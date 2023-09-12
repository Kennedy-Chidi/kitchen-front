<template>
  <div class="home-footer" id="footer">
    <div class="custom-container-landing foot">
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
            <div v-if="company" class="company-det-text">
              {{ company.contact[0] }}
            </div>
          </div>
          <div class="company-det">
            <img
              src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b73e3792eeacec8da6815d_email-icon%201.svg"
              loading="lazy"
              alt=""
              class="icon sm"
            />
            <div v-if="company" class="company-det-text">
              {{ company.systemEmail }}
            </div>
          </div>
          <div class="company-det">
            <img
              src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b73e37b44da70d864f43c8_phone-outline-icon%201.svg"
              loading="lazy"
              alt=""
              class="icon sm"
            />
            <div v-if="company" class="company-det-text bg">
              {{ company.contact[2] }}
            </div>
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
          <nuxt-link v-if="user" to="/" class="footer-links"
            >About Us</nuxt-link
          >
          <!-- <nuxt-link to="/" class="footer-links">Our Services</nuxt-link
          > -->
          <nuxt-link to="/contact" class="footer-links">Contact Us</nuxt-link
          ><nuxt-link to="/blog" class="footer-links">Our Blog</nuxt-link
          ><nuxt-link v-if="user" to="/" class="footer-links"
            >Partnership</nuxt-link
          ><nuxt-link to="/terms-condtions" class="footer-links"
            >Terms &amp; Conditions</nuxt-link
          >
        </div>
        <div class="each-footer w-form">
          <div class="newsletter">
            <label for="name">NEWSLETTER</label>
            <div class="newsletter-wrap">
              <input
                type="email"
                class="newsletter-input w-input"
                v-model="email"
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
            <label v-if="!isError && !isSuccess" class="sub error"
              >Write your email and subscribe</label
            >
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
      email: "",
      onRequest: false,
      isError: false,
      isSuccess: false,
      errMessage: "",
      succMessage: "",
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
  },

  computed: {
    settingInitials() {
      return this.$store.state.productStore.initials;
    },

    company() {
      return this.$store.state.company;
    },

    user() {
      return this.$store.state.auth.user;
    },
  },

  mounted() {
    this.loadScript();
    if (this.$route.query.ref) {
      localStorage.setItem("referral", this.$route.query.ref);
    }

    if (!this.settingInitials) {
      this.$store.dispatch("nuxtServerInit");
      this.$store.dispatch("productStore/nuxtServerInit");
    }
  },
};
</script>

<style></style>
