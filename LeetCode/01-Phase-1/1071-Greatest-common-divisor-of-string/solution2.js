/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  function gcd(a, b) {
    while (b !== 0) {
      let temp = b
      b = a % b
      a = temp
    }
    return a
  }

  if (str1 + str2 !== str2 + str1) {
    return ''
  }

  const lenGCD = gcd(str1.length, str2.length)

  return str1.slice(0, lenGCD)
}
