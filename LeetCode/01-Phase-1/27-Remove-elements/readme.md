##  27. Remove Element

`Difficulty - Easy 🟢`

## Description

Given an integer array `nums` and an integer `val`, remove all occurrences of `val` **in-place**. The order of elements may be changed.
Return the number of elements in `nums` which are **not equal to `val`**.

> After removal, the first `k` elements of `nums` must contain the result. The rest of the array can be ignored.

### Example 1

**Input:**
`nums = [3,2,2,3]`, `val = 3`
**Output:**
`2`, `nums = [2,2,_,_]`

**Explanation:**
Removed both occurrences of `3`. Only `2`s remain in the first 2 positions.

### Example 2

**Input:**
`nums = [0,1,2,2,3,0,4,2]`, `val = 2`
**Output:**
`5`, `nums = [0,1,4,0,3,_,_,_]`

**Explanation:**
All occurrences of `2` are removed. The order of remaining elements doesn't matter.

### Constraints

* `0 <= nums.length <= 100`
* `0 <= nums[i] <= 50`
* `0 <= val <= 100`
