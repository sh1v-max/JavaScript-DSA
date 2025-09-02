// 112. Path Sum
// https://leetcode.com/problems/path-sum/

// Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

// Note: A leaf is a node with no children.

// Example:

// Given the below binary tree and sum = 22,  
//               5
//              / \
//             4   8
//            /   / \
//           11  13  4
//          /  \      \
//         7    2      1
// return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

// top down approach

// intuition:
// from root to leaf, calculating the remaining sum
// at every child, we calculate the sum so far
// when at leaf, and sum of leaf + currSum = target, return true

// approach:
// if tree = empty, return false
// create a recursive function to traverse the tree, traversal(curr, currSum)
// update currSum by adding the current node's val
// if at a leaf, check whether currSum == target
// call recursion on left and right
// return the result

function hasPathSum (root, target) {
  if(!root) return false
  let res = false
  function traversal(curr, currSum){
    let newSum = currSum + curr.val
    // corner case, and leaf
    if(!curr.left && !curr.right){
      if(newSum === target){
        res = res || true
      }
    }
    curr.left && traversal(curr.left, newSum)
    curr.right && traversal(curr.right, newSum)
  }
  traversal(root, 0)
  return res
}

// time: O(n)
// space: O(n)

// bottom up approach

// intuition:
// based on the fact that when the sum of branch is equals to sum, the remaining sum is 0
// or, remaining sum will equal to the value of the current node
// now, for a leaf if the remaining sum is equals to its value, return true

// approach:
// if tree = empty, return false
// if node is a leaf, check node.val === targetSum
// call recursion on left and right
// return true if either side is true

function hasPathSum (root, targetSum){
  if(!root) return false

  // checking for the val at leaf node
  if(!root.left && !root.right){
    return root.val === targetSum
  }

  let leftSubTreeHasPathSum = hasPathSum(root.left, targetSum - root.val)
  let rightSubTreeHasPathSum = hasPathSum(root.right, targetSum - root.val)

  return leftSubTreeHasPathSum || rightSubTreeHasPathSum
}

// time: O(n)
// space: O(n)