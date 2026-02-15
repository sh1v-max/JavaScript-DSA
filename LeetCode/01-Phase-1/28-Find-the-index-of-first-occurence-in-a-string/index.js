// 28. find the index of first occurrence in a string
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

// given a two string, a needle and a haystack, find the index of the first occurrence of needle in haystack
// if needle is not part of haystack, return -1
// the needle can be part of haystack multiple times, and you should return the index of the first occurrence of needle in haystack

// example 1:
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// intuition:
// this is a string searching algorithm problem
// we cannot use the built-in indexOf method

// approach: sliding window
// in sliding window, we will maintain a window of size equal to the length of needle
// we will slide the window over the haystack and check if the
// iterate i from 0 to haystack.length - needle.length
// now check if the substring from i to i + needle.length is equal to needle
// if it is, we will return the starting index

function strStr(h, n) {
  // corner cases
  if (n.length === 0) return 0
  if (h.length < n.length) return -1

  for (let i = 0; i <= h.length - n.length; i++) {
    // check if the substring from i to i + n.length is equal to n
    let isTrue = true
    for (let j = 0; j < n.length; j++) {
      if (h[i + j] !== n[j]) {
        isTrue = false
        break
      }
    }
    if (isTrue) {
      return i
    }
  }

  return -1
}

// time complexity: O(n*m
// space complexity: O(1)
