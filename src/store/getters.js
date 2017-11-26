// import {removeEmptyAttrs} from '../util/basic'

export const selected = (state) => {
  return state.selected
}

export const resume = (state) => {
  return state.resume
}

// export const resumeContent = (state) => {
//   var copiedResume = Object.assign({}, state.resume)
//   removeEmptyAttrs(copiedResume)
//   console.log('state', state.resume)
//   return copiedResume
// }

export const resumeConfig = (state) => {
  return state.resumeConfig
}
