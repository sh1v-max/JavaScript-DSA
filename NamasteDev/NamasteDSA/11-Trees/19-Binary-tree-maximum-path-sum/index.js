// 1224. Binary Tree Maximum Path Sum
// https://leetcode.com/problems/binary-tree-maximum-path-sum/

// Given a binary tree, a path is any sequence of nodes connected by edges (each node at most once).
// The path sum is the sum of node values along the path.
// Return the max path sum of any non-empty path.
// The path does not need to pass through the root.

// Example 1:
// Input: [1,2,3]
//        1
//       / \
//      2   3
// Output: 6
// Explanation: max path is 2 → 1 → 3 → sum = 6

// Example 2:
// Input: [-10,9,20,null,null,15,7]
//         -10
//         /  \
//        9    20
//            /  \
//           15   7
// Output: 42
// Explanation: max path is 15 → 20 → 7 → sum = 42

// at every node, we will check for maxLeft, and maxRight
// we will calculate curr.val + maxLeft + maxRight
// update max
// we won't include a path containing negative sum because it will lower down the path sum

// intuition
// it's a bottom-up DFS problem
// for each node, we can choose
// 1. only the node itself
// 2. node + left subtree
// 3. node + right subtree
// 4. node + left  + right (the path through the node)
// also keeping a current max to track the max path seen
// at each node, return the max(left, right) + node
// ignore negatives

// approach
// initialize maxSumPath = -Infinity to track global max
//dDefine recursive function traversal(curr)
// - if curr is null, return 0
// - maxLeft = max(0, traversal(curr.left)), ignore negative sums
// - maxRight = max(0, traversal(curr.right)), ignore negative sums
// - currMax = curr.val + maxLeft + maxRight, path sum through current node
// - maxSumPath = max(currMax, maxSumPath), update global max
// - return curr.val + max(maxLeft, maxRight), max sum extending to parent
// call traversal(root)
// return maxSumPath

var maxPathSum = function(root){
  let maxSum = -Infinity

  let traversal = (curr) => {
    if(!curr) return 0

    // max from left n right, ignoring negatives
    let maxLeft = Math.max(0, traversal(curr.left))
    let maxRight = Math.max(0, traversal(curr.right))

    // max sum through curr node
    let currMax = curr.val + maxLeft + maxRight
    maxSum = Math.max(currMax, maxSum)

    // returning max sum
    return curr.val + Math.max(maxLeft, maxRight)
  }
  traversal(root)
  return maxSum
}

// time: O(n)
// space: O(n)