function groupBy(arr, key) {
  // Your implementation
  const res = {}
  for (const item of arr) {
      const keyVal = item[key]
      if (!res.hasOwnProperty(keyVal)) {
          res[keyVal] = []
      }
      res[keyVal].push(item)
  }
  console.log(res)
  return res
}

//For the purpose of user debugging.
//pass your array and key in function call
const users = [
  {name: 'alice', age: 25},
  {name: 'alice2', age: 25},
  {name: 'alice3', age: 30},
]
groupBy(users, 'age')
module.exports = groupBy;