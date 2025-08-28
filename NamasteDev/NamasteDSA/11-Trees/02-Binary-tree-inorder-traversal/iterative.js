// 94. Binary Tree Inorder Traversal
// https://leetcode.com/problems/binary-tree-inorder-traversal/

// intuition:
// inorder: left -> root -> right
// in recursion, we ideally go left until null, process root, then go right
// iteratively, we will use a stack to do same
// keep pushing nodes into stack while going left
// once left is null, pop a node from stack
// and move to the right subtree
// follow the same until we exhaust nodes and add it to res

// approach: iterative
// use stack[] and res[]
// start with curr = root
// while curr is not null keep pushing curr into stack and move left
// this ensure left is fully explored
// when curr becomes null, pop from slack and add to res
// then curr = curr.right, to move to the right subtree
// keep repeating until curr is null and stack is empty

function inorderTraversal(root) {
  if (!root) return []

  let res = []
  let stack = []
  let curr = root

  while (curr || stack.length > 0) {
    while (curr) {
      stack.push(curr)
      curr = curr.left
    }
    curr = stack.pop()
    res.push(curr.val)
    curr = curr.right
  }

  return res
}

// time complexity: O(n)
// space complexity: O(n)
