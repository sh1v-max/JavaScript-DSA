/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

// approach 3: efficient
// using hash or set
// note: whenever we're searching elements in array or strings
// always use hashmap or set
// also searching in set/hash takes O(1)

var numJewelsInStones = function (jewels, stones) {
  let count = 0
  let jewelsSet = new Set()
  for (let i = 0; i < jewels.length; i++) {
      jewelsSet.add(jewels[i])
  }

  for (let i = 0; i < stones.length; i++) {
      if (jewelsSet.has(stones[i])) {
          count++
      }
  }
  return count
};

// time complexity: O(n)
// space complexity: O(1)
// because jewels and stones are strings of only alphabets
// 26-small and 26-big, total 52, which i relatively small
// so the space complexity is O(1)
// this concept is called hashing