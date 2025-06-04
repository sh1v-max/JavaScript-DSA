## 125. Valid Palindrome

`Difficulty - Easy 🟢`

## Description

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.

### Example 1

**Input:**
`s = "A man, a plan, a canal: Panama"`
**Output:**
`true`
**Explanation:**
After removing non-alphanumeric characters and converting to lowercase, the string becomes `"amanaplanacanalpanama"`, which reads the same forward and backward.

### Example 2

**Input:**
`s = "race a car"`
**Output:**
`false`
**Explanation:**
After cleaning, the string becomes `"raceacar"`, which is not a palindrome.

### Example 3

**Input:**
`s = " "`
**Output:**
`true`
**Explanation:**
After removing non-alphanumeric characters, the string becomes empty `""`. An empty string reads the same forward and backward, so it is considered a palindrome.

### Constraints

* `1 <= s.length <= 2 * 10^5`
* `s` consists only of printable ASCII characters.
