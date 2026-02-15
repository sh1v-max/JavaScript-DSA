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
// it's symmetric if left is the mirror of right subtree
// left child === right child

// approach: recursive (bottom up)
// create a recursive function which check
// both nodes are null, return true
// if one is null, return false
// if values are not equal, return false
// call recursion check on:
// left.left === right.right
// left.right === right.left

function isSymmetric (root){
  if(!root) return true

  function isMirror(left, right){
    // base and corner cases
    if(!left && !right) return true
    if(!left || !right) return false
    if(left.val !== right.val) return false
    
    // calling recursion
    return isMirror(left.left, right.right) && 
    isMirror(left.right, right.left)
  }
  return isMirror(root.left, root.right)
}