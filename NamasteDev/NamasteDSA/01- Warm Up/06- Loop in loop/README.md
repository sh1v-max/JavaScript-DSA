## Nested Loops (Loop inside Loop)

---

### What is a Nested Loop?

A **loop inside another loop**.
The **outer loop** runs first, and for **each iteration of the outer loop**, the **inner loop** runs completely.

---

### Syntax:

```js
for (let i = 1; i <= 3; i++) {         // outer loop
  for (let j = 1; j <= 2; j++) {       // inner loop
    console.log(`i = ${i}, j = ${j}`);
  }
}
```

---

### Output:

```
i = 1, j = 1  
i = 1, j = 2  
i = 2, j = 1  
i = 2, j = 2  
i = 3, j = 1  
i = 3, j = 2  
```

---

## Example 1: Multiplication Table (1 to 5)

```js
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log("--------------");
}
```
---

### 🧠 Key Concepts:

* Total iterations = outer loop count × inner loop count
* Be careful with performance (nested loops can be slow for large values)
* Useful for patterns, tables, matrix operations, etc.
