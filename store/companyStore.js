export const state = () => ({
  productArray: [],
  companyArray: [],
  selectedCompanies: [],
});

export const getters = {};

export const mutations = {
  SET_COMPANY_ARRAY(state, array) {
    const items = [];
    for (let x = 0; x < array.length; x++) {
      array[x].check = false;
      items.push(array[x]);
    }
    state.companyArray = items;
  },

  TOGGLE_COMPANY(state, int) {
    state.companyArray[int].check = !state.companyArray[int].check;

    const company = state.companyArray[int];
    const exists = state.selectedCompanies.some(
      (obj) => obj._id === company._id
    );
    if (!exists) {
      state.selectedCompanies.push(company);
    } else {
      state.selectedCompanies = state.selectedCompanies.filter(
        (obj) => obj._id !== company._id
      );
    }
  },

  CHECK_ALL_COMPANY(state, checked) {
    const newArray = [];
    if (checked) {
      state.companyArray.forEach((el) => {
        el.check = true;
        newArray.push(el);
      });
      state.selectedCompanies = state.companyArray;
    } else {
      state.companyArray.forEach((el) => {
        el.check = false;
        newArray.push(el);
      });
      state.selectedCompanies = [];
    }

    state.companyArray = newArray;
  },
};

export const actions = {
  async CREATE_COMPANY({ commit }, form) {
    try {
      const response = await this.$axios.post("/company", form);
      commit("SET_COMPANY_ARRAY", result.data.data);
      return response;
    } catch (error) {
      return error;
    }
  },

  async UPDATE_COMPANY({ commit }, payload) {
    const { form, id } = payload;
    try {
      const response = await this.$axios.patch(`/company/${id}`, form);
      commit("SET_COMPANY_ARRAY", response.data.data);
      return response;
    } catch (error) {
      return error;
    }
  },

  async nuxtServerInit({ commit, app }) {
    try {
      const result = await this.$axios.get("/company");
      commit("SET_COMPANY_ARRAY", result.data.data);
    } catch (err) {
      console.log(err);
    }
  },
};
