// 102. Binary Tree Level Order Traversal
// https://leetcode.com/problems/binary-tree-level-order-traversal/

// intuition:
// level order = root → children → grandchildren
// it's BFS traversal, but recursion is DFS by nature
// to simulate BFS recursively, we need to track "level" of each node
// we can do this by passing level index in recursion
// at each call, we insert the node's value into res[level]
// if res[level] doesn't exist, create a new array for that level
// recursively call for left and right child with level + 1

// approach: recursive DFS with level tracking
// define helper function dfs(node, level)
// base case: if node is null, return
// if res[level] doesn't exist, initialize it as []
// push node.val into res[level]
// recursively call dfs(node.left, level+1) and dfs(node.right, level+1)
// return res

function levelOrder(root) {
  let res = []

  function traversal(curr, level) {
    if (!curr) return
    // creating level
    if (!res[level]) res[level] = []
    res[level].push(curr.val)

    traversal(curr.left, level + 1)
    traversal(curr.right, level + 1)
  }
  traversal(root, 0)
  return res
}

// time: O(n)
// space: O(n)

// general level order traversal using recursion
// no modified solution

// intuition:
// level order traversal means visiting nodes level by level from top to bottom
// normally done with BFS (queue), but we can simulate it recursively
// idea: compute the height of the tree
// then for each level, collect all nodes at that level using recursion
// repeat until all levels are visited

// approach: recursive
// step 1: find the height of the tree
// step 2: for each level from 1 to height
//    call a helper function that collects nodes at that level
// helper(level, node, res):
//    if node is null, return
//    if level == 1 → push node value to res
//    else → recursively call helper for left and right child with level - 1

function levelOrder(root) {
  if (!root) return []

  let res = []

  // function to find height
  function height(node) {
    if (!node) return 0
    return 1 + Math.max(height(node.left), height(node.right))
  }

  // helper to get nodes at given level
  function getLevel(node, level, arr) {
    if (!node) return
    if (level === 1) arr.push(node.val)
    else {
      getLevel(node.left, level - 1, arr)
      getLevel(node.right, level - 1, arr)
    }
  }

  let h = height(root)
  for (let i = 1; i <= h; i++) {
    getLevel(root, i, res)
  }

  return res
}

// time: O(n^2)
// space: O(n)