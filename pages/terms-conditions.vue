<template>
  <div class="grace about-page">
    <cart-items v-if="user" />
    <alert-box v-if="user" />
    <alert-confirmation v-if="user" />
    <div class="main-body">
      <vertical-nav v-if="user" />
      <div class="main-flex">
        <company-ads />
        <landing-nav />
        <!-- <horizontal-nav /> -->
        <div class="custom-container">
          <div class="body-flex">
            <div class="content-body">
              <div class="prod-detail-flex post abou">
                <div class="pararaph">
                  <h3 class="section-title">Categories</h3>
                  <div class="comment about">
                    Tis is a commentsecion for tisproduct.Its,T Tis is a
                    commentsecion for tisproduct.Its, is is a commentsecion for
                    tisproduct.Its, Tis is a commentsecion for tisproduct.Its,
                    is is a commentsecion for tisproduct.Its
                  </div>
                </div>
                <div class="objective-flex">
                  <div class="objectiv-img">
                    <img
                      src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b79b7b42421ae3cbdb6ff8_ceo.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 88vw, 300px"
                      srcset="
                        https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b79b7b42421ae3cbdb6ff8_ceo-p-500.png 500w,
                        https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b79b7b42421ae3cbdb6ff8_ceo-p-800.png 800w,
                        https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b79b7b42421ae3cbdb6ff8_ceo.png       953w
                      "
                      alt=""
                      class="responsive-img"
                    />
                  </div>
                  <ul role="list" class="object-list">
                    <li><h3 class="section-title sm">Categories</h3></li>
                    <li class="obj-list">
                      <img
                        src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64be4ad59b938f7486226df5_check.svg"
                        loading="lazy"
                        alt=""
                        class="obj-icon"
                      />
                      <div>This is some text inside of a div block.</div>
                    </li>
                    <li class="obj-list">
                      <img
                        src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64be4ad59b938f7486226df5_check.svg"
                        loading="lazy"
                        alt=""
                        class="obj-icon"
                      />
                      <div>This is some text inside of a div block.</div>
                    </li>
                    <li class="obj-list">
                      <img
                        src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64be4ad59b938f7486226df5_check.svg"
                        loading="lazy"
                        alt=""
                        class="obj-icon"
                      />
                      <div>This is some text inside of a div block.</div>
                    </li>
                    <li class="obj-list">
                      <img
                        src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64be4ad59b938f7486226df5_check.svg"
                        loading="lazy"
                        alt=""
                        class="obj-icon"
                      />
                      <div>This is some text inside of a div block.</div>
                    </li>
                    <li class="obj-list">
                      <img
                        src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64be4ad59b938f7486226df5_check.svg"
                        loading="lazy"
                        alt=""
                        class="obj-icon"
                      />
                      <div>This is some text inside of a div block.</div>
                    </li>
                  </ul>
                </div>
                <div class="pararaph">
                  <h3 class="section-title">Categories</h3>
                  <div class="comment about">
                    Tis is a commentsecion for tisproduct.Its,T Tis is a
                    commentsecion for tisproduct.Its, is is a commentsecion for
                    tisproduct.Its, Tis is a commentsecion for tisproduct.Its,
                    is is a commentsecion for tisproduct.Its
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer-component />
      </div>
    </div>
    <mobile-bottom-nav />
  </div>
</template>

<script>
import AlertBox from "../components/AlertBox.vue";
import AlertConfirmation from "../components/AlertConfirmation.vue";
import CartItems from "../components/CartItems.vue";
import CompanyAds from "../components/CompanyAds.vue";
import FooterComponent from "../components/FooterComponent.vue";
import HorizontalNav from "../components/HorizontalNav";
import LandingNav from "../components/LandingNav.vue";
import MobileBottomNav from "../components/MobileBottomNav.vue";
import VerticalNav from "../components/VerticalNav.vue";

export default {
  components: {
    CompanyAds,
    VerticalNav,
    MobileBottomNav,
    FooterComponent,
    CartItems,
    HorizontalNav,
    AlertBox,
    AlertConfirmation,
    LandingNav,
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
        script.src = "/script/client.js";
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
  mounted() {
    this.loadScript();
  },
};
</script>

<style></style>
