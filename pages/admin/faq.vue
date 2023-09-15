<template></template>

<script>
export default {
  data() {
    return {
      category: "",
      question: "",
      answer: "",

      faqs: [],

      showOverlay: false,
      overlayMsg: "",

      editingId: "",
      editingState: false,
      response: "",
      isError: false,
      showResponse: false,
      onRequest: false,
      showEditor: false,

      deleteId: "",
      sort: "-time",
      field: "",
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
      this.editId = "";
      this.editState = false;
      this.category = "";
      this.question = "";
      this.answer = "";
      this.deleteId = "";
    },

    toggleFAQStatus(id, status) {
      this.editingId = id;
      this.editingState = true;
      const form = {
        status: !status,
      };

      this.updateFAQ(form);
    },

    closeOverlay() {
      this.overlayMsg = "";
      this.showOverlay = false;
      this.deleteFAQ();
    },

    startDelete(id) {
      this.showOverlay = true;
      this.overlayMsg = "Are you sure you want to delete this FAQ?";
      this.deleteId = id;
    },

    prepareFAQEdit(faq) {
      this.answer = faq.answer;
      this.question = faq.question;
      this.category = faq.category;
      this.editingId = faq._id;
      this.editingState = true;
    },

    processFAQ() {
      this.onRequest = true;
      const form = {
        category: this.category,
        question: this.question,
        answer: this.answer,
      };

      if (this.editingState) {
        this.updateFAQ(form);
      } else {
        this.createFAQ(form);
      }
    },

    sortResult() {
      this.sort = this.sort == "-time" ? "time" : "-time";
      this.getFAQ();
    },

    paginate(page) {
      this.currentPage = page;
      this.getFAQ();
    },

    async updateFAQ(form) {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}`;
      try {
        const result = await this.$axios.patch(
          `/faq/${this.editingId}/${query}`,
          form
        );
        this.faqs = result.data.data;
        this.resultLength = result.data.resultLength;
        this.clearInputs();
        this.showResponseMsg("The FAQ was updated successfully", false);
      } catch (err) {
        this.showResponseMsg(err.response.data.message, true);
      }
    },

    async createFAQ(form) {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}`;
      try {
        const result = await this.$axios.post(`/faq/${query}`, form);
        this.faqs = result.data.data;
        this.resultLength = result.data.resultLength;
        this.clearInputs();
        this.showResponseMsg("The FAQ was created successfully", false);
      } catch (err) {
        this.showResponseMsg(err.response.data.message, true);
      }
    },

    async getFAQ() {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}`;
      try {
        const result = await this.$axios.get(`/faq/${query}`);
        this.faqs = result.data.data;
        this.resultLength = result.data.resultLength;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async deleteFAQ() {
      const query = `?limit=${this.limit}&page=${this.currentPage}&sort=${this.sort}`;
      try {
        const result = await this.$axios.delete(
          `/faq/${this.deleteId}/${query}`
        );
        this.faqs = result.data.data;
        this.resultLength = result.data.resultLength;
        this.deleteId = "";
      } catch (err) {
        this.showResponseMsg(err.response.data.message, true);
      }
    },
  },

  mounted() {
    this.getFAQ();
  },

  computed: {
    editorConfig() {
      return this.$store.state.editor.editorConfig;
    },
  },

  components: {
    "ckeditor-nuxt": () => {
      if (process.client) {
        return import("@blowstack/ckeditor-nuxt");
      }
    },
  },
};
</script>

<style></style>
