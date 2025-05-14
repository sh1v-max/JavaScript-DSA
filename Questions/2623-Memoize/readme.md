## 2623. Memoize

`Difficulty - Medium 🟡`

### **Description**

Given a function `fn`, return a memoized version of that function.

A **memoized function** will never be called twice with the same inputs. Instead, it returns a previously cached result.

**Note:**

* For the `"sum"` function, the order of arguments matters: `(2, 3)` and `(3, 2)` are **different** calls.
* Only three function names are supported: `"sum"`, `"fib"`, and `"factorial"`.

---

### **Examples**

#### Example 1:

```js
Input:
fnName = "sum"
actions = ["call","call","getCallCount","call","getCallCount"]
values = [[2,2],[2,2],[],[1,2],[]]

Output: [4,4,1,3,2]

Explanation:
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);

memoizedSum(2, 2); // "call" -> 4 (new call)
memoizedSum(2, 2); // "call" -> 4 (cached)
getCallCount();    // -> 1
memoizedSum(1, 2); // "call" -> 3 (new call)
getCallCount();    // -> 2
```

#### Example 2:

```js
Input:
fnName = "factorial"
actions = ["call","call","call","getCallCount","call","getCallCount"]
values = [[2],[3],[2],[],[3],[]]

Output: [2,6,2,2,6,2]

Explanation:
const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
const memoFactorial = memoize(factorial);

factorial(2); // "call" -> 2
factorial(3); // "call" -> 6
factorial(2); // "call" -> 2 (cached)
getCallCount(); // -> 2
factorial(3); // "call" -> 6 (cached)
getCallCount(); // -> 2
```

#### Example 3:

```js
Input:
fnName = "fib"
actions = ["call","getCallCount"]
values = [[5],[]]

Output: [8,1]

Explanation:
fib(5) = 8
getCallCount(); // -> 1
```

---

### **Constraints**

* `0 <= a, b <= 10⁵`
* `1 <= n <= 10`
* `1 <= actions.length <= 10⁵`
* `actions.length === values.length`
* `actions[i]` is one of `"call"` or `"getCallCount"`
* `fnName` is one of `"sum"`, `"factorial"` or `"fib"`
