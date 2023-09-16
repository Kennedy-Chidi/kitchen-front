<template>
  <div class="grace landing">
    <div class="main-body">
      <vertical-nav v-show="user != null" />
      <div class="main-flex">
        <div class="display">
          <div class="custom-container-landing">
            <img
              src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6cb8e05358c6b93a96917_ezgif.com-optimize.gif"
              loading="lazy"
              alt=""
              class="display-img"
            />
          </div>
        </div>
        <landing-nav v-show="user == null" />
        <horizontal-nav v-show="user != null" />
        <main>
          <nuxt />
        </main>
      </div>
    </div>
    <!-- <mobile-bottom-nav v-show="user != null" /> -->
  </div>
</template>
<script>
import EachProduct from "../components/EachProduct.vue";
import HomeFooter from "../components/HomeFooter";
import HorizontalNav from "../components/HorizontalNav.vue";
import MobileBottomNav from "../components/MobileBottomNav.vue";
import VerticalNav from "../components/VerticalNav.vue";
export default {
  data() {
    return {
      showVideo: false,
    };
  },
  methods: {
    formatDate(data) {
      if (data == null || data == undefined) {
        return "N/A";
      }
      const date = new Date(data).getTime(); // Note that month is zero-indexed in JavaScript
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        suffix: (day) => {
          if (day === 1 || day === 21 || day === 31) {
            return "st";
          } else if (day === 2 || day === 22) {
            return "nd";
          } else if (day === 3 || day === 23) {
            return "rd";
          } else {
            return "th";
          }
        },
      };

      return new Intl.DateTimeFormat("en-US", options).format(date);
    },

    selectBlog(blog) {
      this.$store.commit("SELECT_BLOG", blog);
      this.$router.push("/blog-details");
    },

    getStarted() {
      if (this.user) {
        this.$router.push("/dashboard/products");
      } else {
        this.$router.push("/signup");
      }
    },
  },

  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
  components: {
    HomeFooter,
    EachProduct,
    MobileBottomNav,
    VerticalNav,
    HorizontalNav,
  },
};
</script>

<style></style>
