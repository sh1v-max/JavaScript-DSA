// 199. Binary Tree Right Side View
// https://leetcode.com/problems/binary-tree-right-side-view/

// given the root of a binary tree, return the right side view of the binary tree.

// Example 1:
// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]

// explanation:
// the right side view of the tree is [1,3,4]

// diagram:
//     1
//    / \
//   2   3
//      / \
//     5   4

// we traverse the tree level by level,
// and push the rightmost node of each level to our result array

// intuition: BFS, queue, iterative
// we want the rightmost node at each level
// we'll do a level order traversal from right to left
// first node of each level will be the rightmost node
// BFS + queue

// approach
// start bfs with the queue = [root]
// for each level, store the levelSize
// traverse nodes in that level
// the very first node we pop from the queue will be the rightmost node
// push it's right child first and then left child
// repeat until queue is empty
// return res

var rightSideView = function (root) {
  let res = []
  let q = [root]

  while (q.length) {
    // whatever will the the len of q at the moment will be the level size
    let levelSize = q.length
    for (let i = 0; i < levelSize; i++) {
      let curr = q.shift()
      if (!curr) return []

      // push children back in q in reverse order
      curr.right && q.push(curr.right) // right first
      curr.left && q.push(curr.left) // then left

      // if first element, push it to res
      if (i === 0) res.push(curr.val)
    }
  }
  return res
}

// time: O(n)
// space: O(n)

// using recursion, DFS
// recursively traversing the tree prioritizing right child

// approach
// create a recursive function to traverse the tree(curr, level)
// if curr is null, return
// also a level = res.length
// if level hasn't been seen yet, push curr.val to res
// call recursion on right first and then left, also update level
// return res

var rightSideView = function (root) {
  let res = []

  function traversal(curr, level) {
    if (!curr) return

    // if level hasn't been seen yet
    if (level === res.length) {
      res.push(curr.val)
    }

    traversal(curr.right, level + 1) //right first
    traversal(curr.left, level + 1) //and then left
  }
  traversal(root, 0)
  return res
}

// time : O(n)
// space: O(n)