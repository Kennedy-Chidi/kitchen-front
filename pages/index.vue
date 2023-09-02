<template>
  <div class="grace landing">
    <div class="main-body">
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
        <landing-nav />
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
            <div class="landing-slide w-slide">
              <img
                src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0c92b1fa08c9e33e7c86b_home-banner1.jpg"
                loading="lazy"
                sizes="100vw"
                srcset="
                  https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0c92b1fa08c9e33e7c86b_home-banner1-p-500.jpg   500w,
                  https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0c92b1fa08c9e33e7c86b_home-banner1-p-800.jpg   800w,
                  https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0c92b1fa08c9e33e7c86b_home-banner1-p-1080.jpg 1080w,
                  https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0c92b1fa08c9e33e7c86b_home-banner1.jpg        1539w
                "
                alt=""
                class="responsive-img"
              />
              <div class="landing-hero-overlay">
                <div class="custom-container-landing">
                  <div class="landing-content">
                    <h1 class="light-heading">Top Deal</h1>
                    <h1 class="hero-name">Kitchen Grace</h1>
                    <h1 class="landing-subtitle">
                      Get 10% Bonus for your referrals
                    </h1>
                    <div class="custom-btn"><div>Start Shopping</div></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="landing-slide w-slide">
              <img
                src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0cb5afca9a83bf6445359_home-banner2.jpg"
                loading="lazy"
                sizes="100vw"
                srcset="
                  https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0cb5afca9a83bf6445359_home-banner2-p-500.jpg   500w,
                  https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0cb5afca9a83bf6445359_home-banner2-p-800.jpg   800w,
                  https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0cb5afca9a83bf6445359_home-banner2-p-1080.jpg 1080w,
                  https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0cb5afca9a83bf6445359_home-banner2.jpg        1539w
                "
                alt=""
                class="responsive-img"
              />
              <div class="landing-hero-overlay">
                <div class="custom-container-landing">
                  <div class="landing-content">
                    <h1 class="light-heading">Top Deal</h1>
                    <h1 class="hero-name">Kitchen Grace</h1>
                    <h1 class="hero-subtitle">
                      Get 10% Bonus for your referrals
                    </h1>
                    <div class="custom-btn"><div>Start Shopping</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="hide-dots w-slider-nav w-round"></div>
        </div>

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
                    Create and your Kitchen Grace account to get started, login
                    to your Kitchen Grace account to start shopping.
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
                    Search and select the products of your choice, click on the
                    cart icon to view and approve your order.
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
                    <div class="each-combo w-slide">
                      <div class="combo-container">
                        <img
                          src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0d52a6e4ab5692411f6e2_meal.jpeg"
                          loading="lazy"
                          alt=""
                          class="combo-img"
                        /><nuxt-link to="/blog" class="combo-link"
                          >Native Vegetable Salad</nuxt-link
                        >
                      </div>
                    </div>
                    <div class="each-combo w-slide">
                      <div class="combo-container">
                        <img
                          src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0d71b6c35b16f4e77d1e6_meal3.jpeg"
                          loading="lazy"
                          alt=""
                          class="combo-img"
                        /><nuxt-link to="/" class="combo-link"
                          >Native Vegetable Salad</nuxt-link
                        >
                      </div>
                    </div>
                    <div class="each-combo w-slide">
                      <div class="combo-container">
                        <img
                          src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0d71d34258b929f630928_meal4.jpeg"
                          loading="lazy"
                          alt=""
                          class="combo-img"
                        /><nuxt-link to="/" class="combo-link"
                          >Native Vegetable Salad</nuxt-link
                        >
                      </div>
                    </div>
                    <div class="each-combo w-slide">
                      <div class="combo-container">
                        <img
                          src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0d71b4ada8a57fab05a2b_meal2.jpeg"
                          loading="lazy"
                          alt=""
                          class="combo-img"
                        /><nuxt-link to="/" class="combo-link"
                          >Native Vegetable Salad</nuxt-link
                        >
                      </div>
                    </div>
                  </div>
                  <div class="left-arrow-2 w-slider-arrow-left">
                    <div class="w-icon-slider-left"></div>
                  </div>
                  <div class="right-arrow-2 w-slider-arrow-right">
                    <div class="w-icon-slider-right"></div>
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
                  Our faithful services has attracted many positive reviews from
                  our wonderful customers around te world
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
                      <div class="each-review w-slide">
                        <div class="review-img">
                          <img
                            src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0d71b4ada8a57fab05a2b_meal2.jpeg"
                            loading="lazy"
                            alt=""
                            class="responsive-img"
                          />
                        </div>
                        <div class="app-text">
                          Our faithful services has attracted many positive
                          reviews from our wonderful customers around te world
                          Our faithful services has attracted many positive
                          reviews from our wonderful customers around te world
                        </div>
                        <div class="review-name">Kenny James</div>
                        <div class="review-name state">Nigeria</div>
                      </div>
                      <div class="each-review w-slide">
                        <div class="review-img">
                          <img
                            src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0d52a6e4ab5692411f6e2_meal.jpeg"
                            loading="lazy"
                            alt=""
                            class="responsive-img"
                          />
                        </div>
                        <div class="app-text">
                          Our faithful services has attracted many positive
                          reviews from our wonderful customers around te world
                          Our faithful services has attracted many positive
                          reviews from our wonderful customers around te world
                        </div>
                        <div class="review-name">Kenny James</div>
                        <div class="review-name state">Nigeria</div>
                      </div>
                    </div>
                    <div class="left-arrow-2 w-slider-arrow-left">
                      <div class="w-icon-slider-left"></div>
                    </div>
                    <div class="right-arrow-2 w-slider-arrow-right">
                      <div class="w-icon-slider-right"></div>
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
                <div class="each-blog w-slide">
                  <div class="each-blog-flex">
                    <div class="landing-blog-holder">
                      <img
                        src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0d71d34258b929f630928_meal4.jpeg"
                        loading="lazy"
                        alt=""
                        class="responsive-img"
                      />
                    </div>
                    <div class="each-blog-body">
                      <nuxt-link to="/" class="subtitle blog"
                        >How to maintain a ood diet in your ome</nuxt-link
                      >
                      <div class="each-blog-date">13 Oct, 2023</div>
                      <div>
                        Headings Header one Header two Header three Header four
                        Header five Header six Blockquotes Single line
                        blockquote: Stay hungry. Stay foolish. Multi line
                        blockquote with a cite reference: People think[...]
                      </div>
                      <div class="each-blog-footer">
                        <div>27 Comments</div>
                        <nuxt-link to="/" class="more">Read More</nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="each-blog w-slide">
                  <div class="each-blog-flex">
                    <div class="landing-blog-holder">
                      <img
                        src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0d71b4ada8a57fab05a2b_meal2.jpeg"
                        loading="lazy"
                        alt=""
                        class="responsive-img"
                      />
                    </div>
                    <div class="each-blog-body">
                      <nuxt-link to="/" class="subtitle blog"
                        >How to maintain a ood diet in your ome</nuxt-link
                      >
                      <div class="each-blog-date">13 Oct, 2023</div>
                      <div>
                        Headings Header one Header two Header three Header four
                        Header five Header six Blockquotes Single line
                        blockquote: Stay hungry. Stay foolish. Multi line
                        blockquote with a cite reference: People think[...]
                      </div>
                      <div class="each-blog-footer">
                        <div>27 Comments</div>
                        <nuxt-link to="/" class="more">Read More</nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="each-blog w-slide">
                  <div class="each-blog-flex">
                    <div class="landing-blog-holder">
                      <img
                        src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0d52a6e4ab5692411f6e2_meal.jpeg"
                        loading="lazy"
                        alt=""
                        class="responsive-img"
                      />
                    </div>
                    <div class="each-blog-body">
                      <nuxt-link to="/" class="subtitle blog"
                        >How to maintain a ood diet in your ome</nuxt-link
                      >
                      <div class="each-blog-date">13 Oct, 2023</div>
                      <div>
                        Headings Header one Header two Header three Header four
                        Header five Header six Blockquotes Single line
                        blockquote: Stay hungry. Stay foolish. Multi line
                        blockquote with a cite reference: People think[...]
                      </div>
                      <div class="each-blog-footer">
                        <div>27 Comments</div>
                        <nuxt-link to="/" class="more">Read More</nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="each-blog w-slide">
                  <div class="each-blog-flex">
                    <div class="landing-blog-holder">
                      <img
                        src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0d52a6e4ab5692411f6e2_meal.jpeg"
                        loading="lazy"
                        alt=""
                        class="responsive-img"
                      />
                    </div>
                    <div class="each-blog-body">
                      <nuxt-link to="/" class="subtitle"
                        >How to maintain a ood diet in your ome</nuxt-link
                      >
                      <div class="each-blog-date">13 Oct, 2023</div>
                      <div>
                        Headings Header one Header two Header three Header four
                        Header five Header six Blockquotes Single line
                        blockquote: Stay hungry. Stay foolish. Multi line
                        blockquote with a cite reference: People think[...]
                      </div>
                      <div class="each-blog-footer">
                        <div>27 Comments</div>
                        <nuxt-link to="/" class="more">Read More</nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="each-blog w-slide">
                  <div class="each-blog-flex">
                    <div class="landing-blog-holder">
                      <img
                        src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0d52a6e4ab5692411f6e2_meal.jpeg"
                        loading="lazy"
                        alt=""
                        class="responsive-img"
                      />
                    </div>
                    <div class="each-blog-body">
                      <nuxt-link to="/" class="subtitle"
                        >How to maintain a ood diet in your ome</nuxt-link
                      >
                      <div class="each-blog-date">13 Oct, 2023</div>
                      <div>
                        Headings Header one Header two Header three Header four
                        Header five Header six Blockquotes Single line
                        blockquote: Stay hungry. Stay foolish. Multi line
                        blockquote with a cite reference: People think[...]
                      </div>
                      <div class="each-blog-footer">
                        <div>27 Comments</div>
                        <nuxt-link to="/" class="more">Read More</nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="each-blog w-slide">
                  <div class="each-blog-flex">
                    <div class="landing-blog-holder">
                      <img
                        src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0d52a6e4ab5692411f6e2_meal.jpeg"
                        loading="lazy"
                        alt=""
                        class="responsive-img"
                      />
                    </div>
                    <div class="each-blog-body">
                      <nuxt-link to="/" class="subtitle"
                        >How to maintain a ood diet in your ome</nuxt-link
                      >
                      <div class="each-blog-date">13 Oct, 2023</div>
                      <div>
                        Headings Header one Header two Header three Header four
                        Header five Header six Blockquotes Single line
                        blockquote: Stay hungry. Stay foolish. Multi line
                        blockquote with a cite reference: People think[...]
                      </div>
                      <div class="each-blog-footer">
                        <div>27 Comments</div>
                        <nuxt-link to="/" class="more">Read More</nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="each-blog w-slide">
                  <div class="each-blog-flex">
                    <div class="landing-blog-holder">
                      <img
                        src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0d52a6e4ab5692411f6e2_meal.jpeg"
                        loading="lazy"
                        alt=""
                        class="responsive-img"
                      />
                    </div>
                    <div class="each-blog-body">
                      <nuxt-link to="/" class="subtitle"
                        >How to maintain a ood diet in your ome</nuxt-link
                      >
                      <div class="each-blog-date">13 Oct, 2023</div>
                      <div>
                        Headings Header one Header two Header three Header four
                        Header five Header six Blockquotes Single line
                        blockquote: Stay hungry. Stay foolish. Multi line
                        blockquote with a cite reference: People think[...]
                      </div>
                      <div class="each-blog-footer">
                        <div>27 Comments</div>
                        <nuxt-link to="/" class="more">Read More</nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="each-blog w-slide">
                  <div class="each-blog-flex">
                    <div class="landing-blog-holder">
                      <img
                        src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0d71d34258b929f630928_meal4.jpeg"
                        loading="lazy"
                        alt=""
                        class="responsive-img"
                      />
                    </div>
                    <div class="each-blog-body">
                      <nuxt-link to="/" class="subtitle"
                        >How to maintain a ood diet in your ome</nuxt-link
                      >
                      <div class="each-blog-date">13 Oct, 2023</div>
                      <div>
                        Headings Header one Header two Header three Header four
                        Header five Header six Blockquotes Single line
                        blockquote: Stay hungry. Stay foolish. Multi line
                        blockquote with a cite reference: People think[...]
                      </div>
                      <div class="each-blog-footer">
                        <div>27 Comments</div>
                        <nuxt-link to="/" class="more">Read More</nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="each-blog w-slide">
                  <div class="each-blog-flex">
                    <div class="landing-blog-holder">
                      <img
                        src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0d71b4ada8a57fab05a2b_meal2.jpeg"
                        loading="lazy"
                        alt=""
                        class="responsive-img"
                      />
                    </div>
                    <div class="each-blog-body">
                      <nuxt-link to="/" class="subtitle"
                        >How to maintain a ood diet in your ome</nuxt-link
                      >
                      <div class="each-blog-date">13 Oct, 2023</div>
                      <div>
                        Headings Header one Header two Header three Header four
                        Header five Header six Blockquotes Single line
                        blockquote: Stay hungry. Stay foolish. Multi line
                        blockquote with a cite reference: People think[...]
                      </div>
                      <div class="each-blog-footer">
                        <div>27 Comments</div>
                        <nuxt-link to="/" class="more">Read More</nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="left-arrow w-slider-arrow-left">
                <div class="w-icon-slider-left"></div>
              </div>
              <div class="right-arrow w-slider-arrow-right">
                <div class="w-icon-slider-right"></div>
              </div>
              <div class="hide-dots w-slider-nav w-round"></div>
            </div>
          </div>
        </div>
        <div class="app-section">
          <div class="custom-container-landing">
            <div class="app-flex">
              <img
                src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0e804b931a8080bb3f829_mobile-phone-big.png"
                loading="lazy"
                alt=""
                class="app-img"
              />
              <div class="app-content">
                <div class="coming">Mobile App Coming Soon...</div>
                <div class="app-how">Download. Order. Receive</div>
                <div class="app-text">
                  Headings Header one Header two Header three Header four Header
                  five Header six Blockquotes Single line blockquote: Stay
                  hungry. Stay foolish. Multi line blockquote with a cite
                  reference: People think[...]
                </div>
                <div class="app-btns">
                  <nuxt-link to="/" class="store-img w-inline-block"
                    ><img
                      src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0e80449e674bb29308901_app-store.png"
                      loading="lazy"
                      alt="" /></nuxt-link
                  ><nuxt-link to="/" class="store-img w-inline-block"
                    ><img
                      src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0e80014f492b3dfe38026_google-play.png"
                      loading="lazy"
                      alt=""
                  /></nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                <div class="each-partner w-slide">
                  <nuxt-link to="/" class="partner-link w-inline-block"
                    ><img
                      src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0ed64fca9a83bf65e1abd_02.png"
                      loading="lazy"
                      alt=""
                      class="partner-img"
                  /></nuxt-link>
                </div>
                <div class="each-partner w-slide">
                  <nuxt-link to="/" class="partner-link w-inline-block"
                    ><img
                      src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0ed667db0bb659bf8c0ea_01.png"
                      loading="lazy"
                      alt=""
                      class="partner-img"
                  /></nuxt-link>
                </div>
                <div class="each-partner w-slide">
                  <nuxt-link to="/" class="partner-link w-inline-block"
                    ><img
                      src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0ed64b87cba886ff8a01b_03.png"
                      loading="lazy"
                      alt=""
                      class="partner-img"
                  /></nuxt-link>
                </div>
                <div class="each-partner w-slide">
                  <nuxt-link to="/" class="partner-link w-inline-block"
                    ><img
                      src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64e0ed650838e40e676588b3_04.png"
                      loading="lazy"
                      alt=""
                      class="partner-img"
                  /></nuxt-link>
                </div>
              </div>
              <div class="left-arrow w-slider-arrow-left">
                <div class="w-icon-slider-left"></div>
              </div>
              <div class="right-arrow w-slider-arrow-right">
                <div class="w-icon-slider-right"></div>
              </div>
              <div class="hide-dots w-slider-nav w-round"></div>
            </div>
          </div>
        </div>
        <home-footer />
      </div>
    </div>
  </div>
</template>
<script>
import HomeFooter from "../components/HomeFooter";
export default {
  components: { HomeFooter },
};
</script>

<style></style>
