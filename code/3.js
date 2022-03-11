
function deepClone(obj,map = new Map()){
  if(typeof obj !== 'object') return obj;

  if(map.get(obj)){
    return map.get(obj)
  }
  const res = Array.isArray(obj)?[]:{}
  map.set(obj,res)
  for (const key in obj) {
    if (obj.hasOwnProperty.call(obj, key)) {
      res[key] = deepClone(obj[key],map)
    }
  }
  return res
}
let p = {
  name:'11',
  age:'6',
}
p.s = p
const p1 = deepClone(p)
console.log('p1', p1)