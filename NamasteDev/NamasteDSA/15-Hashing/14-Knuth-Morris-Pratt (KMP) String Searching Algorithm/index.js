// 28. find the index of first occurrence in a string
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
//
// problem:
// given two strings, a needle and a haystack, find the index of the first occurrence of needle in haystack.
// if needle is not part of haystack, return -1
// the needle can appear multiple times inside haystack, but we should return the index of the first occurrence.
//
// example 1:
// input: haystack = "sadbutsad", needle = "sad"
// output: 0
// explanation: "sad" occurs at index 0 and 6.
// the first occurrence is at index 0, so we return 0.

// Easy Approach (Sliding window)
//
// intuition:
// just brute force it: slide a window of size needle.length over haystack.
// at each step, check if the substring matches needle.
// if yes, return index.
// if no, keep sliding.
//
// time Complexity: O(n*m)
// space Complexity: O(1)

function strStrNaive(h, n) {
  if (n.length === 0) return 0
  if (h.length < n.length) return -1

  for (let i = 0; i <= h.length - n.length; i++) {
    let isTrue = true
    for (let j = 0; j < n.length; j++) {
      if (h[i + j] !== n[j]) {
        isTrue = false
        break
      }
    }
    if (isTrue) return i
  }
  return -1
}

// KMP algorithm (optimized)
//
// why sliding window is bad?
// because when a mismatch happens, we throw away all the progress
// and restart checking from scratch.
//
// what does KMP do better?
// - it builds an "LPS array" (Longest Prefix Suffix) for the needle.
// - this array tells us: "after a mismatch, how much of the needle
//   is still valid so we can continue matching without re-checking haystack chars."
//
// example: needle = "ababaca"
// LPS = [0, 0, 1, 2, 3, 0, 1]
// this means at position 4 ("ababa"), the longest prefix that is also a suffix is "aba" (length 3).
//
// so if mismatch happens at needle[4], we don’t throw away everything;
// we know the first 3 chars are still good, so we jump j, 3 and keep going.
// importantly: haystack index i does NOT move back — we never re-read haystack characters.
//
// that’s how KMP avoids wasteful re-checking.

// build LPS Array
//
// lps[i] = the length of the longest proper prefix of needle[0..i]
//          which is also a suffix of needle[0..i].
//
// building it is like "self matching" the needle against itself.

function buildLPS(pattern) {
  const lps = new Array(pattern.length).fill(0)
  let len = 0
  // length of previous longest prefix suffix
  let i = 1

  while (i < pattern.length) {
    if (pattern[i] === pattern[len]) {
      len++
      lps[i] = len
      i++
    } else {
      if (len > 0) {
        // shrink the prefix, try the previous LPS
        len = lps[len - 1]
      } else {
        lps[i] = 0
        i++
      }
    }
  }
  return lps
}

// KMP Search Implementation
//
// here’s how we use LPS while searching haystack:
// - start comparing haystack[i] with needle[j].
// - if match, i++ and j++.
// - if mismatch:
//     - if j > 0, don’t reset j to 0.
//       instead, jump j = lps[j-1] (reuse the info about prefix-suffix).
//     - if j == 0, just move i++.
// - if j == needle.length, it means we matched the entire needle!
//   so return i - j (starting index).
//
// key point: i never moves backwards, only j jumps using LPS.
// that’s the efficiency of KMP.

function strStrKMP(h, n) {
  if (n.length === 0) return 0
  if (h.length < n.length) return -1

  const lps = buildLPS(n)
  let i = 0
  let j = 0

  while (i < h.length) {
    if (h[i] === n[j]) {
      i++
      j++
      if (j === n.length) {
        return i - j
        // full match found
      }
    } else {
      if (j > 0) {
        j = lps[j - 1]
        // use LPS to shift needle
      } else {
        i++
        // mismatch at start, just move haystack
      }
    }
  }

  return -1
}

// time complexity: O(m + n) m is needle length, and O(m) to form LPS, n is haystack
// space complexity: O(m)
