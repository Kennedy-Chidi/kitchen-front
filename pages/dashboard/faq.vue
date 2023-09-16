<template>
  <div class="grace faq-page">
    <cart-items />
    <alert-box />
    <alert-confirmation />
    <div class="custom-container">
      <div class="body-flex">
        <div class="content-body">
          <div class="map-wrap">
            <img
              v-for="banner in banners"
              :key="banner._id"
              :src="banner.bannerImageUrl"
              loading="lazy"
              sizes="(max-width: 479px) 98vw, (max-width: 991px) 96vw, (max-width: 1279px) 94vw, (max-width: 1439px) 91vw, 1200px"
              :srcset="`
                    ${banner.bannerImageUrl} 500w,
                    ${banner.bannerImageUrl} 800w,
                    ${banner.bannerImageUrl}       812w`"
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
                  This is some text inside of a div block. Tis is ane andownr to
                  the equestionandeverynquestion should be here and we are
                  testinginftheyarecorrectand it is ggood
                </div>
              </div>
              <div class="each-question">
                <div class="question">Who is Kitchen Grace?</div>
                <div class="answer">
                  This is some text inside of a div block. Tis is ane andownr to
                  the equestionandeverynquestion should be here and we are
                  testinginftheyarecorrectand it is ggood
                </div>
              </div>
            </div>
            <div class="each-question-section">
              <h1 class="section-title quest">About Company</h1>
              <div class="each-question">
                <div class="question active">Who is Kitchen Grace?</div>
                <div class="answer">
                  This is some text inside of a div block. Tis is ane andownr to
                  the equestionandeverynquestion should be here and we are
                  testinginftheyarecorrectand it is ggood
                </div>
              </div>
              <div class="each-question">
                <div class="question">Who is Kitchen Grace?</div>
                <div class="answer">
                  This is some text inside of a div block. Tis is ane andownr to
                  the equestionandeverynquestion should be here and we are
                  testinginftheyarecorrectand it is ggood
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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

  computed: {
    banners() {
      const banners = JSON.parse(JSON.stringify(this.$store.state.banners));
      return banners.filter((el) => {
        return el.bannerPage == "FAQ";
      });
    },
  },
};
</script>

<style></style>
