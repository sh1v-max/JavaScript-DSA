// 392. Is Subsequence
// https://leetcode.com/problems/is-subsequence/

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters
// (i.e., "ace" is a subsequence of "abcde" while "aec" is not)

// Example:
// Input: s = "abc", t = "ahbgdc"
// Output: true


// intuition:
// all the elements of s should be present in t in the same order
// but not necessarily consecutively

// approach: Two Pointers
// use two pointers, one for each string
// iterate through both strings
// if the current char of s matches the current char of t, move both pointers forward
// if the current char of s does not match the current char of t, move t++
// run until i < s.length && j < t.length
// if, i === s.length, return true
// else, return false


function isSubsequence(s, t) {
  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }

  return i === s.length;
}

// time complexity: O(n)
// space complexity: O(1)