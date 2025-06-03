## 13. Roman to Integer

`Difficulty - Easy 🟢`

## Description

Roman numerals are represented by seven different symbols:

| Symbol | Value |
| ------ | ----- |
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

For example:

* 2 is written as `II` (1 + 1)
* 12 is written as `XII` (10 + 1 + 1)
* 27 is written as `XXVII` (10 + 10 + 5 + 1 + 1)

Roman numerals are usually written from largest to smallest from left to right. However, in certain cases, a smaller number is placed before a larger one to indicate subtraction. These six special cases are:

* `I` before `V` (5) or `X` (10) makes 4 and 9
* `X` before `L` (50) or `C` (100) makes 40 and 90
* `C` before `D` (500) or `M` (1000) makes 400 and 900

**Task:** Given a Roman numeral `s`, convert it to an integer.

### Example 1

**Input:**
`s = "III"`
**Output:**
`3`
**Explanation:**
`III = 3`.

### Example 2

**Input:**
`s = "LVIII"`
**Output:**
`58`
**Explanation:**
`L = 50`, `V = 5`, `III = 3`.

### Example 3

**Input:**
`s = "MCMXCIV"`
**Output:**
`1994`
**Explanation:**
`M = 1000`, `CM = 900`, `XC = 90`, and `IV = 4`.

### Constraints

* `1 <= s.length <= 15`
* `s` contains only the characters `('I', 'V', 'X', 'L', 'C', 'D', 'M')`
* It is guaranteed that `s` is a valid Roman numeral in the range \[1, 3999]
