let removeEmptyAttrs = require('./basic')

let a = {
  name: 'ty',
  age: 13,
  gender: null,
  city: ['guangan', 13, 'chengdu'],
  school: {
    name: 'CD',
    year: 0,
    major: ['SE', 'EE', 'CS'],
    discription: {
      name: '123',
      age: 'hey',
      gender: null,
      title: undefined
    }
  }
}
let b = {
  name: 'llz',
  age: 15,
  gender: 'male',
  city: ['guangan', 13, 'chengdu']
}

removeEmptyAttrs(a)
removeEmptyAttrs(b)

console.log(a)
console.log(b)
