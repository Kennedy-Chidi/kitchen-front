<template>
  <div class="content-wrap w-form">
    <h3 class="top-heading2 promos">Profile</h3>
    <div class="formflex">
      <div class="profile-left">
        <div class="profile-bg">
          <img
            v-if="profilePictureUrl"
            :src="`${profilePictureUrl}`"
            loading="lazy"
            alt=""
            class="profile-img"
          />
          <img
            v-else
            :src="`${profilePicture}`"
            loading="lazy"
            alt=""
            class="profile-img"
          />
          <img
            v-if="!profilePictureUrl && !profilePicture"
            src="https://uploads-ssl.webflow.com/64795bc5f99dfa06fdf065a8/647960603f5a05c19f4ec531_profile.webp"
            loading="lazy"
            alt=""
            class="profile-img"
          />
        </div>
        <div class="btn-holder1">
          <label for="profilePicture" class="custom-btn2 push full">
            <input
              type="file"
              class="hidden w-input"
              id="profilePicture"
              @change="setProfilePicture"
            />
            <div class="btin-icon-holder">
              <img
                src="/images/upload.svg"
                loading="lazy"
                alt=""
                class="btn-icon"
              />
            </div>
            <div class="btn-text">Upload Your Image Here</div>
          </label>
        </div>
      </div>
      <div class="profile-right">
        <div class="each-profile-input">
          <label for="username" class="profile-label">Username:</label>
          <div class="profile-input no w-input">
            {{ userInfo.username }}
          </div>
        </div>
        <div class="each-profile-input">
          <label for="name-4" class="profile-label">Full Name:</label
          ><input
            type="text"
            class="profile-input w-input"
            maxlength="256"
            v-model="fullName"
            placeholder="Add Full Name"
          />
        </div>
        <div class="each-profile-input">
          <label for="phone" class="profile-label">Phone No.:</label
          ><input
            type="tel"
            class="profile-input w-input"
            maxlength="256"
            v-model="phoneNumber"
            placeholder="Add Phone Number"
          />
        </div>
        <div class="each-profile-input">
          <label for="email" class="profile-label">Email:</label
          ><input
            type="email"
            class="profile-input w-input"
            maxlength="256"
            :placeholder="`${userInfo.email}`"
          />
        </div>
        <div class="each-profile-input">
          <label for="address" class="profile-label">Address:</label
          ><textarea
            placeholder="Add Address"
            maxlength="5000"
            v-model="address"
            class="profile-input address w-input"
          ></textarea>
        </div>
        <div
          v-if="showResponse"
          class="respnse-message"
          :class="{ error: isError }"
        >
          {{ response }}
        </div>
        <div class="btn-holder1">
          <div
            v-if="!onRequest"
            class="custom-btn2 space"
            @click="processProfile"
          >
            <div>Save Profile</div>
          </div>

          <div class="custom-btn2 space" v-if="onRequest">
            <img
              src="/images/loading.svg"
              loading="lazy"
              alt=""
              class="btn-icon right loader"
            />
            <div>Processing</div>
          </div>

          <div class="custom-btn2 space delete" v-else>
            <img
              src="/images/delete-white.svg"
              loading="lazy"
              alt=""
              class="btn-icon right"
            />
            <div>Delete Account</div>
          </div>
        </div>
      </div>
    </div>
    <div class="search-form1 w-form">
      <div class="form-flex1 wrap">
        <input
          type="password"
          class="search-flex half w-input"
          maxlength="256"
          v-model="oldPassword"
          placeholder="Enter Old Password"
        />
        <input
          type="password"
          class="search-flex half w-input"
          maxlength="256"
          v-model="password"
          placeholder="Enter New Password"
        />

        <input
          type="password"
          class="search-flex half w-input"
          maxlength="256"
          v-model="cPassword"
          placeholder="Confirm Password"
        />

        <div
          class="respnse-message"
          v-if="showResponse"
          :class="{ error: isError }"
        >
          {{ response }}
        </div>

        <div class="input-holder1">
          <div class="expense center">
            <div class="btn-holder1 space">
              <div v-if="onRequest" class="custom-btn2 space bottom">
                <img
                  src="/images/loading.svg"
                  loading="lazy"
                  alt=""
                  class="btn-icon right loader"
                />
                <div>Processing</div>
              </div>

              <div
                v-if="!onRequest"
                class="custom-btn2 space sub"
                @click="processPassword"
              >
                <div>Submit</div>
              </div>
            </div>
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
      user: "",
      phoneNumber: "",
      fullName: "",
      address: "",
      profilePicture: "",
      profilePictureUrl: "",

      oldPassword: "",
      password: "",
      cPassword: "",

      isEditing: false,
      response: "",
      isError: false,
      showResponse: false,
      onRequest: false,
    };
  },
  methods: {
    showResponseMsg(msg, status) {
      this.response = msg;
      this.isError = status;
      this.showResponse = true;
      this.onRequest = false;
      setTimeout(() => {
        this.response = "";
        this.showResponse = false;
      }, 6000);
    },

    setProfilePicture(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        this.profilePicture = file;
        this.profilePictureUrl = reader.result;
      });
      reader.readAsDataURL(file);

      const form = new FormData();
      form.append("profilePicture", file);

      this.updateProfile(form);
    },

    processProfile() {
      const form = new FormData();
      form.append("fullName", this.fullName);
      form.append("phoneNumber", this.phoneNumber);
      form.append("address", this.address);
      form.append("profilePicture", this.profilePicture);

      this.updateProfile(form);
    },

    cleaInputs() {
      this.onRequest = false;
      this.password = "";
      this.cPassword = "";
      this.oldPassword = "";
    },

    async processPassword() {
      this.onRequest = true;
      if (this.password != this.cPassword) {
        this.showResponseMsg("Sorry, passwords do not match", true);
        return;
      }
      const form = {
        oldPassword: this.oldPassword,
        password: this.password,
        cPassword: this.cPassword,
      };

      try {
        await this.$axios.patch(`/users/update-password`, form);
        this.showResponseMsg(
          "Your password was updated successfull, kindly logout and login to continue",
          false
        );
        this.cleaInputs();
      } catch (err) {
        this.showResponseMsg(err.response.data.message, true);
      }
    },

    async updateProfile(form) {
      this.onRequest = true;
      try {
        const result = await this.$axios.patch(
          `/users/${this.userInfo._id}`,
          form
        );
        this.showResponseMsg("Your profile was updated successfully", false);
      } catch (err) {
        this.showResponseMsg(err.response.data.message, true);
      }
    },

    async getUser() {
      const result = await this.$axios.get(`/users/${this.userInfo._id}`);
      this.user = result.data.data;
      this.fullName = this.user.fullName;
      this.phoneNumber = this.user.phoneNumber;
      this.address = this.user.address;
      this.profilePictureUrl = this.user.profilePictureUrl;
      this.profilePicture = this.user.profilePicture;
    },
  },
  mounted() {
    this.getUser();
  },
  computed: {
    userInfo() {
      return this.$store.state.auth.user; // it check if user isAuthenticated
    },
  },
};
</script>

<style>
.dashboard2.profile {
  overflow: clip;
}
</style>
