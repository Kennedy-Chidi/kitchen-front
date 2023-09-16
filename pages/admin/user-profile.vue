<template>
  <div class="grace profile">
    <alert-box />
    <alert-confirmation />
    <div class="custom-container">
      <div class="body-flex">
        <div class="content-body">
          <div class="nav-pag">
            <nuxt-link to="/" class="home-txt">Home - </nuxt-link
            ><nuxt-link to="/dashboard/profile" class="page-txt"
              >Profile</nuxt-link
            >
          </div>
          <div class="w-form">
            <div class="profile-flex">
              <div class="profile-pix">
                <div class="profile-picture">
                  <img
                    v-if="user.profilePictureUrl"
                    :src="user.profilePictureUrl"
                    loading="lazy"
                    sizes="100px"
                    :srcset="`
              ${user.profilePictureUrl} 500w,
              ${user.profilePictureUrl} 800w,
              ${user.profilePictureUrl}     953w
            `"
                    alt=""
                    class="profile-pics active"
                  /><label v-else for="email-7">K</label>
                </div>
              </div>
              <div class="profile-inputs">
                <div class="each-input">
                  <label for="name-2" class="label">Username</label
                  ><label for="name-3" class="custom-input no">{{
                    user.username
                  }}</label>
                </div>

                <div class="each-input">
                  <label for="name-3" class="label">Email</label
                  ><label for="name-3" class="custom-input no">{{
                    user.email
                  }}</label>
                </div>

                <div class="each-input">
                  <label for="name-3" class="label">Phone Number</label
                  ><input
                    type="text"
                    class="custom-input w-input"
                    maxlength="256"
                    :placeholder="user.phoneNumber"
                  />
                </div>

                <div class="each-input full pad">
                  <label for="phone-4" class="label">State of Residence</label>
                  <div class="table-filter part">
                    <div class="tb-filter-head">
                      <div>{{ user.state }}</div>
                    </div>
                  </div>
                </div>

                <div class="each-input full pad">
                  <label for="phone-4" class="label">LGA of Residence</label>
                  <div class="table-filter part">
                    <div class="tb-filter-head">
                      <div>{{ user.lga }}</div>
                    </div>
                  </div>
                </div>

                <div class="each-input full pad">
                  <label for="phone-4" class="label">Unit of Residence</label>
                  <div class="table-filter part">
                    <div class="tb-filter-head">
                      <div>{{ user.unit }}</div>
                    </div>
                  </div>
                </div>

                <div class="each-input">
                  <label for="field" class="label">Address</label
                  ><textarea
                    :placeholder="user.address"
                    maxlength="5000"
                    class="custom-input txt w-input"
                  ></textarea>
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
import AlertBox from "../../components/AlertBox";
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
  },

  components: {
    HorizontalNav,
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

    user() {
      return this.$store.state.settingsStore.selectedUser;
    },
  },
};
</script>

<style></style>
