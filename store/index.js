export const state = () => ({
  initials: false,
  banners: [],
  reviews: [],
  blogTutorials: [],
  blogTutorialLength: 0,

  partners: [],
  partnersLength: 0,

  company: "",

  blogs: [],
  blogLength: 0,

  selectedBlog: "",

  alertMsg: "",
  alertStatus: false,
  isLoading: false,
  companyArray: [],
  countries: [{ name: "Nigeria" }],
  lgas: [],
  stateArray: [],
  showAlertBox: false,
  units: [],

  showVerticalNav: false,

  showConfirmBox: false,
  confirmMsg: "",
  confirmData: "",
  confirmId: "",
  confirmType: "",
  notificationNum: 0,
  isPasswordChanged: false,
  expandNav: false,
});

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn; // auth object as default will be added in vuex state, when you initialize nuxt auth
  },

  getUserInfo(state) {
    return state.auth.user;
  },
};

export const mutations = {
  SET_INITIALS(state) {
    state.initials = true;
  },

  HIDE_CONFIRM_BOX(state) {
    state.showConfirmBox = false;
    state.confirmId = "";
    state.confirmType = "";
    state.confirmMsg = "";
    state.confirmData = "";
    state.isLoading = false;
  },

  SHOW_CONFIRM_BOX(state, payload) {
    const { msg, id, type, data } = payload;
    state.showConfirmBox = true;
    state.confirmId = id;
    state.confirmType = type;
    state.confirmMsg = msg;
    state.confirmData = data;
  },

  SHOW_ALERT_BOX(state, payload) {
    const { msg, status } = payload;
    state.showAlertBox = true;
    state.alertMsg = msg;
    state.alertStatus = status;
  },

  HIDE_ALERT_BOX(state) {
    state.showAlertBox = false;
    state.alertMsg = "";
    state.alertStatus = false;
  },

  SET_COUNTRIES(state, countries) {
    state.countries = countries;
  },

  SET_STATES(state, states) {
    state.stateArray = states;
  },

  SET_LGA(state, lgas) {
    state.lgas = lgas;
  },

  SET_UNIT(state, units) {
    state.units = units;
  },

  TOGGLE_NAV(state) {
    state.expandNav = !state.expandNav;
  },

  TOGGLE_LOADING(state) {
    state.isLoading = !state.isLoading;
  },

  HIDE_NAV(state) {
    state.expandNav = false;
  },

  SHOW_NAV(state) {
    state.showVerticalNav = true;
  },

  CLOSE_NAV(state) {
    state.showVerticalNav = false;
  },

  EXPAND_NAV(state) {
    state.expandNav = true;
  },

  INCREASE_NOTIFICATION(state) {
    state.notificationNum++;
  },

  UPDATE_ME(state, user) {
    state.auth.user = user;
  },

  SET_PASSWORD_CHANGED(state) {
    state.isPasswordChanged = !state.isPasswordChanged;
  },

  CLEAR_NOTIFICATION(state) {
    state.notifications = 0;
  },

  SELECT_BLOG(state, data) {
    state.selectedBlog = data;
  },

  SET_BANNERS(state, data) {
    state.banners = data.results;
  },

  SET_REVIEWS(state, data) {
    state.reviews = data.results;
  },

  SET_BLOG_TUTORIALS(state, blogs) {
    state.blogTutorialLength = blogs.length;
    state.blogTutorials = blogs.results;
  },

  SET_BLOGS(state, blogs) {
    state.blogsLength = blogs.length;
    state.blogs = blogs.results;
  },

  SET_PARTNERS(state, partners) {
    state.partnersLength = partners.length;
    state.partners = partners.results;
  },

  SET_COMPANY(state, company) {
    state.company = company;
  },
};

export const actions = {
  async SET_STATE({ commit }, payload) {
    const { query, states } = payload;

    try {
      const response = await this.$axios.get(`/places/state/${query}`);
      commit("SET_STATES", response.data.states);
      return response;
    } catch (error) {
      return error;
    }
  },

  async SET_LGA({ commit }, query) {
    try {
      const response = await this.$axios.get(`/places/lga/${query}`);
      commit("SET_LGA", response.data.data);
      return response.data.data;
    } catch (error) {
      return error;
    }
  },

  async SET_UNIT({ commit }, form) {
    const units = form.units;
    commit("SET_UNIT", units);
    // try {
    //   const response = await this.$axios.patch(`/places/lga`, query);
    //   commit("SET_LGA", response.data.data);
    //   return response.data.data;
    // } catch (error) {
    //   return error;
    // }
  },

  async PROCEED_CONFIRMATION({ commit }, payload) {
    const socket = this.$socket;

    const { confirmData, confirmId, confirmType } = payload;
    if (confirmType == "Buy") {
      confirmData.transactionType = "Order";
      socket.emit("orderGoods", confirmData);
    } else if (confirmType == "CancelledOrder") {
      socket.emit("cancelOrder", confirmData);
    }
  },

  async nuxtServerInit({ commit }) {
    try {
      const query = `?limit=40&country=Nigeria&sort=name`;
      const response = await this.$axios.get(`/places/state/${query}`);
      commit("SET_INITIALS");
      commit("SET_STATES", response.data.states);
      commit("SET_BANNERS", response.data.banners);
      commit("SET_BLOG_TUTORIALS", response.data.blogTutorials);
      commit("SET_REVIEWS", response.data.reviews);
      commit("SET_BLOGS", response.data.homeBlogs);
      commit("SET_PARTNERS", response.data.partners);
      commit("SET_COMPANY", response.data.company);
      return response;
    } catch (error) {
      return error;
    }
  },
};
