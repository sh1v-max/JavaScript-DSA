function findMaxNumber(arr) {
  // Your implementation
  const sample = [...arr]
  console.log(sample)
  if (arr.length === 0) { 
      return null
  }
  let max = sample[0]
  for (let i = 1; i < arr.length; i++){
      if (arr[i] > max) {
          max = arr[i]
      }
  }
  console.log(max)
  return max

}

//For the purpose of user debugging.
findMaxNumber([1, 2, 3, 4, 5]);

module.exports = findMaxNumber