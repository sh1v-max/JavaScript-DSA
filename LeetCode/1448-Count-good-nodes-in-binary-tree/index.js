// 1448. Count Good Nodes in Binary Tree
// https://leetcode.com/problems/count-good-nodes-in-binary-tree/

// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

// Return the number of good nodes in the binary tree.

// Example 1:
// Input: root = [3,1,4,3,null,1,5]
// Output: 4
//
//                 (3)
//                /   \
//               1    (4)
//              /     / \
//            (3)    1  (5)

// explanation:
// Nodes in () are good
// Root Node (3) is always a good node.
// Node 4 -> (3,4) is the maximum value in the path starting from the root.
// Node 5 -> (3,4,5) is the maximum value in the path
// Node 3 -> (3,1,3) is the maximum value in the path.

// example 2:
// Input: root = [3,3,null,4,2]
// Output: 3
//
//                 (3)
//                /
//              (3)
//              /  \
//            (4)   2

// Node 2 -> (3, 3, 2) is not good, because "3" is higher than it.
// Node 4 -> (3, 3, 4) is good.

// intuition: top-down DFS, recursive approach
// a node is good if its value is greater than on qual to all values on the part from root to that node
// we'll traverse from top to bottom, and store the maxValSeen so far
// if node.val >= maxValSeen, that's good node, count ++

// approach:
// start dfs from root, with maxValSeen = -Infinity
// at each node, if node.val >= maxValSeen, maxValSeen = node.val, count ++
// update newMax = Math.max(maxValSeen, node.val)
// call recursion on left and right with newMax
// return count

var goodNodes = function (root) {
  let res = 0
  let traversal = (curr, maxValSeen) => {
    // as it's top-down approach, logic before calling recursion
    if (curr.val >= maxValSeen) {
      res++
    }
    let newMax = Math.max(maxValSeen, curr.val)
    if (curr.left) traversal(curr.left, newMax)
    if (curr.right) traversal(curr.right, newMax)
  }
  traversal(root, -Infinity)
  return res
}

// time: O(n)
// space: O(n)