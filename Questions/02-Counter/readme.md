## 2620. Counter

### Description:

Given an integer `n`, return a **counter function**.

This counter function should return a number each time it is called, starting from `n`, and increasing by 1 with each call.

---

### Example 1:

```
Input:
n = 10
calls = ["call", "call", "call"]

Output: [10, 11, 12]

Explanation:
const counter = createCounter(10);
counter(); // 10
counter(); // 11
counter(); // 12
```

---

### Example 2:

```
Input:
n = -2
calls = ["call", "call", "call", "call", "call"]

Output: [-2, -1, 0, 1, 2]

Explanation:
const counter = createCounter(-2);
counter(); // -2
counter(); // -1
counter(); // 0
counter(); // 1
counter(); // 2
```

---

### Constraints:

* -1000 <= n <= 1000
* 0 <= calls.length <= 1000
* `calls[i] === "call"`

---

### Follow-up:

Can you implement the counter function using **closures**?

---

### Function Signature:

```javascript
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {

};
```

