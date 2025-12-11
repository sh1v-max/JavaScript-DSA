// 647. Palindromic Substrings
// https://leetcode.com/problems/palindromic-substrings/

// given a string s, return the number of palindromic substrings in it.
// a string is a palindrome when it reads the same backward as forward.
// a substring is a contiguous sequence of characters within the string.

// Example 1:
// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".

// Example 2:
// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

// intuition:
// - we want the longest palindromic substring, not the count
// - same core idea: a substring s[i..j] is palindrome if:
//        s[i] === s[j]  AND  s[i+1..j-1] is palindrome
// - so dp[i][j] tells whether s[i..j] is a palindrome
// - base cases:
//        dp[i][i] = true → single characters
//        dp[i][i+1] = true if s[i] === s[i+1] → 2-length palindromes
// - once these are set, expand to longer lengths
// - whenever dp[i][j] becomes true, update the best (longest) range
// - keep track of [start, end] for the longest palindrome found so far
// - return the end - start + 1

// approach (bottom-up dp):
// - create n×n dp matrix initialized to false
// - fill base palindromes of length 1 and 2
// - for lengths from 3 to n:
//        iterate all possible starting points i
//        let j = i + length - 1
//        if s[i] === s[j] AND dp[i+1][j-1] is true:
//             mark dp[i][j] = true
//             update current best substring range to [i, j]
// - return the end - start + 1

var longestPalindrome = function (s) {
  let n = s.length
  // created 2D dp array of size n*n
  // dp[i][j] will be true if s[i..j] is a palindrome
  let dp = Array.from({ length: n }, () => Array(n).fill(false))
  // we're storing two thing, where it starts, and where it ends... a range
  let res = [0, 0]
  // res[0] = start, res[1] = end

  // or we can do both in one loop
  for (let i = 0; i < n; i++) {
    // all single len substrings are palindrome
    dp[i][i] = true
    // all substring of len 2 which are palindrome
    if (i < n - 1 && s[i] === s[i + 1]) {
      dp[i][i + 1] = true
      res = [i, i + 1]
    }
  }

  // now for len greater than 2
  for (let len = 3; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      let j = i + len - 1
      // using the subproblem formula
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true
        // when dp [i][j] turn true, s[i...j] is a palindrome
        // res will point the boundary
        res = [i, j]
      }
    }
  }

  return s.substring(res[0], res[1] + 1)
}

// time: o(n^2), checking all substring ranges, and dp transition
// space: o(n^2), dp matrix storing palindrome status of every substring
