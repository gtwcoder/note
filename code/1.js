/*
 * @Date: 2021-10-13 11:52:32
 * @LastEditors: Do not edit
 * @LastEditTime: 2021-10-14 17:19:28
 * @Description: 
 */
///*---------------简易版call实现 没有考虑第一个参数是基本类型的时候-------------- */
// Function.prototype.mayCall = function(context,...rest) {
//   const cxt  = context ?? Window
//   const key = Symbol()
//   cxt[key] = this
//   cxt[key](...rest)
//   delete cxt[key]
// }
///*----------------简易版快排-------------- */ 
//  function quickSort(arr) {
//   //  递归终止条件
//    if(arr.length < 2){
//      return arr
//    }
//    const leftArr = []
//    const rightArr = []

// // 选取基准值
//    const mid = arr.splice(Math.floor(arr.length/2),1)[0]
//   //  小于基准值的放入左边 大于基准值的放入右边
//    for (let index = 0; index < arr.length; index++) {
//      if(arr[index] < mid){
//        leftArr.push(arr[index])
//      }else {
//       rightArr.push(arr[index])
//     }
//    }
// // 开始递归 重复上述步骤
//    return quickSort(leftArr).concat([mid] , quickSort(rightArr))
//   }
/**------------------new 实现------------------ */
//  function myNew (fun,...rest){
//   const obj = Object.create(fun.prototype);
//   const res = fun.call(obj,...rest)
//   return res instanceof Object? res:obj
//  }