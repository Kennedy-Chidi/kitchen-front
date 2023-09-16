export const state = () => ({
  catProducts: [],
  catProduct: "",
  showCatProduct: false,
  catProductsLength: [],
  productArray: [],
  products: [],
  productSettings: [],
  dataLength: "",
  initials: false,

  showConfirmBox: false,
  confirmBoxMsg: "",
  confirmBoxId: "",

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

  userState: "",
});

export const getters = {
  getObjectById: (state) => (id) => {
    return state.productArray.find((obj) => obj._id === id) || null;
  },
};

function resetCart(products, userState) {
  const items = [];
  const homeItems = [];
  for (let x = 0; x < products.length; x++) {
    products[x].check = false;
    products[x].cartNumber = 0;
    products[x].quantity = 0;
    items.push(products[x]);
  }

  if (products.length >= 10) {
    for (let x = 0; x < 10; x++) {
      products[x].check = false;
      products[x].cartNumber = 0;
      products[x].quantity = 0;
      homeItems.push(products[x]);
    }
  }
  userState.products = homeItems;
  userState.productArray = items;
}

function checkCartProducts(items, state) {
  let el = items;
  for (let x = 0; x < el.length; x++) {
    for (let i = 0; i < state.cartProducts.length; i++) {
      const elem = state.cartProducts[i];
      if (el[x].productName == elem.productName) {
        el[x].quantity = elem.quantity * 1;
        el[x].cartNumber = elem.cartNumber * 1;
      }
    }
  }

  return el;
}

export const mutations = {
  async SET_PRODUCTS(state, products) {
    state.dataLength = products.length;
    const items = [];
    const homeItems = [];
    let el = products.results;
    for (let x = 0; x < el.length; x++) {
      el[x].check = false;
      el[x].cartNumber = 0;
      el[x].quantity = 0;
      items.push(el[x]);
    }

    if (products.results.length >= 10) {
      for (let x = 0; x < 10; x++) {
        products.results[x].check = false;
        products.results[x].cartNumber = 0;
        products.results[x].quantity = 0;
        homeItems.push(products.results[x]);
      }
    }
    state.products = homeItems;

    state.productArray = checkCartProducts(items, state);
  },

  SET_CATEGORY_PRODUCTS(state, products) {
    state.catProductsLength = products.length;

    state.productArray = state.productArray.filter(
      (item) => item.isCat !== true
    );

    for (let x = 0; x < products.results.length; x++) {
      products.results[x].isCat = true;
      products.results[x].check = false;
      products.results[x].cartNumber = 0;
      products.results[x].quantity = 0;
      state.productArray.push(products.results[x]);
    }
  },

  SET_PRODUCT_SETTINGS(state, products) {
    state.dataLength = products.resultLength;
    const items = [];

    for (let x = 0; x < products.data.length; x++) {
      products.data[x].checked = false;
      products.data[x].cartNumber = 0;
      products.data[x].quantity = 0;
      items.push(products.data[x]);
    }
    state.productSettings = items;
  },

  SET_CAT_PRODUCT(state, category) {
    state.catProduct = category;
    state.showCatProduct = true;
  },

  HIDE_CAT_PRODUCT(state) {
    state.catProduct = "";
    state.showCatProduct = false;
  },

  SET_OBJECT(state, object) {
    state.selectedObject = object;
  },

  ADD_TO_CART(state, data) {
    const existingItem = state.cartProducts.find(
      (item) => item.productName === data.productName
    );

    let index = null;

    for (let i = 0; i < state.productArray.length; i++) {
      if (state.productArray[i].productName == data.productName) {
        index = i;
      }
    }

    if (existingItem) {
      existingItem.quantity++;
      existingItem.cartNumber++;
    } else {
      data.quantity = 1;
      state.cartProducts.push(data);
      state.productArray[index] = data;
    }

    for (let i = 0; i < state.productArray.length; i++) {
      const el = state.productArray[i];
      if (el.productName == data.productName) {
        el.quantity = data.quantity;
      }
    }

    state.purchaseProperties.totalQuantity++;
    state.purchaseProperties.totalAmount += data.productSellingPrice * 1;
    if (data.productCategories) {
      data.productCategories.forEach((el) => {
        state.purchaseProperties.categories.push(el);
      });
    }
  },

  REMOVE_FROM_CART(state, data) {
    let index = null;

    for (let i = 0; i < state.productArray.length; i++) {
      if (state.productArray[i].productName == data.productName) {
        index = i;
      }
    }

    for (let i = 0; i < state.cartProducts.length; i++) {
      if (state.cartProducts[i].productName == data.productName) {
        if (state.cartProducts[i].quantity > 0) {
          state.cartProducts[i].quantity--;
          for (let x = 0; x < state.productArray.length; x++) {
            const element = state.productArray[x];

            if (element.productName == data.productName) {
              element.quantity = data.quantity;
            }
          }
          state.purchaseProperties.totalQuantity--;
          state.purchaseProperties.totalAmount -= data.productSellingPrice;
        } else {
          state.cartProducts[i].quantity = 0;
          state.productArray[index] = state.cartProducts[i];
          state.cartProducts.splice(i, 1);
        }

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

  CLEAR_CART(state, commit) {
    state.cartProducts = [];
    state.purchaseProperties.totalQuantity = 0;
    state.purchaseProperties.totalAmount = 0;

    const productArray = state.productArray;
    const products = state.products;
    const items = [];
    const homeItems = [];
    for (let x = 0; x < productArray.length; x++) {
      productArray[x].check = false;
      productArray[x].cartNumber = 0;
      productArray[x].quantity = 0;
      items.push(productArray[x]);
    }

    for (let x = 0; x < 10; x++) {
      products[x].check = false;
      products[x].cartNumber = 0;
      products[x].quantity = 0;
      homeItems.push(products[x]);
    }

    state.products = homeItems;
    state.productArray = items;
  },

  CHECK_ALL(state, checked) {
    const newArray = [];
    if (checked) {
      state.productSettings.forEach((el) => {
        el.checked = true;
        newArray.push(el);
      });
      state.selectedProductSettings = state.productSettings;
    } else {
      state.productSettings.forEach((el) => {
        el.checked = false;
        newArray.push(el);
      });
      state.selectedProductSettings = [];
    }

    state.productSettings = newArray;
  },

  RESET_CART(state) {
    resetCart(state.productArray, state);
  },

  SHOW_CART(state) {
    state.isShowingCart = !state.isShowingCart;
  },

  HIDE_CART(state) {
    state.isShowingCart = false;
  },

  CONFIRM_CHECKOUT(state, payload) {
    const { msg, id } = payload;
    state.confirmBoxMsg = msg;
    state.showConfirmBox = true;
    state.confirmBoxId = id;
  },

  TOGGLE_PRODUCT(state, int) {
    state.productSettings[int].checked = !state.productSettings[int].checked;

    const product = state.productSettings[int];
    const exists = state.selectedProductSettings.some(
      (obj) => obj._id === product._id
    );
    if (!exists) {
      state.selectedProductSettings.push(product);
    } else {
      state.selectedProductSettings = state.selectedProductSettings.filter(
        (obj) => obj._id !== product._id
      );
    }
  },

  UPDATE_CART(state, userState) {
    const newCartArray = [];
    const products = [];
    let amount = 0;
    for (let i = 0; i < state.cartProducts.length; i++) {
      const product = setProductPrice(state.cartProducts[i], userState);
      newCartArray.push(product);
      amount += product.productSellingPrice * 1;
    }
    for (let i = 0; i < state.productArray.length; i++) {
      products.push(setProductPrice(state.productArray[i], userState));
    }
    state.cartProducts = newCartArray;
    state.productArray = products;
    state.purchaseProperties.totalAmount = amount;
  },

  SET_USER_STATE(state, userState) {
    if (userState != undefined) {
      state.userState = userState.state;
    }
  },

  TOGGLE_INITIALS(state) {
    state.initials = !state.initials;
  },
};

export const actions = {
  SET_USER_STATE({ commit }) {
    const userState = this.$auth.user;
    if (this.$auth.loggedIn) {
      commit("SET_USER_STATE", userState);
      commit("UPDATE_CART", userState.state);
    }
  },

  async SEARCH_PRODUCTS({ commit }, form) {
    const socket = this.$socket;

    socket.emit("fetchItems", form);
  },

  async GET_OBJECT({ state, dispatch, commit, getters }, id) {
    if (state.productArray.length == 0) {
      await dispatch("GET_A_PRODUCT", id);
    } else {
      const object = getters.getObjectById(id);
      commit("SET_OBJECT", object);
    }
  },

  async GET_PRODUCTS({ commit }, query) {
    try {
      const response = await this.$axios.get(`/products/${query}`);
      commit("SET_PRODUCTS", response.data);
    } catch (error) {
      // Handle errors if necessary
    }
  },

  async GET_CATEGORY_PRODUCTS({ commit }, data) {
    try {
      const response = await this.$axios.get(
        `/products/?productCategories=${data}`
      );
      commit("SET_CATEGORY_PRODUCTS", response.data.data);
    } catch (error) {
      // Handle errors if necessary
    }
  },

  async GET_A_PRODUCT({ commit }, id) {
    try {
      const response = await this.$axios.get(`/products/${id}`);
      const object = response.data.data;
      object.cartNumber = 0;
      commit("SET_OBJECT", object);
    } catch (error) {
      // Handle errors if necessary
    }
  },

  async nuxtServerInit({ commit }) {
    const query = `?limit=12&page=1&sort=productState`;
    try {
      const response = await this.$axios.get(`/products/${query}`);
      if (response) {
      }
      commit("SET_PRODUCTS", await response.data.data);
      commit("TOGGLE_INITIALS");
    } catch (err) {
      console.log(err);
    }

    // try {
    //   const response = await this.$axios.get(`/products/${query1}`);
    //   commit("SET_PRODUCT_SETTINGS", response.data);
    // } catch (err) {
    //   console.log(err);
    // }
  },
};
