export const state = () => ({
  initials: false,

  selectedPromotions: [],
  isPromotionChecked: false,
  promotionLength: 0,
  promotions: [],

  notificationLength: 0,
  notifications: [],
  selectedNotifications: [],
  isNotificationChecked: false,

  countries: [],

  orders: [],
  orderLength: 0,

  showConfirmBox: false,
  confirmBoxMsg: "",
  confirmBoxId: "",
  products: [],
  selectedProducts: [],
  productLength: 0,
  isProductsChecked: false,
  isShowingCart: false,
  selectedProduct: "",
  selectedProductSettings: [],
  selectedObject: "",
  cartProducts: [],
  purchaseProperties: {
    totalQuantity: 0,
    totalAmount: 0,
    categories: [],
  },

  usersArray: [],
  staffArray: [],
  selectedUsers: [],
  selectedStaffs: [],
  userLength: "",
  staffLength: "",
  isUsersChecked: false,
  isStaffsChecked: false,
  staffSettingsArray: [],
  selectedStaffSettings: [],
  staffSettingsLength: "",
  isStaffSettingsChecked: false,

  staffPositions: [],
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
  SET_NOTIFICATIONS(state, data) {
    state.notificationLength = data.length;
    let array = [];
    data.results.forEach((el) => {
      el.checked = false;
      array.push(el);
    });
    state.notifications = array;
    state.isNotificationChecked = false;
    state.selectedNotifications = [];
  },

  SET_PROMOTIONS(state, data) {
    state.promotionLength = data.length;
    let array = [];
    data.results.forEach((el) => {
      el.checked = false;
      array.push(el);
    });
    state.promotions = array;
    state.isPromotionChecked = false;
    state.selectedPromotions = [];
  },

  SET_COUNTRIES(stat, data) {
    state.countries = data;
  },

  SET_USERS(state, users) {
    state.userLength = users.length;
    const items = [];
    for (let x = 0; x < users.results.length; x++) {
      users.results[x].checked = false;
      items.push(users.results[x]);
    }
    state.usersArray = items;
  },

  SET_STAFFS(state, staffs) {
    state.staffLength = staffs.length;
    const items = [];
    for (let x = 0; x < staffs.results.length; x++) {
      staffs.results[x].checked = false;
      items.push(staffs.results[x]);
    }
    state.staffArray = items;
  },

  SET_STAFF_POSITIONS(state, result) {
    state.staffPositions = result.data;
  },

  CHECK_ALL_USERS(state) {
    const newArray = [];
    state.isUsersChecked = !state.isUsersChecked;
    if (state.isUsersChecked) {
      state.usersArray.forEach((el) => {
        el.checked = true;
        newArray.push(el);
      });
      state.selectedUsers = state.usersArray;
    } else {
      state.usersArray.forEach((el) => {
        el.checked = false;
        newArray.push(el);
      });
      state.selectedUsers = [];
    }

    state.usersArray = newArray;
  },

  CHECK_ALL_STAFFS(state) {
    const newArray = [];
    state.isStaffsChecked = !state.isStaffsChecked;
    if (state.isStaffsChecked) {
      state.staffArray.forEach((el) => {
        el.checked = true;
        newArray.push(el);
      });
      state.selectedStaffs = state.staffArray;
    } else {
      state.staffArray.forEach((el) => {
        el.checked = false;
        newArray.push(el);
      });
      state.selectedStaffs = [];
    }

    state.staffArray = newArray;
  },

  TOGGLE_USER(state, int) {
    state.usersArray[int].checked = !state.usersArray[int].checked;

    const user = state.usersArray[int];
    const exists = state.selectedUsers.some((obj) => obj._id === user._id);
    if (!exists) {
      state.selectedUsers.push(user);
      if (state.selectedUsers.length == state.usersArray.length) {
        state.isUsersChecked = true;
      }
    } else {
      state.selectedUsers = state.selectedUsers.filter(
        (obj) => obj._id !== user._id
      );
      if (state.selectedUsers.length == 0) {
        state.isUsersChecked = false;
        state.selectedUsers = [];
      }
    }
  },

  TOGGLE_STAFF(state, int) {
    state.staffArray[int].checked = !state.staffArray[int].checked;

    const user = state.staffArray[int];
    const exists = state.selectedStaffs.some((obj) => obj._id === user._id);
    if (!exists) {
      state.selectedStaffs.push(user);
      if (state.selectedStaffs.length == state.staffArray.length) {
        state.isStaffsChecked = true;
      }
    } else {
      state.selectedStaffs = state.selectedStaffs.filter(
        (obj) => obj._id !== user._id
      );
      if (state.selectedStaffs.length == 0) {
        state.isStaffsChecked = false;
        state.selectedStaffs = [];
      }
    }
  },

  SET_STAFF_SETTINGS(state, result) {
    state.staffSettingsLength = result.resultLength;
    const items = [];
    for (let x = 0; x < result.data.length; x++) {
      result.data[x].checked = false;
      items.push(result.data[x]);
    }
    state.staffSettingsArray = items;
  },

  TOGGLE_STAFF_SETTINGS(state, int) {
    state.staffSettingsArray[int].checked =
      !state.staffSettingsArray[int].checked;

    const staff = state.staffSettingsArray[int];
    const exists = state.selectedStaffSettings.some(
      (obj) => obj._id === staff._id
    );
    if (!exists) {
      state.selectedStaffSettings.push(staff);
      if (
        state.selectedStaffSettings.length == state.staffSettingsArray.length
      ) {
        state.isStaffSettingsChecked = true;
      }
    } else {
      state.selectedStaffSettings = state.selectedStaffSettings.filter(
        (obj) => obj._id !== staff._id
      );
      if (state.selectedStaffSettings.length == 0) {
        state.isStaffSettingsChecked = false;
      }
    }
  },

  CLEAR_SELECTED_USERS(state) {
    state.selectedUsers = [];
  },

  CLEAR_SELECTED_STAFFS(state) {
    state.selectedStaffs = [];
    state.isStaffsChecked = false;
  },

  CHECK_ALL_STAFF_SETTINGS(state) {
    const newArray = [];
    state.isStaffSettingsChecked = !state.isStaffSettingsChecked;
    if (state.isStaffSettingsChecked) {
      state.staffSettingsArray.forEach((el) => {
        el.checked = true;
        newArray.push(el);
      });
      state.selectedStaffSettings = state.staffSettingsArray;
    } else {
      state.staffSettingsArray.forEach((el) => {
        el.checked = false;
        newArray.push(el);
      });
      state.selectedStaffSettings = [];
    }

    state.staffSettingsArray = newArray;
  },

  TOGGLE_INITIAL(state) {
    state.initials = !state.initials;
  },

  TOGGLE_NOTIFICATION(state, int) {
    state.notifications[int].checked = !state.notifications[int].checked;

    const item = state.notifications[int];
    const exists = state.selectedNotifications.some(
      (obj) => obj._id === item._id
    );
    if (!exists) {
      state.selectedNotifications.push(item);
      if (state.selectedNotifications.length == state.notifications.length) {
        state.isNotificationChecked = true;
      }
    } else {
      state.selectedNotifications = state.selectedNotifications.filter(
        (obj) => obj._id !== item._id
      );
      if (state.selectedNotifications.length == 0) {
        state.isNotificationChecked = false;
        state.selectedNotifications = [];
      }
    }
  },

  TOGGLE_PROMO(state, int) {
    state.promotions[int].checked = !state.promotions[int].checked;

    const item = state.promotions[int];
    const exists = state.selectedPromotions.some((obj) => obj._id === item._id);
    if (!exists) {
      state.selectedPromotions.push(item);
      if (state.selectedPromotions.length == state.promotions.length) {
        state.isPromotionChecked = true;
      }
    } else {
      state.selectedPromotions = state.selectedPromotions.filter(
        (obj) => obj._id !== item._id
      );
      if (state.selectedPromotions.length == 0) {
        state.isPromotionChecked = false;
        state.selectedPromotions = [];
      }
    }
  },

  CHECK_ALL_NOTIFICATIONS(state) {
    const newArray = [];
    state.isNotificationChecked = !state.isNotificationChecked;
    if (state.isNotificationChecked) {
      state.notifications.forEach((el) => {
        el.checked = true;
        newArray.push(el);
      });
      state.selectedNotifications = state.notifications;
    } else {
      state.notifications.forEach((el) => {
        el.checked = false;
        newArray.push(el);
      });
      state.selectedNotifications = [];
    }

    state.notifications = newArray;
  },

  CHECK_ALL_PROMOTIONS(state) {
    const newArray = [];
    state.isPromotionChecked = !state.isPromotionChecked;
    if (state.isPromotionChecked) {
      state.promotions.forEach((el) => {
        el.checked = true;
        newArray.push(el);
      });
      state.selectedPromotions = state.promotions;
    } else {
      state.promotions.forEach((el) => {
        el.checked = false;
        newArray.push(el);
      });
      state.selectedPromotions = [];
    }

    state.promotions = newArray;
  },

  SET_PRODUCTS(state, products) {
    state.productLength = products.length;
    const items = [];
    for (let x = 0; x < products.results.length; x++) {
      products.results[x].cartNumber = 0;
      products.results[x].quantity = 0;
      items.push(products.results[x]);
    }
    state.products = items;
    state.selectedProducts = [];
  },

  ADD_TO_PURCHASE(state, data) {
    const existingItem = state.cartProducts.find(
      (item) => item.productName === data.productName
    );

    let index = null;

    for (let i = 0; i < state.products.length; i++) {
      if (state.products[i].productName == data.productName) {
        index = i;
      }
    }

    if (existingItem) {
      existingItem.quantity++;
      existingItem.cartNumber++;
    } else {
      data.quantity = 1;
      state.cartProducts.push(data);
      state.products[index] = data;
    }

    state.purchaseProperties.totalQuantity++;
    state.purchaseProperties.totalAmount += data.productBuyingPrice * 1;
    if (data.productCategories) {
      data.productCategories.forEach((el) => {
        state.purchaseProperties.categories.push(el);
      });
    }
  },

  TOGGLE_PRODUCT(state, int) {
    state.products[int].checked = !state.products[int].checked;

    const product = state.products[int];
    const exists = state.selectedProducts.some(
      (obj) => obj._id === product._id
    );
    if (!exists) {
      state.selectedProducts.push(product);
      if (state.selectedProducts.length == state.products.length) {
        state.isProductsChecked = true;
      }
    } else {
      state.selectedProducts = state.selectedProducts.filter(
        (obj) => obj._id !== product._id
      );
      if (state.selectedProducts.length == 0) {
        state.isProductsChecked = false;
        state.selectedProducts = [];
      }
      if (state.selectedProducts.length < state.products) {
        state.isProductsChecked = false;
      }
    }
  },

  TOGGLE_ALL_PRODUCTS(state) {
    const newArray = [];
    state.isProductsChecked = !state.isProductsChecked;
    if (state.isProductsChecked) {
      state.products.forEach((el) => {
        el.checked = true;
        newArray.push(el);
      });
      state.selectedProducts = state.products;
    } else {
      state.products.forEach((el) => {
        el.checked = false;
        newArray.push(el);
      });
      state.selectedProducts = [];
    }

    state.products = newArray;
  },

  REMOVE_FROM_PURCHASE(state, data) {
    let index = null;

    for (let i = 0; i < state.products.length; i++) {
      if (state.products[i].productName == data.productName) {
        index = i;
      }
    }

    for (let i = 0; i < state.cartProducts.length; i++) {
      if (state.cartProducts[i].productName == data.productName) {
        if (state.cartProducts[i].quantity > 1) {
          state.cartProducts[i].quantity--;
          state.products[index] = state.cartProducts[i];
        } else {
          state.cartProducts[i].quantity = 0;
          state.products[index] = state.cartProducts[i];
          state.cartProducts.splice(i, 1);
        }
        state.purchaseProperties.totalQuantity--;
        state.purchaseProperties.totalAmount -= data.productBuyingPrice;

        const list = state.purchaseProperties.categories;

        data.productCategories = Array.isArray(data.productCategories)
          ? data.productCategories
          : [data.productCategories];

        data.productCategories.forEach((el) => {
          for (let i = 0; i < list.length; i++) {
            if (el == list[i]) {
              list.splice(i, 1);
            }
          }
        });
      }
    }
  },

  CLEAR_CART(state) {
    state.cartProducts = [];
    state.purchaseProperties.totalQuantity = 0;
    state.purchaseProperties.totalAmount = 0;

    const products = state.products;
    const items = [];
    for (let x = 0; x < products.length; x++) {
      products[x].check = false;
      products[x].cartNumber = 0;
      products[x].quantity = 0;
      items.push(products[x]);
    }

    state.products = items;
  },

  SHOW_CART(state) {
    state.isShowingCart = !state.isShowingCart;
  },

  HIDE_CART(state) {
    state.isShowingCart = false;
  },
};

export const actions = {
  async CREATE_NOTIFICATION({ commit }, payload) {
    const { query, form } = payload;
    try {
      const result = await this.$axios.post(`/notifications/${query}`, form);
      commit("SET_NOTIFICATIONS", result.data.data);
      return result;
    } catch (err) {
      return err;
    }
  },

  async UPDATE_NOTIFICATION({ commit }, payload) {
    const { query, form, id } = payload;
    try {
      const result = await this.$axios.patch(
        `/notifications/${id}/${query}`,
        form
      );
      commit("SET_NOTIFICATIONS", result.data.data);
      return result;
    } catch (err) {
      return err;
    }
  },

  async GET_NOTIFICATIONS({ commit }, query) {
    try {
      const result = await this.$axios.get(`/notifications/${query}`);
      commit("SET_NOTIFICATIONS", result.data.data);
    } catch (err) {
      console.log(err.response.data.message);
    }
  },

  async CREATE_PROMO({ commit }, payload) {
    const { query, form } = payload;
    try {
      const result = await this.$axios.post(`/promotions/${query}`, form);
      commit("SET_PROMOTIONS", result.data.data);
      return result;
    } catch (err) {
      return err;
    }
  },

  async UPDATE_PROMO({ commit }, payload) {
    const { id, query, form } = payload;
    try {
      const result = await this.$axios.patch(
        `/promotions/${id}/${query}`,
        form
      );
      commit("SET_PROMOTIONS", result.data.data);
      return result;
    } catch (err) {
      return err;
    }
  },

  async MAKE_USER({ commit }, payload) {
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

  async UPDATE_STAFF({ commit }, payload) {
    const { form, id, query } = payload;
    try {
      const response = await this.$axios.patch(
        `/officials/${id}/${query}`,
        form
      );
      commit("SET_STAFFS", response.data.data);
      commit("CLEAR_SELECTED_STAFFS", response.data.data);
      return response;
    } catch (error) {
      return error;
    }
  },

  async UPDATE_STAFF_SETTINGS({ commit }, payload) {
    const { form, id, query } = payload;
    try {
      const result = await this.$axios.patch(`/staffs/${id}/${query}`, form);
      commit("SET_STAFF_SETTINGS", result.data);
      return result;
    } catch (err) {
      return err;
    }
  },

  async CREATE_STAFF_SETTINGS({ commit }, payload) {
    const { form, query } = payload;
    try {
      const result = await this.$axios.post(`/staffs/${query}`, form);
      commit("SET_STAFF_SETTINGS", result.data);
      return result;
    } catch (err) {
      return err;
    }
  },

  async GET_STAFF_SETTINGS({ commit }, query) {
    try {
      const result = await this.$axios.get(`/staffs/${query}`);
      commit("SET_STAFF_SETTINGS", result.data);
      return result;
    } catch (err) {
      return err;
    }
  },

  async GET_PRODUCTS({ commit }, query) {
    try {
      const response = await this.$axios.get(`/products/${query}`);
      commit("SET_PRODUCTS", response.data.data);
    } catch (error) {
      // Handle errors if necessary
    }
  },

  async UPDATE_PRODUCT({ commit }, payload) {
    const { id, form, query } = payload;
    try {
      const response = await this.$axios.patch(
        `/products/${id}/${query}`,
        form
      );
      commit("SET_PRODUCTS", response.data.data);
      return response;
    } catch (error) {
      return error;
    }
  },

  async CREATE_PRODUCT({ commit }, payload) {
    const { product, query } = payload;
    try {
      const response = await this.$axios.post(`/products/${query}`, product);
      commit("SET_PRODUCTS", response.data.data);
      return response;
    } catch (error) {
      return error;
    }
  },

  async nuxtServerInit({ commit }) {
    const user = this.$auth.user;
    let username = "";
    let status = "";
    if (user) {
      username = user.username;
      status = user.status;
    }

    try {
      const response = await this.$axios.get(
        `/company/all/settings/?username=${username}&status=${status}`
      );
      commit("TOGGLE_INITIAL", true);
      commit("SET_COUNTRIES", response.data.countries);
      commit("SET_NOTIFICATIONS", response.data.notifications);
      commit("SET_USERS", response.data.users);
      commit("SET_STAFFS", response.data.staffs);
      commit("SET_PRODUCTS", response.data.products);
      // commit("SET_ORDERS", response.data.orders);
      // commit("SET_PROMOTIONS", response.data.promotions);
      // commit("SET_SALES", response.data.sales);
    } catch (err) {
      console.log(err.response);
    }
  },
};
