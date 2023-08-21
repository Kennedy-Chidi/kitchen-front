export const state = () => ({
  emailArray: [],
  emailLength: 0,
  selectedEmails: [],
});

export const getters = {};

export const mutations = {
  SET_EMAILS(state, payload) {
    const { data, length } = payload;
    const emails = [];
    data.forEach((el) => {
      el.checked = false;
      emails.push(el);
    });
    state.emailArray = emails;
    state.emailLength = length;
  },

  TOGGLE_EMAIL(state, int) {
    state.emailArray[int].checked = !state.emailArray[int].checked;

    const company = state.emailArray[int];
    const exists = state.selectedEmails.some((obj) => obj._id === company._id);
    if (!exists) {
      state.selectedEmails.push(company);
    } else {
      state.selectedEmails = state.selectedEmails.filter(
        (obj) => obj._id !== company._id
      );
    }
  },

  CHECK_ALL_EMAILS(state, checked) {
    const newArray = [];
    if (checked) {
      state.emailArray.forEach((el) => {
        el.checked = true;
        newArray.push(el);
      });
      state.selectedEmails = state.emailArray;
    } else {
      state.emailArray.forEach((el) => {
        el.checked = false;
        newArray.push(el);
      });
      state.selectedEmails = [];
    }

    state.emailArray = newArray;
  },
};

export const actions = {
  async CREATE_EMAIL({ commit }, payload) {
    const { form, query } = payload;
    try {
      const response = await this.$axios.post(`/emails/${query}`, form);
      const data = response.data.data;
      const length = response.data.resultLength;
      commit("SET_EMAILS", { data, length });
      return response;
    } catch (err) {
      return err;
    }
  },

  async UPDATE_EMAIL({ commit }, payload) {
    const { form, query, id } = payload;
    try {
      const response = await this.$axios.patch(`/emails/${id}/${query}`, form);
      const data = response.data.data;
      const length = response.data.resultLength;
      commit("SET_EMAILS", { data, length });
      return response;
    } catch (err) {
      return err;
    }
  },

  async nuxtServerInit({ commit, app }, context) {
    try {
      const response = await this.$axios.get("/emails");
      const data = response.data.data;
      const length = response.data.resultLength;
      commit("SET_EMAILS", { data, length });
    } catch (err) {
      console.log(err.response.data);
    }
  },
};
