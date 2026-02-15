// 145. Binary Tree Postorder Traversal
// https://leetcode.com/problems/binary-tree-postorder-traversal/

// intuition:
// postorder: left -> right -> root
// visit the left subtree first
// then go to the right subtree
// and then finally traverse the root subtree

//approach: recursive
// foot is null, return []
// create a recursive function to traverse the tree
// call recursion on left subtree
// call recursion on right subtree
// add root's value
// return the result

function postorderTraversal(root) {
  let res = []

  function traverse(node) {
    if (!node) return
    // left
    traverse(node.left)
    // right
    traverse(node.right)
    // root
    res.push(node.val)
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
// push left node first followed by right node followed by root (stack is LIFO)
// return res

function postorderTraversal(root) {
  if (!root) return []

  let res = []
  let stack = [root]

  while (stack.length > 0) {
    let node = stack.pop()
    // push root first
    res.unshift(node.val)
    // push left first
    if (node.left) stack.push(node.left)
    // then right
    if (node.right) stack.push(node.right)
  }

  return res
}

// time complexity: O(n)
// space complexity: O(n)
