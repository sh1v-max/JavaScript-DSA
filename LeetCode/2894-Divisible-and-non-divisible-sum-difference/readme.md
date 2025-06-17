## 2894. Divisible and Non-Divisible Sum Difference

`Difficulty - Easy 🟢`

## Description

You are given positive integers `n` and `m`.

Define two integers:

* `num1`: The sum of all integers in the range `[1, n]` (inclusive) **that are not divisible by `m`**.
* `num2`: The sum of all integers in the range `[1, n]` (inclusive) **that are divisible by `m`**.

Return the integer result of `num1 - num2`.

### Example 1

**Input:**
`n = 10`, `m = 3`
**Output:**
`19`

**Explanation:**

* Not divisible by 3: `[1,2,4,5,7,8,10]` → `num1 = 37`
* Divisible by 3: `[3,6,9]` → `num2 = 18`
  Return: `37 - 18 = 19`

### Example 2

**Input:**
`n = 5`, `m = 6`
**Output:**
`15`

**Explanation:**

* Not divisible by 6: `[1,2,3,4,5]` → `num1 = 15`
* Divisible by 6: `[]` → `num2 = 0`
  Return: `15 - 0 = 15`

### Example 3

**Input:**
`n = 5`, `m = 1`
**Output:**
`-15`

**Explanation:**

* Not divisible by 1: `[]` → `num1 = 0`
* Divisible by 1: `[1,2,3,4,5]` → `num2 = 15`
  Return: `0 - 15 = -15`

### Constraints

* `1 <= n, m <= 1000`
