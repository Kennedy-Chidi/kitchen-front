<template>
  <div class="home-footer" id="footer">
    <div class="custom-container-landing foot">
      <div class="home-footer-flex">
        <div class="each-footer">
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
          <a href="#" class="footer-links">About Us</a
          ><a href="#" class="footer-links">Our Services</a
          ><a href="#" class="footer-links">Contact Us</a
          ><a href="#" class="footer-links">Our Blog</a
          ><a href="#" class="footer-links">Partnership</a
          ><a href="#" class="footer-links">Terms &amp; Conditions</a>
        </div>
        <div class="each-footer w-form">
          <form
            id="email-form"
            name="email-form"
            data-name="Email Form"
            method="get"
            class="newsletter"
            data-wf-page-id="64d35787a2302748a33bf967"
            data-wf-element-id="8846de58-d1b5-7a98-3e6e-3c30b817ccdc"
          >
            <label for="name">NEWSLETTER</label>
            <div class="newsletter-wrap">
              <input
                type="email"
                class="newsletter-input w-input"
                maxlength="256"
                name="email-5"
                data-name="Email 5"
                placeholder="Enter your email"
                id="email-5"
              /><img
                src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b742dae09b37f7e2042587_sent-icon%201.svg"
                loading="lazy"
                alt=""
                class="newsletter-img"
              />
            </div>
            <div class="sub">Write your email and subscribe</div>
          </form>
          <div class="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div class="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
