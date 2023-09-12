<template>
  <div
    v-show="user.status == 'Staff'"
    class="vertical-navigation"
    :class="{ active: expandNav }"
  >
    <i
      @click="toggleNav"
      class="material-symbols-outlined orange toggle"
      :class="{ active: expandNav }"
      >menu</i
    >
    <h1 class="dash-greeting" :class="{ opac: !expandNav }">Welcome Back</h1>
    <h1
      v-if="user && user.username"
      class="dash-greeting name"
      :class="{ opac: !expandNav }"
    >
      {{ user.username }}
    </h1>
    <nuxt-link
      to="/"
      class="flex-link w-inline-block"
      :class="{ active: route == 'index' }"
      ><div class="icon-wrap">
        <i class="material-symbols-outlined green">home</i>
      </div>
      <div>Home</div></nuxt-link
    >
    <nuxt-link
      to="/dashboard"
      class="flex-link w-inline-block"
      :class="{ active: route == 'admin' }"
      ><div class="icon-wrap">
        <i class="material-symbols-outlined green">grid_view</i>
      </div>
      <div>Dashboard</div></nuxt-link
    >
    <nuxt-link
      to="/dashboard/profile"
      class="flex-link w-inline-block"
      :class="{ active: route == 'dashboard-profile' }"
      ><div class="icon-wrap">
        <i class="material-symbols-outlined green">person</i>
      </div>
      <div>Profile</div></nuxt-link
    >
    <nuxt-link
      to="/dashboard/notifications"
      class="flex-link w-inline-block"
      :class="{ active: route == 'dashboard-notifications' }"
      ><div class="icon-wrap">
        <div class="badge active"><div>9+</div></div>
        <i class="material-symbols-outlined green">notifications</i>
      </div>
      <div>Notification</div></nuxt-link
    >
    <nuxt-link
      to="/dashboard/partnership"
      class="flex-link w-inline-block"
      :class="{ active: route == 'dashboard-partnership' }"
      ><div class="icon-wrap">
        <i class="material-symbols-outlined green">partner_exchange</i>
      </div>
      <div>Partnership</div></nuxt-link
    >
    <nuxt-link
      to="/dashboard/referrals"
      class="flex-link w-inline-block"
      :class="{ active: route == 'dashboard-referrals' }"
      ><div class="icon-wrap">
        <i class="material-symbols-outlined green">share</i>
      </div>
      <div>Referrals</div></nuxt-link
    >
    <div>
      <span
        :class="{ active: activateUsers }"
        @click="toggleUser"
        class="flex-link w-inline-block"
        ><div class="icon-wrap">
          <i class="material-symbols-outlined green">supervisor_account</i>
        </div>
        <div>Users</div>
        <i
          class="material-symbols-outlined cart right"
          :class="{ green: !activateUsers, white: activateUsers }"
          >keyboard_arrow_down</i
        >
      </span>
      <ul role="list" class="nav-inner-list prod" :class="{ active: isUser }">
        <li>
          <nuxt-link to="/admin/customers" class="flex-link w-inline-block"
            ><div class="icon-wrap">
              <i class="material-symbols-outlined green">groups</i>
            </div>
            <div>Customers</div></nuxt-link
          >
          <nuxt-link to="/admin/reviews" class="flex-link w-inline-block"
            ><div class="icon-wrap">
              <i class="material-symbols-outlined green">insert_comment</i>
            </div>
            <div>Reviews</div></nuxt-link
          >
          <nuxt-link to="/admin/staffs" class="flex-link w-inline-block"
            ><div class="icon-wrap">
              <i class="material-symbols-outlined green">group</i>
            </div>
            <div>Staffs</div></nuxt-link
          >
        </li>
      </ul>
    </div>
    <div>
      <span
        :class="{ active: activateProduct }"
        @click="toggleProduct"
        class="flex-link w-inline-block"
        ><div class="icon-wrap">
          <i
            class="material-symbols-outlined cart sm"
            :class="{ green: !activateProduct, white: activateProduct }"
            >local_mall</i
          >
        </div>
        <div>Products</div>
        <i
          class="material-symbols-outlined cart right"
          :class="{ green: !activateProduct, white: activateProduct }"
          >keyboard_arrow_down</i
        >
      </span>
      <ul
        role="list"
        class="nav-inner-list prod"
        :class="{ active: isProduct }"
      >
        <li>
          <nuxt-link
            to="/admin/product-settings"
            class="flex-link w-inline-block"
            ><div class="icon-wrap">
              <i class="material-symbols-outlined cart green sm"
                >settings_applications</i
              >
            </div>
            <div>Set Product</div></nuxt-link
          >
          <nuxt-link to="/admin/stock" class="flex-link w-inline-block"
            ><div class="icon-wrap">
              <i class="material-symbols-outlined cart green sm">inventory</i>
            </div>
            <div>View Stock</div></nuxt-link
          >
        </li>
      </ul>
    </div>
    <div>
      <span
        :class="{ active: activateTransact }"
        @click="toggleTransact"
        class="flex-link w-inline-block"
        ><div class="icon-wrap">
          <i class="material-symbols-outlined green sm">payments</i>
        </div>
        <div>Transactions</div>
        <i
          class="material-symbols-outlined cart right"
          :class="{ green: !activateTransact, white: activateTransact }"
          >keyboard_arrow_down</i
        >
      </span>
      <ul
        role="list"
        class="nav-inner-list transact"
        :class="{ active: isTransact }"
      >
        <li>
          <nuxt-link to="/admin/transactions" class="flex-link w-inline-block"
            ><div class="icon-wrap">
              <i class="material-symbols-outlined green sm"
                >add_shopping_cart</i
              >
            </div>
            <div>General</div></nuxt-link
          >
          <nuxt-link to="/admin/sales" class="flex-link w-inline-block"
            ><div class="icon-wrap">
              <i class="material-symbols-outlined green sm">shopping_cart</i>
            </div>
            <div>Sales</div></nuxt-link
          >
          <nuxt-link to="/admin/orders" class="flex-link w-inline-block"
            ><div class="icon-wrap">
              <i class="material-symbols-outlined green sm"
                >add_shopping_cart</i
              >
            </div>
            <div>Online Orders</div></nuxt-link
          >

          <nuxt-link to="/admin/purchase" class="flex-link w-inline-block"
            ><div class="icon-wrap">
              <img
                src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6d38612ddf087a955f4de_user.svg"
                loading="lazy"
                alt=""
                class="nav-icon cart"
              />
            </div>
            <div>Purchase</div></nuxt-link
          >
          <nuxt-link to="/admin/expenses" class="flex-link w-inline-block"
            ><div class="icon-wrap">
              <img
                src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6d38612ddf087a955f4de_user.svg"
                loading="lazy"
                alt=""
                class="nav-icon cart"
              />
            </div>
            <div>Expenses</div></nuxt-link
          >
          <nuxt-link to="/admin/damages" class="flex-link w-inline-block"
            ><div class="icon-wrap">
              <img
                src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6d38612ddf087a955f4de_user.svg"
                loading="lazy"
                alt=""
                class="nav-icon cart"
              />
            </div>
            <div>Damages</div></nuxt-link
          >
        </li>
      </ul>
    </div>
    <div>
      <span
        :class="{ active: activatePage }"
        @click="togglePage"
        class="flex-link w-inline-block"
        ><div class="icon-wrap">
          <img
            src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6d38612ddf087a955f4de_user.svg"
            loading="lazy"
            alt=""
            class="nav-icon cart"
          />
        </div>
        <div>Page Settings</div>
        <i
          class="material-symbols-outlined cart right"
          :class="{ green: !activatePage, white: activatePage }"
          >keyboard_arrow_down</i
        >
      </span>
      <ul
        role="list"
        class="nav-inner-list setting"
        :class="{ active: isPage }"
      >
        <li>
          <nuxt-link to="/admin/about" class="flex-link w-inline-block"
            ><div class="icon-wrap">
              <img
                src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6d38612ddf087a955f4de_user.svg"
                loading="lazy"
                alt=""
                class="nav-icon cart"
              />
            </div>
            <div>About</div></nuxt-link
          ><nuxt-link to="/admin/banner" class="flex-link w-inline-block"
            ><div class="icon-wrap">
              <img
                src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6d38612ddf087a955f4de_user.svg"
                loading="lazy"
                alt=""
                class="nav-icon cart"
              />
            </div>
            <div>Banner</div></nuxt-link
          ><nuxt-link to="/admin/terms" class="flex-link w-inline-block"
            ><div class="icon-wrap">
              <img
                src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6d38612ddf087a955f4de_user.svg"
                loading="lazy"
                alt=""
                class="nav-icon cart"
              />
            </div>
            <div>Terms</div></nuxt-link
          ><nuxt-link to="/admin/blog" class="flex-link w-inline-block"
            ><div class="icon-wrap">
              <img
                src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6d38612ddf087a955f4de_user.svg"
                loading="lazy"
                alt=""
                class="nav-icon cart"
              />
            </div>
            <div>Blog</div></nuxt-link
          ><nuxt-link to="/admin/faq" class="flex-link w-inline-block"
            ><div class="icon-wrap">
              <img
                src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6d38612ddf087a955f4de_user.svg"
                loading="lazy"
                alt=""
                class="nav-icon cart"
              />
            </div>
            <div>FAQ</div></nuxt-link
          ><nuxt-link to="/admin/partners" class="flex-link w-inline-block"
            ><div class="icon-wrap">
              <img
                src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6d38612ddf087a955f4de_user.svg"
                loading="lazy"
                alt=""
                class="nav-icon cart"
              />
            </div>
            <div>Partners</div></nuxt-link
          >
        </li>
      </ul>
    </div>
    <div>
      <span
        :class="{
          active: activateCompany,
        }"
        @click="toggleCompany"
        class="flex-link w-inline-block"
        ><div class="icon-wrap">
          <i class="material-symbols-outlined cart green sm">apartment</i>
        </div>
        <div>Company</div>
        <i
          class="material-symbols-outlined cart right"
          :class="{ green: !activateCompany, white: activateCompany }"
          >keyboard_arrow_down</i
        >
      </span>
      <ul
        role="list"
        class="nav-inner-list pages"
        :class="{ active: isCompany }"
      >
        <li>
          <nuxt-link to="/admin/company" class="flex-link w-inline-block"
            ><div class="icon-wrap">
              <img
                src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6d38612ddf087a955f4de_user.svg"
                loading="lazy"
                alt=""
                class="nav-icon cart"
              />
            </div>
            <div>General</div></nuxt-link
          ><nuxt-link to="/admin/emails" class="flex-link w-inline-block"
            ><div class="icon-wrap">
              <i class="material-symbols-outlined cart green sm"
                >attach_email</i
              >
            </div>
            <div>Emails</div></nuxt-link
          ><nuxt-link to="/admin/notifications" class="flex-link w-inline-block"
            ><div class="icon-wrap">
              <i class="material-symbols-outlined cart green sm"
                >edit_notifications</i
              >
            </div>
            <div>Notifications</div></nuxt-link
          ><nuxt-link to="/admin/sms" class="flex-link w-inline-block"
            ><div class="icon-wrap">
              <i class="material-symbols-outlined cart green sm">sms</i>
            </div>
            <div>SMS Settings</div></nuxt-link
          >
          <nuxt-link to="/admin/staff-settings" class="flex-link w-inline-block"
            ><div class="icon-wrap">
              <img
                src="https://uploads-ssl.webflow.com/64b6be9c94ade9f93069468e/64b6d38612ddf087a955f4de_user.svg"
                loading="lazy"
                alt=""
                class="nav-icon cart"
              />
            </div>
            <div>Staff Settings</div></nuxt-link
          >
          <nuxt-link to="/admin/promotion" class="flex-link w-inline-block"
            ><div class="icon-wrap">
              <i class="material-symbols-outlined green">brand_awareness</i>
            </div>
            <div>Promo Settings</div></nuxt-link
          >
        </li>
      </ul>
    </div>
    <span @click="logout" class="flex-link w-inline-block"
      ><div class="icon-wrap">
        <i class="material-symbols-outlined cart green sm">logout</i>
      </div>
      <div>Logout</div></span
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      isUser: false,
      activateUsers: false,
      isProduct: false,
      activateProduct: false,
      isTransact: false,
      activateTransact: false,
      isPage: false,
      activatePage: false,
      isCompany: false,
      activateCompany: false,
      route: "",
      routeTransact: [
        "admin-sales",
        "admin-orders",
        "admin-purchase",
        "admin-expenses",
        "admin-damages",
      ],
      routePage: [
        "admin-about",
        "admin-banner",
        "admin-blog",
        "admin-faq",
        "admin-terms",
        "admin-partners",
      ],
      routeCompany: [
        "admin-company",
        "admin-notifications",
        "admin-emails",
        "admin-sms",
        "admin-staff-settings",
      ],
    };
  },
  methods: {
    toggleNav() {
      this.$store.commit("TOGGLE_NAV");
    },

    toggleUser() {
      this.$store.commit("EXPAND_NAV");
      this.isUser = !this.isUser;
    },

    toggleProduct() {
      this.$store.commit("EXPAND_NAV");
      this.isProduct = !this.isProduct;
    },

    togglePage() {
      this.$store.commit("EXPAND_NAV");
      this.isPage = !this.isPage;
    },

    toggleTransact() {
      this.$store.commit("EXPAND_NAV");
      this.isTransact = !this.isTransact;
    },

    toggleCompany() {
      this.$store.commit("EXPAND_NAV");
      this.isCompany = !this.isCompany;
      this.activateTransact = false;
      this.activatePage = false;
    },

    checkCompany(route) {
      if (
        route == "admin-promotion" ||
        route.includes("company") ||
        route.includes("notifications")
      ) {
        this.activateCompany = true;
      } else {
        this.activateCompany = false;
      }
    },

    closeNav() {
      this.$store.commit("CLOSE_NAV");
    },

    checkRoutes() {
      if (this.routeTransact.includes(this.route)) {
        this.activateTransact = true;
      }

      if (this.routePage.includes(this.route)) {
        this.activatePage = true;
      }

      if (this.routeCompany.includes(this.route)) {
        this.activateCompany = true;
      }
    },
    async logout() {
      await this.$auth.logout();
      this.$router.push("/home");
      this.closeNav();
    },
  },

  computed: {
    expandNav() {
      return this.$store.state.expandNav;
    },

    cartProperties() {
      return this.$store.state.productStore.purchaseProperties;
    },

    isAuthenticated() {
      return this.$store.getters.isAuthenticated; // it check if user isAuthenticated
    },

    user() {
      return this.$store.getters.getUserInfo;
    },
  },

  mounted() {
    this.route = this.$route.name;
    this.checkRoutes();
    this.checkCompany(this.route);
  },
};
</script>

<style></style>
