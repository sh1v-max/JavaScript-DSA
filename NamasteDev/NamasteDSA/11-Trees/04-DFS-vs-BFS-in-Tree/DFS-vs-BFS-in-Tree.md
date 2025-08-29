# 🌳 BFS vs DFS in Trees

## 📌 What is BFS (Breadth-First Search)?

* Visits nodes **level by level** (top → bottom, left → right).
* Uses a **queue (FIFO)**.
* Good for: shortest path in unweighted trees/graphs, level-order problems.

### Example tree

```
        1
       / \
      2   3
     / \ / \
    4  5 6  7
```

### BFS order

```
1 → 2 → 3 → 4 → 5 → 6 → 7
```

### BFS (JS)

```js
function bfs(root) {
  if (!root) return []
  const q = [root]
  const res = []

  while (q.length) {
    const node = q.shift()         // dequeue
    res.push(node.val)
    if (node.left)  q.push(node.left)
    if (node.right) q.push(node.right)
  }
  return res
}
```

## 📌 What is DFS (Depth-First Search)?

* Goes **as deep as possible** on one branch before backtracking.
* Uses **stack (LIFO)** or recursion (implicit call stack).
* Common orders in binary trees:

  * **Preorder**  — Root → Left → Right
  * **Inorder**   — Left → Root → Right
  * **Postorder** — Left → Right → Root
* Good for: problems needing full exploration of paths, expression trees, backtracking.

### DFS orders on the example tree

* **Preorder:**  `1 → 2 → 4 → 5 → 3 → 6 → 7`
* **Inorder:**   `4 → 2 → 5 → 1 → 6 → 3 → 7`
* **Postorder:** `4 → 5 → 2 → 6 → 7 → 3 → 1`

### Recursive inorder (JS)

```js
function inorder(root) {
  const res = []
  function dfs(node) {
    if (!node) return
    dfs(node.left)
    res.push(node.val)
    dfs(node.right)
  }
  dfs(root)
  return res
}
```

### Iterative inorder (JS) — explains `while (stack.length || curr)`

```js
function inorderIter(root) {
  const res = []
  const stack = []
  let curr = root

  // continue while there is a current node OR nodes saved in stack
  while (stack.length || curr) {
    while (curr) {
      stack.push(curr)
      curr = curr.left
    }
    curr = stack.pop()
    res.push(curr.val)
    curr = curr.right
  }
  return res
}
```

`while (stack.length || curr)` means: *keep going while there's a node to explore right now (`curr`) or there are saved nodes to come back to (`stack`)*. Both must be empty to finish.

## 🔍 Step-by-step ASCII "animation" (see the visit order)

Use the example tree (same as above).

### BFS (level order) — frames showing visited nodes (V = visited)

Frame 1: `V: 1`
Frame 2: `V: 1  |  Next level queue: 2 3`
Frame 3: `V: 1 2 3`
Frame 4: `V: 1 2 3 4 5 6 7`
Final order: `1 → 2 → 3 → 4 → 5 → 6 → 7`

### Preorder DFS — dive-first frames

Start at root:

1. Visit `1` → \[1]
2. Go left → Visit `2` → \[1,2]
3. Go left → Visit `4` → \[1,2,4] (no left/right → backtrack)
4. Back to `2`, go right → Visit `5` → \[1,2,4,5]
5. Back to root, go right → Visit `3` → \[1,2,4,5,3]
6. `3` left → Visit `6` → \[1,2,4,5,3,6]
7. `3` right → Visit `7` → \[1,2,4,5,3,6,7]
   Order: `1 → 2 → 4 → 5 → 3 → 6 → 7`

### Inorder DFS — left, root, right frames

1. Go to leftmost: Visit `4` → \[4]
2. Up to `2` → Visit `2` → \[4,2]
3. `2` right → Visit `5` → \[4,2,5]
4. Back to root → Visit `1` → \[4,2,5,1]
5. Root right → leftmost `6` → Visit `6` → \[4,2,5,1,6]
6. Up to `3` → Visit `3` → \[4,2,5,1,6,3]
7. `3` right → Visit `7` → \[4,2,5,1,6,3,7]
   Order: `4 → 2 → 5 → 1 → 6 → 3 → 7`

### Postorder DFS — left, right, root frames

1. Left subtree fully: `4, 5, 2`
2. Right subtree fully: `6, 7, 3`
3. Root last: `1`
   Order: `4 → 5 → 2 → 6 → 7 → 3 → 1`

## 🔑 Difference Between BFS and DFS

| Aspect               | BFS                              | DFS                                                     |
| -------------------- | -------------------------------- | ------------------------------------------------------- |
| **Data Structure**   | Queue (FIFO)                     | Stack (LIFO) / Recursion (Call stack)                   |
| **Traversal Style**  | Level-by-level                   | Depth-first (down one branch fully)                     |
| **Order Example**    | 1 → 2 → 3 → 4 → 5 → 6 → 7        | Preorder: 1 → 2 → 4 → 5 → 3 → 6 → 7                     |
| **Space Complexity** | O(width of tree) = O(n) worst    | O(height of tree), O(log n) in balanced, O(n) in skewed |
| **Time Complexity**  | O(n)                             | O(n)                                                    |
| **Best Use Case**    | Shortest path in unweighted tree | Path finding, recursion problems                        |

## ⚖️ Complexity (summary)

* **Time (BFS / any DFS):** `O(n)` — every node visited once.
* **Space:** depends:

  * **BFS:** O(width of tree) — worst-case O(n) (last level can hold \~n/2 nodes).
  * **DFS (recursive):** O(height of tree) — O(log n) for balanced, O(n) for skewed.
  * **DFS (iterative stack):** same as recursive stack bound.

## ✅ Interview-ready one-liners (say them)

* “BFS is level-order using a queue; DFS is depth-first using recursion/stack.”
* “Both are O(n) time. Space differs: BFS uses O(max width), DFS uses O(max depth).”
* “Sequential loops add (2n → O(n)); nested loops multiply (n×n → O(n²)).” — (use this if the interviewer pushes on complexity too)

## ❌ Common mistakes / gotchas

* Saying BFS is `O(n²)` — no. Time is O(n). Space can be O(n) worst-case.
* Confusing *order of visitation* (pre/in/post) with BFS. They’re DFS variants.
* Ignoring skewed trees: recursion stack may blow to O(n).

## ⚡ Quick mental map (memorize this)

* BFS → queue → level by level → shortest-path tasks → space = width
* DFS → stack/recursion → deep-first → path/structure tasks → space = depth
* Both time = O(n)

## Bonus: Practical tip

When asked “when would you use BFS vs DFS?” answer with a scenario:

* “Use BFS for shortest path in unweighted graphs or when you need the nearest solution. Use DFS when you need to explore all possible solutions or when memory is tight and the tree is expected to be shallow.”

If you want, I can:

* Turn this into a single-file `README.md` formatted exactly for GitHub (with badges and TOC).
* Or add diagram images (PNG/SVG) — I’ll generate ASCII-to-image if you want visuals to embed. Which one?
