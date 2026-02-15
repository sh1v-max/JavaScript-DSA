// 144. Binary Tree Preorder Traversal
// https://leetcode.com/problems/binary-tree-preorder-traversal/

// intuition:
// preorder: root -> left -> right
// visit the current node first
// then go to the left subtree
// and then finally traverse the right subtree

//approach: recursive
// foot is null, return []
// create a recursive function to traverse the tree
// add root's value
// call recursion on left and right subtree
// return the result
// ?this is DFS

function preorderTraversal(root) {
  let res = []

  function traverse(node) {
    if (!node) return
    // root
    res.push(node.val)
    // left
    traverse(node.left)
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
// push right node first followed by left node (stack is LIFO)
// return res

function preorderTraversal(root) {
  if (!root) return []

  let res = []
  let stack = [root]

  while (stack.length > 0) {
    let node = stack.pop()
    res.push(node.val)

    // push right first
    if (node.right) stack.push(node.right)
    // then left
    if (node.left) stack.push(node.left)
  }

  return res
}

// time complexity: O(n)
// space complexity: O(n)