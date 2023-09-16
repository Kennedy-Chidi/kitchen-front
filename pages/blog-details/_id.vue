<template>
  <div class="">
    <div class="custom-container-landing">
      <div class="body-flex">
        <div class="content-body blog-post">
          <div class="main-post">
            <div class="prod-detail-flex post">
              <h1 class="post-title">{{ blog.title }}</h1>
              <div class="main-product-img banner">
                <img
                  :src="blog.bannerUrl"
                  loading="lazy"
                  alt=""
                  class="responsive-img"
                />
                <div
                  style="padding-top: 56.17021276595745%"
                  class="video-product hide w-video w-embed"
                >
                  <iframe
                    class="embedly-embed"
                    src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FXALBGkjkUPQ%3Ffeature%3Doembed&amp;display_name=YouTube&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXALBGkjkUPQ&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FXALBGkjkUPQ%2Fhqdefault.jpg&amp;key=96f1f04c5f4143bcb0f2e68c87d65feb&amp;type=text%2Fhtml&amp;schema=youtube"
                    scrolling="no"
                    allowfullscreen=""
                    title="Imagine for 1 Minute"
                  ></iframe>
                </div>
                <div class="pro-video">
                  <img
                    src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b7332cf7c46bde9545099e_search-video-icon%201.svg"
                    loading="lazy"
                    alt=""
                    class="icon"
                  />
                </div>
              </div>
              <div class="comment-actions post">
                <div class="comment-action post">
                  <div>{{ blog.author }}</div>
                  <img
                    src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b723f3d015e9b5d2fcbc62_profile.svg"
                    loading="lazy"
                    alt=""
                    class="comment-act"
                  />
                </div>
                <div class="comment-action post">
                  <div>{{ formatDate(blog.time) }}</div>
                  <img
                    src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b73e3742421ae3cb6680e1_clock-line-icon%201.svg"
                    loading="lazy"
                    alt=""
                    class="comment-act"
                  />
                </div>
                <div class="comment-action">
                  <div>56</div>
                  <img
                    src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b84d212e330d5af9503296_delete.svg"
                    loading="lazy"
                    alt=""
                    class="comment-act"
                  />
                </div>
              </div>
              <div class="comment" v-html="`${blog.content}`"></div>
            </div>
            <!-- <blog-comment /> -->
          </div>
          <aside-post />
        </div>
      </div>
    </div>
    <footer-component v-if="user != null" />
    <home-footer v-else />
  </div>
</template>

<script>
import AsidePost from "../../components/AsidePost";
import BlogComment from "../../components/BlogComment";
import ClientNavigation from "../../components/ClientNavigation.vue";
import FooterComponent from "../../components/FooterComponent.vue";
import HomeFooter from "../../components/HomeFooter.vue";
import LandingNav from "../../components/LandingNav.vue";
export default {
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
  },
  components: {
    HomeFooter,
    ClientNavigation,
    LandingNav,
    AsidePost,
    BlogComment,
    FooterComponent,
  },
  computed: {
    blog() {
      return this.$store.state.selectedBlog;
    },
  },

  async asyncData({ params, store }) {
    const id = params.id;

    if (params == null) {
      this.$router.push("/");
    } else {
      await store.commit("SELECT_BLOG", id);
    }
  },
};
</script>

<style></style>
