/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

// approach: easy
// iterate through stones, take one character at a time
// and use incudes to see if it's a jewel or not
 
var numJewelsInStones = function (jewels, stones) {
  let count = 0
  for (let i = 0; i < stones.length; i++) {
      if (jewels.includes(stones[i])) {
          count++
      }
  }
  return count
};

// Time complexity: O(n^2)
// Space complexity: O(1)