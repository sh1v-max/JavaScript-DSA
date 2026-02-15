/**
 * @param {string} s
 * @return {number}
 */

// Approach: two loop
// remove extra space at the beginning and end of the string
// use split to get words, and use length to get the last word
// Return the length of the last word

var lengthOfLastWord = function (s) {
  let n = s.length - 1
  while (n >= 0) {
      if (s[n] == " ") {
          n--;
      } else {
          break
      }
  }

  let count = 0
  while (n > 0) {
      if (s[n] != " ") {
          count++;
          n--;
      } else {
          break
      }
  }
  return count
};


// time complexity: O(n)
// space complexity: O(1)
