// 567. Permutation in String
// https://leetcode.com/problems/permutation-in-string/

// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

// Example:
// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

//? 567. Permutation in String

// approach: sliding window with frequency count
// intuition:
// we want to know if s2 contains any permutation of s1
// a permutation of s1 means: same characters with same frequency, just in any order
// so instead of generating permutations, we just need to check if any substring of s2 with length = s1.length has the same frequency distribution as s1

// approach:
// build frequency count of s1 and first window in s2 of size = s1.length in an array of size 26 (since lowercase English letters) 
// use sliding window with two pointers (i, j):
// at each step, compare the frequency arrays of s1 and current window in s2
// if they match, it means this window is a permutation of s1, return true
// else, slide the window: remove char at i, move i and j, and then add next char at j+1 (add next only after moving j pointer)
// if no match found after traversing s2, return false


function checkInclusion(s1, s2) {
  let hashS1 = Array(26).fill(0)
  let window = Array(26).fill(0)
  let n = s1.length
  // creating hash for both strings and window
  for (let i = 0; i < n; i++) {
    hashS1[s1.charCodeAt(i) - 97]++
    window[s2.charCodeAt(i) - 97]++
  }

  let i = 0
  let j = n - 1
  while (j < s2.length) {
    if (isWindowSame(hashS1, window)) {
      return true
    } else {
      if (j + 1 < s2.length) {
        window[s2.charCodeAt(i) - 97]--
        i++
        j++
        window[s2.charCodeAt(j) - 97]++
      } else {
        break
      }
    }
  }
  return false
}

function isWindowSame(hashS1, window) {
  for (let i = 0; i < hashS1.length; i++) {
    if (hashS1[i] !== window[i]) return false
  }
  return true
}

// time: O(26 * (n + m)) = O(26 * n) = O(n), where n = s2.length
// space: O(1), constant, since frequency array size is fixed (26)