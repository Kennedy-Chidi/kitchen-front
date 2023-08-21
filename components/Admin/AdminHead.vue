<template>
  <div class="top-header2">
    <div class="success-alert">
      <div class="alert-circle">
        <img
          src="https://uploads-ssl.webflow.com/64795bc5f99dfa06fdf065a8/647cad13e9b140d6c4b812cd_check.svg"
          loading="lazy"
          alt=""
          class="image"
        />
      </div>
      <h1 class="success-title message">
        Your profile has been uploaded successfully
      </h1>
    </div>
    <h1 class="logo">LOGO</h1>
    <div class="top-greetings2"></div>
    <div class="top-right">
      <nuxt-link to="/admin/notifications" class="icon-holders2"
        ><img
          src="/images/notification-icon.svg"
          loading="lazy"
          alt=""
          class="top-icons2"
        />
        <div class="icon-badge notice"><div>9+</div></div></nuxt-link
      >
      <div class="icon-holders2" @click="logout">
        <img
          src="/images/logout-icon.svg"
          loading="lazy"
          alt=""
          class="top-icons2"
        />
      </div>
      <img
        src="/images/close-nav.svg"
        loading="lazy"
        alt=""
        class="menu-icon2"
        @click="toggleDashboardNav"
      />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [{ rel: "stylesheet", type: "text/css", href: "/css/admin.css" }],
    };
  },

  data() {
    return {
      company: "",
    };
  },
  methods: {
    toggleDashboardNav() {
      this.$store.commit("TOGGLE_NAV");
    },

    async logout() {
      await this.$auth.logout();
      this.$router.push("/");
    },
  },

  mounted() {},
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
  head() {
    return {
      link: [{ rel: "stylesheet", type: "text/css", href: "/css/admin.css" }],
    };
  },
};
</script>

<style>
.user-stat {
  margin-right: 10px;
}

.search-flex {
  background-color: #e9edff;
  border: 0 solid #000;
  border-radius: 3px;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;
  padding-right: 5px;
  display: flex;
  position: relative;
}

.search-flex.expense {
  width: 50%;
  min-height: 15vh;
  padding-top: 10px;
}

.search-flex.banner {
  width: 48%;
  min-height: 20vh;
  padding-top: 10px;
}

.icons-holders2 {
  cursor: pointer;
}

@media screen and (max-width: 767px) {
  .view-receipt {
    padding-left: 5px;
    padding-right: 5px;
    font-size: 12px;
  }
}

.view-receipt {
  width: 150px;
  color: #505050;
  cursor: pointer;
  background-color: #f5f6ff;
  border-radius: 3px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  line-height: 15px;
  text-decoration: none;
  display: flex;
}
</style>
