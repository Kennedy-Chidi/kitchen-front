export const state = () => ({
  initials: false,
  company: "",

  notices: [],
  noticeLength: 0,
  newNotices: 0,

  promos: [],
  promoLength: 0,

  productPromos: [],
  productPromoLength: 0,

  transactions: [],
  transactionLength: 0,

  categories: [],
});

export const getters = {};

export const mutations = {
  ON_INITIAL(state) {
    state.initials = true;
  },

  SET_COMPANY(state, company) {
    state.company = company;
  },

  SET_NOTIFICATIONS(state, messages) {
    state.notices = messages.results;
    state.noticeLength = messages.length;
  },

  SET_PROMOS(state, promos) {
    state.promos = promos.results;
    state.promoLength = promos.length;
  },

  SET_PRODUCT_PROMOS(state, promos) {
    state.productPromoLength = promos.length;

    const items = [];
    for (let x = 0; x < promos.results.length; x++) {
      promos.results[x].check = false;
      promos.results[x].cartNumber = 0;
      promos.results[x].quantity = 0;
      items.push(promos.results[x]);
    }

    state.productPromos = items;
  },

  SET_TRANSACTIONS(state, transactions) {
    state.transactions = transactions.results;
    state.transactionLength = transactions.length;
  },

  SET_ORDERS(state, orders) {
    state.orders = orders.results;
    state.orderLength = orders.length;
  },

  SET_SALES(state, sales) {
    state.sales = sales.results;
    state.saleLength = sales.length;
  },

  SET_CATEGORIES(state, categories) {
    state.categories = categories;
  },
};

export const actions = {
  async GET_OBJECT({ state, dispatch, commit, getters }, id) {
    if (state.productArray.length == 0) {
      await dispatch("GET_A_PRODUCT", id);
    } else {
      const object = getters.getObjectById(id);
      commit("SET_OBJECT", object);
    }
  },

  async GET_TRANSACTIONS({ commit }, query) {
    try {
      const result = await this.$axios.get(`/transactions/${query}`);
      commit("SET_TRANSACTIONS", result.data.data);
      return result;
    } catch (err) {
      return err;
    }
  },

  async GET_MESSAGES({ commit }, query) {
    try {
      const result = await this.$axios.get(
        `/notifications/user-messages/${query}`
      );
      commit("SET_NOTIFICATIONS", result.data.messages);

      return result;
    } catch (err) {
      return err;
    }
  },

  async UPDATE_USER({ commit }, payload) {
    const { form, id, query } = payload;
    try {
      const response = await this.$axios.patch(
        `/users/update-user/${id}/?${query}`,
        form
      );
      commit("SET_USERS", response.data);
      return response;
    } catch (error) {
      return error;
    }
  },

  async MAKE_STAFF({ commit }, payload) {
    const { form, query } = payload;
    try {
      const response = await this.$axios.post(`/officials/${query}`, form);
      commit("SET_USERS", response.data);
      commit("CLEAR_SELECTED_USERS", response.data);
      return response;
    } catch (error) {
      return error;
    }
  },

  async UPDATE_ME({ commit }, form) {
    try {
      const result = await this.$axios.patch(`/users/update-me`, form);
      return result;
    } catch (err) {
      return err;
    }
  },

  async UPDATE_PASSWORD({ commit }, form) {
    try {
      const result = await this.$axios.patch(`/users/update-password`, form);
      return result;
    } catch (err) {
      return err;
    }
  },

  async GET_USER_PROPERTIES({ commit }) {
    const user = this.$auth.user;
    try {
      const response = await this.$axios.post(`/users/all/store`, user);
      commit("SET_TRANSACTIONS", await response.data.transactions);
      commit("ON_INITIAL");
      commit("SET_NOTIFICATIONS", response.data.messages);
      commit("SET_PROMOS", response.data.promos);
      commit("SET_COMPANY", response.data.company);
      commit("SET_CATEGORIES", response.data.categories);
      commit("SET_PRODUCT_PROMOS", response.data.productPromos);
    } catch (err) {
      // console.log(err?.response?.data);
    }
  },

  async CANCEL_ORDER({ commit }, form) {
    const socket = this.$socket;
    socket.emit("cancelOrder", form);
  },

  async nuxtServerInit({ commit }) {
    const user = this.$auth.user;

    try {
      const response = await this.$axios.post(`/users/all/store`, user);

      commit("SET_TRANSACTIONS", response.data.transactions);
      commit("ON_INITIAL");
      commit("SET_NOTIFICATIONS", response.data.messages);
      commit("SET_PROMOS", response.data.promos);
      commit("SET_COMPANY", response.data.company);
      commit("SET_CATEGORIES", response.data.categories);
      commit("SET_PRODUCT_PROMOS", response.data.productPromos);
      // commit("SET_SALES", response.data.sales);
      // commit("SET_SALES", response.data.sales);
    } catch (err) {
      // console.log(err?.response?.data);
    }
  },
};
