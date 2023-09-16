<template>
  <div class="">
    <!-- -----------HEROE------------- -->
    <div
      data-delay="8000"
      data-animation="slide"
      class="hero-slider w-slider"
      data-autoplay="true"
      data-easing="ease-out-cubic"
      data-hide-arrows="true"
      data-disable-swipe="false"
      data-autoplay-limit="0"
      data-nav-spacing="3"
      data-duration="1500"
      data-infinite="true"
    >
      <div class="landing-mask w-slider-mask">
        <div
          v-for="banner in banners"
          :key="banner._id"
          class="landing-slide w-slide"
        >
          <img
            :src="banner.bannerImageUrl"
            loading="lazy"
            sizes="100vw"
            :srcset="`
                  ${banner.bannerImageUrl}   500w,
                  ${banner.bannerImageUrl}   800w,
                  ${banner.bannerImageUrl} 1080w,
                  ${banner.bannerImageUrl}        1539w`"
            alt=""
            class="responsive-img"
          />
          <div class="landing-hero-overlay">
            <div class="custom-container-landing">
              <div class="landing-content">
                <h1 class="light-heading">{{ banner.bannerTitle }}</h1>
                <h1 class="hero-name">{{ banner.bannerSubtitle }}</h1>
                <h1 class="landing-subtitle">
                  {{ banner.bannerIntro }}
                </h1>
                <div @click="getStarted" class="custom-btn">
                  <div>Start Shopping</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="hide-dots w-slider-nav w-round"></div>
    </div>
    <!--X -----------HEROE-------------X -->

    <div
      @click.self="showVideo = !showVideo"
      class="alert-body video-display"
      :class="{ active: showVideo }"
      v-if="showVideo"
    >
      <div
        style="padding-top: 56.17021276595745%"
        class="video-product w-video w-embed"
        @click.self="showVideo = !showVideo"
      >
        <iframe
          class="embedly-embed"
          src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FXALBGkjkUPQ%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXALBGkjkUPQ&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FXALBGkjkUPQ%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube"
          scrolling="no"
          allowfullscreen
          title="Imagine for 1 Minute"
        ></iframe>
      </div>
    </div>

    <!-- -----------HOME PRODUCTS------------- -->
    <div class="app-section">
      <div class="custom-container-landing">
        <div class="app-flex">
          <div class="product-flex">
            <h3 class="section-title pro">Our Products</h3>

            <each-product
              v-for="(product, int) in productItems"
              :product="product"
              :key="int"
            />
            <nuxt-link
              v-show="user != null"
              to="/dashboard/products"
              class="response big"
              >View More</nuxt-link
            >
            <nuxt-link v-show="user == null" to="/login" class="response big"
              >View More</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
    <!--X -----------HOME PRODUCTS------------- X-->

    <!-- -----------HOW IT WORKS------------- -->
    <div class="custom-container-landing">
      <div class="content-body">
        <div class="first-landing-section">
          <div class="how">
            <div class="landing-title">HOW WE WORK</div>
            <div class="each-how">
              <img
                src="/images/registration.svg"
                loading="lazy"
                alt=""
                class="how-img"
              />
              <div class="subtitle">Signup &amp;Login</div>
              <div class="how-text">
                Create and your Kitchen Grace account to get started, login to
                your Kitchen Grace account to start shopping.
              </div>
            </div>
            <div class="each-how center">
              <img
                src="/images/cart-line.svg"
                loading="lazy"
                alt=""
                class="how-img"
              />
              <div class="subtitle">Shop &amp; Order</div>
              <div class="how-text">
                Search and select the products of your choice, click on the cart
                icon to view and approve your order.
              </div>
            </div>
            <div class="each-how">
              <img
                src="/images/delivery.svg"
                loading="lazy"
                alt=""
                class="how-img width"
              />
              <div class="subtitle">Receive &amp; Pay</div>
              <div class="how-text">
                We deliver every other in less than 20 minutes, we receive
                payments from you on delivery of your ordered products.
              </div>
            </div>
          </div>
          <div class="how">
            <div class="landing-title">WHAT YOU CAN DO</div>
            <div
              data-delay="4000"
              data-animation="slide"
              class="combo-slider w-slider"
              data-autoplay="false"
              data-easing="ease"
              data-hide-arrows="false"
              data-disable-swipe="false"
              data-autoplay-limit="0"
              data-nav-spacing="3"
              data-duration="500"
              data-infinite="true"
            >
              <div class="combo-mask w-slider-mask">
                <div
                  v-for="item in blogTutorials"
                  :key="item._id"
                  class="each-combo w-slide"
                >
                  <div class="combo-container">
                    <img
                      :src="item.bannerUrl"
                      loading="lazy"
                      alt=""
                      class="combo-img"
                    /><nuxt-link
                      :to="`blog-details/${item._id}`"
                      class="combo-link"
                      >{{ item.title }}</nuxt-link
                    >
                  </div>
                </div>
              </div>

              <div class="slide-nav w-slider-nav w-round w-num"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- X-----------HOW IT WORKS-------------X -->

    <!-- -----------OUR VIDEO------------- -->
    <div class="landing-video">
      <div class="video-cover">
        <img
          @click="showVideo = !showVideo"
          src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0d9e44e16c7caba98acc8_play-btn.svg"
          loading="lazy"
          alt=""
          class="play-btn"
        />
        <div class="subtit-intro white">
          Our faithful services has attracted many positive reviews from our
          wonderful customers around te
        </div>
      </div>
    </div>
    <!--X -----------OUR VIDEO-------------X -->

    <!-- -----------TESTIMONIAL------------- -->
    <div class="review-section">
      <div class="custom-container-landing">
        <div class="first-landing-section">
          <div class="how">
            <div class="landing-title">WHAT CUSTOMERS SAY ABOUT US</div>
            <div class="subtit-intro">
              Our faithful services has attracted many positive reviews from our
              wonderful customers around te world
            </div>
            <div class="review-flex">
              <div
                data-delay="6000"
                data-animation="slide"
                class="review-slide w-slider"
                data-autoplay="true"
                data-easing="ease-in-out-cubic"
                data-hide-arrows="true"
                data-disable-swipe="false"
                data-autoplay-limit="0"
                data-nav-spacing="3"
                data-duration="1200"
                data-infinite="true"
              >
                <div class="combo-mask w-slider-mask">
                  <div
                    v-for="review in reviews"
                    :key="review._id"
                    class="each-review w-slide"
                  >
                    <div class="review-img">
                      <img
                        :src="review.profilePictureUrl"
                        loading="lazy"
                        alt=""
                        class="responsive-img"
                      />
                    </div>
                    <div class="app-text">
                      {{ review.comment }}
                    </div>
                    <div class="review-name">{{ review.username }}</div>
                    <div class="review-name state">
                      {{ review.country }}
                    </div>
                  </div>
                </div>

                <div class="slide-nav w-slider-nav w-round w-num"></div>
              </div>
              <img
                src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0dd063df2a4e609fd7453_45.png"
                loading="lazy"
                sizes="(max-width: 479px) 96vw, (max-width: 767px) 92vw, (max-width: 991px) 46vw, (max-width: 1279px) 34vw, 406px"
                srcset="
                  https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0dd063df2a4e609fd7453_45-p-500.png 500w,
                  https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0dd063df2a4e609fd7453_45-p-800.png 800w,
                  https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0dd063df2a4e609fd7453_45.png       831w
                "
                alt=""
                class="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--X -----------TESTIMONIAL------------- X-->

    <!---------------BLOG POST----------------->
    <div class="landing-blog">
      <div class="custom-container-landing">
        <div
          data-delay="6000"
          data-animation="slide"
          class="blog-slider w-slider"
          data-autoplay="true"
          data-easing="ease-out-cubic"
          data-hide-arrows="false"
          data-disable-swipe="false"
          data-autoplay-limit="0"
          data-nav-spacing="3"
          data-duration="1300"
          data-infinite="true"
        >
          <div class="landing-mask w-slider-mask">
            <div
              v-for="blog in blogs"
              :key="blog._id"
              class="each-blog w-slide"
            >
              <div class="each-blog-flex">
                <div class="landing-blog-holder">
                  <img
                    :src="blog.bannerUrl"
                    loading="lazy"
                    alt=""
                    class="responsive-img"
                  />
                </div>
                <div class="each-blog-body">
                  <span @click="selectBlog(blog)" class="subtitle blog">{{
                    blog.title
                  }}</span>
                  <div class="each-blog-date">
                    {{ formatDate(blog.time) }}
                  </div>
                  <div v-html="`${blog.content.substring(0, 150)}[...]`"></div>
                  <div class="each-blog-footer">
                    <div>27 Comments</div>
                    <span @click="selectBlog(blog)" class="more"
                      >Read More</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--X -----------BLOG POST------------- X-->

    <!-- -----------COMING SOON------------- -->
    <div class="app-section">
      <div class="custom-container-landing">
        <div class="app-flex">
          <img
            src="/images/phone-big.png"
            loading="lazy"
            alt=""
            class="app-img"
          />
          <div class="app-content">
            <div class="coming">Mobile App Coming Soon...</div>
            <div class="app-how">Download. Order. Receive</div>
            <div class="app-text">
              While we are sorry for any inconvenience making orders from our
              web platform might cause, we also wish to annouce to you that our
              mobile app will soon be available in both Play Store and App
              Store. Please bear with us... Thansk, Kitchen Grace.
            </div>
            <div class="app-btns">
              <nuxt-link to="/" class="store-img w-inline-block"
                ><img
                  src="/images/app-store.png"
                  loading="lazy"
                  alt="" /></nuxt-link
              ><nuxt-link to="/" class="store-img w-inline-block"
                ><img src="/images/google-play.png" loading="lazy" alt=""
              /></nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--X -----------COMING SOON------------- X-->

    <!-- -----------PARTNER------------- -->
    <div class="partner-section">
      <div class="landing-title">Our Partners</div>
      <div class="custom-container-landing">
        <div
          data-delay="6000"
          data-animation="slide"
          class="partner-slider w-slider"
          data-autoplay="true"
          data-easing="ease-out-cubic"
          data-hide-arrows="true"
          data-disable-swipe="false"
          data-autoplay-limit="0"
          data-nav-spacing="3"
          data-duration="1300"
          data-infinite="true"
        >
          <div class="partner-mask w-slider-mask">
            <div
              v-for="partner in partners"
              :key="partner._id"
              class="each-partner w-slide"
            >
              <nuxt-link to="/" class="partner-link w-inline-block"
                ><img
                  :src="partner.imageUrl"
                  loading="lazy"
                  alt=""
                  class="partner-img"
              /></nuxt-link>
            </div>
          </div>

          <div class="hide-dots w-slider-nav w-round"></div>
        </div>
      </div>
    </div>
    <!--X -----------PARTNER------------- X-->

    <home-footer />
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
    productItems() {
      return this.$store.state.productStore.products;
    },
    banners() {
      const banners = JSON.parse(JSON.stringify(this.$store.state.banners));
      return banners.filter((el) => {
        return el.bannerPage == "Home";
      });
    },

    reviews() {
      return this.$store.state.reviews;
    },

    blogTutorials() {
      return this.$store.state.blogTutorials;
    },

    blogs() {
      return this.$store.state.blogs;
    },

    partners() {
      return this.$store.state.partners;
    },

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
