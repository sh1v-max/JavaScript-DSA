# **🔥 DYNAMIC PROGRAMMING — COMPLETE LEETCODE TABLE (BEGINNER → ADVANCED)**

Organized by **pattern**, then by **difficulty**.

Copy this into your notes — this is THE roadmap.

---

# **📌 1. 1D DP (Linear DP)**

Used for basic “build from previous states” problems.

| Level  | Problem                           | ID   |
| ------ | --------------------------------- | ---- |
| Easy   | Fibonacci Number                  | 509  |
| Easy   | Climbing Stairs                   | 70   |
| Easy   | Min Cost Climbing Stairs          | 746  |
| Medium | House Robber                      | 198  |
| Medium | House Robber II                   | 213  |
| Medium | Delete and Earn                   | 740  |
| Medium | Maximum Subarray (Kadane variant) | 53   |
| Medium | Partition Equal Subset Sum        | 416  |
| Hard   | Paint House III                   | 1473 |

---

# **📌 2. 2D GRID DP (Matrix Movement)**

Paths, obstacles, min cost, max coins, etc.

| Level  | Problem                  | ID   |
| ------ | ------------------------ | ---- |
| Easy   | Unique Paths             | 62   |
| Medium | Unique Paths II          | 63   |
| Medium | Minimum Path Sum         | 64   |
| Medium | Cherry Pickup II         | 1463 |
| Medium | Minimum Falling Path Sum | 931  |
| Hard   | Cherry Pickup I          | 741  |
| Hard   | Dungeon Game             | 174  |

---

# **📌 3. STRING / SUBSEQUENCE DP**

Matching, edit distance, LCS, palindromes.

| Level  | Problem                         | ID   |
| ------ | ------------------------------- | ---- |
| Easy   | Longest Palindrome (counting)   | 409  |
| Medium | Longest Palindromic Substring   | 5    |
| Medium | Longest Common Subsequence      | 1143 |
| Medium | Edit Distance                   | 72   |
| Medium | Longest Increasing Subsequence  | 300  |
| Medium | Palindromic Substrings          | 647  |
| Medium | Longest Palindromic Subsequence | 516  |
| Hard   | Distinct Subsequences           | 115  |
| Hard   | Regular Expression Matching     | 10   |
| Hard   | Wildcard Matching               | 44   |

---

# **📌 4. 0/1 KNAPSACK DP**

When you “pick or skip” items.

| Level  | Problem                    | ID   |
| ------ | -------------------------- | ---- |
| Easy   | Last Stone Weight II       | 1049 |
| Medium | Partition Equal Subset Sum | 416  |
| Medium | Target Sum                 | 494  |
| Medium | Coin Change                | 322  |
| Medium | Coin Change II             | 518  |
| Medium | Combination Sum IV         | 377  |
| Hard   | Knapsack-like Scheduling   | —    |
| Hard   | Profitable Schemes         | 879  |
| Hard   | Ones and Zeroes            | 474  |

---

# **📌 5. INTERVAL DP**

Problems where dp[l][r] depends on splitting in-between.

| Level  | Problem                            | ID   |
| ------ | ---------------------------------- | ---- |
| Medium | Palindrome Partitioning II         | 132  |
| Hard   | Burst Balloons                     | 312  |
| Hard   | Minimum Cost Tree From Leaf Values | 1130 |
| Hard   | Stone Game II                      | 1140 |
| Hard   | Stone Game V                       | 1563 |

These require serious range thinking.

---

# **📌 6. TREE DP**

Using DFS + combining children states.

| Level  | Problem                  | ID   |
| ------ | ------------------------ | ---- |
| Medium | House Robber III         | 337  |
| Medium | Diameter of Binary Tree  | 543  |
| Medium | Maximum Path Sum         | 124  |
| Medium | Binary Tree Cameras      | 968  |
| Hard   | Smallest Sufficient Team | 1125 |

Tree DP is mostly recursion with multiple sub-returns.

---

# **📌 7. BITMASK DP**

State is a subset (2ⁿ states).

| Level  | Problem                              | ID   |
| ------ | ------------------------------------ | ---- |
| Medium | Count Number of Teams (small masks)  | —    |
| Medium | Maximum Compatibility Score Sum      | 1947 |
| Hard   | Traveling Salesman Problem (TSP)     | 943  |
| Hard   | Partition to K Equal Sum Subsets     | 698  |
| Hard   | Find Minimum Time to Finish All Jobs | 1723 |
| Hard   | Assigning Workers to Jobs            | 1349 |

When N ≤ 15 → expect bitmask DP.

---

# **📌 8. DIGIT DP**

Used for counting numbers with constraints.

| Level  | Problem                                        | ID  |
| ------ | ---------------------------------------------- | --- |
| Medium | Count Numbers With Unique Digits               | 357 |
| Medium | Numbers With Same Consecutive Differences      | 967 |
| Hard   | Numbers At Most N Given Digit Set              | 902 |
| Hard   | Non-negative Integers Without Consecutive Ones | 600 |
| Hard   | Digit DP classic (custom problems)             | —   |

Digit DP uses states like dp[pos][tight][sum][other_state].

---

# **📌 9. GRAPH DP / SHORTEST PATH DP**

Dynamic programming on graphs.

| Level  | Problem                                 | ID   |
| ------ | --------------------------------------- | ---- |
| Medium | Longest Increasing Path in a Matrix     | 329  |
| Medium | Number of Ways to Arrive at Destination | 1976 |
| Hard   | Word Break II                           | 140  |
| Hard   | Number of Increasing Paths in a Grid    | 2328 |
| Hard   | Minimum Path Cost in a Graph            | —    |

---

# **🔥 BONUS — EASIEST DP PROBLEMS TO BEGIN WITH**

Start with these 7 to build intuition:

1. **Climbing Stairs — 70**
2. **Min Cost Climbing Stairs — 746**
3. **Fibonacci — 509**
4. **House Robber — 198**
5. **Unique Paths — 62**
6. **Longest Palindromic Substring — 5**
7. **Longest Increasing Subsequence — 300**

After this → move to knapsack & string DP.
