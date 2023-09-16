<template>
  <div class="">
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
</template>

<script>
import AsidePost from "../components/AsidePost";
import BlogComment from "../components/BlogComment";
import CompanyAds from "../components/CompanyAds.vue";
import HomeFooter from "../components/HomeFooter";
import HorizontalNav from "../components/HorizontalNav.vue";
import LandingNav from "../components/LandingNav";
import MainPost from "../components/MainPost.vue";
import MobileBottomNav from "../components/MobileBottomNav.vue";
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
    HorizontalNav,
    MobileBottomNav,
  },
};
</script>

<style></style>
