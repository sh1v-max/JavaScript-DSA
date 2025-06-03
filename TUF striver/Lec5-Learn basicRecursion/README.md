
# Recursion in Data Structures and Algorithms

## What is a Function?

A **function** is a reusable block of code that performs a specific task. It may accept input (parameters) and can return an output. Functions help break down complex problems into smaller, manageable tasks.

```js
function greet(name) {
  return `Hello, ${name}`;
}
```


## What is Recursion?

**Recursion** is when a function calls itself to solve a smaller part of the original problem. This continues until it reaches a stopping condition, known as the **base case**.


## Infinite Recursion

If a recursive function doesn't have a proper base case or never reaches it, it will keep calling itself infinitely. This leads to a **stack overflow error**.

```js
function infinite() {
  infinite(); // No base case → causes stack overflow
}
```


## Base Case

A **base case** is the condition that stops recursion. It's the simplest version of the problem that can be solved directly, without further recursive calls.

```js
function countdown(n) {
  if (n === 0) {
    console.log("Done");
    return;
  }
  console.log(n);
  countdown(n - 1); // recursive call
}
```


## Recursive Stack Space

Every time a function calls itself, the JavaScript engine adds a new frame to the **call stack**. When the base case is hit, the stack **unwinds**, resolving each call from the last to the first.


## Program Flow in Recursion

1. Function is called.
2. It checks the base case.
3. If the base case is not met, it makes a recursive call.
4. Each call is paused until the base case is reached.
5. The stack unwinds as each call completes.


## Types of Recursion

### 1. Head Recursion

The recursive call happens **before** any other logic.

```js
function headRec(n) {
  if (n === 0) return;
  headRec(n - 1);
  console.log(n); // action after recursive call
}

// Output: 1 2 3 4 5
headRec(5);
```

### 2. Tail Recursion

The recursive call is the **last** thing executed.

```js
function tailRec(n) {
  if (n === 0) return;
  console.log(n); // action before recursive call
  tailRec(n - 1);
}

// Output: 5 4 3 2 1
tailRec(5);
```

Note: JavaScript (especially in most modern engines) does **not** guarantee tail call optimization, even for tail recursion.


## Stack Overflow

A **stack overflow** occurs when too many recursive calls are made without reaching the base case. The call stack has a limited size, and exceeding it crashes the program.


## Recursion Tree

A **recursion tree** is a visual way to represent recursive calls and how the problem splits.

Example: Recursive sum of numbers

```js
function sum(n) {
  if (n === 1) return 1;
  return n + sum(n - 1);
}
```

* Call: `sum(4)`
* Tree:

  * sum(4)

    * sum(3)

      * sum(2)

        * sum(1) → returns 1
      * return 2 + 1 = 3
    * return 3 + 3 = 6
  * return 4 + 6 = 10


## Time Complexity

Time complexity depends on how many recursive calls are made.

* **Linear Recursion** (1 call per function): `O(n)`

  ```js
  function count(n) {
    if (n === 0) return;
    count(n - 1);
  }
  ```

* **Exponential Recursion** (2 calls per function): `O(2^n)`

  ```js
  function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
  }
  ```


## Space Complexity

Space complexity is typically equal to the **depth of the recursion**, because each call adds a new frame to the stack.

* If recursion goes `n` levels deep, space complexity = `O(n)`


## Recursion vs Iteration

| Feature        | Recursion                          | Iteration                   |
| -------------- | ---------------------------------- | --------------------------- |
| Memory         | Uses call stack                    | Uses loop control variables |
| Speed          | Generally slower                   | Generally faster            |
| Clarity        | More intuitive for nested problems | Simpler for linear problems |
| Tail-call Opt. | Possible, but not guaranteed in JS | Not needed                  |


## When to Use Recursion

* Problems involving **divide-and-conquer** (e.g. merge sort, quick sort)
* Working with **trees** (e.g. binary tree traversal)
* Solving **combinatorial problems** (e.g. permutations, combinations)
* Problems with **backtracking** (e.g. maze solving, N-Queens)


## Common Examples in JavaScript

### Factorial

```js
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
```

### Fibonacci

```js
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

### Sum of an Array

```js
function sumArray(arr, index = 0) {
  if (index === arr.length) return 0;
  return arr[index] + sumArray(arr, index + 1);
}
```


## Summary

* Recursion is a powerful technique but requires a base case to terminate.
* It uses the call stack to manage execution flow.
* Tail recursion is more memory-efficient but not reliably optimized in JavaScript.
* Use recursion when a problem naturally breaks into similar subproblems.
* Always analyze both time and space complexity when designing recursive solutions.
