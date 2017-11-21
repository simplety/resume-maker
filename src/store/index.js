import vue from 'vue'
import vuex from 'vuex'
import state from './state.js'
import * as getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions'
import m1 from './modules/m1.js'
import m2 from './modules/m2.js'

vuex.use(vuex)

export default new vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    m1,
    m2
  }
})
