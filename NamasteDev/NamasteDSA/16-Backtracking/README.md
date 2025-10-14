# 🧠 **Backtracking in DSA (JavaScript)**


## **1. The Core Idea**

Backtracking is a **systematic way to explore all possible solutions** to a problem, step by step, and **undo choices when they don’t work out**.

Think of it as a **“smart brute-force”** approach — it tries every possibility but avoids exploring obviously wrong paths.


## **2. Real-World Analogy**

Imagine you’re solving a maze:

* You move forward at intersections.
* If you hit a wall, you *go back* to the last intersection and try a different path.

That “going back” is **backtracking**.


## **3. The Building Blocks of Backtracking**

To solve problems using backtracking, three things are always needed:

| Concept                       | Meaning                                       |
| ----------------------------- | --------------------------------------------- |
| **Decision Space / Choices**  | All the options you can choose at each step.  |
| **Constraints**               | Rules that tell you which options are valid.  |
| **Goal / Solution Condition** | When to stop recursion and record the result. |


## **4. State Space Tree — The Heart of Backtracking**

### **Definition:**

A **state space tree** is a **visual representation** of all possible states (decisions) your algorithm can take during recursion.

Each **node** represents a **partial solution (state)**,
and each **branch** represents a **choice** made at that state.

### **Example Tree:**

Let’s take a simple example to visualize this.

> Given an array `[2, 3, 5]`, find all subsets whose sum equals `8`.


## **5. Problem Setup: “Subset Sum Problem”**

### **Problem Statement**

Find all subsets of an array that add up to a target sum.

Example:

```js
Input: arr = [2, 3, 5], target = 8
Output: [[3,5]]
```

We’ll now see **how backtracking builds and explores** possible subsets step-by-step.


## **6. Understanding Through State Space Tree**

Each element in the array gives us **two choices**:

1. **Include** it in the subset.
2. **Exclude** it.

At every level of recursion, we decide for one element.

Let’s draw the **state space tree** for `[2,3,5]` and target = `8`:

```
                     []
          /                        \
       include 2                 exclude 2
       [2]                          []
     /     \                       /    \
 include3  exclude3           include3  exclude3
 [2,3]     [2]                [3]        []
   /  \     /  \               /  \       /  \
+5  -5   +5  -5           +5  -5   +5  -5
[2,3,5] ... etc
```

Now, calculate sums:

* `[2,3,5]` → 10 ❌
* `[3,5]` → 8 ✅
  So `[3,5]` is a valid subset.

The algorithm **explores** all paths (recursively), and when it finds one that matches the target, it **stores it**.


## **7. Writing the Recursive Code**

Let’s write this problem step-by-step.

### Step 1: Define Recursive Function

We’ll define:

* `index` → current element position
* `path` → current subset being formed
* `sum` → current sum of chosen elements

### Step 2: Base Case

* If `sum == target` → store the subset
* If `index == arr.length` → stop recursion

### Step 3: Recursive Choices

* Include the current element
* Exclude the current element


### ✅ **Full JavaScript Code**

```js
function subsetSum(arr, target) {
  const results = [];

  function backtrack(index, path, sum) {
    // Base case
    if (sum === target) {
      results.push([...path]);
      return; // no need to explore further
    }

    if (index >= arr.length || sum > target) {
      return; // stop exploring this path
    }

    // Choice 1: Include arr[index]
    path.push(arr[index]);
    backtrack(index + 1, path, sum + arr[index]);

    // Backtrack (undo the choice)
    path.pop();

    // Choice 2: Exclude arr[index]
    backtrack(index + 1, path, sum);
  }

  backtrack(0, [], 0);
  return results;
}

console.log(subsetSum([2,3,5], 8)); // [[3,5]]
```


## **8. Step-by-Step Execution**

### Initial call:

`backtrack(0, [], 0)`

| Step | Path    | Sum | Action            |
| ---- | ------- | --- | ----------------- |
| 1    | []      | 0   | Start             |
| 2    | [2]     | 2   | Include 2         |
| 3    | [2,3]   | 5   | Include 3         |
| 4    | [2,3,5] | 10  | > 8 → backtrack   |
| 5    | [2,5]   | 7   | < 8 → continue    |
| 6    | [3,5]   | 8   | ✅ Found solution  |
| 7    | ...     | ... | Explore remaining |

When a path fails (sum > target), the recursion “backtracks” — removing the last added element (`path.pop()`).


## **9. How Backtracking Actually Works**

| Concept                   | Description                                                       |
| ------------------------- | ----------------------------------------------------------------- |
| **Recursive Exploration** | Every call represents a “state” with certain elements chosen.     |
| **Backtracking Step**     | Undo the last choice (`path.pop()`) before trying another option. |
| **Constraint Checking**   | Early stopping using conditions like `sum > target`.              |
| **Result Collection**     | Whenever constraints are met, clone and store the path.           |


## **10. Visualizing Stack Calls**

If you print the recursion calls, you’ll see how it behaves like DFS:

```
[]
[2]
[2,3]
[2,3,5] -> discard
[2,5]
[3]
[3,5] -> solution
[5]
[]
```

That’s the entire **state space tree traversal** in action.


## **11. Time & Space Complexity**

Let’s analyze:

* At each index, we have **2 choices** (include / exclude).
* For `n` elements → total paths = **2ⁿ** (worst case).
* So, **Time Complexity: O(2ⁿ)**
* **Space Complexity:**

  * Recursion depth: `O(n)`
  * Results storage: depends on number of valid subsets.

> [Then why it's still efficient?](https://github.com/sh1v-max/Namaste-Dev/blob/main/NamasteDSA/16-Backtracking/whyStillEfficient.md)


## **12. Key Insights**

| Concept                 | Explanation                                                        |
| ----------------------- | ------------------------------------------------------------------ |
| **State Space Tree**    | Represents all possible decisions (include/exclude) at each level. |
| **Pruning**             | Stop exploring when `sum > target` or `index == arr.length`.       |
| **Backtrack Step**      | Undo choice → `path.pop()`                                         |
| **Recursive Structure** | Problem = smaller subproblems (DFS traversal).                     |


## **13. When to Use Backtracking**

You should think of backtracking when:

* The problem involves **combinations, permutations, or subsets**.
* There’s a **constraint** (like sum == target, or placing queens safely).
* You can **incrementally build** the solution and **discard invalid paths early**.


## **14. Real Examples (All Based on Same Idea)**

| Problem             | Key Decision                                   |
| ------------------- | ---------------------------------------------- |
| **Subset Sum**      | Include or exclude each element                |
| **Combination Sum** | Choose or skip each number (can reuse numbers) |
| **Permutations**    | Choose unused numbers in all possible orders   |
| **N-Queens**        | Place a queen or not in each column            |
| **Sudoku Solver**   | Place digits 1–9 if valid                      |

They’re all **variations of the same core pattern** — recursive exploration with backtracking.


## **15. General Template (Universal Backtracking Structure)**

```js
function backtrack(params...) {
  if (goalReached) {
    saveSolution();
    return;
  }

  for (let choice of possibleChoices) {
    if (isValid(choice)) {
      make(choice);
      backtrack(nextState);
      undo(choice); // <--- The backtrack step
    }
  }
}
```


## **16. Summary**

| Aspect                | Description                                            |
| --------------------- | ------------------------------------------------------ |
| **Definition**        | Backtracking = Try → Check → Undo                      |
| **Core Mechanism**    | Recursion + State Space Tree                           |
| **Why it’s powerful** | Explores all valid solutions without redundancy        |
| **When to use**       | Combinatorial or constraint-based problems             |
| **JS Tip**            | Always clone arrays (`[...path]`) when storing results |
