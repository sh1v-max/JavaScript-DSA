## 2621. Create Hello World

`Difficulty - Easy 🟢`

### Description:

Write a function `createHelloWorld`. It should return a new function that always returns the string `"Hello World"`, regardless of the arguments passed to it.

---

### Example 1:

```js
Input: args = []
Output: "Hello World"

Explanation:
const f = createHelloWorld();
f(); // "Hello World"
```

---

### Example 2:

```js
Input: args = [{}, null, 42]
Output: "Hello World"

Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"
```

---

### Constraints:

* 0 <= `args.length` <= 10

---

### Function Signature:

```javascript
/**
 * @return {Function} A function that always returns "Hello World"
 */
var createHelloWorld = function() {

};
```
