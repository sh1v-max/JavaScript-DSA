# Trees in DSA

## Table of Contents

1. [What is a Tree?](#what-is-a-tree)
2. [Why Learn Trees?](#why-learn-trees)
3. [Basic Terminology](#basic-terminology)
4. [Binary Trees](#binary-trees)
5. [Tree Representation](#tree-representation)
6. [Tree Traversals](#tree-traversals)
7. [Building a Simple Binary Tree](#building-a-simple-binary-tree)
8. [Binary Search Tree (BST) Basics](#binary-search-tree-bst-basics)
9. [Common Problems on Trees](#common-problems-on-trees)
10. [Complexities](#complexities)
11. [Key Takeaways](#key-takeaways)


## What is a Tree?

A **tree** is a way of organizing data in a **hierarchical** structure.

* Think of a **family tree** or a **company organization chart**.
* At the top is a **root** (like the CEO).
* Each person (node) may have **subordinates/children**.
* Nodes without subordinates are called **leaves**.

**Important:** Unlike general graphs, trees do **not** have cycles (no round-trips back to the same node).


## Why Learn Trees?

Trees are everywhere:

* File systems (folders inside folders)
* HTML DOM structure (nested tags)
* Databases (indexes)
* Search algorithms (like BST)
* Priority queues (heaps)
* Auto-complete (tries)

If you understand trees, you unlock solutions to a huge number of problems in programming and interviews.


## Basic Terminology

* **Node**: An element in the tree.
* **Root**: The top-most node (like `C:` in Windows directory).
* **Parent**: A node that has children.
* **Child**: A node connected below a parent.
* **Leaf**: A node with no children.
* **Height**: Number of edges in the longest path from the root to a leaf.
* **Depth**: Distance of a node from the root.

Example:

```
        A (root)
       / \
      B   C
     / \    \
    D   E    F (leaf)
```

* Root = A
* Parent of B = A
* Children of B = D, E
* Leaves = D, E, F
* Depth of D = 2 (A → B → D)


## Binary Trees

A **binary tree** is a special type of tree where:

* Each node has at most **2 children**.
* Children are usually called `left` and `right`.

Why binary trees?

* They are simple to implement.
* They are the foundation for BST, heaps, and more.


## Tree Representation

In JavaScript, we can represent a binary tree node as a class:

```js
class TreeNode {
  constructor(val) {
    this.val = val;     // value of the node
    this.left = null;   // left child
    this.right = null;  // right child
  }
}
```

Example: Creating a tree manually

```js
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
```

This represents:

```
        1
       / \
      2   3
     / \
    4   5
```


## Tree Traversals

Tree traversal = visiting all nodes in some order.

### Depth First Search (DFS)

1. **Preorder (Node → Left → Right)**

```js
function preorder(root) {
  if (!root) return;
  console.log(root.val);
  preorder(root.left);
  preorder(root.right);
}
```

2. **Inorder (Left → Node → Right)**

```js
function inorder(root) {
  if (!root) return;
  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
}
```

3. **Postorder (Left → Right → Node)**

```js
function postorder(root) {
  if (!root) return;
  postorder(root.left);
  postorder(root.right);
  console.log(root.val);
}
```

### Breadth First Search (BFS)

Also called **level order traversal** (visit level by level).

```js
function levelOrder(root) {
  if (!root) return;
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    console.log(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}
```


## Building a Simple Binary Tree

Instead of manually linking, we can build from an array:

```js
function buildTree(arr, index = 0) {
  if (index >= arr.length || arr[index] === null) return null;
  const node = new TreeNode(arr[index]);
  node.left = buildTree(arr, 2 * index + 1);
  node.right = buildTree(arr, 2 * index + 2);
  return node;
}

const root = buildTree([1,2,3,4,5,null,6]);
```

This gives:

```
        1
       / \
      2   3
     / \    \
    4   5    6
```


## Binary Search Tree (BST) Basics

A **BST** is a binary tree with a special rule:

* Left child < Parent < Right child

### Insert in BST

```js
function insertBST(root, val) {
  if (!root) return new TreeNode(val);
  if (val < root.val) root.left = insertBST(root.left, val);
  else root.right = insertBST(root.right, val);
  return root;
}

let bst = null;
bst = insertBST(bst, 5);
bst = insertBST(bst, 3);
bst = insertBST(bst, 7);
```


## Common Problems on Trees

* **Find height of tree**

```js
function height(root) {
  if (!root) return 0;
  return 1 + Math.max(height(root.left), height(root.right));
}
```

* **Count total nodes**

```js
function countNodes(root) {
  if (!root) return 0;
  return 1 + countNodes(root.left) + countNodes(root.right);
}
```

* **Search in BST**

```js
function searchBST(root, val) {
  if (!root) return null;
  if (val === root.val) return root;
  if (val < root.val) return searchBST(root.left, val);
  return searchBST(root.right, val);
}
```


## Complexities

* Traversal = `O(n)` (visit all nodes)
* Height calculation = `O(n)`
* Insert/Search in **BST**:

  * Best/Average: `O(log n)`
  * Worst (skewed tree): `O(n)`


## Key Takeaways

* A tree is a hierarchical structure with parent-child relationships.
* Binary tree = max 2 children.
* Traversals are **Preorder, Inorder, Postorder, BFS**.
* BST adds ordering → efficient search & insert.
* Always practice by drawing small trees and tracing traversals.
