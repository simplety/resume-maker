import Vue from 'vue'
import ObjectPath from 'object-path'

export default {
  initState (state, payload) {
    if (typeof payload === 'object') {
      Object.assign(state.resume, payload)
    }
  },
  clearAll (state) {
    state.resumeConfig.forEach(item => {
      if (item.type === 'array') {
        Vue.set(state.resume, item.field, [])
      } else {
        Vue.set(state.resume, item.field, {})
        item.keys.forEach(key => {
          if (key === 'yearRange') {
            Vue.set(state.resume[item.field], key, [])
          } else {
            Vue.set(state.resume[item.field], key, null)
          }
        })
      }
    })
  },
  changeSelected (state, selected) {
    Vue.set(state, 'selected', selected)
  },
  updateResume (state, {path, value}) {
    ObjectPath.set(state.resume, path, value)
    localStorage.setItem('resume', JSON.stringify(state.resume))
  },
  addResumeSubfield (state, field) {
    let newObj = {}
    state.resume[field].push(newObj)
    state.resumeConfig.filter(i => i.field === field)[0].keys.forEach(key => {
      if (key === 'yearRange') {
        Vue.set(newObj, key, [])
      } else {
        Vue.set(newObj, key, '')
      }
    })
  },
  removeResumeSubfield (state, {field, index}) {
    state.resume[field].splice(index, 1)
  }
}
