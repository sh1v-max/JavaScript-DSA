## 📘 **Next Greater Element I — Notes**

### 🔹 Problem Statement:

You are given two arrays:

* `nums1`: a **subset** of `nums2`
* `nums2`: contains all elements of `nums1` in any order + extra elements

**Goal**:
For each element in `nums1`, find the **first greater number to its right in `nums2`**.
If no such number exists, return `-1`.

### 🧠 Example:

```js
nums1 = [4, 1, 2]
nums2 = [1, 3, 4, 2]
```

* 4 → no greater element after it → `-1`
* 1 → next greater is 3 → `3`
* 2 → no greater element after it → `-1`

✅ Output: `[-1, 3, -1]`

### 📌 Constraints:

* All numbers are **unique**
* `nums1.length ≤ nums2.length ≤ 1000`
* `nums1 ⊆ nums2`

## 🛠️ Approach 1: Brute Force

### 🔧 Idea:

For each number in `nums1`:

* Find its index in `nums2`
* Scan rightward to find the first number greater than it
* If not found, return `-1`

### ✅ Code:

```js
function nextGreaterElement(nums1, nums2) {
  const res = [];

  for (let i = 0; i < nums1.length; i++) {
    const num = nums1[i];
    const index = nums2.indexOf(num);
    let found = -1;

    for (let j = index + 1; j < nums2.length; j++) {
      if (nums2[j] > num) {
        found = nums2[j];
        break;
      }
    }

    res.push(found);
  }

  return res;
}
```

### ⏱ Time: O(n \* m)

### 🧠 Space: O(n)

## 🛠️ Approach 2: Optimized (Monotonic Stack)

### 🔧 Idea:

* Preprocess `nums2` **from right to left**
* Use a **monotonic decreasing stack** to find the next greater element
* Store results in a **map**
* Then for each element in `nums1`, just **lookup the answer** from the map

### 🪜 Monotonic Stack Logic:

#### 👉 Main Observations:

* While traversing from **right to left**, if the current element is:

  * Smaller than stack top → next greater is stack top
  * Greater than stack top → pop from stack until a greater is found (or stack is empty)

#### ✅ Stack stores: **only useful next greater candidates**

### ✅ Code:

```js
function nextGreaterElement(nums1, nums2) {
  const map = {};
  const stack = [];

  for (let i = nums2.length - 1; i >= 0; i--) {
    const num = nums2[i];

    while (stack.length && stack[stack.length - 1] <= num) {
      stack.pop();
    }

    map[num] = stack.length === 0 ? -1 : stack[stack.length - 1];
    stack.push(num);
  }

  const res = [];
  for (let i = 0; i < nums1.length; i++) {
    res.push(map[nums1[i]]);
  }

  return res;
}
```

### ⏱ Time: O(n)

### 🧠 Space: O(n)

## 🧩 Variations You Should Know

These are solved using **monotonic stacks**, and follow the same idea:

| Problem Type             | Stack Order | Traversal Direction |
| ------------------------ | ----------- | ------------------- |
| **Next Greater Element** | Decreasing  | Right to Left       |
| **Next Smaller Element** | Increasing  | Right to Left       |
| **Previous Greater**     | Decreasing  | Left to Right       |
| **Previous Smaller**     | Increasing  | Left to Right       |

### 🧠 Tip:

* **Decreasing Stack** → helps find **greater** elements
* **Increasing Stack** → helps find **smaller** elements
* **Traverse right-to-left** → for **next**
* **Traverse left-to-right** → for **previous**

### 📘 Summary Table:

| Type             | Stack Condition                     | When to Pop               |
| ---------------- | ----------------------------------- | ------------------------- |
| Next Greater     | Top ≤ current                       | While stack top ≤ current |
| Next Smaller     | Top ≥ current                       | While stack top ≥ current |
| Previous Greater | Top ≤ current (but go left → right) | While stack top ≤ current |
| Previous Smaller | Top ≥ current (but go left → right) | While stack top ≥ current |

### ✅ Save This As Your Final Note:

```js
// Next Greater Element I

// Brute Force:
// For each number in nums1:
// - Find its index in nums2
// - Scan rightward to find the next greater
// - If none found, return -1

// Time: O(n * m) | Space: O(n)


// Optimized (Monotonic Stack):
// - Traverse nums2 from right to left
// - Use a decreasing stack to store potential next greater elements
// - For each element in nums2:
//     - Pop from stack until you find a number greater than the current
//     - If stack is empty, next greater is -1
//     - Else, it's the stack top
//     - Push the current number onto the stack
// - Store all next greater values in a map
// - For each number in nums1, return map[number]

// Time: O(n + m) | Space: O(n + m)

// Similar problems:
// - Next Smaller Element
// - Previous Greater Element
// - Previous Smaller Element
// Use same logic with stack direction/order switched
```
