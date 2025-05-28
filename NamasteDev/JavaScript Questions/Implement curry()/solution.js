function curry(fn) {
  // Your implementation
  function curried(...args) {
      if (args.length >= fn.length) {
          return fn(...args)
      } else {
          return function (...nextArgs) {
              return curried(...args, ...nextArgs)
          }
      }
  }
  console.log(curried(4,8,10))
  return curried
}

//For the purpose of user debugging.
//pass appropriate input in below function call
function sum(a, b, c) { 
  return a + b + c
}
const curriedSum = curry(sum);
console.log(curriedSum(1, 2, 3, 4, 5))
module.exports = curry