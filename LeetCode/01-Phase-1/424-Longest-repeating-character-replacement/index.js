// 424. Longest Repeating Character Replacement
// https://leetcode.com/problems/longest-repeating-character-replacement/

// Given a string s that consists of only uppercase English letters, you can perform at most k operations on the string.

// In one operation, you can choose any character of the string and change it to any other uppercase English character.

// Find the length of the longest sub-string containing all repeating letters you can get after performing the above operations.

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

// approach: sliding window
// intuition:
// let's say w is length of window, and the most freq char inside it appears f times
// then the number of character we need to replace is w - f
// if w - f > k, we need to shrink the window
// if w - f <= k, we can expand the window and store the max length of valid window

// approach:
// we will use two pointers, left and right for sliding window
// track the freq of char in the curr window, also the max freq
// the window is valid if:
// window length - max freq of char <= k, because we can replace the rest with most freq char
// if not valid, move left pointer
// if valid, move right pointer
// return max window length

function characterReplacement(s, k) {
  let l = 0
  let freq = {}
  let maxFreq = 0
  let res = 0

  for (let r = 0; r < s.length; r++) {
    freq[s[r]] = (freq[s[r]] || 0) + 1
    maxFreq = Math.max(maxFreq, freq[s[r]])

    while (r - l + 1 - maxFreq > k) {
      freq[s[l]]--
      l++
    }

    res = Math.max(res, r - l + 1)
  }
  return res
}

// time complexity: O(n)
// space complexity: O(1), because map only stores 26 char

// another approach: easy to understand code

function characterReplacement(s, k) {
  let i = 0,
    j = 0
  let map = Array(26).fill(0)
  map[s.charCodeAt(0) - 65] = 1
  let maxWindow = 0
  while (j < s.length) {
    if (isWindowValid(map, k)) {
      maxWindow = Math.max(maxWindow, j - i + 1)
      ++j
      ++map[s.charCodeAt(j) - 65]
    } else {
      --map[s.charCodeAt(i) - 65]
      ++i
    }
  }
  return maxWindow
}

function isWindowValid(map, k) {
  let totalCount = 0
  let maxCount = 0
  for (let i = 0; i < 26; i++) {
    totalCount += map[i]
    maxCount = Math.max(maxCount, map[i])
  }
  return totalCount - maxCount <= k
}

// time complexity: O(n)
// space complexity: O(1)