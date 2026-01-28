// 12. Integer to Roman
// https://leetcode.com/problems/integer-to-roman/

// seven different symbols are used to represent numbers in the Roman numeral system:
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:

// If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.

// If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol, for example, 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).

// Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5 (V), 50 (L), or 500 (D) multiple times. If you need to append a symbol 4 times use the subtractive form.

// Given an integer, convert it to a Roman numeral.

// Example 1:
// Input: num = 3749
// Output: "MMMDCCXLIX"
// Explanation:
// 3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
//  700 = DCC as 500 (D) + 100 (C) + 100 (C)
//   40 = XL as 10 (X) less of 50 (L)
//    9 = IX as 1 (I) less of 10 (X)
// Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places

// Example 2:
// Input: num = 58
// Output: "LVIII"
// Explanation:
// 50 = L
//  8 = VIII

// Example 3:
// Input: num = 1994
// Output: "MCMXCIV"
// Explanation:
// 1000 = M
//  900 = CM
//   90 = XC
//    4 = IV

// intuition:
// - roman numerals are formed by subtracting values, not calculating directly
// - at each step, we should take the largest roman value
//   that does not exceed the current number
// - this greedy choice is always optimal because roman numerals
//   are designed from highest to lowest values
// - special cases like 4, 9, 40, 90, etc. are handled naturally
//   by including them explicitly in the roman rules

// approach (greedy with ordered roman rules):
// - define all valid roman numeral values and symbols
//   including subtractive cases, in descending order
// - initialize an empty result array to build the roman numeral
// - iterate through the roman rules from largest to smallest
// - for each rule:
//     - while the current number is greater than or equal to the rule value:
//         - append the corresponding symbol to the result
//         - subtract the rule value from the number
// - continue until the number becomes 0
// - join and return the result as a string

var intToRoman = function (num) {
  // all roman numerals and their values
  // order matters here
  const romanNumerals = [
    { val: 1000, sym: 'M' },
    { val: 900, sym: 'CM' },
    { val: 500, sym: 'D' },
    { val: 400, sym: 'CD' },
    { val: 100, sym: 'C' },
    { val: 90, sym: 'XC' },
    { val: 50, sym: 'L' },
    { val: 40, sym: 'XL' },
    { val: 10, sym: 'X' },
    { val: 9, sym: 'IX' },
    { val: 5, sym: 'V' },
    { val: 4, sym: 'IV' },
    { val: 1, sym: 'I' },
  ]

  const res = []

  // take the largest roman value that fits into the number, greedy rule
  // while number > 0{
  // takes biggest possible roman value
  // subtracts it
  // append its symbol
  // }

  // loop through all roman numerals
  for (let i = 0; i < romanNumerals.length; i++) {
    const { val, sym } = romanNumerals[i]

    // while the number is larger than the roman value
    while (num >= val) {
      // append the symbol
      res.push(sym)
      // sub the val from the num
      num -= val
    }
  }
  return res.join('')
}

// time complexity: O(1)
// - the number of roman numeral rules is constant (13)
// - in the worst case, we may append up to 3 'M's for 3000
// - overall operations are bounded by a small constant
// space complexity: O(1)

// notes:
// - order matters: roman values must be processed from highest to lowest
// - subtractive forms (iv, ix, xl, xc, cd, cm) prevent illegal repetitions
// - no backtracking or extra checks are needed because greedy always works
// - this solution directly follows how roman numerals are constructed
