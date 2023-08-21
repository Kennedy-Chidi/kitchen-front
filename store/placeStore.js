export const state = () => ({
  states: [],
});

export const getters = {};

export const mutations = {
  TOGGLE_ADMIN_NAV(state) {
    state.navState = !state.navState;
  },
};

export const actions = {};
