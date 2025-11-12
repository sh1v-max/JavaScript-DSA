# 🧠 **Greedy Algorithm**

## **1. What is a Greedy Algorithm?**

A **Greedy Algorithm** is a method where you **make the best possible choice at every step**, hoping that these local best choices will lead to a **global best (optimal) solution**.

In short:

> “Take what looks best *now*, and don’t look back.”

Greedy algorithms don’t reconsider previous decisions — they **never backtrack**.


### 🧩 **Example (Intuition)**

Imagine you’re choosing coins to make ₹30 using {1, 2, 5, 10}.
You always take the **largest coin possible** first:
10 → 10 → 10 = ₹30.

That’s a **greedy choice**. It works here perfectly.

But if the coins were {1, 3, 4}, and you want ₹6 —
Greedy would choose 4 + 1 + 1 (3 coins),
but the best is 3 + 3 (2 coins).

So, greedy **doesn’t always give the best** — only when the problem fits certain properties.


## **2. Two Key Properties Required**

A problem can be solved using a greedy algorithm **only if** it satisfies both of these:

| Property                   | Meaning                                                                                      | Example                                       |
| -------------------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------- |
| **Greedy Choice Property** | A global optimum can be reached by choosing the local optimum at each step.                  | Picking the next activity that ends earliest. |
| **Optimal Substructure**   | The overall problem can be broken into smaller subproblems that can be solved independently. | Shortest path, knapsack, etc.                 |

If these two properties exist → greedy works beautifully.
If not → use **Dynamic Programming (DP)** instead.


## **3. Why use Greedy?**

* Simpler logic
* Fast (no recursion/backtracking)
* Usually **O(n log n)** or **O(n)**
* Excellent for optimization problems: *maximize, minimize, shortest, fastest, cheapest, etc.*


## **4. How to Identify a Greedy Problem**

✅ Ask yourself:

1. Can I break this problem into steps?
2. Can I make the best choice at each step using local info?
3. Do I *never* need to undo my decision later?
4. Does the problem involve sorting or selection repeatedly?

If yes to most → it’s probably a Greedy problem.


## **5. Basic Examples in JavaScript**


### **(A) Minimum Coins**

**Problem:** Find minimum number of coins to make a given amount.

```javascript
function minCoins(amount, coins) {
    coins.sort((a, b) => b - a); // largest to smallest
    let count = 0;

    for (let coin of coins) {
        while (amount >= coin) {
            amount -= coin;
            count++;
        }
    }

    return count;
}

console.log(minCoins(30, [1, 5, 10, 25])); // Output: 2 (25 + 5)
```

🧠 **Greedy Choice:** Always use the largest coin available.
⚙️ **Time Complexity:** `O(n log n)` (for sorting).
⚠️ **Works only** for “canonical” coin systems like INR or USD.


### **(B) Job Sequencing (Greedy Scheduling)**

Each job has a **deadline** and a **profit**.
You can only do one job at a time. Maximize profit.

```javascript
function jobSequencing(jobs) {
    jobs.sort((a, b) => b.profit - a.profit); // sort by highest profit
    let maxDeadline = Math.max(...jobs.map(j => j.deadline));
    let slots = Array(maxDeadline).fill(false);
    let totalProfit = 0;

    for (let job of jobs) {
        for (let j = job.deadline - 1; j >= 0; j--) {
            if (!slots[j]) {
                slots[j] = true;
                totalProfit += job.profit;
                break;
            }
        }
    }

    return totalProfit;
}

let jobs = [
    {id: 'a', deadline: 2, profit: 100},
    {id: 'b', deadline: 1, profit: 19},
    {id: 'c', deadline: 2, profit: 27},
    {id: 'd', deadline: 1, profit: 25},
    {id: 'e', deadline: 3, profit: 15}
];

console.log(jobSequencing(jobs)); // Output: 142
```

🧠 **Idea:** Always pick the job with the highest profit that can fit before its deadline.
⚙️ **Time Complexity:** `O(n log n)`


### **(C) Activity Selection Problem**

**Problem:** Find the maximum number of activities that don’t overlap.

```javascript
function activitySelection(start, end) {
    let activities = start.map((s, i) => ({start: s, end: end[i]}));
    activities.sort((a, b) => a.end - b.end);

    let count = 1;
    let lastEnd = activities[0].end;

    for (let i = 1; i < activities.length; i++) {
        if (activities[i].start >= lastEnd) {
            count++;
            lastEnd = activities[i].end;
        }
    }

    return count;
}

let start = [1, 3, 0, 5, 8, 5];
let end = [2, 4, 6, 7, 9, 9];
console.log(activitySelection(start, end)); // 4
```

🧠 **Greedy Choice:** Always pick the activity that ends earliest.
⚙️ **Time Complexity:** `O(n log n)`


### **(D) Fractional Knapsack Problem**

You can take fractions of items to maximize profit.

```javascript
function fractionalKnapsack(values, weights, W) {
    let items = values.map((v, i) => ({
        value: v,
        weight: weights[i],
        ratio: v / weights[i]
    }));

    items.sort((a, b) => b.ratio - a.ratio); // highest ratio first
    let totalValue = 0;

    for (let item of items) {
        if (item.weight <= W) {
            totalValue += item.value;
            W -= item.weight;
        } else {
            totalValue += item.ratio * W;
            break;
        }
    }

    return totalValue;
}

let values = [60, 100, 120];
let weights = [10, 20, 30];
let W = 50;

console.log(fractionalKnapsack(values, weights, W)); // 240
```

🧠 **Greedy Choice:** Pick the item with the **highest value/weight** ratio first.
⚙️ **Time Complexity:** `O(n log n)`


## **6. Advanced Greedy Applications**

Once you understand the basics, you can solve famous greedy-based problems:

| Problem                    | Idea                                    | Algorithm                  |
| -------------------------- | --------------------------------------- | -------------------------- |
| Minimum Spanning Tree      | Add the smallest edges first            | Kruskal’s / Prim’s         |
| Shortest Path (Weighted)   | Choose the shortest known path first    | Dijkstra’s                 |
| Huffman Coding             | Combine least frequent characters first | Huffman’s Algorithm        |
| Interval Scheduling        | Pick the earliest finishing interval    | Activity Selection variant |
| Job Sequencing             | Schedule most profitable jobs           | Greedy + sorting           |
| Minimum Platforms (Trains) | Sort arrival/departure, count overlaps  | Two-pointer method         |


## **7. Common Greedy Patterns**

### **(a) Sorting-Based Selection**

Most greedy solutions involve sorting — by weight, end time, profit, etc.

Example:

```javascript
arr.sort((a,b) => b.value - a.value);
```

### **(b) Two-Pointer Technique**

Used in problems like merging intervals, meeting rooms, platforms, etc.

### **(c) Priority Queue / Heap**

For advanced greedy problems where you need to repeatedly pick the smallest/largest element quickly (e.g., Huffman coding, Dijkstra).


## **8. When NOT to Use Greedy**

Greedy fails when an **early local choice blocks the global optimum**.

For example:

* In **0/1 Knapsack** (you can’t take fractions), greedy fails.
* In **coin change with weird denominations**, greedy fails.

When greedy fails → use **Dynamic Programming** (DP).


## **9. Advantages & Disadvantages**

| Advantages                    | Disadvantages                                                      |
| ----------------------------- | ------------------------------------------------------------------ |
| Fast and easy to implement    | Doesn’t guarantee optimal solution for every problem               |
| No recursion or complex state | Requires special properties (greedy-choice + optimal substructure) |
| Uses less memory              | Can fail on edge cases                                             |


## **10. Key Takeaways**

1. Greedy = **local best choice** at each step.
2. Only works if problem has **greedy-choice** and **optimal substructure** properties.
3. Usually involves **sorting + iteration**.
4. Great for problems like **intervals, scheduling, MST, knapsack (fractional)**.
5. Always verify greedy correctness by testing edge cases.


## **11. Summary Mindmap**

```
GREEDY ALGORITHM
│
├── Make the best local choice
│
├── Properties
│   ├── Greedy-choice property
│   └── Optimal substructure
│
├── Common Examples
│   ├── Coin Change
│   ├── Activity Selection
│   ├── Fractional Knapsack
│   ├── Job Sequencing
│   ├── Huffman Coding
│   ├── MST (Kruskal/Prim)
│
├── Common Pattern
│   ├── Sort items
│   ├── Pick best fit
│   └── Iterate without backtracking
│
└── Complexity
    ├── O(n log n) → sorting
    └── O(n) → iteration
```


## **12. Practice Problems (Recommended Order)**

1. [Easy] Coin Change (canonical system)
2. [Easy] Activity Selection
3. [Easy] Fractional Knapsack
4. [Medium] Job Sequencing
5. [Medium] Minimum Platforms
6. [Medium] Interval Scheduling / Merge Intervals
7. [Hard] Huffman Coding
8. [Hard] Dijkstra’s / Kruskal’s Algorithm
