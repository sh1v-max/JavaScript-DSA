/**
 * @param {string} num
 * @return {string}
 */

// approach:
// start from end, check if number is odd
// if no, keep moving backward
// if yes, return the number from index 0 to that digit
// if not found, return empty string ""

var largestOddNumber = function (num) {
  let n = num.length - 1
  while (n >= 0) {
      if (Number(num[n]) % 2 == 1) {
          return num.substring(0, n + 1)
          // as substring doesn't include end
      }
      n--
  }
  return ""
};

// time complexity: O(n)
// space complexity: O(1)
