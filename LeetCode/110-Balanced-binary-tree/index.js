// 110. Binary Tree Level Order Traversal
// https://leetcode.com/problems/balanced-binary-tree/description/

// Given a binary tree, determine if it is height-balanced.
// For this problem, a height-balanced binary tree is defined as:
// a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: true

// Explanation:
// The tree is balanced:
//   3
//  / \
// 9  20
//    /  \
//   15   7
// The height difference of the two subtrees is 1.

// Example 2:
// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false

// Explanation:
// The tree is not balanced:
//        1
//       / \
//      2  2
//     / \
//    3  3
//   / \
//  4  4
// The height difference of the two subtrees is 2, which is more than 1.

// intuition:
// a tree is balanced if height diff of left and right subtree is <= 1
// so for each node, we need to know,
// height of left and right subtree or the current node
// we will check the height diff, if > 1, return false
// if both subtrees are balanced, return true

// approach: recursive (bottom up)
// store res
// using recursion to calculate height of each subtree
// if node is null, return 0
// if height diff is > 0, set res to false
// return 1 + max(leftHeight, rightHeight)
// after recursion finish, return res

function isBalanced(root) {
  let res = true
  let calcHeight = (curr) => {
    if (!curr) return 0
    let lHeight = calcHeight(curr.left)
    let rHeight = calcHeight(curr.right)
    if (Math.abs(lHeight - rHeight) > 1) {
      res = res && false
    }
    return 1 + Math.max(lHeight, rHeight)
  }
  calcHeight(root)
  return res
}

// time complexity: O(n)
// space complexity: O(n)