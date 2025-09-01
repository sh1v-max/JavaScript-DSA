// 104. Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// Given a binary tree, find its maximum depth.
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     / \
//    15  7
// depth = 3.

// intuition:
// depth depends on it's subtree
// if no children, depth = 1
// else depth = 1 + max(depth of left subtree, depth of right subtree)
// we will use recursion and increase depth for every children

//? approach: recursive (DFS, bottom up)
// root is null, return 0
// create a recursive function to traverse the tree
// call recursion on left subtree
// call recursion on right subtree
// also increase the depth
// return 1 + max(depth of left subtree, depth of right subtree)

function maxDepth(root) {
  if (!root) return 0

  let left = maxDepth(root.left)
  let right = maxDepth(root.right)

  return 1 + Math.max(left, right)
}

// time complexity: O(n)
// space complexity: O(n)

//? another approach: recursive (top-down, preorder)
// we follow the depth from root downwards
// every time we reach a leaf, we'll update the maxDepth
// base case: if node is null, just return
// recursion: increment depth as we go deeper

function maxDepth(root) {
  let maxD = 0

  function dfs(node, depth) {
    if (!node) return
    if (!node.left && !node.right) {
      maxD = Math.max(maxD, depth)
    }
    dfs(node.left, depth + 1)
    dfs(node.right, depth + 1)
  }

  dfs(root, 1)
  return maxD
}

// time complexity: O(n)
// space complexity: O(n)


//? iterative approach:
// BFS (level order)
// traverse level by level using a queue
// as level process, increase depth
// return depth

function maxDepth(root) {
  if (!root) return 0

  let q = [root]
  let depth = 0

  while (q.length > 0) {
    let size = q.length
    for (let i = 0; i < size; i++) {
      let node = q.shift()
      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right)
    }
    depth++
  }
  return depth
}

// time complexity: O(n)
// space complexity: O(n)