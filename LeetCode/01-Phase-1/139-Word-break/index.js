// 139. Word Break
// https://leetcode.com/problems/word-break/

// given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Example 1:
// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

// Example 2:
// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.

// Example 3:
// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false

// simple recursive solution
var wordBreak0 = function (s, wordDict) {
  const wordSet = new Set(wordDict)

  let fn = (remS) => {
    // base case
    if (remS === '') return true
    let res = false

    for (let i = 0; i < remS.length; i++) {
      // substring(a, b) -> a to b-1
      let subStr = remS.substring(0, i + 1)
      // substring(a) -> a to end
      if (wordSet.has(subStr) && fn(remS.substring(i + 1))) {
        res = true
      }
    }
    // console.log(res)
    return res
  }
  return fn(s)
}

// intuition:
// - instead of building the answer from left to right,
//   we try to break the string from the front recursively
// - at every step, we ask:
//     "can the remaining string be segmented?"
// - if any prefix of the remaining string is a valid word
//   and the rest of the string can also be segmented,
//   then the whole string is valid
// - without memoization, this would be exponential,
//   because the same substrings get recomputed again and again
// - memoization converts this into dp

// state definition for DP:
// dp[remS] = true / false
// means:
//   the remaining string remS CAN / CANNOT be segmented
//   using words from the dictionary
// The DP state is the remaining suffix string itself

// base case:
// If remS === "" (empty string):
//   - all previous cuts were valid
//   - return true

// recursive function fn(remS):
// fn(remS) = true
// if there exists any index i such that:
//   prefix = remS[0 .. i]
//   AND prefix exists in dictionary
//   AND fn(remS[i+1 .. end]) === true
// Otherwise:
//   fn(remS) = false

// APPROACH (TOP-DOWN / RECURSIVE DP):
// convert wordDict into a Set for O(1) lookups
// use a memo object dp to store results for substrings
// define a recursive function fn(remS)
// try every possible prefix of remS
// if prefix is valid AND remaining suffix is valid:
//     return true immediately
// if no valid split works, store false in dp and return false

// recursive solution with memoization (top-down approach)
var wordBreak1 = function (s, wordDict) {
  const wordSet = new Set(wordDict)
  const dp = {}

  let fn = (remS) => {
    // base case
    if (remS === '') return true
    if (remS in dp) return dp[remS]
    let res = false

    for (let i = 0; i < remS.length; i++) {
      // substring(a, b) -> a to b-1
      let subStr = remS.substring(0, i + 1)
      // substring(a) -> a to end
      if (wordSet.has(subStr) && fn(remS.substring(i + 1))) {
        res = true
      }
    }
    // console.log(res)
    dp[remS] = res
    return res
  }
  return fn(s)
}

// time complexity: O(n^2)
// space complexity: O(n)