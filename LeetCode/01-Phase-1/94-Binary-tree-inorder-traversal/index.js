// 94. Binary Tree Inorder Traversal
// https://leetcode.com/problems/binary-tree-inorder-traversal/

// intuition:
// inorder: left -> root -> right
// visit the left subtree first
// then visit the current node
// and then finally traverse the right subtree

//approach: recursive
// foot is null, return []
// create a recursive function to traverse the tree
// call recursion on left subtree
// add root's value
// call recursion on right subtree
// return the result
// ?this is DFS

function inorderTraversal(root) {
  let res = []

  function traverse(node) {
    if (!node) return
    // left
    traverse(node.left)
    // root
    res.push(node.val)
    // right
    traverse(node.right)
  }

  traverse(root)
  return res
}

// time complexity: O(n)
// space complexity: O(n)

// approach: iterative
// using stack, push root node on stack
// while stack is not empty
// pop from the top of stack, this will be the current node
// add the val to the res
// push left node first followed by right node (stack is LIFO)
// return res

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
