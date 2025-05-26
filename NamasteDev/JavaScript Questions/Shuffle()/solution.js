function once(fn) {
  // Your code here ...
  let called = false
  let res
  return function (...args) {
    try {
      if (!called) {
        // console.log(...args);
        res = fn.apply(this, args);
        called = true;
      }
    } catch (err) {
      throw err
    }
    return res
  };
}
let one = once((a, b) => a + b)
console.log(one(1, 2))

// const demoFunction = (a, b) => a + b
// const useFunction = once(demoFunction)
// const useFunction2 = once(demoFunction)
// const res = useFunction(5, 7)
// const res2 = useFunction2(5, 10)
// console.log(res)
// console.log(res2)
module.exports = once;
