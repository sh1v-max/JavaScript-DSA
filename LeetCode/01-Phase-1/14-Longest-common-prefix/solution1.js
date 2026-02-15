/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = []
  let longestString = strs[0]
  strs.forEach((str) => {
    longestString = str.length < longestString.length ? str : longestString
  })
  for (let i = 0; i < longestString.length; i++) {
    let res = true
    strs.forEach((str) => {
      if (str[i] !== longestString[i]) {
        res = false
      }
    })
    if (res) {
      result.push(longestString[i])
    } else {
      break
    }
  }
  return result.join('')
}
