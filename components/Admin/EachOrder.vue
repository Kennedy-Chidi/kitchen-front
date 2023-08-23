<template>
  <div class="w-form">
    <div class="transaction-table">
      <div class="table-head admin pro">
        <div class="table-filter foot">
          <div class="tb-filter-head">
            <div>
              <a href="#" class="user-link">{{ order.username }}</a>
            </div>
          </div>
        </div>
        <div class="order-price">N{{ order.totalAmount }}</div>
      </div>
      <div class="table">
        <div class="table-head-row">
          <div class="tb-sn"><div>S/N</div></div>
          <!-- <div class="tb-image"><div>Image</div></div> -->
          <div class="c30 name"><div>Product</div></div>
          <div class="c20 pro"><div>Price</div></div>
          <div class="c20 unit"><div>Units</div></div>
          <div class="c20 total"><div>Total</div></div>
        </div>
        <div
          v-for="(item, int) in order.description"
          :key="int"
          class="table-head-row body"
        >
          <div class="tb-sn pro orders">
            <div class="inner-label">S/N:</div>
            <div>{{ int + 1 }}</div>
          </div>
          <!-- <div class="tb-image pro orders">
                        <div class="inner-label">Image:</div>
                        <img
                          src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b79b7b42421ae3cbdb6ff8_ceo.png"
                          loading="lazy"
                          sizes="(max-width: 479px) 42vw, (max-width: 767px) 23vw, 100px"
                          srcset="
                            https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b79b7b42421ae3cbdb6ff8_ceo-p-500.png 500w,
                            https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b79b7b42421ae3cbdb6ff8_ceo-p-800.png 800w,
                            https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b79b7b42421ae3cbdb6ff8_ceo.png       953w
                          "
                          alt=""
                          class="item-img"
                        />
                      </div> -->
          <div class="c30 name pro">
            <div class="inner-label">Product:</div>
            <div>{{ item.productName }}</div>
          </div>
          <div class="c20 pro orders">
            <div class="inner-label">Price:</div>
            <div>N{{ formatNumber(item.productSellingPrice) }}</div>
          </div>
          <div class="c20 unit">
            <div class="inner-label">Units:</div>
            <div>{{ item.quantity }}</div>
          </div>
          <div class="c20 total">
            <div class="inner-label">Total:</div>
            <div>
              N{{ formatNumber(item.quantity * item.productSellingPrice) }}
            </div>
          </div>
        </div>
      </div>
      <div class="table-head orders">
        <div class="custom-btn edge" @click="approveOrder(order)">
          <div>Approve</div>
        </div>
        <div class="custom-btn edge line" @click="cancelOrder(order)">
          <div>Cancel</div>
        </div>
        <div class="newsletter-wrap pro">
          <input
            type="text"
            class="newsletter-input search w-input"
            v-model="message"
          /><img
            src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b84c6a5ba79f864dd5bd3a_sms-icon%201.svg"
            loading="lazy"
            alt=""
            class="newsletter-img"
          />
        </div>
      </div>
      <div class="order-sms">{{ message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    order: Object,
  },
  data() {
    return {
      message: "",
      sort: "-time",
      field: "",
      limit: 5,
      message: "",
      currentPage: 1,
    };
  },
  methods: {
    formatNumber(number) {
      if (!number) {
        return "0.00";
      }
      const options = { style: "decimal", maximumFractionDigits: 0 };
      return number.toLocaleString("en-US", options);
    },

    formartTime(data) {
      const date = new Date(data);
      return date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
    },

    formatDate(data) {
      function getOrdinalSuffix(day) {
        const suffixes = ["th", "st", "nd", "rd"];
        const mod = day % 100;
        return (
          day + (suffixes[(mod - 20) % 10] || suffixes[mod] || suffixes[0])
        );
      }

      if (!data) {
        return "";
      }
      const date = new Date(data);
      const day = date.getDate();
      const month = date.toLocaleString("default", { month: "short" });
      const year = date.getFullYear();

      return `${getOrdinalSuffix(day)} ${month}. ${year}`;
    },

    showConfirmBox() {
      this.$store.commit("settingsStore/SHOW_CONFIRM_BOX");
    },

    approveOrder(order) {
      const data = {
        id: order._id,
        query: `limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}&status=false&unit=${this.user.unit}&transactionType=Order`,
        transactionType: "ApproveOrder",
      };

      const msg = `Are you sure you want to approve this order by ${order.username}?`;
      const id = order._id;
      const type = "ApproveOrder";
      this.$store.commit("settingsStore/SHOW_CONFIRM_BOX", {
        msg,
        id,
        type,
        data,
      });
    },

    cancelOrder(order) {
      const data = {
        id: order._id,
        query: {
          limit: this.limit,
          page: this.currentPage,
          sort: this.sort,
          status: false,
          unit: order.salesRep.unit,
          transactionType: "Order",
        },
        time: new Date().getTime(),
        salesRep: order.salesRep,
        transactionType: "CancelledOrder",
        username: order.username,
        totalAmount: order.totalAmount,
      };
      const msg = `Are you sure you want to cancel this order by ${order.username}?`;
      const id = order._id;
      const type = "CancelledOrder";
      this.$store.commit("settingsStore/SHOW_CONFIRM_BOX", {
        msg,
        id,
        type,
        data,
      });
    },
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style></style>
