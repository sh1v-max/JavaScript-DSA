// 101. Symmetric Tree
// https://leetcode.com/problems/symmetric-tree/

//  given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false

// intuition:
// we'll use queue to compare nodes level by level
// push mirrored node pairs into the queue
// at each step check if they match, also other required conditions

// approach: iterative (BFS using queue)
// q with [root.left, root.right]
// run until queue is empty
// pop two nodes from the queue and check
// if both are null, continue
// if one is null or diff val, return false
// add children in mirror order
// t1.left, t2.right and t1.right, t2.left
// return true

function isSymmetric(root) {
  let q = [root.left, root.right]

  while (q.length) {
    let t1 = q.shift()
    let t2 = q.shift()

    if (!t1 && !t2) continue
    // continue means, it skip rest of the step and start next iteration
    if (!t1 || !t2) return false
    if (t1.val != t2.val) return false

    q.push(t1.left, t2.right)
    q.push(t1.right, t2.left)
  }
  return true
}
