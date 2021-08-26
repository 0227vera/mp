const actions = {
  changeCount ({ commit }, count) {
    setTimeout(() => {
      commit('changeCount', count)
    }, 1000)
  }
}

export default actions
