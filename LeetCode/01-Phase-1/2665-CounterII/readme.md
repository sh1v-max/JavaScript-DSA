## 2665. Counter II

`Difficulty - Easy 🟢`

### **Description**

Write a function `createCounter` that takes an initial integer `init`.
It should return an **object** containing **three methods**:

* `increment()` – Increases the current value by `1`, then returns it.
* `decrement()` – Decreases the current value by `1`, then returns it.
* `reset()` – Resets the current value to the original `init`, then returns it.

---

### **Function Signature**

```js
function createCounter(init: number): {
  increment: () => number,
  decrement: () => number,
  reset: () => number
}
```

---

### **Examples**

#### Example 1:

```js
Input: 
const counter = createCounter(5);
counter.increment(); // 6
counter.reset();     // 5
counter.decrement(); // 4

Output: [6, 5, 4]
```

#### Example 2:

```js
Input: 
const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset();     // 0
counter.reset();     // 0

Output: [1, 2, 1, 0, 0]
```

---

### **Constraints**

* `-1000 <= init <= 1000`
* `0 <= calls.length <= 1000`
* Each call is one of: `"increment"`, `"decrement"`, or `"reset"`

---

### **Hints**

* You’ll need two variables: one to **store the original value** (`init`), and one to **track the current value**.
* Return an object with three methods that have **access to both**.
* Each method should perform its task and then return the updated value.
* This is a perfect use case for **closures** and **object methods** in JavaScript.
