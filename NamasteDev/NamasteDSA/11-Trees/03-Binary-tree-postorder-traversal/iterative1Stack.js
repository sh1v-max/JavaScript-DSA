// 145. Binary Tree Postorder Traversal
// https://leetcode.com/problems/binary-tree-postorder-traversal/

// intuition:
// postorder: left -> right -> root, we need to process node after both subtrees
// doing this using one stack, we need to keep the track of the visited nodes too
// if not, we will traverse right before processing the rood
// if yes, then we will simple process the root to the result
// so we will keep track of a pointer lastVisited to remember the last node that was processed

// approach: iterative (using one stack)
// initialize stack = [], curr = root, lastVisited = null, res = []
// curr will help traversing all left subtree
// traverse to the leftmost and push node onto stack
// peek the top node, we don't pop node before traversing the right subtree
// if the peek node already has a right subtree and the right subtree has not been visited, move to the right
// or, pop the node from stack, add the value to res, and set lastVisited to the node
// continue until stack and curr are empty
// while curr exists or stack isn't empty

function postorderTraversal(root) {
  let res = []
  let stack = []
  let curr = root
  let lastVisited = null

  while(curr || stack.length){
    // traverse left and store bal in stack
    while(curr){
      stack.push(curr)
      curr = curr.left
    }

    // peek top node
    let peekNode = stack[stack.length - 1]

    // if right child exist and not visited yet, move right
    if(peekNode.right && lastVisited !== peekNode.right){
      curr = peekNode.right
    } else {
      let node = stack.pop()
      res.push(node.val)
      // lastVisited = stack.pop() this is wrong, popping twice ins else block
      lastVisited = peekNode
    }
  }
  return res
}

// time: O(n)
// space: O(n)
