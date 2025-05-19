## 3110. Score of a String

`Difficulty - Easy 🟢`

## Description

You are given a string `s`. The **score** of the string is defined as the sum of the absolute differences between the ASCII values of every pair of adjacent characters in `s`.

Return the score of the string `s`.


### Example 1:

**Input:**
`s = "hello"`
**Output:**
`13`
**Explanation:**
ASCII values: `'h' = 104, 'e' = 101, 'l' = 108, 'l' = 108, 'o' = 111`
Score = |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13


### Example 2:

**Input:**
`s = "zaz"`
**Output:**
`50`
**Explanation:**
ASCII values: `'z' = 122, 'a' = 97`
Score = |122 - 97| + |97 - 122| = 25 + 25 = 50


### Constraints:

* `2 <= s.length <= 100`
* `s` consists only of lowercase English letters
