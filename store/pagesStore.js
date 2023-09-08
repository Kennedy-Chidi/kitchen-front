export const state = () => ({
  initials: false,

  partners: [],
  partnerLength: 0,
  selectedPartners: [],
  isPartnerChecked: false,
});

export const mutations = {
  SET_INITIALS(state) {
    state.initials = true;
  },

  SET_PARTNERS(state, partners) {
    state.partnerLength = partners.length;
    const items = [];
    for (let x = 0; x < partners.results.length; x++) {
      partners.results[x].checked = false;
      items.push(partners.results[x]);
    }
    state.partners = items;
    state.selectedPartners = [];
    state.isPartnerChecked = false;
  },

  CHECK_ALL_PARTNERS(state) {
    const newArray = [];
    state.isPartnerChecked = !state.isPartnerChecked;
    if (state.isPartnerChecked) {
      state.partners.forEach((el) => {
        el.checked = true;
        newArray.push(el);
      });
      state.selectedPartners = state.partners;
    } else {
      state.partners.forEach((el) => {
        el.checked = false;
        newArray.push(el);
      });
      state.selectedPartners = [];
    }

    state.partners = newArray;
  },

  TOGGLE_PARTNER(state, int) {
    state.partners[int].checked = !state.partners[int].checked;

    const partner = state.partners[int];
    const exists = state.selectedPartners.some(
      (obj) => obj._id === partner._id
    );
    if (!exists) {
      state.selectedPartners.push(partner);
      if (state.selectedPartners.length == state.partners.length) {
        state.isPartnerChecked = true;
      }
    } else {
      state.selectedPartners = state.selectedPartners.filter(
        (obj) => obj._id !== partner._id
      );
      if (state.selectedPartners.length == 0) {
        state.isPartnerChecked = false;
        state.selectedPartners = [];
      }
    }
  },
};

export const actions = {
  async CREATE_PARTNER({ commit }, payload) {
    const { query, form } = payload;
    try {
      const result = await this.$axios.post(`/partners/${query}`, form);
      commit("SET_PARTNERS", result.data.data);
      return result;
    } catch (err) {
      return err;
    }
  },

  async UPDATE_PARTNER({ commit }, payload) {
    const { id, query, form } = payload;
    try {
      const result = await this.$axios.patch(`/partners/${id}/${query}`, form);
      commit("SET_PARTNERS", result.data.data);
      return result;
    } catch (err) {
      return err;
    }
  },

  async GET_PARTNERS({ commit }) {
    try {
      const result = await this.$axios.get(`/partners/${query}`);
      commit("SET_PARTNERS", result.data.data);
      return result;
    } catch (err) {
      return err;
    }
  },

  async nuxtServerInit({ commit }) {
    try {
      const result = await this.$axios.get(`/company/all/pages`);
      commit("SET_PARTNERS", result.data.partners);
      return result;
    } catch (error) {
      console.log(error.response.data);
      return error;
    }
  },
};
