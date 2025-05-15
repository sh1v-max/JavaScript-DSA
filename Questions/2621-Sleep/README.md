## 2621. Sleep

`Difficulty - Easy 🟢`

### **Description**

Write an asynchronous function `sleep(millis)` that pauses execution for `millis` milliseconds and then resolves.
The resolved value can be anything — the focus is on the delay.

> Minor deviations in timing (a few milliseconds) are acceptable.

---

### **Examples**

#### Example 1:

```js
Input: millis = 100

Output: 100

Usage:
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // Approximately 100
});
```

#### Example 2:

```js
Input: millis = 200

Output: 200

Usage:
let t = Date.now();
sleep(200).then(() => {
  console.log(Date.now() - t); // Approximately 200
});
```

---

### **Constraints**

* `1 <= millis <= 1000`
* `sleep(millis)` should return a `Promise`
* The promise should resolve after `millis` milliseconds
