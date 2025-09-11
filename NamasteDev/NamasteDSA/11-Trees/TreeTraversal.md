# README — Tree Traversals, BFS & DFS

> A single, thorough reference for binary-tree traversals (preorder, inorder, postorder, level-order) and graph/tree search strategies (DFS, BFS). Includes recursion and iterative forms, pseudocode, fully working code examples (JavaScript), complexity analysis, common pitfalls, advanced topics (Morris traversal), and practical tips for interviews and production.

---

## 1. Introduction

Traversal = visiting every node in a particular order. In trees and graphs traversal algorithms are the backbone of many problems: searching, printing, computing aggregates, validating structure, serialization/deserialization, shortest paths (unweighted), and more.

Two broad families:

* **Depth-First Search (DFS)**: go deep before you go wide. In trees this yields preorder, inorder, and postorder orders.
* **Breadth-First Search (BFS)**: visit nodes level-by-level — implemented with a queue.

This README focuses on clear, implementable methods for each traversal, with both recursive and iterative versions (important for interviews and production where recursion depth or explicit control matters).

## 2. Quick notation and example tree

We'll use this binary tree for examples and to demonstrate results:

```
        1
      /   \
     2     3
    / \   / \
   4   5 6   7
```

So:

* pre-order (root,left,right)  -> `1 2 4 5 3 6 7`
* in-order  (left,root,right)  -> `4 2 5 1 6 3 7`
* post-order(left,right,root)  -> `4 5 2 6 7 3 1`
* level-order (BFS)            -> `1 2 3 4 5 6 7`

Keep this tree in mind while reading example outputs.

## 3. Depth-First vs Breadth-First (conceptual)

* **DFS** explores as far as possible along each branch before backing up. Implementations: recursion (natural), stack (explicit).
* **BFS** explores all neighbors at the current depth before moving deeper. Implementation: queue.

When to use each:

* Use **BFS** when you need shortest path in an unweighted graph (first time you reach target is shortest in terms of edges), or you need level-by-level processing (e.g., tree layers). BFS requires O(width) memory — worst-case O(n).
* Use **DFS** for problems like topological sorting, connected components, tree property checks (height, subtree operations), backtracking, path enumeration. DFS recursion uses O(height) stack space.

---

## 4. Preorder traversal

**Definition:** Visit node, then left subtree, then right subtree. (Root — Left — Right)

**Recursive pseudocode**:

```
preorder(node):
    if node is null: return
    visit(node)
    preorder(node.left)
    preorder(node.right)
```

**Iterative (stack) idea:** Push root. While stack not empty: pop node, visit it, then push right child (if exists), then push left child. Push right before left so left gets processed first (LIFO).

**JavaScript — recursive & iterative**:

```javascript
// Binary tree node
class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Recursive
function preorderRecursive(root, out = []) {
  if (!root) return out;
  out.push(root.val);
  preorderRecursive(root.left, out);
  preorderRecursive(root.right, out);
  return out;
}

// Iterative
function preorderIterative(root) {
  if (!root) return [];
  const stack = [root];
  const out = [];
  while (stack.length) {
    const node = stack.pop();
    out.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return out;
}
```

**Use-cases:**

* Serialization where you want parent before children.
* Cloning a tree in the same order.
* Prefix expression evaluation (expression trees).

---

## 5. Inorder traversal

**Definition:** Visit left subtree, then node, then right subtree. (Left — Root — Right)

**Why important:** For Binary Search Trees (BST), inorder traversal emits nodes in sorted ascending order.

**Recursive pseudocode**:

```
inorder(node):
    if node is null: return
    inorder(node.left)
    visit(node)
    inorder(node.right)
```

**Iterative (stack) idea:** Push all left nodes onto stack until null. Then pop, visit, and switch to the right child and repeat.

**JavaScript — recursive & iterative**:

```javascript
function inorderRecursive(root, out = []) {
  if (!root) return out;
  inorderRecursive(root.left, out);
  out.push(root.val);
  inorderRecursive(root.right, out);
  return out;
}

function inorderIterative(root) {
  const out = [];
  const stack = [];
  let curr = root;
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    out.push(curr.val);
    curr = curr.right;
  }
  return out;
}
```

**Advanced — Morris Inorder Traversal (O(1) extra space)**

```javascript
function morrisInorder(root) {
  const out = [];
  let curr = root;
  while (curr) {
    if (!curr.left) {
      out.push(curr.val);
      curr = curr.right;
    } else {
      let pred = curr.left;
      while (pred.right && pred.right !== curr) {
        pred = pred.right;
      }
      if (!pred.right) {
        pred.right = curr;
        curr = curr.left;
      } else {
        pred.right = null;
        out.push(curr.val);
        curr = curr.right;
      }
    }
  }
  return out;
}
```

**Use-cases:**

* Producing sorted order from BST.
* Infix expression evaluation for expression trees.

---

## 6. Postorder traversal

**Definition:** Visit left subtree, right subtree, then node. (Left — Right — Root)

**Why tricky:** Because you must visit children before parent, so iterative solution is less straightforward.

**Recursive pseudocode**:

```
postorder(node):
    if node is null: return
    postorder(node.left)
    postorder(node.right)
    visit(node)
```

**Iterative approaches (JavaScript)**:

```javascript
function postorderRecursive(root, out = []) {
  if (!root) return out;
  postorderRecursive(root.left, out);
  postorderRecursive(root.right, out);
  out.push(root.val);
  return out;
}

// Two-stack iterative
function postorderIterativeTwoStacks(root) {
  if (!root) return [];
  const s1 = [root];
  const s2 = [];
  while (s1.length) {
    const node = s1.pop();
    s2.push(node);
    if (node.left) s1.push(node.left);
    if (node.right) s1.push(node.right);
  }
  return s2.reverse().map(n => n.val);
}

// One-stack iterative (prev pointer)
function postorderIterativeOneStack(root) {
  const out = [];
  if (!root) return out;
  const stack = [root];
  let prev = null;
  while (stack.length) {
    const curr = stack[stack.length - 1];
    if (!prev || prev.left === curr || prev.right === curr) {
      if (curr.left) stack.push(curr.left);
      else if (curr.right) stack.push(curr.right);
      else { out.push(curr.val); stack.pop(); }
    } else if (curr.left === prev) {
      if (curr.right) stack.push(curr.right);
      else { out.push(curr.val); stack.pop(); }
    } else {
      out.push(curr.val);
      stack.pop();
    }
    prev = curr;
  }
  return out;
}
```

**Use-cases:**

* Freeing or deleting nodes bottom-up.
* Post-order is useful when you need to process children before computing parent's value (e.g., computing directory sizes, evaluating certain expressions, or generating bottom-up DP values).

---
