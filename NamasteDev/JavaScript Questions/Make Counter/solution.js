function makeCounter(initialValue = 0) {
  // Your implementation
  let c = initialValue
  return {
      increment: () => {
          c++
          return c
      },
      decrement: () => {
          c--
          return c
      },
      reset:() => {
          c = initialValue
          return c
      }
  }
}
let counter = makeCounter(10)
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.increment())
counter = null


module.exports = makeCounter;