function chunkArray(arr, n) {
  // Your implementation
  const res = []
  for (let i = 0; i < arr.length; i += n) {
      res.push(arr.slice(i, i + n))
  }
  const arr1 = [1, 2, 3, 4, 5]
  arr1.push("hello")
  console.log(arr1)
  console.log(false = 1)
  return res
}

//For the purpose of user debugging.
//pass your array and chunk size in function call
chunkArray([1, 2, 3], 5);
module.exports = chunkArray
