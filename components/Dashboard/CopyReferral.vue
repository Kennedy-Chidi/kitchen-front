<template>
  <div class="table-head admin pro">
    <div class="order-price link">Copy and Send your Referral Link</div>
    <div class="newsletter-wrap pro">
      <input
        type="text"
        class="newsletter-input link w-input"
        maxlength="256"
        v-model="copiedValue"
        placeholder="kitchengrace.io?username=Kenny"
      />
      <i
        @click="copyText"
        class="material-symbols-outlined orange newsletter-img"
        >content_copy</i
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copiedValue: "",
    };
  },
  methods: {
    copyText() {
      navigator.clipboard.writeText(this.copiedValue).catch((error) => {
        console.error("Copy failed:", error);
      });
    },
  },
  mounted() {
    this.copiedValue = `${this.company.companyDomain}/?ref=${this.user.username}`;
  },

  computed: {
    user() {
      return this.$store.state.auth.user;
    },
    company() {
      return this.$store.state.userStore.company;
    },
  },
};
</script>

<style></style>
