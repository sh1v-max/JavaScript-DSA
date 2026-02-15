// 17. Letter Combinations of a Phone Number
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

// given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:
// Input: digits = ""
// Output: []

// Example 3:
// Input: digits = "2"
// Output: ["a","b","c"]

// intuition
// each digit (2-9) corresponds to a set of letters, like a phone keypad
// we need to generate every possible string formed by taking one letter per digit
// this is a typical backtracking problem because at each step:
//   - we make a choice (pick one letter),
//   - explore further (move to next digit),
//   - undo the choice (backtrack) to try another letter

// approach
// handle edge case: if digits is empty, return []
// create a mapping of digits → letters
// define a recursive helper function backtrack(path, index):
//   - if index === digits.length, join the path into a string and add it to results
//   - otherwise, get all possible letters for the current digit
//     for each letter:
//        - push it into path (choose step)
//        - call backtrack(path, index + 1) to explore further
//        - pop it after returning (backtrack step)
// start recursion with backtrack([], 0).
// return the result list

var letterCombinations = function (digits) {
  if (!digits.length) return []
  let letters = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }
  let result = []
  let backtrack = (path, index) => {
    // base case
    // after processing all digits join the path and add to res
    if (index === digits.length) {
      result.push(path.join(""))
      // as index is equal to digits length, we have formed a valid combination and backtrack
      return
    }
    // every possible choice for current digit
    let choices = letters[digits[index]]
    for (let i = 0; i < choices.length; i++) {
      path.push(choices[i])
      backtrack(path, index + 1)
      path.pop()
    }
  }
  backtrack([], 0)
  return result
}

// time complexity: O(3^m * 4^n)
// m = number of digits that map to 3 letters (2,3,4,5,6,8)
// n = number of digits that map to 4 letters (7,9)
// total combinations = 3^m * 4^n
// we build each combination in O(m + n) time
// overall: O((m + n) * 3^m * 4^n)

// or simply O(4^n), n = digits.length (worst case all digits are 7 or 9)

// space complexity: O(n) for recursion stack + O(4^n) for storing results
