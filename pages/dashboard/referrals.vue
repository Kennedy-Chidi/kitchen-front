<template>
  <div class="grace bonus">
    <alert-box />
    <alert-confirmation />
    <cart-items />
    <div class="custom-container">
      <div class="body-flex">
        <div class="content-body">
          <div class="nav-pag">
            <nuxt-link to="/" class="home-txt">Home - </nuxt-link
            ><nuxt-link to="/dashboard/referrals" class="page-txt"
              >Referrals</nuxt-link
            >
          </div>
          <div class="w-form">
            <div class="transaction-table">
              <copy-referral />
              <div class="table">
                <div class="table-head-row">
                  <div class="tb-sn"><div>S/N</div></div>
                  <div class="c30 spend"><div>Bonus Name</div></div>
                  <div class="c20 spend"><div>Amount</div></div>
                  <div class="c20 time"><div>Time</div></div>
                  <div class="c20 total spend"><div>Status</div></div>
                </div>
                <div class="table-head-row body">
                  <div class="tb-sn spend">
                    <div class="inner-label">S/N:</div>
                    <div>1</div>
                  </div>
                  <div class="c30 spend">
                    <div class="inner-label">Name:</div>
                    <div>Gino Tomato</div>
                  </div>
                  <div class="c20 spend">
                    <div class="inner-label">Amount:</div>
                    <div>N45,000</div>
                  </div>
                  <div class="c20 time spend">
                    <div class="inner-label">Time:</div>
                    <div>4:49PM, 24th Jul 2023</div>
                  </div>
                  <div class="c20 total bnus left">
                    <div class="inner-label">Status:</div>
                    <div class="custom-btn edge bonus">
                      <div>Pending</div>
                    </div>
                  </div>
                </div>
                <div class="table-head-row body even">
                  <div class="tb-sn spend">
                    <div class="inner-label">S/N:</div>
                    <div>2</div>
                    <div class="check-box"><div class="check"></div></div>
                  </div>
                  <div class="c30 spend">
                    <div class="inner-label">Name:</div>
                    <div>Gino Tomato</div>
                  </div>
                  <div class="c20 spend">
                    <div class="inner-label">Amount:</div>
                    <div>N45,000</div>
                  </div>
                  <div class="c20 time spend">
                    <div class="inner-label">Time:</div>
                    <div>4:49PM, 24th Jul 2023</div>
                  </div>
                  <div class="c20 total bnus">
                    <div class="inner-label">Status:</div>
                    <div class="custom-btn edge bonus used">
                      <div>Collected</div>
                    </div>
                  </div>
                </div>
                <div class="table-head-row body">
                  <div class="tb-sn spend">
                    <div class="inner-label">S/N:</div>
                    <div>3</div>
                    <div class="check-box"><div class="check"></div></div>
                  </div>
                  <div class="c30 spend">
                    <div class="inner-label">Name:</div>
                    <div>Gino Tomato</div>
                  </div>
                  <div class="c20 spend">
                    <div class="inner-label">Amount:</div>
                    <div>N45,000</div>
                  </div>
                  <div class="c20 time spend">
                    <div class="inner-label">Time:</div>
                    <div>4:49PM, 24th Jul 2023</div>
                  </div>
                  <div class="c20 total bnus left">
                    <div class="inner-label">Status:</div>
                    <div class="custom-btn edge bonus">
                      <div>Pending</div>
                    </div>
                  </div>
                </div>
                <div class="pagination table">
                  <div class="page-result">
                    <h3 class="page-result-txt">Results: 20, Page 1 of 5</h3>
                  </div>
                  <ul role="list" class="pagination-list">
                    <li class="page">
                      <img
                        src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b72debe03037906a74116a_thin-chevron-arrow-left-icon%201.svg"
                        loading="lazy"
                        alt=""
                        class="page-icon"
                      />
                    </li>
                    <li class="page"><div>1</div></li>
                    <li class="page active"><div>2</div></li>
                    <li class="page"><div>3</div></li>
                    <li class="page">
                      <img
                        src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b72deb58cf5ff7bacff87c_thin-chevron-arrow-left-icon%202.svg"
                        loading="lazy"
                        alt=""
                        class="page-icon"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-component />
  </div>
</template>

<script>
import AlertBox from "../../components/AlertBox.vue";
import AlertConfirmation from "../../components/AlertConfirmation.vue";
import CartItems from "../../components/CartItems.vue";
import CompanyAds from "../../components/CompanyAds.vue";
import CopyReferral from "../../components/Dashboard/CopyReferral.vue";
import FooterComponent from "../../components/FooterComponent.vue";
import HorizontalNav from "../../components/HorizontalNav";
import MobileBottomNav from "../../components/MobileBottomNav.vue";
import VerticalNav from "../../components/VerticalNav.vue";
export default {
  components: {
    FooterComponent,
    MobileBottomNav,
    VerticalNav,
    CompanyAds,
    HorizontalNav,
    AlertBox,
    AlertConfirmation,
    CartItems,
    CopyReferral,
  },

  computed: {
    company() {
      return this.$store.state.userStore.company;
    },
  },
};
</script>

<style></style>
