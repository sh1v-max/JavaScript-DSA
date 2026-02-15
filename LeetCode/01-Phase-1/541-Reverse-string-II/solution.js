/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

// note:
// strings are immutable, and to change or reverse in string, we need to convert string into array
// s.split('') => convert string into array
// work on array, mutate it
// s.join() => convert array back to string

// approach:
// convert string in char array
// iterate over the array in steps of 2k
// at each step, reverse the first k char
// if there are less than k char in string, reverse the whole string
// join and return

var reverseStr = function (s, k) {
  s = s.split('')
  // jumping k times, because we need to reverse every 2k
  for (let i = 0; i < s.length; i = i + (2 * k)) {
      // reverse the first k elem starting from i
      let n = k
      let mid = Math.floor(n / 2)
      for (let j = 0; j < mid; j++) {
          let temp = s[i + j]
          s[i + j] = s[i + n - 1 - j]
          s[i + n - 1 - j] = temp
      }
  }
  return s.join('')
};