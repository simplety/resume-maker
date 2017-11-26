// 异步操作 && 多个commit时调用
// import * as types from './mutation-types.js'

// export default {
//   saveAll ({commit}, {selected, resume}) {
//     commit(types.SET_SELECTED, selected)
//     commit(types.SET_RESUME, resume)
//   }
// }

export default {
  saveResume ({state, commit}, payload) {
    payload = JSON.stringify(payload)
    window.localStorage.setItem('resume', payload)
  }
}
