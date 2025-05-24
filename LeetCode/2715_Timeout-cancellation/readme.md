## To Be or Not to Be

`Difficulty - Easy 🟢`

### **Description**

Implement a function `cancellable(fn, args, t)` that delays the execution of `fn(...args)` by `t` milliseconds and returns a `cancelFn`.

If `cancelFn` is invoked before `t` milliseconds, the scheduled execution is **canceled**. Otherwise, `fn` executes normally after the delay.

---

### **Function Signature**

```js
const cancelFn = cancellable(fn, args, t);
```

* `fn`: Function to be executed
* `args`: Array of arguments for `fn`
* `t`: Delay time in milliseconds before executing `fn`
* `cancelFn`: Function that cancels the scheduled execution if called before `t`

---

### **Examples**

#### Example 1:

```js
Input: fn = (x) => x * 5, args = [2], t = 20

Execution:
const cancelTimeMs = 50;
const cancelFn = cancellable((x) => x * 5, [2], 20);
setTimeout(cancelFn, cancelTimeMs);

Output: [{"time": 20, "returned": 10}]
```

> `fn(2)` executed at 20ms. `cancelFn` was called at 50ms — too late to cancel.

---

#### Example 2:

```js
Input: fn = (x) => x**2, args = [2], t = 100

Execution:
const cancelTimeMs = 50;
const cancelFn = cancellable((x) => x**2, [2], 100);
setTimeout(cancelFn, cancelTimeMs);

Output: []
```

> `fn(2)` was **canceled** before its scheduled execution at 100ms.

---

#### Example 3:

```js
Input: fn = (x1, x2) => x1 * x2, args = [2,4], t = 30

Execution:
const cancelTimeMs = 100;
const cancelFn = cancellable((x1, x2) => x1 * x2, [2,4], 30);
setTimeout(cancelFn, cancelTimeMs);

Output: [{"time": 30, "returned": 8}]
```

> `fn(2, 4)` executed at 30ms. `cancelFn` was called at 100ms — too late to cancel.

---

### **Constraints**

* `fn` is a valid JavaScript function
* `args` is a valid JSON array
* `1 <= args.length <= 10`
* `20 <= t <= 1000`
* `10 <= cancelTimeMs <= 1000`
