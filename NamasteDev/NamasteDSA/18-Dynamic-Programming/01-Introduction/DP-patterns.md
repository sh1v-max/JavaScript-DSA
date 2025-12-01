# **🔥 DP PATTERNS + HOW TO IDENTIFY DP IN ANY QUESTION**

This is the **real cheatcode**. Once you understand these patterns, DP stops looking scary and starts looking predictable.

---

# **PART 1 — HOW TO IDENTIFY A DP QUESTION IN 10 SECONDS**

When you see a problem, check for these signals:

---

## **✅ SIGNAL 1: “I’m recomputing the same thing again and again.”**

Example questions:

* Fibonacci
* Climbing stairs
* Coin change
* LCS / Edit Distance

If your recursion tree starts repeating → **100% DP.**

---

## **✅ SIGNAL 2: “I can break the big problem into smaller subproblems.”**

The final answer is built from smaller answers.

Examples:

* min cost path
* knapsack
* max profit stock transactions

---

## **✅ SIGNAL 3: “I need the *optimal* answer.”**

Keywords:

* minimum
* maximum
* longest
* shortest
* optimal
* best possible

DP is usually the best choice.

---

## **✅ SIGNAL 4: “Two choices → pick one and explore results.”**

If a problem forces decisions:

**take or skip?
buy or sell?
move left or right?
include or exclude?**

This screams DP.

---

## **Simple Rule to Identify DP:**

> **If a problem has choices + overlapping subproblems + needs optimisation → it's DP.**

Done.

---

# **PART 2 — THE 7 UNIVERSAL DP PATTERNS**

Every DP problem in LeetCode fits into one of these buckets.

Memorize these and you instantly level up.

---

# **PATTERN 1 — 1D DP (Linear DP)**

Simple one-dimensional dp array.

Used when:

* you move step-by-step
* each step depends on previous steps

Examples:

* Fibonacci
* Climbing Stairs
* Min cost climbing stairs
* House Robber

**Form:**

```
dp[i] = best using dp[i-1], dp[i-2]
```

---

# **PATTERN 2 — 2D GRID DP (Matrix DP)**

Used when movement is in a grid: up/down/left/right.

Examples:

* Unique Paths
* Minimum Path Sum
* Grid coin collection
* Robot movement problems

**Form:**

```
dp[i][j] = f(dp[i-1][j], dp[i][j-1])
```

You build row-by-row.

---

# **PATTERN 3 — SUBSEQUENCE DP (String DP)**

Any problem involving sequences, strings, matching, or edits.

Examples:

* Longest Common Subsequence (LCS)
* Longest Increasing Subsequence (LIS)
* Edit distance
* Palindromic subsequences

**Form:**

```
if match → dp[i][j] = dp[i-1][j-1] + 1
else → dp[i][j] = max(dp[i-1][j], dp[i][j-1])
```

---

# **PATTERN 4 — KNAPSACK DP**

Whenever you see:

* capacity
* weight
* limit
* maximize/minimize under restriction

Examples:

* 0/1 knapsack
* Unbounded knapsack
* Coin Change
* Subset Sum

**Form:**

```
dp[i][w] = max of taking or skipping item i
```

---

# **PATTERN 5 — INTERVAL DP**

When the problem requires solving ranges or intervals.

Examples:

* Burst Balloons
* Matrix Chain Multiplication
* Palindrome partitioning
* DP on intervals of strings

**Form:**

```
dp[l][r] depends on dp[l][k] and dp[k+1][r]
```

These require thinking in segments.

---

# **PATTERN 6 — TREE DP**

Tree problems with DFS where results combine from children.

Examples:

* Max path sum in tree
* Diameter of a tree
* Sum of distances in tree
* Independent set in trees (like House Robber III)

**Form:**

```
dp[node] = combine(dp[children])
```

---

# **PATTERN 7 — DP ON BITS (Bitmask DP)**

Used when the state represents a subset.

Examples:

* Traveling Salesman Problem (TSP)
* Assign workers to jobs
* Count subsets with property X
* Maximum compatibility score sum

**Form:**

```
dp[mask] = best for this subset
```

State size = 2ⁿ.

---

# **BONUS PATTERN — DIGIT DP**

Used when the question asks:

* count numbers < N with some properties
* count numbers with restricted digits
* sum of digits, xor of digits, patterns

**Form:**

```
dp[pos][tight][state]
```

Very common in competitive programming.

---

# **PART 3 — HOW TO SOLVE ANY DP PROBLEM (THE 5-STEP FORMULA)**

This is the formula I guarantee works for ANY DP question:

---

## **STEP 1 — Identify the “state”**

What parameters uniquely describe a subproblem?

Examples:

* index
* remaining capacity
* position in grid
* mask
* number formed so far

---

## **STEP 2 — Define your DP Array / Memo**

Like:

* dp[i]
* dp[i][j]
* dp[i][w]
* dp[mask]

The structure depends on the state.

---

## **STEP 3 — Write the recurrence (the transition)**

This is the rule connecting smaller problems:

```
dp[i] = dp[i-1] + dp[i-2]
dp[i][j] = min(dp[i-1][j], dp[i][j-1])
```

---

## **STEP 4 — Add base cases**

First row / first column / dp[0] setup.

---

## **STEP 5 — Fill it (tabulation) or recurse + memo (top-down)**

Done.

---

# **PART 4 — THE FASTEST TRICK TO RECOGNIZE DP**

Here’s the golden question:

> **“If I try recursion, will I recompute the same subproblem?”**

If *yes* → It’s DP.
If *no* → Not DP.

Examples:
LIS? Yes, repeated states → DP.
Binary search? No repeats → not DP.
Graphs? Only if revisiting patterns repeatedly → DP.
Greedy? Never DP unless states overlap.

---

# **PART 5 — Final Mini-Cheat Sheet (Copy-Paste Quality)**

```
DP Checklist:
1. Overlapping subproblems?
2. Optimal substructure?
3. Repeated recursion states?
4. Searching for min/max/longest?
5. Multiple choices at each step?

If yes → It's DP.

DP Patterns:
1. 1D DP
2. 2D Grid DP
3. String/Subsequence DP
4. Knapsack DP
5. Interval DP
6. Tree DP
7. Bitmask DP
8. Digit DP

DP Formula:
- define state
- write recurrence
- add base cases
- compute top-down or bottom-up
```