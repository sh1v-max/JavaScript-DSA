## To Be or Not to Be

`Difficulty - Easy 🟢`

### **Description**

Write a function `expect` that helps developers test their code.
It should take in any value `val` and return an object with two functions:

* `toBe(val)`
  Returns `true` if the provided value is strictly equal (`===`) to the original `val`.
  Otherwise, it throws an error: `"Not Equal"`.

* `notToBe(val)`
  Returns `true` if the provided value is not strictly equal (`!==`) to the original `val`.
  Otherwise, it throws an error: `"Equal"`.

---

### **Examples**

#### Example 1:

```js
Input: func = () => expect(5).toBe(5)
Output: { "value": true }
Explanation: 5 === 5, so this expression returns true.
```

#### Example 2:

```js
Input: func = () => expect(5).toBe(null)
Output: { "error": "Not Equal" }
Explanation: 5 !== null, so this expression throws the error "Not Equal".
```

#### Example 3:

```js
Input: func = () => expect(5).notToBe(null)
Output: { "value": true }
Explanation: 5 !== null, so this expression returns true.
```

---

### **Constraints**

* The input to `expect()` can be any JavaScript value.
* `toBe()` must use `===` for comparison.
* `notToBe()` must use `!==` for comparison.
* If the condition fails, throw an appropriate `Error`.

---

### **Hints**

* Think about how to **return an object** with methods from a function.
* Use a **closure** to remember the original value passed to `expect()`.
* Within each method, compare the argument to the captured value.
* Use the `throw new Error("...")` syntax to throw exceptions when needed.
