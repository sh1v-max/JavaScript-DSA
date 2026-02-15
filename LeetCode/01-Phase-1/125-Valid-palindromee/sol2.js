/**
 * @param {string} s
 * @return {boolean}
 */

// approach: without extra space, or two pointers
// convert to lowercase
// initialize two pointers left and right
// check for palindrome using while loop being left < right
// write conditions to skip non alphanumeric, move pointers
// compare char at both pointers, if not equal, return false, else continue moving
// increment left and decrement right
// if are equal, return true

var isPalindrome = function (s) {
  s = s.toLowerCase()
  let l = 0
  let r = s.length - 1
  while (l < r){
      if(!s[l].match(/[a-z0-9]/)){
          l++
      }else if (!s[r].match(/[a-z0-9]/)){
          r--
      }else if (s[l] === s[r]){
          l++, r--
      }else {
          return false
      }
  }
  return true
};