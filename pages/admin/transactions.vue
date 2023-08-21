<template></template>

<script>
export default {
  data() {
    return {
      newLimit: 5,
      sort: "-time",
      limit: 5,
      resultLength: "",
      currentPage: 1,
      pages: function () {
        let array = [];
        let x = Math.ceil(this.resultLength / this.limit);
        for (let i = 0; i < x; i++) {
          array.push("i");
        }
        return array;
      },

      timeFrom: "",
      timeTo: "",

      transactions: [],
      noSignedUser: false,
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

    formatNumber(number) {
      if (!number) {
        return "0.00";
      }
      const options = { style: "decimal", maximumFractionDigits: 0 };
      return number.toLocaleString("en-US", options);
    },

    formartTime(data) {
      if (!data) {
        return "0:0";
      }
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

    sortResult() {
      this.sort = this.sort == "-time" ? "time" : "-time";
      this.getTransactions();
    },

    paginate(page) {
      this.currentPage = page;
      this.getTransactions();
    },

    refresh() {
      this.timeFrom = "";
      this.timeTo = "";
      this.getTransactions();
    },

    setFrom(e) {
      this.timeFrom = `&time[gte]=${new Date(e.target.value).getTime()}`;
      this.getTransactions();
    },

    setTo(e) {
      this.timeTo = `&time[lte]=${new Date(e.target.value).getTime()}`;
      this.getTransactions();
    },

    closeOverlay() {
      this.showOverlay = false;
      this.overlayMsg = "";
      if (this.deleteId != "" && this.overlaySignal == "single") {
        this.deleteuser();
      } else {
        this.deletetransactions();
      }
    },

    async fetchItems(e) {
      const data = {
        keyWord: e.target.value,
        limit: this.limit,
        page: this.currentPage,
      };
      this.$socket.emit("fetchItems", data);
    },

    async getTransactions() {
      const query = `?limit=${this.limit}&page=${this.currentPage}${this.time}`;
      try {
        const result = await this.$axios.get(`/transactions/${query}`);
        this.transactions = result.data.data;
        if (this.transactions.length == 0) {
          this.noSignedUser = true;
        }
        this.resultLength = result.data.resultLength;
      } catch (err) {
        this.showResponseMsg(err.response.data.message, true);
      }
    },
  },
  mounted() {
    this.getTransactions();

    this.$socket.on("fetchedItems", (data, cb) => {
      this.transactions = data;
    });
  },
  computed: {
    time() {
      return `${this.timeFrom}${this.timeTo}`;
    },
  },
};
</script>

<style></style>
