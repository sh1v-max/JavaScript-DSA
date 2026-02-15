/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

// approach 2: brute force
// using for loop instead of includes

var numJewelsInStones = function (jewels, stones) {
  let count = 0
  for (let i = 0; i < stones.length; i++) {
      for (let j = 0; j < jewels.length; j++) {
          if (stones[i] === jewels[j]) {
              count++
              break
          }
      }
  }
  return count
};

// time complexity: O(n^2)
// space complexity: O(1)