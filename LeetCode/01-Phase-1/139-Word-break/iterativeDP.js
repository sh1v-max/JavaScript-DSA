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

// APPROACH (BOTTOM-UP / ITERATIVE DP):

// intuition:
// - We are NOT trying to split the string in all possible ways
// - We only care whether the string can be broken into
//   valid dictionary words (true / false)
// - Think in terms of prefix validity, not random splits
// - If we already know that s[0..j-1] can be segmented,
//   and the substring s[j..i-1] exists in the dictionary,
//   then s[0..i-1] is also segmentable
// - This forms a classic DP chain:
//   valid prefix -> extend using a valid word -> new valid prefix
// - Once a prefix is invalid, it’s a dead end
//   We never build on invalid prefixes

// state definition for DP:
// dp[i] = true
// means:
//   the substring s[0 .. i-1] (prefix ending before i)
//   can be segmented using words from the dictionary
// dp[0] = true → empty string is always valid

// recurrence relation:
// dp[i] = true
// if there exists any j < i such that:
//   dp[j] === true
//   AND
//   s[j .. i-1] is present in wordDict
// If no such j exists → dp[i] = false

// APPROACH (BOTTOM-UP / ITERATIVE DP):
// Convert wordDict into a Set for O(1) lookups
// Create a dp array of size n + 1, initialized to false
// Set dp[0] = true (base case)
// For every index i from 1 to n:
//   - Try all previous cuts j from 0 to i-1
//   - If dp[j] is true AND s[j..i-1] exists in dictionary:
//         mark dp[i] = true
//         break early (no need to check further)
// Final answer is dp[n] (entire string)

var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict)
  const n = s.length

  // dp[i] -> s[0..i-1] can be segmented
  const dp = Array(n + 1).fill(false)

  // empty string is always valid
  dp[0] = true

  // build dp from left to right
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      // if prefix till j is valid
      // and word s[j..i-1] exists
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true
        break
      }
    }
  }

  return dp[n]
}

// time complexity: O(n^2)
// space complexity: O(n)