// 116. Populating Next Right Pointers in Each Node
// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/

// Given a binary tree
// struct Node {
//     int val;
//     Node *left;
//     Node *right;
//     Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
// Initially, all next pointers are set to NULL.

// example:
// Input: root = [1,2,3,4,5,6,7]
// Output: [1,#,2,3,#,4,5,6,7,#]

// Input tree:
//
//        1
//      /   \
//     2     3
//    / \   / \
//   4   5 6   7
//
// Expected next pointers:
//
//        1 → null
//      /   \
//     2 → 3 → null
//    / \   / \
//   4→ 5→ 6→ 7 → null

// Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.

// intuition:
// in perfect binary tree, each parent hand two children
// for any curr node
// curr.left.next = curr.right
// curr.right.next = curr.next.left

// approach
// define recursive function, traversal(curr)
// for each node, check
// if curr.left exist, curr.left.next = curr.right
// if curr.right exist, curr.right.next = curr.next.left
// call recursion on left and right
// return root

var connect = function (root) {
  if (!root) return root
  let traversal = (curr) => {
    // point left to right
    if (curr.left) {
      curr.left.next = curr.right
    }
    // point right to next's left
    if (curr.right && curr.next) {
      curr.right.next = curr.next.left
    }

    // calling recursion on left n right
    curr.left && traversal(curr.left)
    curr.right && traversal(curr.right)
  }
  traversal(root)
  return root
}

// time: O(n)
// space: O(h), recursion stack space, h = height of the tree
// For a perfect binary tree, h = log n.
