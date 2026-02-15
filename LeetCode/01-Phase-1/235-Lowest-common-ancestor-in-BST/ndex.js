// 235. Lowest Common Ancestor of a Binary Search Tree
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: "The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself)."

// Example 1:
// root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// - p=2 is in left, q=8 is in right, LCA = 6

//            6
//          /   \
//         2     8
//        / \   / \
//       0   4 7   9
//          / \
//         3   5
//

// Example 2:
// p=2, q=4
// - both in left subtree of 6
// - root=2 is ancestor of q=4 too, LCA=2

// intuition:
// in BST, left < root < right
// so if both p and q are less than root, LCA lies in left subtree
// if both p and q are greater than root, LCA lies in right subtree
// else root is LCA

// approach: recursive
// start at root
// if both p and q < root, go left
// if both p and q > root, go right
// else return root

var lowestCommonAncestor = function (root, p, q) {
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left)
  } else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right)
  } else {
    return root
  }
}

// time: O(log n
// space: O(h) due to recursion stack.
