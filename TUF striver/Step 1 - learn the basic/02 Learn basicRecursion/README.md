# 🔁 Learn Basic Recursion in JavaScript (Full Guide with Many Examples)

## 📌 What Is Recursion?

**Recursion** is a technique where a function solves a problem by **calling itself** on a smaller input — until a simple case (base case) is reached.

## 🧠 Two Golden Rules

1. **Base Case** → When to stop
2. **Recursive Case** → How to reduce the problem and move toward the base

## 🧱 Beginner Examples

### ✅ 1. Print Numbers from 1 to N

```js
function print1toN(n) {
  if (n === 0) return;
  print1toN(n - 1);
  console.log(n);
}

print1toN(5); // 1 2 3 4 5
```

### ✅ 2. Print Numbers from N to 1

```js
function printNto1(n) {
  if (n === 0) return;
  console.log(n);
  printNto1(n - 1);
}
```

### ✅ 3. Factorial

```js
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
```

### ✅ 4. Sum of First N Natural Numbers

```js
function sum(n) {
  if (n === 0) return 0;
  return n + sum(n - 1);
}
```

### ✅ 5. Sum of Digits of a Number

```js
function sumDigits(n) {
  if (n === 0) return 0;
  return (n % 10) + sumDigits(Math.floor(n / 10));
}
```

### ✅ 6. Reverse a String

```js
function reverseString(str) {
  if (str === "") return "";
  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello")); // "olleh"
```

### ✅ 7. Check Palindrome (String)

```js
function isPalindrome(str, i = 0) {
  let j = str.length - 1 - i;
  if (i >= j) return true;
  if (str[i] !== str[j]) return false;
  return isPalindrome(str, i + 1);
}
```

### ✅ 8. Fibonacci (Naive)

```js
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
```

### ✅ 9. Fibonacci (Memoized for Optimization)

```js
const memo = {};
function fib(n) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  return memo[n] = fib(n - 1) + fib(n - 2);
}
```

### ✅ 10. Calculate Power (xⁿ)

```js
function power(x, n) {
  if (n === 0) return 1;
  return x * power(x, n - 1);
}
```

### ✅ 11. Power with Divide and Conquer (Optimized)

```js
function fastPower(x, n) {
  if (n === 0) return 1;
  let half = fastPower(x, Math.floor(n / 2));
  if (n % 2 === 0) return half * half;
  else return x * half * half;
}
```

### ✅ 12. Count the Number of Zeros in a Number

```js
function countZeros(n) {
  if (n === 0) return 0;
  return (n % 10 === 0 ? 1 : 0) + countZeros(Math.floor(n / 10));
}
```

### ✅ 13. Count Digits of a Number

```js
function countDigits(n) {
  if (n === 0) return 0;
  return 1 + countDigits(Math.floor(n / 10));
}
```

### ✅ 14. Print All Elements of an Array

```js
function printArray(arr, i = 0) {
  if (i === arr.length) return;
  console.log(arr[i]);
  printArray(arr, i + 1);
}
```

### ✅ 15. Find Maximum Element in Array (Recursively)

```js
function findMax(arr, i = 0) {
  if (i === arr.length - 1) return arr[i];
  return Math.max(arr[i], findMax(arr, i + 1));
}
```

## 🌲 Tree-Based Recursion (Intermediate Level)

### ✅ 16. Binary Representation of a Number

```js
function toBinary(n) {
  if (n === 0) return "";
  return toBinary(Math.floor(n / 2)) + (n % 2);
}

console.log(toBinary(13)); // "1101"
```

### ✅ 17. Generate All Subsets of a String

```js
function subsets(str, current = "", i = 0) {
  if (i === str.length) {
    console.log(current);
    return;
  }
  subsets(str, current + str[i], i + 1); // include
  subsets(str, current, i + 1);          // exclude
}
```

### ✅ 18. Permutations of a String

```js
function permute(str, l = 0, r = str.length - 1) {
  if (l === r) {
    console.log(str);
    return;
  }
  for (let i = l; i <= r; i++) {
    str = swap(str, l, i);
    permute(str, l + 1, r);
    str = swap(str, l, i); // backtrack
  }
}

function swap(str, i, j) {
  let arr = str.split("");
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr.join("");
}
```

## 🧩 Backtracking Basics (Recursive + Conditional)

### ✅ 19. N-Queens Problem (Simplified for Concept)

```js
function solveNQueens(n) {
  const board = Array(n).fill().map(() => Array(n).fill("."));
  const result = [];

  function isSafe(row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
      if (col - (row - i) >= 0 && board[i][col - (row - i)] === "Q") return false;
      if (col + (row - i) < n && board[i][col + (row - i)] === "Q") return false;
    }
    return true;
  }

  function backtrack(row) {
    if (row === n) {
      result.push(board.map(r => r.join("")));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row][col] = "Q";
        backtrack(row + 1);
        board[row][col] = ".";
      }
    }
  }

  backtrack(0);
  return result;
}
```


## 🔹 When to Use Recursion

✅ Use recursion when:

* Problem has a **natural substructure** (e.g., trees)
* The solution requires **backtracking** or **exploration**
* Problems define themselves **in terms of smaller versions**

❌ Avoid recursion:

* For **very large input** (can hit stack overflow)
* When an **iterative solution** is cleaner

## 🔹 Visualizing Recursion

Use **stack diagrams** or **recursion trees** to visualize how each call behaves.

For example, calling `fib(4)` builds a tree like:

```
fib(4)
├── fib(3)
│   ├── fib(2)
│   ├── fib(1)
├── fib(2)
    ├── fib(1)
    ├── fib(0)
```

## 🔹 Optimizing Recursion

### 1. **Memoization**

```js
const memo = {};
function fib(n) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  return memo[n] = fib(n - 1) + fib(n - 2);
}
```

### 2. **Tail Recursion (not optimized in JS engines)**

```js
function tailFactorial(n, acc = 1) {
  if (n === 0) return acc;
  return tailFactorial(n - 1, acc * n);
}
```

## 🔹 Recursion in Real DSA Use-Cases

* **Binary Search Tree traversal**
* **DFS in graphs**
* **Sorting algorithms**: Merge Sort, Quick Sort
* **Backtracking**: N-Queens, maze problems
* **Generating subsets, permutations, combinations**

## ✅ Summary: How to Master Recursion

* ✅ Start with **simple problems** like factorial, sum, and reverse
* ✅ Always define a **clear base case**
* ✅ Trust the function call to handle smaller input correctly
* ✅ Dry-run with pencil or use visual tools to trace recursion
* ✅ Practice problems from platforms like LeetCode, HackerRank, Codeforces

## ✅ TL;DR Recap

### 🔥 Must-Know Concepts

| Concept                    | Use Case                        |
| -------------------------- | ------------------------------- |
| Base case & recursive call | Core of recursion               |
| Stack trace                | Understand call order           |
| Dry runs                   | Debug and visualize             |
| Memoization                | Optimize overlapping recursion  |
| Backtracking               | Solve constraint-based problems |

## 🎯 Practice Roadmap (Progressive)

1. Print numbers (basic recursion)
2. Math functions (factorial, sum, digits)
3. Strings and arrays (reverse, count, max)
4. Fibonacci (naive → memoized)
5. Power functions (naive → optimized)
6. Subsets and permutations (recursion trees)
7. Backtracking (N-Queens, Sudoku, etc.)
