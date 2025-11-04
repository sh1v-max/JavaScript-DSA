// 131. Palindrome Partitioning
// Medium
// https://leetcode.com/problems/palindrome-partitioning/

// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

// A palindrome string is a string that reads the same backward as forward.

// Example 1:
// input: s = "aab"
// output: [["a","a","b"],["aa","b"]]

// example 2:
// input: s = "a"
// output: [["a"]]

// backtracking approach
// intuition
// we need to partition the string into all possible groups such that each substring is a palindrome
// for example, in "aab", one valid partition is ["a", "a", "b"] because every part is a palindrome
// another is ["aa", "b"] because "aa" is also a palindrome
// this is a perfect use case for backtracking — we try every possible partition and only continue exploring if the current substring is a palindrome
// at each step, we:
// - take a prefix substring (from 0 to i)
// - check if it's a palindrome
// - if yes, include it in the current path and recursively solve for the remaining string
// - if the remaining string becomes empty, we’ve found a valid partition
// - then we backtrack (remove last substring) and try other possibilities
// so, we explore every cut point and collect only those combinations where all pieces are palindromes

// approach
// define a helper function isPalindrome(str) that checks whether a string is a palindrome using two pointers
// define a backtrack function(path, remString):
//   - if remString is empty, add a copy of path to the result array and return
//   - loop over the string from i = 1 to remString.length:
//       - extract substring(0, i)
//       - if it’s not a palindrome, skip it
//       - otherwise, push it to path and recurse on the remaining substring(i)
//       - after recursion, pop it to backtrack
// call backtrack([], s) to start recursion from the full string
// return the result array containing all valid palindrome partitions

var partition = function (s) {
  let res = []

  let backtrack = (path, remString) => {
    // if we reach the point where remaining string is empty, we found a valid partition, add it to res
    if (remString.length === 0) {
      res.push([...path])
      return
    }

    for (let i = 1; i <= remString.length; i++) {
      // start for from i = 1 to include characters as substring(0, 1), (0, 2) etc

      if (!isPalindrome(remString.substring(0, i))) continue

      path.push(remString.substring(0, i))
      backtrack(path, remString.substring(i))
      // substring will be from ith index to end
      path.pop()
    }
  }
  backtrack([], s)

  return res
}

let isPalindrome = (s) => {
  let l = 0
  let r = s.length - 1

  while (l < r) {
    if (s[l] !== s[r]) return false
    l++
    r--
  }
  return true
}

// time: O(n.2^n) where n is the length of the string
// O(n) for checking palindrome and O(2^n) for generating all possible partitions, which is two choices (cut or not cut) at each char
// space: O(n) for the recursion stack and path storage