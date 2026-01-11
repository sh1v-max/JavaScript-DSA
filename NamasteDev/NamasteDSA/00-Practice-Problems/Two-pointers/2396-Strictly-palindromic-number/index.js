// 2396. Strictly palindromic number
// https://leetcode.com/problems/strictly-palindromic-number/

// An integer n is strictly palindromic if, for every base b between 2 and n - 2 (inclusive), the string representation of the integer n in base b is palindromic.

// Given an integer n, return true if n is strictly palindromic and false otherwise.

// A string is palindromic if it reads the same forward and backward.

// Example 1:
// Input: n = 9
// Output: false
// Explanation: In base 2: 9 = 1001 (base 2), which is palindromic.
// In base 3: 9 = 100 (base 3), which is not palindromic.
// Therefore, 9 is not strictly palindromic so we return false.
// Note that in bases 4, 5, 6, and 7, n = 9 is also not palindromic.

// Example 2:
// Input: n = 4
// Output: false
// Explanation: We only consider base 2: 4 = 100 (base 2), which is not palindromic.
// Therefore, we return false.

// intuition:
// - try every allowed base
// - convert n to that base
// - check whether the resulting string is a palindromic
// - if even one base fails, the number is not strictly palindromic

// approach:
// - start with the smallest allowed base, base = 2
// - iterate through all bases from 2 up to n − 2:
//    - convert n to its representation in the current base using n.toString(base)
//    - reverse the string and compare it with the original
// - if the representation is not palindromic for any base: return false immediately (fail fast)
// - if all bases are checked and none fail: return true
// this approach ensures:
//    - correctness (every required base is checked)
//    - efficiency (early exit on failure)

var isStrictlyPalindromic = function (n) {
  // directly return false
  // for every n>= 4, the representation of n in base n - 2 is always 12, which is never palindrome
  // return false

  //
  let base = 2
  while (base <= n - 2) {
    let baseNum = n.toString(base)
    if (baseNum !== baseNum.split('').reverse().join('')) {
      return false
    }
    base++
  }

  return true
}

// time complexity: O(n log n)
// space complexity: O(log n)
