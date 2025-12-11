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
// - every single character is a palindrome → guaranteed count
// - a substring s[i..j] is a palindrome if:
//       1) s[i] === s[j]
//       2) the inside substring s[i+1..j-1] is also a palindrome
// - this naturally forms a dp relation:
//       dp[i][j] = true if s[i] === s[j] and dp[i+1][j-1] is true
// - base cases:
//       1) length 1 substrings → always palindrome
//       2) length 2 substrings → palindrome only if both chars equal
// - once base cases are set, build longer substrings by expanding outward
// - count every dp[i][j] that becomes true

// approach (bottom-up dp):
// - create an n×n dp matrix where dp[i][j] means "s[i..j] is palindrome"
// - initialize:
//       dp[i][i] = true (all 1-length palindromes)
//       dp[i][i+1] = true if s[i] === s[i+1] (2-length palindromes)
// - for all lengths ≥ 3:
//       for each valid start index i:
//            j = i + len - 1
//            s[i..j] is palindrome if:
//                 s[i] === s[j] AND dp[i+1][j-1] is true
//            if yes → mark dp[i][j] = true and increment the count
// - return total count

var countSubstrings = function (s) {
  let n = s.length
  // created 2D dp array of size n*n
  let dp = Array.from({ length: n }, () => Array(n).fill(null))
  let res = 0

  /*
  base case are 1 len, and 2 len substrings
  for (let i = 0; i < n; i++) {
    dp[i][i] = true
  }
  for len 2 substrings
  for (let i = 0; i < n; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true
    } else {
      dp[i][i + 1] = false
    }
  }
  */

  // or we can do both in one loop
  for (let i = 0; i < n; i++) {
    // all single len substrings are palindrome
    dp[i][i] = true
    res++
    // all substring of len 2 which are palindrome
    if (i < n - 1 && s[i] === s[i + 1]) {
      dp[i][i + 1] = true
      res++
    }
  }

  // now for len greater than 2
  for (let len = 3; len <= n; len++) {
    for (let i = 0; i <= n-len; i++){
      let j = i + len - 1
      // using the subproblem formula
      if(s[i] === s[j] && dp[i+1][j-1]){
        dp[i][j] = true
        res++
      }
    }
  }

  return res
}

// time: o(n^2), checking all substring ranges
// space: o(n^2), dp matrix storing palindrome status of every substring






