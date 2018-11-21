export default {
  addNum({
    commit,
    state
  }, id) {
    commit('ADD',id);
    if (state.topic < state.subject.length) {
      commit('NEXT',1)
    }
  },
  rest({commit}) {
    commit('RESET');
  }
}
