// 91.Decode ways
// https://leetcode.com/problems/decode-ways/

// you have intercepted a secret message encoded as a string of numbers
// the message can be decoded by mapping
// '1' -> 'A', '2' -> 'B', ..., '26' -> 'Z'

// however, while decoding the message, you realize that there are many different ways you can decode the message because some codes are contained in other codes ( "2" and "5" VS "25")

// For example, "11106" can be decoded into:

// "AAJF" with the grouping (1, 1, 10, 6)
// "KJF" with the grouping (11, 10, 6)
// The grouping (1, 11, 06) is invalid because "06" is not a valid code (only "6" is valid).

// Note: there may be strings that are impossible to decode.

// Given a string s containing only digits, return the number of ways to decode it. If the entire string cannot be decoded in any valid way, return 0.

// The test cases are generated so that the answer fits in a 32-bit integer

// Example 1:
// Input: s = "12"
// Output: 2
// Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).

// Example 2:
// Input: s = "226"
// Output: 3
// Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

// Example 3:
// Input: s = "06"
// Output: 0
// Explanation: "06" cannot be mapped to "F" because of the leading zero ("6" is valid, but "06" is not).

// this is the basic recursive solution without any memoization, so will give TLE for large inputs
var numDecodings0 = function (s) {
  let fn = (remS) => {
    // base cases
    // if rem string is empty, we have found a valid decoding
    if (remS === '') return 1
    // if rem string starts with 0, no valid decoding
    if (remS === '0') return 0
    let n = remS.length

    // we're taking case of 1 digit and 2 digit decoding (for the last 2 digits)
    // oneDigit is last char
    let oneDigit = remS.substring(n - 1)
    // last two digits
    let twoDigit = remS.substring(n - 2)

    let res = 0
    // we also need to take care that digits > 26 are not valid for 2 digit decoding
    // and 1-9 are valid for 1 digit decoding
    if (oneDigit != 0) {
      res += fn(remS.substring(0, n - 1))
    }

    if (twoDigit >= 10 && twoDigit <= 26) {
      res += fn(remS.substring(0, n - 2))
    }

    // recursive formula for subproblems
    // fn(remS) = fn(remS - oneDigit) + fn (remS - twoDigit)
    // return fn(remS.substring(0, n-1)) + fn (remS.substring(0, n-2))

    return res
  }
  return fn(s)
}

// memoized version of the above recursive solution

// intuition:
// - each digit or pair of digits can potentially map to a letter (1–26)
// - at any position in the string, we have at most two choices:
//        1) take one digit (if it is between '1' and '9')
//        2) take two digits (if the number is between 10 and 26)
// - the total number of ways to decode a string is the sum of the ways
//   obtained by making these valid choices
// - this leads to overlapping subproblems, because the same suffix of the
//   string can be reached through different paths
// - dynamic programming helps avoid recomputing results for the same substring
// - define a function that returns the number of ways to decode the remaining string

// approach (top-down DP with memoization):
// - define a recursive function fn(remS) that returns the number of ways
//   to decode the remaining string remS
// - base cases:
//        if remS is empty → return 1 (a complete valid decoding found)
//        if remS starts with '0' → return 0 (invalid encoding)
// - use a memo object (dp) to store results for already solved substrings
// - recursive transitions:
//        1) take 1 digit:
//             if the first character is not '0',
//             add fn(remS without first character)
//        2) take 2 digits:
//             if the first two characters form a number between 10 and 26,
//             add fn(remS without first two characters)
// - store the computed result in dp[remS] before returning it
// - the final answer is fn(s)

var numDecodings = function (s) {
  let dp = {}
  let fn = (remS) => {
    // base cases
    // if rem string is empty, we have found a valid decoding
    if (remS === '') return 1
    // if rem string starts with 0, no valid decoding
    if (remS === '0') return 0
    let n = remS.length

    // using the memoized res if already exists
    if (remS in dp) return dp[remS]
    // checking for a value using (remS in dp) is better than dp[remS]

    // we're taking case of 1 digit and 2 digit decoding (for the last 2 digits)
    // oneDigit is last char
    let oneDigit = remS.substring(n - 1)
    // last two digits
    let twoDigit = remS.substring(n - 2)

    let res = 0
    // we also need to take care that digits > 26 are not valid for 2 digit decoding
    // and 1-9 are valid for 1 digit decoding
    if (oneDigit != 0) {
      res += fn(remS.substring(0, n - 1))
    }

    if (twoDigit >= 10 && twoDigit <= 26) {
      res += fn(remS.substring(0, n - 2))
    }

    // recursive formula for subproblems
    // fn(remS) = fn(remS - oneDigit) + fn (remS - twoDigit)
    // return fn(remS.substring(0, n-1)) + fn (remS.substring(0, n-2))

    // storing the res in dp before returning
    dp[remS] = res
    return res
  }
  return fn(s)
}

// time: - O(n), where n is the length of the string
// each unique substring is computed once due to memoization

// space: - O(n), for the memoization map storing results of substrings
// plus O(n) recursion stack depth in the worst case
