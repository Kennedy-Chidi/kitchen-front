<template></template>

<script>
export default {
  data() {
    return {
      partners: [],
      image: "",
      name: "",
      url: "",

      editingState: false,
      editingId: "",

      response: "",
      isError: false,
      showResponse: false,
      onRequest: false,
      showEditor: false,
      deleteId: "",

      showOverlay: false,
      overlayMsg: "",

      sort: "-time",
      field: "",
      limit: 3,
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

    clearInputs() {
      this.image = "";
      this.name = "";
      (this.url = ""((this.editingId = ""))), (this.editingState = false);
    },

    setPartnerLogo(e) {
      this.image = e.target.files[0];
    },

    preparePartnerEdit(partner) {
      this.editingId = partner._id;
      this.editingState = true;
      this.name = partner.name;
      this.url = partner.url;
    },

    sortResult() {
      this.sort = this.sort == "-time" ? "time" : "-time";
      this.getPartners();
    },

    paginate(page) {
      this.currentPage = page;
      this.getPartners();
    },

    processPartner() {
      this.onRequest = true;
      const form = new FormData();
      form.append("name", this.name);
      form.append("image", this.image);
      form.append("url", this.url);

      if (this.editingState) {
        this.updatePartner(form);
      } else {
        this.createPartner(form);
      }
    },

    closeOverlay() {
      this.showOverlay = false;
      this.overlayMsg = "";
      this.deletePartner();
    },

    prepareDelete(id) {
      this.deleteId = id;
      this.showOverlay = true;
      this.overlayMsg = "Are you sure you want to delete this partner?";
    },

    async updatePartner(form) {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}`;
      try {
        const result = await this.$axios.patch(
          `/partners/${this.editingId}/${query}`,
          form
        );
        this.clearInputs();
        this.partners = result.data.data;
        this.resultLength = result.data.resultLength;
        this.showResponseMsg(
          "The partner info was updated successfully",
          false
        );
      } catch (err) {
        this.showResponseMsg(err.response.data.message, true);
      }
    },

    async createPartner(form) {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}`;
      try {
        const result = await this.$axios.post(`/partners/${query}`, form);
        this.clearInputs();
        this.partners = result.data.data;
        this.resultLength = result.data.resultLength;
        this.showResponseMsg("The partner was created successfully", false);
      } catch (err) {
        this.showResponseMsg(err.response.data.message, true);
      }
    },

    async getPartners() {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}`;
      try {
        const result = await this.$axios.get(`/partners/${query}`);
        this.partners = result.data.data;
        this.resultLength = result.data.resultLength;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async deletePartner() {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}`;
      try {
        const result = await this.$axios.delete(
          `/partners/${this.deleteId}/${query}`
        );
        this.partners = result.data.data;
        this.resultLength = result.data.resultLength;
      } catch (err) {
        this.showResponseMsg(err.response.data.message, true);
      }
    },
  },
  mounted() {
    this.getPartners();
  },
  components: {},
};
</script>
<style></style>
