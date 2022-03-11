// const { program } = require('commander');
// const b={
//   b:b
// }
// const o = {regx:RegExp,un:undefined,nu:null,st:'sss',nan:NaN,b}
// console.log('JSON.parse(JSON.stringify(o))', JSON.parse(JSON.stringify(o)))
// function deepClone(obj,m = new Map()){
//   if(typeof obj !== 'object'){
//     return obj
//   }
//   const res = Array.isArray(obj)?[]:{}
//   // 解决循环引用
//   console.log('m', m)
//   if(m.get(obj)){
//     return m.get(obj)
//   }
//   m.set(obj,res)

//   for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//       res[key] = deepClone(obj[key],m)
//     }
//   }
//   return res

// }
function deepClone (target) {
  function _deepClone (_target) {
    if (_target instanceof Date) return new Date(_target)
    if (_target instanceof RegExp) return new RegExp(_target)
    if (typeof _target !== 'object' || !_target) return _target

    let obj = {}

    if (_target instanceof Array) obj = []

    for (const key in _target) {
      obj[key] = _deepClone(_target[key])
    }

    return obj
  }

  return _deepClone(target);
}
const a = {
  name: 'sunshine_lin',
  age: 23,
  hobbies: { sports: '篮球', tv: '雍正王朝' },
  works: ['2020', '2021']
}
a.key = a // 环引用
const b = deepClone(a)
console.log('b', b)
