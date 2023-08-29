<template>
  <div class="grace contact">
    <cart-items />
    <alert-confirmation />
    <alert-box />

    <div class="main-body">
      <vertical-nav />
      <div class="main-flex">
        <company-ads /> <horizontal-nav />

        <div class="custom-container">
          <div class="body-flex">
            <div class="content-body">
              <div class="map-wrap">
                <img
                  src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64be5187cfb36e7e0a5d7892_shot.png"
                  loading="lazy"
                  sizes="(max-width: 991px) 95vw, (max-width: 1279px) 93vw, (max-width: 1439px) 90vw, 1190px"
                  srcset="
                    https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64be5187cfb36e7e0a5d7892_shot-p-500.png   500w,
                    https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64be5187cfb36e7e0a5d7892_shot-p-800.png   800w,
                    https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64be5187cfb36e7e0a5d7892_shot-p-1080.png 1080w,
                    https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64be5187cfb36e7e0a5d7892_shot.png        1089w
                  "
                  alt=""
                  class="responsive-img"
                />
              </div>
              <div class="contact-block w-form">
                <form
                  id="email-form-6"
                  name="email-form-6"
                  data-name="Email Form 6"
                  method="get"
                  class="contact-flex"
                  data-wf-page-id="64b6be9c94ade9f930694692"
                  data-wf-element-id="4d4ae44e-94ab-3ca1-4c9e-3a946f8156f3"
                >
                  <div class="each-footer contact">
                    <a href="#" class="brand w-inline-block"
                      ><img
                        src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6c1ec16b2737439b284fc_logo.png"
                        loading="lazy"
                        alt=""
                        class="logo"
                    /></a>
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
                      <div class="company-det-text">
                        support@kitchengrace.io
                      </div>
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
                  <div class="right-contact">
                    <div class="each-input">
                      <label for="name-21" class="label">Phone Number</label
                      ><input
                        type="text"
                        class="custom-input w-input"
                        maxlength="256"
                        name="name-2"
                        data-name="Name 2"
                        placeholder=""
                        id="name-2"
                      />
                    </div>
                    <div class="each-input">
                      <label for="name-21" class="label">Phone Number</label
                      ><input
                        type="text"
                        class="custom-input w-input"
                        maxlength="256"
                        name="name-2"
                        data-name="Name 2"
                        placeholder=""
                        id="name-2"
                      />
                    </div>
                    <div class="each-input">
                      <label for="field-6" class="label">Address</label
                      ><textarea
                        placeholder="Example Text"
                        maxlength="5000"
                        id="field-6"
                        name="field-6"
                        data-name="Field 6"
                        class="custom-input txt w-input"
                      ></textarea>
                    </div>
                    <div class="btn-holder">
                      <div class="custom-btn edge">
                        <img
                          src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b799b47c0010e65ffca458_loader-icon%201.svg"
                          loading="lazy"
                          alt=""
                          class="btn-icon spinner"
                        />
                        <div>Processingg</div>
                      </div>
                      <div class="custom-btn edge color"><div>Submit</div></div>
                      <label for="field-7" class="response error"
                        >Sorry, something went wrong</label
                      >
                    </div>
                  </div>
                </form>
                <div class="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div class="w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
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
import AlertBox from "../../components/AlertBox.vue";
import AlertConfirmation from "../../components/AlertConfirmation.vue";
import CartItems from "../../components/CartItems.vue";
import CompanyAds from "../../components/CompanyAds.vue";
import FooterComponent from "../../components/FooterComponent.vue";
import HorizontalNav from "../../components/HorizontalNav";
import MobileBottomNav from "../../components/MobileBottomNav.vue";
import VerticalNav from "../../components/VerticalNav";

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
    // this.loadScript();
  },
};
</script>

<style></style>
