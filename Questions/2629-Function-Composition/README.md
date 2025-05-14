# 2629. Function Composition

`Difficulty - Easy 🟢`

#### **Description:**

Create a function `compose` that takes an array of single-argument functions and returns a new function `fn(x)` which represents their composition.

* If `functions = [f, g, h]`, then `fn(x) = f(g(h(x)))`
* If the array is empty, return the identity function: `x => x`

---

### Function Signature:

```javascript
function compose(functions: ((x: number) => number)[]): (x: number) => number
```

---

### Solution:

```javascript
function compose(functions) {
    return function(x) {
        let result = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }
        return result;
    }
}
```

---

### Examples

#### Example 1:

```javascript
const fn = compose([x => x + 1, x => x * x, x => 2 * x]);
console.log(fn(4)); // Output: 65
```

**Explanation:**

```
x = 4
→ 2 * x = 8
→ 8 * 8 = 64
→ 64 + 1 = 65
```

#### Example 2:

```javascript
const fn = compose([x => 10 * x, x => 10 * x, x => 10 * x]);
console.log(fn(1)); // Output: 1000
```

**Explanation:**

```
10 * 1 = 10 → 10 * 10 = 100 → 10 * 100 = 1000
```

#### Example 3:

```javascript
const fn = compose([]);
console.log(fn(42)); // Output: 42
```

**Explanation:**
No functions? Just return the input.

---

### Constraints Recap:

* `-1000 <= x <= 1000`
* `0 <= functions.length <= 1000`
* Each function accepts and returns a **single integer**

