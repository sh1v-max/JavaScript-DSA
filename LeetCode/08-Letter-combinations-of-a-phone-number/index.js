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
// each digit (2-9) maps to some letters (like old phone keypad)
// we need all possible strings that can be formed by choosing one letter
// from each digit's letter set — i.e., the cartesian product of all digit-letter mappings
// this can be solved by recursion/backtracking:
//  - pick a letter for the current digit
//  - move to the next digit
//  - when all digits are used, record the built combination

// approach
// create a map of digits → letters
// define a recursive function backtrack(index, path):
//   - if index === digits.length, push path to result
//   - else, for each letter in map[digits[index]], append it to path and recurse
// handle the edge case when digits = "" (return [])
// start recursion with backtrack(0, "")
// finally, return the result list

var letterCombinations = function (digits) {
  if(digits.length === 0) return []

  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }

  const res = []
  const backtrack = (index, path) => {
    // base case
    // if the current combination is done, store it
    if (index === digits.length) {
      res.push(path)
      return
    }

    // get the letters that the current digit maps to
    const letters = map[digits[index]]

    // loop through the letters and call recursion
    for (let ch of letters) {
      backtrack(index + 1, path + ch)
    }
  }

  backtrack(0, "")
  return res
}


// time complexity: O(3^m * 4^n)
// m = number of digits that map to 3 letters (2,3,4,5,6,8)
// n = number of digits that map to 4 letters (7,9)
// total combinations = 3^m * 4^n
// we build each combination in O(m + n) time
// overall: O((m + n) * 3^m * 4^n)

// or simply O(4^k), k = digits.length (worst case all digits are 7 or 9)

// space complexity: O(n) for recursion stack + O(4^n) for storing results