// 771. Jewels and Stones
// https://leetcode.com/problems/jewels-and-stones/

// given two string, jewels and stones, return the count of stones that are jewels

// approach: easy
// iterate through stones, take one character at a time
// and use incudes to see if it's a jewel or not

function numJewelsInStones(jewels, stones) {
  let count = 0
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) {
      count++
    }
  }
  return count
}

// approach 2: brute force
// using for loop instead of includes

function numJewelsInStones(jewels, stones) {
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
}

// time complexity: O(n^2)
// space complexity: O(1)

// approach 3: efficient
// using hash or set
// note: whenever we're searching elements in array or strings
// always use hashmap or set
// also searching in set/hash takes O(1)

function numJewelsInStones(jewels, stones) {
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
}


// time complexity: O(n)
// space complexity: O(1)
// because jewels and stones are strings of only alphabets
// 26-small and 26-big, total 52, which i relatively small
// so the space complexity is O(1)
// this concept is called hashing