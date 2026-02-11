// 1358. Numbers of Substrings Containing All Three Characters
// https://leetcode.com/problems/numbers-of-substrings-containing-all-three-characters/

// intuition:
// we need to count substrings containing at least one of each char
// this is sliding window problem
// when a window contains all three characters,
// every extension of that window to the right will also be valid
// why? because it contains at least one of each char
// let's say at i = 0, we have all a, b, and c in the window of size 3, right = 2
// so, tf the current window is [left … right] and it is valid, 
// then the valid substrings are:
// - [left … right]
// - [left … right+1]
// - [left … right+2]
// - ...
// - [left … n-1]
// so when valid, we add (n - right) to the result
// then shrink from left to find more valid windows

// approach:
// initialize left = 0, res = 0
// maintain freq of a, b, and c
// iterate right from 0 to n - 1
// while window contains at least one of each character:
// - add (n - right) to res
// - shrink window from left
// return res

var numberOfSubstrings = function (s) {
  let left = 0
  let res = 0
  let n = s.length

  let freq = { a: 0, b: 0, c: 0 }
  // as it's only 3 char, we don't necessarily need hashmap

  for (let right = 0; right < n; right++) {
    freq[s[right]]++

    while (freq.a > 0 && freq.b > 0 && freq.c > 0) {
      res += n - right
      freq[s[left]]--
      left++
    }
  }

  return res
}

// time complexity: O(n)
// space complexity: O(1)
