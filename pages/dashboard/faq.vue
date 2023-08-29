<template>
  <div class="grace faq-page">
    <cart-items />
    <alert-box />
    <alert-confirmation />
    <div class="main-body">
      <vertical-nav />
      <div class="main-flex">
        <company-ads />
        <horizontal-nav />
        <div class="custom-container">
          <div class="body-flex">
            <div class="content-body">
              <div class="map-wrap">
                <img
                  src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6da14bb6cc78201985f52_slider_bg01.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 98vw, (max-width: 991px) 96vw, (max-width: 1279px) 94vw, (max-width: 1439px) 91vw, 1200px"
                  srcset="
                    https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6da14bb6cc78201985f52_slider_bg01-p-500.jpg 500w,
                    https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6da14bb6cc78201985f52_slider_bg01-p-800.jpg 800w,
                    https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6da14bb6cc78201985f52_slider_bg01.jpg       812w
                  "
                  alt=""
                  class="responsive-img"
                />
              </div>
              <div class="faq-body">
                <div class="each-question-section">
                  <h1 class="section-title quest">About Company</h1>
                  <div class="each-question">
                    <div class="question">Who is Kitchen Grace?</div>
                    <div class="answer">
                      This is some text inside of a div block. Tis is ane
                      andownr to the equestionandeverynquestion should be here
                      and we are testinginftheyarecorrectand it is ggood
                    </div>
                  </div>
                  <div class="each-question">
                    <div class="question">Who is Kitchen Grace?</div>
                    <div class="answer">
                      This is some text inside of a div block. Tis is ane
                      andownr to the equestionandeverynquestion should be here
                      and we are testinginftheyarecorrectand it is ggood
                    </div>
                  </div>
                </div>
                <div class="each-question-section">
                  <h1 class="section-title quest">About Company</h1>
                  <div class="each-question">
                    <div class="question active">Who is Kitchen Grace?</div>
                    <div class="answer">
                      This is some text inside of a div block. Tis is ane
                      andownr to the equestionandeverynquestion should be here
                      and we are testinginftheyarecorrectand it is ggood
                    </div>
                  </div>
                  <div class="each-question">
                    <div class="question">Who is Kitchen Grace?</div>
                    <div class="answer">
                      This is some text inside of a div block. Tis is ane
                      andownr to the equestionandeverynquestion should be here
                      and we are testinginftheyarecorrectand it is ggood
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <mobile-bottom-nav />
    <footer-component />
  </div>
</template>

<script>
import AlertBox from "../../components/AlertBox.vue";
import AlertConfirmation from "../../components/AlertConfirmation.vue";
import CartItems from "../../components/CartItems";
import CompanyAds from "../../components/CompanyAds.vue";
import FooterComponent from "../../components/FooterComponent";
import HorizontalNav from "../../components/HorizontalNav.vue";
import MobileBottomNav from "../../components/MobileBottomNav";
import VerticalNav from "../../components/VerticalNav";

export default {
  components: {
    CartItems,
    CompanyAds,
    HorizontalNav,
    VerticalNav,
    MobileBottomNav,
    FooterComponent,
    AlertBox,
    AlertConfirmation,
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
  mounted() {
    this.loadScript();
  },
};
</script>

<style></style>
