# RECURSION


## 1. **What is Recursion?**

**Definition:**

> Recursion is a programming technique where a function calls **itself** to solve a **smaller instance** of the same problem.

It keeps doing this until it reaches a point where the problem is small enough to solve **directly** — that point is called the **base case**.


## 2. **Why Use Recursion?**

* **Breaks a complex problem** into smaller, repeatable subproblems.
* Makes code **cleaner and shorter**, especially in problems involving **tree-like structures**, **backtracking**, or **divide & conquer** strategies.


## 3. **Structure of a Recursive Function**

Every recursive function must have **two parts**:

### a) Base Case

* The condition to **stop** the recursion.
* Prevents infinite calls and stack overflow.

### b) Recursive Case

* The function **calls itself** with a smaller input, getting closer to the base case.


### ✅ Example: Factorial of n (n!)

```js
function factorial(n) {
  if (n === 0) return 1;         // Base case
  return n * factorial(n - 1);   // Recursive case
}
```

For `factorial(3)`:

```
= 3 * factorial(2)
= 3 * 2 * factorial(1)
= 3 * 2 * 1 * factorial(0)
= 3 * 2 * 1 * 1 = 6
```


## 4. **How Recursion Works Internally (Call Stack)**

Recursion uses the **call stack**:

* Every time a function is called, a new frame is added to the **stack**.
* When the base case is reached, the stack **starts unwinding** (last-in, first-out).
* Each return value bubbles up to the original call.

📌 Example:

```js
factorial(3)
-> 3 * factorial(2)
     -> 2 * factorial(1)
          -> 1 * factorial(0)
               -> 1 (base case)
```

Now values return:
`1 → 1*1 → 2*1 → 3*2 = 6`


## 5. **Common Mistakes in Recursion**

* **No base case** → Infinite recursion
* **Wrong base case** → Wrong result or stack overflow
* **Not simplifying the problem correctly** → Never reaches base case


## 6. **Recursion vs Iteration**

| Feature          | Recursion                           | Iteration                       |
| ---------------- | ----------------------------------- | ------------------------------- |
| Code Readability | Cleaner (in some cases)             | Often longer but more efficient |
| Memory Usage     | Uses call stack (more memory)       | Uses fewer resources            |
| Speed            | Slower (due to function calls)      | Faster                          |
| Suited For       | Trees, divide-conquer, backtracking | Loops, repetitive tasks         |


## 7. **Types of Recursion**

### a) **Tail Recursion**

* The recursive call is the **last thing** the function does.
* Easier to optimize.

```js
function tailFactorial(n, acc = 1) {
  if (n === 0) return acc;
  return tailFactorial(n - 1, n * acc);
}
```

### b) **Head Recursion**

* Function calls itself **before** doing anything else.

```js
function headRec(n) {
  if (n === 0) return;
  headRec(n - 1);
  console.log(n); // executes after recursive call
}
```

### c) **Tree Recursion**

* Function calls itself **multiple times**.

```js
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
```


## 8. **When Should You Use Recursion?**

✅ When:

* The problem is **naturally recursive** (like trees, graphs).
* You can break it down into **smaller, similar problems**.
* You know the **exit condition** (base case).

❌ Avoid if:

* The problem doesn’t need to be broken down.
* Performance matters and you're not optimizing (see memoization below).


## 9. **Optimizing Recursion**

### a) **Memoization**

* Caches already computed results to avoid recomputation.

```js
let cache = {};
function fib(n) {
  if (n in cache) return cache[n];
  if (n <= 1) return n;
  return cache[n] = fib(n - 1) + fib(n - 2);
}
```

### b) **DP (Tabulation)**

* Convert recursion to bottom-up **Dynamic Programming**.


## 10. **Famous Recursive Problems (to practice)**

| Problem                       | Concept              |
| ----------------------------- | -------------------- |
| Factorial                     | Base/Recursive case  |
| Fibonacci                     | Tree Recursion       |
| Power of Number (x^n)         | Divide and Conquer   |
| Tower of Hanoi                | Recursion + Movement |
| N-Queens                      | Backtracking         |
| Maze Solver                   | Backtracking         |
| Binary Tree Traversals        | DFS + Recursion      |
| Sum of digits                 | Head recursion       |
| Reverse a string/array        | Recursive swapping   |
| Subset/Permutations generator | Recursive branching  |


## 11. **How to Think Recursively (Mental Model)**

1. **Understand the problem.**
2. **Define the base case** – when to stop.
3. **Think about the smallest subproblem.**
4. Write the recursive case that calls the function with **smaller input**.
5. **Trust recursion.** Don’t try to trace every call manually — recursion handles the unwinding.


## 12. **Recursion Patterns**

* **Decreasing Input**: e.g. `n → n-1`
* **Divide & Conquer**: Split into halves
* **Backtracking**: Try, undo, try again (e.g., Sudoku)
* **DFS Traversal**: Visit children recursively
* **Combinatorics**: Explore combinations (e.g., subsets)


## Summary Sheet

| Term           | Meaning                              |
| -------------- | ------------------------------------ |
| Base Case      | When recursion stops                 |
| Recursive Case | When function calls itself           |
| Stack Overflow | Too many calls without stopping      |
| Tail Recursion | Recursive call is the last step      |
| Memoization    | Store results of past calls          |
| Tree Recursion | Function calls itself more than once |


## Final Thought

> “To understand recursion, you must first understand recursion.”

This quote isn’t just a joke — it captures the essence:
**You understand recursion only when you can think in recursion.**

