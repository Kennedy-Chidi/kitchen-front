<template>
  <div class="">
    <div
      class=""
      :class="{
        'custom-container': user != null,
        'custom-container-landing': user == null,
      }"
    >
      <div class="body-flex">
        <div class="content-body">
          <div class="map-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3971.463593132849!2d7.047174891177614!3d5.497961213019893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d4.8174104!2d7.0047966!4m5!1s0x104259ceaf381b4f%3A0xe5cfd334bb72e964!2sWAEC%20OWERRI%20ZONAL%20OFFICE%2C%2011%2F13%2C%20Isiukwuato%20Street%2C%20Aladinma%20Housing%20Estate%2C%20P.M.B.%201478%2C%20Owerri%2C%20Nigeria!3m2!1d5.4980797!2d7.0513648!5e0!3m2!1sen!2suk!4v1694431132555!5m2!1sen!2suk"
              width="100%"
              height="500"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <contact-form />
        </div>
      </div>
    </div>
    <footer-component v-if="user != null" />
    <home-footer v-else />
  </div>
</template>

<script>
import LandingNav from "../components/LandingNav";
import AlertBox from "../components/AlertBox.vue";
import AlertConfirmation from "../components/AlertConfirmation.vue";
import CartItems from "../components/CartItems.vue";
import CompanyAds from "../components/CompanyAds.vue";
import FooterComponent from "../components/FooterComponent.vue";
import HorizontalNav from "../components/HorizontalNav";
import MobileBottomNav from "../components/MobileBottomNav.vue";
import VerticalNav from "../components/VerticalNav";
import HomeFooter from "../components/HomeFooter.vue";
import ContactForm from "../components/ContactForm.vue";

export default {
  components: {
    HorizontalNav,
    MobileBottomNav,
    FooterComponent,
    CartItems,
    VerticalNav,
    CompanyAds,
    AlertBox,
    AlertConfirmation,
    LandingNav,
    HomeFooter,
    ContactForm,
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
  },

  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style></style>
