/**
 * @param {string} s
 * @return {number}
 */

// approach: one loop
// start from the end, skip spaces
// count character and return the count
// that will be length of last word

var lengthOfLastWord = function (s) {
  let n = s.length;
  let count = 0;

  for (let i = n - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      count++;
    } else if (count > 0) {
      break;
    }
  }

  return count;
};

// time complexity: O(n)
// space complexity: O(1)