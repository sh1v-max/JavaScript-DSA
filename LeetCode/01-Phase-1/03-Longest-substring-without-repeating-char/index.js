// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Given a string s, find the length of the longest substring without repeating characters.

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// approach: two pointer, sliding window

// intuition:
// to get the longest substring without repeating char, we need to find the longest substring with unique char
// so we maintain a window that always has unique chars
// when a duplicate appears inside the window, we will move the left boundary just past the prev occurrence of that char
// we'll track tha duplicate using map

// approach:
// keep two pointers i (left) and j (right)
// use a map to store the last index of each character
// move j forward one step at a time
// if s[j] already exists in the map and its index ≥ i, update i to map[s[j]] + 1
// update map[s[j]] with j
// at each step, compute j - i + 1 and update the maximum length

function lengthOfLongestSubstring(s) {
  let i = 0
  let maxWS = 0
  let map = {}

  for (let j = 0; j < s.length; j++) {
    if (map[s[j]] >= i) {
      i = map[s[j]] + 1
    }
    map[s[j]] = j
    let currWS = j - i + 1
    maxWS = Math.max(maxWS, currWS)
  }

  return maxWS
}

// time complexity: O(n)
// space complexity: O(n)