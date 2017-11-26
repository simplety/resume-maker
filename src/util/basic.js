export function removeEmptyAttrs (obj) {
  for (let key in obj) {
    // obj[key]: Array, String, Object
    // if (Object.values(obj[key]).length === 0) {
    //   if (obj[key] instanceof Array) {

    //   } else if (obj[key] instanceof Object) {
    //     delete()
    //   }
    // }
    if (obj[key] === null || obj[key] === undefined) {
      delete obj[key]
    } else if (typeof obj[key] === 'string') {
      !(obj[key]) && delete (obj[key])
    } else if (obj[key] instanceof Array) {
      if (!obj[key].length) {
        delete obj[key]
      } else {
        removeEmptyAttrs(obj[key])
      }
    } else if (obj[key] instanceof Object) {
      if (!Object.values(obj[key]).length) {
        delete obj[key]
      } else {
        removeEmptyAttrs(obj[key])
      }
    }
  }
}
