## 🔥 Problem: 739. Daily Temperatures (Medium)

> Given a list of daily temperatures, return a list such that, for each day, it tells you how many days you have to wait until a warmer temperature. If no such day exists, put `0` instead.


### 🧠 Intuition

To find the **next warmer temperature** for each day, we need to look ahead in the array.

But rather than checking every future day (which is slow), we can optimize using a **monotonic stack**.
We'll traverse from the **end of the array** so we always have info about future days.


### ⚙️ Approach: **Monotonic Decreasing Stack**

* We'll iterate from **right to left** (because we want future info)
* Use a **stack** to keep **indices** of days with decreasing temperatures
* For each day:

  * **Pop** from the stack while the temperature at the top of the stack is **less than or equal** to today's

    * These can't be the next warmer day → discard them
  * If the stack isn't empty:

    * The top of the stack is the **next warmer day**
    * So, `answer[i] = index_on_top - i`
  * Push the current day index onto the stack


### 📦 Why Decreasing Order?

Because we're looking for the **next warmer day**, we only keep days with **higher temps** on top of the stack.
Any cooler or equal day will never be the answer for current or future elements — so we pop them off.


### ⏱️ Time and Space Complexity

* **Time**: O(n) – each element is pushed and popped at most once
* **Space**: O(n) – for the stack and output array


### ✅ Example

```js
Input:  [73,74,75,71,69,72,76,73]
Output: [1, 1, 4, 2, 1, 1, 0, 0]
```


### 🧪 Code (JS - Stack Based)

```js
var dailyTemperatures = function(temperatures) {
  const n = temperatures.length;
  const answer = new Array(n).fill(0);
  const stack = []; // will store indices

  for (let i = n - 1; i >= 0; i--) {
    while (
      stack.length > 0 &&
      temperatures[i] >= temperatures[stack[stack.length - 1]]
    ) {
      stack.pop();
    }

    if (stack.length > 0) {
      answer[i] = stack[stack.length - 1] - i;
    }

    stack.push(i);
  }

  return answer;
};
```


### 🧲 Key Takeaways

* Think **monotonic stacks** when solving "next greater/smaller" problems
* Traverse **right to left** when you're looking for something **ahead**
* Store **indices**, not values, to easily compute distances

