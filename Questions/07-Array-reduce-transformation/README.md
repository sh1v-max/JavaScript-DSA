# 2626. Array Reduce Transformation

### **Description**

Write a function `reduce` that mimics the behavior of JavaScript's `Array.prototype.reduce`.
It should take an integer array `nums`, a **reducer function** `fn`, and an **initial value** `init`. The function should return the final result obtained by **sequentially applying** the `fn` function on each element of the array, passing the result from the previous calculation.

```js
val = fn(init, nums[0])
val = fn(val, nums[1])
val = fn(val, nums[2])
...
```

If the array is empty, return the `init` value.

> ⚠️ You **must not use** the built-in `Array.prototype.reduce()` method.

---

### **Function Signature**

```js
function reduce(nums: number[], fn: (accum: number, curr: number) => number, init: number): number
```

---

### **Examples**

#### Example 1:

```js
Input:
nums = [1, 2, 3, 4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0

Output: 10

Explanation:
Start with `init=0`.
(0) + nums[0] = 1
(1) + nums[1] = 3
(3) + nums[2] = 6
(6) + nums[3] = 10
Final result is 10.
```

#### Example 2:

```js
Input:
nums = [1, 2, 3, 4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100

Output: 130

Explanation:
Start with `init=100`.
(100) + nums[0] * nums[0] = 101
(101) + nums[1] * nums[1] = 105
(105) + nums[2] * nums[2] = 114
(114) + nums[3] * nums[3] = 130
Final result is 130.
```

#### Example 3:

```js
Input:
nums = []
fn = function sum(accum, curr) { return 0; }
init = 25

Output: 25

Explanation:
For empty arrays, the answer is always `init` (25).
```

---

### **Constraints**

* `0 <= nums.length <= 1000`
* `0 <= nums[i] <= 1000`
* `0 <= init <= 1000`

---

### **Hints**

* You’ll need to initialize `val` with `init`.
* Loop through the array, and for each element, update `val` by applying `fn(val, nums[i])`.
* If the array is empty, return `init` immediately.
