function removeDuplicates(arr) {
  // your code here
  let res = []
  for (let i = 0; i <= arr.length - 1; i++) {
     if (res.includes(arr[i])) {
     } else {
      res.push(arr[i])
    }
   }
  console.log(arr)
  console.log(res)
  return res
}
removeDuplicates([1, 2, 2, 3, 4, 4])
module.exports = removeDuplicates;
