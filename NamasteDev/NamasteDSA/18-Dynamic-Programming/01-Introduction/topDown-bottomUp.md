# **Dynamic Programming: Top-Down & Bottom-Up (Complete Note)**

## **1. Introduction**

Dynamic Programming (DP) is an optimization technique used to solve problems that:

1. **Have overlapping subproblems**
2. **Show optimal substructure**

DP improves performance by **avoiding repeated computation** of the same subproblems.

It is essentially:

> **Optimized recursion + memory.**

---

# **2. Key Concepts**

## **2.1 Overlapping Subproblems**

A problem breaks into subproblems that appear again and again.

Example: Fibonacci
`fib(5)` needs `fib(4)` and `fib(3)`
`fib(4)` needs `fib(3)` and `fib(2)`
→ `fib(3)` appears multiple times

Naive recursion recalculates them repeatedly → exponential time.

DP solves each subproblem **once**.

---

## **2.2 Optimal Substructure**

The solution of the whole problem can be built using solutions of smaller parts.

Example:
`fib(n) = fib(n-1) + fib(n-2)`
→ larger solution built from smaller ones.

Most DP problems follow this pattern.

---

# **3. Two Ways to Implement DP**

DP can be implemented in two fundamental ways:

1. **Top-Down (Memoization)**
2. **Bottom-Up (Tabulation)**

Both achieve the same final goal but differ in execution.

---

# **4. Top-Down Dynamic Programming (Memoization)**

### **4.1 Definition**

* Start from the original problem.
* Use recursion to break into smaller problems.
* **Store solved subproblems** in a memo (array/object).
* When a subproblem repeats → reuse the stored answer.

### **4.2 When to Use**

* Recursion is natural for the problem.
* Only a few subproblems are actually used.
* State transitions depend on choices explored dynamically.

Examples:

* DFS-based problems
* Tree problems
* Certain graph DP problems

---

## **4.3 Example: Fibonacci (Top-Down)**

### **Mathematical Definition**

```
F(0) = 0
F(1) = 1
F(n) = F(n-1) + F(n-2)
```

### **Code**

```js
let store = {}

var fib = function(n) {
    if (n <= 1) return n;

    if (!store[n]) {
        store[n] = fib(n - 1) + fib(n - 2);
    }
    return store[n];
};
```

---

## **4.4 Dry Run for n = 5**

```
fib(5)
→ fib(4) + fib(3)

fib(4)
→ fib(3) + fib(2)

fib(3)
→ fib(2) + fib(1)

fib(2)
→ fib(1) + fib(0)

store[2] = 1
store[3] = 2
store[4] = 3
store[5] = 5
```

Repeated calls such as `fib(3)` and `fib(2)` are resolved from memory → O(1).

**Time Complexity:** O(n)
**Space Complexity:** O(n) because of recursion stack + memo table.

---

# **5. Bottom-Up Dynamic Programming (Tabulation)**

### **5.1 Definition**

* Solve **all subproblems** starting from the smallest.
* Use iteration (no recursion).
* Fill a DP table until the final answer is reached.

### **5.2 When to Use**

* All subproblems are needed.
* Recursion depth would be too large.
* Clean sequential logic (e.g., loops).

Examples:

* Knapsack
* LCS
* Edit Distance
* Fibonacci (iterative)

---

## **5.3 Example: Fibonacci (Bottom-Up)**

```js
var fib = function(n) {
    let dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};
```

### **How it Works**

* Start with base cases: `dp[0] = 0`, `dp[1] = 1`
* Build up to `dp[n]` using iteration.

**Time Complexity:** O(n)
**Space Complexity:** O(n) (can be reduced to O(1))

---

# **6. Top-Down vs Bottom-Up (Clear Comparison)**

| Aspect       | Top-Down (Memoization)                 | Bottom-Up (Tabulation)    |
| ------------ | -------------------------------------- | ------------------------- |
| Method       | Recursion + memo table                 | Iteration + table         |
| Order        | Start from n → go backwards            | Start from 0 → go forward |
| Computation  | Solve subproblems **only when needed** | Solve **all** subproblems |
| Memory Use   | Higher (recursion stack)               | Lower                     |
| Coding Style | More intuitive                         | More mechanical           |
| Good For     | Tree DP, selective states              | Classic DP formulas       |

---

# **7. How to Identify DP Problems**

A problem is a DP problem if:

1. It can be broken into subproblems
2. Subproblems repeat
3. Larger solutions depend on smaller ones
4. Choices lead to optimal structure

Common indicators:

* “Min cost”, “max profit”, “count ways”
* “Shortest/longest”
* “Pick/not pick”
* “Paths”
* “Break into smaller decisions”

---

# **8. How to Approach Any DP Problem**

### **Step 1 — Define the subproblem (state).**

What does `dp[i]` or `solve(i, j)` represent?

### **Step 2 — Define recurrence relation.**

How does the current state depend on previous ones?

### **Step 3 — Choose Top-Down or Bottom-Up.**

### **Step 4 — Add base cases.**

### **Step 5 — Implement.**

---

# **9. Summary**

* DP is **optimized recursion** that stores previous results.
* Two main implementations:

  * **Top-Down:** recursion + memoization
  * **Bottom-Up:** iterative table-filling
* Both rely on:

  * **Overlapping subproblems**
  * **Optimal substructure**
* Good DP = correct states + correct recurrence + correct implementation.