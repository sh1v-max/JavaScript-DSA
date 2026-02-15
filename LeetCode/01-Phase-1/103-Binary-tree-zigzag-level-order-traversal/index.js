// 103. Binary Tree Zigzag Level Order Traversal
// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/

// given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between)

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]

// Example 2:
// Input: root = [1]
// Output: [[1]]

// intuition:
// a level order traversal, with change in order for alternate levels

// approach: iterative BFS, queue
// queue to process nodes level by level
// also maintaining level count
// for each level
// create a levelArr to store current level nodes
// if level is even, push normally
// if level is odd, push at the front using unshift
// add levelArr to the result

function zigzagLevelOrder(root) {
  if (!root) return []
  let res = []
  let q = [root]
  let level = 0

  while (q.length) {
    let levelArr = []
    let levelSize = q.length

    for (let i = 0; i < levelSize; i++) {
      let curr = q.shift()
      if (level % 2 == 0) {
        levelArr.push(curr.val)
      } else {
        levelArr.unshift(curr.val)
      }
      curr.left && q.push(curr.left)
      curr.right && q.push(curr.right)
    }
    res.push(levelArr)
    level++
  }
  return res
}

// time: O(n)
// space: O(n)

// another approach: using recursion

// intuition:
// a level order traversal, with change in order for alternate levels
// we will use recursion with level tracking

// approach:
// define recursion fun traversal(curr, level)
// base case: if node is null, return
// if res[level] doesn't exist, initialize it as []
// if level is even, push normally
// if level is odd, push at the front using unshift
// recursively call traversal(node.left, level+1) and traversal(node.right, level+1)
// return res

function zigzagLevelOrder(root) {
  res = []
  function traversal(curr, level) {
    if (!curr) return
    if (!res[level]) res[level] = []
    if (level % 2 == 0) {
      res[level].push(curr.val)
    } else {
      res[level].unshift(curr.val)
    }
    traversal(curr.left, level + 1)
    traversal(curr.right, level + 1)
  }
  traversal(root, 0)
  return res
}

// time: O(n)
// space: O(n)