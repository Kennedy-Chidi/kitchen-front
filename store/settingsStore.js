export const state = () => ({
  homeBanners: [],

  companyArray: [],
  companyLength: 0,
  selectedCompanies: [],
  isCompanyChecked: false,
  initials: false,

  selectedUser: "",

  selectedPromotions: [],
  isPromotionChecked: false,
  promotionLength: 0,
  promotions: [],

  selectedEmails: [],
  isEmailChecked: false,
  emailLength: 0,
  emails: [],

  selectedBanners: [],
  isBannerChecked: false,
  bannerLength: 0,
  banners: [],

  notificationLength: 0,
  notifications: [],
  selectedNotifications: [],
  isNotificationChecked: false,

  blogLength: 0,
  blogs: [],
  selectedBlogs: [],
  isBlogChecked: false,

  reviewLength: 0,
  reviews: [],
  selectedReviews: [],
  isReviewsChecked: false,

  faqLength: 0,
  faq: [],
  selectedFAQ: [],
  isFAQChecked: false,

  transactionLength: 0,
  transactions: [],

  countries: [],

  orders: [],
  orderLength: 0,

  confirmType: "",
  confirmData: "",
  isLoading: false,
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

  showAlertBox: false,
  alertMsg: "",
  alertStatus: "",

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
  SELECT_USER(state, data) {
    state.selectedUser = data;
  },

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

  SET_EMAILS(state, data) {
    state.emailLength = data.length;
    let array = [];
    data.results.forEach((el) => {
      el.checked = false;
      array.push(el);
    });
    state.emails = array;
    state.isEmailChecked = false;
    state.selectedEmails = [];
  },

  CHECK_ALL_EMAILS(state) {
    const newArray = [];
    state.isEmailChecked = !state.isEmailChecked;
    if (state.isEmailChecked) {
      state.emails.forEach((el) => {
        el.checked = true;
        newArray.push(el);
      });
      state.selectedEmails = state.emails;
    } else {
      state.emails.forEach((el) => {
        el.checked = false;
        newArray.push(el);
      });
      state.selectedEmails = [];
    }

    state.emails = newArray;
  },

  TOGGLE_EMAIL(state, int) {
    state.emails[int].checked = !state.emails[int].checked;

    const email = state.emails[int];
    const exists = state.selectedEmails.some((obj) => obj._id === email._id);
    if (!exists) {
      state.selectedEmails.push(email);
      if (state.selectedEmails.length == state.emails.length) {
        state.isEmailChecked = true;
      }
    } else {
      state.selectedEmails = state.selectedEmails.filter(
        (obj) => obj._id !== email._id
      );
      if (state.selectedEmails.length == 0) {
        state.isEmailChecked = false;
        state.selectedEmails = [];
      }
    }
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

  SET_BANNERS(state, data) {
    state.bannerLength = data.length;
    let array = [];
    data.results.forEach((el) => {
      el.checked = false;
      array.push(el);
    });
    state.banners = array;

    state.isBannerChecked = false;
    state.selectedBanners = [];
  },

  TOGGLE_BANNER(state, int) {
    state.banners[int].checked = !state.banners[int].checked;

    const banner = state.banners[int];
    const exists = state.selectedBanners.some((obj) => obj._id === banner._id);
    if (!exists) {
      state.selectedBanners.push(banner);
      if (state.selectedBanners.length == state.banners.length) {
        state.isBannerChecked = true;
      }
    } else {
      state.selectedBanners = state.selectedBanners.filter(
        (obj) => obj._id !== banner._id
      );
      if (state.selectedBanners.length == 0) {
        state.isBannerChecked = false;
        state.selectedBanners = [];
      }
    }
  },

  CHECK_ALL_BANNERS(state) {
    const newArray = [];
    state.isBannerChecked = !state.isBannerChecked;
    if (state.isBannerChecked) {
      state.banners.forEach((el) => {
        el.checked = true;
        newArray.push(el);
      });
      state.selectedBanners = state.banners;
    } else {
      state.banners.forEach((el) => {
        el.checked = false;
        newArray.push(el);
      });
      state.selectedBanners = [];
    }

    state.banners = newArray;
  },

  SET_ORDERS(state, data) {
    state.orderLength = data.length;
    let array = [];
    data.results.forEach((el) => {
      el.checked = false;
      array.push(el);
    });
    state.orders = array;
  },

  SET_TRANSACTIONS(state, data) {
    state.transactionLength = data.length;
    let array = [];
    data.results.forEach((el) => {
      el.checked = false;
      array.push(el);
    });
    state.transactions = array;
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
      products.results[x].checked = false;
      products.results[x].cartNumber = 0;
      products.results[x].quantity = 0;
      items.push(products.results[x]);
    }
    state.products = items;
    state.selectedProducts = [];
    state.cartProducts = [];
    state.purchaseProperties.totalAmount = 0;
    state.purchaseProperties.totalQuantity = 0;
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

  TOGGLE_LOADING(state) {
    state.isLoading = !state.isLoading;
  },

  HIDE_CART(state) {
    state.isShowingCart = false;
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

  SET_COMPANY(state, companies) {
    state.companyLength = companies.length;
    const items = [];
    for (let x = 0; x < companies.results.length; x++) {
      companies.results[x].checked = false;
      items.push(companies.results[x]);
    }
    state.companyArray = items;
    state.selectedCompanies = [];
    state.isCompanyChecked = false;
  },

  TOGGLE_COMPANY(state, int) {
    state.companyArray[int].checked = !state.companyArray[int].checked;

    const company = state.companyArray[int];
    const exists = state.selectedCompanies.some(
      (obj) => obj._id === company._id
    );
    if (!exists) {
      state.selectedCompanies.push(company);
      if (state.selectedCompanies.length == state.companyArray.length) {
        state.isCompanyChecked = true;
      }
    } else {
      state.selectedCompanies = state.selectedCompanies.filter(
        (obj) => obj._id !== company._id
      );
      if (state.selectedCompanies.length == 0) {
        state.isCompanyChecked = false;
        state.selectedCompanies = [];
      }
    }
  },

  CHECK_ALL_COMPANY(state, checked) {
    const newArray = [];
    state.isCompanyChecked = !state.isCompanyChecked;
    if (state.isCompanyChecked) {
      state.companyArray.forEach((el) => {
        el.checked = true;
        newArray.push(el);
      });
      state.selectedCompanies = state.companyArray;
    } else {
      state.companyArray.forEach((el) => {
        el.checked = false;
        newArray.push(el);
      });
      state.selectedCompanies = [];
    }

    state.companyArray = newArray;
  },

  SET_BLOGS(state, blogs) {
    state.blogLength = blogs.length;
    const items = [];
    for (let x = 0; x < blogs.results.length; x++) {
      blogs.results[x].checked = false;
      items.push(blogs.results[x]);
    }
    state.blogs = items;
    state.selectedBlogs = [];
    state.isBlogChecked = false;
  },

  CHECK_ALL_BLOGS(state) {
    const newArray = [];
    state.isBlogChecked = !state.isBlogChecked;
    if (state.isBlogChecked) {
      state.blogs.forEach((el) => {
        el.checked = true;
        newArray.push(el);
      });
      state.selectedBlogs = state.blogs;
    } else {
      state.blogs.forEach((el) => {
        el.checked = false;
        newArray.push(el);
      });
      state.selectedBlogs = [];
    }

    state.blogs = newArray;
  },

  TOGGLE_BLOG(state, int) {
    state.blogs[int].checked = !state.blogs[int].checked;

    const blog = state.blogs[int];
    const exists = state.selectedBlogs.some((obj) => obj._id === blog._id);
    if (!exists) {
      state.selectedBlogs.push(blog);
      if (state.selectedBlogs.length == state.blogs.length) {
        state.isBlogChecked = true;
      }
    } else {
      state.selectedBlogs = state.selectedBlogs.filter(
        (obj) => obj._id !== blog._id
      );
      if (state.selectedBlogs.length == 0) {
        state.isBlogChecked = false;
        state.selectedBlogs = [];
      }
    }
  },

  SET_REVIEWS(state, reviews) {
    state.reviewLength = reviews.length;
    const items = [];
    for (let x = 0; x < reviews.results.length; x++) {
      reviews.results[x].checked = false;
      items.push(reviews.results[x]);
    }
    state.reviews = items;
    state.selectedReviews = [];
    state.isReviewsChecked = false;
  },

  CHECK_ALL_REVIEWS(state) {
    const newArray = [];
    state.isReviewsChecked = !state.isReviewsChecked;
    if (state.isReviewsChecked) {
      state.reviews.forEach((el) => {
        el.checked = true;
        newArray.push(el);
      });
      state.selectedReviews = state.reviews;
    } else {
      state.reviews.forEach((el) => {
        el.checked = false;
        newArray.push(el);
      });
      state.selectedReviews = [];
    }

    state.reviews = newArray;
  },

  TOGGLE_REVIEW(state, int) {
    state.reviews[int].checked = !state.reviews[int].checked;

    const review = state.reviews[int];
    const exists = state.selectedReviews.some((obj) => obj._id === review._id);
    if (!exists) {
      state.selectedReviews.push(review);
      if (state.selectedReviews.length == state.reviews.length) {
        state.isReviewsChecked = true;
      }
    } else {
      state.selectedReviews = state.selectedReviews.filter(
        (obj) => obj._id !== review._id
      );
      if (state.selectedReviews.length == 0) {
        state.isReviewsChecked = false;
        state.selectedReviews = [];
      }
    }
  },

  CHECK_ALL_FAQ(state) {
    const newArray = [];
    state.isFAQChecked = !state.isFAQChecked;
    if (state.isFAQChecked) {
      state.faq.forEach((el) => {
        el.checked = true;
        newArray.push(el);
      });
      state.selectedFAQ = state.faq;
    } else {
      state.faq.forEach((el) => {
        el.checked = false;
        newArray.push(el);
      });
      state.selectedFAQ = [];
    }

    state.faq = newArray;
  },

  TOGGLE_FAQ(state, int) {
    state.faq[int].checked = !state.faq[int].checked;

    const faqItem = state.faq[int];
    const exists = state.selectedFAQ.some((obj) => obj._id === faqItem._id);
    if (!exists) {
      state.selectedFAQ.push(faqItem);
      if (state.selectedFAQ.length == state.faq.length) {
        state.isFAQChecked = true;
      }
    } else {
      state.selectedFAQ = state.selectedFAQ.filter(
        (obj) => obj._id !== faqItem._id
      );
      if (state.selectedFAQ.length == 0) {
        state.isFAQChecked = false;
        state.selectedFAQ = [];
      }
    }
  },

  SET_FAQ(state, faq) {
    state.faqLength = faq.length;
    const items = [];
    for (let x = 0; x < faq.results.length; x++) {
      faq.results[x].checked = false;
      items.push(faq.results[x]);
    }
    state.faq = items;
    state.selectedFAQ = [];
    state.isFAQChecked = false;
  },
};

export const actions = {
  async SEARCH_PRODUCTS({ commit }, form) {
    const socket = this.$socket;

    socket.emit("fetchItems", form);
  },

  async CREATE_COMPANY({ commit }, form) {
    try {
      const response = await this.$axios.post("/company", form);
      commit("SET_COMPANY", result.data.data);
      return response;
    } catch (error) {
      return error;
    }
  },

  async UPDATE_COMPANY({ commit }, payload) {
    const { form, id } = payload;
    try {
      const response = await this.$axios.patch(`/company/${id}`, form);
      commit("SET_COMPANY", response.data.data);
      return response;
    } catch (error) {
      return error;
    }
  },

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

  async GET_EMAILS({ commit }, query) {
    try {
      const result = await this.$axios.get(`/emails/${query}`);
      commit("SET_EMAILS", result.data.data);
    } catch (err) {
      console.log(err.response.data);
    }
  },

  async CREATE_EMAIL({ commit }, payload) {
    const { form, query } = payload;
    try {
      const response = await this.$axios.post(`/emails/${query}`, form);
      commit("SET_EMAILS", result.data.data);
      return response;
    } catch (err) {
      return err;
    }
  },

  async UPDATE_EMAIL({ commit }, payload) {
    const { form, query, id } = payload;
    try {
      const response = await this.$axios.patch(`/emails/${id}/${query}`, form);
      commit("SET_EMAILS", result.data.data);
      return response;
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

  async GET_TRANSACTIONS({ commit }, query) {
    try {
      const result = await this.$axios.get(`/transactions/${query}`);
      commit("SET_TRANSACTIONS", result.data);
    } catch (err) {
      console.log(err.response);
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

  async PROCEED_CONFIRMATION({ commit }, payload) {
    const socket = this.$socket;
    const user = this.$auth.user;

    const { confirmData, confirmId, confirmType } = payload;
    if (confirmType == "Purchase") {
      confirmData.transactionType = "Purchase";
      confirmData.query = {
        limit: 10,
        username: user.username,
        state: user.state,
        sort: `productName`,
      };
      socket.emit("purchaseGoods", confirmData);
    } else if (confirmType == "ApproveOrder") {
      confirmData.time = new Date().getTime();
      socket.emit("approveOrder", confirmData);
    } else if (confirmType == "CancelledOrder") {
      const body = {
        data: confirmData,
        id: confirmId,
      };
      socket.emit("cancelOrder", body);
    }
  },

  async GET_BANNER({ commit }) {
    try {
      const result = await this.$axios.get(`/banner/${query}`);
      commit("SET_BANNER", result.data.data);
    } catch (err) {
      console.log(err.response.data.message);
    }
  },

  async CREATE_BANNER({ commit }, payload) {
    const { query, form } = payload;
    try {
      const result = await this.$axios.post(`/banner/${query}`, form);
      commit("SET_BANNERS", result.data.data);
      return result;
    } catch (err) {
      return err;
    }
  },

  async UPDATE_BANNER({ commit }, payload) {
    const { id, query, form } = payload;
    try {
      const result = await this.$axios.patch(`/banner/${id}/${query}`, form);
      commit("SET_BANNERS", result.data.data);
      return result;
    } catch (err) {
      return err;
    }
  },

  async CREATE_BLOG({ commit }, payload) {
    const { query, form } = payload;
    try {
      const result = await this.$axios.post(`/blogs/${query}`, form);
      commit("SET_BLOGS", result.data.data);
      return result;
    } catch (err) {
      return err;
    }
  },

  async UPDATE_BLOG({ commit }, payload) {
    const { id, query, form } = payload;
    try {
      const result = await this.$axios.patch(`/blogs/${id}/${query}`, form);
      commit("SET_BLOGS", result.data.data);
      return result;
    } catch (err) {
      return err;
    }
  },

  async UPDATE_REVIEW({ commit }, payload) {
    const { id, query, form } = payload;
    try {
      const result = await this.$axios.patch(
        `/users/update-user/${id}/${query}`,
        form
      );
      commit("SET_REVIEWS", result.data.data);
      return result;
    } catch (err) {
      return err;
    }
  },

  async GET_SETTINGS(commit) {
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
      commit("SET_TRANSACTIONS", response.data.transactions);
      commit("SET_ORDERS", response.data.orders);
      commit("SET_COMPANY", response.data.companies);
      commit("SET_EMAILS", response.data.emails);
      commit("SET_BANNERS", response.data.banners);
      commit("SET_BLOGS", response.data.blogs);
      commit("SET_REVIEWS", response.data.reviews);

      // commit("SET_PROMOTIONS", response.data.promotions);
      // commit("SET_SALES", response.data.sales);
    } catch (err) {
      console.log(err.response);
    }
  },

  async CREATE_FAQ({ commit }, payload) {
    const { query, form } = payload;

    try {
      const result = await this.$axios.post(`/faq/${query}`, form);
      commit("SET_FAQ", result.data.data);
      return result;
    } catch (err) {
      return err;
    }
  },

  async UPDATE_FAQ({ commit }, payload) {
    const { id, query, form } = payload;
    try {
      const result = await this.$axios.patch(`/faq/${id}/${query}`, form);
      commit("SET_FAQ", result.data.data);
      return result;
    } catch (err) {
      return err;
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
        `/company/all/settings/?username=${username}&status=${status}&state=${user.state}`
      );
      commit("TOGGLE_INITIAL", true);
      commit("SET_COUNTRIES", response.data.countries);
      commit("SET_NOTIFICATIONS", response.data.notifications);
      commit("SET_USERS", response.data.users);
      commit("SET_STAFFS", response.data.staffs);
      commit("SET_PRODUCTS", response.data.products);
      commit("SET_TRANSACTIONS", response.data.transactions);
      commit("SET_ORDERS", response.data.orders);
      commit("SET_COMPANY", response.data.companies);
      commit("SET_EMAILS", response.data.emails);
      commit("SET_BANNERS", response.data.banners);
      commit("SET_BLOGS", response.data.blogs);
      commit("SET_REVIEWS", response.data.reviews);
      commit("SET_FAQ", response.data.faq);
      // commit("SET_PROMOTIONS", response.data.promotions);
      // commit("SET_SALES", response.data.sales);
    } catch (err) {
      console.log(err);
    }
  },
};
