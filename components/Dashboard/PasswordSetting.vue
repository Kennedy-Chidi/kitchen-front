<template>
  <div class="password-inputs">
    <div class="each-input half">
      <label v-show="!oldPasswordError" for="phone-2" class="label"
        >Current Password</label
      >
      <label
        v-show="oldPasswordError"
        for="phone-2"
        class="label oldPassword response error"
        >Password must be at least 4 characters long</label
      >
      <input
        type="password"
        class="custom-input w-input"
        v-model="oldPassword"
        @focusout="checkErrorInputs('oldPassword', oldPassword)"
        placeholder="Enter Current Password"
      />
    </div>
    <div class="each-input half center">
      <label v-show="!passwordError" for="phone-2" class="label"
        >New Password</label
      >
      <label
        v-show="passwordError"
        for="phone-2"
        class="label password response error"
        >Please must be at least 4 characters long</label
      >
      <input
        type="password"
        class="custom-input w-input"
        @focusout="checkErrorInputs('password', password)"
        v-model="password"
        placeholder="Enter New Password"
      />
    </div>
    <div class="each-input half">
      <label v-show="!cPasswordError" for="phone-2" class="label"
        >Confirm Password</label
      >
      <label
        v-show="cPasswordError"
        for="phone-2"
        class="label cPassword response error"
        >Please fill in a password that match</label
      >
      <input
        type="password"
        class="custom-input w-input"
        @focusout="checkErrorInputs('cPassword', cPassword)"
        v-model="cPassword"
        placeholder="Confirm Password"
      />
    </div>
    <div class="btn-holder">
      <div v-show="onRequest" class="custom-btn edge">
        <i class="material-symbols-outlined white spinner">motion_photos_on</i>
        <div>Processing</div>
      </div>
      <div
        v-show="!onRequest"
        @click="processPassword"
        class="custom-btn edge color"
      >
        <div>Update Password</div>
      </div>
    </div>
    <label v-if="showResponse" for="field-2" class="response error">{{
      response
    }}</label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oldPassword: "",
      password: "",
      cPassword: "",

      response: "",
      isError: false,
      showResponse: false,
      onRequest: false,

      passwordError: false,
      oldPasswordError: false,
      cPasswordError: false,
    };
  },
  methods: {
    showAlert(msg, status) {
      this.$store.commit("SHOW_ALERT_BOX", { msg, status });
    },

    checkErrorInputs(input, data) {
      if (input == "oldPassword") {
        if (data == "" || data.length < 4) {
          const parent = this.$el.querySelector(".oldPassword");
          parent.classList.add("error");
          this.oldPasswordError = true;

          return false;
        } else {
          const parent = this.$el.querySelector(".oldPassword");
          parent.classList.remove("error");
          this.isError = true;
          this.oldPasswordError = false;
        }
      } else if (input == "password") {
        if (data == "" || !data || data.length < 3) {
          const parent = this.$el.querySelector(".password");
          parent.classList.add("error");
          this.passwordError = true;

          return false;
        } else {
          const parent = this.$el.querySelector(".password");
          parent.classList.remove("error");
          this.isError = true;
          this.passwordError = false;
        }
      } else if (input == "cPassword") {
        if (data == "" || data != this.password) {
          const parent = this.$el.querySelector(".cPassword");
          parent.classList.add("error");
          this.isError = false;
          this.cPasswordError = true;
          return;
        } else {
          const parent = this.$el.querySelector(".cPassword");
          parent.classList.remove("error");
          this.isError = true;
          this.cPasswordError = false;
        }
      }
    },

    setArray() {
      this.checkArray = [
        { name: "password", data: this.password },
        { name: "cPassword", data: this.cPassword },
        { name: "oldPassword", data: this.oldPassword },
      ];
    },

    callResponse(msg, state) {
      this.response = msg;
      this.showResponse = true;
      this.onRequest = false;
      setTimeout(() => {
        this.showResponse = false;
      }, 6000);
    },

    checkResponse(result, msg, status) {
      this.onRequest = false;
      if (result.status == 200) {
        this.password = "";
        this.cPassword = "";
        this.oldPassword = "";
        this.$store.commit("SET_PASSWORD_CHANGED");
        this.showAlert(msg, status);
      } else {
        this.callResponse(result.response.data.message, true);
      }
    },

    async processPassword() {
      this.onRequest = true;
      this.setArray();
      this.checkArray.forEach((el) => {
        this.checkErrorInputs(el.name, el.data);
      });
      if (!this.isError) {
        this.onRequest = false;
        return;
      }
      if (this.password != this.cPassword) {
        const msg = "Sorry passwords do not match, try again.";
        const status = true;
        this.showAlert(msg, status);
        this.onRequest = false;
        return;
      }

      const form = {
        oldPassword: this.oldPassword,
        password: this.password,
        cPassword: this.cPassword,
      };

      const result = await this.$store.dispatch(
        "userStore/UPDATE_PASSWORD",
        form
      );
      const msg =
        "Your password was updated successfully, login again to continue.";
      const status = false;
      this.checkResponse(result, msg, status);
    },
  },
};
</script>

<style></style>
