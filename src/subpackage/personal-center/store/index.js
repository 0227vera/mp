import { createStore } from '@mpxjs/core'

const store = createStore({
  state: {
    count: 1
  },
  getters: {
    getDoubleCount (state) {
      return state.count * 2
    }
  },
  actions: {
    changeCount ({ commit }, count) {
      setTimeout(() => {
        commit('changeCount', count)
      }, 500)
    }
  },
  mutations: {
    changeCount (state, count) {
      state.count = count
    }
  }
})

export default store
