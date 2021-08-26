import { createStore } from '@mpxjs/core'

import actions from './actions/index'
import getters from './getters/index'
import state from './state'
import mutations from './mutations/index'

const store = createStore({
  actions,
  getters,
  state,
  mutations
})

export default store
