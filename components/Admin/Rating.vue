<!-- <template>
  <div class="content-wrap w-form">
    <h3 class="top-heading2 promos">Review</h3>

    <div class="formflex">
      <div class="profile-left review">
        <div class="rating-intro rate">
          <span class="text-span-2"
            >Hello {{ userInfo.username }}, you can give us a rating.</span
          ><br />Feel free to comment and rate our services, we care about our
          customers concerns on our products and services.
        </div>
        <div class="each-profile-input">
          <img
            v-for="(star, i) in stars"
            :key="star"
            :src="getStarImage(star)"
            loading="lazy"
            alt=""
            class="star-icon"
            @click="setRating(i + 1)"
          />
        </div>
        <textarea
          placeholder="No 3 Akwakuma St. Owerri Municipal Owerri, Imo State"
          maxlength="5000"
          v-model="comment"
          class="profile-input review w-input"
        ></textarea>
        <div
          v-if="showResponse"
          class="respnse-message"
          :class="{ error: isError }"
        >
          {{ response }}
        </div>
        <div class="btn-holder1">
          <div class="custom-btn2 space" v-if="onRequest">
            <img
              src="/images/loading.svg"
              loading="lazy"
              alt=""
              class="btn-icon right loader"
            />
            <div>Processing</div>
          </div>
          <div v-else class="custom-btn2 space" @click="processComment">
            <div>Submit Rating</div>
          </div>
          <div class="custom-btn2 push space">
            <input
              type="text"
              class="hidden w-input"
              maxlength="256"
              name="field-2"
              data-name="Field 2"
              placeholder="Example Text"
              id="field-2"
              required=""
            />
            <div class="btn-text">Cancel</div>
          </div>
        </div>
      </div>

      <div class="profile-right review">
        <div class="rating-intro rate">
          <span class="text-span-2"
            >Hello {{ userInfo.username }}, you can report a case.</span
          ><br />If any of our staffs behavior, products or services leaves you
          unsatisfied, report the case in the report case below.
        </div>
        <input
          type="text"
          class="profile-input report w-input"
          maxlength="256"
          v-model="subject"
          placeholder="Subject"
        /><textarea
          placeholder="Write Report"
          maxlength="5000"
          v-model="body"
          class="profile-input review w-input"
        ></textarea>
        <div
          v-if="showResponse"
          class="respnse-message"
          :class="{ error: isError }"
        >
          {{ response }}
        </div>
        <div class="btn-holder1">
          <div class="custom-btn2 space" v-if="onRequest">
            <img
              src="/images/loading.svg"
              loading="lazy"
              alt=""
              class="btn-icon right loader"
            />
            <div>Processing</div>
          </div>
          <div v-else class="custom-btn2 space" @click="processReport">
            <div>Submit Report</div>
          </div>
          <div class="custom-btn2 push space" @click="clearReport">
            <div class="btn-text">Cancel</div>
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
      comment: "",
      rating: 0,
      currentRating: this.rating,
      profilePicture: "",

      subject: "",
      body: "",

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

    clearReport() {
      this.subject = "";
      this.body = "";
    },

    async processReport() {
      this.onRequest = true;
      const form = {
        username: this.userInfo.username,
        subject: this.subject,
        body: this.body,
        profilePicture: this.profilePicture,
      };
      try {
        const result = await this.$axios.post(`/case`, form);
        this.showResponseMsg(result.data.message, false);
      } catch (err) {
        this.showResponseMsg(err.response.data.message, true);
      }
    },

    async processComment() {
      const form = {
        rating: this.currentRating,
        comment: this.comment,
        hasCommented: true,
      };
      this.onRequest = true;
      try {
        await this.$axios.patch(`/users/${this.userInfo._id}`, form);
        this.showResponseMsg("Your comment was updated successfully", false);
      } catch (err) {
        this.showResponseMsg(err.response.data.message, true);
      }
    },

    async getUser() {
      const result = await this.$axios.get(`/users/${this.userInfo._id}`);
      this.comment = result.data.data.comment;
      this.currentRating = result.data.data.rating;
      this.profilePicture = result.data.data.profilePicture;
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
.star-icon:hover,
.star-icon.is-active,
.star-icon.is-active ~ .star-icon {
  content: url("@/assets/fill-star.svg");
}
</style> -->
