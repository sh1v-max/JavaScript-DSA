## **More Efficient Ways to Solve "Remove Outermost Parentheses"**

### **1. Use a Depth Counter (O(1) Space)**

Instead of a stack, just track how "deep" we are inside parentheses.

**Key Idea:**

* Every `"("` increases `depth`.
* Every `")"` decreases `depth`.
* A `"("` is **outermost** if `depth` is `0` **before** adding it.
* A `")"` is **outermost** if `depth` is `1` **before** removing it.

**Code:**

```js
function removeOuterParentheses(s) {
  let res = "";
  let depth = 0;

  for (let char of s) {
    if (char === "(") {
      if (depth > 0) res += char; // Skip the outermost '('
      depth++;
    } else {
      depth--;
      if (depth > 0) res += char; // Skip the outermost ')'
    }
  }
  return res;
}
```

**Why Better?**

* No stack → **O(1)** extra space.
* Still **O(n)** time because we process each character once.

### **2. Build Result Using Array (Avoid String Concatenation Cost)**

In JavaScript, repeatedly using `res += char` can be slightly inefficient because strings are immutable. Instead, use an array and `join("")` at the end.

```js
function removeOuterParentheses(s) {
  let res = [];
  let depth = 0;

  for (let char of s) {
    if (char === "(") {
      if (depth > 0) res.push(char);
      depth++;
    } else {
      depth--;
      if (depth > 0) res.push(char);
    }
  }
  return res.join("");
}
```

This is **faster for very large strings** because pushing to arrays is cheaper than concatenating strings repeatedly.

### **3. Split into Primitive Parts (Less Common, But Logical)**

You could also:

* Track when a primitive string starts and ends by using a depth counter.
* When depth becomes `0`, you know a primitive part ended.
* Slice the primitive substring, remove the first and last parentheses, and append to result.

**Code Example:**

```js
function removeOuterParentheses(s) {
  let res = "";
  let depth = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      if (depth === 0) start = i; // Start of a new primitive
      depth++;
    } else {
      depth--;
      if (depth === 0) {
        // End of a primitive
        res += s.slice(start + 1, i); // Remove outermost
      }
    }
  }
  return res;
}
```

This method is slightly more complex but conceptually closer to the **"primitive decomposition"** definition.

## **Which is Best?**

* **Depth Counter (Method 1)** is the simplest and most efficient:
  **Time:** O(n), **Space:** O(1).
* **Array Build (Method 2)** is good for huge strings because of performance on concatenation.
* **Primitive Split (Method 3)** is useful if you want to explicitly work with primitive parts.
