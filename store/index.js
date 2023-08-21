export const state = () => ({
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

  // navState: false,
  // dashboardNavState: false,
  // fileURL: "",
  // referral: "",
  // confirmMsg: "",
  // confirmState: true,
  // showDashboardNav: false,
  // productArray: [],
  // purchaseProperties: {
  //   totalQuantity: 0,
  //   totalAmount: 0,
  //   categories: [],
  // },
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

  // TOGGLE_NAV(state) {
  //   state.dashboardNavState = !state.dashboardNavState;
  // },
  // HIDE_DASHBOARD_NAV(state) {
  //   state.dashboardNavState = false;
  // },
  // HIDE_NAV(state) {
  //   state.adminNavState = false;
  // },
  // SET_REFERRAL(state, referral) {
  //   state.referral = referral;
  // },
  // SET_URL(state, URL) {
  //   state.fileURL = URL;
  // },
  // ADD_TO_CART(state, data) {
  //   const existingItem = state.products.find(
  //     (item) => item.productName === data.productName
  //   );
  //   if (existingItem) {
  //     existingItem.quantity++;
  //   } else {
  //     const product = {
  //       productSellingPrice: data.productSellingPrice,
  //       productName: data.productName,
  //       productId: data._id,
  //       productImageUrl: data.productImageUrl,
  //       quantity: 1,
  //     };
  //     state.products.push(product);
  //   }
  //   state.purchaseProperties.totalQuantity++;
  //   state.purchaseProperties.totalAmount += data.productSellingPrice;
  //   data.productCategories.forEach((el) => {
  //     state.purchaseProperties.categories.push(el);
  //   });
  // },
  // REMOVE_FROM_CART(state, data) {
  //   for (let i = 0; i < state.products.length; i++) {
  //     if (state.products[i].productName == data.productName) {
  //       if (state.products[i].quantity > 1) {
  //         state.products[i].quantity--;
  //       } else {
  //         state.products.splice(i, 1);
  //       }
  //       state.purchaseProperties.totalQuantity--;
  //       state.purchaseProperties.totalAmount -= data.productSellingPrice;
  //       const list = state.purchaseProperties.categories;
  //       data.productCategories = Array.isArray(data.productCategories)
  //         ? data.productCategories
  //         : [data.productCategories];
  //       data.productCategories.forEach((el) => {
  //         for (let i = 0; i < list.length; i++) {
  //           if (el == list[i]) {
  //             list.splice(i, 1);
  //           }
  //         }
  //       });
  //     }
  //   }
  // },
  // CLEAR_CART(state) {
  //   state.products = [];
  //   state.purchaseProperties.totalQuantity = 0;
  //   state.purchaseProperties.totalAmount = 0;
  // },
  // TOGGLE_DASHBOARD_NAV(state) {
  //   state.showDashboardNav = !state.showDashboardNav;
  // },
  // INCREASE_NOTIFICATION(state) {
  //   state.notifications++;
  // },
};

export const actions = {
  async SET_STATE({ commit }, payload) {
    const { query, states } = payload;
    commit("SET_STATES", states);

    try {
      const response = await this.$axios.get(`/places/state/${query}`);
      commit("SET_STATES", response.data.data);
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

  async SET_UNIT({ commit }, units) {
    commit("SET_UNIT", units);
  },

  async PROCEED_CONFIRMATION({ commit }, payload) {
    const socket = this.$socket;

    const { confirmData, confirmId, confirmType } = payload;
    if (confirmType == "Buy") {
      confirmData.transactionType = "Order";
      socket.emit("orderGoods", confirmData);
    } else if (confirmType == "CancelledOrder") {
      socket.emit("cancelOrder", confirmData);
    } else if (confirmType == "ApproveOrder") {
      socket.emit("approveOrder", confirmData);
    }
  },

  async nuxtServerInit({ commit }) {
    try {
      const query = `?limit=40&country=Nigeria`;
      const response = await this.$axios.get(`/places/state/${query}`);
      commit("SET_STATES", response.data.data);
      return response;
    } catch (error) {
      return error;
    }
  },
};
