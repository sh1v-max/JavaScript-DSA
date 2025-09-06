# 572. Subtree of Another Tree — Detailed Notes

**Problem (short):** Given two binary trees `root` and `subRoot`, return `true` if there exists a node in `root` such that the subtree rooted at that node is identical (structure + values) to `subRoot`.


## Table of contents

1. Quick intuition
2. Brute force (clear, easy-to-understand)

   * Intuition
   * Approach
   * Reference code
   * Line-by-line explanation
   * Dry run (example)
   * Time & space complexity
   * Edge cases & pitfalls
   * Implementation tips
3. Optimized: **Serialization + Substring Search**

   * Intuition
   * Why this works (core idea)
   * Serialization details (how to do it correctly)
   * Reference code (serialize + includes)
   * Line-by-line explanation
   * Dry run (example)
   * Time & space complexity (and note about substring algorithm)
   * Pitfalls & gotchas
   * Alternatives (KMP, Rabin-Karp, tree-hashing)
4. Tests to try (list of test cases)
5. Short checklist before submitting
6. TL;DR summary


# 1. Quick intuition

* Check if `subRoot` appears anywhere in `root` as a whole subtree.
* Brute force: for every node in `root`, compare that node's subtree with `subRoot` using a tree-equality check.
* Optimized: encode every subtree as a string that uniquely captures structure + values, then check substring.


# 2. Brute force (clear, easy-to-understand)

### Intuition

* "Stop at each node of `root` and ask: if I overlay `subRoot` here, do all nodes and structure match?"
* Use a helper that answers: "Are these two trees the same?" (`isSameTree`).

### Approach

1. If `root` is null, it can't contain `subRoot` (return `false`).
2. If the subtree starting at the current `root` matches `subRoot` (via `isSameTree`) → return `true`.
3. Else, recursively check `root.left` and `root.right`.

### Reference code (recursive brute force)

```js
function isSubtree(root, subRoot) {
  if (!root) return false; // nothing to search

  function isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }

  return isSameTree(root, subRoot) ||
         isSubtree(root.left, subRoot) ||
         isSubtree(root.right, subRoot);
}
```

### Line-by-line explanation

* `if (!root) return false;` — If main tree is empty, no subtree possible.
* `isSameTree(p, q)` — standard recursive equality check:

  * both null → equal
  * one null → not equal
  * different values → not equal
  * otherwise compare left-left and right-right recursively
* Final return uses `||` to test three possibilities at this node:

  1. The subtree rooted at `root` equals `subRoot`.
  2. The match exists somewhere in `root.left`.
  3. The match exists somewhere in `root.right`.

### Dry run (example)

* `root = [3,4,5,1,2]` (visual: 3
  /
  4 5
  /
  1 2)
* `subRoot = [4,1,2]` (visual: 4
  /
  1 2)

Walk:

* Call `isSubtree(3, 4)`: check `isSameTree(3,4)` → false.
* Recurse left: `isSubtree(4, 4)`: check `isSameTree(4,4)` → true (it compares 4 with 4, then left-left 1==1 and right-right 2==2) → whole function returns true.

### Time complexity

* Let N = size of `root`, M = size of `subRoot`.
* For *each* of the N nodes we might call `isSameTree` which in worst-case compares up to M nodes.
* **Time: O(N \* M)**.

### Space complexity

* Recursion stack depth: O(height(root) + height(subRoot)).
* In worst case (skewed): O(N + M). In balanced trees: O(log N + log M).

### Edge cases & pitfalls

* Forgetting to return `false` for `if (!root)` causes `undefined` to propagate.
* Empty `subRoot` behavior: problem constraints usually say `subRoot` has at least 1 node; if `subRoot` could be null, define behavior (usually `true` since empty tree is subtree of any tree).
* Duplicate values: equality check must check structure too, not just values.

### Implementation tips

* Keep `isSameTree` as a clean helper inside `isSubtree` or as a separate function.
* Make null checks explicit and early to avoid errors.


# 3. Optimized: Serialization + Substring Search

### Intuition

* Convert each subtree into a unique string that encodes both **values** and **structure** (use null markers). If `subRoot` is a subtree, its serialized string will appear inside `root`'s serialized string.
* This turns the problem into string pattern search.

### Why this works (core idea)

* A correct serialization with null markers is a one-to-one representation of the tree structure and values.
* If `subRoot` matches the tree rooted at some node `x`, then serializing the whole `root` will produce a string that contains the serialized `subRoot` starting at the position corresponding to `x`'s serialization.

### Serialization details — how to do it **correctly**

1. Use a traversal that records nulls (preorder is common): visit node, then left, then right.
2. Use a delimiter between tokens (e.g. `,` or `-`) to prevent accidental numeric collisions (e.g. `12` vs `2`).
3. Mark `null` nodes explicitly (use `#` or `null`). Without null markers, different structures can produce the same sequence of values.

**Good serialized form (preorder + nulls):**

```
node -> "-" + node.val
null -> "-#"
```

Example for
3
/&#x20;
4   5
/&#x20;
1   2

serialized: `-3-4-1-#-#-2-#-#-5-#-#`

### Reference code (your provided code)

```js
var isSubtree = function(root, subRoot) {
    let hashRoot = serialize(root);
    let hashSubRoot = serialize(subRoot);

    return hashRoot.includes(hashSubRoot);
};
let serialize = function(root) {
    let hash = "";
    let traversal = (curr) => {
        if(!curr) {
            hash = hash + "-#";
            return;
        }
        hash = hash + "-" + curr.val;
        traversal(curr.left);
        traversal(curr.right);
    }
    traversal(root);
    return hash;
}
```

### Line-by-line explanation

* `serialize(root)` runs a preorder recursion and appends `-val` for a node and `-#` for nulls. The leading dash keeps tokens separate.
* `hashRoot.includes(hashSubRoot)` checks if the serialized `subRoot` string is a substring of the serialized `root` string.

### Dry run (example)

* `root` serialized: `-3-4-1-#-#-2-#-#-5-#-#`
* `subRoot` serialized: `-4-1-#-#-2-#-#`
* `includes` returns `true` because `-4-1-#-#-2-#-#` appears exactly inside the big string.

### Time complexity

* Serialization: visit each node once → O(N) for `root`, O(M) for `subRoot`.
* Substring search: if you use a linear-time pattern matcher (KMP) → O(N + M).
* If using JavaScript `.includes()` (engine-implemented), typical performance is very good; worst-case theoretical cost can be higher than O(N+M) depending on implementation, but engines often use optimized algorithms.

**Overall (with KMP): O(N + M) time.**

### Space complexity

* Storing serialized strings: O(N + M).
* Recursion stack for serialization: O(height(root) + height(subRoot)).

### Pitfalls & gotchas

* **Missing null markers**: failing to serialize nulls leads to false positives. Always encode null children.
* **No delimiter**: writing values back-to-back (e.g. `3,4,12`) without separators can cause accidental matches. Use separators or prefix each token with a non-digit marker like `-`.
* **Large string concatenation performance**: building very large strings using `+=` is OK in many engines, but for best performance consider accumulating tokens into an array and `join(',')` at the end.
* **`.includes()` vs guaranteed linear algorithm**: if you need guaranteed O(N+M) worst-case, implement KMP on the serialized arrays/strings.

### Alternatives (same optimization goal)

* **Rabin–Karp**: rolling-hash approach for substring search. Needs careful handling to avoid collisions (or use double hashing).
* **Tree-hashing (Merkle-like)**: compute a hash for every subtree bottom-up (e.g. `hash(node) = f(node.val, hash(left), hash(right))`). Then compare subtree hashes. This is O(N + M) and avoids big strings, but must use a robust hash or double hashing to avoid collisions.


# 4. Tests to try

* `root = []`, `subRoot = []` → (problem-specific; often `true` if you define empty subtree as valid)
* `root = []`, `subRoot = [1]` → `false`
* `root = [1]`, `subRoot = [1]` → `true`
* `root = [1,1,1,1]`, `subRoot = [1,1]` → test duplicates
* `root` with negative and multi-digit values → test delimiter correctness
* `root` with structure that could confuse serialization if nulls missing (left-heavy vs right-heavy)
* Large trees to test performance


# 5. Short checklist before submitting

* Use null markers in serialization (e.g. `#`).
* Use a delimiter or prefix to separate numeric tokens (e.g. `-val`).
* For production / strict complexity needs, use KMP for substring search or compute subtree hashes.
* Handle `null` inputs explicitly.
* For performance in JS, consider building serialization using an array of tokens + `join`.


# 6. TL;DR

* **Brute force:** check every node and compare subtrees → easy to write and understand, **O(N\*M)** time.
* **Optimized:** serialize trees with null markers (preorder) and search for `subRoot`'s serialized string inside `root`'s serialized string → **O(N + M)** with linear substring search (KMP) and **O(N + M)** space.


## Extra — small implementation note (JS-friendly serialization that avoids repeated string concatenation)

```js
function serialize(root) {
  const out = [];
  function dfs(node) {
    if (!node) { out.push('#'); return; }
    out.push(String(node.val));
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  return out.join(',');
}
```

This gives: `"3,4,1,#,#,2,#,#,5,#,#"` and is memory-friendly.


