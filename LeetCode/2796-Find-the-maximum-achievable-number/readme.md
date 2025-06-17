## 2796. Find the Maximum Achievable Number

`Difficulty - Easy 🟢`

## Description

Given two integers `num` and `t`.

A number `x` is **achievable** if it can become equal to `num` after applying the following operation **at most `t` times**:

* Increase or decrease `x` by 1, **and simultaneously** increase or decrease `num` by 1.

Return the **maximum possible value of `x`** that can be achievable under the given conditions.

### Example 1

**Input:**
`num = 4`, `t = 1`
**Output:**
`6`

**Explanation:**
You can apply the operation once:

* Decrease `x` by 1 → `x = 5`
* Increase `num` by 1 → `num = 5`
  Now `x == num == 5`
  So maximum achievable `x` before that step was `6`.

### Example 2

**Input:**
`num = 3`, `t = 2`
**Output:**
`7`

**Explanation:**
Apply the operation twice:

* Step 1: `x = 4`, `num = 4`
* Step 2: `x = 5`, `num = 5`
  So the maximum achievable `x` before step 2 was `7`.

### Constraints

* `1 <= num, t <= 50`
