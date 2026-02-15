## 344. Reverse String

`Difficulty - Easy 🟢`

### Description

Write a function that **reverses a string**. The input string is given as an **array of characters `s`**.

You must do this by **modifying the input array in-place** with **O(1) extra memory**.

When the problem says:

> **“You must do this by modifying the input array in-place with O(1) extra memory.”**

It means:

* ✅ **You are allowed to use a tiny, fixed number of variables** (like `left`, `right`, or `temp`).
* ❌ **You are NOT allowed to use extra data structures** (like a new array or a stack).

### Example 1

**Input:**
`s = ["h","e","l","l","o"]`
**Output:**
`["o","l","l","e","h"]`

### Example 2

**Input:**
`s = ["H","a","n","n","a","h"]`
**Output:**
`["h","a","n","n","a","H"]`

### Constraints

* `1 <= s.length <= 10⁵`
* `s[i]` is a printable ASCII character.
