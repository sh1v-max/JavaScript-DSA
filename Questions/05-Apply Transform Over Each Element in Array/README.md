## 2635. Apply Transform Over Each Element in Array

### **Description**

Write a function `map` that mimics the behavior of JavaScript's `Array.prototype.map`.
It should take in an integer array `arr` and a callback function `fn`, then return a **new array** where:

```js
newArray[i] = fn(arr[i], i)
```

> ⚠️ You **must not use** the built-in `Array.prototype.map()` method.

---

### **Function Signature**

```js
function map(arr: number[], fn: (n: number, i: number) => number): number[]
```

---

### **Examples**

#### Example 1:

```js
Input:
arr = [1, 2, 3]
fn = function plusone(n) { return n + 1; }

Output: [2, 3, 4]

Explanation: 
Each number is incremented by 1.
```

#### Example 2:

```js
Input:
arr = [1, 2, 3]
fn = function plusI(n, i) { return n + i; }

Output: [1, 3, 5]

Explanation:
Each number is increased by its index in the array.
```

#### Example 3:

```js
Input:
arr = [10, 20, 30]
fn = function constant() { return 42; }

Output: [42, 42, 42]

Explanation:
Regardless of input, the function always returns 42.
```

---

### **Constraints**

* `0 <= arr.length <= 1000`
* `-10⁹ <= arr[i] <= 10⁹`
* The callback function `fn` will always return an integer.

---

### **Hints**

* You’ll need to create a **new array** and populate it one element at a time.
* Loop through the original array and apply `fn(value, index)` for each item.
* Pay attention to both the value `arr[i]` and its index `i`.
* Don’t mutate the input array.
