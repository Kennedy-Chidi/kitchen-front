<template>
  <div class="textarea each-input half">
    <label for="field-6" class="label"
      >Feel free to rate and comment our services</label
    >
    <div class="stars-holder">
      <img
        v-for="(star, i) in stars"
        :key="star"
        :src="getStarImage(star)"
        @click="setRating(i + 1)"
        loading="lazy"
        alt=""
        class="star-rate"
      />
    </div>
    <textarea
      placeholder="Example Text"
      maxlength="5000"
      v-model="comment"
      class="custom-input txt high w-input"
    ></textarea>
    <div class="btn-holder">
      <div v-if="onRequest" class="custom-btn edge">
        <i class="material-symbols-outlined white spinner">motion_photos_on</i>
        <div>Processing</div>
      </div>
      <div
        v-if="!onRequest"
        @click="processComment"
        class="custom-btn edge color"
      >
        <div>Submit</div>
      </div>

      <label v-if="showResponse" for="field-6" class="response error">{{
        response
      }}</label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment: "",
      rating: 0,
      currentRating: this.rating,

      stars: [1, 2, 3, 4, 5],
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

    showAlert(msg, status) {
      this.$store.commit("SHOW_ALERT_BOX", { msg, status });
    },

    getStarImage(star) {
      return star <= this.currentRating
        ? require("@/assets/fill-star.svg")
        : require("@/assets/empty-star.svg");
    },

    getStarAltText(star) {
      return star <= this.currentRating ? "Filled Star" : "Empty Star";
    },

    setRating(rating) {
      this.currentRating = rating;
    },

    setUserRating(user) {
      this.currentRating = user.rating;
      this.comment = user.comment;
    },

    callResponse(msg, state) {
      this.response = msg;
      this.showResponse = true;
      this.onRequest = false;
      setTimeout(() => {
        this.showResponse = false;
      }, 6000);
    },

    checkResponse(result) {
      this.onRequest = false;
      if (result.status == 200) {
        this.$store.commit("UPDATE_ME", result.data.user);
        const status = false;
        const msg = "Your review is updated successfully";
        this.showAlert(msg, status);
      } else {
        this.callResponse(result.response.data.message, true);
      }
    },

    async processComment() {
      if (!this.comment || this.comment == undefined) {
        this.showAlert(
          "Sorry, your comment cannot be less than 20 characters.",
          true
        );
        return;
      }
      const comment = this.comment.trim();
      if (comment.length < 20) {
        this.showAlert(
          "Sorry, your comment cannot be less than 20 characters.",
          true
        );
        return;
      }
      const form = new FormData();
      form.append("comment", this.comment);
      form.append("rating", this.currentRating);
      form.append("hasCommented", true);

      this.onRequest = true;
      const result = await this.$store.dispatch("userStore/UPDATE_ME", form);
      this.checkResponse(result);
    },

    async getUser() {
      const result = await this.$axios.get(`/users/${this.userInfo._id}`);
      this.comment = result.data.data.comment;
      this.currentRating = result.data.data.rating;
      this.profilePicture = result.data.data.profilePicture;
    },
  },

  mounted() {
    this.setUserRating(this.authUser);
  },

  computed: {
    authUser() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style></style>
