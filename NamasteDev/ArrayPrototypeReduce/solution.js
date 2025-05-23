Array.prototype.myReduce = function (callback, initialValue) {
  // Your implementation
  // console.log(callback)
  // console.log(this)
  // console.log("hello")
  if (typeof callback !== 'function') {
      throw new TypeError('callback is undefined')
  }
  const arr = Object(this)
  console.log(arr)
  console.log(Array.isArray(arr))
  console.log(typeof arr)
  if (this == null) {
      throw new TypeError("called on null or undefined")
  }
  let acc
  let startIndex
  // console.log(acc)
  // console.log(startIndex)
  if (initialValue !== undefined) {
      acc = initialValue
      startIndex = 0
      // console.log(acc)
  } else {
      if (arr.length === 0) {
          throw new TypeError("reduce of empty array")
      }
      acc = arr[0]
      startIndex = 1
      console.log(acc)
      console.log(startIndex)
  }
  for (let i = startIndex; i < arr.length; i++) {
      if (i in arr) {
          acc = callback(acc, arr[i], i, arr);
      }
  }
  console.log(acc)
  return acc
}

const arr = [4, 2, 6]
arr.myReduce((acc, curr) => acc + curr)