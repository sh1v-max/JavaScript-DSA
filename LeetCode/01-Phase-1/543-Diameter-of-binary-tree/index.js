// 543. Diameter of Binary Tree
// https://leetcode.com/problems/diameter-of-binary-tree/

// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.

// Example 1:
// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

// intuition:
// the longest path must pass through some node
// for any node, the longest path that passes through it is:
// max left subtree height + max right subtree height
// so we will find the height of each node's subtree and track
// max(leftHeight + rightHeight)
// this will give us the longest path

// approach: recursive (bottom up)
// create a recursive fun to find height of each
// if node is null, return 0
// recursively find leftHeight and rightHeight
// update diameter = max(diameter, leftHeight + rightHeight)
// return 1 + max(leftHeight, rightHeight) as height of current node
// after recursion finishes, return diameter

function diameterOfBinaryTree(root) {
  let maxDiameter = 0
  let findDepth = (curr) => {
    if(!curr) return 0
    
    let leftDepth = findDepth(curr.left)
    let rightDepth = findDepth(curr.right)

    let currDiameter = leftDepth + rightDepth
    maxDiameter = Math.max(maxDiameter, currDiameter)
    
    return 1 + Math.max(leftDepth, rightDepth)
  }
  findDepth(root)
  return maxDiameter
}
