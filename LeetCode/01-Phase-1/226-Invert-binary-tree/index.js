// 226. Invert Binary Tree
// https://leetcode.com/problems/invert-binary-tree/

// given the root of a binary tree, invert the tree, and return its root.

// Example 1:
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// Explanation:
// The tree will look like this:
//     4
//   /   \
//  7     2
// / \   / \
//1   3 6   9
// to
//     4
//   /   \
//  9     2
// / \   / \
//6   3 1   7

// intuition:
// swap left and right subtree, pointers are swapped not the values
// A.left becomes A.right, and A.right becomes A.left

// approach:
// check whether the root is null or not
// go the the left most node of tree using recursion and store node
// go to the right most node of tree using recursion and store node
// swap both stored nodes
// return root

function invertTree(root) {
  if(!root) return root
  
  let temp = root.left
  root.left = root.right
  root.right = temp

  invertTree(root.left)
  invertTree(root.right)

  return root
}

// time complexity: O(n)
// space complexity: O(n)