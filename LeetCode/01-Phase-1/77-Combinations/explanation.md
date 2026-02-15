# 🧠 Problem Summary

You’re given two integers `n` and `k`.
You need to return **all possible combinations** of `k` numbers from the range `[1, n]`.

> “Combination” means order doesn’t matter.
> So `[1,2]` and `[2,1]` are considered the same.


## 🪄 Example

### Input

```
n = 4, k = 2
```

### Output

```
[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
```

These represent all 2-number combinations from 1–4.


## 💡 Intuition

We can think recursively:

* Start from number `1` to `n`.
* For each number, we have **two choices**:

  * **Include** it in the current combination.
  * **Skip** it and move on.
* We keep going until our current combination reaches length `k`, then we push it into the result.


## 🧩 Approach (Backtracking)

1. Initialize an empty result array `res = []`.
2. Use a helper function `backtrack(start, combo)`:

   * If `combo.length === k`, push a **copy** of combo into `res`.
   * Otherwise, loop `i` from `start` to `n`, and for each:

     * Add `i` to `combo`.
     * Recursively call `backtrack(i + 1, combo)`.
     * Then **backtrack** — remove the last element.
3. Finally, return `res`.


## ✅ Code (JavaScript)

```js
var combine = function(n, k) {
    const res = [];

    function backtrack(start, combo) {
        if (combo.length === k) {
            res.push([...combo]);
            return;
        }

        for (let i = start; i <= n; i++) {
            combo.push(i);
            backtrack(i + 1, combo);
            combo.pop(); // backtrack
        }
    }

    backtrack(1, []);
    return res;
};

// Example
console.log(combine(4, 2));
// Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
```


## ⏱️ Complexity

| Type  | Complexity     | Explanation                                        |
| ----- | -------------- | -------------------------------------------------- |
| Time  | O(C(n, k) × k) | You generate each combination and copy it (size k) |
| Space | O(k)           | Recursive call stack depth up to k                 |


## 🧭 Key Takeaways

* **Backtracking = recursion + undo step.**
* Think of building all combinations as exploring a tree of choices.
* For `n=4, k=2`, the recursion tree explores all paths like:

  ```
  []
   ├─ [1]
   │   ├─ [1,2]
   │   ├─ [1,3]
   │   └─ [1,4]
   ├─ [2]
   │   ├─ [2,3]
   │   └─ [2,4]
   ├─ [3]
   │   └─ [3,4]
   └─ [4]
  ```
