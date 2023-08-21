<template>
  <div class="grace page-not">
    <company-ads />
    <horizontal-nav />
    <div class="main-body">
      <div class="custom-container cover">
        <div class="body-flex">
          <div class="content-body">
            <div class="lost-card">
              <div class="lost">4</div>
              <div class="lost mid">0</div>
              <div class="lost">4</div>
              <div class="go-back">
                The page you are looking for is not here.
                <nuxt-link to="/products" class="not-link"
                  >Click to go back</nuxt-link
                >
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
import CompanyAds from "../components/CompanyAds.vue";
import FooterComponent from "../components/FooterComponent.vue";
import HorizontalNav from "../components/HorizontalNav.vue";
import MobileBottomNav from "../components/MobileBottomNav.vue";

export default {
  components: { MobileBottomNav, CompanyAds, HorizontalNav },
};
</script>

FooterComponent
<style></style>
