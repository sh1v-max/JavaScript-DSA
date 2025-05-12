# 2634. Filter Elements from Array

### **Description**

Write a function `filter` that mimics the behavior of JavaScript's `Array.prototype.filter`.
It should take in an integer array `arr` and a filtering function `fn`, and return a **new array** that includes **only** the elements for which the function returns a **truthy** value.

> ⚠️ You **must not use** the built-in `Array.prototype.filter()` method.

---

### **Function Signature**

```js
function filter(arr: number[], fn: (n: number, i: number) => any): number[]
```

---

### **Examples**

#### Example 1:

```js
Input:
arr = [0, 10, 20, 30]
fn = function greaterThan10(n) { return n > 10; }

Output: [20, 30]

Explanation:
Only values greater than 10 are included.
```

#### Example 2:

```js
Input:
arr = [1, 2, 3]
fn = function firstIndex(n, i) { return i === 0; }

Output: [1]

Explanation:
Only the element at index 0 passes the filter.
```

#### Example 3:

```js
Input:
arr = [-2, -1, 0, 1, 2]
fn = function plusOne(n) { return n + 1; }

Output: [-2, 0, 1, 2]

Explanation:
Values where `n + 1` is **truthy** are included.
`n = -1` → `0` → falsy → excluded.
```

---

### **Constraints**

* `0 <= arr.length <= 1000`
* `-10⁹ <= arr[i] <= 10⁹`
* The filtering function `fn` may return any value — use its **truthiness** (`Boolean(fn(...))`) to decide inclusion.

---

### **Hints**

* Loop through the array and apply `fn(value, index)` for each item.
* Use `Boolean(fn(...))` to determine if an element should be included.
* Create a new array and push qualifying elements into it.
* Do **not** mutate the original array.
