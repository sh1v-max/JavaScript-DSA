// 701. Insert into a Binary Search Tree
// https://leetcode.com/problems/insert-into-a-binary-search-tree/

// You are given the root node of a binary search tree (BST) and a value to insert into the tree.
// Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.
// Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion.
// You can return any of them.

// Example 1:
// Input: root = [4,2,7,1,3], val = 5
// Output: [4,2,7,1,3,5]

// Before insertion:
//            4
//          /   \
//         2     7
//        / \
//       1   3

// Insert val = 5
// - Compare 5 with 4, 5 > 4, go right
// - Compare 5 with 7, 5 < 7, go left
// - Left of 7 is empty, insert here

// After insertion:
//            4
//          /   \
//         2     7
//        / \   /
//       1   3 5

// can also be:
//            5
//          /   \
//         2     7
//        / \
//       1   3
//            \
//             4
// The BST property is preserved.

// Example 2:
// Input: root = [40,20,60,10,30,50,70], val = 25
// Output: [40,20,60,10,30,50,70,null,null,25]
//
// Before insertion:
//              40
//            /    \
//          20      60
//         / \     /  \
//       10  30   50   70
//
// Insert val = 25
// - 25 < 40, go left
// - 25 > 20, go right
// - 25 < 30, go left
// - Left of 30 is empty, insert here
//
// After insertion:
//              40
//            /    \
//          20      60
//         / \     /  \
//       10  30   50   70
//           /
//         25

// intuition:
// a Binary Search Tree (BST) is already sorted by structure:
// - if val < node, it belongs in the left subtree
// - if val > node, it belongs in the right subtree
//
// so inserting a new value means we just "walk down the tree"
// until we find the right empty spot (null), and then insert it there.

// example: root = [4,2,7,1,3], val = 5
// - compare with 7, go left
// - compare with 4, go right
// - empty spot, insert node with value 5

// this is just like searching for a value in BST, but instead of failing
// when reaching null, we insert a new node

// approach: recursion, bottom up
// start from root
// if root is null, create a new node and return it
// if val < root.val, go left
// if val > root.val, go right
// return root

var insertIntoBST = function (root, val) {
  // returning the new root when we hit null
  if (!root) return new TreeNode(val)

  // if val is greater, go right
  if (root.val < val) {
    root.right = insertIntoBST(root.right, val)
  } else {
    // go left
    root.left = insertIntoBST(root.left, val)
  }
  return root
}

// time: O(h) → h is the height of tree
//   - worst case: O(n) (skewed tree)
//   - best case: O(log n) (balanced tree)
// space: O(h) → recursion stack

// approach 2: iterative
// use a stack to simulate the recursion
// keep a pointer prev that remembers the previously visited node
// traverse the tree inorder:
// go as left as you can visit the node, and then go right
// every time you visit a node:
// compare its value with prev
// if it’s smaller or equal, return false
// if you finish without problems, return true

var isValidBST = function (root) {
  if (!root) return true

  let stack = []
  let prev = null
  let curr = root

  while (stack.length > 0 || curr !== null) {
    // go left
    while (curr !== null) {
      stack.push(curr)
      curr = curr.left
    }

    // pop the leftmost node
    curr = stack.pop()

    // if previous node exists and its value is >= curr, not BST
    if (prev !== null && curr.val <= prev.val) {
      return false
    }
    // move prev to curr
    prev = curr

    // go right
    curr = curr.right
  }

  return true
}

// time: O(h)
// space: O(1)
