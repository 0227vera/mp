const mutation = {
  initCount (state, count = 1) {
    state.count = count
  },
  changeCount (state, count) {
    state.count = count
  }
}

export default mutation
