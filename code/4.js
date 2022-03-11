// 柯里化
function f(fn){
  return function f1(...arg1){
    if(arg1.length >= fn.length){
     return fn.apply(this,arg1)
    }else{
      return function(...arg2){
        return f1.apply(this,arg1.concat(arg2))
      }
    }
  }
}
function sum(a, b, c) {
  return a + b + c;
}
let curriedSum = f(sum);

console.log('curriedSum(1, 2, 3)', curriedSum(1, 2, 3))
console.log('curriedSum(1)(2,3)',curriedSum(1)(2,3))
console.log('curriedSum(1)(2)(3)', curriedSum(1)(2)(3))