<template>
  <div class="grace product-detail">
    <alert-box v-if="user" />
    <alert-confirmation v-if="user" />
    <cart-items v-if="user" />

    <div class="main-body">
      <vertical-nav v-if="user" />
      <div class="main-flex">
        <company-ads />
        <horizontal-nav v-if="user" />
        <landing-nav v-else />
        <div
          class=""
          :class="{
            'custom-container': user,
            'custom-container-landing': !user,
          }"
        >
          <div class="body-flex">
            <div class="content-body">
              <div class="prod-detail-flex">
                <div v-if="selectedProduct" class="product-display-holder">
                  <div class="main-product-img">
                    <img
                      :src="selectedProduct.productImageUrl"
                      loading="lazy"
                      alt=""
                      class="fill-img"
                    />
                    <div
                      style="padding-top: 56.17021276595745%"
                      class="video-product hide w-video w-embed"
                    >
                      <iframe
                        class="embedly-embed"
                        src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FXALBGkjkUPQ%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXALBGkjkUPQ&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FXALBGkjkUPQ%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube"
                        scrolling="no"
                        allowfullscreen
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
                  <div
                    v-if="selectedProduct.productImagesUrl"
                    class="product-display-flex"
                  >
                    <div
                      v-for="image in selectedProduct.productImagesUrl"
                      :key="image"
                      class="product-display"
                    >
                      <div class="product-cover"></div>
                      <img :src="image" loading="lazy" alt="" />
                    </div>
                  </div>
                </div>
                <div v-if="selectedProduct" class="product-wrap">
                  <div class="rating-flex">
                    <div class="pro-label">Rating:</div>
                    <div><div>4.6</div></div>
                    <img
                      src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6eb38d0d66d1e4a9c50e8_star.svg"
                      loading="lazy"
                      alt=""
                      class="rating-star"
                    /><img
                      src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6eb38d0d66d1e4a9c50e8_star.svg"
                      loading="lazy"
                      alt=""
                      class="rating-star"
                    /><img
                      src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6eb38d0d66d1e4a9c50e8_star.svg"
                      loading="lazy"
                      alt=""
                      class="rating-star"
                    /><img
                      src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6eb38d0d66d1e4a9c50e8_star.svg"
                      loading="lazy"
                      alt=""
                      class="rating-star"
                    /><img
                      src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6eb38d0d66d1e4a9c50e8_star.svg"
                      loading="lazy"
                      alt=""
                      class="rating-star"
                    />
                  </div>
                  <div class="rating-flex">
                    <div class="pro-label">Customers:</div>
                    <div><div>46 Persons</div></div>
                  </div>
                  <div class="rating-flex">
                    <div class="pro-label">Price:</div>
                    <div><div class="product-price no">N45,000</div></div>
                  </div>
                  <div class="rating-flex">
                    <div class="pro-label">ADD</div>
                    <div>
                      <div class="action-holder fl">
                        <div @click="removeFromCart" class="action-btn">
                          <div>-</div>
                        </div>
                        <div>{{ selectedProduct.cartNumber }}</div>
                        <div @click="addToCart" class="action-btn">
                          <div>+</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="comment"
                    v-html="selectedProduct.productDescription"
                  ></div>
                </div>
              </div>
              <div class="comment-form w-form">
                <form
                  id="email-form-4"
                  name="email-form-4"
                  data-name="Email Form 4"
                  method="get"
                  data-wf-page-id="64b6be9c94ade9f930694692"
                  data-wf-element-id="69b051ac-c8aa-afcb-5f6e-7a72d0497cd3"
                >
                  <div class="close right error"><div>X</div></div>
                  <textarea
                    placeholder="Write a comment"
                    maxlength="5000"
                    id="comment"
                    name="comment"
                    data-name="comment"
                    class="each-input comment-box w-input"
                  ></textarea
                  ><input
                    type="submit"
                    value="Submit"
                    data-wait="Please wait..."
                    class="comment-btn w-button"
                  />
                </form>
                <div class="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div class="w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
              <div class="comment-section">
                <div class="comment-head-flex">
                  <div class="comment-head">Make AReviewOn this Product</div>
                  <div class="comment-btn">Make Comment</div>
                </div>
                <div class="each-comment main">
                  <div class="comment-pix"><div>M</div></div>
                  <div>
                    <div class="comment-username">MalvisBrown</div>
                    <div class="comment">
                      Tis is a commentsecion for tisproduct.Its,T Tis is a
                      commentsecion for tisproduct.Its, is is a commentsecion
                      for tisproduct.Its, Tis is a commentsecion for
                      tisproduct.Its, is is a commentsecion for tisproduct.Its
                    </div>
                    <div class="comment-actions">
                      <div class="comment-action">
                        <div>56</div>
                        <img
                          src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64be23a49cb78686fc61df2e_reply.svg"
                          loading="lazy"
                          alt=""
                          class="comment-act"
                        />
                      </div>
                      <div class="comment-action">
                        <div>56</div>
                        <img
                          src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64be23a49cb78686fc61df2e_reply.svg"
                          loading="lazy"
                          alt=""
                          class="comment-act"
                        />
                      </div>
                    </div>
                    <div class="replies">
                      <div class="each-comment reply">
                        <div class="comment-pix">
                          <img
                            src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b79b7b42421ae3cbdb6ff8_ceo.png"
                            loading="lazy"
                            sizes="(max-width: 479px) 21vw, (max-width: 1279px) 80px, (max-width: 1439px) 6vw, 80px"
                            srcset="
                              https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b79b7b42421ae3cbdb6ff8_ceo-p-500.png 500w,
                              https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b79b7b42421ae3cbdb6ff8_ceo-p-800.png 800w,
                              https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b79b7b42421ae3cbdb6ff8_ceo.png       953w
                            "
                            alt=""
                            class="responsive-img"
                          />
                          <div>M</div>
                        </div>
                        <div>
                          <div class="comment-username">MalvisBrown</div>
                          <div class="comment">
                            Tis is a commentsecion for tisproduct.Its,T Tis is a
                            commentsecion for tisproduct.Its, is is a
                            commentsecion for tisproduct.Its, Tis is a
                            commentsecion for tisproduct.Its, is is a
                            commentsecion for tisproduct.Its
                          </div>
                          <div class="comment-actions">
                            <div class="comment-action">
                              <div>56</div>
                              <img
                                src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64be23a49cb78686fc61df2e_reply.svg"
                                loading="lazy"
                                alt=""
                                class="comment-act"
                              />
                            </div>
                            <div class="comment-action">
                              <div>56</div>
                              <img
                                src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b8e29972782f01aa826a75_edit.svg"
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
                        </div>
                      </div>
                      <div class="each-comment reply">
                        <div class="comment-pix"><div>M</div></div>
                        <div>
                          <div class="comment-username">MalvisBrown</div>
                          <div class="comment">
                            Tis is a commentsecion for tisproduct.Its,T Tis is a
                            commentsecion for tisproduct.Its, is is a
                            commentsecion for tisproduct.Its, Tis is a
                            commentsecion for tisproduct.Its, is is a
                            commentsecion for tisproduct.Its
                          </div>
                          <div class="comment-actions">
                            <div class="comment-action">
                              <div>56</div>
                              <img
                                src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64be23a49cb78686fc61df2e_reply.svg"
                                loading="lazy"
                                alt=""
                                class="comment-act"
                              />
                            </div>
                            <div class="comment-action">
                              <div>56</div>
                              <img
                                src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64be23a49cb78686fc61df2e_reply.svg"
                                loading="lazy"
                                alt=""
                                class="comment-act"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="each-comment reply">
                        <div class="comment-pix"><div>M</div></div>
                        <div>
                          <div class="comment-username">MalvisBrown</div>
                          <div class="comment">
                            Tis is a commentsecion for tisproduct.Its,T Tis is a
                            commentsecion for tisproduct.Its, is is a
                            commentsecion for tisproduct.Its, Tis is a
                            commentsecion for tisproduct.Its, is is a
                            commentsecion for tisproduct.Its
                          </div>
                          <div class="comment-actions">
                            <div class="comment-action">
                              <div>56</div>
                              <img
                                src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64be23a49cb78686fc61df2e_reply.svg"
                                loading="lazy"
                                alt=""
                                class="comment-act"
                              />
                            </div>
                            <div class="comment-action">
                              <div>56</div>
                              <img
                                src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64be23a49cb78686fc61df2e_reply.svg"
                                loading="lazy"
                                alt=""
                                class="comment-act"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="each-comment main">
                  <div class="comment-pix"><div>M</div></div>
                  <div>
                    <div class="comment-username">MalvisBrown</div>
                    <div class="comment">
                      Tis is a commentsecion for tisproduct.Its,T Tis is a
                      commentsecion for tisproduct.Its, is is a commentsecion
                      for tisproduct.Its, Tis is a commentsecion for
                      tisproduct.Its, is is a commentsecion for tisproduct.Its
                    </div>
                    <div class="comment-actions">
                      <div class="comment-action">
                        <div>56</div>
                        <img
                          src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64be23a49cb78686fc61df2e_reply.svg"
                          loading="lazy"
                          alt=""
                          class="comment-act"
                        />
                      </div>
                      <div class="comment-action">
                        <div>56</div>
                        <img
                          src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64be23a49cb78686fc61df2e_reply.svg"
                          loading="lazy"
                          alt=""
                          class="comment-act"
                        />
                      </div>
                    </div>
                    <div class="replies">
                      <div class="each-comment reply">
                        <div class="comment-pix"><div>M</div></div>
                        <div>
                          <div class="comment-username">MalvisBrown</div>
                          <div class="comment">
                            Tis is a commentsecion for tisproduct.Its,T Tis is a
                            commentsecion for tisproduct.Its, is is a
                            commentsecion for tisproduct.Its, Tis is a
                            commentsecion for tisproduct.Its, is is a
                            commentsecion for tisproduct.Its
                          </div>
                          <div class="comment-actions">
                            <div class="comment-action">
                              <div>56</div>
                              <img
                                src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64be23a49cb78686fc61df2e_reply.svg"
                                loading="lazy"
                                alt=""
                                class="comment-act"
                              />
                            </div>
                            <div class="comment-action">
                              <div>56</div>
                              <img
                                src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64be23a49cb78686fc61df2e_reply.svg"
                                loading="lazy"
                                alt=""
                                class="comment-act"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="each-comment reply">
                        <div class="comment-pix"><div>M</div></div>
                        <div>
                          <div class="comment-username">MalvisBrown</div>
                          <div class="comment">
                            Tis is a commentsecion for tisproduct.Its,T Tis is a
                            commentsecion for tisproduct.Its, is is a
                            commentsecion for tisproduct.Its, Tis is a
                            commentsecion for tisproduct.Its, is is a
                            commentsecion for tisproduct.Its
                          </div>
                          <div class="comment-actions">
                            <div class="comment-action">
                              <div>56</div>
                              <img
                                src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64be23a49cb78686fc61df2e_reply.svg"
                                loading="lazy"
                                alt=""
                                class="comment-act"
                              />
                            </div>
                            <div class="comment-action">
                              <div>56</div>
                              <img
                                src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64be23a49cb78686fc61df2e_reply.svg"
                                loading="lazy"
                                alt=""
                                class="comment-act"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="each-comment reply">
                        <div class="comment-pix"><div>M</div></div>
                        <div>
                          <div class="comment-username">MalvisBrown</div>
                          <div class="comment">
                            Tis is a commentsecion for tisproduct.Its,T Tis is a
                            commentsecion for tisproduct.Its, is is a
                            commentsecion for tisproduct.Its, Tis is a
                            commentsecion for tisproduct.Its, is is a
                            commentsecion for tisproduct.Its
                          </div>
                          <div class="comment-actions">
                            <div class="comment-action">
                              <div>56</div>
                              <img
                                src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64be23a49cb78686fc61df2e_reply.svg"
                                loading="lazy"
                                alt=""
                                class="comment-act"
                              />
                            </div>
                            <div class="comment-action">
                              <div>56</div>
                              <img
                                src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64be23a49cb78686fc61df2e_reply.svg"
                                loading="lazy"
                                alt=""
                                class="comment-act"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <mobile-bottom-nav v-if="user" />
    <home-footer v-else />
    <footer-component v-if="user" />
  </div>
</template>

<script>
import AlertBox from "../../components/AlertBox.vue";
import AlertConfirmation from "../../components/AlertConfirmation.vue";
import CartItems from "../../components/CartItems.vue";
import CompanyAds from "../../components/CompanyAds.vue";
import FooterComponent from "../../components/FooterComponent";
import HorizontalNav from "../../components/HorizontalNav.vue";
import MobileBottomNav from "../../components/MobileBottomNav.vue";
import VerticalNav from "../../components/VerticalNav.vue";
import HomeFooter from "../../components/HomeFooter.vue";
import LandingNav from "../../components/LandingNav";
export default {
  methods: {
    removeFromCart(data) {
      this.$store.commit("productStore/REMOVE_FROM_CART", data);
    },

    addToCart(data) {
      this.$store.commit("productStore/ADD_TO_CART", data);
    },
  },

  components: {
    CompanyAds,
    HorizontalNav,
    VerticalNav,
    MobileBottomNav,
    FooterComponent,
    CartItems,
    AlertBox,
    AlertConfirmation,
    HomeFooter,
    LandingNav,
  },

  computed: {
    selectedProduct() {
      return this.$store.state.productStore.selectedObject;
    },

    user() {
      return this.$store.state.auth.user;
    },
  },

  async asyncData({ params, store }) {
    const id = params.id;

    if (params == null) {
      this.$router.push("/");
    } else {
      await store.dispatch("productStore/GET_OBJECT", id);
    }
  },
};
</script>

<style></style>
