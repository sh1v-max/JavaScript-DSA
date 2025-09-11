# Binary Search Tree (BST) — README (JavaScript)

> A thorough guide to Binary Search Trees: what they are, why they’re called search trees, core operations (search, insert, delete), traversals, JavaScript implementations (recursive + iterative), complexity analysis, common pitfalls, interview tips, and practice problems.

---

## 1. Overview

A **Binary Search Tree (BST)** is a special kind of binary tree that maintains an ordering invariant which makes search, insertion, and deletion efficient on average. The BST property:

* For every node `N`:

  * All values in `N.left` are **less than** `N.val`.
  * All values in `N.right` are **greater than** `N.val`.

This property is recursive — it holds at every node — and it is what makes the tree a **search tree**: you can decide to go left or right based on a comparison, just like binary search in arrays.

Why *Search Tree*?

* Because the BST property lets you discard half the remaining nodes at each comparison in a balanced tree. Starting from the root you compare the target and move left/right deterministically, the same fundamental idea as binary search.

---

## 2. When & Why use a BST

* Use a BST when you need dynamic ordered data with fast lookups, inserts, and deletes.
* Good for: ordered sets, maps (with extra value storage), sorted iteration, range queries.
* Bad when: the input is adversarial or already sorted and you use an unbalanced BST — it can degrade to a linked list (O(n)). In production, prefer balanced BSTs (AVL, Red-Black) or B-Trees for disk-backed data.

---

## 3. Basic Terminology

* **Node**: element with `val`, `left`, `right`.
* **Root**: top node.
* **Leaf**: node with no children.
* **Height**: longest path from node to a leaf (edges count).
* **Depth**: distance from root to node.
* **Balanced tree**: heights of left and right subtrees differ by at most 1 (roughly).

---

## 4. Complexity (average vs worst-case)

| Operation | Average Time | Worst-case Time |                           Space |
| --------- | -----------: | --------------: | ------------------------------: |
| Search    |     O(log n) |            O(n) | O(1) iterative / O(h) recursion |
| Insert    |     O(log n) |            O(n) |           O(1) / O(h) recursion |
| Delete    |     O(log n) |            O(n) |           O(1) / O(h) recursion |
| Traversal |         O(n) |            O(n) |                  O(h) recursion |

`h` is tree height. Balanced tree => `h ≈ log n`. Unbalanced (skewed) => `h ≈ n`.

---

## 5. Implementation — JavaScript

Below are clean, interview-ready implementations with explanations. We'll implement a simple BST (no balancing) with `insert`, `search`, `delete`, `inorder` and `levelOrder` (BFS).

> All code is plain JavaScript (ES6). Use Node.js or browser console to test.

### 5.1 Node structure

```js
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
```

### 5.2 BST class (recursive + iterative helpers)

```js
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert value (recursive)
  insert(val) {
    const insertNode = (node, val) => {
      if (!node) return new Node(val);
      if (val === node.val) return node; // ignore duplicates; modify if you want counts
      if (val < node.val) node.left = insertNode(node.left, val);
      else node.right = insertNode(node.right, val);
      return node;
    };
    this.root = insertNode(this.root, val);
  }

  // Search (recursive) — returns the node or null
  search(val) {
    const find = (node, val) => {
      if (!node) return null;
      if (val === node.val) return node;
      return val < node.val ? find(node.left, val) : find(node.right, val);
    };
    return find(this.root, val);
  }

  // Iterative search — returns boolean
  contains(val) {
    let curr = this.root;
    while (curr) {
      if (val === curr.val) return true;
      curr = val < curr.val ? curr.left : curr.right;
    }
    return false;
  }

  // Find min value node in subtree
  _minValueNode(node) {
    let current = node;
    while (current && current.left) current = current.left;
    return current;
  }

  // Delete a value (recursive) — handles 3 cases
  delete(val) {
    const deleteNode = (node, val) => {
      if (!node) return null;

      if (val < node.val) {
        node.left = deleteNode(node.left, val);
        return node;
      } else if (val > node.val) {
        node.right = deleteNode(node.right, val);
        return node;
      }

      // node.val === val -> delete this node
      // Case 1: no child
      if (!node.left && !node.right) return null;

      // Case 2: one child
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      // Case 3: two children
      // Find inorder successor (smallest in right subtree)
      const successor = this._minValueNode(node.right);
      node.val = successor.val;
      node.right = deleteNode(node.right, successor.val);
      return node;
    };

    this.root = deleteNode(this.root, val);
  }

  // Inorder traversal (left, root, right) — returns sorted array
  inorder() {
    const res = [];
    const dfs = (node) => {
      if (!node) return;
      dfs(node.left);
      res.push(node.val);
      dfs(node.right);
    };
    dfs(this.root);
    return res;
  }

  // Preorder: root, left, right
  preorder() {
    const res = [];
    (function dfs(node) {
      if (!node) return;
      res.push(node.val);
      dfs(node.left);
      dfs(node.right);
    })(this.root);
    return res;
  }

  // Postorder: left, right, root
  postorder() {
    const res = [];
    (function dfs(node) {
      if (!node) return;
      dfs(node.left);
      dfs(node.right);
      res.push(node.val);
    })(this.root);
    return res;
  }

  // Level-order traversal (BFS)
  levelOrder() {
    const res = [];
    if (!this.root) return res;
    const q = [this.root];
    while (q.length) {
      const node = q.shift();
      res.push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    return res;
  }
}
```

### 5.3 Usage example / tests

```js
// quick smoke test
const bst = new BinarySearchTree();
[8, 3, 10, 1, 6, 14, 4, 7].forEach(n => bst.insert(n));
console.log('Inorder (sorted):', bst.inorder()); // [1,3,4,6,7,8,10,14]
console.log('Contains 6?', bst.contains(6)); // true
console.log('Contains 2?', bst.contains(2)); // false

bst.delete(3); // delete node with two children
console.log('Inorder after deleting 3:', bst.inorder());
console.log('Level order:', bst.levelOrder());
```

---

## 6. Deletion — deeper explanation

Deleting a node has three possible cases:

1. **Leaf node** — simply remove it.
2. **Node with one child** — replace node with its child.
3. **Node with two children** — find **inorder successor** (smallest node in right subtree) or **inorder predecessor** (largest in left subtree), copy its value to the node to be deleted, then delete the successor from the right subtree (which will be one of the simpler cases).

Why this works: the inorder successor is the next value in sorted order, so replacing the node’s value with successor preserves the BST property.

---

## 7. Iterative Insert & Delete (notes)

* Insert can be done iteratively using a loop and keeping track of parent pointer.
* Delete iteratively is more code because you must track parent pointers and rewire child links for the three cases.

Recursive code is clearer and widely accepted for interviews unless they explicitly ask for iterative.

---

## 8. Common pitfalls & gotchas

* **Duplicate values**: Design choice — reject duplicates, store counts, or store duplicates in one side consistently.
* **Skewed trees**: Inserting sorted data into plain BST makes it O(n) ops. Use balanced trees or shuffle input.
* **Mutable objects as keys**: Don’t use mutable complex objects as keys unless you define a stable comparator.
* **Recursion depth**: Deep trees can cause stack overflow in recursion — iterative implementations or tail-call optimizations (not reliable in JS) can help.

---

## 9. Variants & Balanced BSTs

* **AVL Tree**: self-balances using rotations, keeps height O(log n).
* **Red-Black Tree**: used in many libraries (e.g., Java's TreeMap), gives amortized O(log n).
* **B-Tree / B+Tree**: used in databases and filesystems for disk-friendly indexing.

If you need an AVL or Red-Black implementation in JS, say the word — they’re longer but doable.

---

## 10. Interview Tips

* Always **state the BST property** clearly.
* Sketch a small example and show steps for insert/search/delete.
* Mention edge cases: empty tree, deleting root, deleting node with two children, duplicates.
* If asked for complexity, give **average** and **worst-case** and explain what causes degeneration.
* If the interviewer cares about worst-case, suggest balanced variants and briefly explain rotations.

---

## 11. Practice problems

* Implement `kthSmallest` (kth smallest element in BST). Hint: use inorder traversal.
* Validate if a binary tree is a BST (careful: an inorder check alone can be ambiguous if duplicates allowed — prefer min/max bounds recursion).
* Convert a sorted array into a height-balanced BST (classic divide-and-conquer).
* Merge two BSTs into a sorted list.

---

## 12. Extra: Validate BST (robust method)

```js
function isValidBST(root) {
  const helper = (node, lower = -Infinity, upper = Infinity) => {
    if (!node) return true;
    if (node.val <= lower || node.val >= upper) return false;
    return helper(node.left, lower, node.val) && helper(node.right, node.val, upper);
  };
  return helper(root);
}
```

This approach uses min/max bounds and handles edge cases correctly (including trees where nodes deep in the tree violate the invariant for ancestors).

---

## 13. References & Resources

* CLRS (for theory and balanced trees)
* LeetCode problems: `Validate Binary Search Tree`, `Kth Smallest Element in a BST`, `Convert Sorted Array to BST`, `Delete Node in a BST`.
* Wikipedia — Binary search tree, AVL tree, Red–black tree.

---

## 14. TL;DR (cheat-sheet)

* BST property: `left < node < right` (recursively).
* Best case (balanced): O(log n) for search/insert/delete. Worst-case: O(n).
* Inorder traversal -> sorted order.
* Deletion has 3 cases (no child, one child, two children — use inorder successor/predecessor).

---
