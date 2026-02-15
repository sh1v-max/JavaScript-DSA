// 102. Binary Tree Level Order Traversal
// https://leetcode.com/problems/binary-tree-level-order-traversal/

// intuition:
// level order: root -> children -> grandchildren
// this is BFS< visiting nodes level by level
// we will start with the root, visit all nodes at current level
// for each node, add its children to the queue, also mark the length
// repeat until queue is empty

// approach: iterative using queue
// using queue, push root node on queue
// while queue is not empty
// create a list of current level nodes, and get the queue size
// loop nodes equal to queue size
// pop the node from the queue, add its value to the current level
// push its children to the queue
// return res

function levelOrder(root) {
  if (!root) return []

  let res = []
  let q = [root]

  while (q.length > 0) {
    // how many nodes in current level
    let levelSize = q.length
    let level = []

    for (let i = 0; i < levelSize; i++) {
      let curr = q.shift()
      level.push(curr.val)

      if (curr.left) q.push(curr.left)
      if (curr.right) q.push(curr.right)
    }

    res.push(level)
  }

  return res
}

// time: O(n)
// space: O(n)

// regular level order traversal

function levelOrder(root) {
  if (!root) return []

  let res = []
  let q = [root]

  while (q.length) {
    let curr = q.shift()
    res.push(curr.val)
    if (curr.left) q.push(curr.left)
    if (curr.right) q.push(curr.right)
  }
  return res
}

// time : O(n)
// space: O(n)
