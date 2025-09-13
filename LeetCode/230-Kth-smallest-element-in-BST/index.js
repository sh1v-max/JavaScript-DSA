// 230. Kth Smallest Element in a BST
// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

// example 1:
// Input: root = [3,1,4,null,2], k = 1
// Output: 1
//   3
//  / \
// 1   4
//  \
//   2

// example 2:
// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3
//       5
//      / \
//     3   6
//    / \
//   2   4
//  /
// 1

// intuition
// we know that inorder traversal of BST gives sorted order
// so we can do inorder traversal and keep a count of nodes visited
// when count reaches k, we return the node's value

// approach: recursive inorder traversal till kth element
// perform inorder traversal, l -> root -> r
// maintain a counter  = 0
// increase counter when visiting a node
// when counter == k, stop traversing
// return that node's value

var kthSmaller = function (root, k) {
  let res = null
  let count = k
  let traversal = (curr) => {
    // exiting right after we find the res
    if(res != null) return
    curr.left && traversal (curr.left)
    count--
    if(count == 0){
      res = curr.val
    }
    curr.right && traversal(curr.right)
  }
  traversal (root)
  return res
}

// time complexity: o(h + k) in balanced tree ≈ o(k)
// - because we only traverse until kth node is found, not entire tree.
// - worst case (skewed tree): o(n).
// space complexity: o(h) due to recursion stack, where h = height of tree.
