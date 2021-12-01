export const mutations = {
  SET_EMAIL(state, to) {
    state.user.email = to;
  },
  SET_USER_SESSION(state, to) {
    state.session = to;
  }
};
