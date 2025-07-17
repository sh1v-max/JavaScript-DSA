/**
 * @param {string} s
 * @return {boolean}
 */

// approach: using extra space
// check for alphanumeric chars, lowercase all
// check for palindrome using split().reverse().join()

var isPalindrome = function (s) {
  s = s.toLowerCase()
  let str = ""
  let rev = ""
  for (let i = 0; i < s.length; i++) {
      // if (s[i].match(/[a-z0-9]/))
      if (
          (s[i].charCodeAt() >= 'a'.charCodeAt() &&
              s[i].charCodeAt() <= 'z'.charCodeAt()) ||
          (s[i].charCodeAt() >= '0'.charCodeAt() &&
              s[i].charCodeAt() <= '9'.charCodeAt())
      ) {
          str = str + s[i]
          rev = s[i] + rev
      }
  }
  return str === rev
};