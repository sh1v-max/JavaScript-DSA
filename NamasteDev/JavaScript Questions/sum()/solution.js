function sum(...args) {
  // Your implementation
  const sum = args.reduce((acc, curr) => {
      return acc + curr
  }, 0)
  return sum
  // console.log(sum)
}

//For the purpose of user debugging.
sum(1,2,3,4,5);

module.exports = sum