<template>
  <div class="grace profile">
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
              <div class="nav-pag">
                <nuxt-link to="/" class="home-txt">Home - </nuxt-link
                ><nuxt-link to="/dashboard/profile" class="page-txt"
                  >Profile</nuxt-link
                >
              </div>
              <profile-setting />
              <div class="w-form">
                <div class="profile-flex">
                  <label for="name-14" class="partnership-title"
                    >Make a Review</label
                  >
                  <div class="profile-inputs rate">
                    <review-rating />
                    <div class="each-input half">
                      <label for="field-6" class="label"
                        >Report to us here if you are unsatisfied by our goods,
                        services or staff</label
                      >
                      <textarea
                        placeholder="Write us your report"
                        maxlength="5000"
                        v-model="report"
                        class="custom-input txt high w-input report"
                      ></textarea>
                      <div class="btn-holder">
                        <div v-if="onRequest" class="custom-btn edge">
                          <i class="material-symbols-outlined white spinner"
                            >motion_photos_on</i
                          >
                          <div>Processing</div>
                        </div>
                        <div v-if="!onRequest" class="custom-btn edge color">
                          <div>Submit</div>
                        </div>

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
          </div>
        </div>
        <footer-component />
      </div>
    </div>
    <mobile-bottom-nav />
  </div>
</template>

<script>
import AlertBox from "../../components/AlertBox";
import CartItems from "../../components/CartItems.vue";
import CompanyAds from "../../components/CompanyAds.vue";
import FooterComponent from "../../components/FooterComponent";
import HorizontalNav from "../../components/HorizontalNav";
import MobileBottomNav from "../../components/MobileBottomNav.vue";
import ProfileSetting from "../../components/Dashboard/ProfileSetting.vue";
import ReviewRating from "../../components/Dashboard/ReviewRating.vue";
import VerticalNav from "../../components/VerticalNav";
import AlertConfirmation from "../../components/AlertConfirmation";
export default {
  data() {
    return {
      report: "",

      response: "",
      isError: false,
      showResponse: false,
      onRequest: false,
    };
  },

  methods: {
    showAlert(msg, status) {
      this.$store.commit("SHOW_ALERT_BOX", { msg, status });
    },

    checkUserAddress(user) {
      if (!user.phoneNumber || user.phoneNumber == "") {
        const msg = `Please set up your phone number for delivery.`;
        const status = true;
        this.showAlert(msg, status);
      }

      if (!user.address) {
        const msg = `Please set up your delivery address.`;
        const status = true;
        this.showAlert(msg, status);
      }

      if (user.state == "Select State" || user.state == "") {
        const msg = `Please set up your state address.`;
        const status = true;
        this.showAlert(msg, status);
      }
    },
  },

  mounted() {
    this.checkUserAddress(this.authUser);
  },
  components: {
    HorizontalNav,
    CartItems,
    VerticalNav,
    MobileBottomNav,
    FooterComponent,
    CompanyAds,
    AlertBox,
    ProfileSetting,
    ReviewRating,
    AlertConfirmation,
  },

  computed: {
    authUser() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style></style>
