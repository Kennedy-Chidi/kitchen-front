<template>
  <div class="grace blog-page">
    <div class="main-body">
      <div class="main-flex">
        <company-ads />
        <landing-nav />
        <div class="custom-container-landing">
          <div class="body-flex">
            <div class="content-body blog-post">
              <main-post />
              <aside-post />
            </div>
          </div>
        </div>
        <home-footer />
      </div>
    </div>
  </div>
</template>

<script>
import AsidePost from "../components/AsidePost";
import BlogComment from "../components/BlogComment";
import CompanyAds from "./components/CompanyAds.vue";
import HomeFooter from "../components/HomeFooter";
import LandingNav from "../components/LandingNav";
import MainPost from "./components/MainPost.vue";
import VerticalNav from "../components/VerticalNav";
export default {
  components: {
    VerticalNav,
    CompanyAds,
    HomeFooter,
    LandingNav,
    AsidePost,
    BlogComment,
    MainPost,
  },
};
</script>

<style></style>
